import type { ChatbotConfig, AgentUIConfig, ChatbotAPI } from './types.js';
import { resolveMountPoint, waitForDOMReady } from './utils.js';

function setupFileUploadHandler(
  chatbot: HTMLElement,
  config: ChatbotConfig,
  agentId?: string,
  threadId?: string
): void {
  if (!agentId || !threadId) {
    return;
  }

  chatbot.addEventListener('forge-ai-chatbot-file-attached', async (event: Event) => {
    const detail = (event as CustomEvent).detail;
    const { file, updateProgress, markComplete, markError, onAbort } = detail;
    const controller = new AbortController();

    onAbort(() => controller.abort());

    try {
      const formData = new FormData();
      formData.append('file', file);

      const uploadUrl = `${config.baseUrl}/api/agents/${agentId}/threads/${threadId}/upload`;
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: config.headers || {},
        signal: controller.signal
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Upload failed: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      if (!reader) {
        throw new Error('Response body is not readable');
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.type === 'progress' && data.progress !== undefined) {
                updateProgress(data.progress);
              } else if (data.type === 'complete') {
                const { file_metadata, file_id } = data.file;
                const uploadedFile = {
                  fileId: file_id,
                  fileName: file_metadata.fileName,
                  fileType: file_metadata.fileType,
                  fileSize: file_metadata.fileSize,
                  uploadedAt: data.file.uploadedAt
                };
                markComplete(uploadedFile);
              } else if (data.type === 'error') {
                throw new Error(data.error || 'Upload failed');
              }
            } catch (parseError) {
              console.error('Failed to parse SSE message:', parseError);
            }
          }
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      markError(error instanceof Error ? error.message : 'Upload failed');
    }
  });
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

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.onFileUpload(config.fileUploadHandler);
  }

  const element = document.createElement('forge-ai-floating-chat');
  element.adapter = adapter;
  element.enableFileUpload = agentConfig.chatExperience?.enableFileUpload ?? false;
  element.placeholder = 'Ask a question...';
  element.suggestions = agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }));

  if (
    agentConfig.name ||
    agentConfig.description ||
    agentConfig.version ||
    agentConfig.model?.model ||
    agentConfig.id ||
    agentConfig.metadata?.updatedAt
  ) {
    element.agentInfo = {
      name: agentConfig.name,
      description: agentConfig.description,
      identifier: agentConfig.id,
      version: agentConfig.version,
      model: agentConfig.model?.model,
      lastUpdated: agentConfig.metadata?.updatedAt
    };
  }

  document.body.appendChild(element);
  element.open = config.initialOpen ?? false;

  const chatbot = element.shadowRoot?.querySelector('forge-ai-chatbot');
  if (chatbot && !config.fileUploadHandler) {
    setupFileUploadHandler(chatbot as HTMLElement, config, config.agentId, adapter.threadId);
  }

  let fabElement: HTMLElement | undefined;

  if (config.showTriggerButton !== false) {
    fabElement = document.createElement('forge-ai-fab');
    fabElement.style.position = 'absolute';
    fabElement.style.bottom = '16px';
    fabElement.style.right = '16px';
    fabElement.style.zIndex = '1000';

    fabElement.style.display = element.open ? 'none' : 'block';

    fabElement.addEventListener('click', () => {
      element.toggle();
    });

    element.addEventListener('forge-ai-floating-chat-open', () => {
      fabElement!.style.display = 'none';
    });

    element.addEventListener('forge-ai-floating-chat-close', () => {
      fabElement!.style.display = 'block';
    });

    document.body.appendChild(fabElement);
  }

  return createAPI({ element, adapter, agentRunner: AgentRunner, fabElement });
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

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.onFileUpload(config.fileUploadHandler);
  }

  const element = document.createElement('forge-ai-sidebar-chat');
  element.adapter = adapter;
  element.enableFileUpload = agentConfig.chatExperience?.enableFileUpload ?? false;
  element.placeholder = 'Ask a question...';
  element.suggestions = agentConfig.chatExperience?.sampleQuestions?.map(text => ({ text, value: text }));

  if (
    agentConfig.name ||
    agentConfig.description ||
    agentConfig.version ||
    agentConfig.model?.model ||
    agentConfig.id ||
    agentConfig.metadata?.updatedAt
  ) {
    element.agentInfo = {
      name: agentConfig.name,
      description: agentConfig.description,
      identifier: agentConfig.id,
      version: agentConfig.version,
      model: agentConfig.model?.model,
      lastUpdated: agentConfig.metadata?.updatedAt
    };
  }

  mountElement.appendChild(element);
  element.open = true;

  const chatbot = element.shadowRoot?.querySelector('forge-ai-chatbot');
  if (chatbot && !config.fileUploadHandler) {
    setupFileUploadHandler(chatbot as HTMLElement, config, config.agentId, adapter.threadId);
  }

  return createAPI({ element, adapter, agentRunner: AgentRunner });
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

  const [_, { AgUiAdapter, AgentRunner }] = await Promise.all([
    import('@tylertech/forge-ai/ai-threads'),
    import('@tylertech/forge-ai/ai-chatbot')
  ]);

  const adapter = new AgUiAdapter({
    url: `${config.baseUrl}/api/agents/${config.agentId}/ag-ui`,
    headers: config.headers
  });

  if (config.fileUploadHandler) {
    adapter.onFileUpload(config.fileUploadHandler);
  }

  await adapter.connect();

  const element = document.createElement('forge-ai-threads');

  mountElement.appendChild(element);

  return createAPI({ element, adapter, agentRunner: AgentRunner });
}

interface CreateAPIOptions {
  element: HTMLElement;
  adapter: any;
  agentRunner: any;
  fabElement?: HTMLElement;
}

function createAPI({ element, adapter, agentRunner, fabElement }: CreateAPIOptions): ChatbotAPI {
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
    isOpen() {
      return 'open' in element ? (element as any).open : false;
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
    agentRunner,
    element,
    destroy() {
      adapter.disconnect();
      element.remove();
      fabElement?.remove();
    }
  };
}
