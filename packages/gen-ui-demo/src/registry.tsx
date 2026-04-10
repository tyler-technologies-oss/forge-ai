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
  DataTable
} from './components';

export const registry = createRegistry<ReactNode, ReactNode>({
  components: {
    Grid,
    SectionHeader,
    MetricCard,
    BudgetCard,
    TransactionList,
    AlertBanner,
    StatRow,
    DataTable
  } satisfies Record<ComponentNames, ComponentFactory<ReactNode, ReactNode>>
});
