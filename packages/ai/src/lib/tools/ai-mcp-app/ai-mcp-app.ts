import { consume } from '@lit/context';
import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type {
  IToolRenderer,
  McpAppContainerDimensions,
  McpAppDisplayMode,
  McpAppHostCapabilities,
  McpAppHostContext,
  McpAppHostStyles,
  McpAppToolInfo,
  McpModelContextUpdateParams,
  ToolCall,
  ToolDefinition
} from '../../ai-chatbot';
import { inertOutside } from '../../utils/inert-outside.js';
import { McpAppBridge } from './mcp-app-bridge.js';
import type { McpAppLoggingMessage, McpAppRequestResult } from './mcp-app-bridge-types.js';
import { mcpAppHostContext, type McpAppHost } from './mcp-app-context.js';
import { McpAppBridgeController, enforcedPermissions, type McpAppHandlers } from './mcp-app-bridge-controller.js';

import '../../ai-empty-state/ai-empty-state.js';
import '../../ai-confirmation-prompt/ai-confirmation-prompt.js';

import styles from './ai-mcp-app.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-mcp-app': McpAppToolElement;
  }

  interface HTMLElementEventMap {
    'forge-ai-mcp-app-open-link': CustomEvent<{ url: string }>;
    'forge-ai-mcp-app-message': CustomEvent<{ content: unknown[]; role: 'user' }>;
    'forge-ai-mcp-app-logging-message': CustomEvent<McpAppLoggingMessage>;
    'forge-ai-mcp-app-request-teardown': CustomEvent<{ toolCallId: string }>;
    'forge-ai-mcp-app-request-display-mode': CustomEvent<{ mode: McpAppDisplayMode }>;
    'forge-ai-mcp-app-update-model-context': CustomEvent<McpModelContextUpdateParams>;
  }
}

const HOST_INFO = { name: 'forge-ai', version: '1.0.0' } as const;

/** Upper bound for an inline widget's height; advertised as `containerDimensions.maxHeight`. */
const MAX_INLINE_HEIGHT = 2000;

const OPEN_LINK_PROTOCOLS = ['http:', 'https:', 'mailto:'];

/** Spec style variables the host fills from Forge tokens; keep in sync with `$host-style-variables` in ai-mcp-app.scss. */
const HOST_STYLE_KEYS = [
  'color-background-primary',
  'color-background-secondary',
  'color-background-tertiary',
  'color-background-inverse',
  'color-background-info',
  'color-background-danger',
  'color-background-success',
  'color-background-warning',
  'color-text-primary',
  'color-text-secondary',
  'color-text-tertiary',
  'color-text-inverse',
  'color-text-info',
  'color-text-danger',
  'color-text-success',
  'color-text-warning',
  'color-text-disabled',
  'color-border-primary',
  'color-border-secondary',
  'color-border-info',
  'color-border-danger',
  'color-border-success',
  'color-border-warning',
  'color-ring-primary',
  'font-sans',
  'font-weight-normal',
  'font-weight-medium',
  'font-weight-bold',
  'font-text-xs-size',
  'font-text-sm-size',
  'font-text-md-size',
  'font-text-lg-size',
  'font-text-xs-line-height',
  'font-text-sm-line-height',
  'font-text-md-line-height',
  'font-text-lg-line-height',
  'font-heading-sm-size',
  'font-heading-md-size',
  'font-heading-lg-size',
  'font-heading-xl-size',
  'font-heading-2xl-size',
  'font-heading-3xl-size',
  'font-heading-sm-line-height',
  'font-heading-md-line-height',
  'font-heading-lg-line-height',
  'font-heading-xl-line-height',
  'font-heading-2xl-line-height',
  'font-heading-3xl-line-height',
  'border-radius-xs',
  'border-radius-sm',
  'border-radius-md',
  'border-radius-lg',
  'border-radius-xl',
  'border-radius-full',
  'border-width-regular',
  'shadow-sm',
  'shadow-md',
  'shadow-lg'
];

/** MCP logging levels (RFC 5424) mapped onto console methods. */
const CONSOLE_LEVELS: Record<string, 'debug' | 'info' | 'warn' | 'error'> = {
  debug: 'debug',
  info: 'info',
  notice: 'info',
  warning: 'warn',
  error: 'error',
  critical: 'error',
  alert: 'error',
  emergency: 'error'
};

/** A `ui/open-link` awaiting the user's confirmation; settled with the View's request result. */
interface PendingLink {
  href: string;
  settle: (result: McpAppRequestResult) => void;
}

