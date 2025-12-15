import { setupForgeComponents, DEFAULT_CONFIG } from './shared.js';
import type { FoundryFloatingChatbotComponent } from '../../src/ui/foundry-floating-chatbot';
import '../../src/ui/foundry-floating-chatbot';
import '../../src/ui/foundry-fab';

setupForgeComponents();

const urlParams = new URLSearchParams(window.location.search);
const initialOpen = urlParams.get('initialOpen') === 'true';

const floatingChatbot = document.getElementById('floating-chatbot') as FoundryFloatingChatbotComponent;
floatingChatbot.baseUrl = DEFAULT_CONFIG.baseUrl;
floatingChatbot.agentId = DEFAULT_CONFIG.agentId;
floatingChatbot.voiceInput = 'on';
floatingChatbot.fileUpload = 'off';
floatingChatbot.open = initialOpen;

function showFloatingChat(): void {
  floatingChatbot?.show();
}

function closeFloatingChat(): void {
  floatingChatbot?.close();
}

function toggleFloatingChat(): void {
  floatingChatbot?.toggle();
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
