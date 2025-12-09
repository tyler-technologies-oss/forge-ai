import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AiSidebarComponent } from '../ai-sidebar';
import type { AiModalComponent } from '../ai-modal';
import '../ai-sidebar';
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
 * @slot - Default slot for chatbot component
 *
 * @fires forge-ai-sidebar-chat-open - Fired when the sidebar chat is opened
 * @fires forge-ai-sidebar-chat-close - Fired when the sidebar chat is closed
 * @fires forge-ai-sidebar-chat-expand - Fired when the sidebar chat is expanded to modal
 * @fires forge-ai-sidebar-chat-collapse - Fired when the sidebar chat is collapsed from modal
 *
 * @description A form factor component that positions a slotted chatbot in a sidebar or modal.
 * Manages positioning and expand/collapse state while delegating chat functionality to the slotted chatbot.
 * When expanded, displays in fullscreen modal. When collapsed, displays in sidebar.
 * All chatbot events bubble through unchanged.
 */
@customElement(AiSidebarChatComponentTagName)
export class AiSidebarChatComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean })
  public open = false;

  @property({ type: Boolean })
  public expanded = false;

  #sidebarRef: Ref<AiSidebarComponent> = createRef();
  #modalRef: Ref<AiModalComponent> = createRef();

  readonly #slotContent = html`
    <slot
      @forge-ai-chatbot-expand=${this.#handleChatbotExpand}
      @forge-ai-chatbot-minimize=${this.#handleChatbotMinimize}></slot>
  `;

  public override render(): TemplateResult {
    return html`
      ${when(
        this.expanded,
        () => html`
          <forge-ai-modal
            ${ref(this.#modalRef)}
            ?open=${this.open && this.expanded}
            @forge-ai-modal-fullscreen-change=${this.#handleFullscreenChange}
            @forge-ai-modal-close=${this.#handleModalClose}>
            ${this.#slotContent}
          </forge-ai-modal>
        `,
        () => html`
          <forge-ai-sidebar
            ${ref(this.#sidebarRef)}
            ?open=${this.open && !this.expanded}
            @forge-ai-sidebar-open=${this.#handleSidebarOpen}
            @forge-ai-sidebar-close=${this.#handleSidebarClose}>
            ${this.#slotContent}
          </forge-ai-sidebar>
        `
      )}
    `;
  }

  public show(): void {
    this.open = true;
    this.#dispatchEvent('forge-ai-sidebar-chat-open');
  }

  public close(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
    this.open = false;
    this.#dispatchEvent('forge-ai-sidebar-chat-close');
  }

  public toggle(): void {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  public expand(): void {
    if (!this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-sidebar-chat-expand');
    }
  }

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

  #handleFullscreenChange(event: CustomEvent<{ isFullscreen: boolean }>): void {
    const { isFullscreen } = event.detail;
    if (isFullscreen && !this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-sidebar-chat-expand');
    } else if (!isFullscreen && this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-sidebar-chat-collapse');
    }
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
    this.collapse();
  }

  #dispatchEvent(type: keyof HTMLElementEventMap): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
