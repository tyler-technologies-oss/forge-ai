import { html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AgentInfo } from '../ai-agent-info';
import type { AiChatHeaderComponent, ForgeAiChatHeaderAgentChangeEventData } from '../ai-chat-header';
import type { AiMessageThreadComponent } from '../ai-message-thread';
import type { AiPromptComponent, ForgeAiPromptSendEventData } from '../ai-prompt';
import type { ForgeAiSuggestionsEventData } from '../ai-suggestions';
import { AiChatbotBase } from '../ai-chatbot/ai-chatbot-base.js';
import type { Agent, ChatMessage, ThreadState } from '../ai-chatbot/types.js';
import { generateId } from '../ai-chatbot/utils.js';

import '../ai-attachment';
import '../ai-chat-header';
import '../ai-file-picker';
import '../ai-icon';
import '../ai-message-thread';
import '../ai-prompt';
import '../ai-suggestions';
import '../ai-voice-input';
import '../ai-gradient-container';

import styles from './ai-chatbot-launcher.scss?inline';

export type LauncherViewState = 'welcome' | 'conversation';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chatbot-launcher': AiChatbotLauncherComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-chatbot-launcher-connected': CustomEvent<void>;
    'forge-ai-chatbot-launcher-message-sent': CustomEvent<ForgeAiChatbotLauncherMessageEventData>;
    'forge-ai-chatbot-launcher-message-received': CustomEvent<ForgeAiChatbotLauncherMessageEventData>;
    'forge-ai-chatbot-launcher-tool-call': CustomEvent<ForgeAiChatbotLauncherToolCallEventData>;
    'forge-ai-chatbot-launcher-error': CustomEvent<ForgeAiChatbotLauncherErrorEventData>;
    'forge-ai-chatbot-launcher-file-select': CustomEvent<ForgeAiChatbotLauncherFileSelectEventData>;
    'forge-ai-chatbot-launcher-response-feedback': CustomEvent<ForgeAiChatbotLauncherResponseFeedbackEventData>;
    'forge-ai-chatbot-launcher-conversation-start': CustomEvent<void>;
    'forge-ai-chatbot-launcher-clear': CustomEvent<void>;
    'forge-ai-chatbot-launcher-thread-state-change': CustomEvent<void>;
    'forge-ai-chatbot-launcher-info': CustomEvent<void>;
    'forge-ai-chatbot-launcher-agent-change': CustomEvent<ForgeAiChatbotLauncherAgentChangeEventData>;
    'forge-ai-chatbot-launcher-disconnected': CustomEvent<void>;
    'forge-ai-chatbot-launcher-file-remove': CustomEvent<ForgeAiChatbotLauncherFileRemoveEventData>;
  }
}

export interface ForgeAiChatbotLauncherMessageEventData {
  message: ChatMessage;
}

export interface ForgeAiChatbotLauncherToolCallEventData {
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
}

export interface ForgeAiChatbotLauncherErrorEventData {
  error: string;
}

