import { HttpAgent, type AgentSubscriber } from '@ag-ui/client';
import type {
  AssistantMessage,
  InputContent,
  Message,
  SystemMessage,
  ToolMessage,
  UserMessage,
  Context
} from '@ag-ui/core';
import { AiChatbotAdapterBase } from './adapter-base.js';
import type { ChatMessage, ToolDefinition } from './types.js';
import { generateId } from './utils.js';

export interface AgUiAdapterConfig {
  url: string;
  context?: Record<string, unknown>;
  headers?: Record<string, string>;
}

interface ToolCallState {
  messageId: string;
  name: string;
  argsBuffer: string;
}

export class AgUiAdapter extends AiChatbotAdapterBase {
  #config: AgUiAdapterConfig;
  #agent: HttpAgent;
  #toolCalls = new Map<string, ToolCallState>();
  #threadId: string;
  #textBuffers = new Map<string, string>();

  constructor(config: AgUiAdapterConfig, threadId?: string) {
    super();
    this.#config = config;
    this.#threadId = threadId ?? generateId('thread');
    this.#agent = new HttpAgent({
      url: config.url,
      headers: config.headers
    });
    this.#setupSubscriber();
  }

  public get threadId(): string {
    return this.#threadId;
  }

  public set threadId(value: string) {
    this.#threadId = value;
    this.#agent.threadId = value;
  }

  public static async create(
    config: AgUiAdapterConfig & { tools?: ToolDefinition[]; threadId?: string }
  ): Promise<AgUiAdapter> {
    const { tools, threadId, ...adapterConfig } = config;
    const adapter = new AgUiAdapter(adapterConfig, threadId ?? generateId('thread'));

    if (tools) {
      adapter.registerTools(tools);
    }

    await adapter.connect();
    return adapter;
  }

  public async connect(): Promise<void> {
    this._updateState({ isConnected: true });
  }

  public async disconnect(): Promise<void> {
    this.abort();
    this._updateState({ isConnected: false });
  }

  public sendMessage(messages: ChatMessage[]): void {
    const transformedMessages = this.#transformMessages(messages);
    const context = this.#config.context ? this.#transformContext(this.#config.context) : undefined;

    this.#agent.setMessages(transformedMessages);
    this.#agent.runAgent({
      tools: this._tools,
      context
    });
  }

  public sendToolResult(toolCallId: string, result: unknown): void {
    const toolMessage: ChatMessage = {
      id: generateId('tool'),
      role: 'tool',
      content: JSON.stringify(result),
      timestamp: Date.now(),
      status: 'complete',
      toolCallId
    };

    this.sendMessage([toolMessage]);
  }

  public abort(): void {
    this.#agent.abortRun();
    this.#toolCalls.clear();
    this.#textBuffers.clear();
    this._updateState({ isRunning: false });
  }

  #setupSubscriber(): void {
    const subscriber: AgentSubscriber = {
      onRunInitialized: () => {
        this._updateState({ isRunning: true });
        this._emitRunStarted();
      },
      onTextMessageStartEvent: ({ event }) => {
        this._emitMessageStart(event.messageId);
      },
      onTextMessageContentEvent: ({ textMessageBuffer, event }) => {
        const previousBuffer = this.#textBuffers.get(event.messageId) ?? '';
        const delta = textMessageBuffer.slice(previousBuffer.length);
        this.#textBuffers.set(event.messageId, textMessageBuffer);
        this._emitMessageDelta(event.messageId, delta);
      },
      onTextMessageEndEvent: ({ textMessageBuffer, event }) => {
        // Emit any remaining delta that wasn't sent yet
        const previousBuffer = this.#textBuffers.get(event.messageId) ?? '';
        const finalDelta = textMessageBuffer.slice(previousBuffer.length);

        if (finalDelta.length > 0) {
          this._emitMessageDelta(event.messageId, finalDelta);
        }

        this.#textBuffers.delete(event.messageId);
        this._emitMessageEnd(event.messageId);
      },
      onToolCallStartEvent: ({ event }) => {
        const toolCallState = {
          messageId: event.parentMessageId || '',
          name: event.toolCallName,
          argsBuffer: ''
        };
        this.#toolCalls.set(event.toolCallId, toolCallState);

        this._emitToolCallStart({
          id: event.toolCallId,
          messageId: toolCallState.messageId,
          name: toolCallState.name
        });
      },
      onToolCallArgsEvent: ({ event, partialToolCallArgs, toolCallBuffer }) => {
        const toolCall = this.#toolCalls.get(event.toolCallId);
        if (!toolCall) {
          return;
        }

        if (partialToolCallArgs && Object.keys(partialToolCallArgs).length > 0) {
          toolCall.argsBuffer = JSON.stringify(partialToolCallArgs);
        } else {
          toolCall.argsBuffer = toolCallBuffer;
        }

        this._emitToolCallArgs({
          id: event.toolCallId,
          messageId: toolCall.messageId,
          name: toolCall.name,
          argsBuffer: toolCall.argsBuffer,
          partialArgs: partialToolCallArgs
        });
      },
      onToolCallEndEvent: ({ event, toolCallArgs }) => {
        const toolCall = this.#toolCalls.get(event.toolCallId);
        if (!toolCall) {
          return;
        }

        const args = toolCallArgs || {};

        const toolDef = this._tools?.find(t => t.name === toolCall.name);
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

        this._emitToolCallEnd(toolCallEvent);
        this._emitToolCall(toolCallEvent);
        this.#toolCalls.delete(event.toolCallId);
      },
      onRunFinishedEvent: () => {
        this.#toolCalls.clear();
        this._updateState({ isRunning: false });
        this._emitRunFinished();
      },
      onRunErrorEvent: ({ event }) => {
        this._emitError(event.message || 'Unknown error');
        this._updateState({ isRunning: false });
      },
      onRunFailed: () => {
        this.#toolCalls.clear();
        this.#textBuffers.clear();
        this._emitError('An unknown error occurred. Please try again.');
        this._updateState({ isRunning: false });
      }
    };

    this.#agent.subscribe(subscriber);
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
      .map(msg => {
        switch (msg.role) {
          case 'user': {
            const userMsg: UserMessage & { fileIds?: string[] } = {
              id: msg.id,
              role: 'user',
              content: this.#createInputContent(msg.content)
            };
            if (msg.uploadedFiles && msg.uploadedFiles.length > 0) {
              userMsg.fileIds = msg.uploadedFiles.map(f => f.fileId);
            }
            return userMsg;
          }
          case 'assistant': {
            const assistantMsg: AssistantMessage = {
              id: msg.id,
              role: 'assistant',
              content: msg.content
            };
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

  #createInputContent(content: string): InputContent[] {
    return [{ type: 'text', text: content }];
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
