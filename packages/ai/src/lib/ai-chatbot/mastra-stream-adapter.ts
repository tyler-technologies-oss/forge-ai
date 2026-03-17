import { AgentAdapter } from './agent-adapter.js';
import type { ChatMessage, ToolDefinition } from './types.js';

export interface MastraStreamAdapterConfig {
  url: string;
  headers?: Record<string, string>;
  context?: Record<string, unknown>;
  tools?: ToolDefinition[];
}

interface MastraChunk {
  type: string;
  payload?: {
    text?: string;
    toolCallId?: string;
    toolName?: string;
    args?: string | Record<string, unknown>;
    argsTextDelta?: string;
    delta?: string;
    result?: unknown;
    stepName?: string;
    stepIndex?: number;
    message?: string;
    error?: string;
    messageId?: string;
    conversationId?: string;
  };
  delta?: string;
}

/**
 * AgentAdapter implementation that uses Mastra's native SSE stream format.
 * Parses SSE lines (`data: {json}\n\n`) from the server's fullStream pass-through.
 *
 * ChunkType -> forge-ai event mapping:
 * - text-start       -> messageStart
 * - text-delta       -> messageDelta
 * - text-end         -> messageEnd
 * - tool-call        -> toolCall (complete tool call)
 * - tool-call-input-streaming-start -> toolCallStart
 * - tool-call-delta  -> toolCallArgs
 * - tool-call-input-streaming-end   -> toolCallEnd
 * - tool-result      -> toolResult
 * - reasoning-start  -> customEvent('reasoning-start')
 * - reasoning-delta  -> customEvent('reasoning', delta)
 * - reasoning-end    -> customEvent('reasoning-end')
 * - step-start       -> stepStarted
 * - step-finish      -> stepFinished
 * - finish           -> messageEnd + runFinished
 * - error            -> error
 * - message-metadata -> customEvent('MESSAGE_METADATA')
 */
export class MastraStreamAdapter extends AgentAdapter {
  #url: string;
  #headers: Record<string, string>;
  #context: Record<string, unknown>;
  #threadId: string;
  #abortController: AbortController | null = null;
  #currentMessageId = '';
  #toolCallArgsBuffers = new Map<string, string>();

  constructor(config: MastraStreamAdapterConfig, threadId?: string) {
    super();
    this.#url = config.url;
    this.#headers = config.headers ?? {};
    this.#context = config.context ?? {};
    this.#threadId = threadId ?? crypto.randomUUID();
    if (config.tools) {
      this.setTools(config.tools);
    }
  }

  public get threadId(): string {
    return this.#threadId;
  }

  public set threadId(value: string) {
    this.#threadId = value;
  }

  public setContext(context: Record<string, unknown>): void {
    this.#context = { ...context };
  }

