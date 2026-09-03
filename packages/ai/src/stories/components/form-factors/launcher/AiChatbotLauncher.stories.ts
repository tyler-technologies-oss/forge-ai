import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot-launcher';
import type { Suggestion } from '$lib/ai-suggestions';
import type { Thread } from '$lib/ai-threads';
import type { AiChatbotLauncherComponent } from '$lib/ai-chatbot-launcher';
import type { ChatMessage } from '$lib/ai-chatbot/types';
import { MockAdapter } from '../../../utils/mock-adapter';
import { standaloneStoryParams } from '../../../utils';
import { defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconHistory, tylIconSettings } from '@tylertech/tyler-icons';

const component = 'forge-ai-chatbot-launcher';

const meta = {
  title: 'AI Components/Form Factors/Launcher',
  component,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    titleText: {
      control: 'text',
      description: 'Title text displayed in the welcome view'
    },
    descriptionText: {
      control: 'text',
      description: 'Description text displayed below the title'
    },
    fileUpload: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable file upload functionality'
    },
    voiceInput: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable voice input functionality'
    },
    exportOption: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Control export option visibility'
    },
    enableReactions: {
      control: 'boolean',
      description: 'Enable thumbs up/down reaction buttons'
    },
    disclaimerText: {
      control: 'text',
      description: 'Disclaimer text displayed below the prompt'
    },
    threadName: {
      control: 'text',
      description: 'Thread name displayed in conversation view breadcrumb'
    },
    showThreadRename: {
      control: 'boolean',
      description: 'Show rename option in thread actions menu'
    },
    showThreadDelete: {
      control: 'boolean',
      description: 'Show delete option in thread actions menu'
    },
    totalThreads: {
      control: 'number',
      description:
        'Total number of chats available for the history popover/view. Greater than loaded threads enables infinite scroll'
    },
    threadsLoading: {
      control: 'boolean',
      description: 'Whether chats are loading, used to gate the history button and its disabled state'
    }
  },
  args: {
    placeholder: 'How can I help you today?',
    titleText: 'AI Assistant',
    descriptionText: '',
    fileUpload: 'on',
    voiceInput: 'on',
    exportOption: 'on',
    enableReactions: false,
    disclaimerText: 'AI can make mistakes. Always verify responses.'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const onConnected = action('forge-ai-chatbot-launcher-connected');
    const onMessageSent = action('forge-ai-chatbot-launcher-message-sent');
    const onMessageReceived = action('forge-ai-chatbot-launcher-message-received');
    const onToolCall = action('forge-ai-chatbot-launcher-tool-call');
    const onError = action('forge-ai-chatbot-launcher-error');
    const onConversationStart = action('forge-ai-chatbot-launcher-conversation-start');
    const onClear = action('forge-ai-chatbot-launcher-clear');
    const onFeedback = action('forge-ai-chatbot-launcher-response-feedback');
    const onInfo = action('forge-ai-chatbot-launcher-info');
    const onAgentChange = action('forge-ai-chatbot-launcher-agent-change');

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          description-text=${args.descriptionText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          export-option=${args.exportOption}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-connected=${onConnected}
          @forge-ai-chatbot-launcher-message-sent=${onMessageSent}
          @forge-ai-chatbot-launcher-message-received=${onMessageReceived}
          @forge-ai-chatbot-launcher-tool-call=${onToolCall}
          @forge-ai-chatbot-launcher-error=${onError}
          @forge-ai-chatbot-launcher-conversation-start=${onConversationStart}
          @forge-ai-chatbot-launcher-clear=${onClear}
          @forge-ai-chatbot-launcher-response-feedback=${(evt: CustomEvent) => onFeedback(evt.detail)}
          @forge-ai-chatbot-launcher-info=${onInfo}
          @forge-ai-chatbot-launcher-agent-change=${(evt: CustomEvent) => onAgentChange(evt.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithThreadName: Story = {
  args: {
    threadName: 'Discussion about project requirements and timeline',
    showThreadRename: true,
    showThreadDelete: true
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const onThreadRename = action('forge-ai-chatbot-launcher-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-launcher-thread-delete');

    const agentInfo = {
      threadId: 'thread-12345'
    };

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          .agentInfo=${agentInfo}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          export-option=${args.exportOption}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          thread-name=${args.threadName}
          ?show-thread-rename=${args.showThreadRename}
          ?show-thread-delete=${args.showThreadDelete}
          @forge-ai-chatbot-launcher-thread-rename=${(evt: CustomEvent) => {
            onThreadRename(evt.detail);
            const launcher = evt.target as any;
            launcher.threadName = evt.detail.newTitle;
            setTimeout(() => {
              action('onSuccess')('Rename succeeded');
              evt.detail.onSuccess();
            }, 500);
          }}
          @forge-ai-chatbot-launcher-thread-delete=${(evt: CustomEvent) => {
            onThreadDelete(evt.detail);
            const launcher = evt.target as any;
            launcher.threadName = '';
            setTimeout(() => {
              action('onSuccess')('Delete succeeded');
              evt.detail.onSuccess();
            }, 500);
          }}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const WithSuggestions: Story = {
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const suggestions = [
      { text: 'Create report with AI', value: 'create-report' },
      { text: 'Create a report from scratch', value: 'scratch-report' },
      { text: 'Start with a template', value: 'template' }
    ] as Suggestion[];

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          .suggestions=${suggestions}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const FullPage: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const WithCustomHeader: Story = {
  ...standaloneStoryParams,
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

const sampleThreadTitles = [
  'API integration help',
  'Debugging production issue',
  'Performance optimization',
  'Database schema design',
  'Testing strategies',
  'Code review feedback',
  'Deployment questions',
  'Security best practices',
  'UI/UX improvements',
  'Refactoring advice'
];

// Hour offsets chosen to span every formatRelativeTime bucket: just now, within 24h, yesterday
// (24-48h), and older (short date). The first 10 (the default visible page) already cover all four.
const THREAD_HOUR_OFFSETS = [
  0, // Just now
  0.5, // 30m ago
  2, // 2h ago
  6, // 6h ago
  12, // 12h ago
  20, // 20h ago
  30, // Yesterday
  36, // Yesterday
  72, // 3 days ago
  24 * 5, // 5 days ago
  24 * 10, // 10 days ago
  24 * 21, // 3 weeks ago
  24 * 45, // ~1.5 months ago
  24 * 90, // ~3 months ago
  24 * 200, // ~6.5 months ago
  24 * 400 // over a year ago
];

const generateThreads = (count: number, offset = 0): Thread[] =>
  Array.from({ length: count }, (_, i) => {
    const index = offset + i;
    const hoursAgo = THREAD_HOUR_OFFSETS[index % THREAD_HOUR_OFFSETS.length];
    return {
      id: `thread-${index + 1}`,
      title: sampleThreadTitles[index % sampleThreadTitles.length],
      createdAt: new Date(Date.now() - hoursAgo * 3600000).toISOString()
    };
  });

const createMockMessagesForThread = (thread: Thread): ChatMessage[] => {
  const baseTime = Date.now() - 86400000;
  return [
    {
      id: `${thread.id}-msg-1`,
      role: 'user',
      content: `Can you help me with ${thread.title.toLowerCase()}?`,
      timestamp: baseTime,
      status: 'complete'
    },
    {
      id: `${thread.id}-msg-2`,
      role: 'assistant',
      content: `Of course! Here's what I'd suggest for ${thread.title.toLowerCase()}. Let me know if you'd like more detail.`,
      timestamp: baseTime + 5000,
      status: 'complete'
    }
  ];
};

export const WithHistory: Story = {
  args: {
    showThreadRename: true,
    showThreadDelete: true,
    totalThreads: 24,
    threadsLoading: false
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const allThreads = generateThreads(24);
    const threadMessagesMap = new Map<string, ChatMessage[]>(
      allThreads.map(thread => [thread.id, createMockMessagesForThread(thread)])
    );

    let launcher: AiChatbotLauncherComponent | null = null;

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${ref(el => {
            launcher = el as AiChatbotLauncherComponent;
          })}
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          .threads=${allThreads.slice(0, 10)}
          total-threads=${args.totalThreads}
          ?threads-loading=${args.threadsLoading}
          selected-thread-id="thread-3"
          ?show-thread-rename=${args.showThreadRename}
          ?show-thread-delete=${args.showThreadDelete}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}
          @forge-ai-chatbot-launcher-thread-select=${async (evt: CustomEvent) => {
            action('forge-ai-chatbot-launcher-thread-select')(evt.detail);
            const { id } = evt.detail;
            const messages = threadMessagesMap.get(id) ?? [];
            await launcher?.setThreadState({ threadId: id, messages }, { skipAnimation: true });
          }}
          @forge-ai-chatbot-launcher-new-chat=${action('forge-ai-chatbot-launcher-new-chat')}
          @forge-ai-chatbot-launcher-thread-search=${(evt: CustomEvent) => {
            const { query, setResults } = evt.detail;
            setTimeout(() => {
              setResults(allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 10));
            }, 300);
          }}
          @forge-ai-chatbot-launcher-thread-load-more=${(evt: CustomEvent) => {
            const { query, appendResults } = evt.detail;
            setTimeout(() => {
              const source = query
                ? allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
                : allThreads;
              const loadedCount = launcher?.threads.length ?? 0;
              appendResults(source.slice(loadedCount, loadedCount + 10));
            }, 500);
          }}
          @forge-ai-chatbot-launcher-thread-rename=${(evt: CustomEvent) => {
            action('forge-ai-chatbot-launcher-thread-rename')(evt.detail);
            setTimeout(() => evt.detail.onSuccess(), 500);
          }}
          @forge-ai-chatbot-launcher-thread-delete=${(evt: CustomEvent) => {
            action('forge-ai-chatbot-launcher-thread-delete')(evt.detail);
            setTimeout(() => evt.detail.onSuccess(), 500);
          }}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const WithHeaderActions: Story = {
  render: (args: any) => {
    defineIconButtonComponent();
    defineIconComponent();
    IconRegistry.define([tylIconHistory, tylIconSettings]);

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};
