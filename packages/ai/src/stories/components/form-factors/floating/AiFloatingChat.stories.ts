import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-floating-chat';
import '$lib/ai-fab';
import { MockAdapter } from '../../../utils/mock-adapter';

const component = 'forge-ai-floating-chat';

const meta = {
  title: 'AI Components/Form Factors/Floating',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded state'
    },
    enableFileUpload: {
      control: { type: 'boolean' },
      description: 'Enable file upload functionality'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for input'
    }
  },
  args: {
    open: false,
    expanded: false,
    enableFileUpload: false,
    placeholder: 'Ask a question...'
  },
  render: args => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const handleExpand = (e: Event) => {
      action('forge-ai-floating-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };

    const handleCollapse = (e: Event) => {
      action('forge-ai-floating-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };

    const chat = html`
      <forge-ai-floating-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-floating-chat-open=${action('forge-ai-floating-chat-open')}
        @forge-ai-floating-chat-close=${action('forge-ai-floating-chat-close')}
        @forge-ai-floating-chat-expand=${handleExpand}
        @forge-ai-floating-chat-collapse=${handleCollapse}>
        <forge-ai-chatbot
          .adapter=${adapter}
          ?enable-file-upload=${args.enableFileUpload}
          ?expanded=${args.expanded}
          placeholder=${args.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="default"
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
          @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
          @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${fab} ${chat}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
