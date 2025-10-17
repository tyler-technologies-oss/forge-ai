import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-header';
import { defineCardComponent, defineIconButtonComponent } from '@tylertech/forge';

const component = 'forge-ai-chat-header';

// Storybook actions for events
const expandAction = action('forge-ai-chat-header-expand');
const minimizeAction = action('forge-ai-chat-header-minimize');
const clearChatAction = action('forge-ai-chat-header-clear');
const infoAction = action('forge-ai-chat-header-info');

defineCardComponent();
defineIconButtonComponent();

const meta = {
  title: 'AI Components/Primitives/Chat Header',
  component,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text to display in the header slot'
    },
    showExpandButton: {
      control: 'boolean',
      description: 'Controls whether the expand button is visible'
    },
    showMinimizeButton: {
      control: 'boolean',
      description: 'Controls whether the minimize button is visible'
    },
    expanded: {
      control: 'boolean',
      description: 'Indicates the current expanded state for displaying the appropriate expand/collapse icon'
    },
    minimizeIcon: {
      control: { type: 'select' },
      options: ['default', 'panel'],
      description: 'Controls which minimize icon to display'
    }
  },
  args: {
    title: 'AI Assistant',
    showExpandButton: false,
    showMinimizeButton: false,
    expanded: false,
    minimizeIcon: 'default'
  },
  render: (args: any) => {
    return html`
      <forge-ai-chat-header
        .showExpandButton=${args.showExpandButton}
        .showMinimizeButton=${args.showMinimizeButton}
        .expanded=${args.expanded}
        .minimizeIcon=${args.minimizeIcon}
        @forge-ai-chat-header-expand=${expandAction}
        @forge-ai-chat-header-minimize=${minimizeAction}
        @forge-ai-chat-header-clear=${clearChatAction}
        @forge-ai-chat-header-info=${infoAction}>
        <h1 slot="title">${args.title}</h1>
      </forge-ai-chat-header>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
