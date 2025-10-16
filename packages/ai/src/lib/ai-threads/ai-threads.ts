import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../ai-chat-interface/ai-chat-interface';

import styles from './ai-threads.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-threads': AiThreadsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-threads-select': CustomEvent<AiThreadsSelectEventData>;
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

export interface AiThreadsSelectEventData {
  id: string;
  title: string;
}

export const AiThreadsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-threads';

/**
 * @tag forge-ai-threads
 *
 * @event {CustomEvent<AiThreadsSelectEventData>} forge-ai-threads-select - Fired when a thread is selected.
 * @event {CustomEvent} forge-ai-threads-new-chat - Fired when the new chat button is clicked.
 * @event {CustomEvent} forge-ai-threads-clear-history - Fired when the clear history button is clicked.
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

    const event = new CustomEvent<AiThreadsSelectEventData>('forge-ai-threads-select', {
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

    // Focus the input in the chat interface after a brief delay to ensure rendering is complete
    requestAnimationFrame(() => {
      this._focusChatInput();
    });
  }

  private _focusChatInput(): void {
    // Query for the input element in the ai-chat-interface component
    const chatInterface = this.shadowRoot?.querySelector('forge-ai-chat-interface');
    if (chatInterface) {
      // Look for the input within the ai-prompt component
      const input = chatInterface.shadowRoot
        ?.querySelector('forge-ai-prompt')
        ?.shadowRoot?.querySelector('#chat-input') as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }
  }

  private _handlePromptSend(event: CustomEvent): void {
    // Create a new thread from the prompt data
    const newThread: Thread = {
      id: this._generateThreadId(),
      title: this._generateThreadTitle(event.detail.value),
      time: event.detail.time,
      date: event.detail.date
    };

    // Add the new thread to the beginning of the threads array
    this.threads = [newThread, ...this.threads];

    // Select the newly created thread
    this._selectedThreadId = newThread.id;
  }

  private _generateThreadId(): string {
    return `thread-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  private _generateThreadTitle(message: string): string {
    // Use the first 50 characters of the message as the thread title
    const maxLength = 50;
    const trimmed = message.trim();

    if (trimmed.length <= maxLength) {
      return trimmed;
    }

    // Find the last complete word within the limit
    const truncated = trimmed.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + '...';
    }

    return truncated + '...';
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

  readonly #chatInterface = html`
    <forge-ai-chat-interface @forge-ai-prompt-send=${this._handlePromptSend}></forge-ai-chat-interface>
  `;

  public override render(): TemplateResult {
    return html`
      <div class="threads-container">
        <div class="left">${this.#drawer}</div>
        <div class="right">${this.#chatInterface}</div>
      </div>
    `;
  }
}
