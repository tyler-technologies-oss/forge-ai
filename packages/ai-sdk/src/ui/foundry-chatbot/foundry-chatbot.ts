import { html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { FoundryBaseChatbotComponent } from '../foundry-base-chatbot.js';
import type { AiChatbotComponent, ChatMessage, ThreadState } from '@tylertech/forge-ai/ai-chatbot';
import { ChatbotError, ChatbotErrorCode } from '../../core/error-codes.js';
import { getErrorTitle, getErrorMessage } from './error-content.js';
import '@tylertech/forge-ai/ai-chatbot';
import '@tylertech/forge-ai/ai-spinner';

import styles from './foundry-chatbot.scss?inline';

export interface FoundryChatbotErrorEventData {
  error: ChatbotError;
  type: string;
}

export interface FoundryChatbotReadyEventData {
  adapter: unknown;
}

declare global {
  interface HTMLElementTagNameMap {
    'foundry-chatbot': FoundryChatbotComponent;
  }

  interface HTMLElementEventMap {
    'foundry-chatbot-ready': CustomEvent<FoundryChatbotReadyEventData>;
    'foundry-chatbot-error': CustomEvent<FoundryChatbotErrorEventData>;
  }
}

const FoundryChatbotComponentTagName: keyof HTMLElementTagNameMap = 'foundry-chatbot';

/**
 * @tag foundry-chatbot
 */
@customElement(FoundryChatbotComponentTagName)
export class FoundryChatbotComponent extends FoundryBaseChatbotComponent {
  public static override styles = unsafeCSS(styles);

  #chatbotRef: Ref<AiChatbotComponent> = createRef();
  #errorDetails: ChatbotError | null = null;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('foundry-chatbot-error', this.#handleErrorEvent);
    this.addEventListener('forge-ai-chatbot-clear', this.#handleClearEvent);
    this.addEventListener('forge-ai-chatbot-message-sent', this.#handleMessageEvent);
    this.addEventListener('forge-ai-chatbot-message-received', this.#handleMessageEvent);
    this.addEventListener('forge-ai-chatbot-connected', this.#handleChatbotConnected);
  }

  #handleErrorEvent = (event: CustomEvent<FoundryChatbotErrorEventData>): void => {
    const { error } = event.detail;
    this.#errorDetails = error;
    this.requestUpdate();
  };

  #handleClearEvent = async (event: CustomEvent): Promise<void> => {
    if (!event.defaultPrevented) {
      await this.clearMessages();
    }
  };

  #handleMessageEvent = (): void => {
    this._controller.saveThreadState();
  };

  #handleChatbotConnected = (): void => {
    this._controller.restorePendingState();
  };

  public override async scrollToBottom(): Promise<void> {
    await this.#chatbotRef.value?.updateComplete;
    this.#chatbotRef.value?.scrollToBottom({ behavior: 'instant' });
  }

  public override async sendMessage(message: string, files?: File[]): Promise<void> {
    await this.#chatbotRef.value?.sendMessage(message, files);
  }

  public override async clearMessages(): Promise<void> {
    await this._controller.clearMemory();
    this.#chatbotRef.value?.clearMessages();
  }

  public override getMessages(): ChatMessage[] {
    return this.#chatbotRef.value?.getMessages() ?? [];
  }

  public setExpanded(expanded: boolean): void {
    const chatbot = this.#chatbotRef.value;
    if (chatbot) {
      chatbot.expanded = expanded;
    }
  }

  public get expanded(): boolean {
    return this.#chatbotRef.value?.expanded ?? false;
  }

  public getThreadState(): ThreadState {
    return this.#chatbotRef.value?.getThreadState() ?? { messages: [] };
  }

  public setThreadState(state: ThreadState): void {
    this.#chatbotRef.value?.setThreadState(state);
  }

  get #errorStateContent(): TemplateResult {
    const error =
      this.#errorDetails ?? new ChatbotError(ChatbotErrorCode.CONFIG_INVALID, 'An unexpected error occurred');

    // prettier-ignore
    return html`
      <div class="error-state">
        <!-- <img class="error-graphic" src="https://cdn.forge.tylertech.com/v1/images/spot/error-spot.svg" alt="" /> -->
        <svg class="error-graphic" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 92 92"><defs><style>.cls-1,.cls-5{fill:none;}.cls-2{fill:#d0dbf4;fill-rule:evenodd;}.cls-3{fill:#fff;}.cls-4{fill:#fcbf12;}.cls-5{stroke:#586ab1;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-6{fill:#586ab1;}</style></defs><title>error-spot</title><rect class="cls-1" x="0.09" y="0.05" width="92" height="92"/><path class="cls-2" d="M46.1,82a36,36,0,1,0-36-36A36,36,0,0,0,46.1,82Z"/><path class="cls-3" d="M11.72,65.52,44.52,8.71a2.26,2.26,0,0,1,1.67-1,2.29,2.29,0,0,1,1.71.89L80.6,65.26a3.12,3.12,0,0,1,.23,2.64A2.37,2.37,0,0,1,79,69.09H14.18s-2,.17-2.73-.89A2.47,2.47,0,0,1,11.72,65.52Z"/><path class="cls-4" d="M17.22,69.54c-1.89,0-4.38.31-5.66-1.6-1.53-2.3.8-4.38,2-6.14L42.47,11.56c0-.07,1.07-1.74,1.12-1.81.85-1.28.35-1.61,2.59-1.61s2.07,1,2.92,2.17c.07.1.71,1.85.77,1.95L79,62c.91,1.59,2.53,3.81,1.33,6s-3,1.5-4.61,1.6c-.08,0-1.17-.21-1.25-.21l-56,.07Zm1.85-4.19Zm-3.16-2.46h0ZM21,62H71.41L46.22,18.4Z"/><path class="cls-5" d="M11.7,65.22,44.52,8.71a2.26,2.26,0,0,1,1.67-1,2.29,2.29,0,0,1,1.71.89L80.6,65.26a3.12,3.12,0,0,1,.23,2.64A2.37,2.37,0,0,1,79,69.09H14.18s-2,.17-2.73-.89C10.61,66.94,11.7,65.22,11.7,65.22Z"/><path class="cls-6" d="M46.24,29.77c2.75,0,3.62.95,3.28,3.62-.71,5.53-1.44,11.06-2.14,16.59-.1.78-.19,1.57-1.2,1.55s-1-.75-1.13-1.49Q44,41.75,42.91,33.45C42.55,30.67,43.37,29.78,46.24,29.77Z"/><path class="cls-6" d="M46.24,58.72a2.31,2.31,0,1,1,2.29-2.3A2.37,2.37,0,0,1,46.24,58.72Z"/></svg>
        <h2 class="error-title">${getErrorTitle(error.code)}</h2>
        <div class="error-message">${getErrorMessage(error)}</div>
      </div>
    `;
  }

  get #chatbotContent(): TemplateResult {
    const agentConfig = this._getAgentInfo();
    return html`
      <forge-ai-chatbot
        ${ref(this.#chatbotRef)}
        .showExpandButton=${this.showExpandButton}
        .showMinimizeButton=${this.showMinimizeButton}
        .minimizeIcon=${this.minimizeIcon}
        .adapter=${this._getAdapter()}
        .fileUpload=${agentConfig?.enableFileUpload ? 'on' : 'off'}
        .voiceInput=${this.voiceInput}
        .placeholder=${this.placeholder}
        .agentInfo=${this._getAgentInfo()}
        .titleText=${this._getTitleText() as string}
        .suggestions=${this._getSuggestions()}>
        ${agentConfig?.welcomeMessage
          ? html`<span slot="empty-state-heading">${agentConfig.welcomeMessage}</span>`
          : nothing}
        <span slot="empty-state-message"
          >Start a conversation by asking a question or describing what you'd like help with.</span
        >
      </forge-ai-chatbot>
    `;
  }

  public override render(): TemplateResult {
    const state = this._controller.state;

    if (state === 'error' && this.#errorDetails) {
      return this.#errorStateContent;
    }

    if (state === 'initializing' || state === 'pending') {
      return html`<div class="initializing-container">
        <forge-ai-spinner></forge-ai-spinner>
        <span class="initializing-message">Initializing...</span>
      </div>`;
    }

    return this.#chatbotContent;
  }
}
