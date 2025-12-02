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

export interface ToolResultEvent {
  toolCallId: string;
  result: unknown;
  message: ChatMessage;
}

export interface AdapterState {
  isConnected: boolean;
  isRunning: boolean;
}

export interface ErrorEvent {
  message: string;
}

export abstract class AgentAdapter {
  protected _state: AdapterState = { isConnected: false, isRunning: false };
  protected _tools: ToolDefinition[] = [];
  public fileUploadCallback?: FileUploadCallback;
  protected _callbacks = {
    onRunStarted: [] as (() => void)[],
    onRunFinished: [] as (() => void)[],
    onMessageStart: [] as ((event: MessageStartEvent) => void)[],
    onMessageDelta: [] as ((event: MessageDeltaEvent) => void)[],
    onMessageEnd: [] as ((event: MessageEndEvent) => void)[],
    onToolCall: [] as ((event: ToolCallEvent) => void)[],
    onToolCallStart: [] as ((event: ToolCallStartEvent) => void)[],
    onToolCallArgs: [] as ((event: ToolCallArgsEvent) => void)[],
    onToolCallEnd: [] as ((event: ToolCallEndEvent) => void)[],
    onToolResult: [] as ((event: ToolResultEvent) => void)[],
    onError: [] as ((event: ErrorEvent) => void)[],
    onStateChange: [] as ((state: AdapterState) => void)[]
  };

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract sendMessage(messages: ChatMessage[]): void;
  public abstract sendToolResult(toolCallId: string, result: unknown): void;
  public abstract abort(): void;

  public abstract get threadId(): string;
  public abstract set threadId(value: string);

  public setTools(tools: ToolDefinition[]): void {
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
    this._callbacks.onRunStarted.push(callback);
  }

  public onRunFinished(callback: () => void): void {
    this._callbacks.onRunFinished.push(callback);
  }

  public onMessageStart(callback: (event: MessageStartEvent) => void): void {
    this._callbacks.onMessageStart.push(callback);
  }

  public onMessageDelta(callback: (event: MessageDeltaEvent) => void): void {
    this._callbacks.onMessageDelta.push(callback);
  }

  public onMessageEnd(callback: (event: MessageEndEvent) => void): void {
    this._callbacks.onMessageEnd.push(callback);
  }

  public onToolCall(callback: (event: ToolCallEvent) => void): void {
    this._callbacks.onToolCall.push(callback);
  }

  public onToolCallStart(callback: (event: ToolCallStartEvent) => void): void {
    this._callbacks.onToolCallStart.push(callback);
  }

  public onToolCallArgs(callback: (event: ToolCallArgsEvent) => void): void {
    this._callbacks.onToolCallArgs.push(callback);
  }

  public onToolCallEnd(callback: (event: ToolCallEndEvent) => void): void {
    this._callbacks.onToolCallEnd.push(callback);
  }

  public onToolResult(callback: (event: ToolResultEvent) => void): void {
    this._callbacks.onToolResult.push(callback);
  }

  public onError(callback: (event: ErrorEvent) => void): void {
    this._callbacks.onError.push(callback);
  }

  public onStateChange(callback: (state: AdapterState) => void): void {
    this._callbacks.onStateChange.push(callback);
  }

  protected _invokeCallbacks<T>(callbacks: Array<(event: T) => void>, event: T): void;
  protected _invokeCallbacks(callbacks: Array<() => void>): void;
  protected _invokeCallbacks<T>(callbacks: Array<((event: T) => void) | (() => void)>, event?: T): void {
    for (const callback of callbacks) {
      (callback as (event?: T) => void)(event);
    }
  }

  protected _emitRunStarted(): void {
    this._invokeCallbacks(this._callbacks.onRunStarted);
  }

  protected _emitRunFinished(): void {
    this._invokeCallbacks(this._callbacks.onRunFinished);
  }

  protected _emitMessageStart(messageId: string): void {
    this._invokeCallbacks(this._callbacks.onMessageStart, { messageId });
  }

  protected _emitMessageDelta(messageId: string, delta: string): void {
    this._invokeCallbacks(this._callbacks.onMessageDelta, { messageId, delta });
  }

  protected _emitMessageEnd(messageId: string): void {
    this._invokeCallbacks(this._callbacks.onMessageEnd, { messageId });
  }

  protected _emitToolCall(event: ToolCallEvent): void {
    this._invokeCallbacks(this._callbacks.onToolCall, event);
  }

  protected _emitToolCallStart(event: ToolCallStartEvent): void {
    this._invokeCallbacks(this._callbacks.onToolCallStart, event);
  }

  protected _emitToolCallArgs(event: ToolCallArgsEvent): void {
    this._invokeCallbacks(this._callbacks.onToolCallArgs, event);
  }

  protected _emitToolCallEnd(event: ToolCallEndEvent): void {
    this._invokeCallbacks(this._callbacks.onToolCallEnd, event);
  }

  protected _emitToolResult(event: ToolResultEvent): void {
    this._invokeCallbacks(this._callbacks.onToolResult, event);
  }

  protected _emitError(message: string): void {
    this._invokeCallbacks(this._callbacks.onError, { message });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._invokeCallbacks(this._callbacks.onStateChange, this.getState());
  }
}
