import { LitElement, html, nothing, unsafeCSS, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { when } from 'lit/directives/when.js';
import type { ForgeAiAttachmentRemoveEventData } from '../ai-attachment';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { ForgeAiFilePickerChangeEventData, ForgeAiFilePickerErrorEventData } from '../ai-file-picker';
import type { ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiSuggestionsEventData, Suggestion } from '../ai-suggestions';
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
import { FileUploadManager } from './file-upload-manager.js';
import { MessageStateController } from './message-state-controller.js';
import type {
  ChatMessage,
  FileAttachment,
  HandlerContext,
  MessageItem,
  ThreadState,
  ToolCall,
  ToolDefinition,
  ToolResponseData,
  UploadedFileMetadata
} from './types.js';
import { generateId, renderMarkdown } from './utils.js';

import '../ai-attachment';
import '../ai-chat-header';
import '../ai-chat-interface';
import '../ai-empty-state';
import '../ai-error-message';
import '../ai-file-picker';
import '../ai-prompt';
import '../ai-response-message';
import '../ai-suggestions';
import '../ai-thinking-indicator';
import '../ai-user-message';
import './ai-chatbot-tool-call.js';

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

export const AiChatbotComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot';

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
 * @slot header-title - Slot for custom header title content (default: "AI Assistant")
 * @slot empty-state - Slot for custom empty state content (overrides default suggestions)
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

  @property({ type: Boolean, attribute: 'enable-file-upload' })
  public enableFileUpload = false;

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

  #chatInterfaceRef = createRef<AiChatInterfaceComponent>();
  #messageStateController!: MessageStateController;
  #fileUploadManager!: FileUploadManager;
  #toolsMap?: Map<string, ToolDefinition>;

  get #messageItems(): MessageItem[] {
    return this.#messageStateController?.messageItems ?? [];
  }

  get #isStreaming(): boolean {
    return this.adapter?.isRunning ?? false;
  }

  get #isUploading(): boolean {
    return this.#fileUploadManager?.isUploading ?? false;
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
      uploadCallback: this.adapter?.fileUploadCallback,
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
      this.#setupAdapter();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.adapter?.disconnect();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('adapter') && this.adapter) {
      this.#toolsMap = undefined;
      this.#setupAdapter();
    }
  }

  async #setupAdapter(): Promise<void> {
    if (!this.adapter) {
      return;
    }

    await this.adapter.connect();

    this.adapter.onMessageStart(this.#handleMessageStart.bind(this));
    this.adapter.onMessageDelta(this.#handleMessageDelta.bind(this));
    this.adapter.onMessageEnd(this.#handleMessageEnd.bind(this));
    this.adapter.onToolCallStart(this.#handleToolCallStart.bind(this));
    this.adapter.onToolCallArgs(this.#handleToolCallArgs.bind(this));
    this.adapter.onToolCallEnd(this.#handleToolCallEnd.bind(this));
    this.adapter.onToolCall(this.#handleToolCall.bind(this));
    this.adapter.onToolResult(this.#handleToolResult.bind(this));
    this.adapter.onRunAborted(this.#handleRunAborted.bind(this));
    this.adapter.onError(this.#handleError.bind(this));
    this.adapter.onStateChange(this.#handleStateChange.bind(this));

    this.#fileUploadManager?.updateConfig({
      uploadCallback: this.adapter.fileUploadCallback
    });

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
    this.#scrollAfterUpdate();
  }

  /**
   * Handles streaming content chunks from the adapter.
   * Appends delta text to the message and maintains scroll position.
   */
  #handleMessageDelta(event: MessageDeltaEvent): void {
    const message = this.#messageStateController.getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
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
      status: 'parsing'
    };

    this.#messageStateController.addToolCall(toolCall);
    this.#scrollAfterUpdate();
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

    const existingToolCall = this.#messageStateController.getToolCall(event.id);
    if (existingToolCall) {
      this.#messageStateController.updateToolCall(event.id, {
        args: event.args,
        status: 'executing'
      });
    } else {
      const toolCall: ToolCall = {
        id: event.id,
        messageId: event.messageId,
        name: event.name,
        args: event.args,
        status: 'executing'
      };
      this.#messageStateController.addToolCall(toolCall);
      this.#scrollAfterUpdate();
    }

    const toolDef = this.#tools.get(event.name);

    this.#dispatchEvent({
      type: 'forge-ai-chatbot-tool-call',
      detail: {
        toolCallId: event.id,
        toolName: event.name,
        arguments: event.args
      }
    });

    // Execute handler if present
    if (toolDef?.handler) {
      await Promise.resolve(this.#executeToolHandler(event.id, event.name, toolDef.handler, event.args));
    } else {
      // No handler - send response immediately
      void this.#sendToolResult(event.id, this.#createToolResponse());
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
    this.#scrollAfterUpdate();
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
    this.#scrollAfterUpdate();
  }

  #handleStateChange(_state: AdapterState): void {
    this.requestUpdate();
  }

  #handleToolResult(event: ToolResultEvent): void {
    this.#messageStateController.addMessage(event.message);
    this.#scrollAfterUpdate();
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
    files?: File[];
  }): Promise<void> {
    if (!config.content.trim() || !this.adapter || this.#isStreaming || this.#isUploading) {
      return;
    }

    const attachments = config.attachments ?? [];
    let uploadedFiles: UploadedFileMetadata[] = [];

    if (config.files && config.files.length > 0) {
      try {
        uploadedFiles = await this.#fileUploadManager.uploadFiles();
      } catch {
        return;
      }
    }

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
    this.#scrollAfterUpdate();
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
      attachments: pendingAttachments,
      files: pendingAttachments.length > 0 ? [] : undefined
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

  async #handleCopy(messageItemIndex: number): Promise<void> {
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

  #handleRefresh(messageItemIndex: number): void {
    if (!this.adapter) {
      return;
    }

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

  #handleThumbsUp(messageId: string): void {
    // TODO: Show popover thanking user for feedback
    console.warn('thumbs-up', messageId);
  }

  #handleThumbsDown(messageId: string): void {
    // TODO: Show popover asking for feedback details
    console.warn('thumbs-down', messageId);
  }

  #handleFileSelect(evt: CustomEvent<ForgeAiFilePickerChangeEventData>): void {
    const { file, timestamp, thumbnail } = evt.detail;
    const fileId = generateId('file');

    this.#fileUploadManager.addAttachment(fileId, file, {
      filename: file.name,
      size: file.size,
      mimeType: file.type,
      timestamp,
      thumbnail
    });
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
    this.#scrollAfterUpdate();
  }

  #handleAttachmentRemove(evt: CustomEvent<ForgeAiAttachmentRemoveEventData>): void {
    this.#fileUploadManager.removeAttachmentByFilename(evt.detail.filename);
  }

  #handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): void {
    this.sendMessage(evt.detail.text);
  }

  async #scrollAfterUpdate(): Promise<void> {
    await this.updateComplete;
    this.#chatInterfaceRef.value?.scrollToBottom();
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
    const attachments: FileAttachment[] = [];
    if (files) {
      for (const file of files) {
        const fileId = generateId('file');
        const attachment: FileAttachment = {
          id: fileId,
          filename: file.name,
          size: file.size,
          mimeType: file.type,
          timestamp: Date.now()
        };
        attachments.push(attachment);
        this.#fileUploadManager.addAttachment(fileId, file, {
          filename: file.name,
          size: file.size,
          mimeType: file.type,
          timestamp: Date.now()
        });
      }
    }

    await this.#sendUserMessage({
      content,
      attachments,
      files
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
    const pendingAttachments = this.#fileUploadManager.pendingAttachments;
    if (pendingAttachments.length === 0) {
      return nothing;
    }

    return html`
      ${pendingAttachments.map(
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
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this.#isStreaming || isUploading}
        ?disabled=${isUploading}
        @forge-ai-prompt-send=${this.#handleSend}
        @forge-ai-prompt-stop=${this.#handleStop}
        @forge-ai-prompt-cancel=${this.#handleCancel}>
        ${this.#pendingAttachmentsTemplate}
        ${when(
          this.enableFileUpload,
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
      </forge-ai-prompt>
    `;
  }

  get #thinkingIndicator(): TemplateResult | typeof nothing {
    if (!this.#isStreaming) {
      return nothing;
    }

    const lastItem = this.#messageItems[this.#messageItems.length - 1];
    const hasAssistantContent =
      lastItem?.type === 'message' && lastItem.data.role === 'assistant' && lastItem.data.content.trim().length > 0;

    if (hasAssistantContent) {
      return nothing;
    }

    return html`<div class="thinking-indicator">
      <forge-ai-thinking-indicator class="status-indicator"></forge-ai-thinking-indicator>
    </div>`;
  }

  #renderToolCall(toolCall: ToolCall): TemplateResult {
    const toolDefinition = this.#tools.get(toolCall.name);
    return html`<forge-ai-chatbot-tool-call
      .toolCall=${toolCall}
      .toolDefinition=${toolDefinition}></forge-ai-chatbot-tool-call>`;
  }

  get #emptyState(): TemplateResult | typeof nothing {
    if (this.#messageItems.length) {
      return nothing;
    }

    return html`
      <forge-ai-empty-state>
        <slot name="empty-state-heading" slot="heading">
          <span>How can I help you today?</span>
        </slot>
        <forge-ai-suggestions
          slot="actions"
          variant="block"
          .suggestions=${this.suggestions ?? []}
          @forge-ai-suggestions-select=${this.#handleSuggestionSelect}></forge-ai-suggestions>
      </forge-ai-empty-state>
    `;
  }

  get #messages(): TemplateResult[] {
    return this.#messageItems
      .filter(item => (item.type === 'message' ? item.data.role !== 'tool' : true))
      .map((item, index) => {
        if (item.type === 'toolCall') {
          return this.#renderToolCall(item.data);
        }

        const msg = item.data;
        if (msg.role === 'user') {
          return html`<forge-ai-user-message>${unsafeHTML(renderMarkdown(msg.content))}</forge-ai-user-message>`;
        } else if (msg.role === 'system') {
          return html`<div class="system-message">${msg.content}</div>`;
        } else if (msg.status === 'error') {
          return html`
            <forge-ai-error-message>
              <span slot="title">Error</span>
              ${unsafeHTML(renderMarkdown(msg.content))}
            </forge-ai-error-message>
          `;
        } else {
          return when(
            msg.content?.trim().length > 0,
            () => html`
              <forge-ai-response-message
                ?complete=${msg.status === 'complete'}
                ?enable-reactions=${this.enableReactions}
                @forge-ai-response-message-copy=${() => this.#handleCopy(index)}
                @forge-ai-response-message-refresh=${() => this.#handleRefresh(index)}
                @forge-ai-response-message-thumbs-up=${() => this.#handleThumbsUp(msg.id)}
                @forge-ai-response-message-thumbs-down=${() => this.#handleThumbsDown(msg.id)}>
                ${unsafeHTML(renderMarkdown(msg.content))}
              </forge-ai-response-message>
            `
          );
        }
      });
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
          .minimizeIcon=${this.minimizeIcon}
          @forge-ai-chat-header-expand=${this.#handleHeaderExpand}
          @forge-ai-chat-header-minimize=${this.#handleHeaderMinimize}
          @forge-ai-chat-header-clear=${this.#handleHeaderClear}
          @forge-ai-chat-header-info=${this.#handleHeaderInfo}>
          <slot name="header-title" slot="title">AI Assistant</slot>
        </forge-ai-chat-header>
        ${this.#emptyState} ${this.#messages} ${this.#thinkingIndicator} ${this.#promptSlot}
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
