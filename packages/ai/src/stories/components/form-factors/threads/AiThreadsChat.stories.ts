import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import type { Thread } from '$lib/ai-threads';
import { MockAdapter } from '../../../utils/mock-adapter';

import '$lib/ai-threads';
import '$lib/ai-chatbot';

const component = 'forge-ai-threads';

const meta = {
  title: 'AI Components/Form Factors/Threads',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
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

    const sampleThreads: Thread[] = [
      {
        id: 'thread-1',
        title: 'Getting started with AI',
        time: '10:30 AM',
        date: new Date(Date.now() - 86400000)
      },
      {
        id: 'thread-2',
        title: 'Data analysis question',
        time: '2:15 PM',
        date: new Date(Date.now() - 3600000)
      },
      {
        id: 'thread-3',
        title: 'How do I implement authentication?',
        time: '4:45 PM',
        date: new Date()
      }
    ];

    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${sampleThreads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=${action('forge-ai-threads-clear-history')}>
          <forge-ai-chatbot
            .adapter=${adapter}
            ?enable-file-upload=${args.enableFileUpload}
            placeholder=${args.placeholder}
            @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
            @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
            @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
            @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
            @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
