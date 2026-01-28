import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-message-thread';
import '$lib/ai-suggestions';
import { type MessageItem, type ToolDefinition } from '$lib/ai-chatbot';

const component = 'forge-ai-message-thread';

const meta = {
  title: 'AI Components/Primitives/Message Thread',
  component,
  argTypes: {
    enableReactions: {
      control: 'boolean',
      description: 'Enable thumbs up/down reaction buttons on assistant messages'
    },
    showThinking: {
      control: 'boolean',
      description: 'Show thinking indicator when AI is processing'
    },
    autoScroll: {
      control: { type: 'select' },
      options: ['off', 'on'],
      description: 'Automatically emit scroll-request when content changes',
      defaultValue: 'on'
    }
  },
  args: {
    enableReactions: false,
    showThinking: false,
    autoScroll: 'on'
  },
  render: args => {
    const sampleMessages: MessageItem[] = [
      {
        type: 'message',
        data: {
          id: 'msg-1',
          role: 'user',
          content: 'Hello! Can you help me understand web components?',
          timestamp: Date.now() - 60000,
          status: 'complete'
        }
      },
      {
        type: 'message',
        data: {
          id: 'msg-2',
          role: 'assistant',
          content:
            'Of course! Web Components are a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.\n\nThe main technologies are:\n- **Custom Elements**: Define new HTML elements\n- **Shadow DOM**: Encapsulated styles and markup\n- **HTML Templates**: Reusable markup patterns',
          timestamp: Date.now() - 55000,
          status: 'complete'
        }
      },
      {
        type: 'message',
        data: {
          id: 'msg-3',
          role: 'user',
          content: 'Can you show me a tool call example?',
          timestamp: Date.now() - 30000,
          status: 'complete'
        }
      },
      {
        type: 'toolCall',
        data: {
          id: 'tool-1',
          messageId: 'msg-4',
          name: 'search_documentation',
          args: { query: 'web components tool call example' },
          status: 'complete',
          type: 'client',
          result: { found: true }
        }
      },
      {
        type: 'message',
        data: {
          id: 'msg-4',
          role: 'assistant',
          content: "I've searched the documentation and found some examples for you!",
          timestamp: Date.now() - 20000,
          status: 'complete'
        }
      }
    ];

    const sampleTools: Map<string, ToolDefinition> = new Map([
      [
        'search_documentation',
        {
          name: 'search_documentation',
          displayName: 'Search Documentation',
          description: 'Search through documentation'
        }
      ]
    ]);

    const onCopy = action('forge-ai-message-thread-copy');
    const onResend = action('forge-ai-message-thread-resend');
    const onThumbsUp = action('forge-ai-message-thread-thumbs-up');
    const onThumbsDown = action('forge-ai-message-thread-thumbs-down');
    const onScrollRequest = action('forge-ai-message-thread-scroll-request');

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto; border: 1px solid #ccc; overflow-y: auto;">
        <forge-ai-message-thread
          .messageItems=${sampleMessages}
          .tools=${sampleTools}
          ?enable-reactions=${args.enableReactions}
          ?show-thinking=${args.showThinking}
          auto-scroll=${args.autoScroll}
          @forge-ai-message-thread-copy=${onCopy}
          @forge-ai-message-thread-resend=${onResend}
          @forge-ai-message-thread-thumbs-up=${onThumbsUp}
          @forge-ai-message-thread-thumbs-down=${onThumbsDown}
          @forge-ai-message-thread-scroll-request=${onScrollRequest}>
        </forge-ai-message-thread>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
