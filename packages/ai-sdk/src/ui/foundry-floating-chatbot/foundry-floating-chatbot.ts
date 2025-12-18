import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import type { IFoundryChatbot } from '../foundry-base-chatbot.js';
import { FoundryChatbotComponent } from '../foundry-chatbot/foundry-chatbot.js';
import type { AiFloatingChatComponent, ChatMessage, FeatureToggle } from '@tylertech/forge-ai';
import '../foundry-chatbot';
import '@tylertech/forge-ai/ai-floating-chat';

import styles from './foundry-floating-chatbot.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'foundry-floating-chatbot': FoundryFloatingChatbotComponent;
  }

  interface HTMLElementEventMap {
    'foundry-floating-chatbot-open': CustomEvent<void>;
    'foundry-floating-chatbot-close': CustomEvent<void>;
  }
}

const FoundryFloatingChatbotComponentTagName: keyof HTMLElementTagNameMap = 'foundry-floating-chatbot';

/**
 * @tag foundry-floating-chatbot
 */
@customElement(FoundryFloatingChatbotComponentTagName)
export class FoundryFloatingChatbotComponent extends LitElement implements IFoundryChatbot {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: 'base-url' })
  public baseUrl?: string;

  @property({ attribute: 'agent-id' })
  public agentId?: string;

  @property({ attribute: 'team-id' })
  public teamId?: string;

  @property({ type: Object, attribute: false })
  public headers?: Record<string, string>;

  @property()
  public placeholder = 'Ask a question...';

  @property({ attribute: 'voice-input' })
  public voiceInput: FeatureToggle = 'on';

  @property({ attribute: 'file-upload' })
  public fileUpload: FeatureToggle = 'off';

  @property({ type: Boolean })
  public open = false;

  #floatingChatRef: Ref<AiFloatingChatComponent> = createRef();
  #foundryChatbotRef: Ref<FoundryChatbotComponent> = createRef();

  public get isInitialized(): boolean {
    return this.#foundryChatbotRef.value?.isInitialized ?? false;
  }

  public async sendMessage(message: string, files?: File[]): Promise<void> {
    return this.#foundryChatbotRef.value?.sendMessage(message, files);
  }

  public clearMessages(): void {
    this.#foundryChatbotRef.value?.clearMessages();
  }

  public getMessages(): ChatMessage[] {
    return this.#foundryChatbotRef.value?.getMessages() ?? [];
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-floating-chat
        ${ref(this.#floatingChatRef)}
        ?open=${this.open}
        @forge-ai-floating-chat-open=${this.#handleOpen}
        @forge-ai-floating-chat-close=${this.#handleClose}
        @forge-ai-floating-chat-expand=${this.#handleExpand}
        @forge-ai-floating-chat-collapse=${this.#handleCollapse}>
        <foundry-chatbot
          ${ref(this.#foundryChatbotRef)}
          .baseUrl=${this.baseUrl}
          .agentId=${this.agentId}
          .teamId=${this.teamId}
          .headers=${this.headers}
          .placeholder=${this.placeholder}
          .voiceInput=${this.voiceInput}
          .fileUpload=${this.fileUpload}
          show-expand-button
          show-minimize-button></foundry-chatbot>
      </forge-ai-floating-chat>
    `;
  }

  #handleOpen(): void {
    this.open = true;
    this.#dispatchEvent('foundry-floating-chatbot-open');
  }

  #handleClose(): void {
    this.open = false;
    this.#dispatchEvent('foundry-floating-chatbot-close');
  }

  #handleExpand(): void {
    this.#foundryChatbotRef.value?.setExpanded(true);
  }

  #handleCollapse(): void {
    this.#foundryChatbotRef.value?.setExpanded(false);
  }

  #dispatchEvent(type: string): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  public show(): void {
    this.#floatingChatRef.value?.show();
  }

  public close(): void {
    this.#floatingChatRef.value?.close();
  }

  public toggle(): void {
    this.#floatingChatRef.value?.toggle();
  }
}
