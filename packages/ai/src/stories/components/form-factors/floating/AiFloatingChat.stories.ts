import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-floating-chat';
import '$lib/ai-user-message';
import '$lib/ai-response-message';
import '$lib/ai-fab';
import '$lib/ai-suggestions';
import '$lib/ai-prompt';
import { Suggestion } from '$lib/ai-suggestions';

const component = 'forge-ai-floating-chat';

const meta = {
  title: 'AI Components/Form Factors/Floating',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded state'
    }
  },
  args: {
    open: false,
    expanded: false
  },
  render: args => {
    const chat = html`
      <forge-ai-floating-chat ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-floating-chat>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${fab} ${chat}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: args => {
    const suggestions = [
      { text: 'Can you show me an example?', value: 'example' },
      { text: 'How do I use generics with interfaces?', value: 'interfaces' },
      { text: 'What are the benefits of generics?', value: 'benefits' },
      { text: 'How do I constrain generic types?', value: 'constraints' }
    ] as Suggestion[];

    const chat = html`
      <forge-ai-floating-chat ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=${suggestions}
          @forge-ai-suggestions-select=${(event: CustomEvent) => {
            console.log('Selected suggestion:', event.detail);
          }}>
        </forge-ai-suggestions>

        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-floating-chat>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${fab} ${chat}
      </div>
    `;
  }
};
