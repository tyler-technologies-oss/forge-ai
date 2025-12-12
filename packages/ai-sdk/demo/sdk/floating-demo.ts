import { createAgentAdapter, configureChatbot } from '../../src/index.js';
import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { AiChatbotComponent, AiFloatingChatComponent, AiFabComponent } from '@tylertech/forge-ai';
import '@tylertech/forge-ai/ai-chatbot';
import '@tylertech/forge-ai/ai-floating-chat';
import '@tylertech/forge-ai/ai-fab';

setupForgeComponents();

const urlParams = new URLSearchParams(window.location.search);
const initialOpen = urlParams.get('initialOpen') === 'true';

let floatingChat: AiFloatingChatComponent | null = null;
let fab: AiFabComponent | null = null;

try {
  const adapter = await createAgentAdapter({
    agentId: DEFAULT_CONFIG.agentId,
    baseUrl: DEFAULT_CONFIG.baseUrl
  });

  const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
  configureChatbot(chatbot, adapter);
  chatbot.titleText = adapter.agentConfig.name;

  floatingChat = document.getElementById('floating-chat') as AiFloatingChatComponent;
  fab = document.getElementById('fab') as AiFabComponent;

  if (initialOpen) {
    floatingChat.open = true;
  }

  fab.addEventListener('click', () => {
    floatingChat?.toggle();
  });

  floatingChat.addEventListener('forge-ai-floating-chat-open', () => {
    if (fab) fab.style.display = 'none';
  });

  floatingChat.addEventListener('forge-ai-floating-chat-close', () => {
    if (fab) fab.style.display = 'block';
  });

  if (floatingChat.open && fab) {
    fab.style.display = 'none';
  }

  console.log('Floating chat adapter created!', adapter);
  console.log('Agent config:', adapter.agentConfig);
} catch (error) {
  console.error('Failed to initialize floating chat:', error);
}

function showFloatingChat(): void {
  floatingChat?.show();
}

function closeFloatingChat(): void {
  floatingChat?.close();
}

function toggleFloatingChat(): void {
  floatingChat?.toggle();
}

function toggleInitialOpen(): void {
  const currentUrl = new URL(window.location.href);
  const currentValue = currentUrl.searchParams.get('initialOpen') === 'true';
  if (currentValue) {
    currentUrl.searchParams.delete('initialOpen');
  } else {
    currentUrl.searchParams.set('initialOpen', 'true');
  }
  window.location.href = currentUrl.toString();
}

document.getElementById('show-floating')?.addEventListener('click', showFloatingChat);
document.getElementById('close-floating')?.addEventListener('click', closeFloatingChat);
document.getElementById('toggle-floating')?.addEventListener('click', toggleFloatingChat);
document.getElementById('toggle-initial-open')?.addEventListener('click', toggleInitialOpen);
