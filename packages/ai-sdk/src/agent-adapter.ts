import type { AiChatbotComponent, AgUiAdapter } from '@tylertech/forge-ai/ai-chatbot';
import type { AiFloatingChatComponent, AiSidebarChatComponent, AiThreadsComponent } from '@tylertech/forge-ai';
import { FoundryAgentAdapter } from './foundry-agent-adapter.js';
import { checkAuthentication } from './auth-manager.js';
import { loadAgentConfig } from './config-loader.js';
import { setupFileUploadHandler, setupFileRemoveHandler } from './file-upload.js';
import type { AgentUIConfig } from './types.js';

export interface ConfigureChatbotOptions {
  chatbot: AiChatbotComponent;
  adapter: AgUiAdapter | FoundryAgentAdapter;
  agentConfig?: AgentUIConfig;
  floating?: AiFloatingChatComponent;
  sidebar?: AiSidebarChatComponent;
  threads?: AiThreadsComponent;
}

/**
 * Creates and configures an instance of the FoundryAgentAdapter.
 * @param config Configuration options for creating the agent adapter.
 * @returns A promise that resolves to the configured FoundryAgentAdapter instance.
 */
export async function createAgentAdapter(config: {
  baseUrl: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
  skipAuth?: boolean;
}): Promise<FoundryAgentAdapter> {
  if (!config.baseUrl || (!config.agentId && !config.teamId)) {
    throw new Error('baseUrl and either agentId or teamId are required');
  }

  let authHeaders = config.headers || {};

  if (!config.skipAuth && config.agentId) {
    const authStatus = await checkAuthentication({
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      headers: authHeaders
    });

    if (authStatus.isAuthenticated) {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        authHeaders = { ...authHeaders, Authorization: `Bearer ${authToken}` };
      }
    }
  }

  const agentConfig = await loadAgentConfig(
    {
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      teamId: config.teamId,
      headers: authHeaders
    },
    { isAuthenticated: true }
  );

  const adapter = new FoundryAgentAdapter(
    {
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      teamId: config.teamId,
      headers: authHeaders
    },
    agentConfig
  );

  if (agentConfig.chatExperience?.enableFileUpload) {
    const handler = setupFileUploadHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      teamId: config.teamId,
      threadId: adapter.threadId,
      headers: authHeaders,
      credentials: 'include'
    });
    adapter.onFileUpload(handler);

    const removeHandler = setupFileRemoveHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      teamId: config.teamId,
      threadId: adapter.threadId,
      headers: authHeaders,
      credentials: 'include'
    });
    adapter.onFileRemove(removeHandler);
  }

  return adapter;
}

function configureFloatingChat(chatbot: AiChatbotComponent, floatingChat: AiFloatingChatComponent): void {
  chatbot.showExpandButton = true;
  chatbot.showMinimizeButton = true;

  floatingChat.addEventListener('forge-ai-floating-chat-expand', () => {
    chatbot.expanded = true;
  });
  floatingChat.addEventListener('forge-ai-floating-chat-collapse', () => {
    chatbot.expanded = false;
  });
}

function configureSidebarChat(chatbot: AiChatbotComponent, sidebarChat: AiSidebarChatComponent): void {
  chatbot.showExpandButton = true;
  chatbot.showMinimizeButton = true;
  chatbot.minimizeIcon = 'panel';

  sidebarChat.addEventListener('forge-ai-sidebar-chat-expand', () => {
    chatbot.expanded = true;
  });
  sidebarChat.addEventListener('forge-ai-sidebar-chat-collapse', () => {
    chatbot.expanded = false;
  });
}

function configureThreadsChat(_chatbot: AiChatbotComponent): void {
  // Currently, no specific configuration is needed for threads chat.
}

/**
 * Configures the chatbot component based on the agent configuration.
 * @param config Configuration options for the chatbot.
 */
export function configureChatbot(config: ConfigureChatbotOptions): void {
  const { chatbot, adapter } = config;
  const agentConfig = config.agentConfig ?? (adapter instanceof FoundryAgentAdapter ? adapter.agentConfig : undefined);

  chatbot.adapter = adapter;

  if (agentConfig) {
    if (agentConfig.name) {
      chatbot.titleText = agentConfig.name;
    }

    chatbot.agentInfo = {
      name: agentConfig.name,
      description: agentConfig.description,
      identifier: agentConfig.id,
      version: agentConfig.version,
      model: agentConfig.model?.model,
      lastUpdated: agentConfig.metadata?.updatedAt
    };

    if (agentConfig?.chatExperience) {
      const { chatExperience } = agentConfig;

      if (chatExperience.enableFileUpload !== undefined) {
        chatbot.fileUpload = chatExperience.enableFileUpload ? 'on' : 'off';
      }

      if (chatExperience.sampleQuestions) {
        chatbot.suggestions = chatExperience.sampleQuestions.map((text: string) => ({
          text,
          value: text
        }));
      }
    }
  }

  if (config.floating) {
    configureFloatingChat(chatbot, config.floating);
  }

  if (config.sidebar) {
    configureSidebarChat(chatbot, config.sidebar);
  }

  if (config.threads) {
    configureThreadsChat(chatbot);
  }
}
