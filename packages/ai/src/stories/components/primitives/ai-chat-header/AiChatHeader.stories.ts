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
    },
    showDropdownMenu: {
      control: 'boolean',
      description: 'Controls whether the dropdown menu is visible'
    },
    showClearChat: {
      control: 'boolean',
      description: 'Controls whether the clear chat menu item is visible'
    },
    showInfo: {
      control: 'boolean',
      description: 'Controls whether the info menu item is visible'
    },
    customIcon: {
      control: { type: 'select' },
      options: ['default', 'emoji', 'custom-svg'],
      description: 'Choose icon type to display'
    }
  },
  args: {
    title: 'AI Assistant',
    showExpandButton: false,
    showMinimizeButton: false,
    expanded: false,
    minimizeIcon: 'default',
    showDropdownMenu: true,
    showClearChat: true,
    showInfo: true,
    customIcon: 'default'
  },
  render: (args: any) => {
    const getCustomIcon = () => {
      switch (args.customIcon) {
        case 'emoji':
          return html`<div slot="icon" style="font-size: 24px;">🤖</div>`;
        case 'custom-svg':
          return html`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          `;
        default:
          return '';
      }
    };

    return html`
      <forge-ai-chat-header
        .showExpandButton=${args.showExpandButton}
        .showMinimizeButton=${args.showMinimizeButton}
        .expanded=${args.expanded}
        .minimizeIcon=${args.minimizeIcon}
        .showDropdownMenu=${args.showDropdownMenu}
        .showClearChat=${args.showClearChat}
        .showInfo=${args.showInfo}
        @forge-ai-chat-header-expand=${expandAction}
        @forge-ai-chat-header-minimize=${minimizeAction}
        @forge-ai-chat-header-clear=${clearChatAction}
        @forge-ai-chat-header-info=${infoAction}>
        ${getCustomIcon()}
        <h1 slot="title">${args.title}</h1>
      </forge-ai-chat-header>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
