import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import type { Thread } from '$lib/ai-threads';

import '$lib/ai-threads-search';
import '$lib/ai-threads';

const generateThreads = (count: number, startIndex = 0): Thread[] => {
  const topics = [
    'Getting Started with AI',
    'Data Analysis Question',
    'Code Review Discussion',
    'Project Planning',
    'Bug Investigation',
    'Feature Development'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `thread-${startIndex + i + 1}`,
    title: `${topics[i % topics.length]}`,
    createdAt: new Date(Date.now() - (i + startIndex) * 86400000).toISOString(),
    messageCount: Math.floor(Math.random() * 20) + 1
  }));
};

const component = 'forge-ai-threads-search';

const meta = {
  title: 'AI Components/Primitives/Threads Search',
  component,
  argTypes: {
    threads: {
      control: 'object',
      description: 'Array of threads to display'
    },
    showNewChat: {
      control: 'boolean',
      description: 'Show "New chat" button in header'
    },
    showThreadRename: {
      control: 'boolean',
      description: 'Show rename action in thread menu'
    },
    showThreadDelete: {
      control: 'boolean',
      description: 'Show delete action in thread menu'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for search input'
    },
    emptyMessage: {
      control: 'text',
      description: 'Message displayed when no results found'
    }
  },
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    placeholder: 'Search conversations...',
    emptyMessage: 'No conversations found'
  },
  render: (args: any) => {
    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${args.threads}
          ?show-new-chat=${args.showNewChat}
          ?show-thread-rename=${args.showThreadRename}
          ?show-thread-delete=${args.showThreadDelete}
          placeholder=${args.placeholder}
          empty-message=${args.emptyMessage}
          @forge-ai-threads-search-query=${action('forge-ai-threads-search-query')}
          @forge-ai-threads-search-load-more=${action('forge-ai-threads-search-load-more')}
          @forge-ai-threads-search-select=${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=${action('forge-ai-threads-search-new-chat')}
          @forge-ai-threads-search-rename=${action('forge-ai-threads-search-rename')}
          @forge-ai-threads-search-delete=${action('forge-ai-threads-search-delete')}>
        </forge-ai-threads-search>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithLocalSearch: Story = {
  args: {
    threads: generateThreads(30),
    showNewChat: true
  }
};

export const WithAsyncSearch: Story = {
  args: {
    threads: [],
    showNewChat: true
  },
  render: (args: any) => {
    const allThreads = generateThreads(50);

    const handleSearch = (e: CustomEvent) => {
      e.preventDefault();
      const { query, setResults } = e.detail;

      action('forge-ai-threads-search-query')(e);

      setTimeout(() => {
        const results = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results.slice(0, 20));
      }, 1000);
    };

    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${args.threads}
          ?show-new-chat=${args.showNewChat}
          @forge-ai-threads-search-query=${handleSearch}
          @forge-ai-threads-search-load-more=${action('forge-ai-threads-search-load-more')}
          @forge-ai-threads-search-select=${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    `;
  }
};

export const WithInfiniteScroll: Story = {
  args: {
    threads: [],
    showNewChat: true
  },
  render: (args: any) => {
    const allThreads = generateThreads(120);
    let currentPage = 0;
    const pageSize = 20;

    const handleSearch = (e: CustomEvent) => {
      e.preventDefault();
      const { query, setResults } = e.detail;
      currentPage = 0;

      action('forge-ai-threads-search-query')(e);

      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered.slice(0, pageSize));
      }, 500);
    };

    const handleLoadMore = (e: CustomEvent) => {
      const { query, appendResults } = e.detail;
      currentPage++;

      action('forge-ai-threads-search-load-more')(e);

      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        const start = currentPage * pageSize;
        const end = start + pageSize;
        appendResults(filtered.slice(start, end));
      }, 500);
    };

    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${args.threads}
          ?show-new-chat=${args.showNewChat}
          @forge-ai-threads-search-query=${handleSearch}
          @forge-ai-threads-search-load-more=${handleLoadMore}
          @forge-ai-threads-search-select=${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    `;
  }
};

export const EmptyState: Story = {
  args: {
    threads: [],
    showNewChat: true,
    emptyMessage: 'No chats available, start a new conversation!'
  }
};

export const WithoutNewChatButton: Story = {
  args: {
    threads: generateThreads(10),
    showNewChat: false
  }
};

export const InThreadsContext: Story = {
  args: {
    threads: generateThreads(10),
    showNewChat: true
  },
  render: (args: any) => {
    return html`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${args.threads}
          @forge-ai-threads-select=${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=${action('forge-ai-threads-clear-history')}>
          <forge-ai-threads-search
            .threads=${args.threads}
            ?show-new-chat=${args.showNewChat}
            @forge-ai-threads-search-query=${action('forge-ai-threads-search-query')}
            @forge-ai-threads-search-load-more=${action('forge-ai-threads-search-load-more')}
            @forge-ai-threads-search-select=${action('forge-ai-threads-search-select')}
            @forge-ai-threads-search-new-chat=${action('forge-ai-threads-search-new-chat')}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    `;
  }
};

export const WithRenameAndDelete: Story = {
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: true,
    showThreadDelete: true
  }
};

export const WithRenameOnly: Story = {
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: true,
    showThreadDelete: false
  }
};

export const WithDeleteOnly: Story = {
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: false,
    showThreadDelete: true
  }
};
