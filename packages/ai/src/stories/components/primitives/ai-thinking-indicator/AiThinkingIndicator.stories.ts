import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-thinking-indicator';

const component = 'forge-ai-thinking-indicator';

const meta = {
  title: 'AI Components/Primitives/Thinking Indicator',
  component,
  argTypes: {},
  args: {},
  render: (args: any) => {
    return html` <forge-ai-thinking-indicator></forge-ai-thinking-indicator> `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
