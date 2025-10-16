import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-fab';

const component = 'forge-ai-fab';
const clickAction = action('click');

const meta = {
  title: 'AI Components/Primitives/FAB',
  component,
  render: args => {
    return html`
      <forge-ai-fab .disabled=${args.disabled} .extended=${args.extended} @click=${clickAction}>
        ${args.content}
      </forge-ai-fab>
    `;
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    extended: {
      control: 'boolean',
      description: 'Whether the button is extended'
    },
    content: {
      control: 'text',
      description: 'The text content of the button'
    }
  },
  args: {
    disabled: false,
    extended: false,
    content: 'AI Assistant'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
