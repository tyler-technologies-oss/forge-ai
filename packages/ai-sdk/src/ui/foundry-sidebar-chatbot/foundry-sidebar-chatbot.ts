import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import type { IFoundryChatbot } from '../foundry-base-chatbot.js';
import { FoundryChatbotComponent } from '../foundry-chatbot/foundry-chatbot.js';
import type { AiSidebarChatComponent, ChatMessage, FeatureToggle } from '@tylertech/forge-ai';
import '../foundry-chatbot';
import '@tylertech/forge-ai/ai-sidebar-chat';

import styles from './foundry-sidebar-chatbot.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'foundry-sidebar-chatbot': FoundrySidebarChatbotComponent;
  }

  interface HTMLElementEventMap {
    'foundry-sidebar-chatbot-open': CustomEvent<void>;
    'foundry-sidebar-chatbot-close': CustomEvent<void>;
    'foundry-chatbot-ready': CustomEvent<{ adapter: unknown }>;
    'foundry-chatbot-error': CustomEvent<{ error: string; type: string; details?: unknown }>;
  }
}

const FoundrySidebarChatbotComponentTagName: keyof HTMLElementTagNameMap = 'foundry-sidebar-chatbot';

@customElement(FoundrySidebarChatbotComponentTagName)
export class FoundrySidebarChatbotComponent extends LitElement implements IFoundryChatbot {
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

  #sidebarChatRef: Ref<AiSidebarChatComponent> = createRef();
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
      <forge-ai-sidebar-chat
        ${ref(this.#sidebarChatRef)}
        ?open=${this.open}
        @forge-ai-sidebar-chat-open=${this.#handleOpen}
        @forge-ai-sidebar-chat-close=${this.#handleClose}
        @forge-ai-sidebar-chat-expand=${this.#handleExpand}
        @forge-ai-sidebar-chat-collapse=${this.#handleCollapse}>
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
          show-minimize-button
          minimize-icon="panel"></foundry-chatbot>
      </forge-ai-sidebar-chat>
    `;
  }

  #handleOpen(): void {
    this.open = true;
    this.#dispatchEvent('foundry-sidebar-chatbot-open');
  }

  #handleClose(): void {
    this.open = false;
    this.#dispatchEvent('foundry-sidebar-chatbot-close');
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
    this.#sidebarChatRef.value?.show();
  }

  public close(): void {
    this.#sidebarChatRef.value?.close();
  }

  public toggle(): void {
    this.#sidebarChatRef.value?.toggle();
  }
}
