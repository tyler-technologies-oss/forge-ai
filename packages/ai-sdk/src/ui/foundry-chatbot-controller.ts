import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { checkAuthentication } from '../core/auth-manager.js';
import { loadAgentConfig } from '../core/config-loader.js';
import { ChatbotError, ChatbotErrorCode, isChatbotError } from '../core/error-codes.js';
import { setupFileRemoveHandler, setupFileUploadHandler } from '../core/file-upload.js';
import { FoundryAgentAdapter } from '../core/foundry-agent-adapter.js';
import { fetchMemory } from '../core/memory.js';
import { establishAnonymousSession } from '../core/session.js';
import { buildStorageKey, getItemWithExpiry, removeItem, setItemWithExpiry } from '../core/storage-utils.js';
import type { AgentUIConfig, AuthStatus, SessionInfo } from '../core/types.js';
import { FoundryBaseChatbotComponent } from './foundry-base-chatbot.js';
import type { ThreadState } from '@tylertech/forge-ai/ai-chatbot';

type InitState = 'pending' | 'initializing' | 'initialized' | 'error';

export interface FoundryChatbotControllerConfig {
  baseUrl?: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
}

export interface FoundryChatbotControllerCallbacks {
  onFilesUploaded?: (fileNames: string[]) => Promise<void>;
}

export class FoundryChatbotController implements ReactiveController {
  #host: ReactiveControllerHost & FoundryBaseChatbotComponent;
  #state: InitState = 'pending';
  #adapter: FoundryAgentAdapter | null = null;
  #agentConfig: AgentUIConfig | null = null;
  #authStatus: AuthStatus | null = null;
  #sessionInfo: SessionInfo | null = null;
  #initializing: Promise<void> | null = null;
  #config: FoundryChatbotControllerConfig = {};
  #callbacks: FoundryChatbotControllerCallbacks;
  #uploadedFileCount = 0;
  #pendingUploads = new Set<string>();
  #completedUploadNames: string[] = [];
  #stateStorageKey: string | null = null;
  #threadIdStorageKey: string | null = null;
  #isPersistenceEnabled = false;
  #pendingStateRestore: ThreadState | null = null;

