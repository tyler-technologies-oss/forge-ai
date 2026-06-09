import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { Thread } from '../ai-threads';
import '../ai-icon/ai-icon';
import '../ai-spinner/ai-spinner';

import styles from './ai-conversations-panel.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-conversations-panel': AiConversationsPanelComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-conversations-panel-select': CustomEvent<ForgeAiConversationsPanelSelectEventData>;
    'forge-ai-conversations-panel-new-chat': CustomEvent<void>;
    'forge-ai-conversations-panel-close': CustomEvent<void>;
    'forge-ai-conversations-panel-search': CustomEvent<ForgeAiConversationsPanelSearchEventData>;
    'forge-ai-conversations-panel-load-more': CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>;
  }
}

export interface ForgeAiConversationsPanelSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiConversationsPanelSearchEventData {
  query: string;
  setResults: (results: Thread[]) => void;
}

export interface ForgeAiConversationsPanelLoadMoreEventData {
  query: string;
  appendResults: (results: Thread[]) => void;
}

export const AiConversationsPanelComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-conversations-panel';

const SCROLL_THRESHOLD = 100;
const SCROLL_DEBOUNCE_MS = 150;

/**
 * @tag forge-ai-conversations-panel
 *
 * @event {CustomEvent<ForgeAiConversationsPanelSelectEventData>} forge-ai-conversations-panel-select - Fired when a conversation thread is selected.
 * @event {CustomEvent<void>} forge-ai-conversations-panel-new-chat - Fired when the new chat list item is clicked.
 * @event {CustomEvent<void>} forge-ai-conversations-panel-close - Fired when the close button is clicked.
 * @event {CustomEvent<ForgeAiConversationsPanelSearchEventData>} forge-ai-conversations-panel-search - Fired when search query changes (debounced). Cancelable - if prevented, shows loading and waits for setResults callback.
 * @event {CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>} forge-ai-conversations-panel-load-more - Fired when scrolling near bottom in search view. Always shows loading - call appendResults([]) to signal end.
 *
 * @description Standalone conversations list panel with header, new chat action, search, and thread list.
 * Used within chatbot components for conversation history navigation.
 */
