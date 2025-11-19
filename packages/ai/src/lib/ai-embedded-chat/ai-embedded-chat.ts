import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AiModalComponent } from '../ai-modal';
import type { AiChatbotAdapterBase, ToolDefinition, Suggestion } from '../ai-chatbot';
import '../ai-modal';
import '../ai-chatbot';
import '../ai-gradient-container';

import styles from './ai-embedded-chat.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-embedded-chat': AiEmbeddedChatComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-embedded-chat-expand': CustomEvent<void>;
    'forge-ai-embedded-chat-collapse': CustomEvent<void>;
  }
}

export const AiEmbeddedChatComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-embedded-chat';

/**
 * @tag forge-ai-embedded-chat
 *
 * @slot header-title - Slot for custom header title content (default: "AI Assistant")
 * @slot empty-state-heading - Slot for custom empty state heading
 *
 * @event {CustomEvent<void>} forge-ai-embedded-chat-expand - Fired when the chat is expanded to modal view
 * @event {CustomEvent<void>} forge-ai-embedded-chat-collapse - Fired when the chat is collapsed from modal view
 *
 * @description A form factor component that embeds ai-chatbot within ai-gradient-container
 * for inline page usage with optional modal expansion functionality. When expanded, the chat
 * is displayed in a fullscreen modal. The chatbot component handles all chat UI.
 * All chatbot events (message-sent, message-received, tool-call, error, clear, info, connected, disconnected) bubble through unchanged.
 *
 * @property {AiChatbotAdapterBase} adapter - Required. The adapter for communication with the AI service
 * @property {ToolDefinition[]} tools - Optional client-side tools for the agent to execute
 * @property {boolean} enableFileUpload - Enable file upload functionality (default: false)
 * @property {string} placeholder - Placeholder text for input (default: "Ask a question...")
 * @property {Suggestion[]} suggestions - Optional suggestions for empty state
 * @property {string} gradientVariant - Gradient variant for embedded view ('low' | 'medium' | 'high', default: 'medium')
 */
@customElement(AiEmbeddedChatComponentTagName)
export class AiEmbeddedChatComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Controls whether the modal view is open when expanded.
   */
  @property({ type: Boolean })
  public expanded = false;

  /**
   * Controls the gradient variant applied to the container.
   */
  @property({ attribute: 'gradient-variant' })
  public gradientVariant: 'low' | 'medium' | 'high' = 'medium';

  @property({ attribute: false })
  public adapter?: AiChatbotAdapterBase;

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

  @state()
  private _isModalFullscreen = false;

  #modalRef: Ref<AiModalComponent> = createRef();

  public override updated(): void {
    // Sync with modal's initial fullscreen state
    if (this.#modalRef.value && this._isModalFullscreen !== this.#modalRef.value.fullscreen) {
      this._isModalFullscreen = this.#modalRef.value.fullscreen ?? false;
    }
  }

  get #chatInterface(): TemplateResult {
    return html`
      <forge-ai-chatbot
        .adapter=${this.adapter}
        .tools=${this.tools}
        thread-id=${ifDefined(this.threadId)}
        ?enable-file-upload=${this.enableFileUpload}
        placeholder=${this.placeholder}
        .suggestions=${this.suggestions}
        show-expand-button
        ?show-minimize-button=${this.expanded}
        minimize-icon="default"
        ?expanded=${this.expanded}
        @forge-ai-chatbot-expand=${this.#handleChatbotExpand}
        @forge-ai-chatbot-minimize=${this.#handleChatbotMinimize}>
        <slot name="header-title" slot="header-title"></slot>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
      </forge-ai-chatbot>
    `;
  }

  public override render(): TemplateResult {
    return html`
      ${when(
        this.expanded,
        () => html`
          <forge-ai-modal
            ${ref(this.#modalRef)}
            ?open=${this.expanded}
            @forge-ai-modal-close=${this.#handleModalClose}
            @forge-ai-modal-fullscreen-change=${this.#handleModalFullscreenChange}>
            ${this.#chatInterface}
          </forge-ai-modal>
        `,
        () => html`
          <forge-ai-gradient-container variant=${this.gradientVariant}>
            ${this.#chatInterface}
          </forge-ai-gradient-container>
        `
      )}
    `;
  }

  /**
   * Expands the chat to modal view.
   */
  public expand(): void {
    if (!this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-embedded-chat-expand');
    }
  }

  /**
   * Collapses the chat from modal view back to embedded view.
   */
  public collapse(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-embedded-chat-collapse');
    }
  }

  #handleChatbotExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-embedded-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-embedded-chat-collapse');
    }
  }

  #handleChatbotMinimize(): void {
    this.collapse();
  }

  #handleModalClose(): void {
    // Sync state when modal is closed externally (Escape key, backdrop click, etc.)
    if (this.expanded) {
      this.collapse();
    }
  }

  #handleModalFullscreenChange(event: CustomEvent<{ isFullscreen: boolean }>): void {
    this._isModalFullscreen = event.detail.isFullscreen;
  }

  #dispatchEvent(type: keyof HTMLElementEventMap): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
