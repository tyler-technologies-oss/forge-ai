import { LitElement, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { FoundryChatbotController } from './foundry-chatbot-controller.js';
import type { AgentAdapter, ChatMessage, FeatureToggle } from '@tylertech/forge-ai/ai-chatbot';
import type { MinimizeIconType } from '@tylertech/forge-ai/ai-chat-header';

export interface FoundryChatbotAgentInfo {
  name: string;
  description: string;
  identifier: string;
  version: string;
  model?: string;
  lastUpdated?: string;
  welcomeMessage?: string;
  enableFileUpload?: boolean;
  initialOpen?: boolean;
}

export interface IFoundryChatbot {
  baseUrl?: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
  placeholder?: string;
  voiceInput?: FeatureToggle;
  fileUpload?: FeatureToggle;

  sendMessage(message: string, files?: File[]): Promise<void>;
  clearMessages(): Promise<void>;
  getMessages(): ChatMessage[];
  readonly isInitialized: boolean;
}

export abstract class FoundryBaseChatbotComponent extends LitElement implements IFoundryChatbot {
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

  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  @property({ type: String, attribute: 'minimize-icon' })
  public minimizeIcon: MinimizeIconType = 'default';

  #controller: FoundryChatbotController;

  constructor() {
    super();
    this.#controller = new FoundryChatbotController(this, {
      onFilesUploaded: async (fileNames: string[]) => {
        const message = fileNames.length === 1
          ? `I uploaded a file: ${fileNames[0]}. Please analyze it.`
          : `I uploaded files: ${fileNames.join(', ')}. Please analyze them.`;
        await this.sendMessage(message);
      }
    });
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#controller.disconnect();
  }

  public override willUpdate(changed: PropertyValues): void {
    if (changed.has('baseUrl') || changed.has('agentId') || changed.has('teamId') || changed.has('headers')) {
      if (this.baseUrl && (this.agentId || this.teamId)) {
        this._setConfig({
          baseUrl: this.baseUrl,
          agentId: this.agentId,
          teamId: this.teamId,
          headers: this.headers
        });
      }
    }
    super.willUpdate(changed);
  }

  protected _setConfig(config: {
    baseUrl?: string;
    agentId?: string;
    teamId?: string;
    headers?: Record<string, string>;
  }): void {
    this.#controller.updateConfig(config);
  }

  protected _getAgentInfo(): FoundryChatbotAgentInfo | undefined {
    if (!this.#controller.agentConfig) {
      return undefined;
    }
    return {
      name: this.#controller.agentConfig.name ?? '',
      description: this.#controller.agentConfig.description ?? '',
      identifier: this.#controller.agentConfig.id ?? '',
      version: this.#controller.agentConfig.version ?? '',
      model: this.#controller.agentConfig.model?.model,
      lastUpdated: this.#controller.agentConfig.metadata?.updatedAt,
      welcomeMessage: this.#controller.agentConfig.chatExperience?.welcomeMessage,
      enableFileUpload: this.#controller.agentConfig.chatExperience?.enableFileUpload ?? false,
      initialOpen: this.#controller.agentConfig.chatExperience?.initialOpen ?? false
    };
  }

  protected _getTitleText(): string | undefined {
    return this.#controller.agentConfig?.name;
  }

  protected _getSuggestions(): Array<{ text: string; value: string }> | undefined {
    return this.#controller.agentConfig?.chatExperience?.sampleQuestions?.map((text: string) => ({
      text,
      value: text
    }));
  }

  protected _getAdapter(): AgentAdapter | undefined {
    return this.#controller.adapter ?? undefined;
  }

  public get isInitialized(): boolean {
    return this.#controller.initialized;
  }

  protected get _controller(): FoundryChatbotController {
    return this.#controller;
  }

  public abstract sendMessage(message: string, files?: File[]): Promise<void>;
  public abstract clearMessages(): Promise<void>;
  public abstract getMessages(): ChatMessage[];
}
