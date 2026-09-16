import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-steps';
import { ToolCall, ToolDefinition } from '$lib';
import type { AiStepLabel, AiStepLabelContext } from '$lib/ai-steps';

const component = 'forge-ai-steps';

const meta = {
  title: 'AI Components/Primitives/Steps',
  component,
  tags: ['autodocs']
} satisfies Meta;

const toolCalls: ToolCall[] = [
  {
    id: 'tool-1',
    messageId: 'message-1',
    name: 'searched.orders_table',
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
    name: 'filtered.region',
    args: { name: 'Coffee', type: 'Grounds' },
    result: { method: 'Manual', size: '10kg' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1500,
    endTimestamp: 2210
  },
  {
    id: 'tool-2',
    messageId: 'message-1',
    name: 'loaded.product_catalog',
    args: { name: 'Duplicate', type: 'Documents' },
    result: { message: 'Case not found' },
    status: 'error',
    type: 'agent',
    startTimestamp: 1420,
    endTimestamp: 2210
  }
];

/**
 * Tool calls with no args and no result (e.g. a plain "refresh cache" call) skip the
 * step-card entirely and render as just a marker and name, optionally with a duration
 * badge — falling back to the raw tool name unless a `ToolDefinition.displayName` is set.
 */
const noDetailToolCalls: ToolCall[] = [
  {
    id: 'tool-4',
    messageId: 'message-1',
    name: 'called.refresh_cache',
    args: {},
    status: 'complete',
    type: 'agent',
    startTimestamp: 1000,
    endTimestamp: 1180
  },
  {
    id: 'tool-5',
    messageId: 'message-1',
    name: 'called.customer_records',
    args: {},
    status: 'complete',
    type: 'agent'
  }
];

const noDetailTools = new Map<string, ToolDefinition>([
  ['called.customer_records', { name: 'called.customer_records', displayName: 'Customer records' }]
]);

const tools = new Map<string, ToolDefinition>([
  ['searched.orders_table', { name: 'searched.orders_table', displayName: 'Searched orders table' }],
  ['filtered.region', { name: 'filtered.region', displayName: 'Filtered region' }],
  ['loaded.product_catalog', { name: 'loaded.product_catalog', displayName: 'Loaded product catalog' }]
]);

// Annotates the resolved display name based on the tool call's own status.
const stepLabel = ({ displayName, toolCall }: AiStepLabelContext): string =>
  toolCall.status === 'error' ? `${displayName} (failed)` : displayName;

// Splits the resolved display name into a leading verb and the subject it acted on.
const stepLabelWithCode = ({ displayName }: AiStepLabelContext): AiStepLabel => {
  const [label, ...code] = displayName.split(' ');
  return { label, code: code.join(' ') };
};

export default meta;

type Story = StoryObj;

/**
 * Each step is labeled with the `displayName` from its matching `ToolDefinition` in the `tools` map.
 * This is the only thing most consumers need to set.
 */
export const Demo: Story = {
  render: () => html`<forge-ai-steps .toolCalls=${toolCalls} .tools=${tools}></forge-ai-steps>`
};

/**
 * Tools with no `displayName` — or no entry in `tools` at all — fall back to the raw `toolCall.name`,
 * so steps are never unlabeled.
 */
export const WithoutDisplayNames: Story = {
  render: () => html`<forge-ai-steps .toolCalls=${toolCalls}></forge-ai-steps>`
};

export const NoDetail: Story = {
  render: () => html`<forge-ai-steps .toolCalls=${noDetailToolCalls} .tools=${noDetailTools}></forge-ai-steps>`
};

/**
 * `stepLabel` is optional — it formats the label the component already resolved rather than replacing
 * the `displayName` lookup. It receives that resolved name plus the tool call, so labels can react to
 * per-call state; here the second step failed and is annotated accordingly.
 */
export const WithStepLabel: Story = {
  render: () => html`<forge-ai-steps .toolCalls=${toolCalls} .tools=${tools} .stepLabel=${stepLabel}></forge-ai-steps>`
};

/**
 * `stepLabel` can also restructure the label by returning an `AiStepLabel` (`{ label, code }`) instead
 * of a string. The `code` portion renders as an inline `<code>` chip, so here each `displayName` is
 * split into a leading verb and the subject it acted on. Because it's plain data rather than markup,
 * this works the same from any framework.
 */
export const WithCodeInStepLabel: Story = {
  render: () =>
    html`<forge-ai-steps .toolCalls=${toolCalls} .tools=${tools} .stepLabel=${stepLabelWithCode}></forge-ai-steps>`
};
