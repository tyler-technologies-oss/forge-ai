import type { ChatbotAPI, ChatbotConfig } from './types.js';
import { resolveMountPoint, waitForDOMReady } from './utils.js';

type ValidatedChatbotConfig = ChatbotConfig & {
  baseUrl: string;
  agentId?: string;
  teamId?: string;
};

export async function initChatbot(config: Partial<ChatbotConfig> = {}): Promise<ChatbotAPI> {
  try {
    const windowConfig = window.tylerAIConfig;
    config = { ...windowConfig, ...config };

    if (!config.baseUrl) {
      throw new Error('baseUrl is required');
    }

    if (!config.agentId && !config.teamId) {
      throw new Error('Either agentId or teamId is required');
    }

    const api = await loadComponent(config);

    window.dispatchEvent(new CustomEvent('tyler-ai-chatbot-ready', { detail: { api } }));
    config.onReady?.(api);

    return api;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error('Failed to initialize Tyler AI chatbot:', err);
    config.onError?.(err);
    throw err;
  }
}

async function loadComponent(config: ChatbotConfig): Promise<ChatbotAPI> {
  const { chatViewType = 'floating' } = config;

  switch (chatViewType) {
    case 'floating':
      return await loadFloatingChat(config as ValidatedChatbotConfig);
    case 'sidebar':
      return await loadSidebarChat(config as ValidatedChatbotConfig);
    case 'threads':
      return await loadThreadsChat(config as ValidatedChatbotConfig);
    default:
      throw new Error(`Unknown chat view type: ${chatViewType}`);
  }
}

async function loadFloatingChat(config: ValidatedChatbotConfig): Promise<ChatbotAPI> {
  await import('../ui/foundry-floating-chatbot/index.js');

  const element = document.createElement('foundry-floating-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.open = config.initialOpen ?? false;

  document.body.appendChild(element);

  if (config.floatingConfig?.showTriggerButton !== false) {
    await import('../ui/foundry-fab/index.js');
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

async function loadSidebarChat(config: ValidatedChatbotConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for sidebar chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  await import('../ui/foundry-sidebar-chatbot/index.js');

  const element = document.createElement('foundry-sidebar-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.voiceInput = 'on';
  element.open = config.initialOpen ?? false;

  mountElement.appendChild(element);

  await new Promise((resolve, reject) => {
    element.addEventListener('foundry-chatbot-ready', resolve, { once: true });
    element.addEventListener('foundry-chatbot-error', reject, { once: true });
  });

  return element as unknown as ChatbotAPI;
}

async function loadThreadsChat(config: ValidatedChatbotConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for threads chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  await import('../ui/foundry-threaded-chatbot/index.js');

  const element = document.createElement('foundry-threaded-chatbot');
  element.baseUrl = config.baseUrl;
  element.agentId = config.agentId;
  element.teamId = config.teamId;
  element.headers = config.headers;
  element.voiceInput = 'on';

  mountElement.appendChild(element);

  await new Promise((resolve, reject) => {
    element.addEventListener('foundry-chatbot-ready', resolve, { once: true });
    element.addEventListener('foundry-chatbot-error', reject, { once: true });
  });

  return element as unknown as ChatbotAPI;
}
