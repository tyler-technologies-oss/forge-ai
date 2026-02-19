import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { Thread } from '../ai-chatbot/types';

import styles from './ai-chat-history-item.scss?inline';
import '../ai-dropdown-menu/ai-dropdown-menu.js';
import '../ai-dropdown-menu/ai-dropdown-menu-item.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-history-item': AiChatHistoryItemComponent;
  }
}

export const AiChatHistoryItemComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-history-item';

/**
 * @tag forge-ai-chat-history-item
 *
 * @description A component that displays a single chat history item
 *
 * @event {CustomEvent<{threadId: string, newTitle: string}>} thread-rename - Emitted when a thread is renamed
 * @event {CustomEvent<{threadId: string}>} thread-delete - Emitted when a thread delete is requested
 */
@customElement(AiChatHistoryItemComponentTagName)
export class AiChatHistoryItemComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Thread data to display */
  @property({ type: Object })
  public thread!: Thread;

  @state()
  private _isEditing = false;

  @query('.thread-title-input')
  private _inputElement?: HTMLInputElement;

  #handleRenameClick(): void {
    this._isEditing = true;
    requestAnimationFrame(() => {
      if (this._inputElement) {
        this._inputElement?.focus();
        this._inputElement?.select();
        this._inputElement.scrollLeft = 0;
      }
    });
  }

  #handleDeleteClick(): void {
    this.dispatchEvent(
      new CustomEvent('thread-delete', {
        detail: {
          threadId: this.thread.id
        },
        bubbles: true,
        composed: true
      })
    );
  }

  #handleInputBlur(): void {
    this._isEditing = false;
  }

  #handleInputKeyDown(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      const input = evt.target as HTMLInputElement;
      const newTitle = input.value.trim();

      if (newTitle && newTitle !== this.thread.title) {
        this.dispatchEvent(
          new CustomEvent('thread-rename', {
            detail: {
              threadId: this.thread.id,
              newTitle
            },
            bubbles: true,
            composed: true
          })
        );
      }

      this._isEditing = false;
    } else if (evt.key === 'Escape') {
      evt.stopPropagation();
      this._isEditing = false;
    }
  }

  get #chatHistoryItem(): TemplateResult {
    return html`
      <li class="forge-list-item custom-list-item">
        <button>${this.thread.title}</button>
        <div class="forge-list-item__end more-details-button">
          <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" popover-placement="bottom-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="trigger-content" class="trigger-icon">
              <path
                d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2" />
            </svg>

            <forge-ai-dropdown-menu-item value="delete" @click=${this.#handleDeleteClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
              </svg>
              <span>Delete chat</span>
            </forge-ai-dropdown-menu-item>

            <forge-ai-dropdown-menu-item value="rename" @click=${this.#handleRenameClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                <path
                  d="m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm6.65.85c.39-.39.39-1.04 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" />
              </svg>
              <span>Rename</span>
            </forge-ai-dropdown-menu-item>
          </forge-ai-dropdown-menu>
        </div>
      </li>
    `;
  }

  get #editChatHistoryItem(): TemplateResult {
    return html`
      <li class="forge-list-item edit-list-item">
        <div class="rename-container">
          <div class="forge-field forge-field--extra-small">
            <input
              type="text"
              class="thread-title-input"
              id="edit-thread-title-${this.thread.id}"
              .value=${this.thread.title}
              @blur=${this.#handleInputBlur}
              @keydown=${this.#handleInputKeyDown} />
          </div>
        </div>
      </li>
    `;
  }

  public override render(): TemplateResult {
    return html`
      ${when(
        this._isEditing,
        () => html` ${this.#editChatHistoryItem} `,
        () => html` ${this.#chatHistoryItem} `
      )}
    `;
  }
}
