import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-button';
import { AiGradientContainerAttention } from '$lib/ai-gradient-container';

const component = 'forge-ai-button';
const clickAction = action('click');

const meta = {
  title: 'AI Components/Primitives/Button',
  component,
  render: args => {
    return html`
      <forge-ai-button .disabled=${args.disabled} attention=${args.attention} @click=${clickAction}>
        ${args.content}
      </forge-ai-button>
    `;
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    attention: {
      control: 'select',
      options: ['subtle', 'strong'] as AiGradientContainerAttention[],
      description: 'Attention level for the gradient container'
    },
    content: {
      control: 'text',
      description: 'The text content of the button'
    }
  },
  args: {
    disabled: false,
    attention: 'subtle',
    content: 'AI Assistant'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
