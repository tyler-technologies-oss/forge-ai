import type { ReactiveController, ReactiveControllerHost } from 'lit';
import {
  AgentAdapter,
  type AdapterState,
  type ErrorEvent,
  type MessageDeltaEvent,
  type MessageEndEvent,
  type McpUiResourceEvent,
  type MessageStartEvent,
  type StepFinishedAgentEvent,
  type StepStartedAgentEvent,
  type ToolCallArgsEvent,
  type ToolCallEndEvent,
  type ToolCallEvent,
  type ToolCallStartEvent,
  type ToolResultEvent
} from '../ai-chatbot/agent-adapter.js';
import { SubscriptionManager } from '../ai-chatbot/event-emitter.js';
import { FileUploadManager } from '../ai-chatbot/file-upload-manager.js';
import { MessageStateController } from '../ai-chatbot/message-state-controller.js';
import type {
  ChatMessage,
  ClientMessageInput,
  FileAttachment,
  FileUploadCallbacks,
  HandlerContext,
  McpAppUiResource,
  MessageItem,
  ThreadState,
  ToolCall,
  AnyToolDefinition,
  UploadedFileMetadata
} from '../ai-chatbot/types.js';
import { generateId } from '../ai-chatbot/utils.js';

export interface ChatbotCoreCallbacks {
  onRequestUpdate: () => void;
  onScrollToBottom: () => void;
  onDispatchEvent: (type: string, detail?: unknown, cancelable?: boolean) => CustomEvent;
}

export interface ChatbotCoreControllerConfig {
  callbacks: ChatbotCoreCallbacks;
}

const UNSETTLED_TOOL_CALL_STATUSES: ToolCall['status'][] = ['pending', 'parsing', 'executing'];

export class ChatbotCoreController implements ReactiveController {
  #host: ReactiveControllerHost;
  #callbacks: ChatbotCoreCallbacks;
  #messageStateController!: MessageStateController;
  #fileUploadManager!: FileUploadManager;
  #adapterSubscriptions?: SubscriptionManager;
  #adapter?: AgentAdapter;
  #executingToolHandlers = 0;
  /** Tool calls announced by an `mcp-ui-resource` event; they only settle via a tool result. */
  readonly #mcpAppToolCallIds = new Set<string>();
  /** Agent tool calls marked complete on their `tool-call` chunk, before any result arrived. */
  readonly #presumedCompleteToolCallIds = new Set<string>();
  /** Resolved UI resources whose tool call is not in state yet. */
  readonly #pendingUiResources = new Map<string, McpAppUiResource>();
  /** Bumped whenever the thread is cleared or replaced, so in-flight UI resource resolves from before are dropped. */
  #threadGeneration = 0;

  constructor(host: ReactiveControllerHost, config: ChatbotCoreControllerConfig) {
    this.#host = host;
    this.#callbacks = config.callbacks;
    host.addController(this);
  }

