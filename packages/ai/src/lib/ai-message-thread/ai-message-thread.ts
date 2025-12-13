import { LitElement, TemplateResult, html, nothing, unsafeCSS, type PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { when } from 'lit/directives/when.js';
import type { MessageItem, ToolDefinition, ToolCall } from '../ai-chatbot/types.js';
import { MarkdownStreamController } from '../ai-chatbot/markdown-stream-controller.js';

import '../ai-empty-state';
import '../ai-error-message';
import '../ai-response-message';
import '../ai-thinking-indicator';
import '../ai-user-message';
import '../ai-chatbot/ai-chatbot-tool-call.js';

import styles from './ai-message-thread.scss?inline';
import { FeatureToggle } from '../ai-chatbot/ai-chatbot.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-message-thread': AiMessageThreadComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-message-thread-copy': CustomEvent<ForgeAiMessageThreadCopyEventData>;
    'forge-ai-message-thread-refresh': CustomEvent<ForgeAiMessageThreadRefreshEventData>;
    'forge-ai-message-thread-thumbs-up': CustomEvent<ForgeAiMessageThreadThumbsEventData>;
    'forge-ai-message-thread-thumbs-down': CustomEvent<ForgeAiMessageThreadThumbsEventData>;
  }
}

export interface ForgeAiMessageThreadCopyEventData {
  messageItemIndex: number;
}

export interface ForgeAiMessageThreadRefreshEventData {
  messageItemIndex: number;
}

export interface ForgeAiMessageThreadThumbsEventData {
  messageId: string;
}

export const AiMessageThreadComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-message-thread';

const SCROLL_THRESHOLD = 100;

/**
 * @tag forge-ai-message-thread
 *
 * @summary A primitive component for rendering a thread of chat messages, including user, assistant, system, and tool call messages.
 *
 * @description
 * The AI Message Thread component displays a chronological list of messages with support for markdown rendering,
 * tool calls, empty states, and thinking indicators. It handles its own scrolling behavior with auto-scroll support.
 *
 * @slot empty-state-heading - Slot for custom empty state heading content
 * @slot empty-state-actions - Slot for custom empty state actions (e.g., suggestions)
 *
 * @event {CustomEvent<ForgeAiMessageThreadCopyEventData>} forge-ai-message-thread-copy - Fired when user clicks copy on a message
 * @event {CustomEvent<ForgeAiMessageThreadRefreshEventData>} forge-ai-message-thread-refresh - Fired when user clicks refresh on a message
 * @event {CustomEvent<ForgeAiMessageThreadThumbsEventData>} forge-ai-message-thread-thumbs-up - Fired when user gives thumbs up
 * @event {CustomEvent<ForgeAiMessageThreadThumbsEventData>} forge-ai-message-thread-thumbs-down - Fired when user gives thumbs down
 */
