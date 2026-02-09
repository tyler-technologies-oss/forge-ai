import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-agent-selector';
import '$lib/ai-icon';
import type { AiAgentSelectorComponent, ForgeAiAgentSelectorChangeEventData } from '$lib/ai-agent-selector';

import { smallAgentList, largeAgentList } from '../../utils/mock-agents';

const component = 'forge-ai-agent-selector';

const meta = {
  title: 'AI Components/Primitives/Agent Selector',
  component,
  argTypes: {
    agentListSize: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Toggle between small (4) and large (50) agent lists'
    },
    titleText: {
      control: 'text',
      description: 'Fallback text when no agent is selected'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the selector (e.g., during streaming)'
    }
  },
  args: {
    agentListSize: 'small',
    titleText: 'AI Assistant',
    disabled: false
  },
  render: args => {
    const agents = args.agentListSize === 'large' ? largeAgentList : smallAgentList;
    const onChange = action('forge-ai-agent-selector-change');

    const handleChange = (e: CustomEvent<ForgeAiAgentSelectorChangeEventData>): void => {
      const selector = e.target as AiAgentSelectorComponent;
      selector.selectedAgentId = e.detail.agent?.id;
      onChange(e.detail);
    };

    return html`
      <forge-ai-agent-selector
        .agents=${agents}
        .titleText=${args.titleText}
        ?disabled=${args.disabled}
        @forge-ai-agent-selector-change=${handleChange}>
        <forge-ai-icon slot="icon"></forge-ai-icon>
      </forge-ai-agent-selector>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
