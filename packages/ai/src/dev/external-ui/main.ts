import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineCardComponent,
  defineDrawerComponent,
  defineIconComponent,
  definePageStateComponent,
  defineScaffoldComponent,
  IconRegistry,
  type IColumnConfiguration
} from '@tylertech/forge';
import { generateId, type AiChatbotComponent, type ToolDefinition, type HandlerContext } from '../../lib/ai-chatbot';
import { MastraStreamAdapter } from '../shared/mastra-stream-adapter.js';
import { loadAgentConfig } from '../shared/load-agent-config.js';
import { ReportingTableComponent } from './components/reporting-table.js';

import '../../lib/ai-chatbot';
import './components/reporting-table';

const BASE_URL = 'https://staging-ai-foundry.socrata-qa.com';
const AGENT_ID = '6f03f98d-8bb3-4715-8193-ec6fbdab9bc6';
const STORAGE_KEY = 'external-ui-thread-state';

interface TableState {
  header: string;
  description: string;
  data: Record<string, unknown>[];
  columns: IColumnConfiguration[];
  pageSize?: number;
}

let tableState: TableState | null = null;

defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconComponent();
defineCardComponent();
definePageStateComponent();

IconRegistry.define([tylIconForgeLogo]);

function showEmptyState(): void {
  content.classList.remove('has-content');
}

function hideEmptyState(): void {
  content.classList.add('has-content');
}

function getTable(): ReportingTableComponent | null {
  return tableContainer.querySelector('reporting-table');
}

function startLoading(): void {
  const table = getTable();
  if (table) {
    table.loading = true;
  }
}

function stopLoading(): void {
  const table = getTable();
  if (table) {
    table.loading = false;
  }
}

function renderTable(state: TableState): void {
  let table = getTable();
  if (!table) {
    table = document.createElement('reporting-table') as ReportingTableComponent;
    tableContainer.appendChild(table);
    hideEmptyState();
  }
  table.header = state.header;
  table.description = state.description;
  table.columns = state.columns;
  table.data = state.data;
  if (state.pageSize) {
    table.pageSize = state.pageSize;
  }
}

const renderTableTool: ToolDefinition = {
  name: 'render_table',
  description: 'Renders a data table with the reporting data provided to it. Provide data rows and column definitions.',
  parameters: {
    type: 'object',
    properties: {
      header: { type: 'string', description: 'Header text to display above the table' },
      description: { type: 'string', description: 'Description text to display above the table' },
      data: {
        type: 'array',
        description: 'Array of row objects',
        items: { type: 'object' }
      },
      columns: {
        type: 'array',
        description: 'Column configurations with property and header',
        items: {
          type: 'object',
          properties: {
            property: { type: 'string', description: 'Property name from data objects' },
            header: { type: 'string', description: 'Column header display text' }
          },
          required: ['property', 'header']
        }
      },
      pageSize: { type: 'number', description: 'Number of rows per page. Pagination shown when data exceeds this. Default: 10' }
    },
    required: ['header', 'description', 'data', 'columns']
  },
  handler: async (context: HandlerContext) => {
    const header = context.args.header as string;
    const description = context.args.description as string;
    const data = context.args.data as Record<string, unknown>[];
    const columns = context.args.columns as IColumnConfiguration[];
    const pageSize = context.args.pageSize as number | undefined;

    tableState = { header, description, data, columns, pageSize };
    renderTable(tableState);

    console.log('render_table:', tableState);
  }
};

function getSavedThreadId(): string | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved).threadId || null;
    } catch {
      return null;
    }
  }
  return null;
}

function saveThreadState(): void {
  const state = chatbot.getThreadState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, tableState }));
}

async function loadThreadState(): Promise<void> {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const state = JSON.parse(saved);
      const { tableState: savedTableState, ...threadState } = state;
      await chatbot.setThreadState(threadState);

      if (savedTableState?.data && savedTableState?.columns) {
        tableState = savedTableState;
        renderTable(savedTableState);
      }
    } catch {
      // ignore
    }
  }
}

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const content = document.getElementById('content')!;
const tableContainer = document.getElementById('table-container')!;
const threadId = getSavedThreadId() || generateId();
const adapter = new MastraStreamAdapter(
  {
    url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`,
    tools: [renderTableTool]
  },
  threadId
);

chatbot.adapter = adapter;

chatbot.addEventListener('forge-ai-chatbot-run-started', () => {
  startLoading();
  adapter.setContext({
    clientContext: {
      tableState: JSON.stringify(tableState),
      data: JSON.stringify([
        { name: 'Alice', age: 30, city: 'New York', occupation: 'Engineer', salary: 90000 },
        { name: 'Bob', age: 25, city: 'San Francisco', occupation: 'Designer', salary: 85000 },
        { name: 'Charlie', age: 35, city: 'Chicago', occupation: 'Manager', salary: 95000 },
        { name: 'Diana', age: 28, city: 'Seattle', occupation: 'Developer', salary: 92000 },
        { name: 'Ethan', age: 32, city: 'Austin', occupation: 'Analyst', salary: 88000 },
        { name: 'Fiona', age: 27, city: 'Boston', occupation: 'Consultant', salary: 87000 },
        { name: 'George', age: 40, city: 'Denver', occupation: 'Director', salary: 100000 },
        { name: 'Hannah', age: 29, city: 'Atlanta', occupation: 'Architect', salary: 91000 },
        { name: 'Ian', age: 31, city: 'Miami', occupation: 'Developer', salary: 93000 },
        { name: 'Jane', age: 26, city: 'Portland', occupation: 'Designer', salary: 86000 },
        { name: 'Kevin', age: 33, city: 'Dallas', occupation: 'Engineer', salary: 94000 },
        { name: 'Laura', age: 38, city: 'Philadelphia', occupation: 'Manager', salary: 97000 }
      ])
    }
  });
});

adapter.onRunFinished(stopLoading);
adapter.onRunAborted(stopLoading);
adapter.onError(stopLoading);

loadAgentConfig(chatbot, BASE_URL, AGENT_ID);
loadThreadState();

chatbot.addEventListener('forge-ai-chatbot-thread-state-change', saveThreadState);
chatbot.addEventListener('forge-ai-chatbot-clear', () => {
  localStorage.removeItem(STORAGE_KEY);
  tableState = null;
  getTable()?.remove();
  showEmptyState();
});
