import type { AgentAdapter, ErrorEvent, MessageDeltaEvent, MessageStartEvent, ToolCallEvent } from './agent-adapter.js';
import type { ChatMessage, HandlerContext, ToolCall, ToolDefinition } from './types.js';
import { generateId } from './utils.js';

export interface AiPromptRunnerConfig {
  adapter: AgentAdapter;
  prompt: string;
  tools?: ToolDefinition[];
  onStart?: (messageId: string) => void;
  onDelta?: (delta: string) => void;
  onComplete?: (message: ChatMessage) => void;
}

export interface AiPromptRunnerResult {
  message: ChatMessage;
  toolCalls: ToolCall[];
  success: boolean;
}

interface RunState {
  currentMessage: Partial<ChatMessage> | null;
  toolCalls: ToolCall[];
  pendingToolExecutions: Set<Promise<void>>;
  runFinished: boolean;
  resolved: boolean;
  resolve: (result: AiPromptRunnerResult) => void;
  reject: (error: Error) => void;
}

export class AiPromptRunner {
  private constructor() {}

  public static async run(config: AiPromptRunnerConfig): Promise<AiPromptRunnerResult> {
    const { adapter, tools, prompt, onStart, onDelta, onComplete } = config;

    await this.#ensureConnected(adapter);

    if (tools) {
      adapter.setTools(tools);
    }

    const userMessage = this.#createUserMessage(prompt);

    return this.#executePrompt(adapter, userMessage, tools, { onStart, onDelta, onComplete });
  }

  static #executePrompt(
    adapter: AgentAdapter,
    userMessage: ChatMessage,
    tools: ToolDefinition[] | undefined,
    callbacks: {
      onStart?: (messageId: string) => void;
      onDelta?: (delta: string) => void;
      onComplete?: (message: ChatMessage) => void;
    }
  ): Promise<AiPromptRunnerResult> {
    return new Promise<AiPromptRunnerResult>((resolve, reject) => {
      const state: RunState = {
        currentMessage: null,
        toolCalls: [],
        pendingToolExecutions: new Set(),
        runFinished: false,
        resolved: false,
        resolve,
        reject
      };

      adapter.onMessageStart(this.#createMessageStartHandler(state, callbacks.onStart));
      adapter.onMessageDelta(this.#createMessageDeltaHandler(state, callbacks.onDelta));
      adapter.onRunFinished(this.#createFinishHandler(state, callbacks.onComplete));
      adapter.onError(this.#createErrorHandler(state));
      adapter.onToolCall(this.#createToolCallHandler(adapter, tools, state));

      adapter.sendMessage([userMessage]);
    });
  }

  static async #ensureConnected(adapter: AgentAdapter): Promise<void> {
    if (!adapter.isConnected) {
      await adapter.connect();
    }
  }

  static #createUserMessage(prompt: string): ChatMessage {
    return {
      id: generateId('msg'),
      role: 'user',
      content: prompt,
      timestamp: Date.now(),
      status: 'complete'
    };
  }

  static #createMessageStartHandler(
    state: RunState,
    onStart?: (messageId: string) => void
  ): (event: MessageStartEvent) => void {
    return (event: MessageStartEvent): void => {
      state.currentMessage = {
        id: event.messageId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
        status: 'streaming'
      };

      onStart?.(event.messageId);
    };
  }

  static #createMessageDeltaHandler(
    state: RunState,
    onDelta?: (delta: string) => void
  ): (event: MessageDeltaEvent) => void {
    return (event: MessageDeltaEvent): void => {
      if (state.currentMessage) {
        state.currentMessage.content = (state.currentMessage.content ?? '') + event.delta;
        onDelta?.(event.delta);
      }
    };
  }

  static #createFinishHandler(state: RunState, onComplete?: (message: ChatMessage) => void): () => void {
    return (): void => {
      state.runFinished = true;
      this.#tryFinish(state, onComplete);
    };
  }

  static #createErrorHandler(state: RunState): (event: ErrorEvent) => void {
    return (event: ErrorEvent): void => {
      if (state.resolved) {
        return;
      }
      state.resolved = true;

      state.reject(new Error(event.message));
    };
  }

  static #createToolCallHandler(
    adapter: AgentAdapter,
    tools: ToolDefinition[] | undefined,
    state: RunState
  ): (event: ToolCallEvent) => Promise<void> {
    return async (event: ToolCallEvent): Promise<void> => {
      await this.#executeToolCall(event, tools, state, adapter);
    };
  }

  static #createToolResponse({ metadata }: { metadata?: Record<string, unknown> | void } = {}): Record<
    string,
    unknown
  > {
    return { metadata, success: true };
  }

  static async #executeToolCall(
    event: ToolCallEvent,
    tools: ToolDefinition[] | undefined,
    state: RunState,
    adapter: AgentAdapter
  ): Promise<void> {
    const execution = (async (): Promise<void> => {
      let result: unknown;

      const toolCall: ToolCall = {
        id: event.id,
        messageId: state.currentMessage?.id ?? '',
        name: event.name,
        args: event.args,
        status: 'executing'
      };
      state.toolCalls.push(toolCall);

      const toolDef = tools?.find(t => t.name === event.name);

      if (toolDef?.handler) {
        try {
          const context: HandlerContext = {
            args: event.args,
            toolCallId: event.id,
            toolName: event.name,
            signal: undefined
          };
          const metadata = await toolDef.handler(context);
          result = this.#createToolResponse({ metadata });
        } catch (error) {
          const err = error as Error;
          result = { error: err.message };
          toolCall.status = 'error';
          toolCall.result = result;
          adapter.sendToolResult(event.id, result, []);
          return;
        }
      } else {
        result = this.#createToolResponse();
      }

      toolCall.status = 'complete';
      toolCall.result = result;
      adapter.sendToolResult(event.id, result, []);
    })();

    state.pendingToolExecutions.add(execution);
    execution.finally(() => {
      state.pendingToolExecutions.delete(execution);
      this.#tryFinish(state);
    });
  }

  static #tryFinish(state: RunState, onComplete?: (message: ChatMessage) => void): void {
    if (state.resolved || !state.runFinished || state.pendingToolExecutions.size > 0) {
      return;
    }
    state.resolved = true;

    if (state.currentMessage) {
      const finalMessage = this.#buildSuccessResult(state);
      onComplete?.(finalMessage);
      state.resolve({
        message: finalMessage,
        toolCalls: state.toolCalls,
        success: true
      });
    } else {
      const result = this.#buildEmptyResult(state.toolCalls);
      state.resolve(result);
    }
  }

  static #buildSuccessResult(state: RunState): ChatMessage {
    return {
      ...state.currentMessage,
      status: 'complete'
    } as ChatMessage;
  }

  static #buildEmptyResult(toolCalls: ToolCall[]): AiPromptRunnerResult {
    return {
      message: {
        id: generateId('msg'),
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
        status: 'complete'
      },
      toolCalls,
      success: true
    };
  }
}
