import type { AiChatbotComponent } from '../../lib/ai-chatbot';

interface AgentConfig {
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

export async function loadAgentConfig(chatbot: AiChatbotComponent, baseUrl: string, agentId: string): Promise<void> {
  const url = `${baseUrl}/api/configurable-agents/${agentId}/agent_ui_config`;

  try {
    const response = await fetch(url, { credentials: 'omit' });

    if (!response.ok) {
      console.error(`Failed to fetch agent config: ${response.statusText}`);
      return;
    }

    const config: AgentConfig = await response.json();

    if (config.name) {
      chatbot.titleText = config.name;
      chatbot.agentInfo = {
        name: config.name,
        description: config.description
      };
    }

    if (config.chatExperience?.sampleQuestions?.length) {
      chatbot.suggestions = config.chatExperience.sampleQuestions.map(q => ({ text: q, value: q }));
    }

    if (config.chatExperience?.disclaimerText !== undefined) {
      chatbot.disclaimerText = config.chatExperience.disclaimerText;
    }

    if (config.chatExperience?.placeholder) {
      chatbot.placeholder = config.chatExperience.placeholder;
    }

    if (config.chatExperience?.welcomeMessageTitle) {
      const heading = document.createElement('span');
      heading.slot = 'empty-state-heading';
      heading.textContent = config.chatExperience.welcomeMessageTitle;
      chatbot.appendChild(heading);
    }

    if (config.chatExperience?.welcomeMessage) {
      const message = document.createElement('span');
      message.slot = 'empty-state-message';
      message.textContent = config.chatExperience.welcomeMessage;
      chatbot.appendChild(message);
    }
  } catch (error) {
    console.error('Failed to load agent config:', error);
  }
}
