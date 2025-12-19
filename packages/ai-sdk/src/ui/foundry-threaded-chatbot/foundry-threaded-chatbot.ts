import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import type { IFoundryChatbot } from '../foundry-base-chatbot.js';
import { FoundryChatbotComponent } from '../foundry-chatbot/foundry-chatbot.js';
import type { AiThreadsComponent, ChatMessage, FeatureToggle } from '@tylertech/forge-ai';
import '../foundry-chatbot';
import '@tylertech/forge-ai/ai-threads';

import styles from './foundry-threaded-chatbot.scss?inline';

export interface Thread {
  id: string;
  createdAt: string;
  updatedAt: string;
  messageCount?: number;
  title?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'foundry-threaded-chatbot': FoundryThreadedChatbotComponent;
  }

  interface HTMLElementEventMap {
    'foundry-threaded-chatbot-thread-changed': CustomEvent<{ threadId: string }>;
    'foundry-threaded-chatbot-thread-created': CustomEvent<{ threadId: string }>;
    'foundry-threaded-chatbot-thread-deleted': CustomEvent<{ threadId: string }>;
  }
}

export const FoundryThreadedChatbotComponentTagName: keyof HTMLElementTagNameMap = 'foundry-threaded-chatbot';

/**
 * @tag foundry-threaded-chatbot
 */
@customElement(FoundryThreadedChatbotComponentTagName)
export class FoundryThreadedChatbotComponent extends LitElement implements IFoundryChatbot {
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

  #threadsRef: Ref<AiThreadsComponent> = createRef();
  #foundryChatbotRef: Ref<FoundryChatbotComponent> = createRef();
  #currentThreadId?: string;
  #threadsCache: Thread[] = [];

  public get isInitialized(): boolean {
    return this.#foundryChatbotRef.value?.isInitialized ?? false;
  }

  public async sendMessage(message: string, files?: File[]): Promise<void> {
    return this.#foundryChatbotRef.value?.sendMessage(message, files);
  }

  public async clearMessages(): Promise<void> {
    await this.#foundryChatbotRef.value?.clearMessages();
  }

  public getMessages(): ChatMessage[] {
    return this.#foundryChatbotRef.value?.getMessages() ?? [];
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-threads ${ref(this.#threadsRef)}>
        <foundry-chatbot
          ${ref(this.#foundryChatbotRef)}
          .baseUrl=${this.baseUrl}
          .agentId=${this.agentId}
          .teamId=${this.teamId}
          .headers=${this.headers}
          .placeholder=${this.placeholder}
          .voiceInput=${this.voiceInput}
          .fileUpload=${this.fileUpload}></foundry-chatbot>
      </forge-ai-threads>
    `;
  }

  public async loadThread(threadId: string): Promise<void> {
    if (!this.baseUrl || (!this.agentId && !this.teamId)) {
      throw new Error('baseUrl and either agentId or teamId are required');
    }

    try {
      const url = this.teamId
        ? `${this.baseUrl}/api/teams/${this.teamId}/threads/${threadId}`
        : `${this.baseUrl}/api/agents/${this.agentId}/threads/${threadId}`;

      const response = await fetch(url, {
        credentials: 'include',
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`Failed to load thread: ${response.statusText}`);
      }

      this.#currentThreadId = threadId;
      this.#dispatchEvent('foundry-threaded-chatbot-thread-changed', { threadId });
    } catch (error) {
      this.#handleError(error as Error, 'thread-load');
      throw error;
    }
  }

  public async createThread(): Promise<string> {
    if (!this.baseUrl || (!this.agentId && !this.teamId)) {
      throw new Error('baseUrl and either agentId or teamId are required');
    }

    try {
      const url = this.teamId
        ? `${this.baseUrl}/api/teams/${this.teamId}/threads`
        : `${this.baseUrl}/api/agents/${this.agentId}/threads`;

      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...this.headers
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to create thread: ${response.statusText}`);
      }

      const data = await response.json();
      const threadId = data.id || data.threadId;

      this.#currentThreadId = threadId;
      this.#threadsCache = [];

      this.#dispatchEvent('foundry-threaded-chatbot-thread-created', { threadId });

      return threadId;
    } catch (error) {
      this.#handleError(error as Error, 'thread-create');
      throw error;
    }
  }

  public async deleteThread(threadId: string): Promise<void> {
    if (!this.baseUrl || (!this.agentId && !this.teamId)) {
      throw new Error('baseUrl and either agentId or teamId are required');
    }

    try {
      const url = this.teamId
        ? `${this.baseUrl}/api/teams/${this.teamId}/threads/${threadId}`
        : `${this.baseUrl}/api/agents/${this.agentId}/threads/${threadId}`;

      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`Failed to delete thread: ${response.statusText}`);
      }

      if (this.#currentThreadId === threadId) {
        this.#currentThreadId = undefined;
      }

      this.#threadsCache = [];

      this.#dispatchEvent('foundry-threaded-chatbot-thread-deleted', { threadId });
    } catch (error) {
      this.#handleError(error as Error, 'thread-delete');
      throw error;
    }
  }

  public async listThreads(): Promise<Thread[]> {
    if (!this.baseUrl || (!this.agentId && !this.teamId)) {
      throw new Error('baseUrl and either agentId or teamId are required');
    }

    if (this.#threadsCache.length > 0) {
      return this.#threadsCache;
    }

    try {
      const url = this.teamId
        ? `${this.baseUrl}/api/teams/${this.teamId}/threads`
        : `${this.baseUrl}/api/agents/${this.agentId}/threads`;

      const response = await fetch(url, {
        credentials: 'include',
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`Failed to list threads: ${response.statusText}`);
      }

      const data = await response.json();
      this.#threadsCache = Array.isArray(data) ? data : data.threads || [];

      return this.#threadsCache;
    } catch (error) {
      this.#handleError(error as Error, 'thread-list');
      throw error;
    }
  }

  #handleError(error: Error, type: string): void {
    console.error(`[FoundryThreadedChatbot] ${type} error:`, error);

    this.#dispatchEvent('foundry-chatbot-error', {
      error: error.message,
      type,
      details: error
    });
  }

  #dispatchEvent(type: string, detail?: unknown): void {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    });
    super.dispatchEvent(event);
  }

  public get currentThreadId(): string | undefined {
    return this.#currentThreadId;
  }
}
