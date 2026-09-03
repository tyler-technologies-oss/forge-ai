import { html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
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
import { AiChatbotBase } from '../ai-chatbot/ai-chatbot-base.js';
import type { ChatMessage, ThreadState } from '../ai-chatbot/types.js';
import { DeleteThreadController } from '../utils/delete-thread-controller';
import { forwardCancelableEvent, toggleState } from '../utils.js';
import type { Thread } from '../ai-threads/ai-threads';

import '../ai-attachment';
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
  }
}

export const AiChatbotLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot-launcher';

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
 * @slot icon - Slot for custom icon (used in both welcome view and conversation header)
 * @slot heading - Slot for custom heading content (welcome view only)
 * @slot description - Slot for custom description/welcome message below the title (welcome view only)
 * @slot header-actions - Slot for custom header action buttons in conversation mode (rendered before built-in header actions)
 *
 * @property {string} titleText - The title text to display in the welcome view and header (default: 'AI Assistant')
 * @property {string} descriptionText - The description text displayed below the title in the welcome view.
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 * @property {string | null | undefined} disclaimerText - The disclaimer text to display below the prompt.
 * @property {AgentInfo} agentInfo - Agent metadata for info dialog
 * @property {Agent[]} agents - List of available agents for selector
 * @property {string} selectedAgentId - Currently selected agent ID
 * @property {string} threadName - The name of the current thread (shown in conversation view breadcrumb)
 * @property {boolean} showThreadRename - Whether to show the rename option in thread actions menu
 * @property {boolean} showThreadDelete - Whether to show the delete option in thread actions menu
 * @property {Thread[]} threads - The list of chats shown in the history popover and full history view
 * @property {number} totalThreads - Total number of chats available. When greater than the number of loaded threads, infinite scroll is enabled (0 disables it)
 * @property {boolean} threadsLoading - Whether chats are currently loading, used to gate the history button and its disabled state
 * @property {string | null} selectedThreadId - The id of the currently selected thread, highlighted in the history popover/view. Updated internally when a thread is selected or a new chat starts.
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
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadSelectEventData>} forge-ai-chatbot-launcher-thread-select - Fired when a thread is selected from the history popover or full history view
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadSearchEventData>} forge-ai-chatbot-launcher-thread-search - Fired when the history search query changes (debounced). Cancelable - call setResults() with the results
 * @event {CustomEvent<ForgeAiChatbotLauncherThreadLoadMoreEventData>} forge-ai-chatbot-launcher-thread-load-more - Fired when scrolling near the bottom of the history list for pagination. Call appendResults() with the next page (empty array signals no more results)
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-new-chat - Fired when "New chat" is clicked from the full history view. Cancelable - prevents startNewChat() from being called
 */
@customElement(AiChatbotLauncherComponentTagName)
export class AiChatbotLauncherComponent extends AiChatbotBase {
  public static override styles = unsafeCSS(styles);

  public override placeholder = 'How can I help you today?';

  @property({ attribute: 'description-text' })
  public descriptionText?: string;

  @property({ attribute: 'thread-name' })
  public threadName?: string;

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

  @property({ type: String, attribute: 'selected-thread-id' })
  public selectedThreadId: string | null = null;

