import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-threads';
import type { AiThreadsComponent, Thread } from '$lib/ai-threads';
import { MockAdapter } from '../../../utils/mock-adapter';

const sampleThreads: Thread[] = [
  { id: '1', title: 'Getting Started with AI', time: '2:30 PM', date: new Date('2024-01-15') },
  { id: '2', title: 'Code Review Discussion', time: '10:45 AM', date: new Date('2024-01-14') },
  { id: '3', title: 'Project Planning', time: '4:15 PM', date: new Date('2024-01-13') },
  { id: '4', title: 'Bug Investigation', time: '9:20 AM', date: new Date('2024-01-12') },
  { id: '5', title: 'Feature Development', time: '1:00 PM', date: new Date('2024-01-11') }
];

const component = 'forge-ai-threads';

const meta = {
  title: 'AI Components/Primitives/Threads',
  component,
  argTypes: {
    threads: {
      control: 'object',
      description: 'Array of threads to display in the navigation list'
    }
  },
  args: {
    threads: sampleThreads
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const handleClearHistory = (event: CustomEvent) => {
      action('forge-ai-threads-clear-history')(event);
      const threadsComponent = event.target as AiThreadsComponent;
      if (threadsComponent) {
        threadsComponent.threads = [];
      }
    };

    return html`
      <div style="height: 600px;">
        <forge-ai-threads
          .threads=${args.threads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=${handleClearHistory}>
          <forge-ai-chatbot
            .adapter=${adapter}
            show-expand-button
            @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
