import type {
  McpAppHostCapabilities,
  McpAppHostContext,
  McpAppResourceCsp,
  McpAppResourcePermissions,
  ToolCall
} from '../../ai-chatbot';
import type { IMcpAppBridge, McpAppViewToolResult } from './mcp-app-bridge-types.js';

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
  | 'onrequestteardown'
>;

export interface McpAppConnectConfig {
  iframe: HTMLIFrameElement;
  sandboxUrl: string;
  html: string;
  hostContext: McpAppHostContext;
  hostCapabilities: McpAppHostCapabilities;
  csp: McpAppResourceCsp;
  permissions: McpAppResourcePermissions;
  sandbox?: string;
  handlers: McpAppHandlers;
}

/** Where the tool call's terminal notification stands; at most one is ever sent. */
type ToolCallOutcome = 'pending' | 'result-sent' | 'cancel-sent' | 'torn-down';

const PERMISSION_FEATURES: Record<keyof McpAppResourcePermissions, string> = {
  camera: 'camera',
  microphone: 'microphone',
  geolocation: 'geolocation',
  clipboardWrite: 'clipboard-write'
};

/** Characters that could break out of a CSP source list. */
const UNSAFE_CSP_SOURCE = /[\s;,'"]/;

function cspSources(domains: string[] | undefined, fallback: string): string {
  const safe = (domains ?? []).filter(domain => !!domain && !UNSAFE_CSP_SOURCE.test(domain));
  return safe.length ? safe.join(' ') : fallback;
}

/**
 * Compose the CSP header value the sandbox server expects on `?csp=` (spec "CSP
 * Construction from Metadata"). Empty allow-lists produce the restrictive default:
 * `connect-src 'none'`, `frame-src 'none'`, `base-uri 'self'`, `object-src 'none'`.
 */
export function buildCspHeader(csp: McpAppResourceCsp): string {
  const resource = cspSources(csp.resourceDomains, '');
  const extra = resource ? ` ${resource}` : '';

  return [
    "default-src 'none'",
    `script-src 'self' 'unsafe-inline'${extra}`,
    `style-src 'self' 'unsafe-inline'${extra}`,
    `img-src 'self' data:${extra}`,
    `media-src 'self' data:${extra}`,
    `font-src 'self' data:${extra}`,
    `connect-src ${cspSources(csp.connectDomains, "'none'")}`,
    `frame-src ${cspSources(csp.frameDomains, "'none'")}`,
    `base-uri ${cspSources(csp.baseUriDomains, "'self'")}`,
    "object-src 'none'"
  ].join('; ');
}

/**
 * The requested permissions the sandbox can enforce, normalized to the spec shape. A key
 * is requested when present (`{ camera: {} }`); `false`/`null` values are ignored.
 */
export function enforcedPermissions(permissions: McpAppResourcePermissions): McpAppResourcePermissions {
  const keys = (Object.keys(PERMISSION_FEATURES) as (keyof McpAppResourcePermissions)[]).filter(key => {
    const value: unknown = permissions[key];
    return value !== undefined && value !== null && value !== false;
  });
  return Object.fromEntries(keys.map(key => [key, {}]));
}

/** Map requested permissions onto the iframe `allow` attribute. */
export function buildAllowAttribute(permissions: McpAppResourcePermissions): string {
  return (Object.keys(enforcedPermissions(permissions)) as (keyof McpAppResourcePermissions)[])
    .map(key => PERMISSION_FEATURES[key])
    .join('; ');
}

/**
 * Build the View's `CallToolResult` from the raw MCP result + structured content — never
 * from the model-facing `result`. When the backend omitted a field (size caps) the View
 * gets what remains; when both are missing it gets an empty `content` array, flagged
 * `isError` only if the tool call itself errored.
 */
export function buildViewToolResult(toolCall: ToolCall): McpAppViewToolResult {
  const mcpResult = toolCall.mcpResultOmitted ? undefined : toolCall.mcpResult;
  const structuredContent = toolCall.structuredContentOmitted ? undefined : toolCall.structuredContent;
  const isError = mcpResult?.isError ?? (toolCall.status === 'error' || undefined);

  return {
    content: Array.isArray(mcpResult?.content) ? mcpResult.content : [],
    ...(structuredContent !== undefined ? { structuredContent } : {}),
    ...(isError !== undefined ? { isError } : {}),
    ...(mcpResult?._meta !== undefined ? { _meta: mcpResult._meta } : {})
  };
}

/**
 * Drives an {@link IMcpAppBridge} through the sandbox handshake and the streaming
 * tool-call lifecycle. Bridge-agnostic — talks to the interface only.
 *
 * The controller owns the OUTER sandbox iframe DOM (its `src` with the `?csp=` param and
 * its `allow` attribute); the bridge owns the postMessage lifecycle.
 */
export class McpAppBridgeController {
  readonly #bridge: IMcpAppBridge;
  #connected: Promise<void> | null = null;
  #lastArgsSent: string | null = null;
  #inputSent = false;
  #outcome: ToolCallOutcome = 'pending';

  constructor(bridge: IMcpAppBridge) {
    this.#bridge = bridge;
  }

  public connect(config: McpAppConnectConfig): Promise<void> {
    if (this.#connected) {
      return this.#connected;
    }

    Object.assign(this.#bridge, config.handlers);

    const { iframe, sandboxUrl, csp, permissions } = config;
    const outerAllow = buildAllowAttribute(permissions);
    if (outerAllow) {
      iframe.setAttribute('allow', outerAllow);
    } else {
      iframe.removeAttribute('allow');
    }

    const sandboxWindow = iframe.contentWindow;
    if (!sandboxWindow) {
      return Promise.reject(new Error('sandbox iframe has no contentWindow'));
    }

    let sandboxOrigin: string;
    try {
      sandboxOrigin = new URL(sandboxUrl, window.location.href).origin;
    } catch {
      return Promise.reject(new Error(`invalid sandbox URL: ${sandboxUrl}`));
    }
    if (sandboxOrigin === 'null' || sandboxOrigin === window.location.origin) {
      return Promise.reject(new Error('sandbox URL must be on a distinct, non-opaque origin'));
    }

    // Register the transport listener (inside connect) BEFORE navigating the iframe so
    // the sandbox's `sandbox-proxy-ready` is never missed.
    this.#connected = this.#bridge.connect({
      sandboxWindow,
      sandboxOrigin,
      html: config.html,
      hostContext: config.hostContext,
      hostCapabilities: config.hostCapabilities,
      permissions: enforcedPermissions(permissions),
      sandbox: config.sandbox
    });

    const separator = sandboxUrl.includes('?') ? '&' : '?';
    iframe.src = `${sandboxUrl}${separator}csp=${encodeURIComponent(buildCspHeader(csp))}`;

    return this.#connected;
  }

  /**
   * Reconcile the widget with the current tool-call state. Streams partial args, sends
   * final args once, then exactly one of `tool-result` (complete/error) or
   * `tool-cancelled` — all gated on the `initialized` handshake. Safe to call on every
   * `toolCall` update.
   */
  public syncToolCall(toolCall: ToolCall): void {
    if (!this.#connected || this.#outcome !== 'pending') {
      return;
    }

    void this.#connected.then(() => {
      if (this.#outcome !== 'pending') {
        return;
      }

      if (toolCall.status === 'cancelled') {
        this.#outcome = 'cancel-sent';
        this.#bridge.sendToolCancelled();
        return;
      }

      const partialArgs = this.#coerceArgs(toolCall.args);
      const partialString = JSON.stringify(partialArgs);
      // Only stream parsed partial args that changed; an adapter with no partial parse
      // reports `{}` on every delta, which carries nothing for the View.
      if (!this.#inputSent && Object.keys(partialArgs).length && partialString !== this.#lastArgsSent) {
        this.#lastArgsSent = partialString;
        this.#bridge.sendToolInputPartial(partialArgs);
      }

      const isFinished = toolCall.status === 'complete' || toolCall.status === 'error';
      if ((toolCall.status === 'executing' || isFinished) && !this.#inputSent) {
        this.#inputSent = true;
        this.#bridge.sendToolInput(this.#coerceArgs(toolCall.args));
      }

      if (isFinished) {
        this.#outcome = 'result-sent';
        this.#bridge.sendToolResult(buildViewToolResult(toolCall));
      }
    });
  }

  /** Forward a host-context change; the bridge holds it until the View is initialized. */
  public sendHostContextChange(hostContext: McpAppHostContext): void {
    if (this.#connected) {
      this.#bridge.sendHostContextChange(hostContext);
    }
  }

  /** Send `ui/resource-teardown` and wait (bounded) for the ack before the iframe goes away. */
  public async teardown(): Promise<void> {
    if (!this.#connected) {
      return;
    }
    this.#outcome = 'torn-down';
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
