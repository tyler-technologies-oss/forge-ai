import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { DeleteThreadController } from '../utils/delete-thread-controller';
import '../ai-thread-actions-menu';
import '../ai-edit-thread';
import '../ai-spinner';
import '../ai-modal/ai-modal';

import type { Thread } from '../ai-threads';

import styles from './ai-threads-search.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-threads-search': AiThreadsSearchComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-threads-search-query': CustomEvent<ForgeAiThreadsSearchQueryEventData>;
    'forge-ai-threads-search-load-more': CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>;
    'forge-ai-threads-search-select': CustomEvent<ForgeAiThreadsSearchSelectEventData>;
    'forge-ai-threads-search-new-chat': CustomEvent;
    'forge-ai-threads-search-rename': CustomEvent<ForgeAiThreadsSearchRenameEventData>;
    'forge-ai-threads-search-delete': CustomEvent<ForgeAiThreadsSearchDeleteEventData>;
  }
}

export interface ForgeAiThreadsSearchQueryEventData {
  query: string;
  setResults: (results: Thread[]) => void;
}

export interface ForgeAiThreadsSearchLoadMoreEventData {
  query: string;
  appendResults: (results: Thread[]) => void;
}

export interface ForgeAiThreadsSearchSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiThreadsSearchRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiThreadsSearchDeleteEventData {
  id: string;
  thread: Thread;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export const AiThreadsSearchComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-threads-search';

/**
 * @tag forge-ai-threads-search
 *
 * @event {CustomEvent<ForgeAiThreadsSearchQueryEventData>} forge-ai-threads-search-query - Fired when search query changes (debounced).
 * @event {CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>} forge-ai-threads-search-load-more - Fired when user scrolls near bottom for pagination.
 * @event {CustomEvent<ForgeAiThreadsSearchSelectEventData>} forge-ai-threads-search-select - Fired when a thread is selected.
 * @event {CustomEvent} forge-ai-threads-search-new-chat - Fired when new chat button clicked.
 * @event {CustomEvent<ForgeAiThreadsSearchRenameEventData>} forge-ai-threads-search-rename - Fired when thread renamed. Cancelable - if prevented, call onSuccess() to commit or onError() to revert.
 * @event {CustomEvent<ForgeAiThreadsSearchDeleteEventData>} forge-ai-threads-search-delete - Fired when thread delete confirmed. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert.
 *
 * @description A standalone search component for conversations/threads. Can be slotted into forge-ai-threads
 * or used independently. Supports both local and external/async search patterns via event callbacks.
 * Optional rename and delete actions can be enabled via properties.
 */
@customElement(AiThreadsSearchComponentTagName)
export class AiThreadsSearchComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Array })
  public threads: Thread[] = [];

  @property({ type: String })
  public placeholder = 'Search chats...';

  @property({ type: String, attribute: 'empty-message' })
  public emptyMessage = 'No chats found';

  @property({ type: Boolean, attribute: 'show-thread-rename' })
  public showThreadRename = false;

  @property({ type: Boolean, attribute: 'show-thread-delete' })
  public showThreadDelete = false;

  @state() private _searchQuery = '';
  @state() private _isSearching = false;
  @state() private _searchResults: Thread[] = [];
  @state() private _isLoadingMore = false;
  @state() private _hasMoreResults = true;
  @state() private _editingThreadId: string | null = null;
  @state() private _hiddenThreadIds: Set<string> = new Set();

  private _searchTimeout?: number;
  private _scrollTimeout?: number;

  #deleteThreadController = new DeleteThreadController(this, {
    onConfirm: thread => {
      const onSuccess = (): void => {
        this._hiddenThreadIds.add(thread.id);
        this.requestUpdate();
      };

      const onError = (error?: string): void => {
        this._hiddenThreadIds.delete(thread.id);
        this.requestUpdate();
        if (error) {
          console.error('Delete failed:', error);
        }
      };

      const event = new CustomEvent<ForgeAiThreadsSearchDeleteEventData>('forge-ai-threads-search-delete', {
        detail: { id: thread.id, thread, onSuccess, onError },
        bubbles: true,
        composed: true,
        cancelable: true
      });

      const dispatched = this.dispatchEvent(event);
      if (dispatched) {
        this._hiddenThreadIds.add(thread.id);
        this.requestUpdate();
      }
    }
  });

  #handleSearchInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    this._searchQuery = input.value;

    clearTimeout(this._searchTimeout);
    this._searchTimeout = window.setTimeout(() => {
      this.#performSearch();
    }, 300);
  }

  #performSearch(): void {
    const query = this._searchQuery.trim();

    const searchEvent = new CustomEvent<ForgeAiThreadsSearchQueryEventData>('forge-ai-threads-search-query', {
      detail: {
        query,
        setResults: (results: Thread[]) => {
          this._searchResults = results;
          this._isSearching = false;
          this._hasMoreResults = true;
        }
      },
      bubbles: true,
      composed: true,
      cancelable: true
    });

    this.dispatchEvent(searchEvent);

    if (searchEvent.defaultPrevented) {
      this._isSearching = true;
    } else {
      this._searchResults = this.threads.filter(thread => thread.title.toLowerCase().includes(query.toLowerCase()));
      this._hasMoreResults = false;
    }
  }

  #handleScroll(e: Event): void {
    clearTimeout(this._scrollTimeout);
    this._scrollTimeout = window.setTimeout(() => {
      const container = e.target as HTMLElement;
      const scrollThreshold = 100;
      const nearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < scrollThreshold;

      if (nearBottom && this._hasMoreResults && !this._isLoadingMore && this._searchQuery) {
        this.#loadMore();
      }
    }, 150);
  }

  #loadMore(): void {
    this._isLoadingMore = true;

    const loadMoreEvent = new CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>('forge-ai-threads-search-load-more', {
      detail: {
        query: this._searchQuery,
        appendResults: (results: Thread[]) => {
          if (results.length === 0) {
            this._hasMoreResults = false;
          } else {
            this._searchResults = [...this._searchResults, ...results];
          }
          this._isLoadingMore = false;
        }
      },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(loadMoreEvent);
  }

  #handleThreadSelect(thread: Thread): void {
    const event = new CustomEvent<ForgeAiThreadsSearchSelectEventData>('forge-ai-threads-search-select', {
      detail: { id: thread.id, title: thread.title },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleNewChatClick(): void {
    const event = new CustomEvent('forge-ai-threads-search-new-chat', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleMenuRename(e: CustomEvent): void {
    this._editingThreadId = e.detail.id;
  }

  #handleMenuDeleteClick(e: CustomEvent): void {
    const { id } = e.detail;
    const thread = this.#displayedThreads.find(t => t.id === id);
    if (!thread) {
      return;
    }
    this.#deleteThreadController.show(thread);
  }

  #handleEditSave(e: CustomEvent): void {
    const { id, oldTitle, newTitle } = e.detail;
    const thread = this.#displayedThreads.find(t => t.id === id);
    if (!thread) {
      return;
    }

    const onSuccess = (): void => {
      thread.title = newTitle;
      this.requestUpdate();
    };

    const onError = (error?: string): void => {
      thread.title = oldTitle;
      this.requestUpdate();
      if (error) {
        console.error('Rename failed:', error);
      }
    };

    const event = new CustomEvent<ForgeAiThreadsSearchRenameEventData>('forge-ai-threads-search-rename', {
      detail: { id, oldTitle, newTitle, onSuccess, onError },
      bubbles: true,
      composed: true,
      cancelable: true
    });

    const dispatched = this.dispatchEvent(event);
    if (dispatched) {
      thread.title = newTitle;
      this.requestUpdate();
    }

    this._editingThreadId = null;
  }

  #handleEditCancel(): void {
    this._editingThreadId = null;
  }

  #formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears >= 1) {
      return `${diffYears}y ago`;
    } else if (diffMonths >= 1) {
      return `${diffMonths}mo ago`;
    } else if (diffWeeks >= 1) {
      return `${diffWeeks}w ago`;
    } else if (diffDays >= 1) {
      return `${diffDays}d ago`;
    } else if (diffHours >= 1) {
      return `${diffHours}h ago`;
    } else if (diffMinutes >= 1) {
      return `${diffMinutes}m ago`;
    } else {
      return 'Just now';
    }
  }

  #handleClearSearch(): void {
    this._searchQuery = '';
    this._searchResults = [];
    this._isSearching = false;
    this._hasMoreResults = true;
  }

  get #displayedThreads(): Thread[] {
    const threads = this._searchQuery ? this._searchResults : this.threads;
    return threads.filter(thread => !this._hiddenThreadIds.has(thread.id));
  }

  get #header(): TemplateResult {
    return html`
      <div class="header">
        <div class="header-title">
          <span class="title">All chats</span>
        </div>
        <button class="forge-button new-chat-button" @click=${this.#handleNewChatClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          New chat
        </button>
      </div>
    `;
  }

  get #searchField(): TemplateResult {
    return html`
      <div class="forge-field forge-field--rounded forge-field--small search-field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <input
          type="text"
          autocomplete="off"
          .value=${this._searchQuery}
          placeholder=${this.placeholder}
          @input=${this.#handleSearchInput} />
        ${when(this._isSearching, () => html`<forge-ai-spinner size="small"></forge-ai-spinner>`)}
        ${when(
          this._searchQuery.length,
          () => html`
            <button class="forge-icon-button forge-icon-button--small" type="button" @click=${this.#handleClearSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          `
        )}
      </div>
    `;
  }

  #renderThreadItem(thread: Thread): TemplateResult {
    const isEditing = this._editingThreadId === thread.id;

    return html`
      <li class="forge-list-item" role="listitem">
        ${when(
          isEditing,
          () => html`
            <forge-ai-edit-thread
              .thread=${thread}
              .value=${thread.title}
              @forge-ai-edit-thread-save=${this.#handleEditSave}
              @forge-ai-edit-thread-cancel=${this.#handleEditCancel}>
            </forge-ai-edit-thread>
          `,
          () => html`
            <button type="button" @click=${() => this.#handleThreadSelect(thread)}>${thread.title}</button>
            <span class="thread-time">${this.#formatRelativeTime(thread.createdAt)}</span>
            ${when(
              this.showThreadRename || this.showThreadDelete,
              () => html`
                <div class="thread-item-actions">
                  <forge-ai-thread-actions-menu
                    .thread=${thread}
                    ?show-rename=${this.showThreadRename}
                    ?show-delete=${this.showThreadDelete}
                    @forge-ai-thread-actions-menu-rename=${this.#handleMenuRename}
                    @forge-ai-thread-actions-menu-delete-click=${this.#handleMenuDeleteClick}>
                  </forge-ai-thread-actions-menu>
                </div>
              `
            )}
          `
        )}
      </li>
    `;
  }

  get #resultsList(): TemplateResult | typeof nothing {
    const displayThreads = this.#displayedThreads;

    if (displayThreads.length === 0) {
      return html`
        <div class="empty-state">
          <p>${this.emptyMessage}</p>
        </div>
      `;
    }

    return html`
      <div class="results-container" @scroll=${this.#handleScroll}>
        <ul class="forge-list forge-list--dense forge-list--navlist" role="list">
          ${displayThreads.map(thread => this.#renderThreadItem(thread))}
        </ul>
        ${when(
          this._isLoadingMore,
          () => html`
            <div class="loading-more-indicator">
              <forge-ai-spinner></forge-ai-spinner>
            </div>
          `
        )}
      </div>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="threads-search-container">${this.#header} ${this.#searchField} ${this.#resultsList}</div>
      ${this.#deleteThreadController.template}
    `;
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    clearTimeout(this._searchTimeout);
    clearTimeout(this._scrollTimeout);
  }
}
