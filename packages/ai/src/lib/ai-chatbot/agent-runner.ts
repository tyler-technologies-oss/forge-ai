import type { AgentAdapter, ErrorEvent, MessageDeltaEvent, MessageStartEvent, ToolCallEvent } from './agent-adapter.js';
import type { ChatMessage, HandlerContext, ToolCall, ToolDefinition } from './types.js';
import { SubscriptionManager } from './event-emitter.js';
import { generateId } from './utils.js';

export interface AgentRunnerConfig {
  /** The adapter instance that handles communication with the AI model */
  adapter: AgentAdapter;
  /** The user prompt to send to the agent */
  prompt: string;
  /** Optional tools the agent can call during execution */
  tools?: ToolDefinition[];
  /** Execution mode: 'one-shot' stops after first response, 'multi-turn' allows tool usage loops. @default 'one-shot' */
  mode?: 'one-shot' | 'multi-turn';
  /** Maximum conversation turns in multi-turn mode to prevent infinite loops. @default 20 */
  maxTurns?: number;
  /** Callback fired when agent starts generating a new message */
  onStart?: (messageId: string) => void;
  /** Callback fired for each text chunk as it streams in */
  onDelta?: (delta: string) => void;
  /** Callback fired when agent requests a tool call */
  onToolCall?: (toolCall: ToolCall) => void;
  /** Callback fired when execution completes with final result */
  onComplete?: (result: AgentRunnerResult) => void;
}

export interface AgentRunnerResult {
  /** Complete message history including user, assistant, and tool messages */
  messages: ChatMessage[];
  /** The final assistant message returned by the agent */
  finalMessage: ChatMessage;
  /** All tool calls executed during the conversation */
  toolCalls: ToolCall[];
  /** Number of conversation turns completed */
  turns: number;
  /** Whether execution completed successfully without errors */
  success: boolean;
  /** Reason execution stopped: 'text-response' (natural completion), 'max-turns' (hit turn limit), 'error' (failed), or 'one-shot-complete' (single turn mode) */
  stoppedReason: 'text-response' | 'max-turns' | 'error' | 'one-shot-complete';
}

interface RunState {
  mode: 'one-shot' | 'multi-turn';
  maxTurns: number;
  turns: number;
  messages: ChatMessage[];
  currentMessage: Partial<ChatMessage> | null;
  toolCalls: ToolCall[];
  toolResultMessages: Map<string, ChatMessage>;
  pendingToolExecutions: Set<Promise<void>>;
  runFinished: boolean;
  hasTextResponse: boolean;
  hasErrors: boolean;
  resolved: boolean;
  subscriptions: SubscriptionManager;
  onToolCall?: (toolCall: ToolCall) => void;
  resolve: (result: AgentRunnerResult) => void;
  reject: (error: Error) => void;
}

export class AgentRunner {
  private constructor() {}