export interface ForgeAiChatbotLauncherFileSelectEventData {
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

export interface ForgeAiChatbotLauncherResponseFeedbackEventData {
  messageId: string;
  type: 'positive' | 'negative';
  feedback?: string;
}

export interface ForgeAiChatbotLauncherAgentChangeEventData {
  agent: Agent | undefined;
  previousAgentId: string | undefined;
}

export interface ForgeAiChatbotLauncherFileRemoveEventData {
  fileId: string;
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
 * In conversation mode, a header is displayed with options for expand, minimize, clear, export, and agent selection.
 *
 * @slot icon - Slot for custom icon (used in both welcome view and conversation header)
 * @slot heading - Slot for custom heading content
 * @slot description - Slot for custom description/welcome message below the title
 *
 * @property {string} titleText - The title text to display in the welcome view and header (default: 'AI Assistant')
 * @property {string} descriptionText - The description text displayed below the title in the welcome view.
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 * @property {string | null | undefined} disclaimerText - The disclaimer text to display below the prompt.
 * @property {AgentInfo} agentInfo - Agent metadata for info dialog
 * @property {Agent[]} agents - List of available agents for selector
 * @property {string} selectedAgentId - Currently selected agent ID
 *
 * @cssproperty --forge-ai-chatbot-launcher-icon-color - The fill color for the AI icon.
 *
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-connected - Fired when adapter connects
 * @event {CustomEvent<ForgeAiChatbotLauncherMessageEventData>} forge-ai-chatbot-launcher-message-sent - Fired when user sends a message
 * @event {CustomEvent<ForgeAiChatbotLauncherMessageEventData>} forge-ai-chatbot-launcher-message-received - Fired when assistant message is complete
 * @event {CustomEvent<ForgeAiChatbotLauncherToolCallEventData>} forge-ai-chatbot-launcher-tool-call - Fired when a tool needs to be executed
 * @event {CustomEvent<ForgeAiChatbotLauncherErrorEventData>} forge-ai-chatbot-launcher-error - Fired when an error occurs
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-conversation-start - Fired when transitioning from welcome to conversation view
 * @event {CustomEvent<ForgeAiChatbotLauncherResponseFeedbackEventData>} forge-ai-chatbot-launcher-response-feedback - Fired when user provides feedback on a response
 * @event {CustomEvent<void>} forge-ai-chatbot-launcher-info - Fired when header info option is selected
 * @event {CustomEvent<ForgeAiChatbotLauncherAgentChangeEventData>} forge-ai-chatbot-launcher-agent-change - Fired when agent selection changes
 */
@customElement(AiChatbotLauncherComponentTagName)
export class AiChatbotLauncherComponent extends AiChatbotBase {
  public static override styles = unsafeCSS(styles);

  protected override get _eventPrefix(): string {
    return 'forge-ai-chatbot-launcher';
  }

  public override placeholder = 'How can I help you today?';

  @property({ attribute: 'description-text' })
  public descriptionText?: string;

  @property({ type: Object, attribute: false })
  public agentInfo?: AgentInfo;

  @property({ attribute: false })
  public agents: Agent[] = [];

  @property({ attribute: 'selected-agent-id' })
  public selectedAgentId?: string;

  @state()
  private _viewState: LauncherViewState = 'welcome';

  protected override _messageThreadRef = createRef<AiMessageThreadComponent>();
  protected override _promptRef = createRef<AiPromptComponent>();
  #headerRef = createRef<AiChatHeaderComponent>();
  #internals!: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  protected override _onConnected(): void {
    this.#internals.states.add('welcome');
  }

  #transitionToConversation(): void {
    if (this._viewState === 'conversation') {
      return;
    }

    this._viewState = 'conversation';
    this.#internals.states.delete('welcome');
    this.#internals.states.add('conversation');

    this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-conversation-start' });
  }

  #transitionToWelcome(): void {
    if (this._viewState === 'welcome') {
      return;
    }

    this._viewState = 'welcome';
    this.#internals.states.delete('conversation');
    this.#internals.states.add('welcome');
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

  #handleAgentChange(event: CustomEvent<ForgeAiChatHeaderAgentChangeEventData>): void {
    const { agent, previousAgentId } = event.detail;

    const changeEvt = this._dispatchHostEvent({
      type: 'forge-ai-chatbot-launcher-agent-change',
      detail: { agent, previousAgentId }
    });

