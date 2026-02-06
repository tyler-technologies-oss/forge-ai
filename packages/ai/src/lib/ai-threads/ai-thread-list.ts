import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Thread } from './ai-threads';

import styles from './ai-thread-list.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thread-list': AiThreadListComponent;
  }
}

export const AiThreadListComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thread-list';

/**
 * @tag forge-ai-thread-list
 *
 * @description A component that displays a list of chat history items
 */
@customElement(AiThreadListComponentTagName)
export class AiThreadListComponent extends LitElement {
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
            <li class="forge-list-item">
              <button>
                <span class="thread-title">${thread.title}</span>
              </button>
              <div class="forge-list-item__end more-details-button">
                <button aria-label="View more thread details" class=" forge-icon-button forge-icon-button--small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2" />
                  </svg>
                </button>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }

  public override render(): TemplateResult {
    return html`<div class="thread-list-container">${this.#threadList}</div>`;
  }
}
