import type { ComponentFactory, RegistryActionHandler } from '@tylertech/agent-ui';
import { createRegistry } from '@tylertech/agent-ui';
import type { ActionNames, ComponentNames } from './catalog.js';
import type { LitResult } from './types.js';
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

export const registry = createRegistry<LitResult, LitResult[]>({
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } satisfies Record<ComponentNames, ComponentFactory<LitResult, any, LitResult[]>>,
  actions: {
    view_details: params => console.log('[Action] view_details:', params),
    approve_item: params => console.log('[Action] approve_item:', params),
    reject_item: params => console.log('[Action] reject_item:', params),
    export_data: params => console.log('[Action] export_data:', params),
    refresh_data: () => console.log('[Action] refresh_data'),
    log_search: params => console.log('[Action] log_search - Query:', params.query),
    on_filter_change: params => console.log('[Watch] Filter changed:', params.path, '→', params.value)
  } as Record<ActionNames, RegistryActionHandler>
});
