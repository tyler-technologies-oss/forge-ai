import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { DeleteThreadController } from '../utils/delete-thread-controller';
import { InfiniteScrollController } from '../utils/infinite-scroll-controller';
import '../ai-icon';
import '../ai-spinner';
import '../ai-thread-actions-menu';
import '../ai-edit-thread';
import '../ai-modal/ai-modal';

import styles from './ai-threads.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-threads': AiThreadsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-threads-select': CustomEvent<ForgeAiThreadsSelectEventData>;
    'forge-ai-threads-new-chat': CustomEvent;
    'forge-ai-threads-load-more': CustomEvent<ForgeAiThreadsLoadMoreEventData>;
    'forge-ai-threads-rename': CustomEvent<ForgeAiThreadsRenameEventData>;
    'forge-ai-threads-delete': CustomEvent<ForgeAiThreadsDeleteEventData>;
  }
}

export interface Thread {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  messageCount?: number;
}

export interface ForgeAiThreadsSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiThreadsLoadMoreEventData {
  appendResults: (results: Thread[]) => void;
}

export interface ForgeAiThreadsRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiThreadsDeleteEventData {
  id: string;
  thread: Thread;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export const AiThreadsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-threads';

/**
 * @tag forge-ai-threads
 *
 * @slot - Default slot for chatbot launcher component
 *
 * @event {CustomEvent<ForgeAiThreadsSelectEventData>} forge-ai-threads-select - Fired when a thread is selected.
 * @event {CustomEvent} forge-ai-threads-new-chat - Fired when the new chat button is clicked.
 * @event {CustomEvent<ForgeAiThreadsLoadMoreEventData>} forge-ai-threads-load-more - Fired when scrolling near bottom. Call appendResults([]) to signal end.
 * @event {CustomEvent<ForgeAiThreadsRenameEventData>} forge-ai-threads-rename - Fired when thread renamed. Cancelable - if prevented, call onSuccess() to commit or onError() to revert.
 * @event {CustomEvent<ForgeAiThreadsDeleteEventData>} forge-ai-threads-delete - Fired when thread delete confirmed. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert.
 *
 * @description A form factor component that positions a slotted chatbot launcher alongside a thread navigation drawer.
 * Manages thread list and selection while delegating chat functionality to the slotted launcher.
 * All launcher events bubble through unchanged.
 */
@customElement(AiThreadsComponentTagName)
export class AiThreadsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of threads to display in the navigation list */
  @property({ type: Array })
  public threads: Thread[] = [];

  /**
   * Total number of threads available. When set to a positive number and fewer threads
   * are loaded than the total, infinite scroll is enabled. Leave at 0 (default) to disable
   * infinite scroll entirely. Useful when all data is loaded upfront.
   */
  @property({ type: Number, attribute: 'total-chats' })
  public totalChats = 0;

  @property({ type: Boolean, attribute: 'show-thread-rename' })
  public showThreadRename = false;

  @property({ type: Boolean, attribute: 'show-thread-delete' })
  public showThreadDelete = false;

  @query('.thread-list-container')
  private _threadListContainer!: HTMLElement;

  /** Currently selected thread ID */
  @state()
  private _selectedThreadId: string | null = null;

  @state()
  private _editingThreadId: string | null = null;

  @state()
  private _hiddenThreadIds: Set<string> = new Set();

  @state()
  private _openMenuThreadId: string | null = null;

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

      const event = new CustomEvent<ForgeAiThreadsDeleteEventData>('forge-ai-threads-delete', {
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
    onLoadMore: () => this.#handleLoadMore()
  });

