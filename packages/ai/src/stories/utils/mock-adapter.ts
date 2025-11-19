import { AiChatbotAdapterBase } from '$lib/ai-chatbot/adapter-base.js';
import type { ChatMessage, FileAttachment } from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';

export interface MockAdapterOptions {
  context?: Record<string, unknown>;
  simulateTools?: boolean;
  simulateStreaming?: boolean;
  streamingDelay?: number;
  responseDelay?: number;
  mockResponses?: string[];
}

export class MockAdapter extends AiChatbotAdapterBase {
  #options: MockAdapterOptions;
  #messageIndex = 0;
  #timeoutId: number | null = null;

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

    const messageId = generateId('msg');
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

  sendToolResult(_toolCallId: string, _result: unknown): void {
    const messages: ChatMessage[] = [];
    this.sendMessage(messages);
  }

  abort(): void {
    if (this.#timeoutId !== null) {
      clearTimeout(this.#timeoutId);
      this.#timeoutId = null;
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
        }, this.#options.streamingDelay);
      }, this.#options.responseDelay);
    }
  }

  #simulateToolCall(messageId: string): void {
    const toolCallId = generateId('tool');
    const toolName = 'getCurrentWeather';

    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            this._emitToolCall({
              id: toolCallId,
              messageId,
              name: toolName,
              args: { location: 'San Francisco' }
            });

            setTimeout(() => {
              this._emitMessageEnd(messageId);
              this._updateState({ isRunning: false });
            }, this.#options.streamingDelay);
          }, this.#options.streamingDelay);
        }, this.#options.streamingDelay);
      }, this.#options.streamingDelay);
    }, this.#options.responseDelay);
  }

  #simulateUserInputTool(messageId: string): void {
    const toolCallId = generateId('tool');
    const toolName = 'getUserInput';

    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            this._emitToolCall({
              id: toolCallId,
              messageId,
              name: toolName,
              args: { prompt: 'What is your name?' }
            });

            setTimeout(() => {
              this._emitMessageEnd(messageId);
              this._updateState({ isRunning: false });
            }, this.#options.streamingDelay);
          }, this.#options.streamingDelay);
        }, this.#options.streamingDelay);
      }, this.#options.streamingDelay);
    }, this.#options.responseDelay);
  }
}
