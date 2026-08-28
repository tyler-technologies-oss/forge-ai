import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-steps';

const component = 'forge-ai-steps';

const meta = {
  title: 'AI Components/Primitives/Steps',
  component,
  tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: () => html`<forge-ai-steps></forge-ai-steps>`
};
