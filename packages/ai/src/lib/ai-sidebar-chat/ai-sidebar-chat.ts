import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AiSidebarComponent } from '../ai-sidebar';
import type { AiModalComponent } from '../ai-modal';
import '../ai-sidebar';
import '../ai-chat-interface';
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
 * @slot - Default slot for messages (ai-user-message, ai-response-message components)
 * @slot suggestions - Slot for AI suggestions component
 * @slot prompt - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 *
 * @fires forge-ai-sidebar-chat-open - Fired when the sidebar chat is opened
 * @fires forge-ai-sidebar-chat-close - Fired when the sidebar chat is closed
 * @fires forge-ai-sidebar-chat-expand - Fired when the sidebar chat is expanded to modal
 * @fires forge-ai-sidebar-chat-collapse - Fired when the sidebar chat is collapsed from modal
 *
 * @description A structured form factor component that combines ai-sidebar and ai-chat-interface
 * with automatic event handling for sidebar-based chat interfaces. When expanded, the chat
 * content is displayed in a fullscreen modal.
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

  #sidebarRef: Ref<AiSidebarComponent> = createRef();
  #modalRef: Ref<AiModalComponent> = createRef();

  get #chatInterface(): TemplateResult {
    return html`
      <forge-ai-chat-interface
        show-expand-button
        ?show-minimize-button=${!this.expanded}
        minimize-icon=${this.expanded ? 'default' : 'panel'}
        ?expanded=${this.expanded}
        @forge-ai-chat-header-expand=${this.#handleHeaderExpand}
        @forge-ai-chat-header-minimize=${this.#handleHeaderMinimize}>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
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

  #handleHeaderExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-sidebar-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
  }

  #handleHeaderMinimize(): void {
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
