import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { DeleteThreadController } from '../utils/delete-thread-controller';
import { InfiniteScrollController } from '../utils/infinite-scroll-controller';
import type { Thread } from '../ai-threads';
import '../ai-modal/ai-modal';
import '../ai-icon/ai-icon';
import '../ai-spinner/ai-spinner';
import '../ai-thread-actions-menu';
import '../ai-edit-thread';

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
    'forge-ai-conversations-panel-rename': CustomEvent<ForgeAiConversationsPanelRenameEventData>;
    'forge-ai-conversations-panel-delete': CustomEvent<ForgeAiConversationsPanelDeleteEventData>;
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

export interface ForgeAiConversationsPanelRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiConversationsPanelDeleteEventData {
  id: string;
  thread: Thread;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export const AiConversationsPanelComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-conversations-panel';

/**
 * @tag forge-ai-conversations-panel
 *
 * @event {CustomEvent<ForgeAiConversationsPanelSelectEventData>} forge-ai-conversations-panel-select - Fired when a conversation thread is selected.
 * @event {CustomEvent<void>} forge-ai-conversations-panel-new-chat - Fired when the new chat list item is clicked.
 * @event {CustomEvent<void>} forge-ai-conversations-panel-close - Fired when the close button is clicked.
 * @event {CustomEvent<ForgeAiConversationsPanelSearchEventData>} forge-ai-conversations-panel-search - Fired when search query changes (debounced). Cancelable - if prevented, shows loading and waits for setResults callback.
 * @event {CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>} forge-ai-conversations-panel-load-more - Fired when scrolling near bottom in recent chats or search chats. Query field differentiates contexts. Always shows loading - call appendResults([]) to signal end.
 * @event {CustomEvent<ForgeAiConversationsPanelRenameEventData>} forge-ai-conversations-panel-rename - Fired when thread renamed. Cancelable - if prevented, call onSuccess() to commit or onError() to revert. Otherwise optimistically updated.
 * @event {CustomEvent<ForgeAiConversationsPanelDeleteEventData>} forge-ai-conversations-panel-delete - Fired when thread delete confirmed. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert. Otherwise optimistically removed.
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

  @property({ type: Boolean, attribute: 'show-conversation-rename' })
  public showConversationRename = false;

  @property({ type: Boolean, attribute: 'show-conversation-delete' })
  public showConversationDelete = false;

  @state()
  private _viewState: 'main' | 'search' = 'main';

  @state()
  private _isSearching = false;

  @state()
  private _searchResults: Thread[] = [];

  @state()
  private _searchQuery = '';

  @state()
  private _editingThreadId: string | null = null;

  @state()
  private _hiddenThreadIds: Set<string> = new Set();

  @state()
  private _openMenuThreadId: string | null = null;

  #searchDebounceTimeout?: number;

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

      const event = new CustomEvent<ForgeAiConversationsPanelDeleteEventData>('forge-ai-conversations-panel-delete', {
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

  #recentChatsScrollController = new InfiniteScrollController(this, {
    onLoadMore: () => this.#handleRecentChatsLoadMore()
  });

  #searchChatsScrollController = new InfiniteScrollController(this, {
    onLoadMore: () => this.#handleSearchChatsLoadMore()
  });

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
  }

  public override firstUpdated(): void {
    this.#attachScrollController();
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('_viewState')) {
      this.#attachScrollController();
    }
    if (changedProperties.has('recentThreads')) {
      this.#recentChatsScrollController.reset();
    }
  }

  #attachScrollController(): void {
    if (!this._threadListContainer) {
      return;
    }

    if (this._viewState === 'main') {
      this.#searchChatsScrollController.detach();
      this.#recentChatsScrollController.attach(this._threadListContainer);
    } else {
      this.#recentChatsScrollController.detach();
      this.#searchChatsScrollController.attach(this._threadListContainer);
    }
  }

  public resetToMainView(): void {
    this.#transitionToMain();
    this._editingThreadId = null;
  }

  get #displayedThreads(): Thread[] {
    const threads = this._viewState === 'search' ? this._searchResults : this.recentThreads;
    return threads.filter(thread => !this._hiddenThreadIds.has(thread.id));
  }

  #handleSearch(searchQuery: string): void {
    this._searchQuery = searchQuery;
    this.#searchChatsScrollController.reset();

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

  #handleRecentChatsLoadMore(): void {
    const appendResults = (results: Thread[]): void => {
      if (results.length === 0) {
        this.#recentChatsScrollController.setHasMore(false);
      } else {
        this.recentThreads = [...this.recentThreads, ...results];
      }
      this.#recentChatsScrollController.setLoadingState(false);
    };

    const event = new CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>(
      'forge-ai-conversations-panel-load-more',
      {
        detail: { query: '', appendResults },
        bubbles: true,
        composed: true
      }
    );

    this.dispatchEvent(event);
  }

  #handleSearchChatsLoadMore(): void {
    const appendResults = (results: Thread[]): void => {
      if (results.length === 0) {
        this.#searchChatsScrollController.setHasMore(false);
      } else {
        this._searchResults = [...this._searchResults, ...results];
      }
      this.#searchChatsScrollController.setLoadingState(false);
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
    this._editingThreadId = null;
    this.#recentChatsScrollController.reset();
    this.#searchChatsScrollController.reset();
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
    this._editingThreadId = null;
    this.#recentChatsScrollController.reset();
    this.#searchChatsScrollController.reset();
    clearTimeout(this.#searchDebounceTimeout);
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

  #handleMenuRename(e: CustomEvent): void {
    this._editingThreadId = e.detail.id;
    this._openMenuThreadId = null;
  }

  #handleMenuOpen(e: CustomEvent): void {
    this._openMenuThreadId = e.detail.id;
  }

  #handleMenuClose(): void {
    this._openMenuThreadId = null;
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

    const event = new CustomEvent<ForgeAiConversationsPanelRenameEventData>('forge-ai-conversations-panel-rename', {
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
          aria-label="Back to recent chats">
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
    const controller =
      this._viewState === 'search' ? this.#searchChatsScrollController : this.#recentChatsScrollController;

    if (!controller.isLoadingMore) {
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
          const isEditing = this._editingThreadId === thread.id;
          const hasOpenMenu = this._openMenuThreadId === thread.id;

          return html`
            <li
              class="forge-list-item ${isSelected ? 'forge-list-item--selected' : ''} ${hasOpenMenu
                ? 'forge-list-item--menu-open'
                : ''}"
              role="listitem">
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
                  <button @click=${() => this.#handleThreadSelect(thread)} aria-selected=${isSelected}>
                    <span>${thread.title}</span>
                  </button>
                  ${when(
                    this.showConversationRename || this.showConversationDelete,
                    () => html`
                      <div class="conversation-item-actions">
                        <forge-ai-thread-actions-menu
                          .thread=${thread}
                          ?show-rename=${this.showConversationRename}
                          ?show-delete=${this.showConversationDelete}
                          @forge-ai-thread-actions-menu-rename=${this.#handleMenuRename}
                          @forge-ai-thread-actions-menu-delete-click=${this.#handleMenuDeleteClick}
                          @forge-ai-thread-actions-menu-open=${this.#handleMenuOpen}
                          @forge-ai-thread-actions-menu-close=${this.#handleMenuClose}>
                        </forge-ai-thread-actions-menu>
                      </div>
                    `
                  )}
                `
              )}
            </li>
          `;
        })}
      </ul>
      ${this.#loadingMoreIndicator}
    `;
  }

  get #threadListContainer(): TemplateResult {
    return html` <div class="thread-list-container">${this.#threadList} ${this.#loadingMoreIndicator}</div> `;
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
      ${this.#deleteThreadController.template}
    `;
  }
}
