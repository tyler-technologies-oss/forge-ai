import { html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { AiMessageThreadComponent } from '../ai-message-thread';
import type { AiPromptComponent } from '../ai-prompt';
import type {
  AiConversationsPanelComponent,
  ForgeAiConversationsPanelSearchEventData,
  ForgeAiConversationsPanelLoadMoreEventData,
  ForgeAiConversationsPanelRenameEventData,
  ForgeAiConversationsPanelDeleteEventData
} from '../ai-conversations-panel';
import { AiChatbotBase } from './ai-chatbot-base.js';
import type {
  Agent,
  ChatMessage,
  ForgeAiChatbotConversationSelectEventData,
  ForgeAiChatbotConversationSearchEventData,
  ForgeAiChatbotConversationLoadMoreEventData,
  ForgeAiChatbotConversationRenameEventData,
  ForgeAiChatbotConversationDeleteEventData,
  ForgeAiChatbotContextRemoveEventData,
  Thread
} from './types.js';

import '../ai-attachment';
import '../ai-chat-header';
import '../ai-chat-interface';
import '../ai-context-chip';
import '../ai-conversations-panel';
import '../ai-file-picker';
import '../ai-message-thread';
import '../ai-prompt';
import '../ai-spinner';
import '../ai-suggestions';
import '../ai-voice-input';

import styles from './ai-chatbot.scss?inline';
import { AiChatHeaderComponent } from '../ai-chat-header';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chatbot': AiChatbotComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-chatbot-connected': CustomEvent<void>;
    'forge-ai-chatbot-disconnected': CustomEvent<void>;
    'forge-ai-chatbot-run-started': CustomEvent<void>;
    'forge-ai-chatbot-message-sent': CustomEvent<ForgeAiChatbotMessageEventData>;
    'forge-ai-chatbot-message-received': CustomEvent<ForgeAiChatbotMessageEventData>;
    'forge-ai-chatbot-tool-call': CustomEvent<ForgeAiChatbotToolCallEventData>;
    'forge-ai-chatbot-error': CustomEvent<ForgeAiChatbotErrorEventData>;
    'forge-ai-chatbot-expand': CustomEvent<void>;
    'forge-ai-chatbot-minimize': CustomEvent<void>;
    'forge-ai-chatbot-clear': CustomEvent<void>;
    'forge-ai-chatbot-info': CustomEvent<void>;
    'forge-ai-chatbot-file-select': CustomEvent<ForgeAiChatbotFileSelectEventData>;
    'forge-ai-chatbot-file-remove': CustomEvent<ForgeAiChatbotFileRemoveEventData>;
    'forge-ai-chatbot-response-feedback': CustomEvent<ForgeAiChatbotResponseFeedbackEventData>;
    'forge-ai-chatbot-agent-change': CustomEvent<ForgeAiChatbotAgentChangeEventData>;
    'forge-ai-chatbot-thread-state-change': CustomEvent<void>;
    'forge-ai-chatbot-conversations-open': CustomEvent<void>;
    'forge-ai-chatbot-conversations-close': CustomEvent<void>;
    'forge-ai-chatbot-conversation-select': CustomEvent<ForgeAiChatbotConversationSelectEventData>;
    'forge-ai-chatbot-new-chat': CustomEvent<void>;
    'forge-ai-chatbot-conversation-search': CustomEvent<ForgeAiChatbotConversationSearchEventData>;
    'forge-ai-chatbot-conversation-load-more': CustomEvent<ForgeAiChatbotConversationLoadMoreEventData>;
    'forge-ai-chatbot-conversation-rename': CustomEvent<ForgeAiChatbotConversationRenameEventData>;
    'forge-ai-chatbot-conversation-delete': CustomEvent<ForgeAiChatbotConversationDeleteEventData>;
    'forge-ai-chatbot-context-remove': CustomEvent<ForgeAiChatbotContextRemoveEventData>;
  }
}

export interface ForgeAiChatbotMessageEventData {
  message: ChatMessage;
}

export interface ForgeAiChatbotToolCallEventData {
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
}

