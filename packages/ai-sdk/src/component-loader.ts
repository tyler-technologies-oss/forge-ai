import type { ChatbotAPI, ChatbotConfig, AgentUIConfig } from './types.js';
import { resolveMountPoint, waitForDOMReady } from './utils.js';

type ValidatedChatbotConfig = ChatbotConfig & {
  baseUrl: string;
  agentId?: string;
  teamId?: string;
};

export async function loadComponent(config: ChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  const { chatViewType = 'floating' } = config;

  switch (chatViewType) {
    case 'floating':
      return await loadFloatingChat(config as ValidatedChatbotConfig, agentConfig);
    case 'sidebar':
      return await loadSidebarChat(config as ValidatedChatbotConfig, agentConfig);
    case 'threads':
      return await loadThreadsChat(config as ValidatedChatbotConfig, agentConfig);
    default:
      throw new Error(`Unknown chat view type: ${chatViewType}`);
  }
}

async function loadFloatingChat(config: ValidatedChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  await import('./ui/foundry-floating-chatbot/index.js');

  const element = document.createElement('foundry-floating-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.voiceInput = 'on';
  element.fileUpload = agentConfig.chatExperience?.enableFileUpload ? 'on' : 'off';
  element.open = config.initialOpen ?? agentConfig.chatExperience?.initialOpen ?? false;

  document.body.appendChild(element);

  if (config.floatingConfig?.showTriggerButton !== false) {
    await import('./ui/foundry-fab/index.js');
    const fab = document.createElement('foundry-fab');
    fab.target = 'foundry-floating-chatbot';
    fab.text = config.floatingConfig?.triggerButtonText;
    document.body.appendChild(fab);
  }

  await new Promise((resolve, reject) => {
    element.addEventListener('foundry-chatbot-ready', resolve, { once: true });
    element.addEventListener('foundry-chatbot-error', reject, { once: true });
  });

  return element as unknown as ChatbotAPI;
}

async function loadSidebarChat(config: ValidatedChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for sidebar chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  await import('./ui/foundry-sidebar-chatbot/index.js');

  const element = document.createElement('foundry-sidebar-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.voiceInput = 'on';
  element.fileUpload = agentConfig.chatExperience?.enableFileUpload ? 'on' : 'off';
  element.open = config.initialOpen ?? agentConfig.chatExperience?.initialOpen ?? false;

  mountElement.appendChild(element);

  await new Promise((resolve, reject) => {
    element.addEventListener('foundry-chatbot-ready', resolve, { once: true });
    element.addEventListener('foundry-chatbot-error', reject, { once: true });
  });

  return element as unknown as ChatbotAPI;
}

async function loadThreadsChat(config: ValidatedChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for threads chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  await import('./ui/foundry-threaded-chatbot/index.js');

  const element = document.createElement('foundry-threaded-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.voiceInput = 'on';
  element.fileUpload = agentConfig.chatExperience?.enableFileUpload ? 'on' : 'off';

  mountElement.appendChild(element);

  await new Promise((resolve, reject) => {
    element.addEventListener('foundry-chatbot-ready', resolve, { once: true });
    element.addEventListener('foundry-chatbot-error', reject, { once: true });
  });

  return element as unknown as ChatbotAPI;
}
