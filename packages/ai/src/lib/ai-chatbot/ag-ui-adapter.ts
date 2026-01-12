import { AbstractAgent as AgUiAgent, type AgentSubscriber } from '@ag-ui/client';
import { HttpAgentWithCredentials } from './http-agent-with-credentials.js';
import type {
  AssistantMessage,
  Message,
  SystemMessage,
  Tool as AgUiTool,
  ToolCallResultEvent,
  ToolMessage,
  UserMessage,
  Context,
  CustomEvent as AgUiCustomEvent,
  RawEvent as AgUiRawEvent,
  RunStartedEvent as AgUiRunStartedEvent,
  StepStartedEvent as AgUiStepStartedEvent,
  StepFinishedEvent as AgUiStepFinishedEvent,
  StateSnapshotEvent as AgUiStateSnapshotEvent,
  StateDeltaEvent as AgUiStateDeltaEvent,
  ActivitySnapshotEvent as AgUiActivitySnapshotEvent,
  ActivityDeltaEvent as AgUiActivityDeltaEvent,
  ActivityMessage as AgUiActivityMessage
} from '@ag-ui/core';
import { AgentAdapter } from './agent-adapter.js';
import type { ChatMessage, ToolDefinition } from './types.js';
import { generateId } from './utils.js';

export interface AgUiAdapterConfig {
  url: string;
  context?: Record<string, unknown>;
  headers?: Record<string, string>;
  tools?: ToolDefinition[];
}

interface ToolCallState {
  messageId: string;
  name: string;
  argsBuffer: string;
}

export class AgUiAdapter extends AgentAdapter {
  #config: AgUiAdapterConfig;
  #agent: AgUiAgent;
  #toolCalls = new Map<string, ToolCallState>();
  #threadId: string;
  #textBuffers = new Map<string, string>();

