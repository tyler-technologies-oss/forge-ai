import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-steps';
import { ToolDefinition, ToolCall } from '$lib';

const component = 'forge-ai-steps';

const meta = {
  title: 'AI Components/Primitives/Steps',
  component,
  tags: ['autodocs']
} satisfies Meta;


const tools = new Map<string, ToolDefinition>([
  ['searched', { name: 'searched', displayName: 'Searched' }],
  ['filtered', { name: 'filtered', displayName: 'Filtered' }],
  ['deleted', { name: 'deleted', displayName: 'Deleted' }],
]);

const toolCalls: ToolCall[] = [
  {
    id: 'tool-1',
    messageId: 'message-1',
    name: 'searched',
    args: { name: 'Ergonomic', type: 'Table' },
    result: { temperature: 68, condition: 'Sunny' },
    status: 'complete',
    type: 'agent',
    startTimestamp: 1000,
    endTimestamp: 1420
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'filtered',
    args: { name: 'Coffee', type: 'Grounds' },
    result: { message: 'Case not found' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1500,
    endTimestamp: 2210
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'deleted',
    args: { name: 'Duplicate', type: 'Documents' },
    result: { message: 'Case not found' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1420,
    endTimestamp: 2210
  }
];


export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: () => html`<forge-ai-steps .steps=${tools} .stepCalls=${toolCalls} ></forge-ai-steps>`
};
