import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-chat-actions.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-actions': AiChatActionsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-chat-actions-new-chat': CustomEvent<void>;
  }
}

export const AiChatActionsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-actions';

/**
 * @tag forge-ai-chat-actions
 *
 * @summary Chat actions component.
 *
 * @description
 * A component for displaying chat actions.
 *
 * @event {CustomEvent<void>} forge-ai-chat-actions-new-chat - Fired when the "New chat" button is clicked
 */
@customElement(AiChatActionsComponentTagName)
export class AiChatActionsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  #handleNewChatClick(): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-chat-actions-new-chat', {
        bubbles: true,
        composed: true
      })
    );
  }

  public override render(): TemplateResult {
    return html`
      <ul class="forge-list">
        <li class="forge-list-item custom-list-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M12 3c5.5 0 10 3.58 10 8 0 .58-.08 1.14-.22 1.68-.59-.3-1.23-.52-1.9-.62.08-.34.12-.7.12-1.06 0-3.31-3.58-6-8-6s-8 2.69-8 6 3.58 6 8 6l1.09-.05L13 18l.08.95L12 19c-1.19 0-2.38-.17-3.53-.5C6.64 20 4.37 20.89 2 21c2.33-2.33 2.75-3.9 2.75-4.5A7.22 7.22 0 0 1 2 11c0-4.42 4.5-8 10-8m6 11h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
          </svg>
          <button class="action-title" @click=${this.#handleNewChatClick}>
            <span>New chat</span>
          </button>
        </li>
        <li class="forge-list-item custom-list-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M4 4h5.5a6.9 6.9 0 0 0-.46 2H4v10h6v3.08L13.08 16H18v-2.77l2 2V16a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11.5-2C18 2 20 4 20 6.5c0 .88-.25 1.7-.69 2.39l3.1 3.11L21 13.39l-3.11-3.08c-.69.44-1.51.69-2.39.69C13 11 11 9 11 6.5S13 2 15.5 2m0 2A2.5 2.5 0 0 0 13 6.5 2.5 2.5 0 0 0 15.5 9 2.5 2.5 0 0 0 18 6.5 2.5 2.5 0 0 0 15.5 4" />
          </svg>
          <button class="action-title">
            <span>Search chats</span>
          </button>
        </li>
      </ul>
    `;
  }
}
