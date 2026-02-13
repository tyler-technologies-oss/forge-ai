import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { Thread } from '../ai-chatbot/types';

import styles from './ai-chat-history.scss?inline';
import './ai-chat-history-item.js';

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

  #handleThreadRename(evt: CustomEvent<{ threadId: string; newTitle: string }>): void {
    const { threadId, newTitle } = evt.detail;
    const threadIndex = this.threads.findIndex(thread => thread.id === threadId);

    if (threadIndex !== -1) {
      this.threads = [
        ...this.threads.slice(0, threadIndex),
        { ...this.threads[threadIndex], title: newTitle },
        ...this.threads.slice(threadIndex + 1)
      ];
    }
  }

  get #threadList(): TemplateResult {
    return html`
      <span class="title">Your chats</span>
      <ul class="forge-list forge-list--navlist">
        ${this.threads.map(
          thread =>
            html`<forge-ai-chat-history-item
              .thread=${thread}
              @thread-rename=${this.#handleThreadRename}></forge-ai-chat-history-item>`
        )}
      </ul>
    `;
  }

  readonly #emptyState: TemplateResult = html`<div class="empty-state">
    <div class="forge-avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
      </svg>
    </div>
    No chat history
  </div>`;

  public override render(): TemplateResult {
    return html`
      <div class="chat-history-container">
        ${when(
          this.threads.length > 0,
          () => this.#threadList,
          () => this.#emptyState
        )}
      </div>
    `;
  }
}