@customElement(AiConversationsPanelComponentTagName)
export class AiConversationsPanelComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Array })
  public recentThreads: Thread[] = [];

  @property({ type: String, attribute: 'selected-thread-id' })
  public selectedThreadId: string | null = null;

  @state()
  private _viewState: 'main' | 'search' = 'main';

  @state()
  private _isSearching = false;

  @state()
  private _searchResults: Thread[] = [];

  @state()
  private _searchQuery = '';

  @state()
  private _isLoadingMore = false;

  @state()
  private _hasMoreResults = true;

  #searchDebounceTimeout?: number;
  #scrollDebounceTimeout?: number;

  @query('#search-input-main')
  private _searchInputMain!: HTMLInputElement;

  @query('#search-input-search')
  private _searchInputSearch!: HTMLInputElement;

  @query('.thread-list-container')
  private _threadListContainer!: HTMLElement;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete.then(() => {
      if (this._viewState === 'main' && this.recentThreads.length) {
        this._searchInputMain?.focus();
      } else if (this._viewState === 'search') {
        this._searchInputSearch?.focus();
      }
    });
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    clearTimeout(this.#searchDebounceTimeout);
    clearTimeout(this.#scrollDebounceTimeout);
  }

  public resetToMainView(): void {
    this.#transitionToMain();
  }

  get #displayedThreads(): Thread[] {
    return this._viewState === 'search' ? this._searchResults : this.recentThreads;
  }

  #handleSearch(searchQuery: string): void {
    this._searchQuery = searchQuery;
    this._hasMoreResults = true;
    this._isLoadingMore = false;

    const setResults = (results: Thread[]): void => {
      this._searchResults = results;
      this._isSearching = false;
    };

    const event = new CustomEvent<ForgeAiConversationsPanelSearchEventData>('forge-ai-conversations-panel-search', {
      detail: { query: searchQuery, setResults },
      bubbles: true,
      composed: true,
      cancelable: true
    });

    const localFiltered = this.recentThreads.filter(thread =>
      thread.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!this.dispatchEvent(event)) {
      this._isSearching = true;
    } else {
      this._isSearching = false;
      this._searchResults = localFiltered;
    }
  }

  #handleSearchInput(event: InputEvent): void {
    const searchQuery = (event.target as HTMLInputElement).value;

    clearTimeout(this.#searchDebounceTimeout);

    if (!searchQuery.trim()) {
      this._searchQuery = '';
      this._searchResults = this.recentThreads;
      this._isSearching = false;
      return;
    }

    this.#searchDebounceTimeout = window.setTimeout(() => {
      this.#handleSearch(searchQuery);
    }, 300);
  }

  #handleScroll = (): void => {
    if (this._viewState !== 'search') {
      return;
    }

    clearTimeout(this.#scrollDebounceTimeout);
    this.#scrollDebounceTimeout = window.setTimeout(() => {
      this.#checkScrollPosition();
    }, SCROLL_DEBOUNCE_MS);
  };

  #checkScrollPosition(): void {
    if (!this._hasMoreResults || this._isLoadingMore || this._viewState !== 'search') {
      return;
    }

    const container = this._threadListContainer;
    if (!container) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    if (distanceFromBottom < SCROLL_THRESHOLD) {
      this.#triggerLoadMore();
    }
  }

  #triggerLoadMore(): void {
    if (this._isLoadingMore || !this._hasMoreResults) {
      return;
    }

    this._isLoadingMore = true;

    const appendResults = (results: Thread[]): void => {
      if (results.length === 0) {
        this._hasMoreResults = false;
      } else {
        this._searchResults = [...this._searchResults, ...results];
      }
      this._isLoadingMore = false;
    };

    const event = new CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>(
      'forge-ai-conversations-panel-load-more',
      {
        detail: { query: this._searchQuery, appendResults },
        bubbles: true,
        composed: true
      }
    );

    this.dispatchEvent(event);
  }

  #transitionToSearch(): void {
    if (this._viewState === 'search') {
      return;
    }
    this._viewState = 'search';
    this._searchQuery = '';
    this._searchResults = this.recentThreads;
    this._isSearching = false;
    this._isLoadingMore = false;
    this._hasMoreResults = true;
    this.updateComplete.then(() => this._searchInputSearch?.focus());
  }

  #transitionToMain(): void {
    if (this._viewState === 'main') {
      return;
    }
    this._viewState = 'main';
    this._searchQuery = '';
    this._searchResults = [];
    this._isSearching = false;
    this._isLoadingMore = false;
    this._hasMoreResults = true;
    clearTimeout(this.#searchDebounceTimeout);
    clearTimeout(this.#scrollDebounceTimeout);
  }

  #handleBackClick(): void {
    this.#transitionToMain();
  }

  #handleThreadSelect(thread: Thread): void {
    const event = new CustomEvent<ForgeAiConversationsPanelSelectEventData>('forge-ai-conversations-panel-select', {
      detail: { id: thread.id, title: thread.title },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleNewChatClick(): void {
    const event = new CustomEvent('forge-ai-conversations-panel-new-chat', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  #handleSearchChatsClick(): void {
    this.#transitionToSearch();
  }

  #handleCloseClick(): void {
    const event = new CustomEvent('forge-ai-conversations-panel-close', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  readonly #header = html`
    <div class="header">
      <forge-ai-icon></forge-ai-icon>
      <button
        class="close-button forge-icon-button forge-icon-button--medium"
        @click=${this.#handleCloseClick}
        aria-label="Close conversations panel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  `;

  get #headerSearch(): TemplateResult {
    return html`
      <div class="header header--search">
        <button
          class="back-button forge-icon-button forge-icon-button--medium"
          @click=${this.#handleBackClick}
          aria-label="Back to main view">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
          </svg>
        </button>
        <forge-ai-icon></forge-ai-icon>
        <div class="search-header-end">
          <button
            class="close-button forge-icon-button forge-icon-button--medium"
            @click=${this.#handleCloseClick}
            aria-label="Close conversations panel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  readonly #chatsLabel = html`<div class="chats-label">Recent chats</div>`;

  get #searchFieldSearch(): TemplateResult {
    return html`
      <div class="forge-field forge-field--small search-field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <input
          type="text"
          id="search-input-search"
          autocomplete="off"
          placeholder="Search chats..."
          .value=${this._searchQuery}
          @input=${this.#handleSearchInput} />
        ${when(
          this._isSearching,
          () => html`<forge-ai-spinner size="small" class="search-spinner"></forge-ai-spinner>`
        )}
      </div>
    `;
  }

  get #emptyState(): TemplateResult {
    const message =
      this._viewState === 'search' && this._searchQuery.trim() ? 'No conversations found' : 'No conversations yet';
    return html`
      <div class="empty-state">
        <p>${message}</p>
      </div>
    `;
  }

  get #loadingMoreIndicator(): TemplateResult | typeof nothing {
    if (!this._isLoadingMore || this._viewState !== 'search') {
      return nothing;
    }
    return html`
      <div class="loading-more-indicator">
        <forge-ai-spinner size="small"></forge-ai-spinner>
      </div>
    `;
  }

  get #threadList(): TemplateResult | typeof nothing {
    const threads = this.#displayedThreads;

    if (threads.length === 0) {
      return this.#emptyState;
    }

    return html`
      <ul class="forge-list forge-list--dense forge-list--navlist" role="list">
        ${threads.map(thread => {
          const isSelected = this.selectedThreadId === thread.id;
          return html`
            <li class="forge-list-item ${isSelected ? 'forge-list-item--selected' : ''}" role="listitem">
              <button @click=${() => this.#handleThreadSelect(thread)} aria-selected=${isSelected}>
                <span>${thread.title}</span>
              </button>
            </li>
          `;
        })}
      </ul>
      ${this.#loadingMoreIndicator}
    `;
  }

  get #threadListContainer(): TemplateResult {
    return html`
      <div class="thread-list-container" @scroll=${this._viewState === 'search' ? this.#handleScroll : undefined}>
        ${this.#threadList}
      </div>
    `;
  }

  readonly #chatActionsList = html`
    <ul class="forge-list forge-list--dense forge-list--navlist chat-actions-list" role="list">
      <li class="forge-list-item new-chat-item" role="listitem">
        <button @click=${this.#handleNewChatClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-4-7v2h-3v3h-2v-3H8V9h3V6h2v3z" />
          </svg>
          <span>New chat</span>
        </button>
      </li>
      <li class="forge-list-item new-chat-item" role="listitem">
        <button @click=${this.#handleSearchChatsClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M9 6v2H2V6zm0 5v2H2v-2zm9 5v2H2v-2zm1.31-4.5c.44-.68.69-1.5.69-2.39 0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 16l1.39-1.39zm-3.81.11c-1.38 0-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5a2.5 2.5 0 0 1 0 5" />
          </svg>
          <span>Search chats</span>
        </button>
      </li>
    </ul>
  `;

  public override render(): TemplateResult {
    const isMainView = this._viewState === 'main';
    const isSearchView = this._viewState === 'search';

    return html`
      <aside class="conversations-panel" role="complementary" aria-label="Conversation history">
        ${when(isMainView, () => this.#header)} ${when(isSearchView, () => this.#headerSearch)}
        ${when(isMainView, () => this.#chatActionsList)} ${when(isMainView, () => this.#chatsLabel)}
        ${when(isSearchView, () => this.#searchFieldSearch)} ${this.#threadListContainer}
      </aside>
    `;
  }
}
