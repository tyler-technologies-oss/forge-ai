import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot';
import '$lib/ai-empty-state';
import '$lib/ai-suggestions';
import '$lib/ai-voice-input';
import { type ToolDefinition, type Suggestion, type ChatMessage } from '$lib/ai-chatbot';
import { MockAdapter, type MockAdapterOptions } from '../../../utils/mock-adapter';
import { generateId } from '$lib/ai-chatbot/utils.js';

interface ToolResultPayload {
  denied?: boolean;
  toolName?: string;
  message?: string;
}

class AutoInterceptMockAdapter extends MockAdapter {
  constructor(options: MockAdapterOptions = {}) {
    super(options);
  }

  override sendMessage(messages: ChatMessage[]): void {
    this._updateState({ isRunning: true });

    const messageId = generateId();
    const lastMessage = messages[messages.length - 1];
    const isToolResult = lastMessage?.role === 'tool';

    if (isToolResult) {
      this.#simulatePostToolResult(messageId, messages);
    } else {
      this.#simulateToolCall(messageId);
    }
  }

  override sendToolResult(_toolCallId: string, result: unknown, _messages: ChatMessage[]): void {
    const messageId = generateId();
    const payload = result as ToolResultPayload;
    this.#simulateResponse(messageId, payload.denied ?? false);
  }

  #simulateToolCall(messageId: string): void {
    const toolCallId = generateId();

    setTimeout(() => {
      this._emitMessageStart(messageId);

      setTimeout(() => {
        this._emitToolCall({
          id: toolCallId,
          messageId,
          name: 'deleteRecords',
          args: { count: 5 }
        });
      }, 300);
    }, 500);
  }

  #simulatePostToolResult(messageId: string, messages: ChatMessage[]): void {
    const lastToolMessage = messages[messages.length - 1];
    let denied = false;
    try {
      const content = JSON.parse(lastToolMessage.content);
      denied = content.denied === true;
    } catch {
      denied = false;
    }
    this.#simulateResponse(messageId, denied);
  }

  #simulateResponse(messageId: string, denied: boolean): void {
    this._emitMessageStart(messageId);

    const response = denied
      ? 'Understood. I will not delete the user records. Let me know if you need anything else.'
      : 'Done! I have deleted the 5 user records as requested.';

    const words = response.split(' ');
    words.forEach((word, index) => {
      setTimeout(
        () => {
          this._emitMessageDelta(messageId, (index === 0 ? '' : ' ') + word);

          if (index === words.length - 1) {
            setTimeout(() => {
              this._emitMessageEnd(messageId);
              this._updateState({ isRunning: false });
            }, 50);
          }
        },
        500 + index * 50
      );
    });
  }
}

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

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-gradient-container>
          <forge-ai-chatbot
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
            @forge-ai-chatbot-info=${onInfo}>
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
          </forge-ai-chatbot>
        </forge-ai-gradient-container>
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

export const WithConfirmation: Story = {
  render: (args: any) => {
    const tools: ToolDefinition<any>[] = [
      {
        name: 'deleteRecords',
        displayName: 'Delete Records',
        description: 'Delete records from the database',
        parameters: {
          type: 'object',
          properties: {
            count: { type: 'number', description: 'Number of records to delete' }
          },
          required: ['count']
        },
        handler: ({ args }) => {
          return { deleted: args.count, success: true };
        }
      }
    ];

    const adapter = new AutoInterceptMockAdapter({
      simulateStreaming: true,
      streamingDelay: 50,
      responseDelay: 500,
      tools
    });

    return html`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Tool Confirmation Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send any message to trigger a confirmation prompt. Tools with handlers automatically require confirmation
            unless they have <code>skipConfirmation: true</code>. Click Confirm or Deny to see the different responses.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text="AI Assistant with Confirmation"
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?show-expand-button=${args.showExpandButton}
          ?show-minimize-button=${args.showMinimizeButton}
          ?expanded=${args.expanded}
          ?enable-reactions=${args.enableReactions}
          .minimizeIcon=${args.minimizeIcon}
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}>
          <span slot="empty-state-heading">Tool Confirmation Demo</span>
          <span slot="empty-state-message">Send any message to see the confirmation flow in action.</span>
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
