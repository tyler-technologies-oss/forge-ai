import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AiDialogComponent } from '../ai-dialog';
import type { AgentAdapter, Suggestion } from '../ai-chatbot';
import '../ai-dialog';
import '../ai-chatbot';

import styles from './ai-floating-chat.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-floating-chat': AiFloatingChatComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-floating-chat-open': CustomEvent<void>;
    'forge-ai-floating-chat-close': CustomEvent<void>;
    'forge-ai-floating-chat-expand': CustomEvent<void>;
    'forge-ai-floating-chat-collapse': CustomEvent<void>;
  }
}

export const AiFloatingChatComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-floating-chat';

/**
 * @tag forge-ai-floating-chat
 *
 * @slot header-title - Slot for custom header title content (default: "AI Assistant")
 * @slot empty-state-heading - Slot for custom empty state heading
 *
 * @fires forge-ai-floating-chat-open - Fired when the chat is opened
 * @fires forge-ai-floating-chat-close - Fired when the chat is closed
 * @fires forge-ai-floating-chat-expand - Fired when the chat is expanded
 * @fires forge-ai-floating-chat-collapse - Fired when the chat is collapsed
 *
 * @description A structured form factor component that combines ai-dialog and ai-chatbot
 * with automatic event handling and responsive behavior delegation to the underlying ai-dialog.
 * The chatbot component handles all chat UI, this component only manages positioning and expand/minimize state.
 * All chatbot events (message-sent, message-received, tool-call, error, clear, info, connected, disconnected) bubble through unchanged.
 *
 * @property {AgentAdapter} adapter - Required. The adapter for communication with the AI service
 * @property {boolean} enableFileUpload - Enable file upload functionality (default: false)
 * @property {string} placeholder - Placeholder text for input (default: "Ask a question...")
 * @property {Suggestion[]} suggestions - Optional suggestions for empty state
 */
@customElement(AiFloatingChatComponentTagName)
export class AiFloatingChatComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the chat is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Controls the chat's positioning and size behavior.
   * When true, the chat will have an expanded width and be centered on the screen.
   * When false, the chat will be positioned at the bottom-right corner with a fixed width.
   */
  @property({ type: Boolean })
  public expanded = false;

  @property({ attribute: false })
  public adapter?: AgentAdapter;

  @property({ attribute: 'thread-id' })
  public threadId?: string;

  @property({ type: Boolean, attribute: 'enable-file-upload' })
  public enableFileUpload = false;

  @property()
  public placeholder = 'Ask a question...';

  @property({ attribute: false })
  public suggestions?: Suggestion[];

  @state()
  private _isFullscreen = false;

  #dialogRef: Ref<AiDialogComponent> = createRef();

  public override updated(): void {
    // Sync with dialog's initial fullscreen state
    if (this.#dialogRef.value && this._isFullscreen !== this.#dialogRef.value.isFullscreen) {
      this._isFullscreen = this.#dialogRef.value.isFullscreen;
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-dialog
        ${ref(this.#dialogRef)}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${this.#handleFullscreenChange}
        @forge-ai-dialog-close=${this.#handleDialogClose}>
        <forge-ai-chatbot
          .adapter=${this.adapter}
          thread-id=${ifDefined(this.threadId)}
          ?enable-file-upload=${this.enableFileUpload}
          placeholder=${this.placeholder}
          .suggestions=${this.suggestions}
          ?show-expand-button=${!this._isFullscreen}
          show-minimize-button
          minimize-icon="default"
          ?expanded=${this.expanded}
          @forge-ai-chatbot-expand=${this.#handleChatbotExpand}
          @forge-ai-chatbot-minimize=${this.#handleChatbotMinimize}>
          <slot name="header-title" slot="header-title"></slot>
          <slot name="empty-state-heading" slot="empty-state-heading"></slot>
        </forge-ai-chatbot>
      </forge-ai-dialog>
    `;
  }

  /**
   * Opens the chat.
   */
  public show(): void {
    this.open = true;
    this.#dispatchEvent('forge-ai-floating-chat-open');
  }

  /**
   * Closes the chat.
   */
  public close(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
    this.open = false;
    this.#dispatchEvent('forge-ai-floating-chat-close');
  }

  /**
   * Toggles the chat open state.
   */
  public toggle(): void {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  /**
   * Expands the chat to full width.
   */
  public expand(): void {
    if (!this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-floating-chat-expand');
    }
  }

  /**
   * Collapses the chat to normal width.
   */
  public collapse(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
  }

  #handleFullscreenChange(event: CustomEvent<{ isFullscreen: boolean }>): void {
    this._isFullscreen = event.detail.isFullscreen;
  }

  #handleChatbotExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-floating-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
  }

  #handleChatbotMinimize(): void {
    this.close();
  }

  #handleDialogClose(): void {
    // Sync state when dialog is closed externally (Escape key, backdrop click, etc.)
    if (this.open) {
      this.close();
    }
  }

  #dispatchEvent(type: keyof HTMLElementEventMap): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
