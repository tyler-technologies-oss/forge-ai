import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot';
import '$lib/ai-empty-state';
import '$lib/ai-suggestions';
import '$lib/ai-voice-input';
import { type ToolDefinition, type Suggestion, type ChatMessage } from '$lib/ai-chatbot';
import { MockAdapter } from '../../../utils/mock-adapter';
import { smallAgentList, largeAgentList } from '../../../utils/mock-agents';

const component = 'forge-ai-chatbot';

const meta = {
  title: 'AI Components/Primitives/Chatbot',
  component,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    titleText: {
      control: 'text',
      description: 'Custom title for the chatbot header'
    },
    fileUpload: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable file upload functionality'
    },
    voiceInput: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable voice input functionality'
    },
    debugCommand: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Show/hide debug mode slash command'
    },
    showExpandButton: {
      control: 'boolean',
      description: 'Show expand button in header'
    },
    showMinimizeButton: {
      control: 'boolean',
      description: 'Show minimize button in header'
    },
    expanded: {
      control: 'boolean',
      description: 'Expanded state (affects icon display)'
    },
    minimizeIcon: {
      control: 'select',
      options: ['default', 'panel'],
      description: 'Minimize icon variant'
    },
    enableReactions: {
      control: 'boolean',
      description: 'Enable thumbs up/down reaction buttons'
    },
    disclaimerText: {
      control: 'text',
      description: 'Disclaimer text displayed below the prompt. Set to empty string to hide.'
    }
  },
  args: {
    placeholder: 'Ask a question...',
    titleText: 'AI Assistant',
    fileUpload: 'off',
    voiceInput: 'on',
    debugCommand: 'on',
    showExpandButton: false,
    showMinimizeButton: false,
    expanded: false,
    minimizeIcon: 'default',
    enableReactions: false,
    disclaimerText: 'AI can make mistakes. Always verify responses.'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const onConnected = action('forge-ai-chatbot-connected');
    const onDisconnected = action('forge-ai-chatbot-disconnected');
    const onMessageSent = action('forge-ai-chatbot-message-sent');
    const onMessageReceived = action('forge-ai-chatbot-message-received');
    const onToolCall = action('forge-ai-chatbot-tool-call');
    const onError = action('forge-ai-chatbot-error');
    const onExpand = action('forge-ai-chatbot-expand');
    const onMinimize = action('forge-ai-chatbot-minimize');
    const onClear = action('forge-ai-chatbot-clear');
    const onExport = action('forge-ai-chatbot-export');
    const onInfo = action('forge-ai-chatbot-info');
    const onFeedback = action('forge-ai-chatbot-response-feedback');

    return html`
      <div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          debug-command=${args.debugCommand}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-connected=${onConnected}
          @forge-ai-chatbot-disconnected=${onDisconnected}
          @forge-ai-chatbot-message-sent=${onMessageSent}
          @forge-ai-chatbot-message-received=${onMessageReceived}
          @forge-ai-chatbot-tool-call=${onToolCall}
          @forge-ai-chatbot-error=${onError}
          @forge-ai-chatbot-expand=${onExpand}
          @forge-ai-chatbot-minimize=${onMinimize}
          @forge-ai-chatbot-clear=${onClear}
          @forge-ai-chat-header-export=${onExport}
          @forge-ai-chatbot-info=${onInfo}
          @forge-ai-chatbot-response-feedback=${(evt: CustomEvent) => onFeedback(evt.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' }
    ] as Suggestion[];

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${adapter}
          .suggestions=${suggestions}
          placeholder=${args.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

export const WithTools: Story = {
  render: (args: any) => {
    const tools: ToolDefinition[] = [
      {
        name: 'getCurrentWeather',
        displayName: 'Get Current Weather',
        description: 'Get the current weather for a location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'The city and state, e.g. San Francisco, CA'
            }
          },
          required: ['location']
        }
      },
      {
        name: 'getUserInput',
        displayName: 'Get User Input',
        description: 'Prompts the user for input using a native dialog',
        parameters: {
          type: 'object',
          properties: {
            prompt: {
              type: 'string',
              description: 'The message to show the user'
            }
          },
          required: ['prompt']
        }
      }
    ];

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: true,
      streamingDelay: 50,
      responseDelay: 500,
      tools
    });

    const onToolCall = (e: CustomEvent) => {
      action('forge-ai-chatbot-tool-call')(e.detail);
    };

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${onToolCall}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

export const WithPersistence: Story = {
  args: {
    showMinimizeButton: true
  },
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-thread-state';

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const suggestions = [
      { text: 'What is TypeScript?', value: 'typescript' },
      { text: 'Explain web components', value: 'webcomponents' },
      { text: 'How do I use localStorage?', value: 'localstorage' }
    ] as Suggestion[];

    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          chatbot.setThreadState(state);
        } catch (error) {
          console.error('Failed to restore thread state:', error);
        }
      }

      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });

      chatbot.addEventListener('forge-ai-chatbot-message-sent', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });

      chatbot.addEventListener('forge-ai-chatbot-clear', () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }, 0);

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${adapter}
          .suggestions=${suggestions}
          placeholder=${args.placeholder}
          title-text="Persistent Chat"
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

export const MixedResponses: Story = {
  render: (args: any) => {
    const adapter = new MixedResponseAdapter();

    const suggestions = [
      { text: 'Text then tool', value: 'text-then-tool' },
      { text: 'Tool then text', value: 'tool-then-text' },
      { text: 'Text, tool, text', value: 'text-tool-text' },
      { text: 'Alternating', value: 'alternating' },
      { text: 'Multiple tools', value: 'multiple-tools' },
      { text: 'Slow sequential tools', value: 'slow-sequential' },
      { text: 'Multiple text chunks', value: 'multiple-text' }
    ] as Suggestion[];

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${adapter}
          .suggestions=${suggestions}
          placeholder=${args.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=${args.enableReactions}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

class MixedResponseAdapter extends MockAdapter {
  #initialDelay = 2000;
  #toolExecutionDelay = 2000;
  #textGapDelay = 500;
  #streamDelay = 50;

  constructor() {
    super({ simulateStreaming: true, simulateTools: true });
  }

  override sendMessage(messages: any[]): void {
    this._updateState({ isRunning: true });

    const lastMessage = messages[messages.length - 1];
    const content = lastMessage?.content?.toLowerCase() || '';

    this._emitRunStarted();

    if (content.includes('text-then-tool') || content === 'text then tool') {
      this.#textThenTool();
    } else if (content.includes('tool-then-text') || content === 'tool then text') {
      this.#toolThenText();
    } else if (content.includes('text-tool-text') || content === 'text, tool, text') {
      this.#textToolText();
    } else if (content.includes('alternating')) {
      this.#alternating();
    } else if (content.includes('multiple-tools') || content === 'multiple tools') {
      this.#multipleTools();
    } else if (content.includes('slow-sequential') || content === 'slow sequential tools') {
      this.#slowSequentialTools();
    } else if (content.includes('multiple-text') || content === 'multiple text chunks') {
      this.#multipleText();
    }
  }

  override sendToolResult(toolCallId: string, result: unknown): void {
    this._emitToolResult({
      toolCallId,
      result,
      message: {
        id: this.#id(),
        role: 'tool',
        content: JSON.stringify(result),
        timestamp: Date.now(),
        status: 'complete',
        toolCallId
      }
    });
  }

  #textThenTool(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    setTimeout(() => {
      this._emitMessageStart(messageId);
      this.#streamText(messageId, 'Let me check the weather for you.', () => {
        this._emitToolCallStart({ id: toolId, messageId, name: 'getCurrentWeather' });
        setTimeout(() => {
          this._emitToolCallEnd({ id: toolId, messageId, name: 'getCurrentWeather', args: { location: 'Chicago' } });
          this._emitToolResult({
            toolCallId: toolId,
            result: { temperature: 65, conditions: 'cloudy' },
            message: {
              id: this.#id(),
              role: 'tool',
              content: '',
              timestamp: Date.now(),
              status: 'complete',
              toolCallId: toolId
            }
          });
          this._emitMessageEnd(messageId);
          this._updateState({ isRunning: false });
          this._emitRunFinished();
        }, this.#toolExecutionDelay);
      });
    }, this.#initialDelay);
  }

  #toolThenText(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    setTimeout(() => {
      this._emitMessageStart(messageId);
      this._emitToolCallStart({ id: toolId, messageId, name: 'getCurrentWeather' });
      setTimeout(() => {
        this._emitToolCallEnd({ id: toolId, messageId, name: 'getCurrentWeather', args: { location: 'Boston' } });
        this._emitToolResult({
          toolCallId: toolId,
          result: { temperature: 58, conditions: 'partly cloudy' },
          message: {
            id: this.#id(),
            role: 'tool',
            content: '',
            timestamp: Date.now(),
            status: 'complete',
            toolCallId: toolId
          }
        });
        const textId = this.#id();
        this._emitMessageStart(textId);
        this.#streamText(textId, 'Based on the weather data, it looks sunny today!', () => {
          this._emitMessageEnd(textId);
          this._updateState({ isRunning: false });
          this._emitRunFinished();
        });
      }, this.#toolExecutionDelay);
    }, this.#initialDelay);
  }

  #textToolText(): void {
    const messageId = this.#id();
    const tool1 = this.#id();
    const tool2 = this.#id();
    const tool3 = this.#id();

    setTimeout(() => {
      this._emitMessageStart(messageId);
      this.#streamText(messageId, 'Let me gather that information for you.', () => {
        this._emitToolCallStart({ id: tool1, messageId, name: 'fetchUserData' });
        setTimeout(() => {
          this._emitToolCallEnd({ id: tool1, messageId, name: 'fetchUserData', args: { userId: 'abc123' } });
          this._emitToolResult({
            toolCallId: tool1,
            result: { name: 'Jane Smith', role: 'Admin' },
            message: {
              id: messageId,
              role: 'tool',
              content: '',
              timestamp: Date.now(),
              status: 'complete',
              toolCallId: tool1
            }
          });

          this._emitToolCallStart({ id: tool2, messageId, name: 'queryPermissions' });
          setTimeout(() => {
            this._emitToolCallEnd({ id: tool2, messageId, name: 'queryPermissions', args: { role: 'Admin' } });
            this._emitToolResult({
              toolCallId: tool2,
              result: { canEdit: true, canDelete: true },
              message: {
                id: this.#id(),
                role: 'tool',
                content: '',
                timestamp: Date.now(),
                status: 'complete',
                toolCallId: tool2
              }
            });

            this._emitToolCallStart({ id: tool3, messageId, name: 'loadDashboard' });
            setTimeout(() => {
              this._emitToolCallEnd({ id: tool3, messageId, name: 'loadDashboard', args: { view: 'summary' } });
              this._emitToolResult({
                toolCallId: tool3,
                result: { widgets: 5, lastUpdated: '2024-01-15' },
                message: {
                  id: this.#id(),
                  role: 'tool',
                  content: '',
                  timestamp: Date.now(),
                  status: 'complete',
                  toolCallId: tool3
                }
              });

              this.#streamText(
                messageId,
                'Done! I found the user profile, verified permissions, and loaded the dashboard. Everything is ready for you.',
                () => {
                  this._emitMessageEnd(messageId);
                  this._updateState({ isRunning: false });
                  this._emitRunFinished();
                }
              );
            }, this.#toolExecutionDelay);
          }, this.#toolExecutionDelay);
        }, this.#toolExecutionDelay);
      });
    }, this.#initialDelay);
  }

  #alternating(): void {
    const messageId = this.#id();
    const tool1 = this.#id();
    const tool2 = this.#id();
    setTimeout(() => {
      this._emitMessageStart(messageId);
      this.#streamText(messageId, 'First, let me check the weather.', () => {
        this._emitToolCallStart({ id: tool1, messageId, name: 'getCurrentWeather' });
        setTimeout(() => {
          this._emitToolCallEnd({
            id: tool1,
            messageId,
            name: 'getCurrentWeather',
            args: { location: 'Denver' }
          });
          this._emitToolResult({
            toolCallId: tool1,
            result: { temperature: 70, conditions: 'clear' },
            message: {
              id: this.#id(),
              role: 'tool',
              content: '',
              timestamp: Date.now(),
              status: 'complete',
              toolCallId: tool1
            }
          });
          this._emitMessageStart(messageId);
          this.#streamText(messageId, 'Now let me search the database for related info.', () => {
            this._emitToolCallStart({ id: tool2, messageId, name: 'searchDatabase' });
            setTimeout(() => {
              this._emitToolCallEnd({
                id: tool2,
                messageId,
                name: 'searchDatabase',
                args: { query: 'weather history' }
              });
              this._emitToolResult({
                toolCallId: tool2,
                result: { records: 42, summary: 'Historical data found' },
                message: {
                  id: this.#id(),
                  role: 'tool',
                  content: '',
                  timestamp: Date.now(),
                  status: 'complete',
                  toolCallId: tool2
                }
              });
              this._emitMessageStart(messageId);
              this.#streamText(messageId, 'All done! I found the information you need.', () => {
                this._emitMessageEnd(messageId);
                this._updateState({ isRunning: false });
                this._emitRunFinished();
              });
            }, this.#toolExecutionDelay);
          });
        }, this.#toolExecutionDelay);
      });
    }, this.#initialDelay);
  }

  #multipleTools(): void {
    const messageId = this.#id();
    const tool1 = this.#id();
    const tool2 = this.#id();
    const tool3 = this.#id();
    setTimeout(() => {
      this._emitMessageStart(messageId);
      this._emitToolCallStart({ id: tool1, messageId, name: 'getCurrentWeather' });
      setTimeout(() => {
        this._emitToolCallEnd({ id: tool1, messageId, name: 'getCurrentWeather', args: { location: 'Miami' } });
        this._emitToolResult({
          toolCallId: tool1,
          result: { temperature: 85, conditions: 'humid' },
          message: {
            id: this.#id(),
            role: 'tool',
            content: '',
            timestamp: Date.now(),
            status: 'complete',
            toolCallId: tool1
          }
        });
        this._emitToolCallStart({ id: tool2, messageId, name: 'searchDatabase' });
        setTimeout(() => {
          this._emitToolCallEnd({ id: tool2, messageId, name: 'searchDatabase', args: { query: 'forecast' } });
          this._emitToolResult({
            toolCallId: tool2,
            result: { records: 15, summary: 'Forecast data available' },
            message: {
              id: this.#id(),
              role: 'tool',
              content: '',
              timestamp: Date.now(),
              status: 'complete',
              toolCallId: tool2
            }
          });
          this._emitToolCallStart({ id: tool3, messageId, name: 'getCurrentWeather' });
          setTimeout(() => {
            this._emitToolCallEnd({ id: tool3, messageId, name: 'getCurrentWeather', args: { location: 'Orlando' } });
            this._emitToolResult({
              toolCallId: tool3,
              result: { temperature: 82, conditions: 'sunny' },
              message: {
                id: this.#id(),
                role: 'tool',
                content: '',
                timestamp: Date.now(),
                status: 'complete',
                toolCallId: tool3
              }
            });
            this._emitMessageEnd(messageId);
            this._updateState({ isRunning: false });
            this._emitRunFinished();
          }, this.#toolExecutionDelay);
        }, this.#toolExecutionDelay);
      }, this.#toolExecutionDelay);
    }, this.#initialDelay);
  }

  #slowSequentialTools(): void {
    const slowDelay = 2500;

    const runToolSequence = (
      messageId: string,
      tools: Array<{ name: string; args: Record<string, unknown>; result: unknown }>,
      onComplete: () => void
    ): void => {
      let index = 0;
      const runNext = (): void => {
        if (index < tools.length) {
          const tool = tools[index];
          const toolId = this.#id();
          this._emitToolCallStart({ id: toolId, messageId, name: tool.name });
          setTimeout(() => {
            this._emitToolCallEnd({ id: toolId, messageId, name: tool.name, args: tool.args });
            this._emitToolResult({
              toolCallId: toolId,
              result: tool.result,
              message: {
                id: this.#id(),
                role: 'tool',
                content: '',
                timestamp: Date.now(),
                status: 'complete',
                toolCallId: toolId
              }
            });
            index++;
            runNext();
          }, slowDelay);
        } else {
          onComplete();
        }
      };
      runNext();
    };

    const msg1 = this.#id();
    setTimeout(() => {
      this._emitMessageStart(msg1);
      this.#streamText(
        msg1,
        "I'll help you with that comprehensive analysis. Let me gather the necessary data first.",
        () => {
          this._emitMessageEnd(msg1);

          const msg2 = this.#id();
          runToolSequence(
            msg2,
            [
              { name: 'fetchUserProfile', args: { userId: '12345' }, result: { name: 'John Doe', role: 'Admin' } },
              { name: 'queryDatabase', args: { table: 'orders' }, result: { count: 47, total: '$12,450' } },
              { name: 'loadPermissions', args: { role: 'Admin' }, result: { canEdit: true, canDelete: true } },
              {
                name: 'fetchAccountSettings',
                args: { userId: '12345' },
                result: { theme: 'dark', notifications: true }
              },
              { name: 'loadRecentActivity', args: { limit: 20 }, result: { activities: 20, lastLogin: '2024-01-15' } },
              { name: 'queryInventory', args: { warehouse: 'main' }, result: { items: 1250, lowStock: 12 } },
              {
                name: 'fetchPaymentMethods',
                args: { userId: '12345' },
                result: { cards: 2, defaultCard: 'Visa ****4242' }
              },
              {
                name: 'loadShippingAddresses',
                args: { userId: '12345' },
                result: { addresses: 3, defaultAddress: 'Home' }
              }
            ],
            () => {
              const msg3 = this.#id();
              this.#streamText(
                msg3,
                'Great, I found the user data and permissions. Now let me analyze the trends and generate your report.',
                () => {
                  this._emitMessageEnd(msg3);

                  const msg4 = this.#id();
                  runToolSequence(
                    msg4,
                    [
                      {
                        name: 'generateAnalyticsReport',
                        args: { format: 'pdf', range: '30d' },
                        result: { url: '/reports/analytics.pdf' }
                      }
                    ],
                    () => {
                      const msg5 = this.#id();
                      this.#streamText(
                        msg5,
                        "All done! Here's what I found: John Doe has admin privileges with 47 orders totaling $12,450. The analytics report has been generated and is ready for download.",
                        () => {
                          this._emitMessageEnd(msg5);
                          this._updateState({ isRunning: false });
                          this._emitRunFinished();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }, this.#initialDelay);
  }

  #multipleText(): void {
    const msg1 = this.#id();
    setTimeout(() => {
      this._emitMessageStart(msg1);
      this.#streamText(msg1, 'This is the first text chunk of the response.', () => {
        this._emitMessageEnd(msg1);
        setTimeout(() => {
          const msg2 = this.#id();
          this._emitMessageStart(msg2);
          this.#streamText(msg2, 'Here is another text chunk that follows immediately.', () => {
            this._emitMessageEnd(msg2);
            setTimeout(() => {
              const msg3 = this.#id();
              this._emitMessageStart(msg3);
              this.#streamText(msg3, 'And finally, a third text chunk to complete the response!', () => {
                this._emitMessageEnd(msg3);
                this._updateState({ isRunning: false });
                this._emitRunFinished();
              });
            }, this.#textGapDelay);
          });
        }, this.#textGapDelay);
      });
    }, this.#initialDelay);
  }

  #streamText(messageId: string, text: string, onComplete: () => void): void {
    const words = text.split(' ');
    let i = 0;
    const stream = (): void => {
      if (i < words.length) {
        this._emitMessageDelta(messageId, (i === 0 ? '' : ' ') + words[i]);
        i++;
        setTimeout(stream, this.#streamDelay);
      } else {
        onComplete();
      }
    };
    stream();
  }

  #id(): string {
    return Math.random().toString(36).slice(2, 11);
  }
}

export const WithAgents: Story = {
  parameters: {
    controls: { include: ['agentListSize', 'titleText'] }
  },
  argTypes: {
    agentListSize: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Toggle between small (4) and large (50) agent lists'
    }
  },
  args: {
    agentListSize: 'small'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const agents = args.agentListSize === 'large' ? largeAgentList : smallAgentList;
    const onAgentChange = action('forge-ai-chatbot-agent-change');

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${adapter}
          .agents=${agents}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          @forge-ai-chatbot-agent-change=${(e: CustomEvent) => onAgentChange(e.detail)}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

export const WithFeedbackPersistence: Story = {
  args: {
    enableReactions: true
  },
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-feedback-state';

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const initialMessages: ChatMessage[] = [
      {
        id: 'user-1',
        role: 'user',
        content: 'What is TypeScript?',
        timestamp: Date.now() - 60000,
        status: 'complete'
      },
      {
        id: 'assistant-1',
        role: 'assistant',
        content:
          'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.',
        timestamp: Date.now() - 59000,
        status: 'complete',
        feedback: { type: 'positive' }
      },
      {
        id: 'user-2',
        role: 'user',
        content: 'What are the benefits?',
        timestamp: Date.now() - 30000,
        status: 'complete'
      },
      {
        id: 'assistant-2',
        role: 'assistant',
        content:
          'Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.',
        timestamp: Date.now() - 29000,
        status: 'complete',
        feedback: { type: 'negative', reason: 'Missing information about interfaces' }
      }
    ];

    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          chatbot.setThreadState(state);
        } catch (error) {
          console.error('Failed to restore thread state:', error);
          chatbot.setThreadState({ messages: initialMessages });
        }
      } else {
        chatbot.setThreadState({ messages: initialMessages });
      }

      chatbot.addEventListener('forge-ai-chatbot-response-feedback', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });

      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });

      chatbot.addEventListener('forge-ai-chatbot-clear', () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }, 0);

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text="Feedback Persistence"
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          @forge-ai-chatbot-response-feedback=${action('forge-ai-chatbot-response-feedback')}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};
