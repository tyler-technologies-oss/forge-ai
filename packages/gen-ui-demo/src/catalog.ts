import { z } from 'zod';
import type { ActionDefinition, ComponentDefinition } from './core';
import { createCatalog } from './core';
import {
  GridSchema,
  SectionHeaderSchema,
  MetricCardSchema,
  BudgetCardSchema,
  TransactionListSchema,
  AlertBannerSchema,
  StatRowSchema,
  DataTableSchema,
  ComparisonCardSchema,
  RankingListSchema,
  CategoryBreakdownSchema,
  InsightCardSchema,
  ButtonSchema,
  TextFieldSchema,
  CardSchema
} from './components';

const components = {
  Grid: {
    description: 'Layout container with configurable columns for arranging child components',
    props: GridSchema,
    slots: ['default']
  },
  SectionHeader: {
    description: 'Section title with optional description',
    props: SectionHeaderSchema
  },
  MetricCard: {
    description: 'Single KPI display with value, optional icon, and trend indicator. Values are formatted as currency.',
    props: MetricCardSchema
  },
  BudgetCard: {
    description: 'Budget vs actual display with progress bar. Shows percentage used and remaining amount.',
    props: BudgetCardSchema
  },
  TransactionList: {
    description: 'Compact list of transactions with date, description, amount, and optional category badges.',
    props: TransactionListSchema
  },
  AlertBanner: {
    description: 'Status/warning message banner with icon',
    props: AlertBannerSchema
  },
  StatRow: {
    description: 'Horizontal row of quick stats with labels and values formatted as currency',
    props: StatRowSchema
  },
  DataTable: {
    description: 'Data table with pagination for detailed tabular views',
    props: DataTableSchema
  },
  ComparisonCard: {
    description:
      'Side-by-side comparison of two values with change indicator. Great for period-over-period comparisons.',
    props: ComparisonCardSchema
  },
  RankingList: {
    description:
      'Ordered list with rank indicators. Use for top/bottom rankings like "Top Spenders" or "Largest Budgets".',
    props: RankingListSchema
  },
  CategoryBreakdown: {
    description: 'Horizontal stacked bar chart showing distribution across categories with legend.',
    props: CategoryBreakdownSchema
  },
  InsightCard: {
    description: 'Highlighted insight or analysis callout with icon and sentiment styling.',
    props: InsightCardSchema
  },
  Button: {
    description: 'Interactive button that triggers an action when clicked.',
    props: ButtonSchema
  },
  TextField: {
    description: 'Text input field with two-way data binding support.',
    props: TextFieldSchema
  },
  Card: {
    description: 'Container card for grouping related content.',
    props: CardSchema,
    slots: ['default']
  }
} satisfies Record<string, ComponentDefinition>;

const actions = {
  view_details: {
    params: z.object({ id: z.string(), type: z.string() }),
    description: 'View details of a specific item'
  },
  approve_item: {
    params: z.object({ id: z.string() }),
    description: 'Approve a pending item'
  },
  reject_item: {
    params: z.object({ id: z.string(), reason: z.string().optional() }),
    description: 'Reject a pending item with optional reason'
  },
  export_data: {
    params: z.object({ format: z.enum(['csv', 'pdf', 'json']) }),
    description: 'Export data in specified format'
  },
  refresh_data: {
    description: 'Refresh the current data view'
  }
} satisfies Record<string, ActionDefinition>;

export const catalog = createCatalog({ components, actions });
export type ComponentNames = keyof typeof components;
export type ActionNames = keyof typeof actions;
