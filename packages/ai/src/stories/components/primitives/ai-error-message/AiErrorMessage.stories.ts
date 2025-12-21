import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-error-message';

const component = 'forge-ai-error-message';

const meta = {
  title: 'AI Components/Primitives/Error Message',
  component,
  render: () => {
    return html`
      <forge-ai-error-message>
        <span slot="title">Error</span>
        Failed to connect to the server. Please check your network connection and try again.
      </forge-ai-error-message>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
