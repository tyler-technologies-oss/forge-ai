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
      description: 'The title text to display in the header'
    }
  },
  args: {
    title: 'AI Assistant'
  },
  render: (args: any) => {
    return html`
      <forge-ai-chat-header
        .title=${args.title}
        @forge-ai-chat-header-expand=${expandAction}
        @forge-ai-chat-header-minimize=${minimizeAction}
        @forge-ai-chat-header-clear=${clearChatAction}
        @forge-ai-chat-header-info=${infoAction}>
      </forge-ai-chat-header>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithCustomTitle: Story = {
  args: {
    title: 'My Custom AI Bot'
  }
};

export const WithHeaderActions: Story = {
  render: (args: any) => {
    return html`
      <forge-ai-chat-header
        .title=${args.title}
        @forge-ai-chat-header-expand=${expandAction}
        @forge-ai-chat-header-minimize=${minimizeAction}
        @forge-ai-chat-header-clear=${clearChatAction}
        @forge-ai-chat-header-info=${infoAction}>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    `;
  }
};

export const InCard: Story = {
  render: (args: any) => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=${args.title}
          @forge-ai-chat-header-expand=${expandAction}
          @forge-ai-chat-header-minimize=${minimizeAction}
          @forge-ai-chat-header-clear=${clearChatAction}
          @forge-ai-chat-header-info=${infoAction}>
        </forge-ai-chat-header>
      </forge-card>
    `;
  }
};

export const InCardWithActions: Story = {
  args: {
    title: 'Support Assistant'
  },
  render: (args: any) => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=${args.title}
          @forge-ai-chat-header-expand=${expandAction}
          @forge-ai-chat-header-minimize=${minimizeAction}
          @forge-ai-chat-header-clear=${clearChatAction}
          @forge-ai-chat-header-info=${infoAction}>
        </forge-ai-chat-header>
      </forge-card>
    `;
  }
};
