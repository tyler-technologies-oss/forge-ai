import { AiFloatingChatComponent, AiSidebarChatComponent, AiThreadsComponent } from '@tylertech/forge-ai';
import type { AgentRunner, AgUiAdapter, AiChatbotComponent, FileUploadEvent } from '@tylertech/forge-ai/ai-chatbot';
import { setupFileUploadHandler } from './file-upload.js';
import type {
  AgentUIConfig,
  ChatbotAPI,
  ChatbotConfig,
  FloatingChatAPI,
  SidebarChatAPI,
  ThreadsChatAPI
} from './types.js';
import { resolveMountPoint, waitForDOMReady } from './utils.js';

interface AgentInfoConfig {
  name?: string;
  description?: string;
  identifier?: string;
  version?: string;
  model?: string;
  lastUpdated?: string;
}

interface OpenableElement {
  show(): void;
  close(): void;
  toggle(): void;
  open: boolean;
}

function createAdapterInstance(
  AgentAdapterClass: typeof AgUiAdapter,
  config: {
    baseUrl: string;
    agentId?: string;
    headers?: Record<string, string>;
    fileUploadHandler?: (event: FileUploadEvent) => Promise<void> | void;
  }
): AgUiAdapter {
  const adapter = new AgentAdapterClass({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.onFileUpload(config.fileUploadHandler);
  }

  return adapter;
}

function createChatbotElement(config: {
  adapter: AgUiAdapter;
  enableFileUpload?: boolean;
  placeholder?: string;
  suggestions?: Array<{ text: string; value: string }>;
}): AiChatbotComponent {
  const chatbot = document.createElement('forge-ai-chatbot');
  chatbot.adapter = config.adapter;
  chatbot.enableFileUpload = config.enableFileUpload ?? false;
  chatbot.placeholder = config.placeholder ?? 'Ask a question...';
  chatbot.suggestions = config.suggestions;
  return chatbot;
}

function createAgentInfo(agentConfig: AgentUIConfig): AgentInfoConfig | undefined {
  if (
    !agentConfig.name &&
    !agentConfig.description &&
    !agentConfig.version &&
    !agentConfig.model?.model &&
    !agentConfig.id &&
    !agentConfig.metadata?.updatedAt
  ) {
    return undefined;
  }

  return {
    name: agentConfig.name,
    description: agentConfig.description,
    identifier: agentConfig.id,
    version: agentConfig.version,
    model: agentConfig.model?.model,
    lastUpdated: agentConfig.metadata?.updatedAt
  };
}

function createFabElement(floatingChat: AiFloatingChatComponent): HTMLElement {
  const fabElement = document.createElement('forge-ai-fab');
  fabElement.style.position = 'absolute';
  fabElement.style.bottom = '16px';
  fabElement.style.right = '16px';
  fabElement.style.zIndex = '1000';
  fabElement.style.display = floatingChat.open ? 'none' : 'block';

  fabElement.addEventListener('click', () => {
    floatingChat.toggle();
  });

  floatingChat.addEventListener('forge-ai-floating-chat-open', () => {
    fabElement.style.display = 'none';
  });

  floatingChat.addEventListener('forge-ai-floating-chat-close', () => {
    fabElement.style.display = 'block';
  });

  return fabElement;
}

function createBaseChatbotAPI<T extends typeof AgentRunner>(
  chatbot: AiChatbotComponent,
  element: AiFloatingChatComponent | AiSidebarChatComponent | AiThreadsComponent,
  adapter: AgUiAdapter,
  agentRunner: T
): ChatbotAPI {
  return {
    async sendMessage(message: string, files?: File[]): Promise<void> {
      await chatbot.sendMessage(message, files);
    },
    clearMessages(): void {
      chatbot.clearMessages();
    },
    getMessages() {
      return chatbot.getMessages();
    },
    adapter,
    agentRunner,
    element,
    destroy(): void {
      adapter.disconnect();
      element.remove();
    }
  };
}

function createOpenableMethods(element: OpenableElement): OpenableElement {
  return {
    show(): void {
      element.show();
    },
    close(): void {
      element.close();
    },
    toggle(): void {
      element.toggle();
    },
    get open(): boolean {
      return element.open;
    }
  };
}

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
  const [_, __, { AgUiAdapter, AgentRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-floating-chat'),
    import('@tylertech/forge-ai/ai-fab'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = createAdapterInstance(AgUiAdapter, {
    baseUrl: config.baseUrl,
    agentId: config.agentId,
    headers: config.headers,
    fileUploadHandler: config.fileUploadHandler
  });

  const chatbot = createChatbotElement({
    adapter,
    enableFileUpload: agentConfig.chatExperience?.enableFileUpload,
    suggestions: agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }))
  });

  const agentInfo = createAgentInfo(agentConfig);
  if (agentInfo) {
    chatbot.agentInfo = agentInfo;
  }

  const floatingChatElement = document.createElement('forge-ai-floating-chat');
  floatingChatElement.appendChild(chatbot);
  floatingChatElement.open = config.initialOpen ?? false;

  document.body.appendChild(floatingChatElement);

  if (agentConfig.chatExperience?.enableFileUpload) {
    const handler = setupFileUploadHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId as string,
      threadId: adapter.threadId,
      headers: config.headers,
      credentials: 'include'
    });
    adapter.onFileUpload(handler);
  }

  let fabElement: HTMLElement | undefined;

  if (config.showTriggerButton !== false) {
    fabElement = createFabElement(floatingChatElement);
    document.body.appendChild(fabElement);
  }

  return {
    ...createBaseChatbotAPI(chatbot, floatingChatElement, adapter, AgentRunner),
    ...createOpenableMethods(floatingChatElement),
    fabElement,
    destroy(): void {
      adapter.disconnect();
      floatingChatElement.remove();
      fabElement?.remove();
    }
  } satisfies FloatingChatAPI;
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

  const [_, { AgUiAdapter, AgentRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-sidebar-chat'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = createAdapterInstance(AgUiAdapter, {
    baseUrl: config.baseUrl,
    agentId: config.agentId,
    headers: config.headers,
    fileUploadHandler: config.fileUploadHandler
  });

  const chatbot = createChatbotElement({
    adapter,
    enableFileUpload: agentConfig.chatExperience?.enableFileUpload,
    suggestions: agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }))
  });

  const agentInfo = createAgentInfo(agentConfig);
  if (agentInfo) {
    chatbot.agentInfo = agentInfo;
  }

  const sidebarChatElement = document.createElement('forge-ai-sidebar-chat');
  sidebarChatElement.appendChild(chatbot);
  sidebarChatElement.open = true;

  mountElement.appendChild(sidebarChatElement);

  if (agentConfig.chatExperience?.enableFileUpload) {
    const handler = setupFileUploadHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId as string,
      threadId: adapter.threadId,
      headers: config.headers,
      credentials: 'include'
    });
    adapter.onFileUpload(handler);
  }

  return {
    ...createBaseChatbotAPI(chatbot, sidebarChatElement, adapter, AgentRunner),
    ...createOpenableMethods(sidebarChatElement)
  } satisfies SidebarChatAPI;
}

