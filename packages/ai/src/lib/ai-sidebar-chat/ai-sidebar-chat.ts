import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { ForgeAiSidebarResizeEventData } from '../ai-sidebar';
import type { FeatureToggle } from '../ai-chatbot';
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
    'forge-ai-sidebar-chat-resize': CustomEvent<ForgeAiSidebarChatResizeEventData>;
  }
}

export interface ForgeAiSidebarChatResizeEventData {
  width: number;
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
 * @fires forge-ai-sidebar-chat-resize - Fired when the sidebar width is resized
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

  /**
   * Enables sidebar resizing. Set to `'off'` to disable.
   */
  @property()
  public resizable: FeatureToggle = 'on';

  /**
   * The current width of the sidebar in pixels. Retained across expand/collapse.
   */
  @property({ type: Number })
  public width?: number;

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
            ?open=${this.open && this.expanded}
            @forge-ai-modal-fullscreen-change=${this.#handleFullscreenChange}
            @forge-ai-modal-close=${this.#handleModalClose}>
            ${this.#slotContent}
          </forge-ai-modal>
        `,
        () => html`
          <forge-ai-sidebar
            ?open=${this.open && !this.expanded}
            resizable=${this.resizable}
            width=${ifDefined(this.width)}
            @forge-ai-sidebar-open=${this.#handleSidebarOpen}
            @forge-ai-sidebar-close=${this.#handleSidebarClose}
            @forge-ai-sidebar-resize=${this.#handleSidebarResize}>
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

  #handleSidebarResize(event: CustomEvent<ForgeAiSidebarResizeEventData>): void {
    this.width = event.detail.width;
    this.#dispatchEvent('forge-ai-sidebar-chat-resize', { width: this.width });
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

  #dispatchEvent<T>(type: keyof HTMLElementEventMap, detail?: T): void {
    const event = new CustomEvent<T>(type, {
      bubbles: true,
      composed: true,
      detail
    });
    this.dispatchEvent(event);
  }
}
