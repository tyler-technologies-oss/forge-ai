import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AiSidebarComponent } from '../ai-sidebar';
import type { AiModalComponent } from '../ai-modal';
import type { AiChatbotAdapterBase, ToolDefinition, Suggestion } from '../ai-chatbot';
import '../ai-sidebar';
import '../ai-chatbot';
import '../ai-modal';

import styles from './ai-sidebar-chat.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-sidebar-chat': AiSidebarChatComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-sidebar-chat-open': CustomEvent<void>;
    'forge-ai-sidebar-chat-close': CustomEvent<void>;
    'forge-ai-sidebar-chat-expand': CustomEvent<void>;
    'forge-ai-sidebar-chat-collapse': CustomEvent<void>;
  }
}

export const AiSidebarChatComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-sidebar-chat';

/**
 * @tag forge-ai-sidebar-chat
 *
 * @slot header-title - Slot for custom header title content (default: "AI Assistant")
 * @slot empty-state-heading - Slot for custom empty state heading
 *
 * @fires forge-ai-sidebar-chat-open - Fired when the sidebar chat is opened
 * @fires forge-ai-sidebar-chat-close - Fired when the sidebar chat is closed
 * @fires forge-ai-sidebar-chat-expand - Fired when the sidebar chat is expanded to modal
 * @fires forge-ai-sidebar-chat-collapse - Fired when the sidebar chat is collapsed from modal
 *
 * @description A structured form factor component that combines ai-sidebar, ai-modal, and ai-chatbot
 * with automatic event handling for sidebar-based chat interfaces. When expanded, the chat
 * content is displayed in a fullscreen modal. The chatbot component handles all chat UI,
 * this component only manages positioning and expand/collapse state.
 * All chatbot events (message-sent, message-received, tool-call, error, clear, info, connected, disconnected) bubble through unchanged.
 *
 * @property {AiChatbotAdapterBase} adapter - Required. The adapter for communication with the AI service
 * @property {ToolDefinition[]} tools - Optional client-side tools for the agent to execute
 * @property {boolean} enableFileUpload - Enable file upload functionality (default: false)
 * @property {string} placeholder - Placeholder text for input (default: "Ask a question...")
 * @property {Suggestion[]} suggestions - Optional suggestions for empty state
 */
@customElement(AiSidebarChatComponentTagName)
export class AiSidebarChatComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the sidebar chat is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Controls whether the chat is displayed in an expanded modal state.
   * When true, the chat content will be shown in a fullscreen modal.
   * When false, the chat will be displayed in the sidebar.
   */
  @property({ type: Boolean })
  public expanded = false;

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

  #sidebarRef: Ref<AiSidebarComponent> = createRef();
  #modalRef: Ref<AiModalComponent> = createRef();

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
        ?show-minimize-button=${!this.expanded}
        .minimizeIcon=${this.expanded ? 'default' : 'panel'}
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
            ?open=${this.open && this.expanded}
            @forge-ai-modal-close=${this.#handleModalClose}>
            ${this.#chatInterface}
          </forge-ai-modal>
        `,
        () => html`
          <forge-ai-sidebar
            ${ref(this.#sidebarRef)}
            ?open=${this.open && !this.expanded}
            @forge-ai-sidebar-open=${this.#handleSidebarOpen}
            @forge-ai-sidebar-close=${this.#handleSidebarClose}>
            ${this.#chatInterface}
          </forge-ai-sidebar>
        `
      )}
    `;
  }

  /**
   * Opens the sidebar chat.
   */
  public show(): void {
    this.open = true;
    this.#dispatchEvent('forge-ai-sidebar-chat-open');
  }

  /**
   * Closes the sidebar chat.
   */
  public close(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
    this.open = false;
    this.#dispatchEvent('forge-ai-sidebar-chat-close');
  }

  /**
   * Toggles the sidebar chat open state.
   */
  public toggle(): void {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  /**
   * Expands the chat to fullscreen modal.
   */
  public expand(): void {
    if (!this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-sidebar-chat-expand');
    }
  }

  /**
   * Collapses the chat from fullscreen modal back to sidebar.
   */
  public collapse(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
  }

  #handleSidebarOpen(): void {
    this.open = true;
    this.#dispatchEvent('forge-ai-sidebar-chat-open');
  }

  #handleSidebarClose(): void {
    this.open = false;
    this.#dispatchEvent('forge-ai-sidebar-chat-close');
  }

  #handleChatbotExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-sidebar-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
  }

  #handleChatbotMinimize(): void {
    this.close();
  }

  #handleModalClose(): void {
    // When modal closes externally (Escape key, backdrop click, etc.),
    // collapse the expanded state and return to sidebar mode
    if (this.expanded) {
      this.collapse();
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
