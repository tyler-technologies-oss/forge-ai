import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, LitElement, type TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { action } from 'storybook/actions';
import type { Thread } from '$lib/ai-threads';
import type { ChatMessage } from '$lib/ai-chatbot/types';
import type { AiChatbotLauncherComponent } from '$lib/ai-chatbot-launcher';
import { MockAdapter } from '../../../utils/mock-adapter';

import '$lib/ai-threads';
import '$lib/ai-chatbot-launcher';
import '$lib/ai-threads-search';
import '@tylertech/forge/scaffold';
import '@tylertech/forge/app-bar';

const component = 'forge-ai-threads';

const createMockMessages = (
  threadId: string,
  topic: string,
  conversation: Array<{ role: 'user' | 'assistant'; content: string }>
): ChatMessage[] => {
  const baseTime = Date.now() - 86400000;

  return conversation.map((msg, index) => ({
    id: `${threadId}-msg-${index + 1}`,
    role: msg.role,
    content: msg.content,
    timestamp: baseTime + index * 5000,
    status: 'complete' as const
  }));
};

const detailedThreadData = [
  {
    title: 'Getting started with AI',
    topic: 'AI basics',
    conversation: [
      { role: 'user' as const, content: 'How do I get started with AI integration?' },
      {
        role: 'assistant' as const,
        content:
          'Great question! Here are 3 key steps to get started:\n\n1. **Choose your AI provider** - Select a service like OpenAI, Anthropic, or Azure OpenAI\n2. **Set up authentication** - Configure API keys and authentication\n3. **Implement the adapter** - Create an adapter class that implements the required interface\n\nWould you like me to go into more detail on any of these steps?'
      },
      { role: 'user' as const, content: 'Tell me more about implementing the adapter' },
      {
        role: 'assistant' as const,
        content:
          "The adapter is the bridge between your application and the AI service. Here's a basic example:\n\n```typescript\nclass MyAdapter implements AgentAdapter {\n  async sendMessage(message: string) {\n    // Call your AI service API\n    const response = await fetch('/api/chat', {\n      method: 'POST',\n      body: JSON.stringify({ message })\n    });\n    return response.json();\n  }\n}\n```\n\nThe adapter handles authentication, message formatting, and streaming responses."
      },
      { role: 'user' as const, content: 'Perfect, thanks!' }
    ]
  },
  {
    title: 'Data analysis question',
    topic: 'Data analysis',
    conversation: [
      { role: 'user' as const, content: 'I need to analyze sales data from the past quarter. Where should I start?' },
      {
        role: 'assistant' as const,
        content:
          "I'd be happy to help with your sales data analysis! Let's break this down:\n\n**Step 1: Data Collection**\n- Gather all sales records from Q1\n- Ensure data includes dates, amounts, products, and regions\n\n**Step 2: Data Cleaning**\n- Remove duplicates\n- Handle missing values\n- Standardize formats\n\n**Step 3: Analysis**\n- Calculate key metrics (revenue, growth rate, average order value)\n- Identify trends and patterns\n- Compare against previous quarters\n\nWhat format is your data currently in?"
      },
      { role: 'user' as const, content: "It's in CSV format with columns for date, product_id, quantity, and revenue" },
      {
        role: 'assistant' as const,
        content:
          "Perfect! CSV is easy to work with. Here's a Python script to get you started:\n\n```python\nimport pandas as pd\n\n# Load the data\ndf = pd.read_csv('sales_data.csv')\n\n# Basic analysis\ntotal_revenue = df['revenue'].sum()\navg_order = df['revenue'].mean()\ntop_products = df.groupby('product_id')['quantity'].sum().sort_values(ascending=False)\n\nprint(f'Total Revenue: ${total_revenue:,.2f}')\nprint(f'Average Order: ${avg_order:.2f}')\nprint('\\nTop Products:')\nprint(top_products.head(10))\n```\n\nThis will give you a solid foundation for your analysis."
      }
    ]
  },
  {
    title: 'How do I implement authentication?',
    topic: 'Authentication',
    conversation: [
      { role: 'user' as const, content: 'How do I implement authentication in my app?' },
      {
        role: 'assistant' as const,
        content:
          'There are several authentication approaches you can take:\n\n**1. JWT (JSON Web Tokens)**\n- Stateless authentication\n- Good for APIs and SPAs\n- Tokens stored client-side\n\n**2. Session-based**\n- Server stores session data\n- More secure for traditional web apps\n- Requires session storage (Redis, database)\n\n**3. OAuth 2.0 / OpenID Connect**\n- Social login (Google, GitHub, etc.)\n- Industry standard\n- More complex setup\n\nWhat type of application are you building?'
      },
      { role: 'user' as const, content: 'A React SPA with a Node.js backend' }
    ]
  }
];

