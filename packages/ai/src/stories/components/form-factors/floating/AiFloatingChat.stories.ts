import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-floating-chat';
import '$lib/ai-fab';
import '$lib/ai-disclaimer';
import { type Thread } from '$lib/ai-chatbot';
import { MockAdapter } from '../../../utils/mock-adapter';

const component = 'forge-ai-floating-chat';

const meta = {
  title: 'AI Components/Form Factors/Floating',
  component,
  argTypes: {
    adapter: {
      control: false,
      description: 'The adapter for communication with the AI service'
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded state'
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
    open: false,
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
      action('forge-ai-floating-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };

    const handleCollapse = (e: Event) => {
      action('forge-ai-floating-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };

    const chat = html`
      <forge-ai-floating-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-floating-chat-open=${action('forge-ai-floating-chat-open')}
        @forge-ai-floating-chat-close=${action('forge-ai-floating-chat-close')}
        @forge-ai-floating-chat-expand=${handleExpand}
        @forge-ai-floating-chat-collapse=${handleCollapse}>
        <forge-ai-chatbot
          .adapter=${adapter}
          file-upload=${args.fileUpload}
          ?expanded=${args.expanded}
          placeholder=${args.placeholder}
          show-expand-button
          show-minimize-button
          show-conversation-rename
          show-conversation-delete
          minimize-icon="default"
          @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
          @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
          @forge-ai-chatbot-clear=${action('forge-ai-chatbot-clear')}
          @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}>
        </forge-ai-chatbot>
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
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${fab} ${chat}
      </div>
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
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-floating-chat');
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
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-floating-chat');
      chatEl?.close();
    };

    const handleExpand = (e: Event) => {
      action('forge-ai-floating-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };

    const handleCollapse = (e: Event) => {
      action('forge-ai-floating-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Disclaimer</h2>
          <p>
            This example shows a disclaimer in the default slot. Click "Agree" to show the chatbot, or "Disagree" to
            close the dialog.
          </p>
        </div>
        <forge-ai-floating-chat
          ?open=${args.open}
          ?expanded=${args.expanded}
          @forge-ai-floating-chat-open=${action('forge-ai-floating-chat-open')}
          @forge-ai-floating-chat-close=${action('forge-ai-floating-chat-close')}
          @forge-ai-floating-chat-expand=${handleExpand}
          @forge-ai-floating-chat-collapse=${handleCollapse}>
          <forge-ai-disclaimer
            @forge-ai-disclaimer-agree=${handleAgree}
            @forge-ai-disclaimer-disagree=${handleDisagree}>
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
              Your interactions may be used to improve the service. Please do not share sensitive or personal
              information.
            </p>
            <p>
              The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
              reliable sources.
            </p>
          </forge-ai-disclaimer>
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=${() => {
            const chatEl = document.querySelector('forge-ai-floating-chat');
            chatEl?.show();
          }}>
        </forge-ai-fab>
      </div>
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

    const threads: Thread[] = [
      {
        id: 'thread-1',
        title: 'TypeScript best practices',
        time: '2:30 PM',
        date: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        id: 'thread-2',
        title: 'Web component architecture',
        time: '11:45 AM',
        date: new Date(Date.now() - 5 * 60 * 60 * 1000)
      },
      {
        id: 'thread-3',
        title: 'How to use localStorage?',
        time: 'Yesterday',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000)
      },
      {
        id: 'thread-4',
        title: 'Lit reactive controllers explained',
        time: 'Yesterday',
        date: new Date(Date.now() - 36 * 60 * 60 * 1000)
      },
      {
        id: 'thread-5',
        title: 'CSS Grid vs Flexbox comparison',
        time: '2 days ago',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      }
    ];

    const handleExpand = (e: Event) => {
      action('forge-ai-floating-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };

    const handleCollapse = (e: Event) => {
      action('forge-ai-floating-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };

    const onConversationSelect = action('forge-ai-chatbot-conversation-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Conversation History</h2>
          <p>
            Click the FAB in the bottom right to open the chat. The hamburger icon in the header opens the conversations
            panel which slides in from the left.
          </p>
          <p>Try selecting a conversation, searching, or starting a new chat.</p>
        </div>
        <forge-ai-floating-chat
          ?open=${args.open}
          ?expanded=${args.expanded}
          @forge-ai-floating-chat-open=${action('forge-ai-floating-chat-open')}
          @forge-ai-floating-chat-close=${action('forge-ai-floating-chat-close')}
          @forge-ai-floating-chat-expand=${handleExpand}
          @forge-ai-floating-chat-collapse=${handleCollapse}>
          <forge-ai-chatbot
            .adapter=${adapter}
            .recentThreads=${threads}
            file-upload=${args.fileUpload}
            ?expanded=${args.expanded}
            placeholder=${args.placeholder}
            show-expand-button
            show-minimize-button
            show-conversations-button
            show-conversation-rename
            show-conversation-delete
            minimize-icon="default"
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
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=${() => {
            const chatEl = document.querySelector('forge-ai-floating-chat');
            chatEl?.show();
          }}>
        </forge-ai-fab>
      </div>
    `;
  }
};
