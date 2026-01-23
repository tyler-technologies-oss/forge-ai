import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
    'forge-ai-user-message-edit': CustomEvent<ForgeAiUserMessageEditEventData>;
  }
}

export interface ForgeAiUserMessageCopyEventData {
  messageId: string;
}

export interface ForgeAiUserMessageResendEventData {
  messageId: string;
}

export interface ForgeAiUserMessageEditEventData {
  messageId: string;
  content: string;
}

export const AiUserMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-user-message';

/**
 * @tag forge-ai-user-message
 *
 * @event {CustomEvent<ForgeAiUserMessageCopyEventData>} forge-ai-user-message-copy - Fired when user clicks copy button
 * @event {CustomEvent<ForgeAiUserMessageResendEventData>} forge-ai-user-message-resend - Fired when user clicks resend button
 * @event {CustomEvent<ForgeAiUserMessageEditEventData>} forge-ai-user-message-edit - Fired when user saves edited message
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

  @property({ attribute: false })
  public content?: string;

  @state()
  private _editing = false;

  @state()
  private _editContent = '';

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

  readonly #editIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
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

  get #isSaveDisabled(): boolean {
    const trimmed = this._editContent.trim();
    return !trimmed || trimmed === this.content?.trim();
  }

  get #editContainer(): TemplateResult {
    return html`
      <div class="edit-container">
        <textarea class="edit-textarea" .value=${this._editContent} @input=${this.#handleEditInput}></textarea>
        <div class="edit-footer">
          <button class="forge-button forge-button--outlined" @click=${this.#handleCancel}>Cancel</button>
          <button
            class="forge-button forge-button--raised"
            ?disabled=${this.#isSaveDisabled}
            @click=${this.#handleSave}>
            Save
          </button>
        </div>
      </div>
    `;
  }

  get #toolbar(): TemplateResult | typeof nothing {
    if (!this.messageId || this._editing) {
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

            <button
              id="edit-btn"
              aria-label="Edit message"
              class="forge-icon-button forge-icon-button--small"
              @click=${this.#handleEditClick}>
              ${this.#editIcon}
            </button>
            <forge-ai-tooltip for="edit-btn" placement="bottom">Edit</forge-ai-tooltip>
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

  #handleEditClick(): void {
    this._editContent = this.content ?? '';
    this._editing = true;
  }

  #handleEditInput(evt: Event): void {
    this._editContent = (evt.target as HTMLTextAreaElement).value;
  }

  #handleCancel(): void {
    this._editing = false;
    this._editContent = '';
  }

  #handleSave(): void {
    if (this.#isSaveDisabled) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('forge-ai-user-message-edit', {
        detail: { messageId: this.messageId, content: this._editContent.trim() },
        bubbles: true,
        composed: true
      })
    );

    this._editing = false;
    this._editContent = '';
  }

  public override render(): TemplateResult {
    return html`
      <div class="grid-container">${this._editing ? this.#editContainer : this.#messageContainer} ${this.#toolbar}</div>
    `;
  }
}
