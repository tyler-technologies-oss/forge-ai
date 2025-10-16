import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-empty-state';
import '$lib/ai-suggestions';

const component = 'forge-ai-empty-state';

const meta = {
  title: 'AI Components/Primitives/Empty State',
  component,
  argTypes: {
    showSuggestions: {
      control: 'boolean',
      description: 'Show or hide the suggestions'
    }
  },
  args: {
    showSuggestions: true
  },
  render: (args: any) => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' }
    ];

    return html`
      <forge-ai-empty-state>
        ${args.showSuggestions
          ? html`
              <forge-ai-suggestions slot="actions" variant="block" .suggestions=${suggestions}> </forge-ai-suggestions>
            `
          : ''}
      </forge-ai-empty-state>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
