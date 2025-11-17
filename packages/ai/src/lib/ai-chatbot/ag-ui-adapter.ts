import type { AiChatbotAdapter, ResponseEvent, MessageInput, AdapterMessageInput, ContextEntry } from './types.js';
import { generateId } from './utils.js';

export interface AgUiAdapterConfig {
  baseUrl: string;
  agentId: string;
  context?: Record<string, unknown>;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
}

/**
 * Transforms a key-value context object into an array of ContextEntry
 */
function transformContext(context: Record<string, unknown>): ContextEntry[] {
  return Object.entries(context).map(([key, value]) => ({
    description: `Client context: ${key}`,
    value: typeof value === 'string' ? value : JSON.stringify(value)
  }));
}

/**
 * Translates generic message input to adapter format
 */
function translateToAdapterInput(input: MessageInput, context?: ContextEntry[]): AdapterMessageInput {
  return {
    runId: generateId('run'),
    threadId: input.threadId,
    messages: input.messages,
    context,
    tools: input.tools
  };
}

/**
 * Creates an adapter for the AG-UI protocol
 */
export function createAgUiAdapter(config: AgUiAdapterConfig): AiChatbotAdapter {
  let eventCallback: ((event: ResponseEvent) => void) | null = null;
  let abortController: AbortController | null = null;

  return {
    async connect(): Promise<void> {},

    async disconnect(): Promise<void> {
      this.abort();
    },

    sendMessage(input: MessageInput): void {
      abortController = new AbortController();

      const context = config.context ? transformContext(config.context) : undefined;
      const adapterInput = translateToAdapterInput(input, context);
      const url = `${config.baseUrl}/${config.agentId}/ag-ui`;
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(config.headers || {})
      };

      fetch(url, {
        method: 'POST',
        headers,
        credentials: config.credentials || 'include',
        body: JSON.stringify(adapterInput),
        signal: abortController.signal
      })
        .then(async response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          if (!response.body) {
            throw new Error('Response body is null');
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                try {
                  const event = JSON.parse(data) as ResponseEvent;
                  if (eventCallback) {
                    eventCallback(event);
                  }
                } catch (e) {
                  console.error('Failed to parse SSE event:', e, data);
                }
              }
            }
          }
        })
        .catch(error => {
          if (error.name !== 'AbortError' && eventCallback) {
            eventCallback({
              type: 'error',
              error: error.message || 'Unknown error occurred'
            });
          }
        });
    },

    onEvent(callback: (event: ResponseEvent) => void): void {
      eventCallback = callback;
    },

    abort(): void {
      if (abortController) {
        abortController.abort();
        abortController = null;
      }
    }
  };
}
