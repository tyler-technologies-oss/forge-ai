import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-embedded-chat';
import { MockAdapter } from '../../../utils/mock-adapter';

const component = 'forge-ai-embedded-chat';

const meta = {
  title: 'AI Components/Form Factors/Embedded',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the modal view is open when expanded'
    },
    gradientVariant: {
      control: { type: 'select' },
      options: ['low', 'medium', 'high'],
      description: 'Controls the gradient variant applied to the container'
    },
    fileUpload: {
      control: { type: 'select' },
      options: ['enabled', 'disabled'],
      description: 'Enable file upload functionality'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for input'
    }
  },
  args: {
    expanded: false,
    gradientVariant: 'medium',
    fileUpload: 'disabled',
    placeholder: 'Ask a question...'
  },
  render: args => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div style="max-width: 800px; margin: 0 auto;">
        <h2>AI Embedded Chat Demo</h2>
        <p>This form factor embeds ai-chatbot within ai-gradient-container for inline page usage.</p>
        <p>Try sending messages or clicking the expand button to view in fullscreen modal.</p>

        <forge-ai-embedded-chat
          .adapter=${adapter}
          ?expanded=${args.expanded}
          gradient-variant=${args.gradientVariant}
          file-upload=${args.fileUpload}
          placeholder=${args.placeholder}
          @forge-ai-embedded-chat-expand=${action('forge-ai-embedded-chat-expand')}
          @forge-ai-embedded-chat-collapse=${action('forge-ai-embedded-chat-collapse')}
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
          @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
          @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}>
        </forge-ai-embedded-chat>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
