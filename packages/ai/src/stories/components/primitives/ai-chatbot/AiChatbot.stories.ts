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
    }
  },
  args: {
    placeholder: 'Ask a question...',
    titleText: 'AI Assistant',
    fileUpload: 'off',
    voiceInput: 'on',
    showExpandButton: false,
    showMinimizeButton: false,
    expanded: false,
    minimizeIcon: 'default',
    enableReactions: false
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
            ?show-expand-button=${args.showExpandButton}
            ?show-minimize-button=${args.showMinimizeButton}
            ?expanded=${args.expanded}
            ?enable-reactions=${args.enableReactions}
            .minimizeIcon=${args.minimizeIcon}
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
