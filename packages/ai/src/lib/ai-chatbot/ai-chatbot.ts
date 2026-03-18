import { html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import type { AiChatInterfaceComponent } from '../ai-chat-interface';
import type { AiMessageThreadComponent } from '../ai-message-thread';
import type { AiPromptComponent } from '../ai-prompt';
import { AiChatbotBase } from './ai-chatbot-base.js';
import type { Agent, ChatMessage } from './types.js';

import '../ai-attachment';
import '../ai-chat-header';
import '../ai-chat-interface';
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
 * @slot empty-state - Slot for custom empty state content (overrides default suggestions)
 *
 * @property {string} titleText - The title text to display in the header (default: 'AI Assistant')
 * @property {HeadingLevel} headingLevel - Controls the heading level for the title content (default: 2)
 * @property {string | null | undefined} disclaimerText - The disclaimer text to display below the prompt. Set to empty string, null, or undefined to hide.
 *
 * @cssproperty --forge-ai-chatbot-icon-color - The fill color for the AI icon. Defaults to `tertiary`.
 * @cssproperty --forge-ai-chatbot-suggestion-background - The background color for suggestion buttons. Defaults to `tertiary-container`.
 * @cssproperty --forge-ai-chatbot-suggestion-foreground - The text color for suggestion buttons. Defaults to `on-tertiary-container`.
 *
 * @event {CustomEvent<void>} forge-ai-chatbot-connected - Fired when adapter connects
 * @event {CustomEvent<void>} forge-ai-chatbot-disconnected - Fired when adapter disconnects
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-sent - Fired when user sends a message
 * @event {CustomEvent<ForgeAiChatbotMessageEventData>} forge-ai-chatbot-message-received - Fired when assistant message is complete
 * @event {CustomEvent<ForgeAiChatbotToolCallEventData>} forge-ai-chatbot-tool-call - Fired when a tool needs to be executed
 * @event {CustomEvent<ForgeAiChatbotErrorEventData>} forge-ai-chatbot-error - Fired when an error occurs
 * @event {CustomEvent<void>} forge-ai-chatbot-expand - Fired when header expand button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-minimize - Fired when header minimize button is clicked
 * @event {CustomEvent<void>} forge-ai-chatbot-clear - Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented)
 * @event {CustomEvent<void>} forge-ai-chatbot-info - Fired when header info option is selected
 * @event {CustomEvent<ForgeAiChatbotResponseFeedbackEventData>} forge-ai-chatbot-response-feedback - Fired when user provides feedback on a response (thumbs up/down)
 */
@customElement(AiChatbotComponentTagName)
export class AiChatbotComponent extends AiChatbotBase {
  public static override styles = unsafeCSS(styles);

  protected override get _eventPrefix(): string {
    return 'forge-ai-chatbot';
  }

  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  @property({ type: Boolean })
  public expanded = false;

  @property({ attribute: 'minimize-icon' })
  public minimizeIcon: 'default' | 'panel' = 'default';

  #chatInterfaceRef = createRef<AiChatInterfaceComponent>();
  protected override _messageThreadRef = createRef<AiMessageThreadComponent>();
  protected override _promptRef = createRef<AiPromptComponent>();
  #headerRef = createRef<AiChatHeaderComponent>();

  public override clearMessages(): void {
    const event = this._dispatchHostEvent({ type: 'forge-ai-chatbot-clear', cancelable: true });

    if (!event.defaultPrevented) {
      super.clearMessages();
    }
  }

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

  get #sessionFilesTemplate(): TemplateResult | typeof nothing {
    const content = this._sessionFilesTemplate;
    if (content === nothing) {
      return nothing;
    }

    return html`<div class="session-files" slot="attachments">${content}</div>`;
  }

  get #promptSlot(): TemplateResult {
    const isUploading = this._isUploading;
    return html`
      <forge-ai-prompt
        ${ref(this._promptRef)}
        slot="prompt"
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
          ?expanded=${this.expanded}
          ?disable-agent-selector=${this._isStreaming}
          export-option=${this._hasMessages ? 'enabled' : 'off'}
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
          @forge-ai-chat-header-agent-change=${this._handleAgentChange}>
          <slot name="icon" slot="icon">
            <forge-ai-icon></forge-ai-icon>
          </slot>
        </forge-ai-chat-header>
        ${this.#sessionFilesTemplate} ${this.#messageThread} ${this.#promptSlot}
        ${when(this.disclaimerText, () => html`<div class="disclaimer" slot="disclaimer">${this.disclaimerText}</div>`)}
      </forge-ai-chat-interface>
    `;
  }
}

export type { FeatureToggle } from './ai-chatbot-base.js';
