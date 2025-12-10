import { createAgentAdapter, configureChatbot } from '../../src/index.js';
import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { AiChatbotComponent } from '@tylertech/forge-ai';
import '@tylertech/forge-ai/ai-chatbot';
import '@tylertech/forge-ai/ai-threads';

setupForgeComponents();

try {
  const adapter = await createAgentAdapter({
    agentId: DEFAULT_CONFIG.agentId,
    baseUrl: DEFAULT_CONFIG.baseUrl
  });

  const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
  configureChatbot(chatbot, adapter);

  console.log('Threads adapter created!', adapter);
  console.log('Agent config:', adapter.agentConfig);
} catch (error) {
  console.error('Failed to create threads adapter:', error);
}
