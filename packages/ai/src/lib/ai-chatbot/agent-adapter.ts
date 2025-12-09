import type { ChatMessage, FileUploadCallbacks, ToolDefinition } from './types.js';
import { EventEmitter, type Subscription } from './event-emitter.js';

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

export interface FileUploadEvent extends FileUploadCallbacks {
  file: File;
}

export interface ErrorEvent {
  message: string;
}

export abstract class AgentAdapter {
  protected _state: AdapterState = { isConnected: false, isRunning: false };
  protected _tools: ToolDefinition[] = [];
  protected _events = {
    runStarted: new EventEmitter<void>(),
    runFinished: new EventEmitter<void>(),
    runAborted: new EventEmitter<void>(),
    messageStart: new EventEmitter<MessageStartEvent>(),
    messageDelta: new EventEmitter<MessageDeltaEvent>(),
    messageEnd: new EventEmitter<MessageEndEvent>(),
    toolCall: new EventEmitter<ToolCallEvent>(),
    toolCallStart: new EventEmitter<ToolCallStartEvent>(),
    toolCallArgs: new EventEmitter<ToolCallArgsEvent>(),
    toolCallEnd: new EventEmitter<ToolCallEndEvent>(),
    toolResult: new EventEmitter<ToolResultEvent>(),
    fileUpload: new EventEmitter<FileUploadEvent>(),
    error: new EventEmitter<ErrorEvent>(),
    stateChange: new EventEmitter<AdapterState>()
  };

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract sendMessage(messages: ChatMessage[]): void;
  public abstract sendToolResult(toolCallId: string, result: unknown, messages: ChatMessage[]): void;
  public abstract abort(): void;

  public abstract get threadId(): string;
  public abstract set threadId(value: string);

  public setTools(tools: ToolDefinition[]): void {
    this._tools = tools;
  }

  public getTools(): ToolDefinition[] {
    return [...this._tools];
  }

  public getState(): AdapterState {
    return { ...this._state };
  }

  public get isConnected(): boolean {
    return this._state.isConnected;
  }

  public get isRunning(): boolean {
    return this._state.isRunning;
  }

  public onRunStarted(callback: () => void): Subscription {
    return this._events.runStarted.subscribe(callback);
  }

  public onRunFinished(callback: () => void): Subscription {
    return this._events.runFinished.subscribe(callback);
  }

  public onRunAborted(callback: () => void): Subscription {
    return this._events.runAborted.subscribe(callback);
  }

  public onMessageStart(callback: (event: MessageStartEvent) => void): Subscription {
    return this._events.messageStart.subscribe(callback);
  }

  public onMessageDelta(callback: (event: MessageDeltaEvent) => void): Subscription {
    return this._events.messageDelta.subscribe(callback);
  }

  public onMessageEnd(callback: (event: MessageEndEvent) => void): Subscription {
    return this._events.messageEnd.subscribe(callback);
  }

  public onToolCall(callback: (event: ToolCallEvent) => void): Subscription {
    return this._events.toolCall.subscribe(callback);
  }

  public onToolCallStart(callback: (event: ToolCallStartEvent) => void): Subscription {
    return this._events.toolCallStart.subscribe(callback);
  }

  public onToolCallArgs(callback: (event: ToolCallArgsEvent) => void): Subscription {
    return this._events.toolCallArgs.subscribe(callback);
  }

  public onToolCallEnd(callback: (event: ToolCallEndEvent) => void): Subscription {
    return this._events.toolCallEnd.subscribe(callback);
  }

  public onToolResult(callback: (event: ToolResultEvent) => void): Subscription {
    return this._events.toolResult.subscribe(callback);
  }

  public onFileUpload(callback: (event: FileUploadEvent) => void): Subscription {
    return this._events.fileUpload.subscribe(callback);
  }

  public onError(callback: (event: ErrorEvent) => void): Subscription {
    return this._events.error.subscribe(callback);
  }

  public onStateChange(callback: (state: AdapterState) => void): Subscription {
    return this._events.stateChange.subscribe(callback);
  }

  protected _emitRunStarted(): void {
    this._events.runStarted.emit();
  }

  protected _emitRunFinished(): void {
    this._events.runFinished.emit();
  }

  protected _emitRunAborted(): void {
    this._events.runAborted.emit();
  }

  protected _emitMessageStart(messageId: string): void {
    this._events.messageStart.emit({ messageId });
  }

  protected _emitMessageDelta(messageId: string, delta: string): void {
    this._events.messageDelta.emit({ messageId, delta });
  }

  protected _emitMessageEnd(messageId: string): void {
    this._events.messageEnd.emit({ messageId });
  }

  protected _emitToolCall(event: ToolCallEvent): void {
    this._events.toolCall.emit(event);
  }

  protected _emitToolCallStart(event: ToolCallStartEvent): void {
    this._events.toolCallStart.emit(event);
  }

  protected _emitToolCallArgs(event: ToolCallArgsEvent): void {
    this._events.toolCallArgs.emit(event);
  }

  protected _emitToolCallEnd(event: ToolCallEndEvent): void {
    this._events.toolCallEnd.emit(event);
  }

  protected _emitToolResult(event: ToolResultEvent): void {
    this._events.toolResult.emit(event);
  }

  public emitFileUpload(file: File, callbacks: FileUploadCallbacks): void {
    this._events.fileUpload.emit({ file, ...callbacks });
  }

  protected _emitError(message: string): void {
    this._events.error.emit({ message });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._events.stateChange.emit(this.getState());
  }
}
