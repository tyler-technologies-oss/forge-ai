import type {
  ChatMessage,
  FileUploadCallbacks,
  McpAppResourceCsp,
  McpAppResourcePermissions,
  McpAppUiResource,
  ToolDefinition
} from './types.js';
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
  /** Companion structured payload delivered to an MCP-app widget, stripped from LLM context. */
  structuredContent?: unknown;
  rawEvent?: unknown;
}

/**
 * Emitted when the backend signals that a tool call is backed by an MCP-app UI
 * resource. Carries the resolved resource URI + policy (never a template); the core
 * controller resolves the HTML and stamps a {@link McpAppUiResource} onto the tool call.
 */
export interface McpUiResourceEvent {
  toolCallId: string;
  toolName?: string;
  /** The concrete resolved `ui://` URI (interpolation done server-side). */
  resourceUri: string;
  serverId?: string;
  mimeType?: string;
  csp?: McpAppResourceCsp;
  permissions?: McpAppResourcePermissions;
  rawEvent?: unknown;
}

/**
 * Parameters an MCP-app widget passes when forwarding a `tools/call` to the server.
 * The library never owns a `Client`; these delegate to the adapter.
 */
export interface McpToolCallParams {
  name: string;
  arguments?: Record<string, unknown>;
}

/** Parameters for an MCP-app widget-initiated `resources/read`. */
export interface McpResourceReadParams {
  uri: string;
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

export interface CustomAgentEvent {
  name: string;
  value: unknown;
  rawEvent?: unknown;
}

export interface RawAgentEvent {
  event: unknown;
  rawEvent?: unknown;
}

export interface RunStartedAgentEvent {
  threadId: string;
  runId: string;
  rawEvent?: unknown;
}

export interface StepStartedAgentEvent {
  stepName: string;
  rawEvent?: unknown;
}

export interface StepFinishedAgentEvent {
  stepName: string;
  rawEvent?: unknown;
}

export interface StateSnapshotAgentEvent {
  state: unknown;
  rawEvent?: unknown;
}

export interface StateDeltaAgentEvent {
  delta: unknown[];
  rawEvent?: unknown;
}

export interface ActivitySnapshotAgentEvent {
  activity: unknown;
  activityMessage?: unknown;
  existingMessage?: unknown;
  rawEvent?: unknown;
}

export interface ActivityDeltaAgentEvent {
  delta: unknown;
  activityMessage?: unknown;
  rawEvent?: unknown;
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
    mcpUiResource: new EventEmitter<McpUiResourceEvent>(),
    fileUpload: new EventEmitter<FileUploadEvent>(),
    fileRemove: new EventEmitter<FileRemoveEvent>(),
    error: new EventEmitter<ErrorEvent>(),
    stateChange: new EventEmitter<AdapterState>(),
    customEvent: new EventEmitter<CustomAgentEvent>(),
    rawEvent: new EventEmitter<RawAgentEvent>(),
    runStartedEvent: new EventEmitter<RunStartedAgentEvent>(),
    stepStarted: new EventEmitter<StepStartedAgentEvent>(),
    stepFinished: new EventEmitter<StepFinishedAgentEvent>(),
    stateSnapshot: new EventEmitter<StateSnapshotAgentEvent>(),
    stateDelta: new EventEmitter<StateDeltaAgentEvent>(),
    activitySnapshot: new EventEmitter<ActivitySnapshotAgentEvent>(),
    activityDelta: new EventEmitter<ActivityDeltaAgentEvent>()
  };

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract sendMessage(messages: ChatMessage[]): void;
  public abstract sendToolResult(toolCallId: string, result: unknown, messages: ChatMessage[]): void;
  public abstract abort(): void;

  public abstract get threadId(): string;
  public abstract set threadId(value: string);

  public clearMemory?(): Promise<void>;

  /**
   * Resolve the MCP-app UI resource for an already-resolved `resourceUri`. The adapter
   * fetches the HTML for that concrete URI and passes through the `csp`/`permissions`
   * from the `mcp-ui-resource` event — it MUST NOT re-derive the URI or the policy
   * (templated-URI interpolation is server-side only).
   */
  public resolveMcpAppResource?(params: {
    resourceUri: string;
    csp?: McpAppResourceCsp;
    permissions?: McpAppResourcePermissions;
  }): Promise<McpAppUiResource | undefined>;

