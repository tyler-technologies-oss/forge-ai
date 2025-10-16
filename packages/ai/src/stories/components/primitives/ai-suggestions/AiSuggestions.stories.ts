import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-suggestions';
import { Suggestion, AiSuggestionsVariant } from '$lib/ai-suggestions';

const component = 'forge-ai-suggestions';

const meta = {
  title: 'AI Components/Primitives/Suggestions',
  component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['inline', 'block'] as AiSuggestionsVariant[],
      description: 'Display variant for suggestions layout'
    }
  },
  args: {
    variant: 'inline'
  },
  render: (args: any) => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' },
      { text: 'Translate text', value: 'translate' },
      { text: 'Generate ideas', value: 'brainstorm' },
      { text: 'Review my work', value: 'review' },
      { text: 'Explain a concept', value: 'explain' },
      { text: 'Ask a question', value: 'question' }
    ] as Suggestion[];

    const onSuggestionSelect = action('forge-ai-suggestions-select');

    return html`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${suggestions}
          variant=${args.variant}
          @forge-ai-suggestions-select=${onSuggestionSelect}></forge-ai-suggestions>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
