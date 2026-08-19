import { buildAllowAttribute } from '@modelcontextprotocol/ext-apps/app-bridge';
import type { McpAppHostContext, McpAppResourceCsp, McpAppResourcePermissions, ToolCall } from '../../ai-chatbot';
import type { IMcpAppBridge } from './mcp-app-bridge-types.js';

/**
 * The view→host handler slots the element supplies; registered on the bridge BEFORE
 * `connect()` so they are live for the very first widget request.
 */
export type McpAppHandlers = Pick<
  IMcpAppBridge,
  | 'oncalltool'
  | 'onreadresource'
  | 'onopenlink'
  | 'onmessage'
  | 'onloggingmessage'
  | 'onsizechange'
  | 'onrequestdisplaymode'
  | 'onupdatemodelcontext'
>;

export interface McpAppConnectConfig {
  iframe: HTMLIFrameElement;
  sandboxUrl: string;
  html: string;
  hostContext: McpAppHostContext;
  csp?: McpAppResourceCsp;
  permissions?: McpAppResourcePermissions;
  sandbox?: string;
  handlers: McpAppHandlers;
}

const DEFAULT_CSP =
  "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data:; media-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-src 'none'";

/**
 * Compose the CSP header value the sandbox server expects on `?csp=`. Client-side
 * counterpart of `sandbox/server.mjs` — the server just echoes this verbatim. When `csp`
 * is absent the restrictive default block (matching the server default) applies.
 */
export function buildCspHeader(csp?: McpAppResourceCsp): string {
  if (!csp) {
    return DEFAULT_CSP;
  }

  const resource = csp.resourceDomains?.length ? ` ${csp.resourceDomains.join(' ')}` : '';
  const connect = csp.connectDomains?.length ? csp.connectDomains.join(' ') : "'none'";
  const frame = csp.frameDomains?.length ? csp.frameDomains.join(' ') : "'none'";
  const baseUri = csp.baseUriDomains?.length ? csp.baseUriDomains.join(' ') : "'self'";

  return [
    "default-src 'none'",
    `script-src 'self' 'unsafe-inline'${resource}`,
    `style-src 'self' 'unsafe-inline'${resource}`,
    `img-src 'self' data:${resource}`,
    `media-src 'self' data:${resource}`,
    `font-src 'self' data:${resource}`,
    `connect-src ${connect}`,
    `frame-src ${frame}`,
    `base-uri ${baseUri}`,
    "object-src 'none'"
  ].join('; ');
}

/**
 * Drives an {@link IMcpAppBridge} through the sandbox handshake and the streaming
 * tool-call lifecycle. Bridge-agnostic — talks to the interface only.
 *
 * The controller owns the OUTER sandbox iframe DOM (its `src` with the `?csp=` param and
 * its `allow` attribute); the bridge owns the AppBridge/postMessage lifecycle.
 */
export class McpAppBridgeController {
  readonly #bridge: IMcpAppBridge;
  #connected: Promise<void> | null = null;
  #lastArgsSent: string | null = null;
  #inputSent = false;
  #resultSent = false;
  #cancelled = false;

  constructor(bridge: IMcpAppBridge) {
    this.#bridge = bridge;
  }

  public connect(config: McpAppConnectConfig): Promise<void> {
    if (this.#connected) {
      return this.#connected;
    }

    Object.assign(this.#bridge, config.handlers);

    const { iframe, sandboxUrl, csp, permissions } = config;
    const outerAllow = buildAllowAttribute(permissions as never);
    if (outerAllow) {
      iframe.setAttribute('allow', outerAllow);
    }

    const sandboxWindow = iframe.contentWindow;
    if (!sandboxWindow) {
      return Promise.reject(new Error('sandbox iframe has no contentWindow'));
    }

    // Register the transport listener (inside connect) BEFORE navigating the iframe so
    // the sandbox's `sandbox-proxy-ready` is never missed.
    this.#connected = this.#bridge.connect({
      sandboxWindow,
      html: config.html,
      hostContext: config.hostContext,
      permissions,
      sandbox: config.sandbox
    });

    const separator = sandboxUrl.includes('?') ? '&' : '?';
    iframe.src = `${sandboxUrl}${separator}csp=${encodeURIComponent(buildCspHeader(csp))}`;

    return this.#connected;
  }

  /**
   * Reconcile the widget with the current tool-call state. Streams partial args, sends
   * final args once, then the result — each at most once, gated on the `initialized`
   * handshake. Safe to call on every `toolCall` update.
   */
  public syncToolCall(toolCall: ToolCall): void {
    if (!this.#connected || this.#cancelled) {
      return;
    }

    void this.#connected.then(() => {
      if (this.#cancelled) {
        return;
      }

      if (!this.#inputSent) {
        const argsString = toolCall.argsBuffer ?? JSON.stringify(toolCall.args ?? {});
        if (argsString !== this.#lastArgsSent) {
          this.#lastArgsSent = argsString;
          this.#bridge.sendToolInputPartial(this.#coerceArgs(toolCall.args));
        }
      }

      const argsComplete =
        toolCall.status === 'executing' || toolCall.status === 'complete' || toolCall.status === 'error';
      if (argsComplete && !this.#inputSent) {
        this.#inputSent = true;
        this.#bridge.sendToolInput(this.#coerceArgs(toolCall.args));
      }

      if (toolCall.status === 'complete' && !this.#resultSent) {
        this.#resultSent = true;
        this.#bridge.sendToolResult(toolCall.result, toolCall.structuredContent);
      }
    });
  }

  public sendHostContextChange(hostContext: McpAppHostContext): void {
    if (this.#connected) {
      this.#bridge.sendHostContextChange(hostContext);
    }
  }

  public async teardown(): Promise<void> {
    if (!this.#connected) {
      return;
    }
    this.#cancelled = true;
    try {
      await this.#bridge.sendTeardown();
    } catch {
      // Teardown ack is best-effort; the iframe is removed regardless.
    }
  }

  #coerceArgs(args: unknown): Record<string, unknown> {
    return args && typeof args === 'object' ? (args as Record<string, unknown>) : {};
  }
}
