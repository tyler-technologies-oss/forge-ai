import type { ChatbotConfig, AgentUIConfig, ChatbotAPI } from './types.js';
import { resolveMountPoint, waitForDOMReady } from './utils.js';

export async function loadComponent(config: ChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  const { chatViewType = 'floating' } = config;

  switch (chatViewType) {
    case 'floating':
      return await loadFloatingChat(config, agentConfig);
    case 'sidebar':
      return await loadSidebarChat(config, agentConfig);
    case 'threads':
      return await loadThreadsChat(config, agentConfig);
    default:
      throw new Error(`Unknown chat view type: ${chatViewType}`);
  }
}

async function loadFloatingChat(config: ChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  const [_, { AgUiAdapter, AiPromptRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-floating-chat'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.fileUploadCallback = config.fileUploadHandler;
  }

  const element = document.createElement('forge-ai-floating-chat');
  element.adapter = adapter;
  element.enableFileUpload = agentConfig.chatExperience?.enableFileUpload ?? false;
  element.placeholder = 'Ask a question...';
  element.suggestions = agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }));

  document.body.appendChild(element);
  element.open = true;

  return createAPI(element, adapter, AiPromptRunner);
}

async function loadSidebarChat(config: ChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for sidebar chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  const [_, { AgUiAdapter, AiPromptRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-sidebar-chat'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.fileUploadCallback = config.fileUploadHandler;
  }

  const element = document.createElement('forge-ai-sidebar-chat');
  element.adapter = adapter;
  element.enableFileUpload = agentConfig.chatExperience?.enableFileUpload ?? false;
  element.placeholder = 'Ask a question...';
  element.suggestions = agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }));

  mountElement.appendChild(element);
  element.open = true;

  return createAPI(element, adapter, AiPromptRunner);
}

async function loadThreadsChat(config: ChatbotConfig, _agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for threads chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  const [_, { AgUiAdapter, AiPromptRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-threads'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.fileUploadCallback = config.fileUploadHandler;
  }

  await adapter.connect();

  const element = document.createElement('forge-ai-threads');

  mountElement.appendChild(element);

  return createAPI(element, adapter, AiPromptRunner);
}

function createAPI(element: HTMLElement, adapter: any, promptRunner: any): ChatbotAPI {
  return {
    show() {
      if ('show' in element && typeof element.show === 'function') {
        element.show();
      } else if ('open' in element) {
        element.open = true;
      }
    },
    close() {
      if ('close' in element && typeof element.close === 'function') {
        element.close();
      } else if ('open' in element) {
        element.open = false;
      }
    },
    toggle() {
      if ('toggle' in element && typeof element.toggle === 'function') {
        element.toggle();
      } else if ('open' in element) {
        element.open = !element.open;
      }
    },
    async sendMessage(message: string, files?: File[]) {
      const chatbot = element.shadowRoot?.querySelector('forge-ai-chatbot');
      if (chatbot && 'sendMessage' in chatbot && typeof chatbot.sendMessage === 'function') {
        await chatbot.sendMessage(message, files);
      }
    },
    clearMessages() {
      const chatbot = element.shadowRoot?.querySelector('forge-ai-chatbot');
      if (chatbot && 'clearMessages' in chatbot && typeof chatbot.clearMessages === 'function') {
        chatbot.clearMessages();
      }
    },
    getMessages() {
      const chatbot = element.shadowRoot?.querySelector('forge-ai-chatbot');
      if (chatbot && 'getMessages' in chatbot && typeof chatbot.getMessages === 'function') {
        return chatbot.getMessages();
      }
      return [];
    },
    adapter,
    promptRunner,
    element,
    destroy() {
      adapter.disconnect();
      element.remove();
    }
  };
}
