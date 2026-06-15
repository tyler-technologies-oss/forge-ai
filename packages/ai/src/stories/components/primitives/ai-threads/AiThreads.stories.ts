import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-threads';
import '@tylertech/forge/scaffold';
import '@tylertech/forge/app-bar';
import '$lib/ai-chatbot-launcher';
import type { AiThreadsComponent, Thread } from '$lib/ai-threads';
import { MockAdapter } from '../../../utils/mock-adapter';

const sampleThreads: Thread[] = [
  { id: '1', title: 'Getting Started with AI', createdAt: '2024-01-15T14:30:00Z', messageCount: 5 },
  { id: '2', title: 'Code Review Discussion', createdAt: '2024-01-14T10:45:00Z', messageCount: 12 },
  { id: '3', title: 'Project Planning', createdAt: '2024-01-13T16:15:00Z', messageCount: 8 },
  { id: '4', title: 'Bug Investigation', createdAt: '2024-01-12T09:20:00Z', messageCount: 3 },
  { id: '5', title: 'Feature Development', createdAt: '2024-01-11T13:00:00Z', messageCount: 15 }
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
    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Threads"></forge-app-bar>>
        <forge-ai-threads
          slot="body"
          style="height: 600px;"
          .threads=${args.threads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=${action('forge-ai-threads-clear-history')}>
          <forge-ai-chatbot-launcher
            .adapter=${adapter}
            @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </forge-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const InfiniteScroll: Story = {
  render: () => {
    const generateThreads = (startId: number, count: number): Thread[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: `${startId + i}`,
        title: `Thread ${startId + i}`,
        createdAt: new Date(Date.now() - i * 86400000).toISOString(),
        messageCount: Math.floor(Math.random() * 20) + 1
      }));
    };

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    let nextThreadId = 21;
    const initialThreads = generateThreads(1, 20);

    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Threads with Infinite Scroll"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          style="height: 600px; border: 1px solid var(--forge-theme-outline);"
          .threads=${initialThreads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-load-more=${(e: CustomEvent) => {
            action('forge-ai-threads-load-more')(e);
            setTimeout(() => {
              const moreThreads = generateThreads(nextThreadId, 10);
              nextThreadId += 10;
              e.detail.appendResults(moreThreads);
            }, 1000);
          }}>
          <forge-ai-chatbot-launcher
            .adapter=${adapter}
            @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </forge-scaffold>
    `;
  }
};
