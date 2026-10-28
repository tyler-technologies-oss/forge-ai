import { consume } from '@lit/context';
import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type {
  IToolRenderer,
  McpAppDisplayMode,
  McpAppHostCapabilities,
  McpAppHostContext,
  McpModelContextUpdateParams,
  ToolCall
} from '../../ai-chatbot';
import { McpAppBridge } from './mcp-app-bridge.js';
import { mcpAppHostContext, type McpAppHost } from './mcp-app-context.js';
import { McpAppBridgeController, enforcedPermissions, type McpAppHandlers } from './mcp-app-bridge-controller.js';

import '../../ai-empty-state/ai-empty-state.js';

import styles from './ai-mcp-app.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-mcp-app': McpAppToolElement;
  }

  interface HTMLElementEventMap {
    'forge-ai-mcp-app-open-link': CustomEvent<{ url: string }>;
    'forge-ai-mcp-app-message': CustomEvent<{ content: unknown; role: string }>;
    'forge-ai-mcp-app-logging-message': CustomEvent<unknown>;
    'forge-ai-mcp-app-request-display-mode': CustomEvent<{ mode: McpAppDisplayMode }>;
    'forge-ai-mcp-app-update-model-context': CustomEvent<McpModelContextUpdateParams>;
  }
}

const HOST_INFO = { name: 'forge-ai', version: '1.0.0' } as const;

/**
 * Renders an MCP-app UI resource stamped onto a {@link ToolCall} as a sandboxed,
 * cross-origin widget. The iframe + bridge are mounted once and survive every `toolCall`
 * delta (Lit reuses this node at its keyed position), so args stream live without
 * remounting.
 *
 * The cross-origin sandbox is mandatory: when no `sandboxUrl` is available the element
 * renders an error artifact rather than an insecure same-origin iframe.
 *
 * @tag forge-ai-mcp-app
 * @internal
 *
 * @event {CustomEvent<{ url: string }>} forge-ai-mcp-app-open-link - Fired when the app requests to open a link
 * @event {CustomEvent<{ content: unknown; role: string }>} forge-ai-mcp-app-message - Fired when the app sends a message
 * @event {CustomEvent<unknown>} forge-ai-mcp-app-logging-message - Fired when the app sends a logging message
 * @event {CustomEvent<{ mode: McpAppDisplayMode }>} forge-ai-mcp-app-request-display-mode - Fired when the app's display mode changes
 * @event {CustomEvent<McpModelContextUpdateParams>} forge-ai-mcp-app-update-model-context - Fired when the app updates model context; detail carries `toolCallId`, `content` and `structuredContent`
 */
@customElement('forge-ai-mcp-app')
export class McpAppToolElement extends LitElement implements IToolRenderer {
  public static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  @consume({ context: mcpAppHostContext, subscribe: true })
  @property({ attribute: false })
  public host?: McpAppHost;

  @query('iframe')
  private _iframe!: HTMLIFrameElement | null;

  @query('.container')
  private _container!: HTMLElement | null;

  @state()
  private _displayMode: McpAppDisplayMode = 'inline';

  #controller: McpAppBridgeController | null = null;
  #lastHostContext: McpAppHostContext | null = null;
  #unregisterView: (() => void) | null = null;

