import { LitElement, html, nothing, unsafeCSS, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AgentInfo } from '../ai-agent-info';
import type { ForgeAiAttachmentRemoveEventData } from '../ai-attachment';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { ForgeAiFilePickerChangeEventData, ForgeAiFilePickerErrorEventData } from '../ai-file-picker';
import type { AiPromptComponent, ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiSuggestionsEventData, Suggestion } from '../ai-suggestions';
import type { ForgeAiVoiceInputResultEvent } from '../ai-voice-input';
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
} from './agent-adapter.js';
import { SubscriptionManager } from './event-emitter.js';
import { FileUploadManager } from './file-upload-manager.js';
import { MessageStateController } from './message-state-controller.js';
import type {
  ChatMessage,
  FileAttachment,
  FileRemoveCallbacks,
  FileUploadCallbacks,
  ForgeAiChatbotFileSelectEventData,
  HandlerContext,
  HeadingLevel,
  MessageItem,
  ThreadState,
  ToolCall,
  ToolDefinition,
  ToolResponseData,
  UploadedFileMetadata
} from './types.js';
import { downloadFile, generateId } from './utils.js';

import '../ai-attachment';
import '../ai-chat-header';
import '../ai-chat-interface';
import '../ai-file-picker';
import '../ai-message-thread';
import '../ai-prompt';
import '../ai-suggestions';
import '../ai-voice-input';

import styles from './ai-chatbot.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chatbot': AiChatbotComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-chatbot-connected': CustomEvent<void>;
    'forge-ai-chatbot-disconnected': CustomEvent<void>;
    'forge-ai-chatbot-message-sent': CustomEvent<ForgeAiChatbotMessageEventData>;
    'forge-ai-chatbot-message-received': CustomEvent<ForgeAiChatbotMessageEventData>;
    'forge-ai-chatbot-tool-call': CustomEvent<ForgeAiChatbotToolCallEventData>;
    'forge-ai-chatbot-error': CustomEvent<ForgeAiChatbotErrorEventData>;
    'forge-ai-chatbot-expand': CustomEvent<void>;
    'forge-ai-chatbot-minimize': CustomEvent<void>;
    'forge-ai-chatbot-clear': CustomEvent<void>;
    'forge-ai-chatbot-info': CustomEvent<void>;
    'forge-ai-chatbot-file-select': CustomEvent<ForgeAiChatbotFileSelectEventData>;
    'forge-ai-voice-input-result': CustomEvent<ForgeAiVoiceInputResultEvent>;
    'forge-ai-chatbot-file-remove': CustomEvent<ForgeAiChatbotFileRemoveEventData>;
  }
}

export interface ForgeAiChatbotMessageEventData {
  message: ChatMessage;
}

export interface ForgeAiChatbotToolCallEventData {
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
}

export interface ForgeAiChatbotErrorEventData {
  error: string;
}

export interface ForgeAiChatbotFileRemoveEventData {
  fileId: string;
}

export const AiChatbotComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot';

/**
 * Type for feature toggle values
 */
export type FeatureToggle = 'on' | 'off';

/**
 * @tag forge-ai-chatbot
 *
 * @summary A complete, self-contained AI chatbot component that implements the AG-UI protocol using an adapter pattern.
 *
 * @description
 * The AI Chatbot component provides a full-featured chat interface with support for streaming responses,
 * client-side tool execution, file attachments, markdown rendering, and programmatic control.
 * It uses an adapter pattern to abstract communication, allowing for AG-UI or custom protocol implementations.
 *
 * @slot header - Slot for custom header content
 * @slot empty-state - Slot for custom empty state content (overrides default suggestions)
 *
 * @property {string} titleText - The title text to display in the header (default: 'AI Assistant')
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 *
 * @event {CustomEvent<void>} forge-ai-chatbot-connected - Fired when adapter connects
 * @event {CustomEvent<void>} forge-ai-chatbot-disconnected - Fired when adapter disconnects
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-sent - Fired when user sends a message
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-received - Fired when assistant message is complete
 * @event {CustomEvent<ForgeAiChatbotToolCallEventData>} forge-ai-chatbot-tool-call - Fired when a tool needs to be executed
 * @event {CustomEvent<ForgeAiChatbotErrorEventData>} forge-ai-chatbot-error - Fired when an error occurs
 * @event {CustomEvent<void>} forge-ai-chatbot-expand - Fired when header expand button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-minimize - Fired when header minimize button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-clear - Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented)
 * @event {CustomEvent<void>} forge-ai-chatbot-info - Fired when header info option is selected
 */