  public hostConnected(): void {
    this.#messageStateController = new MessageStateController(this.#host, {
      onThreadSettled: () => this.#emitThreadStateChange()
    });

    this.#fileUploadManager = new FileUploadManager({
      onError: error => {
        this.#callbacks.onDispatchEvent('forge-ai-chatbot-error', { error });
      },
      onStateChange: () => {
        this.#callbacks.onRequestUpdate();
      }
    });

    if (this.#adapter) {
      void this.#setupAdapter();
    }
  }

  public hostDisconnected(): void {
    this.#adapterSubscriptions?.unsubscribe();
    this.#adapter?.disconnect();
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-disconnected');
  }

  public get adapter(): AgentAdapter | undefined {
    return this.#adapter;
  }

  public set adapter(value: AgentAdapter | undefined) {
    this.#adapter = value;
    if (value) {
      this.#setupAdapter();
    }
  }

  public get messageItems(): MessageItem[] {
    return this.#messageStateController?.messageItems ?? [];
  }

  public get isStreaming(): boolean {
    return (this.#adapter?.isRunning ?? false) || this.#executingToolHandlers > 0;
  }

  public get isUploading(): boolean {
    return this.#fileUploadManager?.isUploading ?? false;
  }

  public get hasMessages(): boolean {
    return this.messageItems.length > 0;
  }

  public get tools(): Map<string, AnyToolDefinition> {
    return new Map(this.#adapter?.getTools().map(t => [t.name, t]) ?? []);
  }

  public get pendingAttachments(): FileAttachment[] {
    return this.#fileUploadManager?.pendingAttachments ?? [];
  }

  public get completedAttachments(): FileAttachment[] {
    return this.#fileUploadManager?.completedAttachments ?? [];
  }

  async #setupAdapter(): Promise<void> {
    if (!this.#adapter || this.#adapter.isConnecting) {
      return;
    }

    await this.#adapter.connect();

    this.#adapterSubscriptions?.unsubscribe();
    this.#adapterSubscriptions = new SubscriptionManager();
    this.#adapterSubscriptions.add(
      this.#adapter.onRunStarted(this.#handleRunStarted.bind(this)),
      this.#adapter.onMessageStart(this.#handleMessageStart.bind(this)),
      this.#adapter.onMessageDelta(this.#handleMessageDelta.bind(this)),
      this.#adapter.onMessageEnd(this.#handleMessageEnd.bind(this)),
      this.#adapter.onToolCallStart(this.#handleToolCallStart.bind(this)),
      this.#adapter.onToolCallArgs(this.#handleToolCallArgs.bind(this)),
      this.#adapter.onToolCallEnd(this.#handleToolCallEnd.bind(this)),
      this.#adapter.onToolCall(this.#handleToolCall.bind(this)),
      this.#adapter.onToolCallResult(this.#handleToolCallResult.bind(this)),
      this.#adapter.onMcpUiResource(this.#handleMcpUiResource.bind(this)),
      this.#adapter.onStepStarted(this.#handleStepStarted.bind(this)),
      this.#adapter.onStepFinished(this.#handleStepFinished.bind(this)),
      this.#adapter.onRunFinished(this.#handleRunFinished.bind(this)),
      this.#adapter.onRunAborted(this.#handleRunAborted.bind(this)),
      this.#adapter.onError(this.#handleError.bind(this)),
      this.#adapter.onStateChange(this.#handleStateChange.bind(this))
    );

    this.#callbacks.onDispatchEvent('forge-ai-chatbot-connected');
  }

  #handleRunStarted(): void {
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-run-started');
  }

  #handleMessageStart(event: MessageStartEvent): void {
    this.#messageStateController.addTextToResponse(event.messageId, '');
  }

  #handleMessageDelta(event: MessageDeltaEvent): void {
    this.#messageStateController.appendTextDelta(event.messageId, event.delta);
    this.#callbacks.onScrollToBottom();
  }

  #handleMessageEnd(event: MessageEndEvent): void {
    this.#messageStateController.markTextComplete(event.messageId);
  }

  #handleStepStarted(_event: StepStartedAgentEvent): void {
    this.#messageStateController.clearResponseThinking();
  }

  #handleStepFinished(_event: StepFinishedAgentEvent): void {
    this.#messageStateController.markResponseThinking();
    this.#callbacks.onScrollToBottom();
  }

  #handleRunFinished(): void {
    this.#tryCompleteResponse();
  }

  /**
   * A run ended (finished, aborted, or errored) without delivering a result for an
   * MCP-app tool call: mark it cancelled so the widget receives `tool-cancelled`.
   */
  #cancelUnsettledMcpAppToolCalls(): void {
    for (const id of this.#mcpAppToolCallIds) {
      const toolCall = this.#messageStateController.getToolCall(id);
      if (toolCall && UNSETTLED_TOOL_CALL_STATUSES.includes(toolCall.status)) {
        this.#messageStateController.updateToolCallInResponse(id, { status: 'cancelled' });
      }
    }
    this.#mcpAppToolCallIds.clear();
    this.#presumedCompleteToolCallIds.clear();
  }

  /**
   * Finalizes once the run is truly over. An executing client-tool handler or a running
   * adapter means a continuation follows, so widgets stay open for it to settle (§2).
   */
  #tryCompleteResponse(): void {
    if (this.#executingToolHandlers > 0 || this.#adapter?.isRunning) {
      return;
    }
    this.#cancelUnsettledMcpAppToolCalls();
    this.#messageStateController.tryFinalizeResponse();
    const messages = this.getMessages();
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.role === 'assistant' && lastMessage.status === 'complete') {
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-message-received', { message: lastMessage });
    }
  }

  #handleToolCallStart(event: ToolCallStartEvent): void {
    const toolCall: ToolCall = {
      id: event.id,
      messageId: event.messageId,
      name: event.name,
      args: {},
      argsBuffer: '',
      status: 'parsing',
      type: this.tools.has(event.name) ? 'client' : 'agent',
      ...this.#takePendingUiResource(event.id)
    };

    this.#messageStateController.addToolCallToResponse(toolCall);

    const toolDef = this.tools.get(event.name);
    toolDef?.onStart?.({
      toolCallId: event.id,
      toolName: event.name
    });
  }

  #handleToolCallArgs(event: ToolCallArgsEvent): void {
    const updates: Partial<ToolCall> = {
      argsBuffer: event.argsBuffer,
      args: event.partialArgs ?? {}
    };
    this.#messageStateController.updateToolCallInResponse(event.id, updates);
    this.#callbacks.onScrollToBottom();

    const toolDef = this.tools.get(event.name);
    toolDef?.onDelta?.({
      argsBuffer: event.argsBuffer,
      partialArgs: event.partialArgs ?? {},
      toolCallId: event.id,
      toolName: event.name
    });
  }

  #handleToolCallEnd(event: ToolCallEndEvent): void {
    const updates: Partial<ToolCall> = {
      args: event.args,
      argsBuffer: undefined,
      status: 'executing'
    };
    this.#messageStateController.updateToolCallInResponse(event.id, updates);

    const toolDef = this.tools.get(event.name);
    toolDef?.onEnd?.({
      args: event.args,
      toolCallId: event.id,
      toolName: event.name
    });
  }

  #createToolResponse(toolName: string, handlerReturn?: unknown): unknown {
    if (typeof handlerReturn === 'string') {
      return handlerReturn;
    }
    if (handlerReturn && typeof handlerReturn === 'object') {
      return handlerReturn;
    }
    return `Tool '${toolName}' executed successfully`;
  }

  async #handleToolCall(event: ToolCallEvent): Promise<void> {
    let toolCall = this.#messageStateController.getToolCall(event.id);
    if (toolCall) {
      this.#messageStateController.updateToolCallInResponse(event.id, {
        args: event.args,
        status: 'executing'
      });
    } else {
      toolCall = {
        id: event.id,
        messageId: event.messageId,
        name: event.name,
        args: event.args,
        status: 'executing',
        type: this.tools.has(event.name) ? 'client' : 'agent',
        ...this.#takePendingUiResource(event.id)
      };
      this.#messageStateController.addToolCallToResponse(toolCall);
    }

    if (toolCall?.type === 'client') {
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-tool-call', {
        toolCallId: event.id,
        toolName: event.name,
        arguments: event.args
      });

      const toolDef = this.tools.get(event.name);

      if (toolDef?.handler) {
        await Promise.resolve(this.#executeToolHandler(event.id, event.name, toolDef.handler, event.args));
      } else {
        this.#sendToolResult(event.id, this.#createToolResponse(event.name));
      }
    } else if (!this.#mcpAppToolCallIds.has(event.id)) {
      this.#presumedCompleteToolCallIds.add(event.id);
      this.#messageStateController.updateToolCallInResponse(event.id, { status: 'complete' });
    }
  }

  async #executeToolHandler(
    toolCallId: string,
    toolName: string,
    handler: NonNullable<AnyToolDefinition['handler']>,
    args: Record<string, unknown>
  ): Promise<void> {
    this.#executingToolHandlers++;
    this.#callbacks.onRequestUpdate();

    try {
      const context: HandlerContext = {
        args,
        toolCallId,
        toolName,
        signal: undefined
      };
      const handlerReturn = await handler(context);
      await this.#sendToolResult(toolCallId, this.#createToolResponse(toolName, handlerReturn));
    } catch (error) {
      console.error(`Tool handler error [${toolName}]:`, error);
      this.#messageStateController.updateToolCallInResponse(toolCallId, {
        status: 'error',
        result: { error: (error as Error).message }
      });

      const errorMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: 'An unexpected error occurred.',
        timestamp: Date.now(),
        status: 'error'
      };
      this.#messageStateController.addMessage(errorMessage);
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-error', { error: (error as Error).message });
    } finally {
      this.#executingToolHandlers--;
      this.#tryCompleteResponse();
      this.#callbacks.onRequestUpdate();
    }
  }

  #handleError(event: ErrorEvent): void {
    this.#cancelUnsettledMcpAppToolCalls();
    const errorMessage: ChatMessage = {
      id: generateId(),
      role: 'assistant',
      content: event.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#messageStateController.addMessage(errorMessage);
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-message-received', { message: errorMessage });
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-error', { error: event.message });
  }

  #handleRunAborted(): void {
    this.#cancelUnsettledMcpAppToolCalls();
    // Explicit finalize (rather than addMessage's implicit one) so the abort
    // banner can go through the client-message path, which never touches
    // `_activeResponse` on its own.
    this.#messageStateController.tryFinalizeResponse();
    const id = this.#messageStateController.addClientMessage({ content: 'Run cancelled' });
    const abortMessage = this.#messageStateController.getMessage(id);
    if (abortMessage) {
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-message-received', { message: abortMessage });
    }
  }

  #handleStateChange(_state: AdapterState): void {
    this.#callbacks.onRequestUpdate();
  }

  #handleToolCallResult(event: ToolResultEvent): void {
    this.#presumedCompleteToolCallIds.delete(event.toolCallId);
    this.#messageStateController.completeToolCallInResponse(event.toolCallId, event.result, event);
  }

  /**
   * Resolves and stamps the UI resource. Works whether the event arrives before or after
   * the tool call's chunks, mid-run, after the run ended, or after `setMessages` for
   * tool calls restored from history. A resolve that outlives the thread it started in
   * (cleared/replaced, or the adapter swapped) is dropped.
   */
  async #handleMcpUiResource(event: McpUiResourceEvent): Promise<void> {
    const adapter = this.#adapter;
    if (!adapter?.resolveMcpAppResource) {
      return;
    }

    const { toolCallId, resourceUri } = event;
    const generation = this.#threadGeneration;
    this.#mcpAppToolCallIds.add(toolCallId);
    if (this.#presumedCompleteToolCallIds.delete(toolCallId)) {
      this.#messageStateController.updateToolCallInResponse(toolCallId, {
        status: 'executing',
        endTimestamp: undefined
      });
    }

    let uiResource: McpAppUiResource | undefined;
    try {
      uiResource = await adapter.resolveMcpAppResource({ resourceUri, toolCallId });
    } catch (error) {
      console.warn(`[forge-ai-mcp-app] Failed to resolve UI resource for tool call ${toolCallId}:`, error);
      return;
    }

    if (!uiResource || adapter !== this.#adapter || generation !== this.#threadGeneration) {
      return;
    }

    if (this.#messageStateController.getToolCall(toolCallId)) {
      this.#messageStateController.updateToolCallInResponse(toolCallId, { uiResource });
    } else {
      this.#pendingUiResources.set(toolCallId, uiResource);
    }
  }

  #takePendingUiResource(toolCallId: string): Pick<ToolCall, 'uiResource'> {
    const uiResource = this.#pendingUiResources.get(toolCallId);
    if (!uiResource) {
      return {};
    }
    this.#pendingUiResources.delete(toolCallId);
    return { uiResource };
  }

  async #sendToolResult(toolCallId: string, result: unknown): Promise<void> {
    const toolCall = this.#messageStateController.getToolCall(toolCallId);
    if (!toolCall || !this.#adapter) {
      return;
    }

    this.#messageStateController.completeToolCallInResponse(toolCallId, result);
    this.#adapter.sendToolResult(toolCallId, result, this.getMessages());
  }

  public async sendMessage(config: {
    content: string;
    timestamp?: number;
    attachments?: FileAttachment[];
  }): Promise<void> {
    const content = typeof config.content === 'string' ? config.content : '';
    if (!content.trim() || !this.#adapter || this.isStreaming) {
      if (!this.#adapter) {
        console.warn('No adapter configured.');
      }
      return;
    }

    if (!this.#fileUploadManager.canSend()) {
      return;
    }

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: config.timestamp ?? Date.now(),
      status: 'pending'
    };

    this.#messageStateController.addMessage(userMessage);

    try {
      this.#adapter.sendMessage(this.getMessages());
      this.#messageStateController.updateMessageStatus(userMessage.id, 'complete');
    } catch (error) {
      this.#messageStateController.updateMessageStatus(userMessage.id, 'error');
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-error', { error: errorMessage });
    } finally {
      this.#callbacks.onDispatchEvent('forge-ai-chatbot-message-sent', { message: userMessage });
    }
  }

  public processFileUpload(file: File, timestamp: number): string {
    const fileId = generateId();

    this.#fileUploadManager.addAttachment(fileId, {
      filename: file.name,
      size: file.size,
      mimeType: file.type,
      timestamp
    });

    const callbacks = this.createFileUploadCallbacks(fileId);
    this.#adapter?.emitFileUpload(file, callbacks);

    return fileId;
  }

  public createFileUploadCallbacks(fileId: string): FileUploadCallbacks {
    return {
      updateProgress: (progress: number) => {
        this.#fileUploadManager.updateProgress(fileId, progress);
      },
      markComplete: (uploadedFile: UploadedFileMetadata) => {
        this.#fileUploadManager.markComplete(fileId, uploadedFile);
      },
      markError: (error: string) => {
        this.#fileUploadManager.markError(fileId, error);
      },
      onAbort: (callback: () => void) => {
        this.#fileUploadManager.registerOnAbort(fileId, callback);
      }
    };
  }

  public abortFileUpload(fileId: string): void {
    this.#fileUploadManager.abort(fileId);
  }

  public removeCompletedAttachment(attachmentId: string): void {
    const attachment = this.completedAttachments.find(a => a.id === attachmentId);
    if (attachment) {
      this.#fileUploadManager.removeCompletedAttachment(attachmentId);
      this.#callbacks.onRequestUpdate();

      if (attachment.fileId) {
        this.#adapter?.emitFileRemove(attachment.fileId, {
          onSuccess: () => {},
          onError: (error: string) => {
            console.error(`Failed to remove file ${attachment.filename}:`, error);
          }
        });
      }
    }
  }

  public getMessage(id: string): ChatMessage | undefined {
    return this.#messageStateController.getMessage(id);
  }

  public getToolCall(id: string): ToolCall | undefined {
    return this.#messageStateController.getToolCall(id);
  }

  public clearMessages(): void {
    this.#threadGeneration++;
    this.#mcpAppToolCallIds.clear();
    this.#presumedCompleteToolCallIds.clear();
    this.#pendingUiResources.clear();
    this.#messageStateController.clearMessages();
    this.#fileUploadManager.clear();
  }

  public getMessages(): ChatMessage[] {
    return this.#messageStateController.getMessages();
  }

  public setMessages(messages: ChatMessage[]): void {
    this.#threadGeneration++;
    this.#mcpAppToolCallIds.clear();
    this.#presumedCompleteToolCallIds.clear();
    this.#pendingUiResources.clear();
    this.#messageStateController.setMessages(messages);
  }

  public updateMessageContent(id: string, content: string): void {
    this.#messageStateController.updateMessageContent(id, content);
  }

  /** Tool call ids rendered at or after `index` in {@link messageItems}. */
  public getToolCallIdsFrom(index: number): string[] {
    return this.#messageStateController.getToolCallIdsFrom(index);
  }

  public removeMessageItemsFrom(index: number): void {
    for (const id of this.#messageStateController.removeMessageItemsFrom(index)) {
      this.#mcpAppToolCallIds.delete(id);
      this.#presumedCompleteToolCallIds.delete(id);
      this.#pendingUiResources.delete(id);
    }
  }

  public setResponseFeedback(responseId: string, feedback: { type: 'positive' | 'negative'; reason?: string }): void {
    this.#messageStateController.setResponseFeedback(responseId, feedback);
  }

  public addMessage(message: ChatMessage): void {
    this.#messageStateController.addMessage(message);
  }

  public addClientMessage(message: ClientMessageInput): string {
    return this.#messageStateController.addClientMessage(message);
  }

  public removeClientMessage(id: string): void {
    this.#messageStateController.removeClientMessage(id);
  }

  /** Finalizes the in-progress response (if any) so a client message inserted right after it doesn't trail a live bubble. */
  public finalizeActiveResponse(): void {
    this.#messageStateController.tryFinalizeResponse();
  }

  public getThreadState(): ThreadState {
    return {
      threadId: this.#adapter?.threadId,
      messages: this.getMessages(),
      timestamp: Date.now()
    };
  }

  public setThreadState(state: ThreadState): void {
    this.setMessages(state.messages);

    if (state.threadId && this.#adapter) {
      this.#adapter.threadId = state.threadId;
    }
  }

  public abort(): void {
    if (this.#adapter?.isRunning) {
      this.#adapter.abort();
    }
    this.#callbacks.onRequestUpdate();
  }

  public canSendMessage(): boolean {
    return this.#fileUploadManager?.canSend() ?? true;
  }

  #emitThreadStateChange(): void {
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-thread-state-change');
  }
}
