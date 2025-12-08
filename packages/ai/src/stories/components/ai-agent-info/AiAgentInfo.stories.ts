import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-agent-info';
import type { AgentInfo } from '$lib/ai-agent-info';

const component = 'forge-ai-agent-info';

const meta = {
  title: 'AI Components/Primitives/Agent Info',
  component,
  render: ({ name, description, identifier, version, model, lastUpdated }: AgentInfo) => {
    const agentInfo: AgentInfo = { name, description, identifier, version, model, lastUpdated };
    return html`<forge-ai-agent-info .agentInfo=${agentInfo}></forge-ai-agent-info>`;
  },
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    identifier: { control: 'text' },
    version: { control: 'text' },
    model: { control: 'text' },
    lastUpdated: { control: 'text' }
  },
  args: {
    name: 'Customer Support Agent',
    description: 'An AI assistant that helps customers with their inquiries and provides support.',
    identifier: 'agent-cs-001',
    version: '2.1.0',
    model: 'gpt-4-turbo',
    lastUpdated: '2024-01-15'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
