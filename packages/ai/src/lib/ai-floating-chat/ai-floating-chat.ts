import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import type { AiDialogComponent } from '../ai-dialog';
import '../ai-dialog';
import '../ai-chat-interface';

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
 * @slot - Default slot for messages (ai-user-message, ai-response-message components)
 * @slot suggestions - Slot for AI suggestions component
 * @slot prompt - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 *
 * @fires forge-ai-floating-chat-open - Fired when the chat is opened
 * @fires forge-ai-floating-chat-close - Fired when the chat is closed
 * @fires forge-ai-floating-chat-expand - Fired when the chat is expanded
 * @fires forge-ai-floating-chat-collapse - Fired when the chat is collapsed
 *
 * @description A structured form factor component that combines ai-dialog and ai-chat-interface
 * with automatic event handling and responsive behavior delegation to the underlying ai-dialog.
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
        <forge-ai-chat-interface
          ?show-expand-button=${!this._isFullscreen}
          show-minimize-button
          minimize-icon="default"
          ?expanded=${this.expanded}
          @forge-ai-chat-header-expand=${this.#handleHeaderExpand}
          @forge-ai-chat-header-minimize=${this.#handleHeaderMinimize}>
          <slot></slot>
          <slot name="suggestions" slot="suggestions"></slot>
          <slot name="prompt" slot="prompt"></slot>
        </forge-ai-chat-interface>
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

  #handleHeaderExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-floating-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-floating-chat-collapse');
    }
  }

  #handleHeaderMinimize(): void {
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
