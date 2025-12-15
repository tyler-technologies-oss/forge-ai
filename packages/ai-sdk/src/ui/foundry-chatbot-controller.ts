import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { checkAuthentication } from '../auth-manager.js';
import { loadAgentConfig } from '../config-loader.js';
import { checkThirdPartyCookies } from '../cookie-checker.js';
import { setupFileRemoveHandler, setupFileUploadHandler } from '../file-upload.js';
import { FoundryAgentAdapter } from '../foundry-agent-adapter.js';
import type { AgentUIConfig } from '../types.js';
import { FoundryBaseChatbotComponent } from './foundry-base-chatbot.js';

type InitState = 'pending' | 'initializing' | 'initialized' | 'error';

export interface FoundryChatbotControllerConfig {
  baseUrl?: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
}

export class FoundryChatbotController implements ReactiveController {
  #host: ReactiveControllerHost & FoundryBaseChatbotComponent;
  #state: InitState = 'pending';
  #adapter: FoundryAgentAdapter | null = null;
  #agentConfig: AgentUIConfig | null = null;
  #initializing: Promise<void> | null = null;
  #config: FoundryChatbotControllerConfig = {};

  constructor(host: ReactiveControllerHost & FoundryBaseChatbotComponent) {
    this.#host = host;
    host.addController(this);
  }

  public hostConnected(): void {}

  public hostUpdate(): void {}

  public async updateConfig(config: FoundryChatbotControllerConfig): Promise<void> {
    const configChanged =
      config.baseUrl !== this.#config.baseUrl ||
      config.agentId !== this.#config.agentId ||
      config.teamId !== this.#config.teamId;

    this.#config = { ...config };

    if (configChanged && this.#state === 'initialized') {
      await this.#reinitialize();
      return;
    }

    if (this.#hasRequiredProps() && this.#state === 'pending') {
      this.#initialize();
    }
  }

  #hasRequiredProps(): boolean {
    return Boolean(this.#config.baseUrl && (this.#config.agentId || this.#config.teamId));
  }

  async #reinitialize(): Promise<void> {
    this.#host.clearMessages();

    this.#adapter?.disconnect();
    this.#adapter = null;
    this.#agentConfig = null;
    this.#state = 'pending';
    this.#initializing = null;

    await this.#initialize();
  }

  async #initialize(): Promise<void> {
    if (this.#initializing) {
      return this.#initializing;
    }

    this.#state = 'initializing';
    this.#host.requestUpdate();

    this.#initializing = this.#doInit()
      .then(() => {
        this.#state = 'initialized';
        this.#host.requestUpdate();
        this.#dispatchEvent('foundry-chatbot-ready', { adapter: this.#adapter });
      })
      .catch(err => {
        this.#handleError(err as Error, 'initialization');
        this.#state = 'error';
        this.#host.requestUpdate();
        throw err;
      });

    return this.#initializing;
  }

  async #doInit(): Promise<void> {
    const { baseUrl, agentId, teamId, headers } = this.#config;

    if (!baseUrl || (!agentId && !teamId)) {
      throw new Error('baseUrl and either agentId or teamId are required');
    }

    // Check for third-party cookies to ensure proper functionality
    const cookiesEnabled = await checkThirdPartyCookies();
    if (!cookiesEnabled) {
      const error = new Error(
        'Third-party cookies are disabled. Please enable cookies in your browser settings to use the Tyler AI chatbot.'
      );
      console.error(error);
      throw error;
    }

    // Check authentication status
    const authStatus = await checkAuthentication(this.#config);

    // Load agent configuration
    this.#agentConfig = await loadAgentConfig({ baseUrl, agentId, teamId, headers }, authStatus);

    this.#adapter = new FoundryAgentAdapter({ baseUrl, agentId, teamId, headers }, this.#agentConfig);

    if (this.#agentConfig.chatExperience?.enableFileUpload) {
      const uploadHandler = setupFileUploadHandler({
        baseUrl,
        agentId,
        teamId,
        threadId: this.#adapter.threadId,
        headers,
        credentials: 'include'
      });
      this.#adapter.onFileUpload(uploadHandler);

      const removeHandler = setupFileRemoveHandler({
        baseUrl,
        agentId,
        teamId,
        threadId: this.#adapter.threadId,
        headers,
        credentials: 'include'
      });
      this.#adapter.onFileRemove(removeHandler);
    }
  }

  #handleError(error: Error, type: string): void {
    console.error(`[FoundryChatbot] ${type} error:`, error);

    this.#dispatchEvent('foundry-chatbot-error', {
      error: error.message,
      type,
      details: error
    });
  }

  #dispatchEvent(type: string, detail: unknown): void {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    });
    this.#host.dispatchEvent(event);
  }

  public disconnect(): void {
    this.#adapter?.disconnect();
  }

  public get adapter(): FoundryAgentAdapter | null {
    return this.#adapter;
  }

  public get agentConfig(): AgentUIConfig | null {
    return this.#agentConfig;
  }

  public get initialized(): boolean {
    return this.#state === 'initialized';
  }

  public get state(): InitState {
    return this.#state;
  }
}
