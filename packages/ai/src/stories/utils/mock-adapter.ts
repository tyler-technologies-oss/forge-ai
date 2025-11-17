import type { AiChatbotAdapter, ResponseEvent, MessageInput } from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';

export interface MockAdapterOptions {
  context?: Record<string, unknown>;
  simulateTools?: boolean;
  simulateStreaming?: boolean;
  streamingDelay?: number;
  responseDelay?: number;
  mockResponses?: string[];
}

export function createMockAdapter(options: MockAdapterOptions = {}): AiChatbotAdapter {
  const {
    simulateTools = false,
    simulateStreaming = true,
    streamingDelay = 50,
    responseDelay = 500,
    mockResponses = [
      'Hello! How can I assist you today?',
      "That's a great question! Let me help you with that.",
      "I understand. Here's what I can do:\n\n1. Answer questions\n2. Help with tasks\n3. Provide information\n\nWhat would you like to do?",
      "Here's some code:\n\n```typescript\nfunction greet(name: string) {\n  return `Hello, ${name}!`;\n}\n```\n\nThis is a simple greeting function."
    ]
  } = options;

  let eventCallback: ((event: ResponseEvent) => void) | null = null;
  let messageIndex = 0;
  let timeoutId: number | null = null;

  const simulateStreamingMessage = (message: string, messageId: string): void => {
    if (!eventCallback) {
      return;
    }

    eventCallback({
      type: 'TEXT_MESSAGE_START',
      messageId
    });

    if (simulateStreaming) {
      const words = message.split(' ');
      words.forEach((word, index) => {
        timeoutId = window.setTimeout(
          () => {
            eventCallback?.({
              type: 'TEXT_MESSAGE_CHUNK',
              messageId,
              delta: (index === 0 ? '' : ' ') + word
            });

            if (index === words.length - 1) {
              setTimeout(() => {
                eventCallback?.({
                  type: 'TEXT_MESSAGE_END',
                  messageId
                });
              }, streamingDelay);
            }
          },
          responseDelay + index * streamingDelay
        );
      });
    } else {
      setTimeout(() => {
        eventCallback?.({
          type: 'TEXT_MESSAGE_CHUNK',
          messageId,
          delta: message
        });

        setTimeout(() => {
          eventCallback?.({
            type: 'TEXT_MESSAGE_END',
            messageId
          });
        }, streamingDelay);
      }, responseDelay);
    }
  };

  const simulateToolCall = (messageId: string, onComplete?: () => void): void => {
    if (!eventCallback) {
      return;
    }

    const toolCallId = generateId('tool');
    const toolName = 'getCurrentWeather';

    setTimeout(() => {
      eventCallback?.({
        type: 'TOOL_CALL_START',
        messageId,
        toolCallId,
        toolName
      });

      setTimeout(() => {
        eventCallback?.({
          type: 'TOOL_CALL_ARGS',
          messageId,
          toolCallId,
          delta: '{"location":"'
        });

        setTimeout(() => {
          eventCallback?.({
            type: 'TOOL_CALL_ARGS',
            messageId,
            toolCallId,
            delta: 'San Francisco"'
          });

          setTimeout(() => {
            eventCallback?.({
              type: 'TOOL_CALL_ARGS',
              messageId,
              toolCallId,
              delta: '}',
              args: { location: 'San Francisco' }
            });

            setTimeout(() => {
              eventCallback?.({
                type: 'TOOL_CALL_END',
                messageId,
                toolCallId
              });

              setTimeout(() => {
                eventCallback?.({
                  type: 'TEXT_MESSAGE_END',
                  messageId
                });
                onComplete?.();
              }, streamingDelay);
            }, streamingDelay);
          }, streamingDelay);
        }, streamingDelay);
      }, streamingDelay);
    }, responseDelay);
  };

  const simulateUserInputTool = (messageId: string, onComplete?: () => void): void => {
    if (!eventCallback) {
      return;
    }

    const toolCallId = generateId('tool');
    const toolName = 'getUserInput';

    setTimeout(() => {
      eventCallback?.({
        type: 'TOOL_CALL_START',
        messageId,
        toolCallId,
        toolName
      });

      setTimeout(() => {
        eventCallback?.({
          type: 'TOOL_CALL_ARGS',
          messageId,
          toolCallId,
          delta: '{"prompt":"'
        });

        setTimeout(() => {
          eventCallback?.({
            type: 'TOOL_CALL_ARGS',
            messageId,
            toolCallId,
            delta: 'What is your name?"'
          });

          setTimeout(() => {
            eventCallback?.({
              type: 'TOOL_CALL_ARGS',
              messageId,
              toolCallId,
              delta: '}',
              args: { prompt: 'What is your name?' }
            });

            setTimeout(() => {
              eventCallback?.({
                type: 'TOOL_CALL_END',
                messageId,
                toolCallId
              });

              setTimeout(() => {
                eventCallback?.({
                  type: 'TEXT_MESSAGE_END',
                  messageId
                });
                onComplete?.();
              }, streamingDelay);
            }, streamingDelay);
          }, streamingDelay);
        }, streamingDelay);
      }, streamingDelay);
    }, responseDelay);
  };

  return {
    async connect(): Promise<void> {
      // No-op
    },

    async disconnect(): Promise<void> {
      this.abort();
    },

    sendMessage(input: MessageInput): void {
      const messageId = generateId('msg');
      const response = mockResponses[messageIndex % mockResponses.length];
      messageIndex++;

      // Check if last message is a tool result to avoid infinite loops
      const lastMessage = input.messages[input.messages.length - 1];
      const isToolResult = lastMessage?.role === 'tool';

      // Only simulate tools for user messages, not tool results
      if (simulateTools && input.tools && input.tools.length > 0 && !isToolResult) {
        const messageContent = lastMessage?.content?.toLowerCase() || '';
        const needsUserInput = messageContent.includes('ask me') ||
                              messageContent.includes('prompt me') ||
                              messageContent.includes('get user input') ||
                              messageContent.includes('get my input');

        eventCallback?.({
          type: 'TEXT_MESSAGE_START',
          messageId
        });

        if (needsUserInput) {
          simulateUserInputTool(messageId);
        } else {
          simulateToolCall(messageId);
        }
      } else if (isToolResult) {
        // Respond to tool result with a message about the tool result
        simulateStreamingMessage(`Based on the tool result, ${response}`, messageId);
      } else {
        simulateStreamingMessage(response, messageId);
      }
    },

    onEvent(callback: (event: ResponseEvent) => void): void {
      eventCallback = callback;
    },

    abort(): void {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }
  };
}
