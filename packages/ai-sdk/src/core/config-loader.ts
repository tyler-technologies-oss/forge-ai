import type { ChatbotConfig, AgentUIConfig, AuthStatus } from './types.js';
import { applyTemplateVariables } from './utils.js';

/**
 * Load agent configuration from the backend service.
 * Applies user-specific template variables to welcome messages.
 */
export async function loadAgentConfig(config: ChatbotConfig, authStatus: AuthStatus): Promise<AgentUIConfig> {
  const { agentId, teamId, baseUrl, credentials = 'include', headers = {} } = config;

  const url = teamId
    ? `${baseUrl}/api/team/${teamId}/team_ui_config`
    : `${baseUrl}/api/configurable-agents/${agentId}/agent_ui_config`;

  const authToken = localStorage.getItem('authToken');
  const fetchHeaders: HeadersInit = {
    ...headers
  };

  if (authToken) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    fetchHeaders['Authorization'] = `Bearer ${authToken}`;
  }

  try {
    const response = await fetch(url, {
      credentials,
      headers: fetchHeaders
    });

    if (!response.ok) {
      console.error(`Failed to fetch agent config: ${response.statusText}`);
      return {};
    }

    const agentConfig: AgentUIConfig = await response.json();

    if (agentConfig.chatExperience?.welcomeMessage) {
      if (authStatus.userDetails) {
        agentConfig.chatExperience.welcomeMessage = applyTemplateVariables(
          agentConfig.chatExperience.welcomeMessage,
          authStatus.userDetails
        );
      } else {
        agentConfig.chatExperience.welcomeMessage = 'Welcome! How can I assist you today?';
      }
    }

    return agentConfig;
  } catch (error) {
    console.error('Failed to load agent config:', error);
    return {};
  }
}