/** `live` until the View asks to be torn down; `closing` while its teardown runs; `closed` after. */
type McpAppLifecycle = 'live' | 'closing' | 'closed';

function asOpenableUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    return OPEN_LINK_PROTOCOLS.includes(parsed.protocol) ? parsed.href : null;
  } catch {
    return null;
  }
}

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
 * @event {CustomEvent<{ url: string }>} forge-ai-mcp-app-open-link - Fired (cancelable) when the app requests to open an http(s)/mailto link; unless `preventDefault()` is called, the user is asked to confirm and the link opens in a new tab
 * @event {CustomEvent<{ content: unknown[]; role: 'user' }>} forge-ai-mcp-app-message - Fired when the app sends a `ui/message`, before its text is placed in the prompt for the user to send
 * @event {CustomEvent<McpAppLoggingMessage>} forge-ai-mcp-app-logging-message - Fired (cancelable) when the app sends a logging message; logged to the console unless `preventDefault()` is called
 * @event {CustomEvent<{ toolCallId: string }>} forge-ai-mcp-app-request-teardown - Fired (cancelable) when the app asks to be torn down; the host tears the widget down unless `preventDefault()` is called
 * @event {CustomEvent<{ mode: McpAppDisplayMode }>} forge-ai-mcp-app-request-display-mode - Fired when the app's display mode changes
 * @event {CustomEvent<McpModelContextUpdateParams>} forge-ai-mcp-app-update-model-context - Fired when the app updates model context; detail carries `toolCallId`, `content` and `structuredContent`
 */
@customElement('forge-ai-mcp-app')
export class McpAppToolElement extends LitElement implements IToolRenderer {
  public static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  /** Client-side definition of the tool, when one is registered; supplies `toolInfo.tool`. */
  @property({ attribute: false })
  public toolDefinition?: ToolDefinition;

  @consume({ context: mcpAppHostContext, subscribe: true })
  @property({ attribute: false })
  public host?: McpAppHost;

  @query('iframe')
  private _iframe!: HTMLIFrameElement | null;

  @query('.container')
  private _container!: HTMLElement | null;

  @state()
  private _displayMode: McpAppDisplayMode = 'inline';

  @state()
  private _lifecycle: McpAppLifecycle = 'live';

  @state()
  private _pendingLink: PendingLink | null = null;

  #controller: McpAppBridgeController | null = null;
  #lastHostContext: McpAppHostContext | null = null;
  #unregisterView: (() => void) | null = null;
  #containerDimensions: McpAppContainerDimensions = { maxHeight: MAX_INLINE_HEIGHT };
  #hostStyles: McpAppHostStyles = {};
  /** Restores the page while fullscreen; set only while the rest of the page is inert. */
  #restorePage: (() => void) | null = null;
  #resizeFrame: number | null = null;
  readonly #resizeObserver = new ResizeObserver(() => this.#scheduleContainerMeasure());

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

