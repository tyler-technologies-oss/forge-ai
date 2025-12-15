import { html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { FoundryBaseChatbotComponent } from '../foundry-base-chatbot.js';
import type { AiChatbotComponent, ChatMessage } from '@tylertech/forge-ai/ai-chatbot';
import '@tylertech/forge-ai/ai-chatbot';

import styles from './foundry-chatbot.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'foundry-chatbot': FoundryChatbotComponent;
  }

  interface HTMLElementEventMap {
    'foundry-chatbot-ready': CustomEvent<{ adapter: unknown }>;
    'foundry-chatbot-error': CustomEvent<{ error: string; type: string; details?: unknown }>;
  }
}

export const FoundryChatbotComponentTagName: keyof HTMLElementTagNameMap = 'foundry-chatbot';

@customElement(FoundryChatbotComponentTagName)
export class FoundryChatbotComponent extends FoundryBaseChatbotComponent {
  public static override styles = unsafeCSS(styles);

  #chatbotRef: Ref<AiChatbotComponent> = createRef();

  public override async sendMessage(message: string, files?: File[]): Promise<void> {
    const chatbot = this.#chatbotRef.value;
    if (chatbot) {
      await chatbot.sendMessage(message, files);
    }
  }

  public override clearMessages(): void {
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

  public override render(): TemplateResult {
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
}
