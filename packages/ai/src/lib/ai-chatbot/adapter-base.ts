import type { ChatMessage, ToolDefinition, UploadedFileMetadata } from './types.js';

export type FileUploadCallback = (file: File) => Promise<UploadedFileMetadata>;

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

export interface ToolCallStartEvent {
  id: string;
  messageId: string;
  name: string;
}

export interface ToolCallArgsEvent {
  id: string;
  messageId: string;
  name: string;
  argsBuffer: string;
  partialArgs?: Record<string, unknown>;
}

export interface ToolCallEndEvent {
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
  public fileUploadCallback?: FileUploadCallback;
  protected _callbacks = {
    onRunStarted: null as (() => void) | null,
    onRunFinished: null as (() => void) | null,
    onMessageStart: null as ((event: MessageStartEvent) => void) | null,
    onMessageDelta: null as ((event: MessageDeltaEvent) => void) | null,
    onMessageEnd: null as ((event: MessageEndEvent) => void) | null,
    onToolCall: null as ((event: ToolCallEvent) => void) | null,
    onToolCallStart: null as ((event: ToolCallStartEvent) => void) | null,
    onToolCallArgs: null as ((event: ToolCallArgsEvent) => void) | null,
    onToolCallEnd: null as ((event: ToolCallEndEvent) => void) | null,
    onError: null as ((event: ErrorEvent) => void) | null,
    onStateChange: null as ((state: AdapterState) => void) | null
  };

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract sendMessage(messages: ChatMessage[]): void;
  public abstract sendToolResult(toolCallId: string, result: unknown): void;
  public abstract abort(): void;

  public abstract get threadId(): string;
  public abstract set threadId(value: string);

  public registerTools(tools: ToolDefinition[]): void {
    this._tools = tools;
  }

  public setFileUploadCallback(callback: FileUploadCallback): void {
    this.fileUploadCallback = callback;
  }

  public getTools(): ToolDefinition[] {
    return [...this._tools];
  }

  public getState(): AdapterState {
    return { ...this._state };
  }

  public onRunStarted(callback: () => void): void {
    this._callbacks.onRunStarted = callback;
  }

  public onRunFinished(callback: () => void): void {
    this._callbacks.onRunFinished = callback;
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

  public onToolCallStart(callback: (event: ToolCallStartEvent) => void): void {
    this._callbacks.onToolCallStart = callback;
  }

  public onToolCallArgs(callback: (event: ToolCallArgsEvent) => void): void {
    this._callbacks.onToolCallArgs = callback;
  }

  public onToolCallEnd(callback: (event: ToolCallEndEvent) => void): void {
    this._callbacks.onToolCallEnd = callback;
  }

  public onError(callback: (event: ErrorEvent) => void): void {
    this._callbacks.onError = callback;
  }

  public onStateChange(callback: (state: AdapterState) => void): void {
    this._callbacks.onStateChange = callback;
  }

  protected _emitRunStarted(): void {
    this._callbacks.onRunStarted?.();
  }

  protected _emitRunFinished(): void {
    this._callbacks.onRunFinished?.();
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

  protected _emitToolCallStart(event: ToolCallStartEvent): void {
    this._callbacks.onToolCallStart?.(event);
  }

  protected _emitToolCallArgs(event: ToolCallArgsEvent): void {
    this._callbacks.onToolCallArgs?.(event);
  }

  protected _emitToolCallEnd(event: ToolCallEndEvent): void {
    this._callbacks.onToolCallEnd?.(event);
  }

  protected _emitError(message: string): void {
    this._callbacks.onError?.({ message });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._callbacks.onStateChange?.(this.getState());
  }
}
