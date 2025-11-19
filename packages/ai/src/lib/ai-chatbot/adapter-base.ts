import type { ChatMessage, FileAttachment, ToolDefinition } from './types.js';

export interface MessageStartEvent {
  messageId: string;
}

export interface MessageDeltaEvent {
  messageId: string;
  delta: string;
}

export interface MessageEndEvent {
  messageId: string;
}

export interface ToolCallEvent {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
}

export interface AdapterState {
  isConnected: boolean;
  isRunning: boolean;
}

export interface ErrorEvent {
  message: string;
}

export abstract class AiChatbotAdapterBase {
  protected _state: AdapterState = { isConnected: false, isRunning: false };
  protected _tools: ToolDefinition[] = [];
  protected _callbacks = {
    onMessageStart: null as ((event: MessageStartEvent) => void) | null,
    onMessageDelta: null as ((event: MessageDeltaEvent) => void) | null,
    onMessageEnd: null as ((event: MessageEndEvent) => void) | null,
    onToolCall: null as ((event: ToolCallEvent) => void) | null,
    onError: null as ((event: ErrorEvent) => void) | null,
    onStateChange: null as ((state: AdapterState) => void) | null
  };

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract sendMessage(messages: ChatMessage[], attachments?: FileAttachment[]): void;
  public abstract sendToolResult(toolCallId: string, result: unknown): void;
  public abstract abort(): void;

  public registerTools(tools: ToolDefinition[]): void {
    this._tools = tools;
  }

  public getTools(): ToolDefinition[] {
    return [...this._tools];
  }

  public getState(): AdapterState {
    return { ...this._state };
  }

  public onMessageStart(callback: (event: MessageStartEvent) => void): void {
    this._callbacks.onMessageStart = callback;
  }

  public onMessageDelta(callback: (event: MessageDeltaEvent) => void): void {
    this._callbacks.onMessageDelta = callback;
  }

  public onMessageEnd(callback: (event: MessageEndEvent) => void): void {
    this._callbacks.onMessageEnd = callback;
  }

  public onToolCall(callback: (event: ToolCallEvent) => void): void {
    this._callbacks.onToolCall = callback;
  }

  public onError(callback: (event: ErrorEvent) => void): void {
    this._callbacks.onError = callback;
  }

  public onStateChange(callback: (state: AdapterState) => void): void {
    this._callbacks.onStateChange = callback;
  }

  protected _emitMessageStart(messageId: string): void {
    this._callbacks.onMessageStart?.({ messageId });
  }

  protected _emitMessageDelta(messageId: string, delta: string): void {
    this._callbacks.onMessageDelta?.({ messageId, delta });
  }

  protected _emitMessageEnd(messageId: string): void {
    this._callbacks.onMessageEnd?.({ messageId });
  }

  protected _emitToolCall(event: ToolCallEvent): void {
    this._callbacks.onToolCall?.(event);
  }

  protected _emitError(message: string): void {
    this._callbacks.onError?.({ message });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._callbacks.onStateChange?.(this.getState());
  }
}