  get #canConnect(): boolean {
    return this._lifecycle === 'live' && this.#canRender;
  }

  get #errorBody(): string {
    if (!this.host?.sandboxUrl) {
      return "This interactive app can't be shown because no secure sandbox is configured.";
    }
    return "This interactive app can't be shown because its security policy is missing.";
  }

  /** Host context as seen by this widget: the chatbot's context plus its own tool call, size and display mode. */
  get #hostContext(): McpAppHostContext {
    return {
      ...(this.host?.hostContext ?? { theme: 'light' }),
      styles: this.#hostStyles,
      toolInfo: this.#toolInfo,
      containerDimensions: this.#containerDimensions,
      displayMode: this._displayMode
    };
  }

  /** Backend-only tools have no client definition, so their schema is the minimal `{ type: 'object' }`. */
  get #toolInfo(): McpAppToolInfo {
    const definition = this.toolDefinition;
    return {
      id: this.toolCall.id,
      tool: {
        name: this.toolCall.name,
        ...(definition?.description ? { description: definition.description } : {}),
        ...(definition?.displayName ? { title: definition.displayName } : {}),
        inputSchema: { ...definition?.parameters, type: 'object' }
      }
    };
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
      onopenlink: ({ url }) => this.#openLink(url),
      onmessage: async ({ content, role }) => {
        this.#dispatchMessage(content, role);
        return this.host?.draftMessage({ toolCallId: this.toolCall.id, content }) ?? { isError: true };
      },
      onloggingmessage: message => this.#handleLoggingMessage(message),
      onsizechange: ({ height }) => {
        if (height > 0 && this._displayMode === 'inline') {
          this.style.height = `${Math.min(height, MAX_INLINE_HEIGHT)}px`;
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
      },
      onrequestteardown: () => this.#handleRequestTeardown()
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

    if (changedProperties.has('_displayMode')) {
      this.#applyDisplayMode();
      this.#containerDimensions = this.#readContainerDimensions() ?? this.#containerDimensions;
    }
    this.#syncHostContext(changedProperties);
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated && !this.#controller) {
      this.requestUpdate();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#resizeObserver.disconnect();
    this.#cancelContainerMeasure();
    this.#releasePage();
    this.teardown();
  }

  /**
   * Send `ui/resource-teardown` to the View and release the bridge without waiting for the
   * ack. The chatbot calls this when removing widgets; it also runs on disconnect as a
   * fallback. A later `toolCall` update remounts the widget.
   */
  public teardown(): void {
    this.#settlePendingLink({ isError: true });
    this.#unregisterView?.();
    this.#unregisterView = null;
    const controller = this.#controller;
    this.#controller = null;
    controller?.teardown();
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
    // Fullscreen behaves as a modal: the page behind it can't be focused or clicked. Pip stays non-modal.
    this.#releasePage();
    if (this._displayMode === 'fullscreen') {
      this.#restorePage = inertOutside(this);
    }
    if (this.#isPromoted) {
      this.updateComplete.then(() => this.renderRoot.querySelector<HTMLButtonElement>('.exit-button')?.focus());
    }
  }

  #releasePage(): void {
    this.#restorePage?.();
    this.#restorePage = null;
  }

  #connect(): void {
    if (this.#controller || !this.#canConnect) {
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
    this.#containerDimensions = this.#readContainerDimensions() ?? this.#containerDimensions;
    if (this._container) {
      this.#resizeObserver.observe(this._container);
    }
    this.#lastHostContext = host.hostContext;
    this.#hostStyles = this.#resolveHostStyles();
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
      this.#hostStyles = this.#resolveHostStyles();
      this.#controller?.sendHostContextChange(this.#hostContext);
    }
  }

  /**
   * The View is cross-origin and can't see Forge's custom properties, so send their resolved
   * values (including any consumer token overrides in scope) as spec `styles.variables`.
   */
  #resolveHostStyles(): McpAppHostStyles {
    const computed = getComputedStyle(this);
    const variables: Record<string, string> = {};
    for (const key of HOST_STYLE_KEYS) {
      const value = computed.getPropertyValue(`--_mcp-host-${key}`).trim();
      if (value) {
        variables[`--${key}`] = value;
      }
    }
    return { variables };
  }

  #scheduleContainerMeasure(): void {
    if (this.#resizeFrame !== null) {
      return;
    }
    this.#resizeFrame = requestAnimationFrame(() => {
      this.#resizeFrame = null;
      this.#measureContainer();
    });
  }

  #cancelContainerMeasure(): void {
    if (this.#resizeFrame !== null) {
      cancelAnimationFrame(this.#resizeFrame);
      this.#resizeFrame = null;
    }
  }

  /**
   * Inline widgets get a fixed width and a `maxHeight` bound (they size themselves via
   * `size-changed`); promoted (fullscreen/pip) widgets get the container's fixed size.
   */
  #readContainerDimensions(): McpAppContainerDimensions | null {
    const container = this._container;
    if (!container) {
      return null;
    }
    const width = Math.round(container.clientWidth);
    // Promoted widgets share the container with the host toolbar, so the iframe is the real viewport.
    return this._displayMode === 'inline'
      ? { width, maxHeight: MAX_INLINE_HEIGHT }
      : { width, height: Math.round(this._iframe?.clientHeight ?? container.clientHeight) };
  }

  /** Sends `host-context-changed` when the container's measured size changed (held by the bridge until `initialized`). */
  #measureContainer(): void {
    const next = this.#readContainerDimensions();
    if (!next || JSON.stringify(next) === JSON.stringify(this.#containerDimensions)) {
      return;
    }
    this.#containerDimensions = next;
    this.#controller?.sendHostContextChange(this.#hostContext);
  }

  /**
   * Unless a listener handles it via `preventDefault()`, asks the user to confirm an
   * http(s)/mailto link and opens it from that click — a real user gesture, so it isn't
   * popup-blocked, and the View can't open links silently. Resolves with the user's choice.
   */
  #openLink(url: string): Promise<McpAppRequestResult> {
    const href = asOpenableUrl(url);
    if (!href) {
      return Promise.resolve({ isError: true });
    }
    const event = new CustomEvent('forge-ai-mcp-app-open-link', {
      detail: { url: href },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    if (!this.dispatchEvent(event)) {
      return Promise.resolve({});
    }
    this.#settlePendingLink({ isError: true });
    return new Promise(settle => {
      this._pendingLink = { href, settle };
    });
  }

  #settlePendingLink(result: McpAppRequestResult): void {
    this._pendingLink?.settle(result);
    this._pendingLink = null;
  }

  #confirmLink(): void {
    const href = this._pendingLink?.href;
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    this.#settlePendingLink({});
  }

  #dispatchMessage(content: unknown[], role: 'user'): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-mcp-app-message', { detail: { content, role }, bubbles: true, composed: true })
    );
  }

  /** Dispatches the logging event; falls back to the matching console method unless a listener handled it. */
  #handleLoggingMessage(message: McpAppLoggingMessage): void {
    const event = new CustomEvent('forge-ai-mcp-app-logging-message', {
      detail: message,
      bubbles: true,
      composed: true,
      cancelable: true
    });
    if (this.dispatchEvent(event)) {
      const method = CONSOLE_LEVELS[message.level] ?? 'info';
      // eslint-disable-next-line no-console -- surfaces View logs when no listener handles them
      console[method](`[forge-ai-mcp-app]${message.logger ? ` [${message.logger}]` : ''}`, message.data);
    }
  }

  /**
   * The View asked to be torn down. Unless a listener calls `preventDefault()`, run the
   * host's normal per-widget teardown (`ui/resource-teardown` + adapter dispose), then stop
   * rendering the iframe. The tool call stays in the thread; nothing is remounted.
   */
  #handleRequestTeardown(): void {
    if (this._lifecycle !== 'live') {
      return;
    }
    const event = new CustomEvent('forge-ai-mcp-app-request-teardown', {
      detail: { toolCallId: this.toolCall.id },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    if (!this.dispatchEvent(event)) {
      return;
    }
    this._lifecycle = 'closing';
    this.#resizeObserver.disconnect();
    this.#cancelContainerMeasure();
    if (this.host) {
      this.host.teardownView({ toolCallId: this.toolCall.id });
    } else {
      this.teardown();
    }
    this.style.removeProperty('height');
    this._lifecycle = 'closed';
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

  /** Host-owned exit control for promoted (fullscreen/pip) widgets; the View can't hide or spoof it. */
  readonly #promotedToolbar = html`
    <div class="promoted-toolbar">
      <button
        class="forge-icon-button forge-icon-button--medium exit-button"
        aria-label="Exit to inline view"
        @click=${(): void => this.#exitToInline()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  `;

  get #linkConfirmation(): TemplateResult | typeof nothing {
    const link = this._pendingLink;
    if (!link) {
      return nothing;
    }
    return html`
      <forge-ai-confirmation-prompt
        text=${`Open this link in a new tab? ${link.href}`}
        confirm-text="Open"
        deny-text="Cancel"
        @forge-ai-confirmation-prompt-confirm=${(): void => this.#confirmLink()}
        @forge-ai-confirmation-prompt-deny=${(): void => this.#settlePendingLink({ isError: true })}>
      </forge-ai-confirmation-prompt>
    `;
  }

  get #isPromoted(): boolean {
    return this._displayMode !== 'inline';
  }

  /** Returns a promoted widget to inline and tells the View (via `host-context-changed`). */
  #exitToInline(): void {
    if (!this.#isPromoted) {
      return;
    }
    this._displayMode = 'inline';
    this.#dispatchRequestDisplayMode('inline');
  }

  #handleContainerKeydown(evt: KeyboardEvent): void {
    if (evt.key === 'Escape' && this.#isPromoted) {
      evt.stopPropagation();
      evt.preventDefault();
      this.#exitToInline();
    }
  }

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

  public override render(): TemplateResult | typeof nothing {
    if (this._lifecycle === 'closed') {
      return nothing;
    }
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
        popover="manual"
        role=${this.#isPromoted ? 'dialog' : nothing}
        aria-label=${this.#isPromoted ? 'MCP application' : nothing}
        data-handles-escape
        @keydown=${this.#handleContainerKeydown}>
        ${this.#isPromoted ? this.#promotedToolbar : nothing} ${this.#iframe} ${this.#linkConfirmation}
      </div>
    `;
  }
}
