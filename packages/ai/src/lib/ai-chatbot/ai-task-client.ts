import type { AiChatbotAdapterBase } from './adapter-base.js';
import type { ChatMessage } from './types.js';
import { generateId } from './utils.js';
import { ToolRegistry } from './tool-registry.js';

export interface AiTaskClientConfig {
  adapter: AiChatbotAdapterBase;
  toolRegistry: ToolRegistry;
  prompt: string;
}

export class AiTaskClient {
  private constructor() {}

  public static async execute(config: AiTaskClientConfig): Promise<ChatMessage>;
  public static async execute(
    adapter: AiChatbotAdapterBase,
    toolRegistry: ToolRegistry,
    prompt: string
  ): Promise<ChatMessage>;
  public static async execute(
    adapterOrConfig: AiChatbotAdapterBase | AiTaskClientConfig,
    toolRegistry?: ToolRegistry,
    prompt?: string
  ): Promise<ChatMessage> {
    const { adapter, toolRegistry: registry, prompt: taskPrompt } =
      'adapter' in adapterOrConfig
        ? adapterOrConfig
        : { adapter: adapterOrConfig, toolRegistry, prompt };

    if (!registry || !taskPrompt) {
      throw new Error('toolRegistry and prompt are required');
    }
    if (!adapter.getState().isConnected) {
      await adapter.connect();
    }

    adapter.registerTools(registry.getDefinitions());

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content: taskPrompt,
      timestamp: Date.now(),
      status: 'complete'
    };

    return new Promise<ChatMessage>((resolve, reject) => {
      let currentAssistantMessage: Partial<ChatMessage> | null = null;
      let resolved = false;

      const finishHandler = (): void => {
        if (resolved) {
          return;
        }
        resolved = true;

        if (currentAssistantMessage) {
          const finalMessage = {
            ...currentAssistantMessage,
            status: 'complete'
          } as ChatMessage;

          resolve(finalMessage);
        }
      };

      const errorHandler = (event: { message: string }): void => {
        if (resolved) {
          return;
        }
        resolved = true;
        reject(new Error(event.message));
      };

      const messageStartHandler = (event: { messageId: string }): void => {
        currentAssistantMessage = {
          id: event.messageId,
          role: 'assistant',
          content: '',
          timestamp: Date.now(),
          status: 'streaming'
        };
      };

      const messageDeltaHandler = (event: { delta: string }): void => {
        if (currentAssistantMessage) {
          currentAssistantMessage.content = (currentAssistantMessage.content ?? '') + event.delta;
        }
      };

      adapter.onMessageStart(messageStartHandler);
      adapter.onMessageDelta(messageDeltaHandler);
      adapter.onRunFinished(finishHandler);
      adapter.onError(errorHandler);

      adapter.onToolCall(async event => {
        let result: unknown;

        if (registry.has(event.name)) {
          try {
            result = await registry.execute(event);
          } catch (error) {
            const err = error as Error;
            result = { error: err.message };
          }
        } else {
          result = { error: `No handler for tool: ${event.name}` };
        }

        adapter.sendToolResult(event.id, result);
      });

      adapter.sendMessage([userMessage]);
    });
  }
}
