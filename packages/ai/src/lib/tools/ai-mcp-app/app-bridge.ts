import { AppBridge, PostMessageTransport } from '@modelcontextprotocol/ext-apps/app-bridge';
import type { McpAppHostCapabilities, McpAppHostContext } from '../../ai-chatbot';
import type { McpAppBridge, McpAppBridgeConnectConfig } from './mcp-app-bridge.js';

/**
 * Bridge implementation A — wraps the standard MCP `@modelcontextprotocol/ext-apps`
 * `AppBridge`. This is the ONLY file in the library that imports ext-apps (+ its SDK/zod
 * dependency), so it and its deps drop cleanly if the hand-rolled impl B (Step 5) wins.
 *
 * The controller owns the outer sandbox iframe DOM; this bridge owns the AppBridge
 * lifecycle: it scopes its transport to the given `sandboxWindow`, drives the
 * `sandboxready` → `sendSandboxResourceReady` → `initialized` handshake, and maps the
 * ext-apps handler surface onto the bridge-agnostic {@link McpAppBridge} interface.
 */
export class ExtAppsBridge implements McpAppBridge {
  readonly #hostInfo: { name: string; version: string };
  readonly #capabilities: McpAppHostCapabilities;
  #bridge: AppBridge | null = null;

  public oncalltool?: McpAppBridge['oncalltool'];
  public onreadresource?: McpAppBridge['onreadresource'];
  public onopenlink?: McpAppBridge['onopenlink'];
  public onmessage?: McpAppBridge['onmessage'];
  public onloggingmessage?: McpAppBridge['onloggingmessage'];
  public onsizechange?: McpAppBridge['onsizechange'];
  public onrequestdisplaymode?: McpAppBridge['onrequestdisplaymode'];
  public onupdatemodelcontext?: McpAppBridge['onupdatemodelcontext'];

  constructor(hostInfo: { name: string; version: string }, capabilities: McpAppHostCapabilities) {
    this.#hostInfo = hostInfo;
    this.#capabilities = capabilities;
  }

  public connect(config: McpAppBridgeConnectConfig): Promise<void> {
    // The initial host context rides the `ui/initialize` response, so it must be present
    // at construction — `setHostContext` before connect would post over a null transport.
    const bridge = new AppBridge(null, this.#hostInfo, this.#capabilities, {
      hostContext: this.#toMcpUiHostContext(config.hostContext)
    });
    this.#bridge = bridge;
    this.#registerHandlers(bridge);

    const transport = new PostMessageTransport(config.sandboxWindow, config.sandboxWindow);

    const sandboxReady = new Promise<void>(resolve => {
      const onReady = (): void => {
        bridge.removeEventListener('sandboxready', onReady);
        void bridge.sendSandboxResourceReady({
          html: config.html,
          permissions: config.permissions as never,
          sandbox: config.sandbox
        });
        resolve();
      };
      bridge.addEventListener('sandboxready', onReady);
    });

    const initialized = new Promise<void>(resolve => {
      const onInitialized = (): void => {
        bridge.removeEventListener('initialized', onInitialized);
        resolve();
      };
      bridge.addEventListener('initialized', onInitialized);
    });

    return bridge
      .connect(transport)
      .then(() => sandboxReady)
      .then(() => initialized);
  }

  public sendToolInputPartial(args: Record<string, unknown>): void {
    void this.#bridge?.sendToolInputPartial({ arguments: args });
  }

  public sendToolInput(args: Record<string, unknown>): void {
    void this.#bridge?.sendToolInput({ arguments: args });
  }

  public sendToolResult(result: unknown, structuredContent?: unknown): void {
    const base = (result && typeof result === 'object' ? result : { content: [] }) as Record<string, unknown>;
    const params = structuredContent !== undefined ? { ...base, structuredContent } : base;
    void this.#bridge?.sendToolResult(params as never);
  }

  public sendToolCancelled(reason?: string): void {
    void this.#bridge?.sendToolCancelled({ reason: reason ?? 'cancelled' });
  }

  public sendHostContextChange(hostContext: McpAppHostContext): void {
    this.#bridge?.setHostContext(this.#toMcpUiHostContext(hostContext));
  }

  public sendTeardown(): Promise<void> {
    return this.#bridge?.teardownResource({}).then(() => undefined) ?? Promise.resolve();
  }

  #registerHandlers(bridge: AppBridge): void {
    bridge.oncalltool = async params => {
      const result = await this.oncalltool?.({ name: params.name, arguments: params.arguments });
      return (result ?? { content: [] }) as never;
    };
    bridge.onreadresource = async params => {
      const result = await this.onreadresource?.({ uri: params.uri });
      return (result ?? { contents: [] }) as never;
    };
    bridge.onopenlink = async params => {
      this.onopenlink?.({ url: params.url });
      return {};
    };
    bridge.onmessage = async params => {
      const text = params.content
        .filter((block): block is { type: 'text'; text: string } => block.type === 'text')
        .map(block => block.text)
        .join('');
      await this.onmessage?.({ content: text, role: params.role });
      return {};
    };
    bridge.onrequestdisplaymode = async params => {
      const result = await this.onrequestdisplaymode?.({ mode: params.mode });
      return { mode: result?.mode ?? params.mode };
    };
    bridge.onupdatemodelcontext = async params => {
      await this.onupdatemodelcontext?.({ content: params.content });
      return {};
    };
    bridge.addEventListener('loggingmessage', params => {
      this.onloggingmessage?.({ level: params.level, logger: params.logger, data: params.data });
    });
    bridge.addEventListener('sizechange', params => {
      this.onsizechange?.({ width: params.width, height: params.height ?? 0 });
    });
  }

  #toMcpUiHostContext(hostContext: McpAppHostContext): Parameters<AppBridge['setHostContext']>[0] {
    return {
      theme: hostContext.theme,
      availableDisplayModes: hostContext.availableDisplayModes,
      ...(hostContext.container
        ? { containerDimensions: { width: hostContext.container.width, height: hostContext.container.height } }
        : {})
    };
  }
}
