import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-threads';
import { defineCardComponent } from '@tylertech/forge';
import { AiThreadsComponent, Thread } from '$lib/ai-threads';

defineCardComponent();

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
    const onThreadSelect = action('forge-ai-threads-select');
    const onNewChat = action('forge-ai-threads-new-chat');
    const onClearHistory = action('forge-ai-threads-clear-history');

    let threadsComponentRef: AiThreadsComponent;

    const handleClearHistory = (event: CustomEvent) => {
      onClearHistory(event);
      // Clear the threads array
      const threadsComponent = event.target as AiThreadsComponent;
      if (threadsComponent) {
        threadsComponent.threads = [];
        threadsComponentRef = threadsComponent;
      }
    };

    return html`
      <forge-ai-threads
        .threads=${args.threads}
        @forge-ai-threads-select=${onThreadSelect}
        @forge-ai-threads-new-chat=${onNewChat}
        @forge-ai-threads-clear-history=${handleClearHistory}></forge-ai-threads>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
