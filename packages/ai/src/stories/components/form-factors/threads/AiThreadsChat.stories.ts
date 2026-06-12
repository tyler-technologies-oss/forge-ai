import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import type { Thread } from '$lib/ai-threads';
import { MockAdapter } from '../../../utils/mock-adapter';

import '$lib/ai-threads';
import '$lib/ai-chatbot-launcher';

const component = 'forge-ai-threads';

const meta = {
  title: 'AI Components/Form Factors/Threads',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
    },
    fileUpload: {
      control: { type: 'select' },
      options: ['on', 'off'],
      description: 'Enable file upload functionality'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for input'
    }
  },
  args: {
    fileUpload: 'off',
    placeholder: 'Ask a question...'
  },
  render: args => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const sampleThreads: Thread[] = [
      {
        id: 'thread-1',
        title: 'Getting started with AI',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        messageCount: 5
      },
      {
        id: 'thread-2',
        title: 'Data analysis question',
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        messageCount: 12
      },
      {
        id: 'thread-3',
        title: 'How do I implement authentication?',
        createdAt: new Date().toISOString(),
        messageCount: 3
      }
    ];

    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${sampleThreads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=${action('forge-ai-threads-clear-history')}>
          <forge-ai-chatbot-launcher
            .adapter=${adapter}
            file-upload=${args.fileUpload}
            placeholder=${args.placeholder}
            @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
            @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
            @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}
            @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