async function loadThreadsChat(config: ChatbotConfig, agentConfig: AgentUIConfig): Promise<ChatbotAPI> {
  if (!config.mountPoint) {
    throw new Error('mountPoint is required for threads chat');
  }

  await waitForDOMReady();

  const mountElement = resolveMountPoint(config.mountPoint);
  if (!mountElement) {
    throw new Error(`Mount point not found: ${config.mountPoint}`);
  }

  const [_, { AgUiAdapter, AgentRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-threads'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = createAdapterInstance(AgUiAdapter, {
    baseUrl: config.baseUrl,
    agentId: config.agentId,
    headers: config.headers,
    fileUploadHandler: config.fileUploadHandler
  });

  const chatbot = createChatbotElement({
    adapter,
    enableFileUpload: agentConfig.chatExperience?.enableFileUpload,
    suggestions: agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }))
  });

  const agentInfo = createAgentInfo(agentConfig);
  if (agentInfo) {
    chatbot.agentInfo = agentInfo;
  }

  chatbot.showExpandButton = true;

  const threadsElement = document.createElement('forge-ai-threads');
  threadsElement.appendChild(chatbot);

  mountElement.appendChild(threadsElement);

  if (agentConfig.chatExperience?.enableFileUpload) {
    const handler = setupFileUploadHandler({
      baseUrl: config.baseUrl,
      agentId: config.agentId as string,
      threadId: adapter.threadId,
      headers: config.headers,
      credentials: 'include'
    });
    adapter.onFileUpload(handler);
  }

  return {
    ...createBaseChatbotAPI(chatbot, threadsElement, adapter, AgentRunner)
  } satisfies ThreadsChatAPI;
}
