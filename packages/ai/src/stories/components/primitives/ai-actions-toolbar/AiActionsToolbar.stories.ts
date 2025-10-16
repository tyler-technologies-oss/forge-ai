import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-actions-toolbar';

const component = 'forge-ai-actions-toolbar';

const meta = {
  title: 'AI Components/Primitives/Actions Toolbar',
  component,
  render: (args: any) => {
    const onAction = action('forge-ai-actions-toolbar-action');
    return html`
      <p style="margin: 0 0 16px 0; color: var(--forge-theme-text-primary);">
        Click any button to see the action event in the Actions panel below.
      </p>
      <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=${onAction}></forge-ai-actions-toolbar>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const InMessageContext: Story = {
  render: (args: any) => {
    const onAction = action('forge-ai-actions-toolbar-action');
    return html`
      <div style="max-width: 600px; background: var(--forge-theme-surface); border-radius: 8px; padding: 16px;">
        <div
          data-copyable
          style="margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-variant); border-radius: 4px; color: var(--forge-theme-text-primary);">
          This is sample message content that can be copied using the copy button in the toolbar below. The toolbar
          demonstrates how it would appear in an AI response message context.
        </div>
        <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=${onAction}></forge-ai-actions-toolbar>
      </div>
    `;
  }
};