export interface ForgeAiChatbotErrorEventData {
  error: string;
}

export interface ForgeAiChatbotFileSelectEventData {
  fileId: string;
  file: File;
  filename: string;
  size: number;
  mimeType: string;
  timestamp: number;
  onProgress: (progress: number) => void;
  onComplete: (result: { url?: string; error?: string }) => void;
  onAbort: () => void;
}

export interface ForgeAiChatbotFileRemoveEventData {
  fileId: string;
}

export interface ForgeAiChatbotResponseFeedbackEventData {
  messageId: string;
  type: 'positive' | 'negative';
  feedback?: string;
}

export interface ForgeAiChatbotAgentChangeEventData {
  agent: Agent | undefined;
  previousAgentId: string | undefined;
}

export const AiChatbotComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot';

/**
 * @tag forge-ai-chatbot
 *
 * @summary A complete, self-contained AI chatbot component.
 *
 * @description
 * The AI Chatbot component provides a full-featured chat interface with support for streaming responses,
 * client-side tool execution, file attachments, markdown rendering, and programmatic control.
 * It uses an adapter pattern to abstract communication, allowing for any protocol implementation.
 *
 * @slot header - Slot for custom header content
 * @slot icon - Slot for custom header icon (default: forge-ai-icon)
 * @slot header-actions - Slot for custom header action buttons (rendered before built-in header actions)
 * @slot empty-state-icon - Slot for custom empty state icon
 * @slot empty-state - Slot for custom empty state content (overrides default suggestions)
 *
 * @property {string} titleText - The title text to display in the header (default: 'AI Assistant')
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 * @property {string | null | undefined} disclaimerText - The disclaimer text to display below the prompt. Set to empty string, null, or undefined to hide.
 * @property {boolean} showConversationsButton - Controls conversations button visibility (default: false)
 * @property {AgentInfo} agentInfo - Agent metadata for info dialog
 * @property {Agent[]} agents - List of available agents for selector
 * @property {Suggestion[]} suggestions - Suggestions to display in the empty state
 *
 * @cssproperty --forge-ai-chatbot-icon-color - The fill color for the AI icon. Defaults to `tertiary`.
 * @cssproperty --forge-ai-chatbot-suggestion-background - The background color for suggestion buttons. Defaults to `tertiary-container`.
 * @cssproperty --forge-ai-chatbot-suggestion-foreground - The text color for suggestion buttons. Defaults to `on-tertiary-container`.
 *
 * @event {CustomEvent<void>} forge-ai-chatbot-connected - Fired when adapter connects
 * @event {CustomEvent<void>} forge-ai-chatbot-disconnected - Fired when adapter disconnects
 * @event {CustomEvent<void>} forge-ai-chatbot-run-started - Fired synchronously when a run starts, before the request is sent. Use this to set adapter context just-in-time.
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-sent - Fired when user sends a message
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-received - Fired when assistant message is complete
 * @event {CustomEvent<ForgeAiChatbotToolCallEventData>} forge-ai-chatbot-tool-call - Fired when a tool needs to be executed
 * @event {CustomEvent<ForgeAiChatbotErrorEventData>} forge-ai-chatbot-error - Fired when an error occurs
 * @event {CustomEvent<void>} forge-ai-chatbot-expand - Fired when header expand button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-minimize - Fired when header minimize button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-clear - Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented)
 * @event {CustomEvent<void>} forge-ai-chatbot-info - Fired when header info option is selected
 * @event {CustomEvent<ForgeAiChatbotResponseFeedbackEventData>} forge-ai-chatbot-response-feedback - Fired when user provides feedback on a response (thumbs up/down)
 * @event {CustomEvent<ForgeAiChatbotAgentChangeEventData>} forge-ai-chatbot-agent-change - Fired when user changes agent from the header
 * @event {CustomEvent<void>} forge-ai-chatbot-thread-state-change - Fired when there is a change to the thread state (messages, files, selected agent, etc). Use this to capture the latest thread state for persistence.
 * @event {CustomEvent<void>} forge-ai-chatbot-conversations-open - Fired when conversations panel opens
 * @event {CustomEvent<void>} forge-ai-chatbot-conversations-close - Fired when conversations panel closes
 * @event {CustomEvent<ForgeAiChatbotConversationSelectEventData>} forge-ai-chatbot-conversation-select - Fired when user selects a conversation thread
 * @event {CustomEvent<void>} forge-ai-chatbot-new-chat - Fired when user clicks new chat button (cancelable)
 * @event {CustomEvent<ForgeAiChatbotConversationSearchEventData>} forge-ai-chatbot-conversation-search - Fired when search query changes in conversations panel (debounced, cancelable)
 * @event {CustomEvent<ForgeAiChatbotConversationLoadMoreEventData>} forge-ai-chatbot-conversation-load-more - Fired when scrolling near bottom in recent chats or search chats. Query field differentiates contexts.
 * @event {CustomEvent<ForgeAiChatbotConversationRenameEventData>} forge-ai-chatbot-conversation-rename - Fired when user renames a conversation thread. Cancelable - if prevented, call onSuccess() to commit or onError() to revert.
 * @event {CustomEvent<ForgeAiChatbotConversationDeleteEventData>} forge-ai-chatbot-conversation-delete - Fired when user deletes a conversation thread. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert. Otherwise optimistically removed.
 */
