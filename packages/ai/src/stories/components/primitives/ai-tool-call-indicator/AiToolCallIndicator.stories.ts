import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-tool-call-indicator';
import '$lib/ai-chatbot';
import { AgentAdapter } from '$lib/ai-chatbot/agent-adapter.js';
import { generateId } from '$lib/ai-chatbot/utils.js';
import type { ChatMessage, ToolCall, ToolDefinition } from '$lib/ai-chatbot/types.js';

const component = 'forge-ai-tool-call-indicator';

const tools = new Map<string, ToolDefinition>([
  ['getCurrentWeather', { name: 'getCurrentWeather', displayName: 'Get current weather' }],
  ['lookup_case', { name: 'lookup_case', displayName: 'Case lookup' }],
]);

const toolCalls: ToolCall[] = [
  {
    id: 'tool-1',
    messageId: 'message-1',
    name: 'getCurrentWeather',
    args: { location: 'San Francisco' },
    result: { temperature: 68, condition: 'Sunny' },
    status: 'complete',
    type: 'agent',
    startTimestamp: 1000,
    endTimestamp: 1420
  },
  {
    id: 'tool-3',
    messageId: 'message-3',
    name: 'getCurrentWeather',
    args: { location: 'San Franciscos' },
    result: { temperature: 68, condition: 'Sunny' },
    status: 'complete',
    type: 'agent',
    startTimestamp: 10000,
    endTimestamp: 14200
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'lookup_case',
    args: { caseId: 'CASE-123' },
    result: { message: 'Case not found' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1420,
    endTimestamp: 2210
  }
];

/**
 * Demonstrates the full `isError` pipeline: an adapter reports a failed tool
 * result via `_emitToolResult({ isError: true, ... })`, which
 * `completeToolCallInResponse` maps to `ToolCall.status: 'error'` — the
 * indicator itself only ever reads that resulting status.
 */
class CaseLookupFailureAdapter extends AgentAdapter {
  #threadId = 'case-lookup-demo-thread';

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
    const toolCallId = generateId();
    const toolName = 'lookup_case';
    const args = { caseId: 'CASE-123' };

    this._emitMessageStart(messageId);
    this._emitMessageDelta(messageId, "I'll look that case up for you.");
    this._emitMessageEnd(messageId);

    setTimeout(() => {
      this._emitToolCallStart({ id: toolCallId, messageId, name: toolName });
      this._emitToolCallArgs({
        id: toolCallId,
        messageId,
        name: toolName,
        argsBuffer: JSON.stringify(args),
        partialArgs: args
      });
      this._emitToolCallEnd({ id: toolCallId, messageId, name: toolName, args });
      this._emitToolCall({ id: toolCallId, messageId, name: toolName, args });

      setTimeout(() => {
        const result = { message: 'Case not found' };
        this._emitToolResult({
          toolCallId,
          result,
          isError: true,
          message: {
            id: generateId(),
            role: 'tool',
            content: JSON.stringify(result),
            timestamp: Date.now(),
            status: 'error',
            toolCallId
          }
        });

        this._updateState({ isRunning: false });
        this._emitRunFinished();
      }, 700);
    }, 500);
  }

  public sendToolResult(): void {
    // This demo's only tool call is resolved directly via `_emitToolResult` above.
  }

  public abort(): void {
    this._updateState({ isRunning: false });
  }
}

const meta = {
  title: 'AI Components/Primitives/Tool Call Indicator',
  component,
  tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: () => html`
    <forge-ai-tool-call-indicator .tools=${tools} .toolCalls=${toolCalls}> </forge-ai-tool-call-indicator>
  `
};

export const DebugMode: Story = {
  render: () => html`
    <forge-ai-tool-call-indicator debug-mode .tools=${tools} .toolCalls=${toolCalls}> </forge-ai-tool-call-indicator>
  `
};

export const FailedToolCallFromAdapter: Story = {
  render: () => {
    const adapter = new CaseLookupFailureAdapter();
    const chatTools: ToolDefinition[] = [{ name: 'lookup_case', displayName: 'Case lookup' }];

    return html`
      <forge-ai-chatbot .adapter=${adapter} .tools=${chatTools} debug-mode placeholder="Ask about a case">
      </forge-ai-chatbot>
    `;
  }
};
