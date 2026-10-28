import type { McpAppDisplayMode, McpAppHostCapabilities, McpAppHostContext } from '../../ai-chatbot';
import type { IMcpAppBridge, McpAppBridgeConnectConfig, McpAppViewToolResult } from './mcp-app-bridge-types.js';

const PROTOCOL_VERSION = '2026-01-26';
const TEARDOWN_TIMEOUT_MS = 1000;
const DISPLAY_MODES: McpAppDisplayMode[] = ['inline', 'fullscreen', 'pip'];

/** `connecting` until the View sends `initialized`; nothing but responses is sent before `ready`. */
type BridgePhase = 'idle' | 'connecting' | 'ready' | 'disposed';

type JsonRpcId = number | string;

interface JsonRpcPayload {
  jsonrpc: '2.0';
  id?: JsonRpcId;
  method?: string;
  params?: unknown;
  result?: unknown;
  error?: { code: number; message: string };
}

function asJsonRpc(data: unknown): JsonRpcPayload | null {
  if (!data || typeof data !== 'object') {
    return null;
  }
  const payload = data as JsonRpcPayload;
  return payload.jsonrpc === '2.0' ? payload : null;
}

function asDisplayModes(value: unknown): McpAppDisplayMode[] {
  return Array.isArray(value) ? DISPLAY_MODES.filter(mode => value.includes(mode)) : [];
}

/**
 * Hand-rolled, zero-dependency {@link IMcpAppBridge}. A `postMessage` listener speaking
 * JSON-RPC 2.0 directly: no SDK, no zod, no schema validation. The cross-origin sandbox
 * iframe is the security boundary here, not message-schema checking — every inbound
 * field is narrowed defensively before use.
 *
 * Drives the handshake against the sandbox proxy (`packages/ai/sandbox/sandbox.js`):
 * `sandbox-proxy-ready` -> `sandbox-resource-ready` -> `ui/initialize` ->
 * `ui/notifications/initialized`, then streaming `ui/notifications/*`. Forwards
 * non-`ui/` methods (`tools/call`, `resources/read`) to the same handler slots the
 * interface defines.
 */
export class McpAppBridge implements IMcpAppBridge {
  readonly #hostInfo: { name: string; version: string };

  #capabilities: McpAppHostCapabilities = {};
  #phase: BridgePhase = 'idle';
  #sandboxWindow: Window | null = null;
  #sandboxOrigin: string | null = null;
  #hostContext: McpAppHostContext = { theme: 'light' };
  /** The host context the View last received (in the `ui/initialize` result or a change notification). */
  #deliveredHostContext: McpAppHostContext | null = null;
  #appDisplayModes: McpAppDisplayMode[] = [];
  #nextId = 1;
  readonly #pending = new Map<JsonRpcId, { resolve: (value: unknown) => void; reject: (reason: Error) => void }>();
  #resolveProxyReady?: () => void;
  #initialized: Promise<void> | null = null;
  #resolveInitialized?: () => void;

  public oncalltool?: IMcpAppBridge['oncalltool'];
  public onreadresource?: IMcpAppBridge['onreadresource'];
  public onopenlink?: IMcpAppBridge['onopenlink'];
  public onmessage?: IMcpAppBridge['onmessage'];
  public onloggingmessage?: IMcpAppBridge['onloggingmessage'];
  public onsizechange?: IMcpAppBridge['onsizechange'];
  public onrequestdisplaymode?: IMcpAppBridge['onrequestdisplaymode'];
  public onupdatemodelcontext?: IMcpAppBridge['onupdatemodelcontext'];

  constructor(hostInfo: { name: string; version: string }) {
    this.#hostInfo = hostInfo;
  }

  public connect(config: McpAppBridgeConnectConfig): Promise<void> {
    if (this.#phase !== 'idle') {
      throw new Error('Bridge has already been connected; create a new bridge per widget.');
    }

    this.#phase = 'connecting';
    this.#capabilities = config.hostCapabilities;
    this.#hostContext = config.hostContext;
    this.#sandboxWindow = config.sandboxWindow;
    window.addEventListener('message', this.#handleMessage);

    const proxyReady = new Promise<void>(resolve => {
      this.#resolveProxyReady = resolve;
    });
    this.#initialized = new Promise<void>(resolve => {
      this.#resolveInitialized = resolve;
    }).then(() => {
      this.#phase = 'ready';
      this.#flushHostContext();
    });

