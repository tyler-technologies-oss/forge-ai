import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Thread } from './ai-threads';

import styles from './ai-thread-list.scss?inline';
import '../ai-dropdown-menu/ai-dropdown-menu.js';
import '../ai-dropdown-menu/ai-dropdown-menu-item.js';

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
                    <forge-icon name="sparkles" slot="start"></forge-icon>
                  </forge-ai-dropdown-menu-item>

                  <forge-ai-dropdown-menu-item value="new">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                      <path
                        d="M22 8v5.81c-.88-.51-1.9-.81-3-.81-3.31 0-6 2.69-6 6 0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-6 10h2v4h2v-4h2l-3-3z" />
                    </svg>
                    <span>Move to project</span>
                    <forge-ai-dropdown-menu selection-mode="none">
                      <forge-ai-dropdown-menu-item value="file">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z" />
                        </svg>
                        <span>New project</span>
                      </forge-ai-dropdown-menu-item>
                      <forge-ai-dropdown-menu-item-group>
                        <span slot="label">Your projects</span>
                        <forge-ai-dropdown-menu-item value="claude-sonnet-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                            <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z" />
                          </svg>
                          <span>Project one</span>
                        </forge-ai-dropdown-menu-item>
                        <forge-ai-dropdown-menu-item value="claude-sonnet-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="start">
                            <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z" />
                          </svg>
                          <span>Project two</span>
                        </forge-ai-dropdown-menu-item>
                      </forge-ai-dropdown-menu-item-group>
                    </forge-ai-dropdown-menu>
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
    return html`<div class="thread-list-container">${this.#threadList}</div>`;
  }
}