  get #shouldEnablePagination(): boolean {
    if (this.totalChats <= 0) {
      return false;
    }
    const displayedCount = this.threads.filter(t => !this._hiddenThreadIds.has(t.id)).length;
    return displayedCount < this.totalChats;
  }

  public override firstUpdated(): void {
    if (this.#shouldEnablePagination && this._threadListContainer) {
      this.#infiniteScrollController.attach(this._threadListContainer);
    }
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('threads') || changedProperties.has('totalChats')) {
      this.#infiniteScrollController.reset();

      if (this.#shouldEnablePagination) {
        if (this._threadListContainer) {
          this.#infiniteScrollController.attach(this._threadListContainer);
        }
      } else {
        this.#infiniteScrollController.detach();
      }
    }
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

  #handleNewChatClick(): void {
    const event = new CustomEvent('forge-ai-threads-new-chat', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  #handleSearchChatsClick(): void {
    const event = new CustomEvent('forge-ai-threads-search-chats', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  #handleLoadMore(): void {
    const appendResults = (results: Thread[]): void => {
      if (results.length === 0) {
        this.#infiniteScrollController.setHasMore(false);
      } else {
        this.threads = [...this.threads, ...results];
      }
      this.#infiniteScrollController.setLoadingState(false);
    };

    const event = new CustomEvent<ForgeAiThreadsLoadMoreEventData>('forge-ai-threads-load-more', {
      detail: { appendResults },
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
    const displayedThreads = this.threads.filter(t => !this._hiddenThreadIds.has(t.id));
    const thread = displayedThreads.find(t => t.id === id);
    if (!thread) {
      return;
    }
    this.#deleteThreadController.show(thread);
  }

  #handleEditSave(e: CustomEvent): void {
    const { id, oldTitle, newTitle } = e.detail;
    const displayedThreads = this.threads.filter(t => !this._hiddenThreadIds.has(t.id));
    const targetThread = displayedThreads.find(t => t.id === id);
    if (!targetThread) {
      return;
    }

    const onSuccess = (): void => {
      targetThread.title = newTitle;
      this.requestUpdate();
    };

    const onError = (error?: string): void => {
      targetThread.title = oldTitle;
      this.requestUpdate();
      if (error) {
        console.error('Rename failed:', error);
      }
    };

    const event = new CustomEvent<ForgeAiThreadsRenameEventData>('forge-ai-threads-rename', {
      detail: { id, oldTitle, newTitle, onSuccess, onError },
      bubbles: true,
      composed: true,
      cancelable: true
    });

    const dispatched = this.dispatchEvent(event);
    if (dispatched) {
      targetThread.title = newTitle;
      this.requestUpdate();
    }

    this._editingThreadId = null;
  }

  #handleEditCancel(): void {
    this._editingThreadId = null;
  }

  get #threadList(): TemplateResult {
    const displayedThreads = this.threads.filter(t => !this._hiddenThreadIds.has(t.id));

    return html`
      <ul class="forge-list forge-list--dense forge-list--navlist" role="list">
        ${displayedThreads.map((thread: Thread) => {
          const isSelected = this._selectedThreadId === thread.id;
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
                  <button @click=${() => this._handleThreadSelect(thread)} aria-selected=${isSelected}>
                    <span>${thread.title}</span>
                  </button>
                  ${when(
                    this.showThreadRename || this.showThreadDelete,
                    () => html`
                      <div class="thread-item-actions">
                        <forge-ai-thread-actions-menu
                          .thread=${thread}
                          ?show-rename=${this.showThreadRename}
                          ?show-delete=${this.showThreadDelete}
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
    `;
  }

  readonly #chatActionsList = html`
    <ul class="forge-list forge-list--dense forge-list--navlist chat-actions-list" role="list">
      <li class="forge-list-item" role="listitem">
        <button @click=${this.#handleNewChatClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-4-7v2h-3v3h-2v-3H8V9h3V6h2v3z" />
          </svg>
          <span>New chat</span>
        </button>
      </li>
      <li class="forge-list-item" role="listitem">
        <button @click=${this.#handleSearchChatsClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
            <path
              d="M9 6v2H2V6zm0 5v2H2v-2zm9 5v2H2v-2zm1.31-4.5c.44-.68.69-1.5.69-2.39 0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 16l1.39-1.39zm-3.81.11c-1.38 0-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5a2.5 2.5 0 0 1 0 5" />
          </svg>
          <span>All chats</span>
        </button>
      </li>
    </ul>
  `;

  readonly #chatsLabel = html`<div class="chats-label">Recent chats</div>`;

  get #loadingMoreIndicator(): TemplateResult | typeof nothing {
    if (!this.#infiniteScrollController.isLoadingMore) {
      return nothing;
    }
    return html`
      <div class="loading-more-indicator">
        <forge-ai-spinner size="small"></forge-ai-spinner>
      </div>
    `;
  }

  get #threadListContainer(): TemplateResult {
    return html` <div class="thread-list-container">${this.#threadList} ${this.#loadingMoreIndicator}</div> `;
  }

  get #drawer(): TemplateResult {
    const displayedThreads = this.threads.filter(t => !this._hiddenThreadIds.has(t.id));
    const hasThreads = displayedThreads.length > 0;

    return html`
      <aside class="forge-drawer" role="complementary" aria-label="Thread navigation">
        <slot name="header"></slot>
        ${this.#chatActionsList}
        <slot name="actions"></slot>
        ${when(hasThreads, () => html`${this.#chatsLabel} ${this.#threadListContainer}`)}
      </aside>
    `;
  }

  readonly #slotContent = html`<slot></slot>`;

  public override render(): TemplateResult {
    return html`
      <div class="threads-container">
        <div class="drawer">${this.#drawer}</div>
        <div class="body">${this.#slotContent}</div>
      </div>
      ${this.#deleteThreadController.template}
    `;
  }
}