@customElement(AiMessageThreadComponentTagName)
export class AiMessageThreadComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public messageItems: MessageItem[] = [];

  @property({ attribute: false })
  public tools?: Map<string, ToolDefinition>;

  @property({ type: Boolean, attribute: 'enable-reactions' })
  public enableReactions = false;

  @property({ type: Boolean, attribute: 'show-thinking' })
  public showThinking = false;

  @property({ attribute: 'auto-scroll' })
  public autoScroll: FeatureToggle = 'on';

  @query('.message-thread')
  private _messageThreadContainer!: HTMLElement;

  #markdownController!: MarkdownStreamController;
  #canAutoScroll = true;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#markdownController = new MarkdownStreamController(this);
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (this.autoScroll === 'on' && (changedProperties.has('messageItems') || changedProperties.has('showThinking'))) {
      this.scrollToBottom();
    }
  }

  #handleScroll = (): void => {
    const { scrollTop, scrollHeight, clientHeight } = this._messageThreadContainer;
    this.#canAutoScroll = scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD;
  };

  public scrollToBottom(force = false): void {
    if (!force && !this.#canAutoScroll) {
      return;
    }

    const container = this._messageThreadContainer;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
  }

  #handleCopy(messageItemIndex: number): void {
    this.#dispatchEvent({
      type: 'forge-ai-message-thread-copy',
      detail: { messageItemIndex }
    });
  }

  #handleRefresh(messageItemIndex: number): void {
    this.#dispatchEvent({
      type: 'forge-ai-message-thread-refresh',
      detail: { messageItemIndex }
    });
  }

  #handleThumbsUp(messageId: string): void {
    this.#dispatchEvent({
      type: 'forge-ai-message-thread-thumbs-up',
      detail: { messageId }
    });
  }

  #handleThumbsDown(messageId: string): void {
    this.#dispatchEvent({
      type: 'forge-ai-message-thread-thumbs-down',
      detail: { messageId }
    });
  }

  #renderToolCall(toolCall: ToolCall): TemplateResult {
    const toolDefinition = this.tools?.get(toolCall.name);
    return html`<forge-ai-chatbot-tool-call
      .toolCall=${toolCall}
      .toolDefinition=${toolDefinition}></forge-ai-chatbot-tool-call>`;
  }

  get #emptyState(): TemplateResult | typeof nothing {
    if (this.messageItems.length) {
      return nothing;
    }

    return html`
      <forge-ai-empty-state>
        <slot name="empty-state-heading" slot="heading">
          <span>How can I help you today?</span>
        </slot>
        <slot name="empty-state-actions" slot="actions"></slot>
      </forge-ai-empty-state>
    `;
  }

  get #thinkingIndicator(): TemplateResult | typeof nothing {
    if (!this.showThinking) {
      return nothing;
    }

    const lastItem = this.messageItems[this.messageItems.length - 1];
    const hasAssistantContent =
      lastItem?.type === 'message' && lastItem.data.role === 'assistant' && lastItem.data.content.trim().length > 0;

    if (hasAssistantContent) {
      return nothing;
    }

    return html`<div class="thinking-indicator">
      <forge-ai-thinking-indicator class="status-indicator"></forge-ai-thinking-indicator>
    </div>`;
  }

  get #messages(): TemplateResult[] {
    return this.messageItems
      .filter(item => (item.type === 'message' ? item.data.role !== 'tool' : true))
      .map((item, index) => {
        if (item.type === 'toolCall') {
          return this.#renderToolCall(item.data);
        }

        const msg = item.data;
        if (msg.role === 'user') {
          const renderedHtml = this.#markdownController.getCachedHtml(msg.id, msg.content);
          return html`<forge-ai-user-message>${unsafeHTML(renderedHtml)}</forge-ai-user-message>`;
        } else if (msg.role === 'system') {
          return html`<div class="system-message">${msg.content}</div>`;
        } else if (msg.status === 'error') {
          const renderedHtml = this.#markdownController.getCachedHtml(msg.id, msg.content);
          return html`
            <forge-ai-error-message>
              <span slot="title">Error</span>
              ${unsafeHTML(renderedHtml)}
            </forge-ai-error-message>
          `;
        } else {
          return when(msg.content?.trim().length > 0, () => {
            const renderedHtml = this.#markdownController.getCachedHtml(msg.id, msg.content);
            return html`
              <forge-ai-response-message
                ?complete=${msg.status === 'complete'}
                ?enable-reactions=${this.enableReactions}
                @forge-ai-response-message-copy=${() => this.#handleCopy(index)}
                @forge-ai-response-message-refresh=${() => this.#handleRefresh(index)}
                @forge-ai-response-message-thumbs-up=${() => this.#handleThumbsUp(msg.id)}
                @forge-ai-response-message-thumbs-down=${() => this.#handleThumbsDown(msg.id)}>
                ${unsafeHTML(renderedHtml)}
              </forge-ai-response-message>
            `;
          });
        }
      });
  }

  public override render(): TemplateResult {
    return html`
      <div class="message-thread" @scroll=${this.autoScroll ? this.#handleScroll : undefined}>
        ${this.#emptyState} ${this.#messages} ${this.#thinkingIndicator}
      </div>
    `;
  }

  #dispatchEvent(config: { type: keyof HTMLElementEventMap; detail?: unknown }): CustomEvent {
    const event = new CustomEvent(config.type, {
      detail: config.detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    return event;
  }
}