  get #uiResource(): ToolCall['uiResource'] {
    return this.toolCall?.uiResource;
  }

  /**
   * The sandbox needs an explicit `csp` + `permissions` policy (from the template's
   * `_meta.ui`, via `resolveMcpAppResource`) to set the CSP header and the iframe `allow`
   * attribute. A missing policy must fail visibly rather than run the widget under an
   * empty/wrong policy. Presence (not truthiness) is the gate: an explicit empty policy
   * is valid.
   */
  get #hasPolicy(): boolean {
    const resource = this.#uiResource;
    return !!resource && resource.csp !== undefined && resource.permissions !== undefined;
  }

  get #canRender(): boolean {
    return !!this.#uiResource?.html && !!this.host?.sandboxUrl && this.#hasPolicy;
  }

  get #errorBody(): string {
    if (!this.host?.sandboxUrl) {
      return "This interactive app can't be shown because no secure sandbox is configured.";
    }
    return "This interactive app can't be shown because its security policy is missing.";
  }

  /** Host context as seen by this widget: the chatbot's context plus its own display mode. */
  get #hostContext(): McpAppHostContext {
    return { ...(this.host?.hostContext ?? { theme: 'light' }), displayMode: this._displayMode };
  }

  /** Host capabilities plus the sandbox policy this widget is actually enforced under. */
  get #hostCapabilities(): McpAppHostCapabilities {
    const resource = this.#uiResource;
    return {
      ...this.host?.hostCapabilities,
      sandbox: {
        csp: resource?.csp ?? {},
        permissions: enforcedPermissions(resource?.permissions ?? {})
      }
    };
  }

  get #handlers(): McpAppHandlers {
    const unavailable = (): Promise<never> => Promise.reject(new Error('MCP app host is unavailable'));
    return {
      oncalltool: params => this.host?.callTool({ ...params, toolCallId: this.toolCall.id }) ?? unavailable(),
      onreadresource: params => this.host?.readResource({ ...params, toolCallId: this.toolCall.id }) ?? unavailable(),
      onopenlink: ({ url }) => this.#dispatchOpenLink(url),
      onmessage: async ({ content, role }) => {
        this.#dispatchMessage(content, role ?? 'user');
      },
      onloggingmessage: message => this.#dispatchLoggingMessage(message),
      onsizechange: ({ height }) => {
        if (height && this._displayMode === 'inline') {
          this.style.height = `${height}px`;
        }
      },
      onrequestdisplaymode: async ({ mode, appDisplayModes }) => {
        const resultMode = this.#setDisplayMode(mode, appDisplayModes);
        this.#dispatchRequestDisplayMode(resultMode);
        return { mode: resultMode };
      },
      onupdatemodelcontext: async ({ content, structuredContent }) => {
        const params: McpModelContextUpdateParams = { toolCallId: this.toolCall.id, content, structuredContent };
        this.#dispatchUpdateModelContext(params);
        await this.host?.updateModelContext(params);
      }
    };
  }

  public override firstUpdated(): void {
    this.#connect();
  }

  public override updated(changedProperties: PropertyValues): void {
    if (!this.#controller) {
      this.#connect();
      return;
    }
    this.#controller.syncToolCall(this.toolCall);
    this.#syncHostContext(changedProperties);

    if (changedProperties.has('_displayMode')) {
      this.#applyDisplayMode();
    }
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated && !this.#controller) {
      this.requestUpdate();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    void this.teardown();
  }

  /**
   * Send `ui/resource-teardown` to the View and wait (bounded) for its ack. The chatbot
   * calls this before removing widgets so the View can save state; it also runs on
   * disconnect as a fallback. A later `toolCall` update remounts the widget.
   */
  public async teardown(): Promise<void> {
    this.#unregisterView?.();
    this.#unregisterView = null;
    const controller = this.#controller;
    this.#controller = null;
    await controller?.teardown();
  }

  /**
   * Switch only to a mode both the host offers (`hostContext.availableDisplayModes`) and
   * the View declared in `ui/initialize`; otherwise keep the current mode. `inline` is the
   * baseline every widget starts in, so returning to it is always allowed. Echoes back the
   * mode actually applied, per spec. Uses the native Popover API (`popover` attribute +
   * `showPopover()`) rather than CSS `position`/`z-index` or DOM re-parenting: it
   * promotes the container to the top layer in place, so the iframe never moves and the
   * bridge/widget state survive the mode change.
   */
  #setDisplayMode(requested: McpAppDisplayMode, appDisplayModes: McpAppDisplayMode[]): McpAppDisplayMode {
    const hostModes = this.host?.hostContext.availableDisplayModes ?? [];
    const allowed = requested === 'inline' || (hostModes.includes(requested) && appDisplayModes.includes(requested));
    if (allowed) {
      this._displayMode = requested;
    }
    return this._displayMode;
  }

  #applyDisplayMode(): void {
    const container = this._container;
    if (!container) {
      return;
    }
    if (this._displayMode === 'inline') {
      if (container.matches(':popover-open')) {
        container.hidePopover();
      }
    } else if (!container.matches(':popover-open')) {
      container.showPopover();
    }
  }

  #connect(): void {
    if (this.#controller || !this.#canRender) {
      return;
    }

    const iframe = this._iframe;
    const resource = this.#uiResource;
    const host = this.host;
    if (!iframe || !resource || !host?.sandboxUrl) {
      return;
    }

    const controller = new McpAppBridgeController(new McpAppBridge(HOST_INFO));
    this.#controller = controller;
    this.#lastHostContext = host.hostContext;
    this.#unregisterView = host.registerView({ toolCallId: this.toolCall.id, teardown: () => this.teardown() });

    controller
      .connect({
        iframe,
        sandboxUrl: host.sandboxUrl,
        html: resource.html,
        hostContext: this.#hostContext,
        hostCapabilities: this.#hostCapabilities,
        csp: resource.csp,
        permissions: resource.permissions,
        handlers: this.#handlers
      })
      .then(() => controller.syncToolCall(this.toolCall))
      .catch(error => console.warn('[forge-ai-mcp-app] Failed to connect widget:', error));
  }

  #syncHostContext(changedProperties: PropertyValues): void {
    const next = this.host?.hostContext;
    if (next && (next !== this.#lastHostContext || changedProperties.has('_displayMode'))) {
      this.#lastHostContext = next;
      this.#controller?.sendHostContextChange(this.#hostContext);
    }
  }

  #dispatchOpenLink(url: string): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-open-link', { detail: { url }, bubbles: true, composed: true })
    );
  }

  #dispatchMessage(content: unknown, role: string): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-message', { detail: { content, role }, bubbles: true, composed: true })
    );
  }

  #dispatchLoggingMessage(message: unknown): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-logging-message', { detail: message, bubbles: true, composed: true })
    );
  }

  #dispatchRequestDisplayMode(mode: McpAppDisplayMode): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-request-display-mode', { detail: { mode }, bubbles: true, composed: true })
    );
  }

  #dispatchUpdateModelContext(detail: McpModelContextUpdateParams): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-update-model-context', { detail, bubbles: true, composed: true })
    );
  }

  readonly #iframe = html`<iframe title="MCP application" sandbox="allow-scripts allow-same-origin"></iframe>`;

  get #bordered(): boolean {
    return this.#uiResource?.prefersBorder !== false;
  }

  get #errorArtifact(): TemplateResult {
    return html`
      <div class="container bordered">
        <forge-ai-empty-state>
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="error-icon" aria-hidden="true">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
          <h3 slot="heading">Unable to display app</h3>
          <p slot="body">${this.#errorBody}</p>
        </forge-ai-empty-state>
      </div>
    `;
  }

  public override render(): TemplateResult {
    if (!this.#canRender) {
      return this.#errorArtifact;
    }

    return html`
      <div
        class=${classMap({
          container: true,
          bordered: this.#bordered,
          fullscreen: this._displayMode === 'fullscreen',
          pip: this._displayMode === 'pip'
        })}
        popover="manual">
        ${this.#iframe}
      </div>
    `;
  }
}
