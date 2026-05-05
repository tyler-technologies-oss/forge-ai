import { defineRegistry } from '@tylertech/agent-ui-react';
import { catalog } from './catalog.js';
import {
  Grid,
  SectionHeader,
  MetricCard,
  BudgetCard,
  TransactionList,
  AlertBanner,
  StatRow,
  DataTable,
  ComparisonCard,
  RankingList,
  CategoryBreakdown,
  InsightCard,
  Button,
  TextField,
  Card
} from './components/index.js';

const actions = {
  view_details: async (params?: Record<string, unknown>) => {
    console.log('[Action] view_details:', params);
  },
  approve_item: async (params?: Record<string, unknown>) => {
    console.log('[Action] approve_item:', params);
  },
  reject_item: async (params?: Record<string, unknown>) => {
    console.log('[Action] reject_item:', params);
  },
  export_data: async (params?: Record<string, unknown>) => {
    console.log('[Action] export_data:', params);
  },
  refresh_data: async () => {
    console.log('[Action] refresh_data');
  },
  log_search: async (params?: { query?: string }) => {
    console.log('[Action] log_search - Query:', params?.query);
  },
  on_filter_change: async (params?: { path?: string; value?: string }) => {
    console.log('[Watch] Filter changed:', params?.path, '→', params?.value);
  }
};

const { registry } = defineRegistry(catalog, {
  components: {
    Grid,
    SectionHeader,
    MetricCard,
    BudgetCard,
    TransactionList,
    AlertBanner,
    StatRow,
    DataTable,
    ComparisonCard,
    RankingList,
    CategoryBreakdown,
    InsightCard,
    Button,
    TextField,
    Card
  },
  actions
});

export { registry, actions as handlers };
