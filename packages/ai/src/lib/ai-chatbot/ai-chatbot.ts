import { LitElement, html, unsafeCSS, type PropertyValues, type TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { when } from 'lit/directives/when.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '../ai-chat-interface';
import '../ai-prompt';
import '../ai-file-picker';
import '../ai-user-message';
import '../ai-response-message';
import '../ai-thinking-indicator';
import '../ai-empty-state';
import '../ai-suggestions';
import '../ai-chat-header';
import '../ai-error-message';
import './ai-chatbot-tool-call.js';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiFilePickerChangeEventData } from '../ai-file-picker';
import type { Suggestion, ForgeAiSuggestionsEventData } from '../ai-suggestions';

import { chatbotContext, type ChatbotContext } from './context.js';
import type {
  AiChatbotAdapter,
  ChatMessage,
  ToolDefinition,
  ResponseEvent,
  MessageInput,
  CoreMessage,
  ToolCall,
  FileAttachment
} from './types.js';
import { ToolExecutionController } from './controllers/tool-execution-controller.js';
import { generateId, renderMarkdown } from './utils.js';

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
  respond: (result: unknown) => Promise<void>;
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
  public adapter?: AiChatbotAdapter;

  @property({ attribute: false })
  public tools?: ToolDefinition[];

  @property({ attribute: 'thread-id' })
  public threadId?: string;

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
    messages: [],
    tools: new Map(),
    isConnected: false,
    isStreaming: false
  };

  #currentMessageId: string | null = null;
  #pendingAttachments: FileAttachment[] = [];
  #chatInterfaceRef: Ref<AiChatInterfaceComponent> = createRef();

  // Tool execution controller
  #toolController = new ToolExecutionController(this, {
    onToolUpdate: () => {
      const messages = this._contextValue.messages.map(msg => {
        const toolCalls = this.#toolController.getToolsArray(msg.id);
        if (toolCalls.length > 0) {
          return { ...msg, toolCalls };
        }
        return msg;
      });
      this.#updateContext({ messages });
    },
    onToolExecute: (toolCall: ToolCall) => {
      this.#dispatchEvent({
        type: 'forge-ai-chatbot-tool-call',
        detail: {
          toolCallId: toolCall.id,
          toolName: toolCall.name,
          arguments: toolCall.args,
          respond: async (result: unknown) => {
            await this.#sendToolResult(toolCall.id, result);
          }
        }
      });
    }
  });

  public override connectedCallback(): void {
    super.connectedCallback();

    if (!this.threadId) {
      this.threadId = generateId('thread');
    }

    if (this.adapter) {
      this.#setupAdapter();
    }

    document.addEventListener('keydown', this.#handleKeyDown);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.adapter?.disconnect();
    document.removeEventListener('keydown', this.#handleKeyDown);
  }

  #handleKeyDown = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape' && this._contextValue.isStreaming) {
      this.abort();
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

    await this.adapter.connect();
    this.adapter.onEvent(this.#handleAdapterEvent.bind(this));
    this.#updateContext({ isConnected: true });
    this.#dispatchEvent({ type: 'forge-ai-chatbot-connected' });
  }

  #updateToolsMap(): void {
    const toolsMap = new Map<string, ToolDefinition>();
    if (this.tools) {
      for (const tool of this.tools) {
        toolsMap.set(tool.name, tool);
      }
    }
    this.#updateContext({ tools: toolsMap });
  }

  /**
   * Handles adapter events
   */
  #handleAdapterEvent(event: ResponseEvent): void {
    switch (event.type) {
      case 'TEXT_MESSAGE_START':
        return this.#handleMessageStart(event.messageId || '');
      case 'TEXT_MESSAGE_CHUNK':
        return this.#handleMessageChunk(event.messageId || '', event.delta || '');
      case 'TEXT_MESSAGE_END':
        return this.#handleMessageEnd(event.messageId || '');
      case 'TOOL_CALL_START':
        return this.#handleToolStart(event.toolCallId || '', event.toolName || '');
      case 'TOOL_CALL_ARGS':
        return this.#handleToolArgs(event.toolCallId || '', event.delta, event.args);
      case 'TOOL_CALL_END':
        return this.#handleToolEnd(event.toolCallId || '');
      case 'error':
        return this.#handleError(event.error || '');
    }
  }

  #handleMessageStart(messageId: string): void {
    this.#currentMessageId = messageId;

    const message: ChatMessage = {
      id: messageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'streaming'
    };

    this.#addMessage(message);
  }

  #handleMessageChunk(messageId: string, content: string): void {
    if (!this.#currentMessageId || this.#currentMessageId !== messageId) {
      return;
    }

    this.#appendToMessage(messageId, content);
    this.#chatInterfaceRef.value?.scrollToBottom();
  }

  #handleMessageEnd(messageId: string): void {
    if (!this.#currentMessageId || this.#currentMessageId !== messageId) {
      return;
    }

    this.#updateMessageStatus(messageId, 'complete');

    const message = this.#getMessage(messageId);
    if (message) {
      this.#dispatchEvent({ type: 'forge-ai-chatbot-message-received', detail: { message } });
    }

    this.#currentMessageId = null;
    this.#updateContext({ isStreaming: false });
  }

  #handleError(error: string): void {
    const errorMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'assistant',
      content: error,
      timestamp: Date.now(),
      status: 'error'
    };

    this.#addMessage(errorMessage);
    this.#updateContext({ isStreaming: false });
    this.#dispatchEvent({ type: 'forge-ai-chatbot-error', detail: { error } });
  }

  #handleToolStart(toolCallId: string, toolName: string): void {
    if (!this.#currentMessageId) {
      return;
    }

    const toolCall = this.#toolController.startTool(toolCallId, this.#currentMessageId, toolName);
    this.#updateMessageToolCalls(this.#currentMessageId, [toolCall]);
  }

  #handleToolArgs(toolCallId: string, argsChunk?: string, args?: Record<string, unknown>): void {
    this.#toolController.updateToolArgs(toolCallId, argsChunk, args);
  }

  #handleToolEnd(toolCallId: string): void {
    this.#toolController.finalizeTool(toolCallId);
  }

  async #sendToolResult(toolCallId: string, result: unknown): Promise<void> {
    const toolCall = this.#toolController.getTool(toolCallId);
    if (!toolCall || !this.threadId || !this.adapter) {
      return;
    }

    this.#toolController.completeTool(toolCallId, result);

    const toolMessage: CoreMessage = {
      id: generateId('tool'),
      role: 'tool',
      content: JSON.stringify(result)
    };

    const input: MessageInput = {
      threadId: this.threadId,
      messages: [...this.#buildMessagesForRequest(), toolMessage],
      tools: this.tools
    };

    this.adapter.sendMessage(input);
  }

  #updateMessageToolCalls(messageId: string, toolCalls: ToolCall[]): void {
    const messages = this._contextValue.messages.map(msg => {
      if (msg.id === messageId) {
        return { ...msg, toolCalls };
      }
      return msg;
    });
    this.#updateContext({ messages });
  }

  #handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): void {
    const message = evt.detail.value;
    if (!message.trim() || !this.adapter || !this.threadId) {
      return;
    }

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content: message,
      timestamp: evt.detail.date.getTime(),
      status: 'complete',
      attachments: [...this.#pendingAttachments]
    };

    this.#addMessage(userMessage);
    this.#dispatchEvent({ type: 'forge-ai-chatbot-message-sent', detail: { message: userMessage } });
    this.#pendingAttachments = [];

    const input: MessageInput = {
      threadId: this.threadId,
      messages: this.#buildMessagesForRequest(),
      tools: this.tools
    };

    this.adapter.sendMessage(input);
    this.#updateContext({ isStreaming: true });
  }

  #handleStop(): void {
    this.adapter?.abort();
    if (this.#currentMessageId) {
      this.#updateMessageStatus(this.#currentMessageId, 'complete');
    }
    this.#currentMessageId = null;
    this.#updateContext({ isStreaming: false });
  }

  async #handleCopy(assistantMessageIndex: number): Promise<void> {
    const message = this._contextValue.messages[assistantMessageIndex];
    if (!message) {
      return;
    }

    try {
      await navigator.clipboard.writeText(message.content);
    } catch {
      // Silent fail
    }
  }

  #handleRefresh(assistantMessageIndex: number): void {
    if (!this.threadId || !this.adapter) {
      return;
    }

    // Find the user message that triggered this response
    let userMessageIndex = -1;
    for (let i = assistantMessageIndex - 1; i >= 0; i--) {
      if (this._contextValue.messages[i].role === 'user') {
        userMessageIndex = i;
        break;
      }
    }

    if (userMessageIndex === -1) {
      return;
    }

    // Remove the current assistant message
    const messages = this._contextValue.messages.filter((_, index) => index !== assistantMessageIndex);
    this.#updateContext({ messages });

    // Resend the user message to generate a new response
    const input: MessageInput = {
      threadId: this.threadId,
      messages: this.#buildMessagesForRequest(),
      tools: this.tools
    };

    this.adapter.sendMessage(input);
    this.#updateContext({ isStreaming: true });
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
    this.#pendingAttachments.push({
      file: evt.detail.file,
      timestamp: evt.detail.timestamp
    });
  }

  #handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): void {
    this.sendMessage(evt.detail.text);
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

  #buildMessagesForRequest(): CoreMessage[] {
    return this._contextValue.messages.map(msg => ({
      id: msg.id,
      role: msg.role,
      content: msg.content
    }));
  }

  #addMessage(message: ChatMessage): void {
    const messages = [...this._contextValue.messages, message];
    this.#updateContext({ messages });
  }

  #appendToMessage(id: string, content: string): void {
    const messages = this._contextValue.messages.map(msg =>
      msg.id === id ? { ...msg, content: msg.content + content } : msg
    );
    this.#updateContext({ messages });
  }

  #getMessage(id: string): ChatMessage | undefined {
    return this._contextValue.messages.find(msg => msg.id === id);
  }

  #updateMessageStatus(id: string, status: ChatMessage['status']): void {
    const messages = this._contextValue.messages.map(msg => (msg.id === id ? { ...msg, status } : msg));
    this.#updateContext({ messages });
  }

  /**
   * Clears all messages from the chat history.
   */
  public clearMessages(): void {
    this.#updateContext({ messages: [] });
    this.#toolController.clear();
    this.#currentMessageId = null;
  }

  /**
   * Gets the current message history.
   * @returns Array of chat messages
   */
  public getMessages(): ChatMessage[] {
    return [...this._contextValue.messages];
  }

  /**
   * Sets the message history. Useful for restoring conversation state.
   * @param messages - Array of chat messages to set
   */
  public setMessages(messages: ChatMessage[]): void {
    this.#updateContext({ messages: [...messages] });
  }

  /**
   * Programmatically sends a message as the user.
   * @param content - The message content to send
   * @param attachments - Optional file attachments
   */
  public sendMessage(content: string, attachments?: FileAttachment[]): void {
    if (!content.trim() || !this.adapter || !this.threadId) {
      return;
    }

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content,
      timestamp: Date.now(),
      status: 'complete',
      attachments: attachments || []
    };

    this.#addMessage(userMessage);
    this.#dispatchEvent({ type: 'forge-ai-chatbot-message-sent', detail: { message: userMessage } });

    const input: MessageInput = {
      threadId: this.threadId,
      messages: this.#buildMessagesForRequest(),
      tools: this.tools
    };

    this.adapter.sendMessage(input);
    this.#updateContext({ isStreaming: true });
  }

  /**
   * Aborts the current streaming response.
   */
  public abort(): void {
    this.#handleStop();
  }

  get #promptSlot(): TemplateResult {
    return html`
      <forge-ai-prompt
        slot="prompt"
        .placeholder=${this.placeholder}
        .running=${this._contextValue.isStreaming}
        @forge-ai-prompt-send=${this.#handleSend}
        @forge-ai-prompt-stop=${this.#handleStop}>
        ${when(
          this.enableFileUpload,
          () => html`
            <forge-ai-file-picker
              slot="actions"
              variant="icon-button"
              @forge-ai-file-picker-change=${this.#handleFileSelect}>
            </forge-ai-file-picker>
          `
        )}
      </forge-ai-prompt>
    `;
  }

  #renderStatusIndicator(msg: ChatMessage): TemplateResult | typeof nothing {
    if (msg.status !== 'streaming') {
      return nothing;
    }

    // Only show if message has no content and no tool calls
    if (!msg.content && (!msg.toolCalls || msg.toolCalls.length === 0)) {
      return html`<div class="thinking-indicator">
        <forge-ai-thinking-indicator class="status-indicator"></forge-ai-thinking-indicator>
      </div>`;
    }

    return nothing;
  }

  #renderToolCalls(toolCalls?: ToolCall[]): TemplateResult | typeof nothing {
    if (!toolCalls || toolCalls.length === 0) {
      return nothing;
    }

    return html`
      <div class="tool-calls-container">
        ${toolCalls.map(
          toolCall => html` <forge-ai-chatbot-tool-call .toolCall=${toolCall}></forge-ai-chatbot-tool-call> `
        )}
      </div>
    `;
  }

  #renderAttachments(attachments?: FileAttachment[]): TemplateResult | typeof nothing {
    if (!attachments || attachments.length === 0) {
      return nothing;
    }

    return html`
      <div
        style="display: flex; flex-direction: column; gap: 4px; margin-block-start: 8px; font-size: 0.875em; opacity: 0.8;">
        ${attachments.map(
          attachment => html`
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>📎</span>
              <span>${attachment.file.name}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  get #emptyState(): TemplateResult | typeof nothing {
    if (this._contextValue.messages.length > 0) {
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
          .suggestions=${this.suggestions}
          @forge-ai-suggestions-select=${this.#handleSuggestionSelect}></forge-ai-suggestions>
      </forge-ai-empty-state>
    `;
  }

  get #messages(): TemplateResult[] {
    return this._contextValue.messages.map((msg, index) => {
      if (msg.role === 'user') {
        return html`
          <forge-ai-user-message>
            ${unsafeHTML(renderMarkdown(msg.content))} ${this.#renderAttachments(msg.attachments)}
          </forge-ai-user-message>
        `;
      } else if (msg.status === 'error') {
        return html`
          <forge-ai-error-message>
            <span slot="title">Error</span>
            ${unsafeHTML(renderMarkdown(msg.content))}
          </forge-ai-error-message>
        `;
      } else {
        return html`
          ${this.#renderToolCalls(msg.toolCalls)}
          ${when(
            msg.content?.trim().length > 0,
            () => html`
              <forge-ai-response-message
                .complete=${msg.status === 'complete'}
                ?enable-reactions=${this.enableReactions}
                @forge-ai-response-message-copy=${() => this.#handleCopy(index)}
                @forge-ai-response-message-refresh=${() => this.#handleRefresh(index)}
                @forge-ai-response-message-thumbs-up=${() => this.#handleThumbsUp(msg.id)}
                @forge-ai-response-message-thumbs-down=${() => this.#handleThumbsDown(msg.id)}>
                ${unsafeHTML(renderMarkdown(msg.content))}
              </forge-ai-response-message>
            `
          )}
          ${this.#renderStatusIndicator(msg)}
        `;
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
        ${this.#emptyState} ${this.#messages} ${this.#promptSlot}
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
