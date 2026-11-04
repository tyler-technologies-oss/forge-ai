import { expect } from '@esm-bundle/chai';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { AgentAdapter, type McpAppResourceResolveParams } from '../ai-chatbot/agent-adapter.js';
import type { ChatMessage, McpAppUiResource, ToolCall } from '../ai-chatbot/types.js';
import { ChatbotCoreController } from './chatbot-core-controller.js';

const RESOURCE: McpAppUiResource = { html: '<p>app</p>', csp: {}, permissions: {}, resourceUri: 'ui://weather' };

interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: unknown) => void;
}

function deferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

class TestAdapter extends AgentAdapter {
  public readonly resolves: Array<Deferred<McpAppUiResource | undefined>> = [];
  public threadId = 'thread-1';

  public async connect(): Promise<void> {
    this._updateState({ isConnected: true });
  }

  public async disconnect(): Promise<void> {}
  public sendMessage(): void {}
  public sendToolResult(): void {}
  public abort(): void {}

  public resolveMcpAppResource(_params: McpAppResourceResolveParams): Promise<McpAppUiResource | undefined> {
    const next = deferred<McpAppUiResource | undefined>();
    this.resolves.push(next);
    return next.promise;
  }

  public announce(toolCallId = 'call-1'): void {
    this._emitMcpUiResource({ toolCallId, toolName: 'get_weather', resourceUri: 'ui://weather' });
  }

  public toolCall(id = 'call-1'): void {
    this._emitToolCall({ id, messageId: 'msg-1', name: 'get_weather', args: { city: 'x' } });
  }

  public toolCallStart(id = 'call-1'): void {
    this._emitToolCallStart({ id, messageId: 'msg-1', name: 'get_weather' });
  }

  public toolResult(toolCallId = 'call-1'): void {
    this._emitToolResult({
      toolCallId,
      result: 'sunny',
      message: { id: 'tool-msg', role: 'tool', content: 'sunny', timestamp: 0 }
    });
  }
}

function createHost(): ReactiveControllerHost {
  return {
    addController: (_controller: ReactiveController): void => {},
    removeController: (_controller: ReactiveController): void => {},
    requestUpdate: (): void => {},
    updateComplete: Promise.resolve(true)
  };
}

async function settle(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve));
}

async function setup(): Promise<{ core: ChatbotCoreController; adapter: TestAdapter }> {
  const core = new ChatbotCoreController(createHost(), {
    callbacks: {
      onRequestUpdate: () => {},
      onScrollToBottom: () => {},
      onDispatchEvent: type => new CustomEvent(type)
    }
  });
  core.hostConnected();
  const adapter = new TestAdapter();
  core.adapter = adapter;
  await settle();
  return { core, adapter };
}

function persistedToolCall(messages: ChatMessage[]): ToolCall | undefined {
  return messages.flatMap(message => message.toolCalls ?? [])[0];
}

describe('ChatbotCoreController MCP-app UI resources', () => {
  let warn: typeof console.warn;

  beforeEach(() => {
    warn = console.warn;
    console.warn = (): void => {};
  });

  afterEach(() => {
    console.warn = warn;
  });

  it('should mark a tool call announced before its chunks as loading', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('loading');
    expect(core.getToolCall('call-1')?.uiResource).to.be.undefined;
  });

  it('should mark a tool call announced after its chunks as loading', async () => {
    const { core, adapter } = await setup();

    adapter.toolCall();
    adapter.announce();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('loading');
  });

  it('should merge the loading status on a streamed tool-call start', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCallStart();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('loading');
  });

  it('should keep an announced agent tool call executing rather than presumed complete', async () => {
    const { core, adapter } = await setup();

    adapter.toolCall();
    adapter.announce();

    expect(core.getToolCall('call-1')?.status).to.equal('executing');
  });

  it('should stamp the resource and clear the status once resolved', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    adapter.resolves[0].resolve(RESOURCE);
    await settle();

    expect(core.getToolCall('call-1')?.uiResource).to.equal(RESOURCE);
    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should hold a resource resolved before the tool call arrives', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.resolves[0].resolve(RESOURCE);
    await settle();
    adapter.toolCall();

    expect(core.getToolCall('call-1')?.uiResource).to.equal(RESOURCE);
    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should fall back to a plain tool call when the adapter resolves no resource', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    adapter.resolves[0].resolve(undefined);
    await settle();

    const toolCall = core.getToolCall('call-1');
    expect(toolCall?.uiResource).to.be.undefined;
    expect(toolCall?.uiResourceStatus).to.be.undefined;
    expect(toolCall?.type).to.equal('agent');
  });

  it('should drop the held status when no resource resolves before the tool call arrives', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.resolves[0].resolve(undefined);
    await settle();
    adapter.toolCall();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should mark the widget as failed when the resolve throws', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    adapter.resolves[0].reject(new Error('boom'));
    await settle();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('error');
    expect(core.getToolCall('call-1')?.uiResource).to.be.undefined;
  });

  it('should let the latest announcement win over an older resolve', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    adapter.announce();
    adapter.resolves[1].resolve(RESOURCE);
    await settle();
    adapter.resolves[0].reject(new Error('stale'));
    await settle();

    expect(core.getToolCall('call-1')?.uiResource).to.equal(RESOURCE);
    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should not show an older failure while a newer resolve is loading', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    adapter.announce();
    adapter.resolves[0].reject(new Error('stale'));
    await settle();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('loading');
  });

  it('should strip the status and resource from persisted messages', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    expect(persistedToolCall(core.getMessages())).to.not.have.property('uiResourceStatus');

    adapter.resolves[0].resolve(RESOURCE);
    await settle();
    expect(persistedToolCall(core.getMessages())).to.not.have.property('uiResource');
  });

  it('should not stamp a resolve that outlives a cleared thread', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    core.clearMessages();
    adapter.toolCall();
    adapter.resolves[0].resolve(RESOURCE);
    await settle();

    expect(core.getToolCall('call-1')?.uiResource).to.be.undefined;
    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should not stamp a resolve that outlives a replaced thread', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    const restored = core.getMessages();
    core.setMessages(restored);
    adapter.resolves[0].reject(new Error('stale'));
    await settle();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });

  it('should mark restored tool calls as loading when re-announced', async () => {
    const { core, adapter } = await setup();

    adapter.toolCall();
    adapter.toolResult();
    core.setMessages(core.getMessages());
    adapter.announce();

    expect(core.getToolCall('call-1')?.uiResourceStatus).to.equal('loading');
    adapter.resolves[0].resolve(RESOURCE);
    await settle();
    expect(core.getToolCall('call-1')?.uiResource).to.equal(RESOURCE);
  });

  it('should not stamp a resolve for removed message items', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    core.removeMessageItemsFrom(0);
    adapter.toolCall();
    adapter.resolves[0].resolve(RESOURCE);
    await settle();

    expect(core.getToolCall('call-1')?.uiResource).to.be.undefined;
  });

  it('should fall back to a plain tool call when the adapter is swapped mid-resolve', async () => {
    const { core, adapter } = await setup();

    adapter.announce();
    adapter.toolCall();
    core.adapter = new TestAdapter();
    await settle();
    adapter.resolves[0].resolve(RESOURCE);
    await settle();

    expect(core.getToolCall('call-1')?.uiResource).to.be.undefined;
    expect(core.getToolCall('call-1')?.uiResourceStatus).to.be.undefined;
  });
});