@customElement(AiChatbotComponentTagName)
export class AiChatbotComponent extends AiChatbotBase {
  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  @property({ type: Boolean })
  public expanded = false;

  @property({ attribute: 'minimize-icon' })
  public minimizeIcon: 'default' | 'panel' = 'default';

  @property({ type: Boolean, attribute: 'show-conversations-button' })
  public showConversationsButton = false;

  @property({ type: Array, attribute: false })
  public recentThreads: Thread[] = [];

  @property({ type: Boolean, attribute: 'conversations-open', reflect: true })
  public conversationsOpen = false;

  @property({ type: Boolean, attribute: 'show-conversation-rename' })
  public showConversationRename = false;

  @property({ type: Boolean, attribute: 'show-conversation-delete' })
  public showConversationDelete = false;

  @state()
  private _selectedThreadId: string | null = null;

  #chatInterfaceRef = createRef<AiChatInterfaceComponent>();
  protected override _messageThreadRef = createRef<AiMessageThreadComponent>();
  protected override _promptRef = createRef<AiPromptComponent>();
  #headerRef = createRef<AiChatHeaderComponent>();
  #conversationsPanelRef = createRef<AiConversationsPanelComponent>();
  #conversationsDialogRef = createRef<HTMLDialogElement>();
  #boundEscapeHandler = this.#handleEscapeKey.bind(this);

