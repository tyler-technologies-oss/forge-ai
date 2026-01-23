import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import '../core/tooltip/tooltip.js';

import styles from './ai-user-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-user-message': AiUserMessageComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-user-message-copy': CustomEvent<ForgeAiUserMessageCopyEventData>;
    'forge-ai-user-message-resend': CustomEvent<ForgeAiUserMessageResendEventData>;
  }
}

export interface ForgeAiUserMessageCopyEventData {
  messageId: string;
}

export interface ForgeAiUserMessageResendEventData {
  messageId: string;
}

export const AiUserMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-user-message';

/**
 * @tag forge-ai-user-message
 *
 * @event {CustomEvent<ForgeAiUserMessageCopyEventData>} forge-ai-user-message-copy - Fired when user clicks copy button
 * @event {CustomEvent<ForgeAiUserMessageResendEventData>} forge-ai-user-message-resend - Fired when user clicks resend button
 */
@customElement(AiUserMessageComponentTagName)
export class AiUserMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public timestamp?: number;

  @property({ attribute: 'message-id' })
  public messageId?: string;

  @property({ type: Boolean })
  public streaming = false;

  readonly #refreshIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" />
    </svg>
  `;

  readonly #copyIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z" />
    </svg>
  `;

  readonly #messageContainer = html`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `;

  get #formattedTime(): string {
    if (!this.timestamp) {
      return '';
    }
    return new Date(this.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  get #formattedFullDate(): string {
    if (!this.timestamp) {
      return '';
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(this.timestamp);
  }

  get #toolbar(): TemplateResult | typeof nothing {
    if (!this.messageId) {
      return nothing;
    }

    return html`
      <div class="toolbar-container">
        <span id="timestamp" class="timestamp">${this.#formattedTime}</span>
        <forge-ai-tooltip for="timestamp" placement="bottom">${this.#formattedFullDate}</forge-ai-tooltip>

        ${when(
          !this.streaming,
          () => html`
            <button
              id="resend-btn"
              aria-label="Resend message"
              class="forge-icon-button forge-icon-button--small"
              @click=${this.#handleResend}>
              ${this.#refreshIcon}
            </button>
            <forge-ai-tooltip for="resend-btn" placement="bottom">Resend</forge-ai-tooltip>
          `
        )}

        <button
          id="copy-btn"
          aria-label="Copy message"
          class="forge-icon-button forge-icon-button--small"
          @click=${this.#handleCopy}>
          ${this.#copyIcon}
        </button>
        <forge-ai-tooltip for="copy-btn" placement="bottom">Copy</forge-ai-tooltip>
      </div>
    `;
  }

  #handleCopy(): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-user-message-copy', {
        detail: { messageId: this.messageId },
        bubbles: true,
        composed: true
      })
    );
  }

  #handleResend(): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-user-message-resend', {
        detail: { messageId: this.messageId },
        bubbles: true,
        composed: true
      })
    );
  }

  public override render(): TemplateResult {
    return html` <div class="grid-container">${this.#messageContainer} ${this.#toolbar}</div> `;
  }
}
