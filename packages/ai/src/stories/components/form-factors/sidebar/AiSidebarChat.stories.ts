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
import '$lib/ai-disclaimer';
import '$lib/ai-chatbot';
import type { Thread } from '$lib/ai-threads';
import type { AgentInfo } from '$lib/ai-agent-info';
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
      control: { type: 'select' },
      options: ['on', 'off'],
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

    const agentInfo: AgentInfo = {
      name: 'Staff Assistant',
      version: '1.3.5',
      identifier: 'agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0',
      threadId: '7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf'
    };

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
          .agentInfo=${agentInfo}
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

export const WithDisclaimer: Story = {
  args: {
    open: true
  },
  render: function (args) {
    const handleAgree = (e: Event) => {
      action('forge-ai-disclaimer-agree')(e);
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-sidebar-chat');
      const disclaimer = chatEl?.querySelector('forge-ai-disclaimer');

      if (disclaimer && chatEl) {
        disclaimer.remove();

        const chatbot = document.createElement('forge-ai-chatbot') as any;
        chatbot.setAttribute('show-minimize-button', '');

        chatEl.appendChild(chatbot);
      }
    };

    const handleDisagree = (e: Event) => {
      action('forge-ai-disclaimer-disagree')(e);
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-sidebar-chat');
      chatEl?.close();
    };

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
        <forge-ai-disclaimer @forge-ai-disclaimer-agree=${handleAgree} @forge-ai-disclaimer-disagree=${handleDisagree}>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style="color: var(--mdc-theme-primary, #6200ee);">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <h2>Welcome to AI Assistant</h2>
          <p>
            By using this AI assistant, you agree to our terms of service. This assistant is provided as-is without
            warranties of any kind.
          </p>
          <p>
            Your interactions may be used to improve the service. Please do not share sensitive or personal information.
          </p>
          <p>
            The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
            reliable sources.
          </p>
        </forge-ai-disclaimer>
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Disclaimer"></forge-app-bar>

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
            <p>Demo of the AI Sidebar Chat with disclaimer.</p>
            <p>Click "Agree" to show the chatbot, or "Disagree" to close the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">${sidebarChat}</div>
      </forge-scaffold>
    `;
  }
};

export const WithConversationHistory: Story = {
  args: {
    open: true
  },
  render: function (args) {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const agentInfo: AgentInfo = {
      name: 'Staff Assistant',
      version: '1.3.5',
      identifier: 'agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0',
      threadId: '7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf'
    };

    const threads: Thread[] = [
      {
        id: 'thread-1',
        title: 'TypeScript best practices',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        messageCount: 8
      },
      {
        id: 'thread-2',
        title: 'Web component architecture',
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        messageCount: 15
      },
      {
        id: 'thread-3',
        title: 'How to use localStorage?',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        messageCount: 3
      },
      {
        id: 'thread-4',
        title: 'Lit reactive controllers explained',
        createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
        messageCount: 12
      },
      {
        id: 'thread-5',
        title: 'CSS Grid vs Flexbox comparison',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        messageCount: 6
      }
    ];

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

    const onConversationSelect = action('forge-ai-chatbot-conversation-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');

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
          .agentInfo=${agentInfo}
          .recentThreads=${threads}
          file-upload=${args.fileUpload}
          ?expanded=${args.expanded}
          placeholder=${args.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
          show-conversation-rename
          show-conversation-delete
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
          @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
          @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}
          @forge-ai-chatbot-conversation-select=${(e: CustomEvent) => onConversationSelect(e.detail)}
          @forge-ai-chatbot-new-chat=${onNewChat}
          @forge-ai-chatbot-conversations-open=${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=${onConversationsClose}>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Conversation History"></forge-app-bar>

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
            <p>Demo of the AI Sidebar Chat with conversation history.</p>
            <p>
              Click the hamburger icon in the chat header to view conversation history. The panel slides in from the
              left with a list of recent conversations.
            </p>
            <p>Try selecting a conversation, searching, or starting a new chat.</p>
          </forge-card>
        </main>

        <div slot="body-right">${sidebarChat}</div>
      </forge-scaffold>
    `;
  }
};
