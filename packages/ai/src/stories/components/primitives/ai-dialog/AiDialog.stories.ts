import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-dialog';
import '$lib/ai-chat-interface';
import '$lib/ai-user-message';
import '$lib/ai-response-message';
import '$lib/ai-fab';

const component = 'forge-ai-dialog';

const meta = {
  title: 'AI Components/Primitives/Dialog',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the dialog is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the dialog is displayed in an expanded state'
    }
  },
  args: {
    open: false,
    expanded: false
  },
  render: args => {
    const handleExpandClick = () => {
      const dialogEl = document.querySelector('forge-ai-dialog') as any;
      if (dialogEl) {
        dialogEl.expanded = !dialogEl.expanded;
      }
    };

    const handleMinimizeClick = () => {
      const dialogEl = document.querySelector('forge-ai-dialog') as any;
      dialogEl?.close();
    };

    const dialog = html`
      <forge-ai-dialog ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-chat-interface
          ?show-expand-button=${window.innerWidth > 768}
          show-minimize-button
          ?expanded=${args.expanded}
          @forge-ai-chat-header-expand=${handleExpandClick}
          @forge-ai-chat-header-minimize=${handleMinimizeClick}>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const dialogEl = document.querySelector('forge-ai-dialog');
          dialogEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo (Atomic Composition)</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
          <p>This demo shows manual composition of ai-dialog + ai-chat-interface components.</p>
        </div>
        ${fab} ${dialog}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
