import { consume } from '@lit/context';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { IToolRenderer, McpAppHostContext, ToolCall } from '../../ai-chatbot';
import { McpAppBridge } from './mcp-app-bridge.js';
import { mcpAppHostContext, type McpAppHost } from './mcp-app-context.js';
import { McpAppBridgeController, type McpAppHandlers } from './mcp-app-bridge-controller.js';

import '../../ai-empty-state/ai-empty-state.js';

import styles from './ai-mcp-app.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-mcp-app': McpAppToolElement;
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

  #controller: McpAppBridgeController | null = null;
  #lastHostContext: McpAppHostContext | null = null;

  get #uiResource(): ToolCall['uiResource'] {
    return this.toolCall?.uiResource;
  }

  /**
   * The sandbox needs an explicit `csp` + `permissions` policy to set the CSP header and
   * the iframe `allow` attribute. On rehydration these come from persistence, not a fresh
   * `mcp-ui-resource` event — a dropped policy must fail visibly rather than run the
   * widget under an empty/wrong policy. Presence (not truthiness) is the gate: an explicit
   * empty policy is valid.
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

  get #handlers(): McpAppHandlers {
    return {
      oncalltool: params => this.host?.callTool(params) ?? Promise.resolve({ content: [] }),
      onreadresource: params => this.host?.readResource(params) ?? Promise.resolve({ contents: [] }),
      onopenlink: ({ url }) => this.#dispatch('open-link', { url }),
      onmessage: async ({ content, role }) => {
        this.#dispatch('message', { content, role });
      },
      onloggingmessage: message => this.#dispatch('logging-message', message),
      onsizechange: ({ height }) => {
        if (height) {
          this.style.height = `${height}px`;
        }
      },
      onrequestdisplaymode: async ({ mode }) => {
        this.#dispatch('request-display-mode', { mode });
        return { mode };
      },
      onupdatemodelcontext: async ({ content }) => {
        this.#dispatch('update-model-context', { content });
      }
    };
  }

  public override firstUpdated(): void {
    this.#connect();
  }

  public override updated(): void {
    if (!this.#controller) {
      this.#connect();
      return;
    }
    this.#controller.syncToolCall(this.toolCall);
    this.#syncHostContext();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    void this.#controller?.teardown();
    this.#controller = null;
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

    const controller = new McpAppBridgeController(new McpAppBridge(HOST_INFO, host.hostCapabilities ?? {}));
    this.#controller = controller;
    this.#lastHostContext = host.hostContext;

    void controller
      .connect({
        iframe,
        sandboxUrl: host.sandboxUrl,
        html: resource.html,
        hostContext: host.hostContext,
        csp: resource.csp,
        permissions: resource.permissions,
        handlers: this.#handlers
      })
      .then(() => controller.syncToolCall(this.toolCall));
  }

  #syncHostContext(): void {
    const next = this.host?.hostContext;
    if (next && next !== this.#lastHostContext) {
      this.#lastHostContext = next;
      this.#controller?.sendHostContextChange(next);
    }
  }

  #dispatch(name: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(`forge-ai-mcp-app-${name}`, { detail, bubbles: true, composed: true }));
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

    return html`<div class=${classMap({ container: true, bordered: this.#bordered })}>${this.#iframe}</div>`;
  }
}