  constructor(config: AgUiAdapterConfig, threadId?: string) {
    super();
    this.#config = config;
    this.#threadId = threadId ?? generateId();
    this.#agent = new HttpAgentWithCredentials({
      url: config.url,
      headers: config.headers
    });
    this.#agent.threadId = this.#threadId;
    if (config.tools) {
      this.setTools(config.tools);
    }
    this.#setupSubscriber();
  }

  public get threadId(): string {
    return this.#threadId;
  }

  public set threadId(value: string) {
    this.#threadId = value;
    this.#agent.threadId = value;
  }

  public static async create(config: AgUiAdapterConfig & { threadId?: string }): Promise<AgUiAdapter> {
    const { threadId, ...adapterConfig } = config;
    const adapter = new AgUiAdapter(adapterConfig, threadId ?? generateId());

    await adapter.connect();
    return adapter;
  }

  public async connect(): Promise<void> {
    if (this._state.isConnecting || this._state.isConnected) {
      return;
    }
    this._updateState({ isConnecting: true, isConnected: true });
    await Promise.resolve();
    this._updateState({ isConnecting: false });
  }

  public async disconnect(): Promise<void> {
    this.abort();
    this._updateState({ isConnected: false });
  }

  public sendMessage(messages: ChatMessage[]): void {
    if (!this._state.isConnected) {
      throw new Error('Adapter not connected. Call connect() first.');
    }

    const transformedMessages = this.#transformMessages(messages);
    const context = this.#config.context ? this.#transformContext(this.#config.context) : undefined;

    this.#agent.setMessages(transformedMessages);

    const tools = this.#transformTools(this._tools);

    this.#agent.runAgent({ tools, context });
  }

  public sendToolResult(toolCallId: string, result: unknown, messages?: ChatMessage[]): void {
    const toolMessage: ChatMessage = {
      id: generateId(),
      role: 'tool',
      content: JSON.stringify(result),
      timestamp: Date.now(),
      status: 'complete',
      toolCallId
    };

    messages = messages ? [...messages, toolMessage] : [toolMessage];

    this.sendMessage(messages);
    this._emitToolResult({ toolCallId, result, message: toolMessage });
  }

  public abort(): void {
    if (this._state.isRunning) {
      try {
        this.#agent.abortRun();
      } catch {
        // Ignore abort errors
      }
    }
    this.#clearRunState();
  }

  #setupSubscriber(): void {
    const subscriber: AgentSubscriber = {
      onRunInitialized: this.#handleRunInitialized.bind(this),
      onTextMessageStartEvent: this.#handleTextMessageStart.bind(this),
      onTextMessageContentEvent: this.#handleTextMessageContent.bind(this),
      onTextMessageEndEvent: this.#handleTextMessageEnd.bind(this),
      onToolCallStartEvent: this.#handleToolCallStart.bind(this),
      onToolCallArgsEvent: this.#handleToolCallArgs.bind(this),
      onToolCallEndEvent: this.#handleToolCallEnd.bind(this),
      onToolCallResultEvent: this.#handleToolCallResult.bind(this),
      onRunFinishedEvent: this.#handleRunFinished.bind(this),
      onRunErrorEvent: this.#handleRunError.bind(this),
      onRunFailed: this.#handleRunFailed.bind(this),
      onCustomEvent: this.#handleCustomEvent.bind(this),
      onRawEvent: this.#handleRawEvent.bind(this),
      onRunStartedEvent: this.#handleRunStartedEvent.bind(this),
      onStepStartedEvent: this.#handleStepStartedEvent.bind(this),
      onStepFinishedEvent: this.#handleStepFinishedEvent.bind(this),
      onStateSnapshotEvent: this.#handleStateSnapshotEvent.bind(this),
      onStateDeltaEvent: this.#handleStateDeltaEvent.bind(this),
      onActivitySnapshotEvent: this.#handleActivitySnapshotEvent.bind(this),
      onActivityDeltaEvent: this.#handleActivityDeltaEvent.bind(this)
    };

    this.#agent.subscribe(subscriber);
  }

  #handleRunInitialized(): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();
  }

  #handleTextMessageStart({ event }: { event: { messageId: string } }): void {
    this._emitMessageStart(event.messageId, event);
  }

  #handleTextMessageContent({
    textMessageBuffer,
    event
  }: {
    textMessageBuffer: string;
    event: { messageId: string; delta?: string };
  }): void {
    this.#processTextDelta(event.messageId, textMessageBuffer, false);
  }

  #handleTextMessageEnd({
    textMessageBuffer,
    event
  }: {
    textMessageBuffer: string;
    event: { messageId: string };
  }): void {
    this.#processTextDelta(event.messageId, textMessageBuffer, true);
    this._emitMessageEnd(event.messageId, event);
  }

  #handleToolCallStart({
    event
  }: {
    event: { toolCallId: string; parentMessageId?: string; toolCallName: string };
  }): void {
    const toolCallState = {
      messageId: event.parentMessageId || '',
      name: event.toolCallName,
      argsBuffer: ''
    };
    this.#toolCalls.set(event.toolCallId, toolCallState);

    this._emitToolCallStart(
      {
        id: event.toolCallId,
        messageId: toolCallState.messageId,
        name: toolCallState.name
      },
      event
    );
  }

  #handleToolCallArgs({
    event,
    partialToolCallArgs,
    toolCallBuffer
  }: {
    event: { toolCallId: string };
    partialToolCallArgs?: Record<string, unknown>;
    toolCallBuffer: string;
  }): void {
    const toolCall = this.#getToolCallOrWarn(event.toolCallId);
    if (!toolCall) {
      return;
    }

    if (partialToolCallArgs && Object.keys(partialToolCallArgs).length) {
      toolCall.argsBuffer = JSON.stringify(partialToolCallArgs);
    } else {
      toolCall.argsBuffer = toolCallBuffer;
    }

    this._emitToolCallArgs(
      {
        id: event.toolCallId,
        messageId: toolCall.messageId,
        name: toolCall.name,
        argsBuffer: toolCall.argsBuffer,
        partialArgs: partialToolCallArgs
      },
      event
    );
  }

  #handleToolCallEnd({
    event,
    toolCallArgs
  }: {
    event: { toolCallId: string };
    toolCallArgs?: Record<string, unknown>;
  }): void {
    const toolCall = this.#getToolCallOrWarn(event.toolCallId);
    if (!toolCall) {
      return;
    }

    const args = toolCallArgs || {};

    const toolDef = this.#findToolDefinition(toolCall.name);
    if (toolDef) {
      const validationError = this.#validateToolArgs(toolCall.name, args, toolDef);
      if (validationError) {
        this._emitError(validationError);
        this.#toolCalls.delete(event.toolCallId);
        return;
      }
    }

    const toolCallEvent = {
      id: event.toolCallId,
      messageId: toolCall.messageId,
      name: toolCall.name,
      args
    };

    this._emitToolCallEnd(toolCallEvent, event);
    this._emitToolCall(toolCallEvent, event);
    this.#toolCalls.delete(event.toolCallId);
  }

  #handleToolCallResult({ event }: { event: ToolCallResultEvent }): void {
    const result = JSON.parse(event.content);
    const toolMessage: ChatMessage = {
      id: generateId(),
      role: 'tool',
      content: event.content,
      timestamp: Date.now(),
      status: 'complete',
      toolCallId: event.toolCallId
    };

    this._emitToolResult(
      {
        toolCallId: event.toolCallId,
        result,
        message: toolMessage
      },
      event
    );
  }

  #handleRunFinished(): void {
    this.#clearRunState();
    this._emitRunFinished();
  }

  #handleRunError({ event }: { event: { rawEvent?: { name?: string }; message?: string } }): void {
    if (event.rawEvent?.name === 'AbortError') {
      this.#clearRunState();
      this._emitRunAborted();
      return;
    }

    this._emitError(event.message || 'Unknown error');
    this._updateState({ isRunning: false });
  }

  #handleRunFailed(): void {
    this.#clearRunState();
    this._emitError('An unexpected error occurred. Please try again.');
  }

  #handleCustomEvent({ event }: { event: AgUiCustomEvent }): void {
    this._emitCustomEvent(event.name, event.value, event);
  }

  #handleRawEvent({ event }: { event: AgUiRawEvent }): void {
    this._emitRawEvent(event.event, event);
  }

  #handleRunStartedEvent({ event }: { event: AgUiRunStartedEvent }): void {
    this._emitRunStartedEvent(event.threadId, event.runId, event);
  }

  #handleStepStartedEvent({ event }: { event: AgUiStepStartedEvent }): void {
    this._emitStepStarted(event.stepName, event);
  }

  #handleStepFinishedEvent({ event }: { event: AgUiStepFinishedEvent }): void {
    this._emitStepFinished(event.stepName, event);
  }

  #handleStateSnapshotEvent({ event }: { event: AgUiStateSnapshotEvent }): void {
    this._emitStateSnapshot(event.snapshot, event);
  }

  #handleStateDeltaEvent({ event }: { event: AgUiStateDeltaEvent }): void {
    this._emitStateDelta(event.delta, event);
  }

  #handleActivitySnapshotEvent({
    event,
    activityMessage,
    existingMessage
  }: {
    event: AgUiActivitySnapshotEvent;
    activityMessage?: AgUiActivityMessage;
    existingMessage?: unknown;
  }): void {
    this._emitActivitySnapshot(event.content, activityMessage, existingMessage, event);
  }

  #handleActivityDeltaEvent({
    event,
    activityMessage
  }: {
    event: AgUiActivityDeltaEvent;
    activityMessage?: AgUiActivityMessage;
  }): void {
    this._emitActivityDelta(event.patch, activityMessage, event);
  }

  #processTextDelta(messageId: string, buffer: string, isFinal: boolean): void {
    const previousBuffer = this.#textBuffers.get(messageId) ?? '';
    const delta = buffer.slice(previousBuffer.length);

    if (delta.length) {
      this._emitMessageDelta(messageId, delta);
    }

    if (isFinal) {
      this.#textBuffers.delete(messageId);
    } else {
      this.#textBuffers.set(messageId, buffer);
    }
  }

  #getToolCallOrWarn(toolCallId: string): ToolCallState | null {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      console.warn(`Tool call ${toolCallId} not found in state`);
    }
    return toolCall ?? null;
  }

  #findToolDefinition(name: string): ToolDefinition | undefined {
    return this._tools?.find(t => t.name === name);
  }

  #clearRunState(): void {
    this.#toolCalls.clear();
    this.#textBuffers.clear();
    this._updateState({ isRunning: false });
  }

  #transformTools(tools: ToolDefinition[]): AgUiTool[] | undefined {
    if (!tools || tools.length === 0) {
      return undefined;
    }

    return tools.map(tool => {
      const agUiTool: AgUiTool = {
        name: tool.name,
        description: tool.description ?? '',
        parameters: tool.parameters
      };
      return agUiTool;
    });
  }

  #transformContext(context: Record<string, unknown>): Context[] {
    return Object.entries(context).map(([key, value]) => ({
      description: `Client context: ${key}`,
      value: typeof value === 'string' ? value : JSON.stringify(value)
    }));
  }

  #transformMessages(messages: ChatMessage[]): Message[] {
    return messages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant' || msg.role === 'system' || msg.role === 'tool')
      .filter(msg => {
        // Filter out assistant messages with empty content and no tool calls
        if (msg.role === 'assistant') {
          return msg.content.trim().length > 0 || (msg.toolCalls && msg.toolCalls.length > 0);
        }
        return true;
      })
      .map(msg => {
        switch (msg.role) {
          case 'user': {
            const userMsg: UserMessage = {
              id: msg.id,
              role: 'user',
              content: msg.content
            };
            return userMsg;
          }
          case 'assistant': {
            const assistantMsg: AssistantMessage = {
              id: msg.id,
              role: 'assistant',
              content: msg.content || ''
            };

            // Include tool calls if present
            if (msg.toolCalls && msg.toolCalls.length) {
              assistantMsg.toolCalls = msg.toolCalls.map(tc => ({
                id: tc.id,
                type: 'function' as const,
                function: {
                  name: tc.name,
                  arguments: JSON.stringify(tc.args)
                }
              }));
            }

            return assistantMsg;
          }
          case 'system': {
            const systemMsg: SystemMessage = {
              id: msg.id,
              role: 'system',
              content: msg.content
            };
            return systemMsg;
          }
          case 'tool': {
            const toolMsg: ToolMessage = {
              id: msg.id,
              role: 'tool',
              toolCallId: msg.toolCallId || '',
              content: msg.content
            };
            return toolMsg;
          }
        }
      });
  }

  #validateToolArgs(toolName: string, args: Record<string, unknown>, toolDef: ToolDefinition): string | null {
    const { parameters } = toolDef;
    if (!parameters || parameters.type !== 'object') {
      return null;
    }

    const required = parameters.required || [];
    for (const field of required) {
      if (!(field in args)) {
        return `Tool ${toolName} missing required parameter: ${field}`;
      }
    }

    return null;
  }
}