  public static async run(config: AgentRunnerConfig): Promise<AgentRunnerResult> {
    const {
      adapter,
      tools,
      prompt,
      mode = 'one-shot',
      maxTurns = 20,
      onStart,
      onDelta,
      onToolCall,
      onComplete
    } = config;

    await this.#ensureConnected(adapter);

    if (tools) {
      adapter.setTools(tools);
    }

    const userMessage = this.#createUserMessage(prompt);

    return this.#executePrompt(adapter, userMessage, tools, mode, maxTurns, {
      onStart,
      onDelta,
      onToolCall,
      onComplete
    });
  }

  static #executePrompt(
    adapter: AgentAdapter,
    userMessage: ChatMessage,
    tools: ToolDefinition[] | undefined,
    mode: 'one-shot' | 'multi-turn',
    maxTurns: number,
    callbacks: {
      onStart?: (messageId: string) => void;
      onDelta?: (delta: string) => void;
      onToolCall?: (toolCall: ToolCall) => void;
      onComplete?: (result: AgentRunnerResult) => void;
    }
  ): Promise<AgentRunnerResult> {
    return new Promise<AgentRunnerResult>((resolve, reject) => {
      const state: RunState = {
        mode,
        maxTurns,
        turns: 0,
        messages: [userMessage],
        currentMessage: null,
        toolCalls: [],
        toolResultMessages: new Map(),
        pendingToolExecutions: new Set(),
        runFinished: false,
        hasTextResponse: false,
        hasErrors: false,
        resolved: false,
        subscriptions: new SubscriptionManager(),
        onToolCall: callbacks.onToolCall,
        resolve,
        reject
      };

      state.subscriptions.add(
        adapter.onMessageStart(this.#createMessageStartHandler(state, callbacks.onStart)),
        adapter.onMessageDelta(this.#createMessageDeltaHandler(state, callbacks.onDelta)),
        adapter.onRunFinished(this.#createFinishHandler(state, callbacks.onComplete)),
        adapter.onError(this.#createErrorHandler(state)),
        adapter.onToolCall(this.#createToolCallHandler(adapter, tools, state))
      );

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
      state.turns++;
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
        if (event.delta.trim().length > 0) {
          state.hasTextResponse = true;
        }
        onDelta?.(event.delta);
      }
    };
  }

  static #createFinishHandler(state: RunState, onComplete?: (result: AgentRunnerResult) => void): () => void {
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
      state.subscriptions.unsubscribe();

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

  static #buildMessageHistory(state: RunState): ChatMessage[] {
    const messages = [...state.messages];

    if (state.currentMessage) {
      const assistantMessage: ChatMessage = {
        ...state.currentMessage,
        status: 'complete',
        toolCalls: state.toolCalls.filter(tc => tc.messageId === state.currentMessage?.id)
      } as ChatMessage;
      messages.push(assistantMessage);
    }

    for (const toolCall of state.toolCalls) {
      if (toolCall.status === 'complete' || toolCall.status === 'error') {
        let toolMessage = state.toolResultMessages.get(toolCall.id);
        if (!toolMessage) {
          toolMessage = {
            id: generateId('tool'),
            role: 'tool',
            content: JSON.stringify(toolCall.result),
            timestamp: Date.now(),
            status: 'complete',
            toolCallId: toolCall.id
          };
          state.toolResultMessages.set(toolCall.id, toolMessage);
        }
        messages.push(toolMessage);
      }
    }

    return messages;
  }

  static async #executeToolCall(
    event: ToolCallEvent,
    tools: ToolDefinition[] | undefined,
    state: RunState,
    adapter: AgentAdapter
  ): Promise<void> {
    const execution = (async (): Promise<void> => {
      let result: unknown;

      const toolDef = tools?.find(t => t.name === event.name);

      const toolCall: ToolCall = {
        id: event.id,
        messageId: state.currentMessage?.id ?? '',
        name: event.name,
        args: event.args,
        status: 'executing',
        type: toolDef ? 'client' : 'agent'
      };
      state.toolCalls.push(toolCall);
      state.onToolCall?.(toolCall);

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
          state.hasErrors = true;

          if (state.mode === 'multi-turn') {
            state.runFinished = false;
            state.hasTextResponse = false;
            const messages = this.#buildMessageHistory(state);
            adapter.sendToolResult(event.id, result, messages);
          }
          return;
        }
      } else {
        result = this.#createToolResponse();
      }

      toolCall.status = 'complete';
      toolCall.result = result;

      if (state.mode === 'multi-turn') {
        state.runFinished = false;
        state.hasTextResponse = false;
        const messages = this.#buildMessageHistory(state);
        adapter.sendToolResult(event.id, result, messages);
      }
    })();

    state.pendingToolExecutions.add(execution);
    execution.finally(() => {
      state.pendingToolExecutions.delete(execution);
      this.#tryFinish(state);
    });
  }

  static #tryFinish(state: RunState, onComplete?: (result: AgentRunnerResult) => void): void {
    if (state.resolved || state.pendingToolExecutions.size > 0) {
      return;
    }

    const shouldFinish =
      (state.mode === 'one-shot' && state.runFinished) ||
      (state.mode === 'multi-turn' && state.runFinished && (state.hasTextResponse || state.turns >= state.maxTurns));

    if (!shouldFinish) {
      return;
    }

    state.resolved = true;
    state.subscriptions.unsubscribe();

    const messages = this.#buildMessageHistory(state);
    const finalMessage = state.currentMessage ? this.#buildSuccessResult(state) : this.#buildEmptyMessage();

    let stoppedReason: AgentRunnerResult['stoppedReason'];
    if (state.hasErrors) {
      stoppedReason = 'error';
    } else if (state.mode === 'one-shot') {
      stoppedReason = 'one-shot-complete';
    } else if (state.turns >= state.maxTurns) {
      stoppedReason = 'max-turns';
    } else {
      stoppedReason = 'text-response';
    }

    const result: AgentRunnerResult = {
      messages,
      finalMessage,
      toolCalls: state.toolCalls,
      turns: state.turns,
      success: !state.hasErrors,
      stoppedReason
    };

    onComplete?.(result);
    state.resolve(result);
  }

  static #buildSuccessResult(state: RunState): ChatMessage {
    return {
      ...state.currentMessage,
      status: 'complete'
    } as ChatMessage;
  }

  static #buildEmptyMessage(): ChatMessage {
    return {
      id: generateId('msg'),
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'complete'
    };
  }
}