    return proxyReady
      .then(() =>
        this.#sendNotification('ui/notifications/sandbox-resource-ready', {
          html: config.html,
          permissions: config.permissions,
          sandbox: config.sandbox
        })
      )
      .then(() => this.#initialized as Promise<void>);
  }

  public sendToolInputPartial(args: Record<string, unknown>): void {
    this.#sendNotification('ui/notifications/tool-input-partial', { arguments: args });
  }

  public sendToolInput(args: Record<string, unknown>): void {
    this.#sendNotification('ui/notifications/tool-input', { arguments: args });
  }

  public sendToolResult(result: McpAppViewToolResult): void {
    this.#sendNotification('ui/notifications/tool-result', result);
  }

  public sendToolCancelled(reason?: string): void {
    this.#sendNotification('ui/notifications/tool-cancelled', { reason: reason ?? 'cancelled' });
  }

  public sendHostContextChange(hostContext: McpAppHostContext): void {
    this.#hostContext = hostContext;
    if (this.#phase === 'ready') {
      this.#flushHostContext();
    }
  }

  /**
   * Request `ui/resource-teardown` and wait (bounded) for the View's ack. A View that never
   * initialized is disposed without being messaged.
   */
  public sendTeardown(): Promise<void> {
    if (this.#phase !== 'ready') {
      this.#dispose();
      return Promise.resolve();
    }
    const ack = this.#sendRequest('ui/resource-teardown', {}).catch(() => undefined);
    const timeout = new Promise<void>(resolve => setTimeout(resolve, TEARDOWN_TIMEOUT_MS));
    return Promise.race([ack, timeout]).then(() => this.#dispose());
  }

  #flushHostContext(): void {
    if (this.#hostContext === this.#deliveredHostContext) {
      return;
    }
    this.#deliveredHostContext = this.#hostContext;
    this.#sendNotification('ui/notifications/host-context-changed', this.#toWireHostContext(this.#hostContext));
  }

  /** Release the `message` listener + reject any in-flight requests. Idempotent. */
  #dispose(): void {
    this.#phase = 'disposed';
    window.removeEventListener('message', this.#handleMessage);
    for (const pending of this.#pending.values()) {
      pending.reject(new Error('Bridge disposed'));
    }
    this.#pending.clear();
    this.#sandboxWindow = null;
  }

  readonly #handleMessage = (event: MessageEvent): void => {
    if (event.source !== this.#sandboxWindow) {
      return;
    }
    if (this.#sandboxOrigin === null) {
      this.#sandboxOrigin = event.origin;
    } else if (event.origin !== this.#sandboxOrigin) {
      return;
    }

    const payload = asJsonRpc(event.data);
    if (!payload || typeof payload.method !== 'string') {
      if (payload && payload.id !== undefined) {
        this.#handleResponse(payload);
      } else if (payload) {
        console.warn('[forge-ai-mcp-app] Ignoring malformed JSON-RPC message', event.data);
      }
      return;
    }

    if (payload.id !== undefined) {
      void this.#handleRequest(payload.method, payload.params, payload.id);
    } else {
      this.#handleNotification(payload.method, payload.params);
    }
  };

  #handleResponse(payload: JsonRpcPayload): void {
    const id = payload.id as JsonRpcId;
    const pending = this.#pending.get(id);
    if (!pending) {
      return;
    }
    this.#pending.delete(id);
    if (payload.error) {
      pending.reject(new Error(payload.error.message));
    } else {
      pending.resolve(payload.result);
    }
  }

  async #handleRequest(method: string, params: unknown, id: JsonRpcId): Promise<void> {
    try {
      const result = await this.#dispatchRequest(method, params);
      this.#post({ jsonrpc: '2.0', id, result });
    } catch (error) {
      this.#post({
        jsonrpc: '2.0',
        id,
        error: { code: -32000, message: error instanceof Error ? error.message : 'Request failed' }
      });
    }
  }

  async #dispatchRequest(method: string, params: unknown): Promise<unknown> {
    const p = (params ?? {}) as Record<string, unknown>;
    switch (method) {
      case 'ui/initialize': {
        const appCapabilities = (p.appCapabilities ?? {}) as Record<string, unknown>;
        this.#appDisplayModes = asDisplayModes(appCapabilities.availableDisplayModes);
        this.#deliveredHostContext = this.#hostContext;
        return {
          protocolVersion: PROTOCOL_VERSION,
          hostInfo: this.#hostInfo,
          hostCapabilities: this.#capabilities,
          hostContext: this.#toWireHostContext(this.#hostContext)
        };
      }
      case 'ui/open-link':
        this.onopenlink?.({ url: typeof p.url === 'string' ? p.url : '' });
        return {};
      case 'ui/message': {
        const content = Array.isArray(p.content) ? p.content : [];
        const text = content
          .filter((block): block is { type: 'text'; text: string } => !!block && block.type === 'text')
          .map(block => block.text)
          .join('');
        // Spec types widget->host `ui/message.role` as the literal "user" — never trust a
        // widget-supplied role, or a malicious/buggy widget could spoof an assistant message.
        await this.onmessage?.({ content: text, role: 'user' });
        return {};
      }
      case 'ui/update-model-context':
        await this.onupdatemodelcontext?.({
          content: Array.isArray(p.content) ? p.content : undefined,
          structuredContent: p.structuredContent
        });
        return {};
      case 'ui/request-display-mode': {
        const current = this.#hostContext.displayMode ?? 'inline';
        const [mode] = asDisplayModes([p.mode]);
        if (!mode || !this.onrequestdisplaymode) {
          return { mode: current };
        }
        return this.onrequestdisplaymode({ mode, appDisplayModes: this.#appDisplayModes });
      }
      case 'ui/resource-teardown':
      case 'ping':
        return {};
      case 'tools/call':
        if (!this.oncalltool || !this.#capabilities.serverTools) {
          throw new Error('tools/call is not supported by this host');
        }
        return this.oncalltool({
          name: typeof p.name === 'string' ? p.name : '',
          arguments: (p.arguments as Record<string, unknown>) ?? {}
        });
      case 'resources/read':
        if (!this.onreadresource) {
          throw new Error('resources/read is not supported by this host');
        }
        return this.onreadresource({ uri: typeof p.uri === 'string' ? p.uri : '' });
      default:
        console.warn(`[forge-ai-mcp-app] Unhandled request method: ${method}`);
        throw new Error(`Unhandled request method: ${method}`);
    }
  }

  #handleNotification(method: string, params: unknown): void {
    const p = (params ?? {}) as Record<string, unknown>;
    switch (method) {
      case 'ui/notifications/sandbox-proxy-ready':
        this.#resolveProxyReady?.();
        return;
      case 'ui/notifications/initialized':
        this.#resolveInitialized?.();
        return;
      case 'ui/notifications/size-changed':
        this.onsizechange?.({
          width: typeof p.width === 'number' ? p.width : undefined,
          height: typeof p.height === 'number' ? p.height : 0
        });
        return;
      case 'notifications/message':
        this.onloggingmessage?.({
          level: typeof p.level === 'string' ? p.level : 'info',
          logger: typeof p.logger === 'string' ? p.logger : undefined,
          data: p.data
        });
        return;
      default:
        console.warn(`[forge-ai-mcp-app] Unhandled notification method: ${method}`);
        return;
    }
  }

  #sendNotification(method: string, params: unknown): void {
    this.#post({ jsonrpc: '2.0', method, params });
  }

  #sendRequest(method: string, params: unknown): Promise<unknown> {
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#post({ jsonrpc: '2.0', id, method, params });
    });
  }

  #post(data: unknown): void {
    this.#sandboxWindow?.postMessage(data, '*');
  }

  #toWireHostContext(hostContext: McpAppHostContext): Record<string, unknown> {
    return {
      theme: hostContext.theme,
      displayMode: hostContext.displayMode,
      availableDisplayModes: hostContext.availableDisplayModes,
      ...(hostContext.container
        ? { containerDimensions: { width: hostContext.container.width, height: hostContext.container.height } }
        : {})
    };
  }
}