const generateThreadData = (size: 'empty' | 'small' | 'medium' | 'large') => {
  const threads: Thread[] = [];
  const messagesMap = new Map<string, ChatMessage[]>();

  if (size === 'empty') {
    return { threads, messagesMap };
  }

  const sampleTitles = [
    'API integration help',
    'Debugging production issue',
    'Performance optimization',
    'Database schema design',
    'Testing strategies',
    'Code review feedback',
    'Deployment questions',
    'Security best practices',
    'UI/UX improvements',
    'Refactoring advice',
    'Error handling patterns',
    'State management',
    'GraphQL vs REST',
    'Microservices architecture',
    'CI/CD pipeline setup',
    'Docker configuration',
    'AWS deployment',
    'TypeScript migration',
    'React best practices',
    'Node.js optimization',
    'Database indexing',
    'Caching strategies',
    'WebSocket implementation',
    'Authentication flow',
    'File upload handling',
    'Real-time features',
    'Mobile responsiveness',
    'Accessibility improvements',
    'SEO optimization',
    'Analytics integration'
  ];

  const count = size === 'small' ? 3 : size === 'medium' ? 12 : 30;

  for (let i = 0; i < count; i++) {
    const threadId = `thread-${i + 1}`;
    const useDetailed = i < detailedThreadData.length;

    const thread: Thread = {
      id: threadId,
      title: useDetailed ? detailedThreadData[i].title : sampleTitles[i % sampleTitles.length],
      createdAt: new Date(Date.now() - i * 3600000).toISOString(),
      messageCount: Math.floor(Math.random() * 15) + 1
    };

    threads.push(thread);

    if (useDetailed) {
      messagesMap.set(
        threadId,
        createMockMessages(threadId, detailedThreadData[i].topic, detailedThreadData[i].conversation)
      );
    } else {
      messagesMap.set(
        threadId,
        createMockMessages(threadId, thread.title, [
          { role: 'user', content: `Can you help me with ${thread.title.toLowerCase()}?` },
          {
            role: 'assistant',
            content: `Of course! I'd be happy to help you with ${thread.title.toLowerCase()}. Let me guide you through the key concepts and best practices.`
          }
        ])
      );
    }
  }

  return { threads, messagesMap };
};

class ThreadsDemoContainer extends LitElement {
  @state() private currentView: 'launcher' | 'search' = 'launcher';
  @state() private selectedThreadId: string | null = null;
  @state() private threads: Thread[] = [];

  private launcherElement: AiChatbotLauncherComponent | null = null;
  private searchElement: HTMLElement | null = null;
  private threadsElement: HTMLElement | null = null;
  private adapter!: MockAdapter;
  private threadMessagesMap = new Map<string, ChatMessage[]>();
  private allThreads: Thread[] = [];
  private allMessagesMap = new Map<string, ChatMessage[]>();

  public dataSize: 'empty' | 'small' | 'medium' | 'large' = 'medium';

  public connectedCallback(): void {
    super.connectedCallback();
    this.adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const data = generateThreadData(this.dataSize);
    this.allThreads = data.threads;
    this.allMessagesMap = data.messagesMap;

    const initialLoadCount = this.dataSize === 'large' ? 20 : this.allThreads.length;
    this.threads = this.allThreads.slice(0, initialLoadCount);
    this.threadMessagesMap = new Map(Array.from(this.allMessagesMap.entries()).slice(0, initialLoadCount));
  }