  @state()
  private _viewState: LauncherViewState = 'welcome';

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
  #internals!: ElementInternals;
  #pendingThreadDeleteSource: AiThreadsSearchComponent | null = null;

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
  }

  protected override _onConnected(): void {
    this.#internals.states.add('welcome');
  }

  #setViewState(next: LauncherViewState): void {
    if (this._viewState === next) {
      return;
    }
    const previous = this._viewState;
    toggleState(this.#internals, previous, false);
    toggleState(this.#internals, next, true);
    this._viewState = next;

    if (next === 'history') {
      this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-history-open' });
    } else if (previous === 'history') {
      this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-history-close' });
    }
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
    this._historyPopoverOpen = !this._historyPopoverOpen;
  }

  #handleHistoryPopoverToggle(evt: CustomEvent<{ open: boolean }>): void {
    this._historyPopoverOpen = evt.detail.open;
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
    this.selectedThreadId = evt.detail.id;
    this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-thread-select',
      detail: evt.detail
    });
    this.#setViewState('conversation');
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
      this.#transitionToWelcome();
      return true;
    }
    return false;
  }

  public override startNewChat(): void {
    super.startNewChat();
    this.selectedThreadId = null;
    this.#transitionToWelcome();
  }

  public override setMessages(messages: ChatMessage[]): void {
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
              density="medium"
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
        density="medium"
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
          header-title="Chat history"
          ?show-back-button=${true}
          .threads=${this.threads}
          .totalChats=${this.totalThreads}
          .selectedThreadId=${this.selectedThreadId}
          ?show-thread-rename=${this.showThreadRename}
          ?show-thread-delete=${this.showThreadDelete}
          @forge-ai-threads-search-back=${this.#handleHistoryBack}
          @forge-ai-threads-search-query=${this.#handleThreadsSearchQuery}
          @forge-ai-threads-search-load-more=${this.#handleThreadsSearchLoadMore}
          @forge-ai-threads-search-select=${this.#handleThreadsSearchSelect}
          @forge-ai-threads-search-new-chat=${this.#handleThreadsSearchNewChat}
          @forge-ai-threads-search-rename=${this.#handleThreadsSearchRename}
          @forge-ai-threads-search-delete=${this.#handleThreadsSearchDelete}
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

  get #historyButtonTemplate(): TemplateResult | typeof nothing {
    if (this.threads.length === 0 && this.totalThreads === 0 && !this.threadsLoading) {
      return nothing;
    }

    return html`
      <button
        id="history-button"
        slot="actions-start"
        type="button"
        class="forge-icon-button forge-icon-button--medium ai-icon-button"
        aria-label="Chat history"
        aria-expanded=${this._historyPopoverOpen}
        ?disabled=${this.threadsLoading}
        @click=${this.#handleHistoryButtonClick}>
        ${when(
          this.threadsLoading,
          () => html`<forge-ai-spinner size="extra-small"></forge-ai-spinner>`,
          () => html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 8H12v5l4.28 2.54.72-1.21-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9" />
            </svg>
          `
        )}
      </button>
      ${when(
        !this.threadsLoading,
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
        @forge-ai-popover-toggle=${this.#handleHistoryPopoverToggle}>
        <div class="history-popover" style=${popoverWidth ? `width: ${popoverWidth}px` : ''}>
          <forge-ai-threads-search
            header-title="Chat history"
            .showNewChatButton=${false}
            .showSearch=${chatCount > 5}
            .threads=${this.threads}
            .totalChats=${this.totalThreads}
            .selectedThreadId=${this.selectedThreadId}
            ?show-thread-rename=${this.showThreadRename}
            ?show-thread-delete=${this.showThreadDelete}
            @forge-ai-threads-search-query=${this.#handleThreadsSearchQuery}
            @forge-ai-threads-search-load-more=${this.#handleThreadsSearchLoadMore}
            @forge-ai-threads-search-select=${this.#handleThreadsSearchSelect}
            @forge-ai-threads-search-rename=${this.#handleThreadsSearchRename}
            @forge-ai-threads-search-delete=${this.#handleThreadsSearchDelete}
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

  public override render(): TemplateResult {
    const classes = {
      launcher: true,
      'skip-animation': this._skipAnimation
    };
    return html`
      <div class=${classMap(classes)} role="region" aria-label="AI chatbot launcher" aria-busy=${this._isStreaming}>
        ${this.#mainContentTemplate} ${this.#promptSectionTemplate}
        ${this._viewState === 'welcome' ? this.#welcomeSuggestionsTemplate : nothing}
      </div>
      ${this.#historyPopoverTemplate} ${this.#deleteThreadController.template}
    `;
  }
}
