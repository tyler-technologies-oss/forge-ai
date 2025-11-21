import { LitElement, html, unsafeCSS, type PropertyValues, type TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { when } from 'lit/directives/when.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiFilePickerChangeEventData, ForgeAiFilePickerErrorEventData } from '../ai-file-picker';
import type { ForgeAiAttachmentRemoveEventData } from '../ai-attachment';
import type { Suggestion, ForgeAiSuggestionsEventData } from '../ai-suggestions';
import { chatbotContext, type ChatbotContext } from './context.js';
import {
  AiChatbotAdapterBase,
  type MessageStartEvent,
  type MessageDeltaEvent,
  type MessageEndEvent,
  type ToolCallEvent,
  type ErrorEvent,
  type AdapterState
} from './adapter-base.js';
import type { ChatMessage, MessageItem, ToolDefinition, ToolCall, FileAttachment, UploadedFileMetadata } from './types.js';
import { generateId, renderMarkdown } from './utils.js';

import '../ai-chat-interface';
import '../ai-prompt';
import '../ai-file-picker';
import '../ai-attachment';
import '../ai-user-message';
import '../ai-response-message';
import '../ai-thinking-indicator';
import '../ai-empty-state';
import '../ai-suggestions';
import '../ai-chat-header';
import '../ai-error-message';
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
    'forge-ai-chatbot-tool-render': CustomEvent<ForgeAiChatbotToolRenderEventData>;
    'forge-ai-chatbot-tool-render-cleanup': CustomEvent<ForgeAiChatbotToolRenderCleanupEventData>;
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
  respond: (result?: unknown) => Promise<void>;
}

export interface ForgeAiChatbotToolRenderEventData {
  toolCall: ToolCall;
  slotName: string;
}

export interface ForgeAiChatbotToolRenderCleanupEventData {
  slotNames: string[];
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
  public adapter?: AiChatbotAdapterBase;

  @property({ attribute: false })
  public tools?: ToolDefinition[];

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

  @provide({ context: chatbotContext })
  private _contextValue: ChatbotContext = {
    messageItems: [],
    tools: new Map(),
    isConnected: false,
    isStreaming: false,
    isUploading: false
  };

  #pendingAttachments: FileAttachment[] = [];
  #fileMap = new Map<string, File>();
  #chatInterfaceRef = createRef<AiChatInterfaceComponent>();
  #toolCalls = new Map<string, ToolCall>();
  #uploadInProgress = false;

  public override connectedCallback(): void {
    super.connectedCallback();

    if (this.adapter) {
      this.#setupAdapter();
    }

    document.addEventListener('keydown', this.#handleKeyDown);
    document.addEventListener('file-upload-progress', this.#handleUploadProgress as EventListener);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.adapter?.disconnect();
    document.removeEventListener('keydown', this.#handleKeyDown);
    document.removeEventListener('file-upload-progress', this.#handleUploadProgress as EventListener);
    this.#fileMap.clear();
    this.#pendingAttachments = [];
  }

  #handleKeyDown = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape' && this.adapter?.getState().isRunning) {
      this.abort();
    }
  };

  #handleUploadProgress = (evt: CustomEvent<{ fileName: string; progress: number; message: string }>): void => {
    const { fileName, progress } = evt.detail;

    const attachment = this.#pendingAttachments.find(a => a.filename === fileName);
    if (attachment) {
      attachment.uploading = true;
      attachment.progress = progress;
      this.requestUpdate();
    }
  };

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('adapter') && this.adapter) {
      this.#setupAdapter();
    }

