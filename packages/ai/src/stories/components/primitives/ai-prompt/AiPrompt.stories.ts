import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-prompt';
import '$lib/ai-prompt/prompt-button';
import '$lib/ai-voice-input';
import '$lib/ai-file-picker';
import { AiPromptVariant } from '$lib/ai-prompt';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconChevronDown, tylIconWebAlt } from '@tylertech/tyler-icons';

defineIconComponent();

IconRegistry.define([tylIconChevronDown, tylIconWebAlt]);

const component = 'forge-ai-prompt';

const meta = {
  title: 'AI Components/Primitives/Prompt',
  component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['stacked', 'inline'] as AiPromptVariant[],
      description: 'Layout variant for the prompt component'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    showAdditionalAction: {
      control: 'boolean',
      description: 'Show additional action button (only visible in stacked variant)'
    }
  },
  args: {
    variant: 'stacked',
    placeholder: 'Ask a question...',
    showAdditionalAction: false
  },
  render: (args: any) => {
    const onSend = action('forge-ai-prompt-send');
    return html`
      <forge-ai-prompt variant=${args.variant} placeholder=${args.placeholder} @forge-ai-prompt-send=${onSend}>
        <forge-ai-voice-input slot="actions"></forge-ai-voice-input>
        <forge-ai-file-picker slot="actions"></forge-ai-file-picker>
        ${args.showAdditionalAction
          ? html`
              <forge-prompt-button slot="actions">
                <forge-icon name="web_alt" slot="leading"></forge-icon>
                Web search
              </forge-prompt-button>
              <forge-prompt-button slot="actions">
                GPT-4
                <forge-icon name="chevron_down" slot="trailing"></forge-icon>
              </forge-prompt-button>
            `
          : ''}
      </forge-ai-prompt>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
