import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Thread } from '../ai-chatbot/types';

import styles from './ai-chat-history.scss?inline';
import '../ai-dropdown-menu/ai-dropdown-menu.js';
import '../ai-dropdown-menu/ai-dropdown-menu-item.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-history': AiChatHistoryComponent;
  }
}

export const AiChatHistoryComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-history';

/**
 * @tag forge-ai-chat-history
 *
 * @description A component that displays a list of chat history items
 */
@customElement(AiChatHistoryComponentTagName)
export class AiChatHistoryComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of threads to display */
  @property({ type: Array })
  public threads: Thread[] = [];

  get #threadList(): TemplateResult {
    return html`
      <span class="title">Your chats</span>
      <ul class="forge-list forge-list--navlist">
        ${this.threads.map(
          thread => html`
            <li class="forge-list-item custom-list-item">
              <button>
                <span class="thread-title">${thread.title}</span>
              </button>
              <div class="forge-list-item__end more-details-button">
                <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" popover-placement="bottom-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    slot="trigger-content"
                    class="trigger-icon">
                    <path
                      d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2" />
                  </svg>

                  <forge-ai-dropdown-menu-item value="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
                    </svg>
                    <span>Delete chat</span>
                  </forge-ai-dropdown-menu-item>

                  <forge-ai-dropdown-menu-item value="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                      <path
                        d="m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm6.65.85c.39-.39.39-1.04 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" />
                    </svg>
                    <span>Rename</span>
                  </forge-ai-dropdown-menu-item>
                </forge-ai-dropdown-menu>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }

  public override render(): TemplateResult {
    return html`<div class="chat-history-container">${this.#threadList}</div>`;
  }
}
