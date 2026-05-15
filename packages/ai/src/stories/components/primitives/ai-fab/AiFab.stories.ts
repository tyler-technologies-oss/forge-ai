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

export const Branded: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    const fabLogo =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%234A90E2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E";

    return html`
      <forge-ai-fab .extended=${true} @click=${clickAction}>
        <img slot="icon" src="${fabLogo}" alt="Acme Corp" style="width: 24px; height: 24px; border-radius: 50%;" />
        Acme Support
      </forge-ai-fab>
    `;
  }
};