    if (changedProperties.has('tools')) {
      this.#updateToolsMap();
    }
  }

  async #setupAdapter(): Promise<void> {
    if (!this.adapter) {
      return;
    }

    if (this.tools) {
      this.adapter.registerTools(this.tools);
    }

    await this.adapter.connect();

    this.adapter.onMessageStart(this.#handleMessageStart.bind(this));
    this.adapter.onMessageDelta(this.#handleMessageDelta.bind(this));
    this.adapter.onMessageEnd(this.#handleMessageEnd.bind(this));
    this.adapter.onToolCall(this.#handleToolCall.bind(this));
    this.adapter.onError(this.#handleError.bind(this));
    this.adapter.onStateChange(this.#handleStateChange.bind(this));

    this.#dispatchEvent({ type: 'forge-ai-chatbot-connected' });
  }

  #updateToolsMap(): void {
    const toolsMap = new Map<string, ToolDefinition>();
    if (this.tools) {
      for (const tool of this.tools) {
        toolsMap.set(tool.name, tool);
      }
      this.adapter?.registerTools(this.tools);
    }
    this.#updateContext({ tools: toolsMap });
  }

  #handleMessageStart(event: MessageStartEvent): void {
    const message: ChatMessage = {
      id: event.messageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'streaming'
    };

    this.#addMessage(message);
    this.#scrollAfterUpdate();
  }

  #handleMessageDelta(event: MessageDeltaEvent): void {
    const message = this.#getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
    }

    this.#appendToMessage(event.messageId, event.delta);
    this.#chatInterfaceRef.value?.scrollToBottom();
  }

  #handleMessageEnd(event: MessageEndEvent): void {
    this.#updateMessageStatus(event.messageId, 'complete');

    const message = this.#getMessage(event.messageId);
    if (message) {
      this.#dispatchEvent({ type: 'forge-ai-chatbot-message-received', detail: { message } });
    }
  }

  #handleToolCall(event: ToolCallEvent): void {
    const message = this.#getMessage(event.messageId);
    if (!message) {
      this.#handleMessageStart({ messageId: event.messageId });
    }

    const toolCall: ToolCall = {
      id: event.id,
      messageId: event.messageId,
      name: event.name,
      args: event.args,
      status: 'executing'
    };

    this.#toolCalls.set(event.id, toolCall);
    this.#addMessageItem({ type: 'toolCall', data: toolCall });
    this.#scrollAfterUpdate();

    this.#dispatchEvent({
      type: 'forge-ai-chatbot-tool-call',
      detail: {
        toolCallId: event.id,
        toolName: event.name,
        arguments: event.args,
        respond: async (result: unknown) => {
          await this.#sendToolResult(event.id, result);
        }
      }
    });
  }

  #handleError(event: ErrorEvent): void {
    const errorMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'assistant',
      content: event.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#addMessage(errorMessage);
    this.#scrollAfterUpdate();
    this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error: event.message } });
  }

  #handleStateChange(state: AdapterState): void {
    this.#updateContext({ isConnected: state.isConnected, isStreaming: state.isRunning });
  }

  async #sendToolResult(toolCallId: string, result: unknown): Promise<void> {
    const toolCall = this.#toolCalls.get(toolCallId);
    if (!toolCall || !this.adapter) {
      return;
    }

    toolCall.result = result;
    toolCall.status = 'complete';
    this.#toolCalls.set(toolCallId, toolCall);

    const toolDefinition = this._contextValue.tools.get(toolCall.name);
    if (toolDefinition?.renderer?.useSlot) {
      const slotName = `tool-render-${toolCallId}`;
      this.#dispatchEvent({
        type: 'forge-ai-chatbot-tool-render',
        detail: { toolCall, slotName }
      });
    }

    // Only send result to LLM if tool has no renderer (executor tools)
    // Renderer tools don't send results back to LLM to avoid confusing it
    if (!toolDefinition?.renderer) {
      const toolMessage: ChatMessage = {
        id: generateId('tool'),
        role: 'tool',
        content: JSON.stringify(result),
        timestamp: Date.now(),
        status: 'complete'
      };

      this.#addMessage(toolMessage);
      this.#scrollAfterUpdate();

      this.adapter.sendMessage(this.getMessages());
    }
  }

  async #handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): Promise<void> {
    const message = evt.detail.value;
    if (!message.trim() || !this.adapter || this._contextValue.isStreaming || this.#uploadInProgress) {
      return;
    }

    let uploadedFiles: UploadedFileMetadata[] = [];
    if (this.#pendingAttachments.length > 0) {
      try {
        this.#uploadInProgress = true;
        this.#updateContext({ isUploading: true });

        uploadedFiles = await this.#uploadFiles();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'File upload failed';
        this.#dispatchEvent({
          type: 'forge-ai-chatbot-error',
          detail: { error: errorMessage }
        });
        return;
      } finally {
        this.#uploadInProgress = false;
        this.#updateContext({ isUploading: false });
        this.#pendingAttachments.forEach(attachment => {
          attachment.uploading = false;
          attachment.progress = undefined;
        });
      }
    }

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content: message,
      timestamp: evt.detail.date.getTime(),
      status: 'pending',
      attachments: [...this.#pendingAttachments],
      uploadedFiles
    };

    this.#addMessage(userMessage);
    this.#scrollAfterUpdate();
    this.#dispatchEvent({ type: 'forge-ai-chatbot-message-sent', detail: { message: userMessage } });

    this.#pendingAttachments = [];
    this.#fileMap.clear();

    try {
      this.adapter.sendMessage(this.getMessages());
      this.#updateMessageStatus(userMessage.id, 'complete');
    } catch (error) {
      this.#updateMessageStatus(userMessage.id, 'error');
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error: errorMessage } });
    }
  }

  #handleStop(): void {
    this.adapter?.abort();
    this.#updateContext({ isStreaming: false });
  }

  async #handleCopy(messageItemIndex: number): Promise<void> {
    const item = this._contextValue.messageItems[messageItemIndex];
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
      const item = this._contextValue.messageItems[i];
      if (item.type === 'message' && item.data.role === 'user') {
        userMessageIndex = i;
        break;
      }
    }

    if (userMessageIndex === -1) {
      return;
    }

    const messageItems = this._contextValue.messageItems.filter((_, index) => index !== messageItemIndex);
    this.#updateContext({ messageItems });

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

    const attachment: FileAttachment = {
      id: fileId,
      filename: file.name,
      size: file.size,
      mimeType: file.type,
      timestamp,
      thumbnail
    };

    this.#pendingAttachments.push(attachment);
    this.#fileMap.set(fileId, file);
    this.requestUpdate();
  }

  #handleFileError(evt: CustomEvent<ForgeAiFilePickerErrorEventData>): void {
    const errorMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'assistant',
      content: evt.detail.message,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#addMessage(errorMessage);
    this.#scrollAfterUpdate();
  }

  #handleAttachmentRemove(evt: CustomEvent<ForgeAiAttachmentRemoveEventData>): void {
    const attachment = this.#pendingAttachments.find(a => a.filename === evt.detail.filename);
    if (!attachment) {
      return;
    }

    this.#pendingAttachments = this.#pendingAttachments.filter(a => a.id !== attachment.id);
    this.#fileMap.delete(attachment.id);
    this.requestUpdate();
  }

  #handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): void {
    this.sendMessage(evt.detail.text);
  }

  async #scrollAfterUpdate(): Promise<void> {
    await this.updateComplete;
    this.#chatInterfaceRef.value?.scrollToBottom();
  }

  async #uploadFiles(): Promise<UploadedFileMetadata[]> {
    if (!this.adapter?.fileUploadCallback) {
      throw new Error('File upload not configured');
    }

    const callback = this.adapter.fileUploadCallback;
    return Promise.all(Array.from(this.#fileMap.values()).map(file => callback(file)));
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

  #addMessageItem(item: MessageItem): void {
    const messageItems = [...this._contextValue.messageItems, item];
    this.#updateContext({ messageItems });
  }

  #addMessage(message: ChatMessage): void {
    this.#addMessageItem({ type: 'message', data: message });
  }

  #appendToMessage(id: string, content: string): void {
    const messageItems = this._contextValue.messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, content: item.data.content + content } };
      }
      return item;
    });
    this.#updateContext({ messageItems });
  }

  #getMessage(id: string): ChatMessage | undefined {
    const item = this._contextValue.messageItems.find(
      i => i.type === 'message' && i.data.id === id
    );
    return item?.type === 'message' ? item.data : undefined;
  }

  #updateMessageStatus(id: string, status: ChatMessage['status']): void {
    const messageItems = this._contextValue.messageItems.map(item => {
      if (item.type === 'message' && item.data.id === id) {
        return { ...item, data: { ...item.data, status } };
      }
      return item;
    });
    this.#updateContext({ messageItems });
  }

  /**
   * Clears all messages from the chat history.
   */
  public clearMessages(): void {
    const slotNames: string[] = [];
    for (const [toolCallId, toolCall] of this.#toolCalls) {
      const toolDefinition = this._contextValue.tools.get(toolCall.name);
      if (toolDefinition?.renderer?.useSlot) {
        slotNames.push(`tool-render-${toolCallId}`);
      }
    }

    if (slotNames.length > 0) {
      this.#dispatchEvent({
        type: 'forge-ai-chatbot-tool-render-cleanup',
        detail: { slotNames }
      });
    }

    this.#updateContext({ messageItems: [] });
    this.#toolCalls.clear();
    this.#fileMap.clear();
    this.#pendingAttachments = [];
  }

  /**
   * Gets the current message history.
   * @returns Array of chat messages
   */
  public getMessages(): ChatMessage[] {
    const messages: ChatMessage[] = [];
    let currentMessage: ChatMessage | null = null;

    for (const item of this._contextValue.messageItems) {
      if (item.type === 'message') {
        if (currentMessage) {
          messages.push(currentMessage);
        }
        currentMessage = { ...item.data, toolCalls: [] };
      } else if (item.type === 'toolCall' && currentMessage?.id === item.data.messageId) {
        currentMessage.toolCalls = [...(currentMessage.toolCalls || []), item.data];
      }
    }

    if (currentMessage) {
      messages.push(currentMessage);
    }

    return messages;
  }

  /**
   * Sets the message history. Useful for restoring conversation state.
   * @param messages - Array of chat messages to set
   */
  public setMessages(messages: ChatMessage[]): void {
    const messageItems: MessageItem[] = [];

    for (const msg of messages) {
      messageItems.push({ type: 'message', data: { ...msg, toolCalls: undefined } });

      if (msg.toolCalls) {
        for (const toolCall of msg.toolCalls) {
          messageItems.push({ type: 'toolCall', data: toolCall });
          this.#toolCalls.set(toolCall.id, toolCall);
        }
      }
    }

    this.#updateContext({ messageItems });
  }

  /**
   * Programmatically sends a message as the user.
   * @param content - The message content to send
   * @param files - Optional file objects to attach
   */
  public async sendMessage(content: string, files?: File[]): Promise<void> {
    if (!content.trim() || !this.adapter || this._contextValue.isStreaming || this.#uploadInProgress) {
      return;
    }

    const attachments: FileAttachment[] = [];
    if (files) {
      for (const file of files) {
        const fileId = generateId('file');
        attachments.push({
          id: fileId,
          filename: file.name,
          size: file.size,
          mimeType: file.type,
          timestamp: Date.now()
        });
        this.#fileMap.set(fileId, file);
      }
    }

    let uploadedFiles: UploadedFileMetadata[] = [];
    if (files && files.length > 0) {
      try {
        this.#uploadInProgress = true;
        this.#updateContext({ isUploading: true });

        uploadedFiles = await this.#uploadFiles();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'File upload failed';
        this.#dispatchEvent({
          type: 'forge-ai-chatbot-error',
          detail: { error: errorMessage }
        });
        return;
      } finally {
        this.#uploadInProgress = false;
        this.#updateContext({ isUploading: false });
      }
    }

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content,
      timestamp: Date.now(),
      status: 'pending',
      attachments,
      uploadedFiles
    };

    this.#addMessage(userMessage);
    this.#scrollAfterUpdate();
    this.#dispatchEvent({ type: 'forge-ai-chatbot-message-sent', detail: { message: userMessage } });

    this.#fileMap.clear();

    try {
      this.adapter.sendMessage(this.getMessages());
      this.#updateMessageStatus(userMessage.id, 'complete');
    } catch (error) {
      this.#updateMessageStatus(userMessage.id, 'error');
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error: errorMessage } });
    }
  }

  /**
   * Aborts the current streaming response.
   */
  public abort(): void {
    this.#handleStop();
  }

  get #pendingAttachmentsTemplate(): TemplateResult | typeof nothing {
    if (this.#pendingAttachments.length === 0) {
      return nothing;
    }

    return html`
      ${this.#pendingAttachments.map(
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
    return html`
      <forge-ai-prompt
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this._contextValue.isStreaming || this.#uploadInProgress}
        ?disabled=${this.#uploadInProgress}
        @forge-ai-prompt-send=${this.#handleSend}
        @forge-ai-prompt-stop=${this.#handleStop}>
        ${this.#pendingAttachmentsTemplate}
        ${when(
          this.enableFileUpload,
          () => html`
            <forge-ai-file-picker
              slot="actions"
              variant="icon-button"
              multiple
              ?disabled=${this.#uploadInProgress}
              .selectedFiles=${this.#pendingAttachments.map(a => a.filename)}
              @forge-ai-file-picker-change=${this.#handleFileSelect}
              @forge-ai-file-picker-error=${this.#handleFileError}>
            </forge-ai-file-picker>
          `
        )}
      </forge-ai-prompt>
    `;
  }

  get #thinkingIndicator(): TemplateResult | typeof nothing {
    if (!this._contextValue.isStreaming) {
      return nothing;
    }

    const lastItem = this._contextValue.messageItems[this._contextValue.messageItems.length - 1];
    const hasAssistantContent =
      lastItem?.type === 'message' &&
      lastItem.data.role === 'assistant' &&
      lastItem.data.content.trim().length > 0;

    if (hasAssistantContent) {
      return nothing;
    }

    return html`<div class="thinking-indicator">
      <forge-ai-thinking-indicator class="status-indicator"></forge-ai-thinking-indicator>
    </div>`;
  }

  #renderToolCall(toolCall: ToolCall): TemplateResult {
    const toolDefinition = this._contextValue.tools.get(toolCall.name);
    return html`<forge-ai-chatbot-tool-call
      .toolCall=${toolCall}
      .toolDefinition=${toolDefinition}></forge-ai-chatbot-tool-call>`;
  }

  get #emptyState(): TemplateResult | typeof nothing {
    if (this._contextValue.messageItems.length > 0) {
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
    return this._contextValue.messageItems
      .filter(item => item.type === 'message' ? item.data.role !== 'tool' : true)
      .map((item, index) => {
        if (item.type === 'toolCall') {
          return this.#renderToolCall(item.data);
        }

        const msg = item.data;
        if (msg.role === 'user') {
          return html` <forge-ai-user-message> ${unsafeHTML(renderMarkdown(msg.content))} </forge-ai-user-message> `;
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
        aria-busy=${this._contextValue.isStreaming}>
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

  #updateContext(updates: Partial<ChatbotContext>): void {
    this._contextValue = { ...this._contextValue, ...updates };
    this.requestUpdate();
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
