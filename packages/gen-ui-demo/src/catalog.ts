import type { ComponentDefinition } from './core';
import { createCatalog } from './core';
import {
  GridSchema,
  SectionHeaderSchema,
  MetricCardSchema,
  BudgetCardSchema,
  TransactionListSchema,
  AlertBannerSchema,
  StatRowSchema,
  DataTableSchema
} from './components';

const componentDefs = {
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
  }
} satisfies Record<string, ComponentDefinition>;

export const catalog = createCatalog({ components: componentDefs });
export type ComponentNames = keyof typeof componentDefs;
