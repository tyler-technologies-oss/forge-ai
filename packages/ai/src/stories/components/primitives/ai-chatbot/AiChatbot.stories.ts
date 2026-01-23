import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot';
import '$lib/ai-empty-state';
import '$lib/ai-suggestions';
import '$lib/ai-voice-input';
import { type ToolDefinition, type Suggestion, type ChatMessage } from '$lib/ai-chatbot';
import { MockAdapter } from '../../../utils/mock-adapter';

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
      { text: 'Text only', value: 'text-only' },
      { text: 'Tool only', value: 'tool-only' },
      { text: 'Text then tool', value: 'text-then-tool' },
      { text: 'Tool then text', value: 'tool-then-text' },
      { text: 'Text, tool, text', value: 'text-tool-text' },
      { text: 'Alternating', value: 'alternating' },
      { text: 'Multiple tools', value: 'multiple-tools' },
      { text: 'Multiple text chunks', value: 'multiple-text' }
    ] as Suggestion[];

    const tools: ToolDefinition[] = [
      {
        name: 'getCurrentWeather',
        displayName: 'Get Weather',
        description: 'Get the current weather for a location',
        parameters: {
          type: 'object',
          properties: { location: { type: 'string' } },
          required: ['location']
        }
      },
      {
        name: 'searchDatabase',
        displayName: 'Search Database',
        description: 'Search the database for records',
        parameters: {
          type: 'object',
          properties: { query: { type: 'string' } },
          required: ['query']
        }
      }
    ];

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Mixed Response Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click a suggestion to see different response patterns. Each pattern demonstrates how text and tool calls are
            grouped within a single assistant response.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${adapter}
          .suggestions=${suggestions}
          .tools=${tools}
          placeholder=${args.placeholder}
          title-text="Mixed Responses"
          debug-mode
          ?enable-reactions=${args.enableReactions}
          @forge-ai-chatbot-tool-call=${(e: CustomEvent) => {
            setTimeout(() => {
              const chatbot = e.target as any;
              chatbot.submitToolResult(e.detail.toolCallId, { success: true, data: 'Mock result' });
            }, 500);
          }}>
        </forge-ai-chatbot>
      </div>
    `;
  }
};

class MixedResponseAdapter extends MockAdapter {
  #delay = 300;
  #streamDelay = 30;

  constructor() {
    super({ simulateStreaming: true, simulateTools: true });
  }

  override sendMessage(messages: any[]): void {
    this._updateState({ isRunning: true });

    const lastMessage = messages[messages.length - 1];
    const content = lastMessage?.content?.toLowerCase() || '';

    this._emitRunStarted();

    if (content.includes('text-only') || content === 'text only') {
      this.#textOnly();
    } else if (content.includes('tool-only') || content === 'tool only') {
      this.#toolOnly();
    } else if (content.includes('text-then-tool') || content === 'text then tool') {
      this.#textThenTool();
    } else if (content.includes('tool-then-text') || content === 'tool then text') {
      this.#toolThenText();
    } else if (content.includes('text-tool-text') || content === 'text, tool, text') {
      this.#textToolText();
    } else if (content.includes('alternating')) {
      this.#alternating();
    } else if (content.includes('multiple-tools') || content === 'multiple tools') {
      this.#multipleTools();
    } else if (content.includes('multiple-text') || content === 'multiple text chunks') {
      this.#multipleText();
    } else {
      this.#textOnly();
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

  #textOnly(): void {
    const messageId = this.#id();
    this._emitMessageStart(messageId);
    this.#streamText(
      messageId,
      'This is a text-only response with no tool calls. The entire response is just plain text content.',
      () => {
        this._emitMessageEnd(messageId);
        this._updateState({ isRunning: false });
        this._emitRunFinished();
      }
    );
  }

  #toolOnly(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    this._emitMessageStart(messageId);
    setTimeout(() => {
      this._emitToolCallStart({ id: toolId, messageId, name: 'getCurrentWeather' });
      setTimeout(() => {
        this._emitToolCallEnd({ id: toolId, messageId, name: 'getCurrentWeather', args: { location: 'New York' } });
        this._emitToolResult({
          toolCallId: toolId,
          result: { temperature: 72, conditions: 'sunny' },
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
      }, this.#delay);
    }, this.#delay);
  }

  #textThenTool(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    this._emitMessageStart(messageId);
    this.#streamText(messageId, 'Let me check the weather for you.', () => {
      setTimeout(() => {
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
        }, this.#delay);
      }, this.#delay);
    });
  }

  #toolThenText(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    this._emitMessageStart(messageId);
    setTimeout(() => {
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
      }, this.#delay);
    }, this.#delay);
  }

  #textToolText(): void {
    const messageId = this.#id();
    const toolId = this.#id();
    this._emitMessageStart(messageId);
    this.#streamText(messageId, 'I will look up the weather information now.', () => {
      setTimeout(() => {
        this._emitToolCallStart({ id: toolId, messageId, name: 'getCurrentWeather' });
        setTimeout(() => {
          this._emitToolCallEnd({ id: toolId, messageId, name: 'getCurrentWeather', args: { location: 'Seattle' } });
          this._emitToolResult({
            toolCallId: toolId,
            result: { temperature: 55, conditions: 'rainy' },
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
          this.#streamText(textId, 'The weather looks great! Expect clear skies and mild temperatures.', () => {
            this._emitMessageEnd(textId);
            this._updateState({ isRunning: false });
            this._emitRunFinished();
          });
        }, this.#delay);
      }, this.#delay);
    });
  }

  #alternating(): void {
    const msg1 = this.#id();
    const tool1 = this.#id();
    const tool2 = this.#id();
    this._emitMessageStart(msg1);
    this.#streamText(msg1, 'First, let me check the weather.', () => {
      setTimeout(() => {
        this._emitToolCallStart({ id: tool1, messageId: msg1, name: 'getCurrentWeather' });
        setTimeout(() => {
          this._emitToolCallEnd({
            id: tool1,
            messageId: msg1,
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
          const msg2 = this.#id();
          this._emitMessageStart(msg2);
          this.#streamText(msg2, 'Now let me search the database for related info.', () => {
            setTimeout(() => {
              this._emitToolCallStart({ id: tool2, messageId: msg2, name: 'searchDatabase' });
              setTimeout(() => {
                this._emitToolCallEnd({
                  id: tool2,
                  messageId: msg2,
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
                const msg3 = this.#id();
                this._emitMessageStart(msg3);
                this.#streamText(msg3, 'All done! I found the information you need.', () => {
                  this._emitMessageEnd(msg3);
                  this._updateState({ isRunning: false });
                  this._emitRunFinished();
                });
              }, this.#delay);
            }, this.#delay);
          });
        }, this.#delay);
      }, this.#delay);
    });
  }

  #multipleTools(): void {
    const messageId = this.#id();
    const tool1 = this.#id();
    const tool2 = this.#id();
    const tool3 = this.#id();
    this._emitMessageStart(messageId);
    setTimeout(() => {
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
          }, this.#delay);
        }, this.#delay);
      }, this.#delay);
    }, this.#delay);
  }

  #multipleText(): void {
    const msg1 = this.#id();
    this._emitMessageStart(msg1);
    this.#streamText(msg1, 'This is the first text chunk of the response.', () => {
      this._emitMessageEnd(msg1);
      const msg2 = this.#id();
      this._emitMessageStart(msg2);
      this.#streamText(msg2, 'Here is another text chunk that follows immediately.', () => {
        this._emitMessageEnd(msg2);
        const msg3 = this.#id();
        this._emitMessageStart(msg3);
        this.#streamText(msg3, 'And finally, a third text chunk to complete the response!', () => {
          this._emitMessageEnd(msg3);
          this._updateState({ isRunning: false });
          this._emitRunFinished();
        });
      });
    });
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
    setTimeout(stream, this.#delay);
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

    const smallAgentList = [
      { id: 'general', name: 'General Assistant', description: 'Versatile helper for everyday tasks and questions' },
      { id: 'code-review', name: 'Code Review Assistant', description: 'Analyzes code for best practices and issues' },
      { id: 'docs', name: 'Documentation Helper', description: 'Generates and maintains technical documentation' },
      { id: 'devops', name: 'DevOps Engineer', description: 'CI/CD pipelines and infrastructure automation' }
    ];

    const largeAgentList = [
      { id: 'general', name: 'General Assistant', description: 'Versatile helper for everyday tasks and questions' },
      { id: 'code-review', name: 'Code Review Assistant', description: 'Analyzes code for best practices and issues' },
      { id: 'docs', name: 'Documentation Helper', description: 'Generates and maintains technical documentation' },
      { id: 'database', name: 'Database Expert', description: 'SQL optimization and schema design' },
      { id: 'devops', name: 'DevOps Engineer', description: 'CI/CD pipelines and infrastructure automation' },
      { id: 'security', name: 'Security Analyst', description: 'Security risks and mitigation strategies' },
      { id: 'api', name: 'API Designer', description: 'RESTful API design and documentation' },
      { id: 'testing', name: 'Testing Specialist', description: 'Unit tests and test strategies' },
      { id: 'performance', name: 'Performance Optimizer', description: 'Application performance analysis' },
      { id: 'accessibility', name: 'Accessibility Auditor', description: 'WCAG compliance and inclusive design' },
      { id: 'ux', name: 'UX Researcher', description: 'User experience insights and usability' },
      { id: 'data-science', name: 'Data Scientist', description: 'Data analysis and machine learning' },
      { id: 'cloud', name: 'Cloud Architect', description: 'Scalable cloud infrastructure design' },
      { id: 'mobile', name: 'Mobile Developer', description: 'iOS and Android development' },
      { id: 'frontend', name: 'Frontend Expert', description: 'Modern frontend frameworks and CSS' },
      { id: 'backend', name: 'Backend Specialist', description: 'Server-side architecture and APIs' },
      { id: 'microservices', name: 'Microservices Guru', description: 'Distributed service architectures' },
      { id: 'graphql', name: 'GraphQL Expert', description: 'GraphQL APIs and query optimization' },
      { id: 'typescript', name: 'TypeScript Wizard', description: 'Advanced TypeScript patterns' },
      { id: 'git', name: 'Git Specialist', description: 'Git workflows and branching strategies' },
      { id: 'kubernetes', name: 'Kubernetes Admin', description: 'Container orchestration and Helm charts' },
      { id: 'terraform', name: 'Terraform Expert', description: 'Infrastructure as code' },
      { id: 'monitoring', name: 'Monitoring Specialist', description: 'Observability and logging solutions' },
      { id: 'messaging', name: 'Message Queue Expert', description: 'Kafka and event-driven architectures' },
      { id: 'caching', name: 'Redis Specialist', description: 'Caching strategies and optimization' },
      { id: 'search', name: 'Elasticsearch Expert', description: 'Full-text search and ELK stack' },
      { id: 'auth', name: 'OAuth Specialist', description: 'Authentication and identity management' },
      { id: 'realtime', name: 'WebSocket Expert', description: 'Real-time communication systems' },
      { id: 'pwa', name: 'PWA Developer', description: 'Progressive web apps and offline support' },
      { id: 'webcomponents', name: 'Web Components Expert', description: 'Custom elements and shadow DOM' },
      { id: 'css', name: 'CSS Architect', description: 'Design systems and scalable styling' },
      { id: 'animation', name: 'Animation Specialist', description: 'CSS animations and micro-interactions' },
      { id: 'seo', name: 'SEO Optimizer', description: 'Search optimization and structured data' },
      { id: 'i18n', name: 'Localization Expert', description: 'Internationalization and RTL support' },
      { id: 'pdf', name: 'PDF Generator', description: 'Document generation and print styles' },
      { id: 'email', name: 'Email Template Designer', description: 'HTML email templates' },
      { id: 'payments', name: 'Payment Integration', description: 'Secure payment processing' },
      { id: 'geo', name: 'Geolocation Expert', description: 'Maps and location-based services' },
      { id: 'video', name: 'Video Streaming Specialist', description: 'HLS, WebRTC, and video processing' },
      { id: 'image', name: 'Image Processing Expert', description: 'Image optimization and CDN strategies' },
      { id: 'notifications', name: 'Notification System Designer', description: 'Push notifications and alerts' },
      { id: 'workflow', name: 'Workflow Automation', description: 'Business process automation' },
      { id: 'reports', name: 'Report Generator', description: 'Dynamic reporting and visualization' },
      { id: 'audit', name: 'Audit Logger', description: 'Compliance logging and data governance' },
      { id: 'ratelimit', name: 'Rate Limiting Expert', description: 'API throttling and abuse prevention' },
      { id: 'features', name: 'Feature Flag Manager', description: 'Feature toggles and A/B testing' },
      { id: 'config', name: 'Config Management', description: 'Environment and secrets management' },
      { id: 'errors', name: 'Error Handling Expert', description: 'Error boundaries and retry strategies' },
      { id: 'legacy', name: 'Legacy Code Modernizer', description: 'Refactoring and migration planning' },
      { id: 'erp', name: 'ERP Agent', description: 'Enterprise resource planning software' }
    ];

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
