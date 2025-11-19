import type { AgUiAdapter } from './ag-ui-adapter.js';
import type { AgUiAdapterConfig } from './ag-ui-adapter.js';
import { AgUiAdapter as AgUiAdapterClass } from './ag-ui-adapter.js';
import type { ChatMessage, ToolDefinition } from './types.js';
import type { ToolCallEvent } from './adapter-base.js';
import { generateId } from './utils.js';
import { ToolRegistry } from './tool-registry.js';

export interface SerializedConversation {
  messages: ChatMessage[];
  threadId: string;
  timestamp: number;
}

export type MessageUpdateCallback = (message: ChatMessage, isStreaming: boolean) => void;
export type ToolRequestCallback = (event: ToolCallEvent) => Promise<unknown>;

export class AgUiConversation {
  readonly #adapter: AgUiAdapter;
  readonly #history: ChatMessage[] = [];
  readonly #toolRegistry: ToolRegistry | null = null;
  #currentAssistantMessage: Partial<ChatMessage> | null = null;
  #messageUpdateCallback: MessageUpdateCallback | null = null;
  #toolRequestCallback: ToolRequestCallback | null = null;

  constructor(
    config: AgUiAdapterConfig & { tools?: ToolDefinition[]; threadId?: string },
    toolRegistry?: ToolRegistry
  ) {
    const { tools, threadId, ...adapterConfig } = config;
    this.#adapter = new AgUiAdapterClass(adapterConfig, threadId ?? generateId('thread'));
    this.#toolRegistry = toolRegistry ?? null;

    if (tools && this.#toolRegistry) {
      this.#adapter.registerTools(tools);
    } else if (tools) {
      this.#adapter.registerTools(tools);
    } else if (this.#toolRegistry) {
      this.#adapter.registerTools(this.#toolRegistry.getDefinitions());
    }

    this.#setupCallbacks();
  }

  public static async create(
    config: AgUiAdapterConfig & { tools?: ToolDefinition[]; threadId?: string },
    toolRegistry?: ToolRegistry
  ): Promise<AgUiConversation> {
    const conversation = new AgUiConversation(config, toolRegistry);
    await conversation.#adapter.connect();
    return conversation;
  }

  public static deserialize(
    data: SerializedConversation,
    config: AgUiAdapterConfig,
    toolRegistry?: ToolRegistry
  ): AgUiConversation {
    const conversation = new AgUiConversation({ ...config, threadId: data.threadId }, toolRegistry);
    conversation.#history.push(...data.messages);
    return conversation;
  }

  public get adapter(): AgUiAdapter {
    return this.#adapter;
  }

  public get messages(): readonly ChatMessage[] {
    return this.#history;
  }

  public onMessageUpdate(callback: MessageUpdateCallback): void {
    this.#messageUpdateCallback = callback;
  }

  public onToolRequest(callback: ToolRequestCallback): void {
    this.#toolRequestCallback = callback;
  }

  public async send(content: string): Promise<ChatMessage> {
    const userMessage: ChatMessage = {
      id: generateId('msg'),
      role: 'user',
      content,
      timestamp: Date.now(),
      status: 'complete'
    };

    this.#history.push(userMessage);

    const sendableMessages = this.#history.filter(
      msg => msg.role === 'user' || msg.role === 'assistant' || msg.role === 'tool'
    );
    this.#adapter.sendMessage(sendableMessages);

    return new Promise((resolve, reject) => {
      const cleanup = (): void => {
        this.#adapter.onMessageEnd(() => {});
        this.#adapter.onError(() => {});
      };

      this.#adapter.onMessageEnd(() => {
        if (this.#currentAssistantMessage) {
          const finalMessage = {
            ...this.#currentAssistantMessage,
            status: 'complete'
          } as ChatMessage;

          const existingIndex = this.#history.findIndex(m => m.id === finalMessage.id);
          if (existingIndex >= 0) {
            this.#history[existingIndex] = finalMessage;
          }

          this.#messageUpdateCallback?.(finalMessage, false);
          this.#currentAssistantMessage = null;
          cleanup();
          resolve(finalMessage);
        }
      });

      this.#adapter.onError(event => {
        cleanup();
        reject(new Error(event.message));
      });
    });
  }

  public serialize(): SerializedConversation {
    return {
      messages: [...this.#history],
      threadId: this.#adapter.threadId,
      timestamp: Date.now()
    };
  }

  public clear(): void {
    this.#history.length = 0;
    this.#currentAssistantMessage = null;
  }

  async #setupCallbacks(): Promise<void> {
    this.#adapter.onMessageStart(event => {
      this.#currentAssistantMessage = {
        id: event.messageId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
        status: 'streaming'
      };

      const message = this.#currentAssistantMessage as ChatMessage;
      this.#history.push(message);
      this.#messageUpdateCallback?.(message, true);
    });

    this.#adapter.onMessageDelta(event => {
      if (this.#currentAssistantMessage) {
        this.#currentAssistantMessage.content = (this.#currentAssistantMessage.content ?? '') + event.delta;

        const existingIndex = this.#history.findIndex(m => m.id === event.messageId);
        if (existingIndex >= 0) {
          this.#history[existingIndex] = {
            ...this.#currentAssistantMessage,
            status: 'streaming'
          } as ChatMessage;
        }

        this.#messageUpdateCallback?.(this.#currentAssistantMessage as ChatMessage, true);
      }
    });

    this.#adapter.onToolCall(async event => {
      let result: unknown;

      if (this.#toolRegistry && this.#toolRegistry.has(event.name)) {
        try {
          result = await this.#toolRegistry.execute(event);
        } catch (error) {
          const err = error as Error;
          result = { error: err.message };
        }
      } else if (this.#toolRequestCallback) {
        try {
          result = await this.#toolRequestCallback(event);
        } catch (error) {
          const err = error as Error;
          result = { error: err.message };
        }
      } else {
        result = { error: `No handler for tool: ${event.name}` };
      }

      const toolMessage: ChatMessage = {
        id: generateId('tool'),
        role: 'tool',
        content: JSON.stringify(result),
        timestamp: Date.now(),
        status: 'complete'
      };

      this.#history.push(toolMessage);
      this.#adapter.sendToolResult(event.id, result);
    });
  }
}
