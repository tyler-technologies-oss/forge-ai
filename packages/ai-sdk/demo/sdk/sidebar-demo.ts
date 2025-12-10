import { createAgentAdapter, configureChatbot } from '../../src/index.js';
import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { AiChatbotComponent, AiSidebarChatComponent } from '@tylertech/forge-ai';
import '@tylertech/forge-ai/ai-chatbot';
import '@tylertech/forge-ai/ai-sidebar-chat';

setupForgeComponents();

let sidebarChat: AiSidebarChatComponent | null = null;

try {
  const adapter = await createAgentAdapter({
    agentId: DEFAULT_CONFIG.agentId,
    baseUrl: DEFAULT_CONFIG.baseUrl
  });

  const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
  configureChatbot(chatbot, adapter);

  sidebarChat = document.getElementById('sidebar-chat') as AiSidebarChatComponent;
  sidebarChat.open = true;

  console.log('Sidebar adapter created!', adapter);
  console.log('Agent config:', adapter.agentConfig);
} catch (error) {
  console.error('Failed to create adapter:', error);
}

function showSidebarChat(): void {
  if (sidebarChat) {
    sidebarChat.open = true;
  }
}

function closeSidebarChat(): void {
  if (sidebarChat) {
    sidebarChat.open = false;
  }
}

document.getElementById('show-manual')?.addEventListener('click', showSidebarChat);
document.getElementById('close-manual')?.addEventListener('click', closeSidebarChat);
