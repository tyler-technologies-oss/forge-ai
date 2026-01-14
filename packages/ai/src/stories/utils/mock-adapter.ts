import { AgentAdapter } from '$lib/ai-chatbot/agent-adapter.js';
import type { ChatMessage, FileAttachment, ToolDefinition } from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';

export interface MockAdapterOptions {
  context?: Record<string, unknown>;
  simulateTools?: boolean;
  simulateStreaming?: boolean;
  streamingDelay?: number;
  responseDelay?: number;
  mockResponses?: string[];
  tools?: ToolDefinition[];
}

export class MockAdapter extends AgentAdapter {
  #options: MockAdapterOptions;
  #messageIndex = 0;
  #timeoutId: number | null = null;

  get threadId(): string {
    return 'mock-thread-123';
  }
  set threadId(_value: string) {}

  constructor(options: MockAdapterOptions = {}) {
    super();
    this.#options = {
      simulateTools: false,
      simulateStreaming: true,
      streamingDelay: 50,
      responseDelay: 500,
      mockResponses: [
        'Hello! How can I assist you today?',
        "That's a great question! Let me help you with that.",
        "I understand. Here's what I can do:\n\n1. Answer questions\n2. Help with tasks\n3. Provide information\n\nWhat would you like to do?",
        "Here's some code:\n\n```typescript\nfunction greet(name: string) {\n  return `Hello, ${name}!`;\n}\n```\n\nThis is a simple greeting function."
      ],
      ...options
    };
    if (options.tools) {
      this.setTools(options.tools);
    }
  }

  async connect(): Promise<void> {
    this._updateState({ isConnected: true });
  }

  async disconnect(): Promise<void> {
    this.abort();
    this._updateState({ isConnected: false });
  }

  sendMessage(messages: ChatMessage[], _attachments?: FileAttachment[]): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const messageId = generateId();
    const response = this.#options.mockResponses![this.#messageIndex % this.#options.mockResponses!.length];
    this.#messageIndex++;

    const lastMessage = messages[messages.length - 1];
    const isToolResult = lastMessage?.role === 'tool';

    if (this.#options.simulateTools && this._tools.length > 0 && !isToolResult) {
      const messageContent = lastMessage?.content?.toLowerCase() || '';
      const needsUserInput =
        messageContent.includes('ask me') ||
        messageContent.includes('prompt me') ||
        messageContent.includes('get user input') ||
        messageContent.includes('get my input');

      this._emitMessageStart(messageId);

      if (needsUserInput) {
        this.#simulateUserInputTool(messageId);
      } else {
        this.#simulateToolCall(messageId);
      }
    } else if (isToolResult) {
      this.#simulateStreamingMessage(`Based on the tool result, ${response}`, messageId);
    } else {
      this.#simulateStreamingMessage(response, messageId);
    }
  }

  sendToolResult(toolCallId: string, result: unknown, messages: ChatMessage[]): void {
    const toolMessage: ChatMessage = {
      id: generateId(),
      role: 'tool',
      content: typeof result === 'string' ? result : JSON.stringify(result),
      timestamp: Date.now(),
      status: 'complete',
      toolCallId
    };

    this._emitToolResult({
      toolCallId,
      result,
      message: toolMessage
    });

    const messagesWithToolResult = [...messages, toolMessage];
    this.sendMessage(messagesWithToolResult);
  }

  abort(): void {
    if (this.#timeoutId !== null) {
      clearTimeout(this.#timeoutId);
      this.#timeoutId = null;
    }
    if (this._state.isRunning) {
      this._emitRunAborted();
    }
    this._updateState({ isRunning: false });
  }

  #simulateStreamingMessage(message: string, messageId: string): void {
    this._emitMessageStart(messageId);

    if (this.#options.simulateStreaming) {
      const words = message.split(' ');
      words.forEach((word, index) => {
        this.#timeoutId = window.setTimeout(
          () => {
            this._emitMessageDelta(messageId, (index === 0 ? '' : ' ') + word);

            if (index === words.length - 1) {
              setTimeout(() => {
                this._emitMessageEnd(messageId);
                this._updateState({ isRunning: false });
                this._emitRunFinished();
              }, this.#options.streamingDelay);
            }
          },
          this.#options.responseDelay! + index * this.#options.streamingDelay!
        );
      });
    } else {
      setTimeout(() => {
        this._emitMessageDelta(messageId, message);

        setTimeout(() => {
          this._emitMessageEnd(messageId);
          this._updateState({ isRunning: false });
          this._emitRunFinished();
        }, this.#options.streamingDelay);
      }, this.#options.responseDelay);
    }
  }

  #simulateToolCall(messageId: string): void {
    const toolCallId = generateId();
    const toolName = 'getCurrentWeather';
    const args = { location: 'San Francisco' };
    const argsJson = JSON.stringify(args);

    setTimeout(() => {
      this._emitToolCallStart({ id: toolCallId, messageId, name: toolName });

      setTimeout(() => {
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: toolName,
          argsBuffer: argsJson,
          partialArgs: args
        });

        setTimeout(() => {
          this._emitToolCallEnd({ id: toolCallId, messageId, name: toolName, args });

          setTimeout(() => {
            this._emitToolCall({ id: toolCallId, messageId, name: toolName, args });
          }, this.#options.streamingDelay);
        }, this.#options.streamingDelay);
      }, this.#options.streamingDelay);
    }, this.#options.responseDelay);
  }

  #simulateUserInputTool(messageId: string): void {
    const toolCallId = generateId();
    const toolName = 'getUserInput';
    const args = { prompt: 'What is your name?' };
    const argsJson = JSON.stringify(args);

    setTimeout(() => {
      this._emitToolCallStart({ id: toolCallId, messageId, name: toolName });

      setTimeout(() => {
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: toolName,
          argsBuffer: argsJson,
          partialArgs: args
        });

        setTimeout(() => {
          this._emitToolCallEnd({ id: toolCallId, messageId, name: toolName, args });

          setTimeout(() => {
            this._emitToolCall({ id: toolCallId, messageId, name: toolName, args });
          }, this.#options.streamingDelay);
        }, this.#options.streamingDelay);
      }, this.#options.streamingDelay);
    }, this.#options.responseDelay);
  }
}
