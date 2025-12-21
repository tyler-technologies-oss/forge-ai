import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import type { AiDialogComponent } from '../ai-dialog';
import '../ai-dialog';

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
 * @slot - Default slot for chatbot component
 *
 * @fires forge-ai-floating-chat-open - Fired when the chat is opened
 * @fires forge-ai-floating-chat-close - Fired when the chat is closed
 * @fires forge-ai-floating-chat-expand - Fired when the chat is expanded
 * @fires forge-ai-floating-chat-collapse - Fired when the chat is collapsed
 *
 * @description A form factor component that positions a slotted chatbot in a floating dialog.
 * Manages positioning and expand/minimize state while delegating chat functionality to the slotted chatbot.
 * All chatbot events bubble through unchanged.
 */
@customElement(AiFloatingChatComponentTagName)
export class AiFloatingChatComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean })
  public open = false;

  @property({ type: Boolean })
  public expanded = false;

  @state()
  private _userExpanded = false;

  #dialogRef: Ref<AiDialogComponent> = createRef();

  public override render(): TemplateResult {
    return html`
      <forge-ai-dialog
        ${ref(this.#dialogRef)}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${this.#handleFullscreenChange}
        @forge-ai-dialog-close=${this.#handleDialogClose}>
        <slot
          @forge-ai-chatbot-expand=${this.#handleChatbotExpand}
          @forge-ai-chatbot-minimize=${this.#handleChatbotMinimize}></slot>
      </forge-ai-dialog>
    `;
  }

  public show(): void {
    this.open = true;
    this.#dispatchEvent('forge-ai-floating-chat-open');
  }

  public close(): void {
    if (this.expanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
    this.open = false;
    this.#dispatchEvent('forge-ai-floating-chat-close');
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
      this._userExpanded = true;
      this.#dispatchEvent('forge-ai-floating-chat-expand');
    }
  }

  public collapse(): void {
    if (this.expanded) {
      this.expanded = false;
      this._userExpanded = false;
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
  }

  #handleFullscreenChange(event: CustomEvent<{ isFullscreen: boolean }>): void {
    const { isFullscreen } = event.detail;
    if (isFullscreen && !this.expanded) {
      this.expanded = true;
      this.#dispatchEvent('forge-ai-floating-chat-expand');
    } else if (!isFullscreen && this.expanded && !this._userExpanded) {
      this.expanded = false;
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
  }

  #handleChatbotExpand(): void {
    this.expanded = !this.expanded;
    this._userExpanded = this.expanded;
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
