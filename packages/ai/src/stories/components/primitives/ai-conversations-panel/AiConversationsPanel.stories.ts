import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-conversations-panel';
import type { Thread } from '$lib/ai-threads';
import type {
  ForgeAiConversationsPanelSearchEventData,
  ForgeAiConversationsPanelLoadMoreEventData,
  ForgeAiConversationsPanelRenameEventData,
  ForgeAiConversationsPanelDeleteEventData
} from '$lib/ai-conversations-panel';

const component = 'forge-ai-conversations-panel';

const generateThreads = (count: number, startIndex = 0): Thread[] => {
  const topics = [
    'TypeScript',
    'Web Components',
    'React',
    'Angular',
    'Vue',
    'CSS Grid',
    'Flexbox',
    'JavaScript',
    'Performance',
    'Testing'
  ];
  const actions = ['best practices', 'tutorial', 'comparison', 'explained', 'patterns', 'optimization', 'debugging'];

  return Array.from({ length: count }, (_, i) => {
    const index = startIndex + i;
    const topic = topics[index % topics.length];
    const action = actions[Math.floor(index / topics.length) % actions.length];
    const daysAgo = Math.floor(index / 5) + 1;

    return {
      id: `thread-${index + 1}`,
      title: `${topic} ${action}`,
      time: daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`,
      date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
    };
  });
};

const sampleThreads: Thread[] = [
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
  },
  {
    id: 'thread-6',
    title: 'JavaScript async/await patterns',
    time: '3 days ago',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  },
  {
    id: 'thread-7',
    title: 'React hooks vs Lit reactive properties',
    time: '4 days ago',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
  },
  {
    id: 'thread-8',
    title: 'Testing web components',
    time: '5 days ago',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  }
];

const meta = {
  title: 'AI Components/Primitives/Conversations Panel',
  component,
  argTypes: {
    recentThreads: {
      control: 'object',
      description: 'Array of recent conversation threads to display'
    },
    selectedThreadId: {
      control: 'text',
      description: 'ID of the currently selected thread'
    }
  },
  args: {
    recentThreads: sampleThreads,
    selectedThreadId: null
  },
  render: args => {
    return html`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${args.recentThreads}
          .selectedThreadId=${args.selectedThreadId}
          @forge-ai-conversations-panel-select=${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=${action('forge-ai-conversations-panel-search')}
          @forge-ai-conversations-panel-rename=${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSelectedThread: Story = {
  args: {
    selectedThreadId: 'thread-2'
  }
};

export const EmptyState: Story = {
  args: {
    recentThreads: []
  }
};

export const WithLocalSearch: Story = {
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    return html`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${args.recentThreads}
          .selectedThreadId=${args.selectedThreadId}
          @forge-ai-conversations-panel-select=${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=${(e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
            action('forge-ai-conversations-panel-search')(e);
          }}
          @forge-ai-conversations-panel-rename=${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px;">
        <p><strong>Local Search (Default)</strong></p>
        <p>
          Click "Search chats" to enter search view. Type in the search field - results are filtered locally from recent
          threads with 300ms debounce.
        </p>
      </div>
    `;
  }
};

export const WithAsyncSearch: Story = {
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    const allThreads: Thread[] = [
      ...sampleThreads,
      {
        id: 'thread-9',
        title: 'Advanced TypeScript generics tutorial',
        time: '1 week ago',
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'thread-10',
        title: 'Building custom Lit directives',
        time: '1 week ago',
        date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'thread-11',
        title: 'TypeScript utility types explained',
        time: '2 weeks ago',
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'thread-12',
        title: 'Performance optimization techniques',
        time: '2 weeks ago',
        date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
      }
    ];

    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e);

      e.preventDefault();

      const { query, setResults } = e.detail;

      setTimeout(() => {
        const results = allThreads.filter(thread => thread.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results);
      }, 1000);
    };

    return html`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${args.recentThreads}
          .selectedThreadId=${args.selectedThreadId}
          @forge-ai-conversations-panel-select=${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=${handleSearch}
          @forge-ai-conversations-panel-rename=${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Async Search (preventDefault)</strong></p>
        <p>
          Click "Search chats" and type in the search field. This story simulates an async search by calling
          <code>preventDefault()</code> on the search event and returning results via the <code>setResults</code>
          callback after 1 second.
        </p>
        <p>
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in the
          main view (12 total searchable threads).
        </p>
      </div>
    `;
  }
};

export const WithNoRecentThreads: Story = {
  args: {
    recentThreads: []
  },
  render: args => {
    const searchableThreads: Thread[] = [
      {
        id: 'thread-1',
        title: 'Old conversation about TypeScript',
        time: '3 weeks ago',
        date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'thread-2',
        title: 'Archived discussion on web components',
        time: '1 month ago',
        date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      }
    ];

    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e);

      e.preventDefault();

      const { query, setResults } = e.detail;

      setTimeout(() => {
        const results = searchableThreads.filter(thread => thread.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results);
      }, 800);
    };

    return html`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${args.recentThreads}
          .selectedThreadId=${args.selectedThreadId}
          @forge-ai-conversations-panel-select=${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=${handleSearch}
          @forge-ai-conversations-panel-rename=${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>No Recent Threads + Async Search</strong></p>
        <p>
          No recent threads are shown in the main view. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    `;
  }
};

export const WithInfiniteScroll: Story = {
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    const TOTAL_THREADS = 120;
    const PAGE_SIZE = 20;
    const allThreads = generateThreads(TOTAL_THREADS);
    let currentPage = 0;

    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e.detail);
      e.preventDefault();

      const { query, setResults } = e.detail;

      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered.slice(0, PAGE_SIZE));
        currentPage = 0;
      }, 500);
    };

    const handleLoadMore = (e: CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>) => {
      action('forge-ai-conversations-panel-load-more')(e.detail);

      const { appendResults } = e.detail;

      setTimeout(() => {
        currentPage++;
        const start = currentPage * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const nextPage = allThreads.slice(start, end);
        appendResults(nextPage);
      }, 500);
    };

    return html`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${args.recentThreads}
          .selectedThreadId=${args.selectedThreadId}
          @forge-ai-conversations-panel-select=${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=${handleSearch}
          @forge-ai-conversations-panel-load-more=${handleLoadMore}
          @forge-ai-conversations-panel-rename=${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Infinite Scroll Demo</strong></p>
        <p>
          Click "Search chats" and enter a search term (try "TypeScript"). Results load 20 at a time with a 500ms delay
          to simulate async search.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Initial search returns first 20 results</li>
          <li>Scroll to bottom triggers load-more event</li>
          <li>Each load-more appends 20 more results (500ms delay)</li>
          <li>Loading spinner shows during fetch</li>
          <li>Pagination stops when all results loaded</li>
          <li>Total dataset: ${TOTAL_THREADS} threads</li>
        </ul>
      </div>
    `;
  }
};
