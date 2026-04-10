export interface AgentConfig {
  name?: string;
  description?: string;
  chatExperience?: {
    sampleQuestions?: string[];
    disclaimerText?: string;
    placeholder?: string;
    welcomeMessageTitle?: string;
    welcomeMessage?: string;
  };
}

export async function loadAgentConfig(baseUrl: string, agentId: string): Promise<AgentConfig | null> {
  const url = `${baseUrl}/api/configurable-agents/${agentId}/agent_ui_config`;
  try {
    const response = await fetch(url, { credentials: 'omit' });
    if (!response.ok) {
      console.error(`Failed to fetch agent config: ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to load agent config:', error);
    return null;
  }
}

