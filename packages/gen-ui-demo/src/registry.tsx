import type { ReactNode } from 'react';
import type { ComponentFactory } from './core';
import type { ComponentNames } from './catalog';
import { createRegistry } from './core';
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
  Button
} from './components';

export const registry = createRegistry<ReactNode, ReactNode[]>({
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
    Button
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } satisfies Record<ComponentNames, ComponentFactory<ReactNode, any, ReactNode[]>>
});