  get totalChats(): number {
    return this.dataSize === 'large' ? this.allThreads.length : 0;
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  private handleNewChat = (): void => {
    action('forge-ai-threads-new-chat')();
    this.currentView = 'launcher';
    this.selectedThreadId = null;
    this.launcherElement?.startNewChat();

    if (this.threadsElement) {
      (this.threadsElement as any)._selectedThreadId = null;
    }
  };

  private handleSearchChats = (): void => {
    action('forge-ai-threads-search-chats')();
    this.currentView = 'search';

    setTimeout(() => {
      const searchInput = this.searchElement?.querySelector('input');
      searchInput?.focus();
    }, 0);
  };

  private handleThreadSelect = async (e: CustomEvent): Promise<void> => {
    action('forge-ai-threads-select')(e);
    const { id } = e.detail;
    this.selectedThreadId = id;

    const messages = this.threadMessagesMap.get(id) || [];
    await this.launcherElement?.setThreadState({ threadId: id, messages }, { skipAnimation: true });
  };

  private handleSearchSelect = async (e: CustomEvent): Promise<void> => {
    action('forge-ai-threads-search-select')(e);
    const { id } = e.detail;

    this.currentView = 'launcher';
    this.selectedThreadId = id;

    if (this.threadsElement) {
      (this.threadsElement as any)._selectedThreadId = id;
    }

    await this.updateComplete;

    const messages = this.threadMessagesMap.get(id) || [];
    await this.launcherElement?.setThreadState({ threadId: id, messages }, { skipAnimation: true });
  };

  private handleSearchNewChat = (): void => {
    action('forge-ai-threads-search-new-chat')();
    this.currentView = 'launcher';
    this.selectedThreadId = null;
    this.launcherElement?.startNewChat();

    if (this.threadsElement) {
      (this.threadsElement as any)._selectedThreadId = null;
    }
  };

  private handleMessageSent = (e: CustomEvent): void => {
    action('forge-ai-chatbot-message-sent')(e);

    if (this.selectedThreadId) {
      setTimeout(() => {
        const currentMessages = this.launcherElement?.getMessages() || [];
        this.threadMessagesMap.set(this.selectedThreadId!, currentMessages);
      }, 1000);
    }
  };

  private handleMessageReceived = (e: CustomEvent): void => {
    action('forge-ai-chatbot-message-received')(e);

    if (this.selectedThreadId) {
      setTimeout(() => {
        const currentMessages = this.launcherElement?.getMessages() || [];
        this.threadMessagesMap.set(this.selectedThreadId!, currentMessages);
      }, 100);
    }
  };

  private handleLoadMore = (e: CustomEvent): void => {
    action('forge-ai-threads-load-more')(e);

    setTimeout(() => {
      const currentCount = this.threads.length;
      const nextBatch = this.allThreads.slice(currentCount, currentCount + 10);

      if (nextBatch.length > 0) {
        this.threads = [...this.threads, ...nextBatch];
        nextBatch.forEach(thread => {
          const messages = this.allMessagesMap.get(thread.id);
          if (messages) {
            this.threadMessagesMap.set(thread.id, messages);
          }
        });
      }

      e.detail.appendResults(nextBatch);
    }, 1000);
  };

  private handleSearchLoadMore = (e: CustomEvent): void => {
    action('forge-ai-threads-search-load-more')(e);

    setTimeout(() => {
      const currentCount = this.threads.length;
      const nextBatch = this.allThreads.slice(currentCount, currentCount + 10);

      if (nextBatch.length > 0) {
        this.threads = [...this.threads, ...nextBatch];
        nextBatch.forEach(thread => {
          const messages = this.allMessagesMap.get(thread.id);
          if (messages) {
            this.threadMessagesMap.set(thread.id, messages);
          }
        });
      }

      e.detail.appendResults(nextBatch);
    }, 1000);
  };

  protected render(): TemplateResult {
    return html`
      <forge-scaffold style="height: 600px;">
        <forge-app-bar slot="header" title-text="AI Assistant"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          ${ref(el => {
            this.threadsElement = el as HTMLElement;
          })}
          .threads=${this.threads}
          total-chats=${this.totalChats}
          @forge-ai-threads-select=${this.handleThreadSelect}
          @forge-ai-threads-new-chat=${this.handleNewChat}
          @forge-ai-threads-search-chats=${this.handleSearchChats}
          @forge-ai-threads-load-more=${this.handleLoadMore}>
          ${when(
            this.currentView === 'launcher',
            () => html`
              <forge-ai-chatbot-launcher
                ${ref(el => {
                  this.launcherElement = el as AiChatbotLauncherComponent;
                })}
                .adapter=${this.adapter}
                @forge-ai-chatbot-connected=${action('forge-ai-chatbot-connected')}
                @forge-ai-chatbot-message-sent=${this.handleMessageSent}
                @forge-ai-chatbot-message-received=${this.handleMessageReceived}
                @forge-ai-chatbot-tool-call=${action('forge-ai-chatbot-tool-call')}
                @forge-ai-chatbot-error=${action('forge-ai-chatbot-error')}
                @forge-ai-chatbot-info=${action('forge-ai-chatbot-info')}
                @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
              </forge-ai-chatbot-launcher>
            `,
            () => html`
              <forge-ai-threads-search
                ${ref(el => {
                  this.searchElement = el as HTMLElement;
                })}
                .threads=${this.threads}
                total-chats=${this.totalChats}
                @forge-ai-threads-search-select=${this.handleSearchSelect}
                @forge-ai-threads-search-new-chat=${this.handleSearchNewChat}
                @forge-ai-threads-search-load-more=${this.handleSearchLoadMore}>
              </forge-ai-threads-search>
            `
          )}
        </forge-ai-threads>
      </forge-scaffold>
    `;
  }
}

const meta = {
  title: 'AI Components/Form Factors/Threads',
  component,
  argTypes: {
    dataSize: {
      control: { type: 'select' },
      options: ['empty', 'small', 'medium', 'large'],
      description: 'Amount of mock thread data to display'
    }
  },
  args: {
    dataSize: 'medium'
  },
  render: args => {
    const containerId = 'threads-demo-container';
    if (!customElements.get(containerId)) {
      customElements.define(containerId, ThreadsDemoContainer);
    }

    const container = document.createElement(containerId) as ThreadsDemoContainer;
    container.dataSize = args.dataSize;
    return html`${container}`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
