import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { FoundrySidebarChatbotComponent } from '../../src/ui/foundry-sidebar-chatbot';
import '../../src/ui/foundry-sidebar-chatbot';

setupForgeComponents();

const sidebarChatbot = document.getElementById('sidebar-chatbot') as FoundrySidebarChatbotComponent;
sidebarChatbot.baseUrl = DEFAULT_CONFIG.baseUrl;
sidebarChatbot.agentId = DEFAULT_CONFIG.agentId;
sidebarChatbot.voiceInput = 'on';
sidebarChatbot.fileUpload = 'off';
sidebarChatbot.open = true;

function showSidebarChat(): void {
  if (sidebarChatbot) {
    sidebarChatbot.open = true;
  }
}

function closeSidebarChat(): void {
  if (sidebarChatbot) {
    sidebarChatbot.open = false;
  }
}

document.getElementById('show-manual')?.addEventListener('click', showSidebarChat);
document.getElementById('close-manual')?.addEventListener('click', closeSidebarChat);