  public getContext(): Record<string, unknown> {
    return { ...this.#context };
  }

  public async connect(): Promise<void> {
    this._updateState({ isConnected: true, isConnecting: false });
  }

  public async disconnect(): Promise<void> {
    this.abort();
    this._updateState({ isConnected: false, isConnecting: false, isRunning: false });
  }

  public abort(): void {
    if (this.#abortController) {
      this.#abortController.abort();
      this.#abortController = null;
    }
    this._updateState({ isRunning: false });
    this._emitRunAborted();
  }

  public sendMessage(messages: ChatMessage[]): void {
    if (!this._state.isConnected) {
      throw new Error('Adapter not connected. Call connect() first.');
    }

    const filteredMessages = this.#filterMessages(messages);
    this.#streamRequest(filteredMessages).catch(err => {
      console.error('[MastraStreamAdapter] sendMessage error:', err);
      this._emitError(err.message ?? 'Unknown error');
      this._updateState({ isRunning: false });
    });
  }

  public sendToolResult(toolCallId: string, result: unknown, messages: ChatMessage[]): void {
    const toolResultMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'tool',
      content: typeof result === 'string' ? result : JSON.stringify(result),
      toolCallId,
      timestamp: Date.now(),
      status: 'complete'
    };
    this.sendMessage([...messages, toolResultMessage]);
  }

  async #streamRequest(messages: ChatMessage[]): Promise<void> {
    this.#abortController = new AbortController();
    this.#currentMessageId = crypto.randomUUID();
    this.#toolCallArgsBuffers.clear();

    this._updateState({ isRunning: true });
    this._emitRunStarted();
    this._emitMessageStart(this.#currentMessageId);

    const body = JSON.stringify({
      messages: messages.map(m => ({
        role: m.role,
        content: m.content,
        ...(m.toolCallId ? { toolCallId: m.toolCallId } : {}),
        ...(m.toolCalls?.length ? { toolCalls: m.toolCalls } : {})
      })),
      threadId: this.#threadId,
      context: this.#context,
      ...(this.getTools().length ? { tools: this.getTools() } : {})
    });

    const response = await fetch(this.#url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.#headers
      },
      credentials: 'include',
      body,
      signal: this.#abortController.signal
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      throw new Error(`Stream request failed (${response.status}): ${errorText}`);
    }

    if (!response.body) {
      throw new Error('Response has no body');
    }

    await this.#readSSEStream(response.body);

    this._emitMessageEnd(this.#currentMessageId);
    this._updateState({ isRunning: false });
    this._emitRunFinished();
    this.#abortController = null;
  }

  async #readSSEStream(body: ReadableStream<Uint8Array>): Promise<void> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) {
            continue;
          }
          const data = trimmed.slice(6);
          if (data === '[DONE]') {
            return;
          }
          try {
            const chunk = JSON.parse(data) as MastraChunk;
            this.#handleChunk(chunk);
          } catch {
            // Skip malformed JSON lines
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  #handleChunk(chunk: MastraChunk): void {
    const { type, payload } = chunk;

    switch (type) {
      case 'text-delta':
        this._emitMessageDelta(this.#currentMessageId, payload?.text ?? chunk.delta ?? '', chunk);
        break;

      case 'text-start':
        break;

      case 'text-end':
        break;

      case 'tool-call':
        this._emitToolCall(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            args: typeof payload?.args === 'string' ? JSON.parse(payload.args) : (payload?.args ?? {})
          },
          chunk
        );
        break;

      case 'tool-call-input-streaming-start':
        this.#toolCallArgsBuffers.set(payload?.toolCallId ?? '', '');
        this._emitToolCallStart(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? ''
          },
          chunk
        );
        break;

      case 'tool-call-delta':
      case 'tool-call-input-streaming-delta': {
        const toolCallId = payload?.toolCallId ?? '';
        const delta = payload?.argsTextDelta ?? payload?.delta ?? '';
        const argsBuffer = (this.#toolCallArgsBuffers.get(toolCallId) ?? '') + delta;
        this.#toolCallArgsBuffers.set(toolCallId, argsBuffer);
        this._emitToolCallArgs(
          {
            id: toolCallId,
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            argsBuffer
          },
          chunk
        );
        break;
      }

      case 'tool-call-input-streaming-end':
        this._emitToolCallEnd(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            args: this.#parseToolArgs(payload?.toolCallId ?? '')
          },
          chunk
        );
        this.#toolCallArgsBuffers.delete(payload?.toolCallId ?? '');
        break;

      case 'tool-result':
        this._emitToolResult(
          {
            toolCallId: payload?.toolCallId ?? '',
            result: payload?.result,
            message: {
              id: crypto.randomUUID(),
              role: 'tool',
              content: typeof payload?.result === 'string' ? payload.result : JSON.stringify(payload?.result ?? ''),
              toolCallId: payload?.toolCallId,
              timestamp: Date.now(),
              status: 'complete'
            }
          },
          chunk
        );
        break;

      case 'reasoning-start':
        this._emitCustomEvent('reasoning-start', {}, chunk);
        break;

      case 'reasoning-delta':
        this._emitCustomEvent('reasoning', { delta: payload?.text ?? '' }, chunk);
        break;

      case 'reasoning-end':
        this._emitCustomEvent('reasoning-end', {}, chunk);
        break;

      case 'step-start':
        this._emitStepStarted(payload?.stepName ?? `step-${payload?.stepIndex ?? 0}`, chunk);
        break;

      case 'step-finish':
        this._emitStepFinished(payload?.stepName ?? `step-${payload?.stepIndex ?? 0}`, chunk);
        break;

      case 'finish':
        break;

      case 'error':
        this._emitError(payload?.message ?? payload?.error ?? 'Agent error');
        break;

      case 'message-metadata':
        this._emitCustomEvent(
          'MESSAGE_METADATA',
          {
            messageId: payload?.messageId,
            conversationId: payload?.conversationId
          },
          chunk
        );
        break;

      default:
        this._emitRawEvent(chunk, chunk);
        break;
    }
  }

  #parseToolArgs(toolCallId: string): Record<string, unknown> {
    const buffer = this.#toolCallArgsBuffers.get(toolCallId) ?? '';
    try {
      return JSON.parse(buffer);
    } catch {
      return {};
    }
  }

  #filterMessages(messages: ChatMessage[]): ChatMessage[] {
    return messages
      .filter(msg => !msg.clientOnly)
      .filter(msg => {
        if (msg.role === 'assistant') {
          return msg.content.trim().length > 0 || (msg.toolCalls && msg.toolCalls.length > 0);
        }
        return true;
      });
  }
}
