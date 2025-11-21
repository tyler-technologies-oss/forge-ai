import { AiChatbotAdapterBase, type ToolCallEvent } from './adapter-base.js';
import type { ChatMessage, ToolDefinition } from './types.js';
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
  fileIds?: string[];
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
  parentMessageId?: string;
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
  #activeMessageIds = new Set<string>();
  #toolCalls = new Map<string, ToolCallState>();
  #threadId: string;

  constructor(config: AgUiAdapterConfig, threadId?: string) {
    super();
    this.#config = config;
    this.#threadId = threadId ?? generateId('thread');
  }

  public get threadId(): string {
    return this.#threadId;
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
    this.#abortController = new AbortController();

    this._buildRequestAndExecute(messages);
  }

  protected async _buildRequestAndExecute(messages: ChatMessage[]): Promise<void> {
    const input = await this._buildRequest(messages);
    this._executeRequest(input);
  }

  public sendToolResult(_toolCallId: string, result: unknown): void {
    // Note: This is a placeholder implementation that sends only the tool result message.
    // The chatbot component will have already added the tool message to its context,
    // and will call sendMessage with the full history through the adapter.
    // This method exists to satisfy the abstract interface but is not the primary path
    // unless used on its own.
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
    this.#toolCalls.clear();
    this.#activeMessageIds.clear();
    this._updateState({ isRunning: false });
  }

  protected async _buildRequest(messages: ChatMessage[]): Promise<AgUiRequestInput> {
    const context = this.#config.context ? this._transformContext(this.#config.context) : undefined;
    const transformedMessages = this._transformMessages(messages);
    return {
      runId: generateId('run'),
      threadId: this.#threadId,
      messages: transformedMessages,
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
    const filtered = messages.filter(
      msg => msg.role === 'user' || msg.role === 'assistant' || msg.role === 'system' || msg.role === 'tool'
    );

    return filtered.map((msg) => {
      const coreMsg: CoreMessage = { id: msg.id, role: msg.role, content: msg.content };

      if (msg.uploadedFiles && msg.uploadedFiles.length > 0) {
        coreMsg.fileIds = msg.uploadedFiles.map(f => f.fileId);
      }

      return coreMsg;
    });
  }

  protected async _executeRequest(input: AgUiRequestInput): Promise<void> {
    const url = `${this.#config.baseUrl}/${this.#config.agentId}/ag-ui`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.#config.headers || {})
    };

    let response: Response | undefined;

    try {
      if (!this.#abortController) {
        throw new Error('AbortController not initialized');
      }

      response = await fetch(url, {
        method: 'POST',
        headers,
        credentials: this.#config.credentials || 'include',
        body: JSON.stringify(input),
        signal: this.#abortController.signal
      });

      if (!response.ok) {
        let errorDetail = response.statusText;
        try {
          const errorBody = await response.text();
          if (errorBody) {
            errorDetail = errorBody;
          }
        } catch {
          // Use statusText if body read fails
        }
        throw new Error(`HTTP ${response.status}: ${errorDetail}`);
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
    let currentEvent: { event?: string; data: string[]; id?: string; retry?: number } = { data: [] };

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim() === '') {
            if (currentEvent.data.length > 0) {
              this._handleSSEEvent(currentEvent);
              currentEvent = { data: [] };
            }
            continue;
          }

          const colonIndex = line.indexOf(':');
          if (colonIndex === -1) {
            continue;
          }

          const field = line.slice(0, colonIndex).trim();
          const fieldValue = line.slice(colonIndex + 1).trimStart();

          switch (field) {
            case 'event':
              currentEvent.event = fieldValue;
              break;
            case 'data':
              currentEvent.data.push(fieldValue);
              break;
            case 'id':
              currentEvent.id = fieldValue;
              break;
            case 'retry':
              currentEvent.retry = parseInt(fieldValue, 10);
              break;
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  protected _handleSSEEvent(event: { event?: string; data: string[]; id?: string; retry?: number }): void {
    const data = event.data.join('\n');
    if (!data) {
      return;
    }
    this._handleEventLine(data);
  }

  protected _handleEventLine(data: string): void {
    try {
      const event = JSON.parse(data) as AgUiEvent;
      this._handleProtocolEvent(event);
    } catch (e) {
      const errorMsg = `Failed to parse SSE event: ${(e as Error).message}`;
      this._emitError(errorMsg);
    }
  }

  protected _handleProtocolEvent(event: AgUiEvent): void {
    switch (event.type) {
      case 'TEXT_MESSAGE_START':
        if (!event.messageId) {
          this._emitError('TEXT_MESSAGE_START event missing messageId');
          return;
        }
        this._handleMessageStart(event.messageId);
        break;
      case 'TEXT_MESSAGE_CHUNK':
      case 'TEXT_MESSAGE_CONTENT':
        if (!event.messageId) {
          this._emitError('TEXT_MESSAGE_CHUNK/CONTENT event missing messageId');
          return;
        }
        this._handleMessageChunk(event.messageId, event.delta || '');
        break;
      case 'TEXT_MESSAGE_END':
        if (!event.messageId) {
          this._emitError('TEXT_MESSAGE_END event missing messageId');
          return;
        }
        this._handleMessageEnd(event.messageId);
        break;
      case 'TOOL_CALL_START': {
        const messageId = event.parentMessageId || event.messageId;
        if (!event.toolCallId || !messageId) {
          this._emitError('TOOL_CALL_START event missing toolCallId or parentMessageId/messageId');
          return;
        }
        this._handleToolStart(event.toolCallId, messageId, event.toolName || event.toolCallName || '');
        break;
      }
      case 'TOOL_CALL_ARGS':
        if (!event.toolCallId) {
          this._emitError('TOOL_CALL_ARGS event missing toolCallId');
          return;
        }
        this._handleToolArgs(event.toolCallId, event.delta, event.args);
        break;
      case 'TOOL_CALL_END':
        if (!event.toolCallId) {
          this._emitError('TOOL_CALL_END event missing toolCallId');
          return;
        }
        this._handleToolEnd(event.toolCallId);
        break;
      case 'RUN_STARTED':
        this._updateState({ isRunning: true });
        break;
      case 'RUN_FINISHED':
        // Finalize any active messages before marking run as complete
        this.#activeMessageIds.forEach(messageId => {
          this._handleMessageEnd(messageId);
        });
        this.#toolCalls.clear();
        this._updateState({ isRunning: false });
        this._emitRunFinished();
        break;
      case 'RUN_ERROR':
      case 'error':
        this._emitError(event.error || 'Unknown error');
        break;
    }
  }

  protected _handleMessageStart(messageId: string): void {
    this.#activeMessageIds.add(messageId);
    this._emitMessageStart(messageId);
  }

  protected _handleMessageChunk(messageId: string, delta: string): void {
    if (!this.#activeMessageIds.has(messageId)) {
      // Finalize any other active messages before starting a new one
      this.#activeMessageIds.forEach(activeId => {
        if (activeId !== messageId) {
          this._handleMessageEnd(activeId);
        }
      });
      this._handleMessageStart(messageId);
    }
    this._emitMessageDelta(messageId, delta);
  }

  protected _handleMessageEnd(messageId: string): void {
    this._emitMessageEnd(messageId);
    this.#activeMessageIds.delete(messageId);
  }

  protected _handleToolStart(toolCallId: string, messageId: string, toolName: string): void {
    this.#toolCalls.set(toolCallId, { messageId, name: toolName, argsBuffer: '' });
  }

  protected _handleToolArgs(toolCallId: string, argsChunk?: string, args?: Record<string, unknown>): void {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall) {
      return;
    }

    if (args) {
      toolCall.argsBuffer = JSON.stringify(args);
    } else if (argsChunk) {
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
      const errorMsg = `Failed to parse tool args for ${toolCall.name}: ${(e as Error).message}`;
      this._emitError(errorMsg);
      this.#toolCalls.delete(toolCallId);
      return;
    }

    const toolDef = this._tools?.find(t => t.name === toolCall.name);
    if (toolDef) {
      const validationError = this._validateToolArgs(toolCall.name, args, toolDef);
      if (validationError) {
        this._emitError(validationError);
        this.#toolCalls.delete(toolCallId);
        return;
      }
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

  protected _validateToolArgs(toolName: string, args: Record<string, unknown>, toolDef: ToolDefinition): string | null {
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
