import type { ChatMessage, FileUploadCallbacks, ToolDefinition } from './types.js';
import { EventEmitter, type Subscription } from './event-emitter.js';

export interface MessageStartEvent {
  messageId: string;
  rawEvent?: unknown;
}

export interface MessageDeltaEvent {
  messageId: string;
  delta: string;
  rawEvent?: unknown;
}

export interface MessageEndEvent {
  messageId: string;
  rawEvent?: unknown;
}

export interface ToolCallEvent {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  rawEvent?: unknown;
}

export interface ToolCallStartEvent {
  id: string;
  messageId: string;
  name: string;
  rawEvent?: unknown;
}

export interface ToolCallArgsEvent {
  id: string;
  messageId: string;
  name: string;
  argsBuffer: string;
  partialArgs?: Record<string, unknown>;
  rawEvent?: unknown;
}

export interface ToolCallEndEvent {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  rawEvent?: unknown;
}

export interface ToolResultEvent {
  toolCallId: string;
  result: unknown;
  message: ChatMessage;
  rawEvent?: unknown;
}

export interface AdapterState {
  isConnected: boolean;
  isConnecting: boolean;
  isRunning: boolean;
}

export interface FileUploadEvent extends FileUploadCallbacks {
  file: File;
}

export interface FileRemoveEvent {
  fileId: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export interface ErrorEvent {
  message: string;
}

export abstract class AgentAdapter {
  protected _state: AdapterState = { isConnected: false, isConnecting: false, isRunning: false };
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
    fileRemove: new EventEmitter<FileRemoveEvent>(),
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

  public clearMemory?(): Promise<void>;

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

  public get isConnecting(): boolean {
    return this._state.isConnecting;
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

  public onToolCallResult(callback: (event: ToolResultEvent) => void): Subscription {
    return this._events.toolResult.subscribe(callback);
  }

  public onFileUpload(callback: (event: FileUploadEvent) => void): Subscription {
    return this._events.fileUpload.subscribe(callback);
  }

  public onFileRemove(callback: (event: FileRemoveEvent) => void): Subscription {
    return this._events.fileRemove.subscribe(callback);
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

  protected _emitMessageStart(messageId: string, rawEvent?: unknown): void {
    this._events.messageStart.emit({ messageId, rawEvent });
  }

  protected _emitMessageDelta(messageId: string, delta: string, rawEvent?: unknown): void {
    this._events.messageDelta.emit({ messageId, delta, rawEvent });
  }

  protected _emitMessageEnd(messageId: string, rawEvent?: unknown): void {
    this._events.messageEnd.emit({ messageId, rawEvent });
  }

  protected _emitToolCall(event: ToolCallEvent, rawEvent?: unknown): void {
    this._events.toolCall.emit({ ...event, rawEvent });
  }

  protected _emitToolCallStart(event: ToolCallStartEvent, rawEvent?: unknown): void {
    this._events.toolCallStart.emit({ ...event, rawEvent });
  }

  protected _emitToolCallArgs(event: ToolCallArgsEvent, rawEvent?: unknown): void {
    this._events.toolCallArgs.emit({ ...event, rawEvent });
  }

  protected _emitToolCallEnd(event: ToolCallEndEvent, rawEvent?: unknown): void {
    this._events.toolCallEnd.emit({ ...event, rawEvent });
  }

  protected _emitToolResult(event: ToolResultEvent, rawEvent?: unknown): void {
    this._events.toolResult.emit({ ...event, rawEvent });
  }

  public emitFileUpload(file: File, callbacks: FileUploadCallbacks): void {
    this._events.fileUpload.emit({ file, ...callbacks });
  }

  public emitFileRemove(fileId: string, callbacks: { onSuccess: () => void; onError: (error: string) => void }): void {
    this._events.fileRemove.emit({ fileId, ...callbacks });
  }

  protected _emitError(message: string): void {
    this._events.error.emit({ message });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._events.stateChange.emit(this.getState());
  }
}
