import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-agent-selector';

const component = 'forge-ai-agent-selector';

const meta = {
  title: 'AI Components/Primitives/Agent Selector',
  render: args => {
    return html`<forge-ai-agent-selector></forge-ai-agent-selector>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
