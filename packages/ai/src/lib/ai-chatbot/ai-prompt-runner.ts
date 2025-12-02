import type { AgentAdapter } from './agent-adapter.js';
import type { ChatMessage, ToolCall } from './types.js';
import { generateId } from './utils.js';
import { ToolRegistry } from './tool-registry.js';

export interface AiPromptRunnerConfig {
  adapter: AgentAdapter;
  prompt: string;
  toolRegistry?: ToolRegistry;
  onStart?: (messageId: string) => void;
  onDelta?: (delta: string) => void;
  onComplete?: (message: ChatMessage) => void;
}

export interface AiPromptRunnerResult {
  message: ChatMessage;
  toolCalls: ToolCall[];
  success: boolean;
}

export class AiPromptRunner {
  private constructor() {}

  public static async run(config: AiPromptRunnerConfig): Promise<AiPromptRunnerResult> {
    const { adapter, toolRegistry, prompt, onStart, onDelta, onComplete } = config;

    if (!adapter.getState().isConnected) {
      await adapter.connect();
    }

    if (toolRegistry) {
      adapter.setTools(toolRegistry.getDefinitions());
    }

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content: prompt,
      timestamp: Date.now(),
      status: 'complete'
    };

    return new Promise<AiPromptRunnerResult>((resolve, reject) => {
      let currentAssistantMessage: Partial<ChatMessage> | null = null;
      const toolCalls: ToolCall[] = [];
      let resolved = false;
      const pendingToolExecutions = new Set<Promise<void>>();
      let runFinished = false;

      const tryFinish = (): void => {
        if (resolved || !runFinished || pendingToolExecutions.size > 0) {
          return;
        }
        resolved = true;

        if (currentAssistantMessage) {
          const finalMessage = {
            ...currentAssistantMessage,
            status: 'complete'
          } as ChatMessage;

          onComplete?.(finalMessage);

          resolve({
            message: finalMessage,
            toolCalls,
            success: true
          });
        }
      };

      const finishHandler = (): void => {
        runFinished = true;
        tryFinish();
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

        onStart?.(event.messageId);
      };

      const messageDeltaHandler = (event: { delta: string }): void => {
        if (currentAssistantMessage) {
          currentAssistantMessage.content = (currentAssistantMessage.content ?? '') + event.delta;
          onDelta?.(event.delta);
        }
      };

      adapter.onMessageStart(messageStartHandler);
      adapter.onMessageDelta(messageDeltaHandler);
      adapter.onRunFinished(finishHandler);
      adapter.onError(errorHandler);

      adapter.onToolCall(async event => {
        const execution = (async (): Promise<void> => {
          let result: unknown;

          const toolCall: ToolCall = {
            id: event.id,
            messageId: currentAssistantMessage?.id ?? '',
            name: event.name,
            args: event.args,
            status: 'executing'
          };
          toolCalls.push(toolCall);

          if (toolRegistry?.has(event.name)) {
            try {
              result = await toolRegistry.execute(event);
              toolCall.status = 'complete';
              toolCall.result = result;
            } catch (error) {
              const err = error as Error;
              result = { error: err.message };
              toolCall.status = 'error';
              toolCall.result = result;
            }
          } else {
            result = { error: `No handler for tool: ${event.name}` };
            toolCall.status = 'error';
            toolCall.result = result;
          }

          adapter.sendToolResult(event.id, result);
        })();

        pendingToolExecutions.add(execution);
        execution.finally(() => {
          pendingToolExecutions.delete(execution);
          tryFinish();
        });
      });

      adapter.sendMessage([userMessage]);
    });
  }
}