  /** Forward a widget-initiated `tools/call` to the MCP server. */
  public callMcpTool?(params: McpToolCallParams): Promise<unknown>;

  /** Forward a widget-initiated `resources/read` to the MCP server. */
  public readMcpResource?(params: McpResourceReadParams): Promise<unknown>;

  public setTools(tools: ToolDefinition[]): void {
    this._tools = tools;
  }

  public getTools(): ToolDefinition[] {
    return [...this._tools];
  }

  /**
   * Tools to forward to the backend agent, excluding MCP-app tools (`ToolDefinition.mcpApp`).
   * MCP-app tools are a host-internal mechanism for streaming a UI resource into an existing
   * tool call — the model never calls them directly, so they must never reach the agent.
   */
  public getModelFacingTools(): ToolDefinition[] {
    return this._tools.filter(tool => tool.mcpApp === undefined);
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

  public onMcpUiResource(callback: (event: McpUiResourceEvent) => void): Subscription {
    return this._events.mcpUiResource.subscribe(callback);
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

  public onCustomEvent(callback: (event: CustomAgentEvent) => void): Subscription {
    return this._events.customEvent.subscribe(callback);
  }

  public onRawEvent(callback: (event: RawAgentEvent) => void): Subscription {
    return this._events.rawEvent.subscribe(callback);
  }

  public onRunStartedEvent(callback: (event: RunStartedAgentEvent) => void): Subscription {
    return this._events.runStartedEvent.subscribe(callback);
  }

  public onStepStarted(callback: (event: StepStartedAgentEvent) => void): Subscription {
    return this._events.stepStarted.subscribe(callback);
  }

  public onStepFinished(callback: (event: StepFinishedAgentEvent) => void): Subscription {
    return this._events.stepFinished.subscribe(callback);
  }

  public onStateSnapshot(callback: (event: StateSnapshotAgentEvent) => void): Subscription {
    return this._events.stateSnapshot.subscribe(callback);
  }

  public onStateDelta(callback: (event: StateDeltaAgentEvent) => void): Subscription {
    return this._events.stateDelta.subscribe(callback);
  }

  public onActivitySnapshot(callback: (event: ActivitySnapshotAgentEvent) => void): Subscription {
    return this._events.activitySnapshot.subscribe(callback);
  }

  public onActivityDelta(callback: (event: ActivityDeltaAgentEvent) => void): Subscription {
    return this._events.activityDelta.subscribe(callback);
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

  protected _emitMcpUiResource(event: McpUiResourceEvent, rawEvent?: unknown): void {
    this._events.mcpUiResource.emit({ ...event, rawEvent });
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

  protected _emitCustomEvent(name: string, value: unknown, rawEvent?: unknown): void {
    this._events.customEvent.emit({ name, value, rawEvent });
  }

  protected _emitRawEvent(event: unknown, rawEvent?: unknown): void {
    this._events.rawEvent.emit({ event, rawEvent });
  }

  protected _emitRunStartedEvent(threadId: string, runId: string, rawEvent?: unknown): void {
    this._events.runStartedEvent.emit({ threadId, runId, rawEvent });
  }

  protected _emitStepStarted(stepName: string, rawEvent?: unknown): void {
    this._events.stepStarted.emit({ stepName, rawEvent });
  }

  protected _emitStepFinished(stepName: string, rawEvent?: unknown): void {
    this._events.stepFinished.emit({ stepName, rawEvent });
  }

  protected _emitStateSnapshot(state: unknown, rawEvent?: unknown): void {
    this._events.stateSnapshot.emit({ state, rawEvent });
  }

  protected _emitStateDelta(delta: unknown[], rawEvent?: unknown): void {
    this._events.stateDelta.emit({ delta, rawEvent });
  }

  protected _emitActivitySnapshot(
    activity: unknown,
    activityMessage?: unknown,
    existingMessage?: unknown,
    rawEvent?: unknown
  ): void {
    this._events.activitySnapshot.emit({ activity, activityMessage, existingMessage, rawEvent });
  }

  protected _emitActivityDelta(delta: unknown, activityMessage?: unknown, rawEvent?: unknown): void {
    this._events.activityDelta.emit({ delta, activityMessage, rawEvent });
  }

  protected _updateState(updates: Partial<AdapterState>): void {
    this._state = { ...this._state, ...updates };
    this._events.stateChange.emit(this.getState());
  }
}
