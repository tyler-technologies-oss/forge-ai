import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { DeleteThreadController } from '../utils/delete-thread-controller';
import { InfiniteScrollController } from '../utils/infinite-scroll-controller';
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

  /**
   * Total number of threads available. When set to a positive number and fewer threads
   * are loaded than the total, infinite scroll is enabled. Leave at 0 (default) to disable
   * infinite scroll entirely. Useful when all data is loaded upfront.
   */
  @property({ type: Number, attribute: 'total-chats' })
  public totalChats = 0;

  @property({ type: String })
  public placeholder = 'Search chats...';

  @property({ type: String, attribute: 'empty-message' })
  public emptyMessage = 'No chats found';

  @property({ type: Boolean, attribute: 'show-thread-rename' })
  public showThreadRename = false;

  @property({ type: Boolean, attribute: 'show-thread-delete' })
  public showThreadDelete = false;

  @query('.results-container')
  private _resultsContainer!: HTMLElement;

  @state() private _searchQuery = '';
  @state() private _isSearching = false;
  @state() private _searchResults: Thread[] = [];
  @state() private _editingThreadId: string | null = null;
  @state() private _hiddenThreadIds: Set<string> = new Set();

  private _searchTimeout?: number;

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

  #infiniteScrollController = new InfiniteScrollController(this, {
    onLoadMore: () => this.#loadMore()
  });

  get #shouldEnablePagination(): boolean {
    if (this.totalChats <= 0) {
      return false;
    }
    const displayedCount = this.#displayedThreads.length;
    return displayedCount < this.totalChats;
  }

  public override firstUpdated(): void {
    if (this.#shouldEnablePagination && this._resultsContainer) {
      this.#infiniteScrollController.attach(this._resultsContainer);
    }
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('threads') || changedProperties.has('totalChats')) {
      this.#infiniteScrollController.reset();

      if (this.#shouldEnablePagination) {
        if (this._resultsContainer) {
          this.#infiniteScrollController.attach(this._resultsContainer);
        }
      } else {
        this.#infiniteScrollController.detach();
      }
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    clearTimeout(this._searchTimeout);
  }

  #handleSearchInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    this._searchQuery = input.value;

    clearTimeout(this._searchTimeout);
    this._searchTimeout = window.setTimeout(() => {
      this.#performSearch();
    }, 300);
  }

  #performSearch(): void {
    const searchQuery = this._searchQuery.trim();
    this.#infiniteScrollController.reset();

    const searchEvent = new CustomEvent<ForgeAiThreadsSearchQueryEventData>('forge-ai-threads-search-query', {
      detail: {
        query: searchQuery,
        setResults: (results: Thread[]) => {
          this._searchResults = results;
          this._isSearching = false;
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
      this._searchResults = this.threads.filter(thread =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.#infiniteScrollController.setHasMore(false);
    }
  }

  #loadMore(): void {
    const loadMoreEvent = new CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>('forge-ai-threads-search-load-more', {
      detail: {
        query: this._searchQuery,
        appendResults: (results: Thread[]) => {
          if (results.length === 0) {
            this.#infiniteScrollController.setHasMore(false);
          } else {
            if (this._searchQuery) {
              this._searchResults = [...this._searchResults, ...results];
            } else {
              this.threads = [...this.threads, ...results];
            }
          }
          this.#infiniteScrollController.setLoadingState(false);
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
    this.#infiniteScrollController.reset();
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

  get #resultsList(): TemplateResult {
    const displayThreads = this.#displayedThreads;

    return html`
      <div class="results-container">
        ${when(
          displayThreads.length === 0,
          () => html`
            <div class="empty-state">
              <p>${this.emptyMessage}</p>
            </div>
          `,
          () => html`
            <ul class="forge-list forge-list--dense forge-list--navlist" role="list">
              ${displayThreads.map(thread => this.#renderThreadItem(thread))}
            </ul>
            ${when(
              this.#infiniteScrollController.isLoadingMore,
              () => html`
                <div class="loading-more-indicator">
                  <forge-ai-spinner></forge-ai-spinner>
                </div>
              `
            )}
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
}
