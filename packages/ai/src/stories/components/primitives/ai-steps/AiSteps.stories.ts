import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-steps';
import '$lib/ai-chatbot';
import { AgentAdapter } from '$lib/ai-chatbot/agent-adapter.js';
import { generateId } from '$lib/ai-chatbot/utils.js';
import { ToolCall, ChatMessage } from '$lib';

const component = 'forge-ai-steps';

const meta = {
  title: 'AI Components/Primitives/Steps',
  component,
  tags: ['autodocs']
} satisfies Meta;

const toolCalls: ToolCall[] = [
  {
    id: 'tool-1',
    messageId: 'message-1',
    name: 'searched.orders_table',
    args: { name: 'Ergonomic', type: 'Table' },
    result: { temperature: 68, condition: 'Sunny' },
    status: 'complete',
    type: 'agent',
    startTimestamp: 1000,
    endTimestamp: 1420
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'filtered.region',
    args: { name: 'Coffee', type: 'Grounds' },
    result: { method: 'Manual', size: '10kg' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1500,
    endTimestamp: 2210
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'loaded.product_catalog',
    args: { name: 'Duplicate', type: 'Documents' },
    result: { message: 'Case not found' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1420,
    endTimestamp: 2210
  }
];

/**
 * Demonstrates `ToolDefinition.displayAs: 'steps'` end-to-end: an adapter streams a
 * sequence of tool calls through the real event pipeline (`tool-call-start` →
 * `tool-call-args` → `tool-call-end` → `tool-call` → `tool-result`). Because each tool
 * is registered with `displayAs: 'steps'`, `forge-ai-assistant-response` renders them
 * with `forge-ai-steps` instead of `forge-ai-tool-call-indicator`.
 */
class StepsDemoAdapter extends AgentAdapter {
  #threadId = 'steps-demo-thread';

  public constructor() {
    super();
    this.setTools([
      { name: 'searched', displayName: 'Searched', displayAs: 'steps' },
      { name: 'filtered', displayName: 'Filtered', displayAs: 'steps' },
      { name: 'deleted', displayName: 'Deleted', displayAs: 'steps' }
    ]);
  }

  public get threadId(): string {
    return this.#threadId;
  }
  public set threadId(value: string) {
    this.#threadId = value;
  }

  public async connect(): Promise<void> {
    this._updateState({ isConnected: true });
  }

  public async disconnect(): Promise<void> {
    this._updateState({ isConnected: false });
  }

  public sendMessage(_messages: ChatMessage[]): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const messageId = generateId();
    const steps = [
      { name: 'searched', args: { query: 'open invoices' }, result: { count: 12 } },
      { name: 'filtered', args: { status: 'overdue' }, result: { count: 4 } },
      { name: 'deleted', args: { ids: ['INV-1', 'INV-2'] }, result: { removed: 2 } }
    ];

    let delay = 300;
    for (const step of steps) {
      const toolCallId = generateId();
      const startDelay = delay;
      const endDelay = startDelay + 500;

      setTimeout(() => {
        this._emitToolCallStart({ id: toolCallId, messageId, name: step.name });
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: step.name,
          argsBuffer: JSON.stringify(step.args),
          partialArgs: step.args
        });
        this._emitToolCallEnd({ id: toolCallId, messageId, name: step.name, args: step.args });
        this._emitToolCall({ id: toolCallId, messageId, name: step.name, args: step.args });
      }, startDelay);

      setTimeout(() => {
        this._emitToolResult({
          toolCallId,
          result: step.result,
          message: {
            id: generateId(),
            role: 'tool',
            content: JSON.stringify(step.result),
            timestamp: Date.now(),
            status: 'complete',
            toolCallId
          }
        });
      }, endDelay);

      delay = endDelay + 300;
    }

    setTimeout(() => {
      this._emitMessageStart(messageId);
      this._emitMessageDelta(messageId, 'Done — removed 2 overdue invoices after searching and filtering.');
      this._emitMessageEnd(messageId);
      this._updateState({ isRunning: false });
      this._emitRunFinished();
    }, delay);
  }

  public sendToolResult(): void {
    // This demo resolves every tool call directly via `_emitToolResult` above.
  }

  public abort(): void {
    this._updateState({ isRunning: false });
  }
}

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: () => html`<forge-ai-steps .toolCalls=${toolCalls}></forge-ai-steps>`
};

export const WithChatbot: Story = {
  render: () => {
    const adapter = new StepsDemoAdapter();

    return html`
      <forge-ai-chatbot .adapter=${adapter} placeholder="Ask me to clean up overdue invoices"> </forge-ai-chatbot>
    `;
  }
};
