import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import type { AiChatbotComponent } from '../ai-chatbot';

import styles from './ai-threads.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-threads': AiThreadsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-threads-select': CustomEvent<ForgeAiThreadsSelectEventData>;
    'forge-ai-threads-new-chat': CustomEvent;
    'forge-ai-threads-clear-history': CustomEvent;
  }
}

export interface Thread {
  id: string;
  title: string;
  time: string;
  date: Date;
}

export interface ForgeAiThreadsSelectEventData {
  id: string;
  title: string;
}

export const AiThreadsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-threads';

/**
 * @tag forge-ai-threads
 *
 * @slot - Default slot for chatbot component
 *
 * @event {CustomEvent<ForgeAiThreadsSelectEventData>} forge-ai-threads-select - Fired when a thread is selected.
 * @event {CustomEvent} forge-ai-threads-new-chat - Fired when the new chat button is clicked.
 * @event {CustomEvent} forge-ai-threads-clear-history - Fired when the clear history button is clicked.
 *
 * @description A form factor component that positions a slotted chatbot alongside a thread navigation drawer.
 * Manages thread list and selection while delegating chat functionality to the slotted chatbot.
 * All chatbot events bubble through unchanged.
 */
@customElement(AiThreadsComponentTagName)
export class AiThreadsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of threads to display in the navigation list */
  @property({ type: Array })
  public threads: Thread[] = [];

  /** Current filter value for searching threads */
  @state()
  private _filterValue = '';

  /** Currently selected thread ID */
  @state()
  private _selectedThreadId: string | null = null;

  @queryAssignedElements({ selector: 'forge-ai-chatbot' })
  private _slottedChatbots!: AiChatbotComponent[];

  get #chatbot(): AiChatbotComponent | undefined {
    return this._slottedChatbots[0];
  }

  get #filteredThreads(): Thread[] {
    if (!this._filterValue.trim()) {
      return this.threads;
    }
    return this.threads.filter(thread => thread.title.toLowerCase().includes(this._filterValue.toLowerCase()));
  }

  private _handleFilterInput(event: InputEvent): void {
    this._filterValue = (event.target as HTMLInputElement).value;
  }

  private _handleThreadSelect(thread: Thread): void {
    // Update selected thread ID to trigger re-render with new selection
    this._selectedThreadId = thread.id;

    const event = new CustomEvent<ForgeAiThreadsSelectEventData>('forge-ai-threads-select', {
      detail: { id: thread.id, title: thread.title },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  private _handleNewChatClick(): void {
    const event = new CustomEvent('forge-ai-threads-new-chat', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  private _handleChatbotExpand(): void {
    if (this.#chatbot) {
      this.#chatbot.expanded = !this.#chatbot.expanded;
    }
  }

  private _handleChatbotMinimize(): void {
    if (this.#chatbot) {
      this.#chatbot.expanded = false;
    }
  }

  private _handleClearHistoryClick(): void {
    const event = new CustomEvent('forge-ai-threads-clear-history', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  readonly #searchField = html`
    <div class="forge-field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
      </svg>
      <input
        type="text"
        id="search-threads"
        placeholder="Search threads..."
        .value=${this._filterValue}
        @input=${this._handleFilterInput} />
    </div>
  `;

  get #threadList(): TemplateResult {
    return html`
      <ul class="forge-list forge-list--navlist">
        ${this.#filteredThreads.map(thread => {
          const isSelected = this._selectedThreadId === thread.id;
          return html`
            <li class="forge-list-item ${isSelected ? 'forge-list-item--selected' : ''}">
              <button @click=${() => this._handleThreadSelect(thread)}>
                <span>${thread.title}</span>
                <div class="list-item-second-line">
                  <span>${thread.date.toLocaleDateString()}</span>
                  <span>${thread.time}</span>
                </div>
              </button>
            </li>
          `;
        })}
      </ul>
    `;
  }

  get #threadActions(): TemplateResult {
    return html`
      <button class="forge-button" @click=${this._handleClearHistoryClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
        </svg>
        Clear history
      </button>
    `;
  }

  get #threadListContainer(): TemplateResult {
    return html` <div class="thread-list-container">${this.#threadList} ${this.#threadActions}</div> `;
  }

  get #newChatButton(): TemplateResult {
    return html`
      <button class="forge-button forge-button--tonal" @click=${this._handleNewChatClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </svg>
        New chat
      </button>
    `;
  }

  get #drawer(): TemplateResult {
    return html`
      <aside class="forge-drawer">
        ${this.#searchField} ${this.#threadListContainer}
        <hr class="forge-divider" />
        ${this.#newChatButton}
      </aside>
    `;
  }

  readonly #slotContent = html`
    <slot
      @forge-ai-chatbot-expand=${this._handleChatbotExpand}
      @forge-ai-chatbot-minimize=${this._handleChatbotMinimize}>
    </slot>
  `;

  public override render(): TemplateResult {
    return html`
      <div class="threads-container">
        <div class="left">${this.#drawer}</div>
        <div class="right">${this.#slotContent}</div>
      </div>
    `;
  }
}
