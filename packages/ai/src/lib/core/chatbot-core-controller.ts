import type { ReactiveController, ReactiveControllerHost } from 'lit';
import {
  AgentAdapter,
  type AdapterState,
  type ErrorEvent,
  type MessageDeltaEvent,
  type MessageEndEvent,
  type MessageStartEvent,
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
  FileAttachment,
  FileUploadCallbacks,
  HandlerContext,
  MessageItem,
  ThreadState,
  ToolCall,
  ToolDefinition,
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

export class ChatbotCoreController implements ReactiveController {
  #host: ReactiveControllerHost;
  #callbacks: ChatbotCoreCallbacks;
  #messageStateController!: MessageStateController;
  #fileUploadManager!: FileUploadManager;
  #adapterSubscriptions?: SubscriptionManager;
  #adapter?: AgentAdapter;
  #toolsMap?: Map<string, ToolDefinition>;
  #executingToolHandlers = 0;

  constructor(host: ReactiveControllerHost, config: ChatbotCoreControllerConfig) {
    this.#host = host;
    this.#callbacks = config.callbacks;
    host.addController(this);
  }

  public hostConnected(): void {
    this.#messageStateController = new MessageStateController(this.#host, {
      tools: this.tools,
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
    this.#toolsMap = undefined;
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

  public get tools(): Map<string, ToolDefinition> {
    if (!this.#toolsMap) {
      this.#toolsMap = new Map(this.#adapter?.getTools().map(t => [t.name, t]) ?? []);
    }
    return this.#toolsMap;
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
      this.#adapter.onMessageStart(this.#handleMessageStart.bind(this)),
      this.#adapter.onMessageDelta(this.#handleMessageDelta.bind(this)),
      this.#adapter.onMessageEnd(this.#handleMessageEnd.bind(this)),
      this.#adapter.onToolCallStart(this.#handleToolCallStart.bind(this)),
      this.#adapter.onToolCallArgs(this.#handleToolCallArgs.bind(this)),
      this.#adapter.onToolCallEnd(this.#handleToolCallEnd.bind(this)),
      this.#adapter.onToolCall(this.#handleToolCall.bind(this)),
      this.#adapter.onToolCallResult(this.#handleToolCallResult.bind(this)),
      this.#adapter.onRunFinished(this.#handleRunFinished.bind(this)),
      this.#adapter.onRunAborted(this.#handleRunAborted.bind(this)),
      this.#adapter.onError(this.#handleError.bind(this)),
      this.#adapter.onStateChange(this.#handleStateChange.bind(this))
    );

    this.#toolsMap = undefined;
    this.#messageStateController?.updateConfig({ tools: this.tools });

    this.#callbacks.onDispatchEvent('forge-ai-chatbot-connected');
  }

  #handleMessageStart(event: MessageStartEvent): void {
    this.#messageStateController.addTextToResponse(event.messageId, '', event);
  }

  #handleMessageDelta(event: MessageDeltaEvent): void {
    this.#messageStateController.appendTextDelta(event.messageId, event.delta, event);
    this.#callbacks.onScrollToBottom();
  }

  #handleMessageEnd(event: MessageEndEvent): void {
    this.#messageStateController.markTextComplete(event.messageId, event);
  }

  #handleRunFinished(): void {
    this.#tryCompleteResponse();
  }

  #tryCompleteResponse(): void {
    if (this.#executingToolHandlers > 0 || this.#adapter?.isRunning) {
      return;
    }
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
      type: this.tools.has(event.name) ? 'client' : 'agent'
    };

    this.#messageStateController.addToolCallToResponse(toolCall, event);
  }

  #handleToolCallArgs(event: ToolCallArgsEvent): void {
    const updates: Partial<ToolCall> = {
      argsBuffer: event.argsBuffer,
      args: event.partialArgs ?? {}
    };
    const rawEvent = { eventType: 'tool-call-args', event } as const;
    this.#messageStateController.updateToolCallInResponse(event.id, updates, rawEvent);
    this.#callbacks.onScrollToBottom();
  }

  #handleToolCallEnd(event: ToolCallEndEvent): void {
    const updates: Partial<ToolCall> = {
      args: event.args,
      argsBuffer: undefined,
      status: 'executing'
    };
    const rawEvent = { eventType: 'tool-call-end', event } as const;
    this.#messageStateController.updateToolCallInResponse(event.id, updates, rawEvent);
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
        type: this.tools.has(event.name) ? 'client' : 'agent'
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
    } else {
      this.#messageStateController.updateToolCallInResponse(event.id, { status: 'complete' });
    }
  }

  async #executeToolHandler(
    toolCallId: string,
    toolName: string,
    handler: (
      context: HandlerContext
    ) => Promise<string | Record<string, unknown> | void> | string | Record<string, unknown> | void,
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
    const abortMessage: ChatMessage = {
      id: generateId(),
      role: 'system',
      content: 'Run cancelled',
      timestamp: Date.now(),
      status: 'complete',
      clientOnly: true
    };

    this.#messageStateController.addMessage(abortMessage);
    this.#callbacks.onDispatchEvent('forge-ai-chatbot-message-received', { message: abortMessage });
  }

  #handleStateChange(_state: AdapterState): void {
    this.#callbacks.onRequestUpdate();
  }

  #handleToolCallResult(event: ToolResultEvent): void {
    this.#messageStateController.completeToolCallInResponse(event.toolCallId, event.result, event);
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
    if (!config.content.trim() || !this.#adapter || this.isStreaming) {
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
      content: config.content,
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
    this.#messageStateController.clearMessages();
    this.#fileUploadManager.clear();
  }

  public getMessages(): ChatMessage[] {
    return this.#messageStateController.getMessages();
  }

  public setMessages(messages: ChatMessage[]): void {
    this.#messageStateController.setMessages(messages);
  }

  public updateMessageContent(id: string, content: string): void {
    this.#messageStateController.updateMessageContent(id, content);
  }

  public removeMessageItemsFrom(index: number): void {
    this.#messageStateController.removeMessageItemsFrom(index);
  }

  public setResponseFeedback(responseId: string, feedback: { type: 'positive' | 'negative'; reason?: string }): void {
    this.#messageStateController.setResponseFeedback(responseId, feedback);
  }

  public addMessage(message: ChatMessage): void {
    this.#messageStateController.addMessage(message);
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