@customElement(AiChatbotComponentTagName)
export class AiChatbotComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public adapter?: AgentAdapter;

  @property({ attribute: 'file-upload' })
  public fileUpload: FeatureToggle = 'off';

  @property({ attribute: 'voice-input' })
  public voiceInput: FeatureToggle = 'on';

  @property()
  public placeholder = 'Ask a question...';

  @property({ attribute: false })
  public suggestions?: Suggestion[];

  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  @property({ type: Boolean })
  public expanded = false;

  @property({ attribute: 'minimize-icon' })
  public minimizeIcon: 'default' | 'panel' = 'default';

  @property({ type: Boolean, attribute: 'enable-reactions' })
  public enableReactions = false;

  @property({ type: Object, attribute: false })
  public agentInfo?: AgentInfo;

  @property({ attribute: 'title-text' })
  public titleText = 'AI Assistant';

  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  #chatInterfaceRef = createRef<AiChatInterfaceComponent>();
  #promptRef = createRef<AiPromptComponent>();
  #messageStateController!: MessageStateController;
  #fileUploadManager!: FileUploadManager;
  #toolsMap?: Map<string, ToolDefinition>;
  #adapterSubscriptions?: SubscriptionManager;

  get #messageItems(): MessageItem[] {
    return this.#messageStateController?.messageItems ?? [];
  }

  get #isStreaming(): boolean {
    return this.adapter?.isRunning ?? false;
  }

  get #isUploading(): boolean {
    return this.#fileUploadManager?.isUploading ?? false;
  }

  get #hasMessages(): boolean {
    return this.#messageItems.length > 0;
  }

  get #tools(): Map<string, ToolDefinition> {
    if (!this.#toolsMap) {
      this.#toolsMap = new Map(this.adapter?.getTools().map(t => [t.name, t]) ?? []);
    }
    return this.#toolsMap;
  }

  public override connectedCallback(): void {
    super.connectedCallback();

    this.#messageStateController = new MessageStateController(this, {
      tools: this.#tools
    });

    this.#fileUploadManager = new FileUploadManager({
      onError: error => {
        this.#dispatchEvent({
          type: 'forge-ai-chatbot-error',
          detail: { error }
        });
      },
      onStateChange: () => {
        this.requestUpdate();
      }
    });

    if (this.adapter) {
      void this.#setupAdapter();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#adapterSubscriptions?.unsubscribe();
    this.adapter?.disconnect();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('adapter') && this.adapter) {
      this.#toolsMap = undefined;
      this.#setupAdapter();
    }
  }

  async #setupAdapter(): Promise<void> {
    if (!this.adapter || this.adapter.isConnecting) {
      return;
    }

    await this.adapter.connect();

    this.#adapterSubscriptions?.unsubscribe();
    this.#adapterSubscriptions = new SubscriptionManager();
    this.#adapterSubscriptions.add(
      this.adapter.onMessageStart(this.#handleMessageStart.bind(this)),
      this.adapter.onMessageDelta(this.#handleMessageDelta.bind(this)),
      this.adapter.onMessageEnd(this.#handleMessageEnd.bind(this)),
      this.adapter.onToolCallStart(this.#handleToolCallStart.bind(this)),
      this.adapter.onToolCallArgs(this.#handleToolCallArgs.bind(this)),
      this.adapter.onToolCallEnd(this.#handleToolCallEnd.bind(this)),
      this.adapter.onToolCall(this.#handleToolCall.bind(this)),
      this.adapter.onToolCallResult(this.#handleToolCallResult.bind(this)),
      this.adapter.onRunAborted(this.#handleRunAborted.bind(this)),
      this.adapter.onError(this.#handleError.bind(this)),
      this.adapter.onStateChange(this.#handleStateChange.bind(this))
    );

    this.#toolsMap = undefined;
    this.#messageStateController?.updateConfig({ tools: this.#tools });

    this.#dispatchEvent({ type: 'forge-ai-chatbot-connected' });
  }

  /**
   * Handles the start of a new streaming message from the adapter.
   * Creates an empty assistant message with streaming status.
   */
  #handleMessageStart(event: MessageStartEvent): void {
    const message: ChatMessage = {
      id: event.messageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'streaming'
    };

    this.#messageStateController.addMessage(message);
  }

  /**
   * Handles streaming content chunks from the adapter.
   * Appends delta text to the message and maintains scroll position.
   */
  #handleMessageDelta(event: MessageDeltaEvent): void {
    const message = this.#messageStateController.getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
      return;
    }

    this.#messageStateController.appendToMessage(event.messageId, event.delta);
    this.#chatInterfaceRef.value?.scrollToBottom();
  }

  #handleMessageEnd(event: MessageEndEvent): void {
    this.#messageStateController.updateMessageStatus(event.messageId, 'complete');

    const message = this.#messageStateController.getMessage(event.messageId);
    if (message) {
      this.#dispatchEvent({ type: 'forge-ai-chatbot-message-received', detail: { message } });
    }
  }

  /**
   * Handles the start of a tool call with streaming arguments.
   * Creates a tool call in 'parsing' state to show immediate feedback.
   */
  #handleToolCallStart(event: ToolCallStartEvent): void {
    const message = this.#messageStateController.getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
    }

    const toolCall: ToolCall = {
      id: event.id,
      messageId: event.messageId,
      name: event.name,
      args: {},
      argsBuffer: '',
      status: 'parsing',
      type: this.#tools.has(event.name) ? 'client' : 'agent'
    };

    this.#messageStateController.addToolCall(toolCall);
  }

  /**
   * Handles streaming tool argument chunks.
   * Updates the args buffer to show real-time parsing progress.
   */
  #handleToolCallArgs(event: ToolCallArgsEvent): void {
    this.#messageStateController.updateToolCall(event.id, {
      argsBuffer: event.argsBuffer,
      args: event.partialArgs ?? {}
    });
    this.#chatInterfaceRef.value?.scrollToBottom();
  }

  /**
   * Handles completion of tool call argument parsing.
   * Updates tool call with final args and changes status to 'executing'.
   */
  #handleToolCallEnd(event: ToolCallEndEvent): void {
    this.#messageStateController.updateToolCall(event.id, {
      args: event.args,
      argsBuffer: undefined,
      status: 'executing'
    });
  }

  #createToolResponse({
    metadata
  }: {
    metadata?: Record<string, unknown> | void;
  } = {}): Record<string, unknown> {
    return { metadata, success: true };
  }

  /**
   * Handles tool execution requests from the adapter.
   */
  async #handleToolCall(event: ToolCallEvent): Promise<void> {
    const message = this.#messageStateController.getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
    }

    let toolCall = this.#messageStateController.getToolCall(event.id);
    if (toolCall) {
      this.#messageStateController.updateToolCall(event.id, {
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
        type: this.#tools.has(event.name) ? 'client' : 'agent'
      };
      this.#messageStateController.addToolCall(toolCall);
    }

    if (toolCall?.type === 'client') {
      this.#dispatchEvent({
        type: 'forge-ai-chatbot-tool-call',
        detail: {
          toolCallId: event.id,
          toolName: event.name,
          arguments: event.args
        }
      });

      const toolDef = this.#tools.get(event.name);
      if (toolDef?.handler) {
        await Promise.resolve(this.#executeToolHandler(event.id, event.name, toolDef.handler, event.args));
      } else {
        this.#sendToolResult(event.id, this.#createToolResponse());
      }
    }
  }

  /**
   * Executes inline tool handler.
   */
  async #executeToolHandler(
    toolCallId: string,
    toolName: string,
    handler: (context: HandlerContext) => Promise<ToolResponseData | void> | ToolResponseData | void,
    args: Record<string, unknown>
  ): Promise<void> {
    try {
      const context: HandlerContext = {
        args,
        toolCallId,
        toolName,
        signal: undefined
      };
      const metadata = await handler(context);
      await this.#sendToolResult(toolCallId, this.#createToolResponse({ metadata }));
    } catch (error) {
      this.#messageStateController.updateToolCall(toolCallId, {
        status: 'error',
        result: { error: (error as Error).message }
      });
    }
  }

  #handleError(event: ErrorEvent): void {
    const errorMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'assistant',
      content: event.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#messageStateController.addMessage(errorMessage);
    this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error: event.message } });
  }

  #handleRunAborted(): void {
    const abortMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'system',
      content: 'Run cancelled',
      timestamp: Date.now(),
      status: 'complete'
    };

    this.#messageStateController.addMessage(abortMessage);
  }

  #handleStateChange(_state: AdapterState): void {
    this.requestUpdate();
  }

  #handleToolCallResult(event: ToolResultEvent): void {
    this.#messageStateController.completeToolCall(event.toolCallId, event.result);
    this.#messageStateController.addMessage(event.message);
  }

  async #sendToolResult(toolCallId: string, result: unknown): Promise<void> {
    const toolCall = this.#messageStateController.getToolCall(toolCallId);
    if (!toolCall || !this.adapter) {
      return;
    }

    this.#messageStateController.completeToolCall(toolCallId, result);
    this.adapter.sendToolResult(toolCallId, result, this.getMessages());
  }

  /**
   * Sends a user message with optional attachments.
   * Handles file uploads, message creation, and adapter communication.
   */
  async #sendUserMessage(config: {
    content: string;
    timestamp?: number;
    attachments?: FileAttachment[];
  }): Promise<void> {
    if (!config.content.trim() || !this.adapter || this.#isStreaming) {
      if (!this.adapter) {
        console.warn('No adapter configured.');
      }
      return;
    }

    if (!this.#fileUploadManager.canSend()) {
      return;
    }

    const attachments = config.attachments ?? [];
    const uploadedFiles = this.#fileUploadManager.getCompletedUploads();

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content: config.content,
      timestamp: config.timestamp ?? Date.now(),
      status: 'pending',
      attachments,
      uploadedFiles
    };

    this.#messageStateController.addMessage(userMessage);
    this.#dispatchEvent({ type: 'forge-ai-chatbot-message-sent', detail: { message: userMessage } });

    this.#fileUploadManager.consumeAttachments();

    try {
      this.adapter.sendMessage(this.getMessages());
      this.#messageStateController.updateMessageStatus(userMessage.id, 'complete');
    } catch (error) {
      this.#messageStateController.updateMessageStatus(userMessage.id, 'error');
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error: errorMessage } });
    }
  }

  /**
   * Handles user message submission from the prompt component.
   */
  async #handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): Promise<void> {
    const pendingAttachments = [...this.#fileUploadManager.pendingAttachments];
    await this.#sendUserMessage({
      content: evt.detail.value,
      timestamp: evt.detail.date.getTime(),
      attachments: pendingAttachments
    });
  }

  #handleStop(): void {
    if (this.adapter?.isRunning) {
      this.adapter.abort();
    }
    this.requestUpdate();
  }

  #handleCancel(): void {
    this.#handleStop();
  }

  async #handleCopy(evt: CustomEvent<{ messageItemIndex: number }>): Promise<void> {
    const messageItemIndex = evt.detail.messageItemIndex;
    const item = this.#messageItems[messageItemIndex];
    if (!item || item.type !== 'message') {
      return;
    }

    try {
      await navigator.clipboard.writeText(item.data.content);
    } catch {
      // Silent fail
    }
  }

  #handleRefresh(evt: CustomEvent<{ messageItemIndex: number }>): void {
    if (!this.adapter) {
      return;
    }

    const messageItemIndex = evt.detail.messageItemIndex;
    let userMessageIndex = -1;
    for (let i = messageItemIndex - 1; i >= 0; i--) {
      const item = this.#messageItems[i];
      if (item.type === 'message' && item.data.role === 'user') {
        userMessageIndex = i;
        break;
      }
    }

    if (userMessageIndex === -1) {
      return;
    }

    this.#messageStateController.removeMessageItem(messageItemIndex);

    this.adapter.sendMessage(this.getMessages());
  }

  #handleThumbsUp(evt: CustomEvent<{ messageId: string }>): void {
    // TODO: Show popover thanking user for feedback
    console.warn('thumbs-up', evt.detail.messageId);
  }

  #handleThumbsDown(evt: CustomEvent<{ messageId: string }>): void {
    // TODO: Show popover asking for feedback details
    console.warn('thumbs-down', evt.detail.messageId);
  }

  #processFileUpload(file: File, timestamp: number, thumbnail?: string): void {
    const fileId = generateId('file');

    this.#fileUploadManager.addAttachment(fileId, {
      filename: file.name,
      size: file.size,
      mimeType: file.type,
      timestamp,
      thumbnail
    });

    const callbacks = this.#createFileUploadCallbacks(fileId);

    this.adapter?.emitFileUpload(file, callbacks);

    this.#dispatchEvent({
      type: 'forge-ai-chatbot-file-select',
      detail: {
        fileId,
        file,
        filename: file.name,
        size: file.size,
        mimeType: file.type,
        timestamp,
        thumbnail,
        ...callbacks
      }
    });
  }

  #handleFileSelect(evt: CustomEvent<ForgeAiFilePickerChangeEventData>): void {
    const { file, timestamp, thumbnail } = evt.detail;
    this.#processFileUpload(file, timestamp, thumbnail);
  }

  #createFileUploadCallbacks(fileId: string): FileUploadCallbacks {
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

  #handleFileError(evt: CustomEvent<ForgeAiFilePickerErrorEventData>): void {
    const errorMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'assistant',
      content: evt.detail.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#messageStateController.addMessage(errorMessage);
  }

  #handleAttachmentRemove(evt: CustomEvent<ForgeAiAttachmentRemoveEventData>): void {
    const { filename } = evt.detail;

    // Check if this is a pending attachment (not yet uploaded)
    const pendingAttachment = this.#fileUploadManager.pendingAttachments.find(a => a.filename === filename);
    if (pendingAttachment) {
      this.#fileUploadManager.abort(pendingAttachment.id);
      return;
    }

    // Check if this is a completed upload
    const messages = this.getMessages();
    for (const message of messages) {
      if (message.uploadedFiles) {
        const uploadedFile = message.uploadedFiles.find(f => f.fileName === filename);
        if (uploadedFile) {
          this.#handleCompletedFileRemove(uploadedFile.fileId);
          return;
        }
      }
    }
  }

  #handleCompletedFileRemove(fileId: string): void {
    if (!this.adapter) {
      return;
    }

    const callbacks: FileRemoveCallbacks = {
      onSuccess: () => {
        this.#messageStateController.removeUploadedFile(fileId);
        this.requestUpdate();
      },
      onError: (error: string) => {
        this.#dispatchEvent({
          type: 'forge-ai-chatbot-error',
          detail: { error }
        });
      }
    };

    this.adapter.emitFileRemove(fileId, callbacks);

    this.#dispatchEvent({
      type: 'forge-ai-chatbot-file-remove',
      detail: { fileId }
    });
  }

  #handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): void {
    this.sendMessage(evt.detail.text);
  }

  #handleVoiceInputResult(evt: CustomEvent<ForgeAiVoiceInputResultEvent>): void {
    const { transcript } = evt.detail;
    if (transcript && this.#promptRef.value) {
      this.#promptRef.value.value = transcript;
    }
  }

  #handleHeaderExpand(): void {
    this.#dispatchEvent({ type: 'forge-ai-chatbot-expand' });
  }

  #handleHeaderMinimize(): void {
    this.#dispatchEvent({ type: 'forge-ai-chatbot-minimize' });
  }

  #handleHeaderClear(): void {
    const event = this.#dispatchEvent({ type: 'forge-ai-chatbot-clear', cancelable: true });

    if (!event.defaultPrevented) {
      this.clearMessages();
    }
  }

  #handleHeaderInfo(): void {
    this.#dispatchEvent({ type: 'forge-ai-chatbot-info' });
  }

  #handleExport(): void {
    const messages: ChatMessage[] = this.getMessages();
    if (messages.length === 0) {
      return;
    }

    // Format chat history as text
    const chatText: string = messages
      .map((message: ChatMessage) => {
        const timestamp: string = new Date(message.timestamp).toLocaleString();
        const role: string = message.role === 'user' ? 'You' : 'Assistant';
        return `[${timestamp}] ${role}:\n${message.content}\n`;
      })
      .join('\n');

    // Generate filename and download
    const filename = `chat-history-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
    downloadFile(chatText, filename, 'text/plain');
  }

  /**
   * Clears all messages from the chat history.
   */
  public clearMessages(): void {
    this.#messageStateController.clearMessages();
    this.#fileUploadManager.clear();
  }

  /**
   * Gets the current message history.
   * @returns Array of chat messages
   */
  public getMessages(): ChatMessage[] {
    return this.#messageStateController.getMessages();
  }

  /**
   * Sets the message history. Useful for restoring conversation state.
   * @param messages - Array of chat messages to set
   */
  public setMessages(messages: ChatMessage[]): void {
    this.#messageStateController.setMessages(messages);
  }

  /**
   * Programmatically sends a message as the user.
   * @param content - The message content to send
   * @param files - Optional file objects to attach
   */
  public async sendMessage(content: string, files?: File[]): Promise<void> {
    if (!this.adapter) {
      console.warn('No adapter configured.');
      return;
    }

    if (files) {
      const timestamp = Date.now();
      for (const file of files) {
        this.#processFileUpload(file, timestamp);
      }
    }

    await this.#sendUserMessage({
      content,
      attachments: this.#fileUploadManager.pendingAttachments
    });
  }

  /**
   * Aborts the current streaming response.
   */
  public abort(): void {
    this.#handleStop();
  }

  /**
   * Gets the complete serializable thread state including threadId and messages.
   * @returns ThreadState object containing threadId, messages, and timestamp
   */
  public getThreadState(): ThreadState {
    return {
      threadId: this.adapter?.threadId,
      messages: this.getMessages(),
      timestamp: Date.now()
    };
  }

  /**
   * Restores thread state from a serialized ThreadState object.
   * @param state - ThreadState object to restore
   */
  public setThreadState(state: ThreadState): void {
    this.setMessages(state.messages);

    if (state.threadId && this.adapter) {
      this.adapter.threadId = state.threadId;
    }
  }

  get #pendingAttachmentsTemplate(): TemplateResult | typeof nothing {
    const attachments = this.#fileUploadManager.allAttachments;
    if (attachments.length === 0) {
      return nothing;
    }

    return html`
      ${attachments.map(
        attachment => html`
          <forge-ai-attachment
            slot="attachments"
            .filename=${attachment.filename}
            .size=${attachment.size}
            .mimeType=${attachment.mimeType}
            .thumbnail=${attachment.thumbnail ?? ''}
            ?uploading=${attachment.uploading}
            .progress=${attachment.progress}
            removable
            @forge-ai-attachment-remove=${this.#handleAttachmentRemove}>
          </forge-ai-attachment>
        `
      )}
    `;
  }

  get #promptSlot(): TemplateResult {
    const isUploading = this.#isUploading;
    return html`
      <forge-ai-prompt
        ${ref(this.#promptRef)}
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this.#isStreaming || isUploading}
        ?disabled=${isUploading}
        @forge-ai-prompt-send=${this.#handleSend}
        @forge-ai-prompt-stop=${this.#handleStop}
        @forge-ai-prompt-cancel=${this.#handleCancel}>
        ${this.#pendingAttachmentsTemplate}
        ${when(
          this.fileUpload === 'on',
          () => html`
            <forge-ai-file-picker
              slot="actions"
              variant="icon-button"
              multiple
              ?disabled=${isUploading}
              .selectedFiles=${this.#fileUploadManager.pendingAttachments.map(a => a.filename)}
              @forge-ai-file-picker-change=${this.#handleFileSelect}
              @forge-ai-file-picker-error=${this.#handleFileError}>
            </forge-ai-file-picker>
          `
        )}
        ${when(
          this.voiceInput === 'on',
          () => html`
            <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${this.#handleVoiceInputResult}>
            </forge-ai-voice-input>
          `
        )}
      </forge-ai-prompt>
    `;
  }

  get #messageThread(): TemplateResult {
    return html`
      <forge-ai-message-thread
        .messageItems=${this.#messageItems}
        .tools=${this.#tools}
        ?enable-reactions=${this.enableReactions}
        ?show-thinking=${this.#isStreaming}
        @forge-ai-message-thread-copy=${this.#handleCopy}
        @forge-ai-message-thread-refresh=${this.#handleRefresh}
        @forge-ai-message-thread-thumbs-up=${this.#handleThumbsUp}
        @forge-ai-message-thread-thumbs-down=${this.#handleThumbsDown}>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
        <slot name="empty-state-message" slot="empty-state-message"></slot>
        <forge-ai-suggestions
          slot="empty-state-actions"
          variant="block"
          .suggestions=${this.suggestions ?? []}
          @forge-ai-suggestions-select=${this.#handleSuggestionSelect}>
        </forge-ai-suggestions>
      </forge-ai-message-thread>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-chat-interface
        ${ref(this.#chatInterfaceRef)}
        role="region"
        aria-label="AI chatbot"
        aria-live="polite"
        aria-busy=${this.#isStreaming}>
        <forge-ai-chat-header
          slot="header"
          ?show-expand-button=${this.showExpandButton}
          ?show-minimize-button=${this.showMinimizeButton}
          ?expanded=${this.expanded}
          export-option=${this.#hasMessages ? 'enabled' : 'off'}
          clear-option=${this.#hasMessages ? 'enabled' : 'off'}
          .minimizeIcon=${this.minimizeIcon}
          .agentInfo=${this.agentInfo}
          .headingLevel=${this.headingLevel}
          .titleText=${this.titleText}
          @forge-ai-chat-header-expand=${this.#handleHeaderExpand}
          @forge-ai-chat-header-minimize=${this.#handleHeaderMinimize}
          @forge-ai-chat-header-clear=${this.#handleHeaderClear}
          @forge-ai-chat-header-export=${this.#handleExport}
          @forge-ai-chat-header-info=${this.#handleHeaderInfo}>
        </forge-ai-chat-header>
        ${this.#messageThread} ${this.#promptSlot}
      </forge-ai-chat-interface>
    `;
  }

  #dispatchEvent(config: { type: keyof HTMLElementEventMap; detail?: unknown; cancelable?: boolean }): CustomEvent {
    const event = new CustomEvent(config.type, {
      detail: config.detail,
      bubbles: true,
      composed: true,
      cancelable: config.cancelable ?? false
    });
    this.dispatchEvent(event);
    return event;
  }
}
