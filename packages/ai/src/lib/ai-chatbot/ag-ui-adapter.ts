import { AiChatbotAdapterBase, type ToolCallEvent } from './adapter-base.js';
import type { ChatMessage, FileAttachment, ToolDefinition } from './types.js';
import { generateId } from './utils.js';

export interface AgUiAdapterConfig {
  baseUrl: string;
  agentId: string;
  context?: Record<string, unknown>;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
}

interface ContextEntry {
  description: string;
  value: unknown;
}

interface CoreMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

interface AgUiRequestInput {
  runId: string;
  threadId: string;
  messages: CoreMessage[];
  context?: ContextEntry[];
  tools?: ToolDefinition[];
}

type AgUiEventType =
  | 'TEXT_MESSAGE_START'
  | 'TEXT_MESSAGE_CHUNK'
  | 'TEXT_MESSAGE_CONTENT'
  | 'TEXT_MESSAGE_END'
  | 'TOOL_CALL_START'
  | 'TOOL_CALL_ARGS'
  | 'TOOL_CALL_END'
  | 'RUN_STARTED'
  | 'RUN_FINISHED'
  | 'RUN_ERROR'
  | 'error';

interface AgUiEvent {
  type: AgUiEventType;
  delta?: string;
  messageId?: string;
  toolCallId?: string;
  toolName?: string;
  toolCallName?: string;
  args?: Record<string, unknown>;
  error?: string;
}

interface ToolCallState {
  messageId: string;
  name: string;
  argsBuffer: string;
}

export class AgUiAdapter extends AiChatbotAdapterBase {
  #config: AgUiAdapterConfig;
  #abortController: AbortController | null = null;
  #currentMessageId: string | null = null;
  #toolCalls = new Map<string, ToolCallState>();
  #threadId: string;

  constructor(config: AgUiAdapterConfig, threadId: string) {
    super();
    this.#config = config;
    this.#threadId = threadId;
  }

  public async connect(): Promise<void> {
    this._updateState({ isConnected: true });
  }

  public async disconnect(): Promise<void> {
    this.abort();
    this._updateState({ isConnected: false });
  }

  public sendMessage(messages: ChatMessage[], attachments?: FileAttachment[]): void {
    this.#abortController = new AbortController();
    this._updateState({ isRunning: true });

    const input = this._buildRequest(messages, attachments);
    this._executeRequest(input);
  }

  public sendToolResult(_toolCallId: string, result: unknown): void {
    const toolMessage: ChatMessage = {
      id: generateId('tool'),
      role: 'tool',
      content: JSON.stringify(result),
      timestamp: Date.now(),
      status: 'complete'
    };

    this.sendMessage([toolMessage]);
  }

  public abort(): void {
    this.#abortController?.abort();
    this.#abortController = null;
    this._updateState({ isRunning: false });
  }

  protected _buildRequest(messages: ChatMessage[], _attachments?: FileAttachment[]): AgUiRequestInput {
    const context = this.#config.context ? this._transformContext(this.#config.context) : undefined;
    return {
      runId: generateId('run'),
      threadId: this.#threadId,
      messages: this._transformMessages(messages),
      context,
      tools: this._tools
    };
  }

  protected _transformContext(context: Record<string, unknown>): ContextEntry[] {
    return Object.entries(context).map(([key, value]) => ({
      description: `Client context: ${key}`,
      value: typeof value === 'string' ? value : JSON.stringify(value)
    }));
  }

  protected _transformMessages(messages: ChatMessage[]): CoreMessage[] {
    return messages
      .filter(msg => msg.role === 'user' || msg.role === 'tool')
      .map(msg => ({ id: msg.id, role: msg.role, content: msg.content }));
  }

  protected async _executeRequest(input: AgUiRequestInput): Promise<void> {
    const url = `${this.#config.baseUrl}/${this.#config.agentId}/ag-ui`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.#config.headers || {})
    };

    try {
      if (!this.#abortController) {
        throw new Error('AbortController not initialized');
      }

      const response = await fetch(url, {
        method: 'POST',
        headers,
        credentials: this.#config.credentials || 'include',
        body: JSON.stringify(input),
        signal: this.#abortController.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      await this._processResponseStream(response.body);
    } catch (error: unknown) {
      const err = error as { name?: string; message?: string };
      if (err.name !== 'AbortError') {
        this._emitError(err.message || 'Unknown error occurred');
      }
    } finally {
      this._updateState({ isRunning: false });
    }
  }

  protected async _processResponseStream(body: ReadableStream<Uint8Array>): Promise<void> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          this._handleEventLine(line.slice(6));
        }
      }
    }
  }

  protected _handleEventLine(data: string): void {
    try {
      const event = JSON.parse(data) as AgUiEvent;
      this._handleProtocolEvent(event);
    } catch (e) {
      console.error('Failed to parse SSE event:', e, data);
    }
  }

  protected _handleProtocolEvent(event: AgUiEvent): void {
    switch (event.type) {
      case 'TEXT_MESSAGE_START':
        this._handleMessageStart(event.messageId || '');
        break;
      case 'TEXT_MESSAGE_CHUNK':
      case 'TEXT_MESSAGE_CONTENT':
        this._handleMessageChunk(event.messageId || '', event.delta || '');
        break;
      case 'TEXT_MESSAGE_END':
        this._handleMessageEnd(event.messageId || '');
        break;
      case 'TOOL_CALL_START':
        this._handleToolStart(event.toolCallId || '', event.messageId || '', event.toolName || event.toolCallName || '');
        break;
      case 'TOOL_CALL_ARGS':
        this._handleToolArgs(event.toolCallId || '', event.delta, event.args);
        break;
      case 'TOOL_CALL_END':
        this._handleToolEnd(event.toolCallId || '');
        break;
      case 'RUN_STARTED':
      case 'RUN_FINISHED':
        break;
      case 'RUN_ERROR':
      case 'error':
        this._emitError(event.error || 'Unknown error');
        break;
    }
  }

  protected _handleMessageStart(messageId: string): void {
    this.#currentMessageId = messageId;
    this._emitMessageStart(messageId);
  }

  protected _handleMessageChunk(messageId: string, delta: string): void {
    if (!this.#currentMessageId) {
      this._handleMessageStart(messageId);
    }
    this._emitMessageDelta(messageId, delta);
  }

  protected _handleMessageEnd(messageId: string): void {
    this._emitMessageEnd(messageId);
    this.#currentMessageId = null;
  }

  protected _handleToolStart(toolCallId: string, messageId: string, toolName: string): void {
    this.#toolCalls.set(toolCallId, { messageId, name: toolName, argsBuffer: '' });
  }

  protected _handleToolArgs(toolCallId: string, argsChunk?: string, _args?: Record<string, unknown>): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    if (argsChunk) {
      toolCall.argsBuffer += argsChunk;
    }
  }

  protected _handleToolEnd(toolCallId: string): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    let args: Record<string, unknown> = {};
    try {
      args = JSON.parse(toolCall.argsBuffer);
    } catch (e) {
      console.error('Failed to parse tool args:', e);
    }

    const event: ToolCallEvent = {
      id: toolCallId,
      messageId: toolCall.messageId,
      name: toolCall.name,
      args
    };

    this._emitToolCall(event);
    this.#toolCalls.delete(toolCallId);
  }
}
