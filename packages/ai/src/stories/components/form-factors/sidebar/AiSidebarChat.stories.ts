import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat
} from '@tylertech/tyler-icons';

import '$lib/ai-sidebar-chat';
import '$lib/ai-button';
import { MockAdapter } from '../../../utils/mock-adapter';

import {
  defineScaffoldComponent,
  defineAppBarComponent,
  defineCardComponent,
  defineToolbarComponent
} from '@tylertech/forge';

// Define Forge components
defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineToolbarComponent();

// Register icons
IconRegistry.define([
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat
]);

const component = 'forge-ai-sidebar-chat';

const meta = {
  title: 'AI Components/Form Factors/Sidebar',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded modal state'
    },
    fileUpload: {
      control: { type: 'select' }, options: ['on', 'off'],
      description: 'Enable file upload functionality'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for input'
    }
  },
  args: {
    open: true,
    expanded: false,
    fileUpload: 'off',
    placeholder: 'Ask a question...'
  },
  render: args => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const handleExpand = (e: Event) => {
      action('forge-ai-sidebar-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };

    const handleCollapse = (e: Event) => {
      action('forge-ai-sidebar-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };

    const sidebarChat = html`
      <forge-ai-sidebar-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-sidebar-chat-open=${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-expand=${handleExpand}
        @forge-ai-sidebar-chat-collapse=${handleCollapse}>
        <forge-ai-chatbot
          .adapter=${adapter}
          file-upload=${args.fileUpload}
          ?expanded=${args.expanded}
          placeholder=${args.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
          @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
          @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${() => {
              const sidebar = document.querySelector('forge-ai-sidebar-chat');
              sidebar?.toggle();
            }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat component within a typical application layout.</p>
            <p>This form factor positions a slotted chatbot in a sidebar or modal.</p>
            <p>Try sending messages, expanding to modal, or closing the sidebar.</p>
            <p>Click "Ask AI Assistant" button in the toolbar to toggle the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">${sidebarChat}</div>
      </forge-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
