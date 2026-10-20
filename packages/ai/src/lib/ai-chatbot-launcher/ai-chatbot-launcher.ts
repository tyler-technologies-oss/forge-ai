import { LitElement, html, nothing, unsafeCSS, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ContextProvider } from '@lit/context';
import type { AiCanvasComponent } from '../ai-canvas';
import type { AiChatHeaderComponent } from '../ai-chat-header';
import type { AiMessageThreadComponent } from '../ai-message-thread';
import type { AiPromptComponent, ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiSuggestionsEventData } from '../ai-suggestions';
import type {
  AiThreadsSearchComponent,
  ForgeAiThreadsSearchQueryEventData,
  ForgeAiThreadsSearchLoadMoreEventData,
  ForgeAiThreadsSearchSelectEventData,
  ForgeAiThreadsSearchRenameEventData,
  ForgeAiThreadsSearchDeleteEventData,
  ForgeAiThreadsSearchDeleteConfirmEventData
} from '../ai-threads-search';
import { AiChatbotBase, type FeatureToggle } from '../ai-chatbot/ai-chatbot-base.js';
import type {
  ChatMessage,
  IToolRenderer,
  ThreadState,
  ToolCall,
  ToolCanvas,
  AnyToolDefinition
} from '../ai-chatbot/types.js';
import {
  createToolCanvas,
  resolveToolCanvasTitle,
  toolCanvasHostContext,
  type ForgeAiCanvasCloseRequestEventData,
  type ForgeAiCanvasOpenRequestEventData
} from '../ai-chatbot/tool-canvas.js';
import { shouldShowToolRenderer } from '../ai-chatbot/utils.js';
import { ResizeController } from '../core/resize-controller.js';
import { DeleteThreadController } from '../utils/delete-thread-controller';
import { readStoredNumber, writeStoredNumber, type StorageKind } from '../utils/storage-utils';
import { forwardCancelableEvent, toggleState } from '../utils.js';
import type { Thread } from '../ai-threads/ai-threads';

import '../ai-attachment';
import '../ai-canvas';
import '../ai-chat-header';
import '../ai-edit-thread';
import '../ai-file-picker';
import '../ai-icon';
import '../ai-message-thread';
import '../ai-prompt';
import '../ai-spinner';
import '../ai-suggestions';
import '../ai-voice-input';
import '../ai-gradient-container';
import '../ai-thread-actions-menu';
import '../ai-threads-search';
import '../core/popover';
import '../core/tooltip';

import styles from './ai-chatbot-launcher.scss?inline';

export type LauncherViewState = 'welcome' | 'conversation' | 'history';

const HISTORY_POPOVER_INSET = 48;

export interface ForgeAiChatbotLauncherThreadRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiChatbotLauncherThreadDeleteEventData {
  id: string;
  thread: Thread;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiChatbotLauncherThreadSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiChatbotLauncherThreadSearchEventData {
  query: string;
  setResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotLauncherThreadLoadMoreEventData {
  query: string;
  appendResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotLauncherCanvasResizeEventData {
  /** Width of the conversation column in pixels; the canvas takes the remaining width. */
  chatWidth: number;
}

export interface OpenCanvasOptions {
  /** Identifies the artifact; tool-driven opens use the tool call id. */
  id?: string;
  /** Overrides `canvasTitle` while this content is shown. */
  title?: string;
  /** Content mounted in the canvas body. Omit to show the `canvas` slot instead. */
  content?: Node;
}

export interface ForgeAiChatbotLauncherCanvasOpenEventData {
  id?: string;
  title?: string;
  /** Present when the canvas was opened for a tool call. */
  toolCall?: ToolCall;
}

interface CanvasContent {
  id?: string;
  title?: string;
  node?: Node;
  toolCall?: ToolCall;
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chatbot-launcher': AiChatbotLauncherComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-chatbot-launcher-conversation-start': CustomEvent<void>;
    'forge-ai-chatbot-launcher-history-open': CustomEvent<void>;
    'forge-ai-chatbot-launcher-history-close': CustomEvent<void>;
    'forge-ai-chatbot-launcher-thread-rename': CustomEvent<ForgeAiChatbotLauncherThreadRenameEventData>;
    'forge-ai-chatbot-launcher-thread-delete': CustomEvent<ForgeAiChatbotLauncherThreadDeleteEventData>;
    'forge-ai-chatbot-launcher-thread-select': CustomEvent<ForgeAiChatbotLauncherThreadSelectEventData>;
    'forge-ai-chatbot-launcher-thread-search': CustomEvent<ForgeAiChatbotLauncherThreadSearchEventData>;
    'forge-ai-chatbot-launcher-thread-load-more': CustomEvent<ForgeAiChatbotLauncherThreadLoadMoreEventData>;
    'forge-ai-chatbot-launcher-new-chat': CustomEvent<void>;
    'forge-ai-chatbot-launcher-thread-retry': CustomEvent<void>;
    'forge-ai-chatbot-launcher-canvas-open': CustomEvent<ForgeAiChatbotLauncherCanvasOpenEventData>;
    'forge-ai-chatbot-launcher-canvas-close': CustomEvent<void>;
    'forge-ai-chatbot-launcher-canvas-resize': CustomEvent<ForgeAiChatbotLauncherCanvasResizeEventData>;
  }
}

export const AiChatbotLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot-launcher';

const DEFAULT_CHAT_WIDTH = 420;
const MIN_CHAT_WIDTH = 360;
const MIN_CANVAS_WIDTH = 320;
const CHAT_WIDTH_STORAGE_KEY = 'forge-ai-chatbot-launcher-chat-width';
const CHAT_WIDTH_STORAGE_KINDS: readonly StorageKind[] = ['session', 'local'];

/**
 * @tag forge-ai-chatbot-launcher
 *
 * @summary An embedded AI chatbot component with a welcome view that transitions to conversation mode.
 *
 * @description
 * The AI Chatbot Launcher provides a page-embedded chat experience with a centered welcome/hero view
 * that animates into a full conversation interface when the user sends their first message.
 * In conversation mode, a header is displayed with options for clear, export, and agent selection.
 *
 * In conversation mode an artifact canvas can open beside the thread via `openCanvas()`, a tool definition's
 * `canvas` config, or a renderer's `forge-ai-canvas-open-request`. The conversation narrows to a sidebar-style
 * column and the canvas takes the remaining width. The canvas closes whenever the conversation view is left.
 *
 * @slot icon - Slot for custom icon (used in both welcome view and conversation header)
 * @slot heading - Slot for custom heading content (welcome view only)
 * @slot description - Slot for custom description/welcome message below the title (welcome view only)
 * @slot header-actions - Slot for custom header action buttons in conversation mode (rendered before built-in header actions)
 * @slot canvas - Content shown in the canvas when `openCanvas()` is called without `content`
 * @slot canvas-actions - Action buttons rendered in the canvas header before the close button
 *
 * @property {string} titleText - The title text to display in the welcome view and header (default: 'AI Assistant')
 * @property {string} descriptionText - The description text displayed below the title in the welcome view.
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 * @property {string | null | undefined} disclaimerText - The disclaimer text to display below the prompt.
 * @property {AgentInfo} agentInfo - Agent metadata for info dialog
 * @property {Agent[]} agents - List of available agents for selector
 * @property {string} selectedAgentId - Currently selected agent ID
 * @property {string} threadName - The name of the current thread (shown in conversation view breadcrumb)
 * @property {boolean} showHistoryButton - Controls the prompt bar's chat history button and its popover (default: false). Visibility is yours to decide - the component never infers it from whether chats are loaded, so an empty `threads` shows "No chats yet" rather than removing the entry point
 * @property {boolean} showThreadRename - Whether to show the rename option in thread actions menu
 * @property {boolean} showThreadDelete - Whether to show the delete option in thread actions menu
 * @property {Thread[]} threads - The list of chats shown in the history popover and full history view
 * @property {number} totalThreads - Total number of chats available. When greater than the number of loaded threads, infinite scroll is enabled (0 disables it)
 * @property {boolean} threadsLoading - Whether chats are currently loading, used to show a spinner on the history button and disable it
 * @property {string | undefined} threadsError - Message describing a failed chat history load. When set, the history popover/view shows the message with a retry button instead of the empty state, and the history button shows an error badge so the failure is visible with the popover closed. If chats are already loaded the list stays visible and the message renders as a compact single line with a retry - at the bottom of the list when a page was in flight, otherwise above it. Clear it once a load succeeds.
 * @property {string | null} selectedThreadId - The id of the currently selected thread, highlighted in the history popover/view. Updated internally when a thread is selected or a new chat starts.
 * @property {string} canvasTitle - Default title for the canvas header, used when the open request does not supply one
 * @property {FeatureToggle} canvasResizable - Controls the drag handle between the conversation and the canvas. `'on'` (default) lets users resize with a pointer or the arrow keys; `'off'` hides it, so the conversation stays at `chatWidth`.
 * @property {number} chatWidth - Width in pixels of the conversation column while the canvas is open (default: 420). Updated as the user resizes, clamped to at least 360px and to leave the canvas at least 320px when there is room. Resized widths are persisted per tab in sessionStorage and shared across tabs via localStorage; on load the session value is preferred, then the local value, then the default.
 *
 * @cssproperty --forge-ai-chatbot-launcher-icon-color - The fill color for the AI icon.
 *
 * @event {CustomEvent<void>} forge-ai-chatbot-connected - Fired when adapter connects
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-sent - Fired when user sends a message
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-received - Fired when assistant message is complete
 * @event {CustomEvent<ForgeAiChatbotToolCallEventData>} forge-ai-chatbot-tool-call - Fired when a tool needs to be executed
 * @event {CustomEvent<ForgeAiChatbotErrorEventData>} forge-ai-chatbot-error - Fired when an error occurs
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-conversation-start - Fired when transitioning from welcome to conversation view
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-history-open - Fired when transitioning to the full-height history view
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-history-close - Fired when leaving the full-height history view
 * @event {CustomEvent<ForgeAiChatbotResponseFeedbackEventData>} forge-ai-chatbot-response-feedback - Fired when user provides feedback on a response
 * @event {CustomEvent<void>} forge-ai-chatbot-info - Fired when header info option is selected
 * @event {CustomEvent<ForgeAiChatbotAgentChangeEventData>} forge-ai-chatbot-agent-change - Fired when agent selection changes
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadRenameEventData>} forge-ai-chatbot-launcher-thread-rename - Fired when thread rename is saved. Parent should update threadName property and call onSuccess() or onError()
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadDeleteEventData>} forge-ai-chatbot-launcher-thread-delete - Fired when thread deletion is confirmed. Parent should delete thread and call onSuccess() or onError()
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadSelectEventData>} forge-ai-chatbot-launcher-thread-select - Fired when a thread is selected from the history popover or full history view. Cancelable - prevents selectedThreadId from being set and the transition to the conversation view, leaving the host to commit both once its own load resolves
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadSearchEventData>} forge-ai-chatbot-launcher-thread-search - Fired when the history search query changes (debounced). Cancelable - call setResults() with the results
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadLoadMoreEventData>} forge-ai-chatbot-launcher-thread-load-more - Fired when scrolling near the bottom of the history list for pagination. Call appendResults() with the next page (empty array signals no more results)
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-new-chat - Fired when "New chat" is clicked from the full history view. Cancelable - prevents startNewChat() from being called
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-thread-retry - Fired when the retry button in the history error state is clicked. Re-request the chats and clear threadsError once the load succeeds
 * @event {CustomEvent<ForgeAiChatbotLauncherCanvasOpenEventData>} forge-ai-chatbot-launcher-canvas-open - Fired before the canvas opens or replaces its content. Cancelable - prevents the canvas from opening
 * @event {CustomEvent<ForgeAiChatbotLauncherCanvasResizeEventData>} forge-ai-chatbot-launcher-canvas-resize - Fired when a resize is committed via pointer release or keyboard step. Detail has the new `chatWidth`
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-canvas-close - Fired when the canvas closes. Cancelable only for user or `closeCanvas()` initiated closes; closes caused by leaving the conversation view cannot be prevented
 */
@customElement(AiChatbotLauncherComponentTagName)
export class AiChatbotLauncherComponent extends AiChatbotBase {
  public static override styles = unsafeCSS(styles);

  public override placeholder = 'How can I help you today?';

  @property({ attribute: 'description-text' })
  public descriptionText?: string;

  @property({ attribute: 'thread-name' })
  public threadName?: string;

  @property({ type: Boolean, attribute: 'show-history-button' })
  public showHistoryButton = false;

  @property({ type: Boolean, attribute: 'show-thread-rename' })
  public showThreadRename = false;

  @property({ type: Boolean, attribute: 'show-thread-delete' })
  public showThreadDelete = false;

  @property({ type: Array, attribute: false })
  public threads: Thread[] = [];

  @property({ type: Number, attribute: 'total-threads' })
  public totalThreads = 0;

  @property({ type: Boolean, attribute: 'threads-loading' })
  public threadsLoading = false;

  @property({ type: String, attribute: 'threads-error' })
  public threadsError?: string;

  @property({ type: String, attribute: 'selected-thread-id' })
  public selectedThreadId: string | null = null;

  @property({ attribute: 'canvas-title' })
  public canvasTitle?: string;

  @property({ attribute: 'canvas-resizable' })
  public canvasResizable: FeatureToggle = 'on';

  @property({ type: Number, attribute: 'chat-width' })
  public chatWidth = DEFAULT_CHAT_WIDTH;

  @state()
  private _viewState: LauncherViewState = 'welcome';

  @state()
  private _canvasOpen = false;

  @state()
  private _canvasContent: CanvasContent | null = null;

  @state()
  private _isResizing = false;

  @state()
  private _skipAnimation = false;

  @state()
  private _editingThreadId: string | null = null;

  @state()
  private _historyPopoverOpen = false;

  protected override _messageThreadRef = createRef<AiMessageThreadComponent>();
  protected override _promptRef = createRef<AiPromptComponent>();
  #headerRef = createRef<AiChatHeaderComponent>();
  #gradientContainerRef = createRef<HTMLElement>();
  #historyButtonRef = createRef<HTMLButtonElement>();
  #historyPopoverSearchRef = createRef<AiThreadsSearchComponent>();
  #historyViewSearchRef = createRef<AiThreadsSearchComponent>();
  #canvasRef = createRef<AiCanvasComponent>();
  #launcherRef = createRef<HTMLElement>();
  #resizeHandleRef = createRef<HTMLElement>();
  readonly #resizeController: ResizeController;
  #canvasHost: ContextProvider<typeof toolCanvasHostContext>;
  #internals!: ElementInternals;
  #pendingThreadDeleteSource: AiThreadsSearchComponent | null = null;
  #autoOpenedToolCallIds = new Set<string>();

  #deleteThreadController = new DeleteThreadController(this, {
    onConfirm: thread => {
      const source = this.#pendingThreadDeleteSource;
      this.#pendingThreadDeleteSource = null;

      if (source) {
        source.confirmThreadDelete(thread);
        return;
      }

      const onSuccess = (): void => {
        // Thread deleted successfully
      };

      const onError = (error?: string): void => {
        if (error) {
          console.error('Delete failed:', error);
        }
      };

      const event = this._dispatchHostEvent({
        type: 'forge-ai-chatbot-launcher-thread-delete',
        detail: {
          id: thread.id,
          thread,
          onSuccess,
          onError
        },
        cancelable: true
      });

      if (!event.defaultPrevented) {
        this.clearMessages();
      }
    }
  });