  constructor(
    host: ReactiveControllerHost & FoundryBaseChatbotComponent,
    callbacks: FoundryChatbotControllerCallbacks = {}
  ) {
    this.#host = host;
    this.#callbacks = callbacks;
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
    await this.#host.clearMessages();

    if (this.#threadIdStorageKey) {
      removeItem(this.#threadIdStorageKey);
    }
    if (this.#stateStorageKey) {
      removeItem(this.#stateStorageKey);
    }

    this.#adapter?.disconnect();
    this.#adapter = null;
    this.#agentConfig = null;
    this.#authStatus = null;
    this.#sessionInfo = null;
    this.#state = 'pending';
    this.#initializing = null;
    this.#uploadedFileCount = 0;
    this.#pendingUploads.clear();
    this.#completedUploadNames = [];

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
      throw new ChatbotError(ChatbotErrorCode.CONFIG_INVALID, 'baseUrl and either agentId or teamId are required');
    }

    this.#authStatus = await checkAuthentication(this.#config);

    this.#agentConfig = await loadAgentConfig({ baseUrl, agentId, teamId, headers }, this.#authStatus);

    const isMemoryEnabled =
      this.#agentConfig?.memory?.sessionMemory && (this.#agentConfig?.memory.maxMessages ?? 0) > 0;
    if (isMemoryEnabled && (!this.#authStatus.isAuthenticated || !this.#authStatus.userDetails)) {
      this.#sessionInfo = await establishAnonymousSession(this.#config, this.#authStatus);
    }

    let restoredThreadId: string | undefined;
    if (isMemoryEnabled) {
      this.#isPersistenceEnabled = true;
      this.#threadIdStorageKey = buildStorageKey(teamId, agentId, 'thread');
      this.#stateStorageKey = buildStorageKey(teamId, agentId, 'state');

      restoredThreadId = getItemWithExpiry<string>(this.#threadIdStorageKey) ?? undefined;
      if (!restoredThreadId) {
        restoredThreadId = crypto.randomUUID();
      }
    } else {
      const threadKey = buildStorageKey(teamId, agentId, 'thread');
      const stateKey = buildStorageKey(teamId, agentId, 'state');
      removeItem(threadKey);
      removeItem(stateKey);
    }

    this.#adapter = new FoundryAgentAdapter(
      { baseUrl, agentId, teamId, headers },
      this.#agentConfig,
      this.#authStatus,
      this.#sessionInfo,
      restoredThreadId
    );

    if (this.#agentConfig.chatExperience?.enableFileUpload) {
      const getThreadId = (): string => {
        if (!this.#adapter) {
          throw new Error('Adapter not initialized');
        }
        return this.#adapter.threadId;
      };

      const uploadHandler = setupFileUploadHandler({
        baseUrl,
        agentId,
        teamId,
        getThreadId,
        headers,
        credentials: 'include',
        existingFileCount: this.#uploadedFileCount,
        onStart: (fileId: string) => {
          this.#pendingUploads.add(fileId);
        },
        onComplete: async (fileId: string, fileName: string) => {
          this.#uploadedFileCount++;
          this.#completedUploadNames.push(fileName);
          this.#pendingUploads.delete(fileId);

          if (this.#pendingUploads.size === 0 && this.#completedUploadNames.length > 0) {
            if (this.#callbacks.onFilesUploaded) {
              await this.#callbacks.onFilesUploaded([...this.#completedUploadNames]);
            }
            this.#completedUploadNames = [];
          }
        }
      });
      this.#adapter.onFileUpload(uploadHandler);

      const removeHandler = setupFileRemoveHandler({
        baseUrl,
        agentId,
        teamId,
        getThreadId,
        headers,
        credentials: 'include'
      });
      this.#adapter.onFileRemove(removeHandler);
    }

    if (this.#isPersistenceEnabled) {
      await this.#restoreThreadState();
    }
  }

  async #restoreThreadState(): Promise<void> {
    if (!this.#stateStorageKey || !this.#adapter) {
      return;
    }

    try {
      const state = getItemWithExpiry<ThreadState>(this.#stateStorageKey);
      if (state && state.messages?.length > 0) {
        this.#pendingStateRestore = state;
        return;
      }

      const userId = this.#authStatus?.userDetails?.id ?? this.#sessionInfo?.anonymousUserId;
      if (!userId) {
        return;
      }

      const { baseUrl, agentId, headers } = this.#config;
      if (!baseUrl || !agentId) {
        return;
      }

      const maxMessages = this.#agentConfig?.memory?.maxMessages ?? 10;
      const backendState = await fetchMemory({
        baseUrl,
        agentId,
        userId,
        maxMessages,
        headers,
        credentials: 'include'
      });

      if (backendState && backendState.messages?.length > 0) {
        this.#pendingStateRestore = backendState;
      }
    } catch (error) {
      console.warn('[FoundryChatbot] Failed to restore thread state:', error);
    }
  }

  public async restorePendingState(): Promise<void> {
    if (!this.#pendingStateRestore) {
      return;
    }

    this.#host.setThreadState?.(this.#pendingStateRestore);
    this.#dispatchEvent('foundry-chatbot-state-restored', { state: this.#pendingStateRestore });
    this.#pendingStateRestore = null;

    await this.#host.updateComplete;
    await this.#host.scrollToBottom?.();
  }

  public saveThreadState(): void {
    if (!this.#isPersistenceEnabled || !this.#stateStorageKey || !this.#adapter) {
      return;
    }

    try {
      if (this.#threadIdStorageKey) {
        const existingThreadId = getItemWithExpiry<string>(this.#threadIdStorageKey);
        if (!existingThreadId && this.#adapter.threadId) {
          setItemWithExpiry(this.#threadIdStorageKey, this.#adapter.threadId);
        }
      }

      const state = this.#host.getThreadState?.();
      if (state) {
        setItemWithExpiry(this.#stateStorageKey, state);
      }
    } catch (error) {
      console.warn('[FoundryChatbot] Failed to save thread state:', error);
    }
  }

  #handleError(error: Error, type: string): void {
    console.error(`[FoundryChatbot] ${type} error:`, error);

    const chatbotError = isChatbotError(error)
      ? error
      : new ChatbotError(ChatbotErrorCode.CONFIG_INVALID, error.message, error);

    this.#dispatchEvent('foundry-chatbot-error', {
      error: chatbotError,
      type
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

  public async clearMemory(): Promise<void> {
    if (!this.#adapter) {
      return;
    }

    if (this.#threadIdStorageKey) {
      removeItem(this.#threadIdStorageKey);
    }
    if (this.#stateStorageKey) {
      removeItem(this.#stateStorageKey);
    }

    try {
      if (this.#adapter.clearMemory) {
        await this.#adapter.clearMemory();
      }
    } catch (error) {
      console.error('[FoundryChatbot] Failed to clear conversation memory:', error);
    }
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