  #handleHeaderExpand(): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-expand' });
  }

  #handleHeaderMinimize(): void {
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-minimize' });
  }

  #handleHeaderClear(): void {
    this.clearMessages();
  }

  #handleHeaderInfo(): void {
    this._handleInfo();
  }

  protected override _handleInfo(): void {
    const header = this.#headerRef.value;
    if (header?.showAgentInfo) {
      header.showAgentInfo();
    }
    super._handleInfo();
  }

  public override async sendMessage(content: string, files?: File[]): Promise<void> {
    this._promptRef.value?.closeSlashMenu();
    await super.sendMessage(content, files);
  }

  public override focus(): void {
    this._promptRef.value?.focus();
  }

  public showConversations(): void {
    const dialog = this.#conversationsDialogRef.value;
    if (dialog && !dialog.open) {
      dialog.show();
      this.conversationsOpen = true;
      window.addEventListener('keydown', this.#boundEscapeHandler, { capture: true });
      this._dispatchHostEvent({ type: 'forge-ai-chatbot-conversations-open' });
    }
  }

  public hideConversations(): void {
    const dialog = this.#conversationsDialogRef.value;
    if (dialog && dialog.open) {
      window.removeEventListener('keydown', this.#boundEscapeHandler, { capture: true });
      dialog.close();
      setTimeout(() => {
        this.#conversationsPanelRef.value?.resetToMainView();
      }, 150);
    }
  }

  /**
   * Starts a new chat conversation by clearing messages and resetting conversation state.
   *
   * This method:
   * - Clears all messages via the controller
   * - Resets the selected thread ID
   *
   * Does not fire events - meant for programmatic use.
   * For user-initiated actions, the event handler fires the event before calling this.
   */
  public override startNewChat(): void {
    super.startNewChat();
    this._selectedThreadId = null;
  }

  #handleConversationsDialogClose(): void {
    window.removeEventListener('keydown', this.#boundEscapeHandler, { capture: true });
    this.conversationsOpen = false;
    this._dispatchHostEvent({ type: 'forge-ai-chatbot-conversations-close' });
  }

  #handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.conversationsOpen) {
      const path = event.composedPath();
      const hasEscapeHandler = path.some(el => el instanceof HTMLElement && el.hasAttribute('data-handles-escape'));

      if (hasEscapeHandler) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.hideConversations();
    }
  }

  #handleBackdropClick(): void {
    this.hideConversations();
  }

  public toggleConversations(): void {
    if (this.conversationsOpen) {
      this.hideConversations();
    } else {
      this.showConversations();
    }
  }

  #handleConversationsToggle(): void {
    this.toggleConversations();
  }

  #handleThreadSelect(evt: CustomEvent): void {
    const { id, title } = evt.detail;
    this._selectedThreadId = id;
    this._dispatchHostEvent({
      type: 'forge-ai-chatbot-conversation-select',
      detail: { id, title }
    });
    this.hideConversations();
  }

  #handleNewChat(event: Event): void {
    if (event.defaultPrevented) {
      return;
    }

    const hostEvent = this._dispatchHostEvent({ type: 'forge-ai-chatbot-new-chat', cancelable: true });

    if (!hostEvent.defaultPrevented) {
      this.startNewChat();
    }

    this.hideConversations();
  }

  #handlePanelClose(): void {
    this.hideConversations();
  }

  #handleConversationSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>): void => {
    const event = new CustomEvent<ForgeAiChatbotConversationSearchEventData>('forge-ai-chatbot-conversation-search', {
      detail: e.detail,
      bubbles: true,
      composed: true,
      cancelable: true
    });
    if (!this.dispatchEvent(event)) {
      e.preventDefault();
    }
  };

  #handleConversationLoadMore = (e: CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>): void => {
    const event = new CustomEvent<ForgeAiChatbotConversationLoadMoreEventData>(
      'forge-ai-chatbot-conversation-load-more',
      {
        detail: e.detail,
        bubbles: true,
        composed: true
      }
    );
    this.dispatchEvent(event);
  };

  #handleConversationRename = (e: CustomEvent<ForgeAiConversationsPanelRenameEventData>): void => {
    const event = new CustomEvent<ForgeAiChatbotConversationRenameEventData>('forge-ai-chatbot-conversation-rename', {
      detail: e.detail,
      bubbles: true,
      composed: true,
      cancelable: true
    });
    const dispatched = this.dispatchEvent(event);
    if (!dispatched) {
      e.preventDefault();
    }
  };

  #handleConversationDelete = (e: CustomEvent<ForgeAiConversationsPanelDeleteEventData>): void => {
    const event = new CustomEvent<ForgeAiChatbotConversationDeleteEventData>('forge-ai-chatbot-conversation-delete', {
      detail: e.detail,
      bubbles: true,
      composed: true,
      cancelable: true
    });
    const dispatched = this.dispatchEvent(event);
    if (!dispatched) {
      e.preventDefault();
    }
  };

  get #promptSlot(): TemplateResult {
    const isUploading = this._isUploading;
    return html`
      <forge-ai-prompt
        ${ref(this._promptRef)}
        slot="prompt"
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

  get #messageThread(): TemplateResult {
    return html`
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
        <slot name="empty-state-icon" slot="empty-state-icon"></slot>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
        <slot name="empty-state-message" slot="empty-state-message"></slot>
        <div class="suggestions-container" slot="empty-state-actions">
          <forge-ai-suggestions
            variant="block"
            .suggestions=${this.suggestions ?? []}
            @forge-ai-suggestions-select=${this._handleSuggestionSelect}>
          </forge-ai-suggestions>
        </div>
      </forge-ai-message-thread>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="chatbot-container">
        <forge-ai-chat-interface
          ${ref(this.#chatInterfaceRef)}
          role="region"
          aria-label="AI chatbot"
          aria-live="polite"
          aria-busy=${this._isStreaming}>
          <forge-ai-chat-header
            ${ref(this.#headerRef)}
            slot="header"
            ?show-expand-button=${this.showExpandButton}
            ?show-minimize-button=${this.showMinimizeButton}
            ?show-conversations-button=${this.showConversationsButton}
            ?expanded=${this.expanded}
            ?disable-agent-selector=${this._isStreaming}
            export-option=${this.exportOption === 'off' ? 'off' : this._hasMessages ? 'enabled' : 'off'}
            clear-option=${this._hasMessages ? 'enabled' : 'off'}
            .minimizeIcon=${this.minimizeIcon}
            .agentInfo=${this.agentInfo}
            .headingLevel=${this.headingLevel}
            .titleText=${this.titleText}
            .agents=${this.agents}
            .selectedAgentId=${this.selectedAgentId}
            @forge-ai-chat-header-expand=${this.#handleHeaderExpand}
            @forge-ai-chat-header-minimize=${this.#handleHeaderMinimize}
            @forge-ai-chat-header-clear=${this.#handleHeaderClear}
            @forge-ai-chat-header-export=${this._handleExport}
            @forge-ai-chat-header-info=${this.#handleHeaderInfo}
            @forge-ai-chat-header-agent-change=${this._handleAgentChange}
            @forge-ai-chat-header-conversations-toggle=${this.#handleConversationsToggle}>
            <slot name="icon" slot="icon">
              <forge-ai-icon></forge-ai-icon>
            </slot>
            <slot name="header-actions" slot="header-actions"></slot>
          </forge-ai-chat-header>
          ${this.#messageThread} ${this.#promptSlot}
          ${when(
            this.disclaimerText,
            () => html`<div class="disclaimer" slot="disclaimer">${this.disclaimerText}</div>`
          )}
        </forge-ai-chat-interface>
        ${when(
          this.showConversationsButton,
          () => html`
            ${when(
              this.conversationsOpen,
              () => html` <div class="conversations-backdrop" @click=${this.#handleBackdropClick}></div> `
            )}
            <dialog
              ${ref(this.#conversationsDialogRef)}
              class="conversations-dialog forge-dialog forge-dialog--modal forge-dialog--left-sheet"
              @close=${this.#handleConversationsDialogClose}>
              <forge-ai-conversations-panel
                ${ref(this.#conversationsPanelRef)}
                .recentThreads=${this.recentThreads}
                .selectedThreadId=${this._selectedThreadId}
                ?show-back-button=${true}
                ?show-conversation-rename=${this.showConversationRename}
                ?show-conversation-delete=${this.showConversationDelete}
                @forge-ai-conversations-panel-select=${this.#handleThreadSelect}
                @forge-ai-conversations-panel-new-chat=${this.#handleNewChat}
                @forge-ai-conversations-panel-close=${this.#handlePanelClose}
                @forge-ai-conversations-panel-search=${this.#handleConversationSearch}
                @forge-ai-conversations-panel-load-more=${this.#handleConversationLoadMore}
                @forge-ai-conversations-panel-rename=${this.#handleConversationRename}
                @forge-ai-conversations-panel-delete=${this.#handleConversationDelete}>
              </forge-ai-conversations-panel>
            </dialog>
          `
        )}
      </div>
    `;
  }
}

export type { FeatureToggle } from './ai-chatbot-base.js';
export type {
  Thread,
  ForgeAiChatbotConversationSelectEventData,
  ForgeAiChatbotConversationSearchEventData,
  ForgeAiChatbotConversationLoadMoreEventData,
  ForgeAiChatbotConversationRenameEventData,
  ForgeAiChatbotConversationDeleteEventData
} from './types.js';