  constructor() {
    super();
    this.#internals = this.attachInternals();
    // Tells inline tool renderers a canvas is available so canvas-enabled tools show their expand affordance.
    this.#canvasHost = new ContextProvider(this, {
      context: toolCanvasHostContext,
      initialValue: { presentation: 'inline-expandable' }
    });
    this.#resizeController = new ResizeController(this, {
      targetElementRef: this.#launcherRef,
      resizeHandleRef: this.#resizeHandleRef,
      minWidth: MIN_CHAT_WIDTH,
      maxWidth: Infinity,
      defaultWidth: DEFAULT_CHAT_WIDTH,
      // The handle sits on the chat column's inline-end edge, so dragging toward inline-end widens it.
      growDirection: () => (getComputedStyle(this).direction === 'rtl' ? 'left' : 'right'),
      getAvailableWidth: () => this.#availableChatWidth ?? Number.MAX_SAFE_INTEGER,
      onResize: width => {
        this.chatWidth = width;
      },
      onResizeStart: () => {
        this._isResizing = true;
      },
      onResizeEnd: () => {
        this._isResizing = false;
      },
      onCommit: width => {
        this.#handleResizeCommit(width);
      }
    });
  }

  protected override _onConnected(): void {
    this.#internals.states.add('welcome');
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    super.willUpdate(changedProperties);
    if (!this.hasUpdated && this.#shouldRestoreChatWidth) {
      this.chatWidth = this.#readPersistedChatWidth() ?? this.chatWidth;
    }
    if (changedProperties.has('chatWidth') && this.chatWidth !== this.#resizeController.currentWidth) {
      this.#resizeController.setWidth(this.chatWidth);
    }
    this.#autoOpenPendingToolCalls();
  }

  #setViewState(next: LauncherViewState): void {
    if (this._viewState === next) {
      return;
    }
    if (next !== 'conversation') {
      this.#forceCloseCanvas();
    }
    const previous = this._viewState;
    toggleState(this.#internals, previous, false);
    toggleState(this.#internals, next, true);
    this._viewState = next;

    if (next === 'history') {
      this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-history-open' });
      void this.#focusAfterUpdate(() => this.#historyViewSearchRef.value);
    } else if (previous === 'history') {
      this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-history-close' });
      void this.#focusAfterUpdate(() => this);
    }
  }

  /**
   * Focuses the element resolved by `resolve` once the render that shows it (and its own
   * update, for Lit children) has completed. Skips if the launcher has since moved on.
   */
  async #focusAfterUpdate(resolve: () => HTMLElement | undefined | null): Promise<void> {
    const viewState = this._viewState;
    const popoverOpen = this._historyPopoverOpen;
    await this.updateComplete;
    const target = resolve();
    if (target instanceof LitElement) {
      await target.updateComplete;
    }
    if (!this.isConnected || this._viewState !== viewState || this._historyPopoverOpen !== popoverOpen) {
      return;
    }
    target?.focus();
  }

  #transitionToConversation(): void {
    if (this._viewState === 'conversation') {
      return;
    }

    const event = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-conversation-start',
      cancelable: true
    });

    if (event.defaultPrevented) {
      return;
    }

    this.#commitConversationTransition();
  }

  #commitConversationTransition(): void {
    this.#setViewState('conversation');
  }

  public startConversation(): void {
    this.#commitConversationTransition();
  }

  #transitionToWelcome(): void {
    if (this._viewState === 'welcome') {
      return;
    }

    this._skipAnimation = false;
    this.#setViewState('welcome');
  }

  /**
   * Returns to the welcome view without touching conversation state. Unlike `startNewChat()`, this
   * leaves messages, `selectedThreadId`, and the adapter's thread untouched, so an abandoned thread
   * selection can be undone without discarding the conversation the user was already in.
   */
  public showWelcome(): void {
    this._historyPopoverOpen = false;
    this.#transitionToWelcome();
  }

  #transitionToHistory(): void {
    this.#setViewState('history');
  }

  /**
   * Navigates directly to the full history view (not the history popover).
   */
  public showHistory(): void {
    this._historyPopoverOpen = false;
    this.#transitionToHistory();
  }

  #handleHistoryBack(): void {
    this.#setViewState(this._hasMessages ? 'conversation' : 'welcome');
  }

  #handleHeaderClear(): void {
    this.clearMessages();
  }

  protected override _handleInfo(): void {
    const header = this.#headerRef.value;
    header?.showAgentInfo();
    super._handleInfo();
  }

  #handleHeaderInfo(): void {
    this._handleInfo();
  }

  #handleThreadRename(evt: CustomEvent<{ id: string }>): void {
    this._editingThreadId = evt.detail.id;
  }

  #handleEditSave(evt: CustomEvent<{ id: string; oldTitle: string; newTitle: string }>): void {
    const { id, oldTitle, newTitle } = evt.detail;

    const onSuccess = (): void => {
      this._editingThreadId = null;
    };

    const onError = (): void => {
      this._editingThreadId = null;
    };

    const event = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-thread-rename',
      detail: {
        id,
        oldTitle,
        newTitle,
        onSuccess,
        onError
      },
      cancelable: true
    });

    if (!event.defaultPrevented) {
      this._editingThreadId = null;
    }
  }

  #handleEditCancel(): void {
    this._editingThreadId = null;
  }

  #handleThreadNameClick(): void {
    const threadId = this.agentInfo?.threadId || '';
    this._editingThreadId = threadId;
  }

  #handleThreadDelete(): void {
    const thread: Thread = {
      id: this.agentInfo?.threadId || '',
      title: this.threadName || '',
      createdAt: new Date().toISOString()
    };
    this.#deleteThreadController.show(thread);
  }

  #handleHistoryButtonClick(): void {
    if (!this._historyPopoverOpen) {
      // The popover stays mounted between opens, so drop the previous query before reopening.
      this.#historyPopoverSearchRef.value?.resetSearch();
    }
    this._historyPopoverOpen = !this._historyPopoverOpen;
  }

  #handleHistoryPopoverToggle(evt: CustomEvent<{ open: boolean }>): void {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this._historyPopoverOpen = evt.detail.open;

    if (evt.detail.open) {
      void this.#focusAfterUpdate(() => this.#historyPopoverSearchRef.value);
      return;
    }

    // Escape/light dismiss leaves focus on a control inside the now-hidden popover; the browser
    // only moves it to the body after this event. Return it to the trigger in either state, but
    // never steal it from a control the user deliberately clicked.
    const activeElement = this.shadowRoot?.activeElement ?? null;
    const focusInsidePopover = (evt.currentTarget as HTMLElement).contains(activeElement);
    const focusLost = this.ownerDocument.activeElement === this.ownerDocument.body;
    if ((focusInsidePopover || focusLost) && this._viewState !== 'history') {
      this.#historyButtonRef.value?.focus();
    }
  }

  // Closing here instead of via native light dismiss keeps the hide and the refocus in one
  // update, so focus never rests on a control inside the hidden popover.
  #handleHistoryPopoverKeydown(evt: KeyboardEvent): void {
    if (evt.key !== 'Escape' || evt.defaultPrevented) {
      return;
    }
    evt.preventDefault();
    evt.stopPropagation();
    this._historyPopoverOpen = false;
    void this.#focusAfterUpdate(() => this.#historyButtonRef.value);
  }

  #handleViewAllClick(): void {
    this._historyPopoverOpen = false;
    this.#transitionToHistory();
  }

  #handleThreadsSearchQuery(evt: CustomEvent<ForgeAiThreadsSearchQueryEventData>): void {
    forwardCancelableEvent(this, evt, 'forge-ai-chatbot-launcher-thread-search');
  }

  #handleThreadsSearchLoadMore(evt: CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-thread-load-more', detail: evt.detail });
  }

  #handleThreadsSearchSelect(evt: CustomEvent<ForgeAiThreadsSearchSelectEventData>): void {
    this._historyPopoverOpen = false;

    const event = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-thread-select',
      detail: evt.detail,
      cancelable: true
    });

    if (event.defaultPrevented) {
      return;
    }

    this.selectedThreadId = evt.detail.id;
    this.#setViewState('conversation');
  }

  #handleThreadsSearchRetry(): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-thread-retry' });
  }

  #handleThreadsSearchNewChat(): void {
    this._historyPopoverOpen = false;
    const event = this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-new-chat', cancelable: true });
    if (!event.defaultPrevented) {
      this.startNewChat();
    }
  }

  #handleThreadsSearchRename(evt: CustomEvent<ForgeAiThreadsSearchRenameEventData>): void {
    forwardCancelableEvent(this, evt, 'forge-ai-chatbot-launcher-thread-rename');
  }

  #handleThreadsSearchDelete(evt: CustomEvent<ForgeAiThreadsSearchDeleteEventData>): void {
    forwardCancelableEvent(this, evt, 'forge-ai-chatbot-launcher-thread-delete');
  }

  #handleThreadsSearchDeleteConfirm(evt: CustomEvent<ForgeAiThreadsSearchDeleteConfirmEventData>): void {
    // Showing this confirmation from within ai-threads-search would nest a native <dialog> inside
    // the history popover; calling dialog.showModal() force-closes all open popovers regardless of
    // dismiss-mode, and the popover's now-closed (display: none) ancestor then suppresses the dialog's
    // own rendering too. Take over here instead, where the confirmation is a sibling of the popover.
    evt.preventDefault();
    this.#pendingThreadDeleteSource = evt.target as AiThreadsSearchComponent;
    this.#deleteThreadController.show(evt.detail.thread);
  }

  protected override async _handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): Promise<void> {
    this.#transitionToConversation();
    await super._handleSend(evt);
  }

  protected override async _handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): Promise<void> {
    this.#transitionToConversation();
    await super._handleSuggestionSelect(evt);
  }

  public override clearMessages(): boolean {
    if (super.clearMessages()) {
      this.#resetCanvas();
      this.#transitionToWelcome();
      return true;
    }
    return false;
  }

  public override startNewChat(): void {
    super.startNewChat();
    this.selectedThreadId = null;
    this.#resetCanvas();
    this.#transitionToWelcome();
  }

  public override setMessages(messages: ChatMessage[]): void {
    this.#resetCanvas();
    this.#markToolCallsSeen(messages);
    super.setMessages(messages);
    if (messages.length > 0) {
      this.#transitionToConversation();
    }
  }

  public override async sendMessage(content: string, files?: File[]): Promise<void> {
    this.#transitionToConversation();
    await super.sendMessage(content, files);
  }

  public override async setThreadState(threadState: ThreadState, options?: { skipAnimation?: boolean }): Promise<void> {
    if (options?.skipAnimation) {
      this._skipAnimation = true;
    }
    await super.setThreadState(threadState);
    if (threadState.messages.length > 0) {
      this.#transitionToConversation();
    }
  }

  public get viewState(): LauncherViewState {
    return this._viewState;
  }

  public get canvasOpen(): boolean {
    return this._canvasOpen;
  }

  /**
   * Opens the canvas beside the conversation, or swaps its content if already open. Only available in the
   * conversation view; returns false elsewhere or when the open event is prevented.
   */
  public openCanvas(options: OpenCanvasOptions = {}): boolean {
    return this.#commitCanvasOpen({ id: options.id, title: options.title, node: options.content });
  }

  /**
   * Closes the canvas. Returns false if it was not open or the close event was prevented.
   */
  public closeCanvas(): boolean {
    if (!this.#requestCanvasClose()) {
      return false;
    }
    void this.#focusAfterUpdate(() => this._promptRef.value);
    return true;
  }

  #requestCanvasClose(): boolean {
    if (!this._canvasOpen) {
      return false;
    }

    const event = this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-canvas-close', cancelable: true });
    if (event.defaultPrevented) {
      return false;
    }

    this.#hideCanvas();
    return true;
  }

  #commitCanvasOpen(content: CanvasContent): boolean {
    if (this._viewState !== 'conversation') {
      return false;
    }

    const event = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-canvas-open',
      detail: { id: content.id, title: content.title, toolCall: content.toolCall },
      cancelable: true
    });
    if (event.defaultPrevented) {
      return false;
    }

    this._canvasContent = content;
    if (!this._canvasOpen) {
      // A width saved in a wider container (or tab) could otherwise leave no room for the canvas.
      this.#resizeController.setWidth(this.chatWidth);
      this._canvasOpen = true;
      toggleState(this.#internals, 'canvas-open', true);
      void this.#focusAfterUpdate(() => this.#canvasRef.value);
    }
    this.#syncCanvasHost();
    return true;
  }

  /** Widest the chat column may be while leaving room for the canvas; undefined until the launcher is laid out. */
  get #availableChatWidth(): number | undefined {
    const width = this.#launcherRef.value?.clientWidth ?? 0;
    return width > 0 ? width - MIN_CANVAS_WIDTH : undefined;
  }

  #handleResizeCommit(width: number): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-canvas-resize', detail: { chatWidth: width } });
    for (const kind of CHAT_WIDTH_STORAGE_KINDS) {
      writeStoredNumber({ kind, key: CHAT_WIDTH_STORAGE_KEY, value: width });
    }
  }

  #readPersistedChatWidth(): number | undefined {
    for (const kind of CHAT_WIDTH_STORAGE_KINDS) {
      const width = readStoredNumber({ kind, key: CHAT_WIDTH_STORAGE_KEY });
      if (width !== undefined) {
        return width;
      }
    }
    return undefined;
  }

  // A saved width only fills in for a launcher that was not given an explicit one, and never when resizing is off.
  get #shouldRestoreChatWidth(): boolean {
    return this.canvasResizable === 'on' && this.chatWidth === DEFAULT_CHAT_WIDTH && !this.hasAttribute('chat-width');
  }

  // Content is kept until the next open so it stays visible while the panel collapses.
  #hideCanvas(): void {
    this._canvasOpen = false;
    toggleState(this.#internals, 'canvas-open', false);
    this.#syncCanvasHost();
  }

  #syncCanvasHost(): void {
    this.#canvasHost.setValue({
      presentation: 'inline-expandable',
      openToolCallId: this._canvasOpen ? this._canvasContent?.toolCall?.id : undefined
    });
  }

  #forceCloseCanvas(): void {
    if (!this._canvasOpen) {
      return;
    }
    this.#hideCanvas();
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-canvas-close' });
  }

  #resetCanvas(): void {
    this.#forceCloseCanvas();
    this._canvasContent = null;
    this.#autoOpenedToolCallIds.clear();
  }

  #handleCanvasClose(): void {
    this.closeCanvas();
  }

  #handleCanvasKeydown(evt: KeyboardEvent): void {
    if (evt.key !== 'Escape' || evt.defaultPrevented) {
      return;
    }
    evt.preventDefault();
    this.closeCanvas();
  }

  #handleCanvasOpenRequest(evt: CustomEvent<ForgeAiCanvasOpenRequestEventData>): void {
    evt.stopPropagation();
    const toolCall = this.#findToolCall(evt.detail.toolCallId);
    const toolDefinition = this._tools.get(evt.detail.toolName);
    if (!toolCall || !toolDefinition) {
      return;
    }
    evt.detail.handled = this.#openToolCallInCanvas(toolCall, toolDefinition, evt.detail.title);
  }

  // Initiated from the thread (e.g. an active artifact card), so focus stays where the user clicked.
  #handleCanvasCloseRequest(evt: CustomEvent<ForgeAiCanvasCloseRequestEventData>): void {
    evt.stopPropagation();
    evt.detail.handled = this.#closeToolCallCanvas(evt.detail.toolCallId);
  }

  #closeToolCallCanvas(toolCallId: string): boolean {
    if (this._canvasContent?.toolCall?.id !== toolCallId) {
      return false;
    }
    return this.#requestCanvasClose();
  }

  get #toolCalls(): ToolCall[] {
    return this._messageItems.flatMap(item => {
      if (item.type === 'toolCall') {
        return [item.data];
      }
      if (item.type === 'assistant') {
        return item.data.children.flatMap(child => (child.type === 'toolCall' ? [child.data] : []));
      }
      return [];
    });
  }

  #findToolCall(id: string): ToolCall | undefined {
    return this.#toolCalls.find(toolCall => toolCall.id === id);
  }

  #autoOpenPendingToolCalls(): void {
    if (this._viewState !== 'conversation') {
      return;
    }
    for (const toolCall of this.#toolCalls) {
      const toolDefinition = this._tools.get(toolCall.name);
      if (
        toolDefinition?.canvas?.open !== 'auto' ||
        this.#autoOpenedToolCallIds.has(toolCall.id) ||
        !shouldShowToolRenderer(toolCall, toolDefinition)
      ) {
        continue;
      }
      this.#autoOpenedToolCallIds.add(toolCall.id);
      this.#openToolCallInCanvas(toolCall, toolDefinition);
    }
  }

  #openToolCallInCanvas(toolCall: ToolCall, toolDefinition: AnyToolDefinition, title?: string): boolean {
    // Re-requesting the artifact already on display just refocuses it, preserving renderer state.
    if (this._canvasOpen && this._canvasContent?.toolCall?.id === toolCall.id) {
      this.#canvasRef.value?.focus();
      return true;
    }
    return this.#commitCanvasOpen({
      id: toolCall.id,
      title: title ?? resolveToolCanvasTitle(toolCall, toolDefinition),
      node: this.#createCanvasRenderer(toolCall, toolDefinition),
      toolCall
    });
  }

  #createCanvasControls(toolCall: ToolCall, toolDefinition: AnyToolDefinition): ToolCanvas {
    return createToolCanvas({
      available: true,
      // This instance only exists to be shown in the canvas, and is created before the canvas finishes opening.
      isOpen: () => true,
      open: options => this.#openToolCallInCanvas(toolCall, toolDefinition, options?.title),
      close: () => this.#closeToolCallCanvas(toolCall.id)
    });
  }

  #createCanvasRenderer(toolCall: ToolCall, toolDefinition: AnyToolDefinition): Node | undefined {
    const renderer = toolDefinition.canvas?.renderer ?? toolDefinition.renderer;
    const canvas = this.#createCanvasControls(toolCall, toolDefinition);
    if (renderer?.elementTag) {
      const element = document.createElement(renderer.elementTag) as HTMLElement & IToolRenderer;
      element.toolCall = toolCall;
      element.presentation = 'canvas';
      element.canvas = canvas;
      return element;
    }
    return renderer?.render?.(toolCall, { presentation: 'canvas', canvas });
  }

  /** Tool calls restored from history are marked as seen so loading a thread never auto-opens the canvas. */
  #markToolCallsSeen(messages: ChatMessage[]): void {
    for (const message of messages) {
      for (const toolCall of message.toolCalls ?? []) {
        this.#autoOpenedToolCallIds.add(toolCall.id);
      }
    }
  }

  public override focus(): void {
    this._promptRef.value?.focus();
  }

  get #headingElement(): TemplateResult {
    switch (this.headingLevel) {
      case 1:
        return html`<h1 class="title"><slot name="heading">${this.titleText}</slot></h1>`;
      case 2:
        return html`<h2 class="title"><slot name="heading">${this.titleText}</slot></h2>`;
      case 3:
        return html`<h3 class="title"><slot name="heading">${this.titleText}</slot></h3>`;
      case 4:
        return html`<h4 class="title"><slot name="heading">${this.titleText}</slot></h4>`;
      case 5:
        return html`<h5 class="title"><slot name="heading">${this.titleText}</slot></h5>`;
      case 6:
        return html`<h6 class="title"><slot name="heading">${this.titleText}</slot></h6>`;
      default:
        return html`<h2 class="title"><slot name="heading">${this.titleText}</slot></h2>`;
    }
  }

  get #promptTemplate(): TemplateResult {
    const isUploading = this._isUploading;
    return html`
      <forge-ai-prompt
        ${ref(this._promptRef)}
        .placeholder=${this.placeholder}
        .running=${this._isStreaming || isUploading}
        .slashCommands=${this._slashCommands}
        .contextItems=${this._allContextItems}
        ?disabled=${isUploading}
        ?debug-mode=${this.debugMode}
        @forge-ai-prompt-send=${this._handleSend}
        @forge-ai-prompt-stop=${this._handleStop}
        @forge-ai-prompt-cancel=${this._handleCancel}
        @forge-ai-prompt-debug-toggle=${this._handleDebugToggle}
        @forge-ai-prompt-command=${this._handleSlashCommand}
        @forge-ai-prompt-context-remove=${this._handlePromptContextRemove}>
        ${when(
          this.fileUpload === 'on',
          () => html`
            <forge-ai-file-picker
              slot="actions-start"
              variant="icon-button"
              multiple
              ?disabled=${isUploading}
              .maxSize=${this.maxFileSize}
              .accept=${this.acceptedFileTypes}
              .selectedFiles=${this._coreController?.pendingAttachments.map(a => a.filename) ?? []}
              @forge-ai-file-picker-change=${this._handleFileSelect}
              @forge-ai-file-picker-error=${this._handleFileError}>
            </forge-ai-file-picker>
          `
        )}
        ${this.#historyButtonTemplate}
        ${when(
          this.voiceInput === 'on',
          () => html`
            <forge-ai-voice-input slot="actions-end" @forge-ai-voice-input-result=${this._handleVoiceInputResult}>
            </forge-ai-voice-input>
          `
        )}
      </forge-ai-prompt>
    `;
  }

  get #welcomeHeaderTemplate(): TemplateResult {
    return html`
      <div class="welcome">
        <div class="welcome-header">
          <slot name="icon">
            <forge-ai-icon class="icon"></forge-ai-icon>
          </slot>
          ${this.#headingElement}
        </div>
        <div class="description"><slot name="description">${this.descriptionText}</slot></div>
      </div>
    `;
  }

  get #welcomeSuggestionsTemplate(): TemplateResult | typeof nothing {
    if (!this.suggestions?.length) {
      return nothing;
    }
    return html`
      <div class="welcome-suggestions">
        <forge-ai-suggestions
          variant="block"
          .suggestions=${this.suggestions ?? []}
          @forge-ai-suggestions-select=${this._handleSuggestionSelect}>
        </forge-ai-suggestions>
      </div>
    `;
  }

  get #threadName(): TemplateResult {
    const showActions = this.showThreadRename || this.showThreadDelete;
    const threadId = this.agentInfo?.threadId || '';
    const isEditing = this._editingThreadId === threadId;

    return html`
      <div class="thread-name" slot="thread-name">
        <div class="thread-name__separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon" aria-hidden="true">
            <path d="m7 21 7.9-18H17L9.1 21z" />
          </svg>
        </div>
        ${when(
          isEditing,
          () => html`
            <forge-ai-edit-thread
              .thread=${{
                id: threadId,
                title: this.threadName || '',
                createdAt: new Date().toISOString()
              }}
              .value=${this.threadName || ''}
              @forge-ai-edit-thread-save=${this.#handleEditSave}
              @forge-ai-edit-thread-cancel=${this.#handleEditCancel}>
            </forge-ai-edit-thread>
          `,
          () => html`
            ${when(
              this.showThreadRename,
              () => html`
                <button
                  class="forge-button forge-button--dense thread-name__button"
                  id="thread-name-button"
                  aria-label="Edit thread name: ${this.threadName}"
                  @click=${this.#handleThreadNameClick}>
                  <span class="thread-name__text">${this.threadName}</span>
                </button>
                <forge-ai-tooltip for="thread-name-button" placement="bottom">${this.threadName}</forge-ai-tooltip>
              `,
              () => html`
                <span class="thread-name__text" id="thread-name-text">${this.threadName}</span>
                <forge-ai-tooltip for="thread-name-text" placement="bottom">${this.threadName}</forge-ai-tooltip>
              `
            )}
            ${when(showActions, () => this.#threadActionsMenu)}
          `
        )}
      </div>
    `;
  }

  get #threadActionsMenu(): TemplateResult {
    const thread = {
      id: this.agentInfo?.threadId || '',
      title: this.threadName || '',
      createdAt: new Date().toISOString()
    };

    return html`
      <forge-ai-thread-actions-menu
        .thread=${thread}
        ?show-rename=${this.showThreadRename}
        ?show-delete=${this.showThreadDelete}
        @forge-ai-thread-actions-menu-rename=${this.#handleThreadRename}
        @forge-ai-thread-actions-menu-delete-click=${this.#handleThreadDelete}>
        <svg
          slot="trigger-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="forge-icon"
          aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="m7 10 5 5 5-5z" />
        </svg>
      </forge-ai-thread-actions-menu>
    `;
  }

  get #conversationContentTemplate(): TemplateResult {
    return html`
      <div class="conversation">
        <forge-ai-chat-header
          ${ref(this.#headerRef)}
          ?disable-agent-selector=${this._isStreaming}
          export-option=${this.exportOption === 'off' ? 'off' : this._hasMessages ? 'enabled' : 'off'}
          clear-option=${this.clearOption === 'off' ? 'off' : this._hasMessages ? 'enabled' : 'off'}
          .agentInfo=${this.agentInfo}
          .headingLevel=${this.headingLevel}
          .titleText=${this.titleText}
          .agents=${this.agents}
          .selectedAgentId=${this.selectedAgentId}
          @forge-ai-chat-header-clear=${this.#handleHeaderClear}
          @forge-ai-chat-header-export=${this._handleExport}
          @forge-ai-chat-header-info=${this.#handleHeaderInfo}
          @forge-ai-chat-header-agent-change=${this._handleAgentChange}>
          <slot name="icon" slot="icon">
            <forge-ai-icon></forge-ai-icon>
          </slot>
          <slot name="header-actions" slot="header-actions"></slot>
          ${when(this.threadName, () => this.#threadName)}
        </forge-ai-chat-header>
        <forge-ai-message-thread
          ${ref(this._messageThreadRef)}
          .messageItems=${this._messageItems}
          .tools=${this._tools}
          ?enable-reactions=${this.enableReactions}
          ?show-thinking=${this._isStreaming}
          ?debug-mode=${this.debugMode}
          @forge-ai-message-thread-copy=${this._handleCopy}
          @forge-ai-message-thread-resend=${this._handleResend}
          @forge-ai-message-thread-thumbs-up=${this._handleThumbsUp}
          @forge-ai-message-thread-thumbs-down=${this._handleThumbsDown}
          @forge-ai-message-thread-user-copy=${this._handleUserCopy}
          @forge-ai-message-thread-user-resend=${this._handleUserResend}
          @forge-ai-message-thread-user-edit=${this._handleUserEdit}>
        </forge-ai-message-thread>
      </div>
    `;
  }

  get #historyContentTemplate(): TemplateResult {
    return html`
      <div class="history">
        <forge-ai-threads-search
          ${ref(this.#historyViewSearchRef)}
          header-title="Chat history"
          ?show-back-button=${true}
          .threads=${this.threads}
          .totalChats=${this.totalThreads}
          .selectedThreadId=${this.selectedThreadId}
          .errorMessage=${this.threadsError}
          ?show-thread-rename=${this.showThreadRename}
          ?show-thread-delete=${this.showThreadDelete}
          @forge-ai-threads-search-back=${this.#handleHistoryBack}
          @forge-ai-threads-search-query=${this.#handleThreadsSearchQuery}
          @forge-ai-threads-search-load-more=${this.#handleThreadsSearchLoadMore}
          @forge-ai-threads-search-select=${this.#handleThreadsSearchSelect}
          @forge-ai-threads-search-new-chat=${this.#handleThreadsSearchNewChat}
          @forge-ai-threads-search-rename=${this.#handleThreadsSearchRename}
          @forge-ai-threads-search-delete=${this.#handleThreadsSearchDelete}
          @forge-ai-threads-search-retry=${this.#handleThreadsSearchRetry}
          @forge-ai-threads-search-delete-confirm=${this.#handleThreadsSearchDeleteConfirm}>
        </forge-ai-threads-search>
      </div>
    `;
  }

  get #mainContentTemplate(): TemplateResult {
    switch (this._viewState) {
      case 'welcome':
        return this.#welcomeHeaderTemplate;
      case 'history':
        return this.#historyContentTemplate;
      default:
        return this.#conversationContentTemplate;
    }
  }

  /** An error supersedes the loading state, so the retry stays reachable rather than being disabled. */
  get #showThreadsLoading(): boolean {
    return this.threadsLoading && !this.threadsError;
  }

  get #historyButtonTemplate(): TemplateResult | typeof nothing {
    if (!this.showHistoryButton) {
      return nothing;
    }

    return html`
      <button
        ${ref(this.#historyButtonRef)}
        id="history-button"
        slot="actions-start"
        type="button"
        class="forge-icon-button forge-icon-button--medium ai-icon-button history-button"
        aria-label=${this.threadsError ? 'Chat history - failed to load' : 'Chat history'}
        aria-expanded=${this._historyPopoverOpen}
        ?disabled=${this.#showThreadsLoading}
        @click=${this.#handleHistoryButtonClick}>
        ${when(
          this.#showThreadsLoading,
          () => html`<forge-ai-spinner size="extra-small"></forge-ai-spinner>`,
          () => html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 8H12v5l4.28 2.54.72-1.21-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9" />
            </svg>
          `
        )}
        ${when(
          this.threadsError,
          () => html`<span class="forge-badge forge-badge--dot history-button__error-badge"></span>`
        )}
      </button>
      ${when(
        !this.#showThreadsLoading,
        () =>
          html`<forge-ai-tooltip slot="actions-start" for="history-button" placement="top"
            >Chat history</forge-ai-tooltip
          >`
      )}
    `;
  }

  get #historyPopoverTemplate(): TemplateResult {
    const chatCount = this.totalThreads > 0 ? this.totalThreads : this.threads.length;
    const anchorWidth = this.#gradientContainerRef.value?.getBoundingClientRect().width;
    const popoverWidth = anchorWidth ? anchorWidth - HISTORY_POPOVER_INSET * 2 : undefined;

    return html`
      <forge-ai-popover
        .anchor=${this.#gradientContainerRef.value ?? null}
        placement="bottom"
        .offset=${8}
        .flip=${true}
        .autoSize=${true}
        ?open=${this._historyPopoverOpen}
        @keydown=${this.#handleHistoryPopoverKeydown}
        @forge-ai-popover-toggle=${this.#handleHistoryPopoverToggle}>
        <div class="history-popover" style=${popoverWidth ? `width: ${popoverWidth}px` : ''}>
          <forge-ai-threads-search
            ${ref(this.#historyPopoverSearchRef)}
            header-title="Chat history"
            .showNewChatButton=${false}
            .showSearch=${chatCount > 5}
            .threads=${this.threads}
            .totalChats=${this.totalThreads}
            .selectedThreadId=${this.selectedThreadId}
            .errorMessage=${this.threadsError}
            ?show-thread-rename=${this.showThreadRename}
            ?show-thread-delete=${this.showThreadDelete}
            @forge-ai-threads-search-query=${this.#handleThreadsSearchQuery}
            @forge-ai-threads-search-load-more=${this.#handleThreadsSearchLoadMore}
            @forge-ai-threads-search-select=${this.#handleThreadsSearchSelect}
            @forge-ai-threads-search-rename=${this.#handleThreadsSearchRename}
            @forge-ai-threads-search-delete=${this.#handleThreadsSearchDelete}
            @forge-ai-threads-search-retry=${this.#handleThreadsSearchRetry}
            @forge-ai-threads-search-delete-confirm=${this.#handleThreadsSearchDeleteConfirm}>
            <button
              slot="header-actions"
              type="button"
              class="forge-button forge-button--dense history-popover__view-all"
              @click=${this.#handleViewAllClick}>
              <span>View all</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon" aria-hidden="true">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
              </svg>
            </button>
          </forge-ai-threads-search>
        </div>
      </forge-ai-popover>
    `;
  }

  get #promptSectionTemplate(): TemplateResult {
    return html`
      <div class="prompt-section">
        <forge-ai-gradient-container class="prompt-container" variant="medium" ${ref(this.#gradientContainerRef)}>
          ${this.#promptTemplate}
        </forge-ai-gradient-container>
        ${when(this.disclaimerText, () => html`<div class="disclaimer">${this.disclaimerText}</div>`)}
      </div>
    `;
  }

  get #resizeHandle(): TemplateResult | typeof nothing {
    if (this.canvasResizable !== 'on') {
      return nothing;
    }
    const max = Math.max(this.chatWidth, this.#availableChatWidth ?? this.chatWidth);
    return html`
      <div
        ${ref(this.#resizeHandleRef)}
        class=${classMap({ 'resize-handle': true, 'resize-handle--active': this._isResizing })}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize canvas, use left and right arrow keys"
        aria-valuemin=${MIN_CHAT_WIDTH}
        aria-valuemax=${max}
        aria-valuenow=${this.chatWidth}
        aria-valuetext="Conversation ${this.chatWidth} pixels wide"
        tabindex="0"
        @pointerdown=${(evt: PointerEvent) => this.#resizeController.handlePointerDown(evt)}
        @keydown=${(evt: KeyboardEvent) => this.#resizeController.handleKeyDown(evt)}>
        <span class="resize-handle__grip" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" />
          </svg>
        </span>
      </div>
    `;
  }

  get #canvasTemplate(): TemplateResult {
    const title = this._canvasContent?.title ?? this.canvasTitle ?? '';
    return html`
      <forge-ai-canvas
        ${ref(this.#canvasRef)}
        class="canvas"
        .titleText=${title}
        .headingLevel=${this.headingLevel}
        ?inert=${!this._canvasOpen}
        @forge-ai-canvas-close=${this.#handleCanvasClose}
        @keydown=${this.#handleCanvasKeydown}>
        <slot name="canvas-actions" slot="actions"></slot>
        ${this._canvasContent?.node ?? html`<slot name="canvas"></slot>`}
      </forge-ai-canvas>
    `;
  }

  public override render(): TemplateResult {
    const classes = {
      launcher: true,
      'skip-animation': this._skipAnimation,
      resizing: this._isResizing
    };
    return html`
      <div
        ${ref(this.#launcherRef)}
        class=${classMap(classes)}
        style=${styleMap({ '--_chat-width': `${this.chatWidth}px` })}
        role="region"
        aria-label="AI chatbot launcher"
        aria-busy=${this._isStreaming}
        @forge-ai-canvas-open-request=${this.#handleCanvasOpenRequest}
        @forge-ai-canvas-close-request=${this.#handleCanvasCloseRequest}>
        <div class="chat">
          ${this.#mainContentTemplate} ${this.#promptSectionTemplate}
          ${this._viewState === 'welcome' ? this.#welcomeSuggestionsTemplate : nothing}
        </div>
        <div class="canvas-track">${this.#resizeHandle} ${this.#canvasTemplate}</div>
      </div>
      ${when(this.showHistoryButton, () => this.#historyPopoverTemplate)} ${this.#deleteThreadController.template}
    `;
  }
}
