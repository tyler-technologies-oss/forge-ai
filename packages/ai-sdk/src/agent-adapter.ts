import type { AiChatbotComponent } from '@tylertech/forge-ai/ai-chatbot';
import { FoundryAgentAdapter } from './foundry-agent-adapter.js';
import { checkAuthentication } from './auth-manager.js';
import { loadAgentConfig } from './config-loader.js';
import { setupFileUploadHandler } from './file-upload.js';

/**
 * Creates and configures an instance of the FoundryAgentAdapter.
 * @param config Configuration options for creating the agent adapter.
 * @returns A promise that resolves to the configured FoundryAgentAdapter instance.
 */
export async function createAgentAdapter(config: {
  baseUrl: string;
  agentId: string;
  headers?: Record<string, string>;
  skipAuth?: boolean;
}): Promise<FoundryAgentAdapter> {
  if (!config.baseUrl || !config.agentId) {
    throw new Error('baseUrl and agentId are required');
  }

  let authHeaders = config.headers || {};

  if (!config.skipAuth) {
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
      headers: authHeaders
    },
    { isAuthenticated: true }
  );

  const adapter = new FoundryAgentAdapter(
    {
      url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
      headers: authHeaders
    },
    agentConfig
  );

  if (agentConfig.chatExperience?.enableFileUpload) {
    const handler = setupFileUploadHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId,
      threadId: adapter.threadId,
      headers: authHeaders,
      credentials: 'include'
    });
    adapter.onFileUpload(handler);
  }

  return adapter;
}

/**
 * Configures the chatbot component based on the agent configuration.
 * @param chatbot A reference to the chatbot component element.
 * @param adapter The agent adapter instance.
 */
export function configureChatbot(chatbot: AiChatbotComponent, adapter: FoundryAgentAdapter): void {
  const agentConfig = adapter.agentConfig;

  chatbot.adapter = adapter;

  if (!agentConfig.chatExperience) {
    return;
  }

  const { chatExperience } = agentConfig;

  if (chatExperience.enableFileUpload !== undefined) {
    chatbot.enableFileUpload = chatExperience.enableFileUpload;
  }

  if (chatExperience.sampleQuestions) {
    chatbot.suggestions = chatExperience.sampleQuestions.map(text => ({
      text,
      value: text
    }));
  }

  if (agentConfig.name || agentConfig.description) {
    chatbot.agentInfo = {
      name: agentConfig.name,
      description: agentConfig.description,
      identifier: agentConfig.id,
      version: agentConfig.version,
      model: agentConfig.model?.model,
      lastUpdated: agentConfig.metadata?.updatedAt
    };
  }
}
