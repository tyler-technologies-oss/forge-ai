import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AiModalComponent } from '../ai-modal';
import '../ai-modal';
import '../ai-chat-interface';
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
 * @slot - Default slot for messages (ai-user-message, ai-response-message components)
 * @slot suggestions - Slot for AI suggestions component
 * @slot prompt - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 *
 * @event {CustomEvent<void>} forge-ai-embedded-chat-expand - Fired when the chat is expanded to modal view
 * @event {CustomEvent<void>} forge-ai-embedded-chat-collapse - Fired when the chat is collapsed from modal view
 *
 * @description A form factor component that embeds ai-chat-interface within ai-gradient-container
 * for inline page usage with optional modal expansion functionality.
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
      <forge-ai-chat-interface
        show-expand-button
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

  #handleHeaderExpand(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.#dispatchEvent('forge-ai-embedded-chat-expand');
    } else {
      this.#dispatchEvent('forge-ai-embedded-chat-collapse');
    }
  }

  #handleHeaderMinimize(): void {
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
