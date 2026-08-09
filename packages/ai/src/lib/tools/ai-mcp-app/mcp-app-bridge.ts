import type { McpAppDisplayMode, McpAppHostCapabilities, McpAppHostContext } from '../../ai-chatbot';
import type { IMcpAppBridge, McpAppBridgeConnectConfig } from './mcp-app-bridge-types.js';

const PROTOCOL_VERSION = '2026-01-26';
const TEARDOWN_TIMEOUT_MS = 5000;

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
  readonly #capabilities: McpAppHostCapabilities;

  #sandboxWindow: Window | null = null;
  #sandboxOrigin: string | null = null;
  #hostContext: McpAppHostContext = { theme: 'light' };
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

  constructor(hostInfo: { name: string; version: string }, capabilities: McpAppHostCapabilities) {
    this.#hostInfo = hostInfo;
    this.#capabilities = capabilities;
  }

  public connect(config: McpAppBridgeConnectConfig): Promise<void> {
    if (this.#sandboxWindow) {
      throw new Error('Bridge is already connected. Call sendTeardown() before connecting again.');
    }

    this.#hostContext = config.hostContext;
    this.#sandboxWindow = config.sandboxWindow;
    window.addEventListener('message', this.#handleMessage);

    const proxyReady = new Promise<void>(resolve => {
      this.#resolveProxyReady = resolve;
    });
    this.#initialized = new Promise<void>(resolve => {
      this.#resolveInitialized = resolve;
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

  public sendToolResult(result: unknown, structuredContent?: unknown): void {
    const base = (result && typeof result === 'object' ? result : { content: [] }) as Record<string, unknown>;
    const params = structuredContent !== undefined ? { ...base, structuredContent } : base;
    this.#sendNotification('ui/notifications/tool-result', params);
  }

  public sendToolCancelled(reason?: string): void {
    this.#sendNotification('ui/notifications/tool-cancelled', { reason: reason ?? 'cancelled' });
  }

  public sendHostContextChange(hostContext: McpAppHostContext): void {
    this.#hostContext = hostContext;
    this.#sendNotification('ui/notifications/host-context-changed', this.#toWireHostContext(hostContext));
  }

  public sendTeardown(): Promise<void> {
    const ack = this.#sendRequest('ui/resource-teardown', {}).catch(() => undefined);
    const timeout = new Promise<void>(resolve => setTimeout(resolve, TEARDOWN_TIMEOUT_MS));
    return Promise.race([ack, timeout]).then(() => this.#dispose());
  }

  /** Release the `message` listener + reject any in-flight requests. Idempotent. */
  #dispose(): void {
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
      case 'ui/initialize':
        return {
          protocolVersion: PROTOCOL_VERSION,
          hostInfo: this.#hostInfo,
          hostCapabilities: this.#capabilities,
          hostContext: this.#toWireHostContext(this.#hostContext)
        };
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
        await this.onupdatemodelcontext?.({ content: p.content ?? p.structuredContent });
        return {};
      case 'ui/request-display-mode': {
        const mode = (typeof p.mode === 'string' ? p.mode : 'inline') as McpAppDisplayMode;
        const result = await this.onrequestdisplaymode?.({ mode });
        return { mode: result?.mode ?? mode };
      }
      case 'ui/resource-teardown':
      case 'ping':
        return {};
      case 'tools/call':
        return (
          (await this.oncalltool?.({
            name: typeof p.name === 'string' ? p.name : '',
            arguments: (p.arguments as Record<string, unknown>) ?? {}
          })) ?? { content: [] }
        );
      case 'resources/read':
        return (await this.onreadresource?.({ uri: typeof p.uri === 'string' ? p.uri : '' })) ?? { contents: [] };
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
      availableDisplayModes: hostContext.availableDisplayModes,
      ...(hostContext.container
        ? { containerDimensions: { width: hostContext.container.width, height: hostContext.container.height } }
        : {})
    };
  }
}