    if (!changeEvt.defaultPrevented) {
      this.selectedAgentId = agent?.id;
      const adapter = this._coreController.adapter;
      if (adapter) {
        adapter.threadId = generateId();
      }

      if (this._hasMessages) {
        const agentName = agent?.name ?? this.titleText;
        const systemMessage: ChatMessage = {
          id: generateId(),
          role: 'system',
          content: `Switched to ${agentName}`,
          timestamp: Date.now(),
          status: 'complete',
          clientOnly: true
        };
        this._coreController.addMessage(systemMessage);
      }
    }
  }

  protected override async _handleSend(evt: CustomEvent<ForgeAiPromptSendEventData>): Promise<void> {
    this.#transitionToConversation();
    await super._handleSend(evt);
  }

  protected override async _handleSuggestionSelect(evt: CustomEvent<ForgeAiSuggestionsEventData>): Promise<void> {
    this.#transitionToConversation();
    await super._handleSuggestionSelect(evt);
  }

  public override clearMessages(): void {
    const event = this._dispatchHostEvent({ type: 'forge-ai-chatbot-launcher-clear', cancelable: true });

    if (!event.defaultPrevented) {
      super.clearMessages();
      this.#transitionToWelcome();
    }
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

  public override getThreadState(): ThreadState {
    return {
      ...super.getThreadState(),
      selectedAgentId: this.selectedAgentId
    };
  }

  public override async setThreadState(threadState: ThreadState): Promise<void> {
    await super.setThreadState(threadState);
    this.selectedAgentId = threadState.selectedAgentId;
    if (threadState.messages.length > 0) {
      this.#transitionToConversation();
    }
  }

  public getSelectedAgent(): Agent | undefined {
    return this.agents.find(a => a.id === this.selectedAgentId);
  }

  public get viewState(): LauncherViewState {
    return this._viewState;
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

  get #sessionFilesTemplate(): TemplateResult | typeof nothing {
    const content = this._sessionFilesTemplate;
    if (content === nothing) {
      return nothing;
    }

    return html`<div class="session-files">${content}</div>`;
  }

  get #promptTemplate(): TemplateResult {
    const isUploading = this._isUploading;
    return html`
      <forge-ai-prompt
        ${ref(this._promptRef)}
        .placeholder=${this.placeholder}
        .running=${this._isStreaming || isUploading}
        .slashCommands=${this._slashCommands}
        ?disabled=${isUploading}
        ?debug-mode=${this.debugMode}
        @forge-ai-prompt-send=${this._handleSend}
        @forge-ai-prompt-stop=${this._handleStop}
        @forge-ai-prompt-cancel=${this._handleCancel}
        @forge-ai-prompt-debug-toggle=${this._handleDebugToggle}
        @forge-ai-prompt-command=${this._handleSlashCommand}>
        ${when(
          this.fileUpload === 'on',
          () => html`
            <forge-ai-file-picker
              slot="actions-start"
              variant="icon-button"
              multiple
              ?disabled=${isUploading}
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

  get #welcomeTemplate(): TemplateResult {
    return html`
      <div class="welcome">
        <div class="welcome-header">
          <slot name="icon">
            <forge-ai-icon class="icon"></forge-ai-icon>
          </slot>
          ${this.#headingElement}
        </div>
        <div class="description"><slot name="description">${this.descriptionText}</slot></div>
        <forge-ai-gradient-container class="prompt-container" variant="medium"
          >${this.#promptTemplate}</forge-ai-gradient-container
        >
        ${when(this.disclaimerText, () => html`<div class="disclaimer">${this.disclaimerText}</div>`)}
        ${when(
          this.suggestions?.length,
          () => html`
            <div class="welcome-suggestions">
              <forge-ai-suggestions
                variant="block"
                .suggestions=${this.suggestions ?? []}
                @forge-ai-suggestions-select=${this._handleSuggestionSelect}>
              </forge-ai-suggestions>
            </div>
          `
        )}
      </div>
    `;
  }

  get #conversationTemplate(): TemplateResult {
    return html`
      <div class="conversation">
        <forge-ai-chat-header
          ${ref(this.#headerRef)}
          ?disable-agent-selector=${this._isStreaming}
          export-option=${this._hasMessages ? 'enabled' : 'off'}
          clear-option=${this._hasMessages ? 'enabled' : 'off'}
          .agentInfo=${this.agentInfo}
          .headingLevel=${this.headingLevel}
          .titleText=${this.titleText}
          .agents=${this.agents}
          .selectedAgentId=${this.selectedAgentId}
          @forge-ai-chat-header-clear=${this.#handleHeaderClear}
          @forge-ai-chat-header-export=${this._handleExport}
          @forge-ai-chat-header-info=${this.#handleHeaderInfo}
          @forge-ai-chat-header-agent-change=${this.#handleAgentChange}>
          <slot name="icon" slot="icon">
            <forge-ai-icon></forge-ai-icon>
          </slot>
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
        <div class="prompt-area">
          ${this.#sessionFilesTemplate} ${this.#promptTemplate}
          ${when(this.disclaimerText, () => html`<div class="disclaimer">${this.disclaimerText}</div>`)}
        </div>
      </div>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="launcher" role="region" aria-label="AI chatbot launcher" aria-busy=${this._isStreaming}>
        ${this._viewState === 'welcome' ? this.#welcomeTemplate : this.#conversationTemplate}
      </div>
    `;
  }
}
