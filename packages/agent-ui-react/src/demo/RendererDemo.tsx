import { useState, type FC } from 'react';
import { ForgeScaffold, ForgeAppBar, ForgeIcon, ForgeCard, ForgeButton } from '@tylertech/forge-react';
import type { ComputedFunction } from '@tylertech/agent-ui';
import { Renderer, type Spec } from '../lib/index.js';
import { registry, handlers } from './registry.js';

const COMPUTED_FUNCTIONS: Record<string, ComputedFunction> = {
  formatCurrency: ({ value }) => {
    const num = typeof value === 'number' ? value : 0;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  },
  percentUsed: ({ spent, budgeted }) => {
    const s = typeof spent === 'number' ? spent : 0;
    const b = typeof budgeted === 'number' ? budgeted : 1;
    return `${Math.round((s / b) * 100)}%`;
  }
};

const DEMO_SPEC = {
  root: 'main',
  elements: {
    main: {
      type: 'Grid',
      props: { columns: 1, gap: 'lg' },
      children: [
        'alert-section',
        'validation-section',
        'search-section',
        'computed-section',
        'metrics-section',
        'budgets-section',
        'ranking-section'
      ]
    },

    'alert-section': {
      type: 'AlertBanner',
      props: {
        message: { $template: '${/summary/departmentsOverBudget} department(s) over budget' },
        variant: {
          $cond: { $state: '/summary/departmentsOverBudget', $gt: 0 },
          $then: 'warning',
          $else: 'success'
        }
      },
      visible: { $state: '/showAlerts' }
    },

    'validation-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['validation-header', 'validation-form']
    },
    'validation-header': {
      type: 'SectionHeader',
      props: { title: 'Form Validation', description: 'Using validation checks: required, email, minLength' }
    },
    'validation-form': {
      type: 'Grid',
      props: { columns: 2, gap: 'md' },
      children: ['validation-name', 'validation-email']
    },
    'validation-name': {
      type: 'TextField',
      props: {
        label: 'Name (required, min 2 chars)',
        value: { $bindState: '/form/name' },
        validateOn: 'blur',
        checks: [
          { type: 'required', message: 'Name is required' },
          { type: 'minLength', args: { min: 2 }, message: 'Name must be at least 2 characters' }
        ]
      }
    },
    'validation-email': {
      type: 'TextField',
      props: {
        label: 'Email (required, valid email)',
        value: { $bindState: '/form/email' },
        validateOn: 'blur',
        checks: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email address' }
        ]
      }
    },

    'search-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['search-header', 'search-row', 'search-display']
    },
    'search-header': {
      type: 'SectionHeader',
      props: { title: 'Search', description: 'Using $bindState for two-way binding, watch for state change detection' }
    },
    'search-row': {
      type: 'Grid',
      props: { columns: 2, gap: 'md' },
      children: ['search-field', 'search-button']
    },
    'search-field': {
      type: 'TextField',
      props: {
        label: 'Filter departments',
        value: { $bindState: '/filters/search' }
      },
      watch: {
        '/filters/search': {
          action: 'on_filter_change',
          params: {
            value: { $state: '/filters/search' },
            path: '/filters/search'
          }
        }
      }
    },
    'search-button': {
      type: 'Button',
      props: { label: 'Log Search' },
      on: {
        click: {
          action: 'log_search',
          params: { query: { $state: '/filters/search' } }
        }
      }
    },
    'search-display': {
      type: 'InsightCard',
      props: {
        title: 'Current Filter',
        insight: {
          $cond: { $state: '/filters/search' },
          $then: { $template: 'Searching for: "${/filters/search}"' },
          $else: 'No filter applied'
        },
        sentiment: {
          $cond: { $state: '/filters/search' },
          $then: 'positive',
          $else: 'neutral'
        }
      }
    },

    'computed-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['computed-header', 'computed-grid']
    },
    'computed-header': {
      type: 'SectionHeader',
      props: { title: 'Formatted Values', description: 'Using $computed with formatCurrency and percentUsed functions' }
    },
    'computed-grid': {
      type: 'Grid',
      props: { columns: 3, gap: 'md' },
      children: ['computed-budget', 'computed-spent', 'computed-percent']
    },
    'computed-budget': {
      type: 'MetricCard',
      props: {
        title: 'Total Budget',
        value: {
          $computed: 'formatCurrency',
          args: { value: { $state: '/summary/totalBudget' } }
        },
        icon: 'account_balance'
      }
    },
    'computed-spent': {
      type: 'MetricCard',
      props: {
        title: 'Total Spent',
        value: {
          $computed: 'formatCurrency',
          args: { value: { $state: '/summary/totalSpent' } }
        },
        icon: 'payments'
      }
    },
    'computed-percent': {
      type: 'MetricCard',
      props: {
        title: 'Budget Used',
        value: {
          $computed: 'percentUsed',
          args: {
            spent: { $state: '/summary/totalSpent' },
            budgeted: { $state: '/summary/totalBudget' }
          }
        },
        icon: 'pie_chart',
        variant: {
          $cond: { $state: '/summary/totalSpent', $gt: { $state: '/summary/totalBudget' } },
          $then: 'danger',
          $else: 'success'
        }
      }
    },

    'metrics-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['metrics-header', 'metrics-grid']
    },
    'metrics-header': {
      type: 'SectionHeader',
      props: {
        title: { $template: 'Summary for ${/fiscalYear}' },
        description: 'Using $state and $template'
      }
    },
    'metrics-grid': {
      type: 'Grid',
      props: { columns: 3, gap: 'md' },
      children: ['metric-total', 'metric-spent', 'metric-remaining']
    },
    'metric-total': {
      type: 'MetricCard',
      props: {
        title: 'Total Budget',
        value: { $state: '/summary/totalBudget' },
        icon: 'account_balance'
      }
    },
    'metric-spent': {
      type: 'MetricCard',
      props: {
        title: 'Total Spent',
        value: { $state: '/summary/totalSpent' },
        icon: 'payments',
        trend: 'up',
        trendValue: { $template: '+${/summary/spentPercentChange}%' }
      }
    },
    'metric-remaining': {
      type: 'MetricCard',
      props: {
        title: 'Remaining',
        value: { $state: '/summary/remaining' },
        icon: 'savings',
        variant: {
          $cond: { $state: '/summary/remaining', $gt: 50000 },
          $then: 'success',
          $else: 'warning'
        }
      }
    },

    'budgets-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['budgets-header', 'budgets-grid']
    },
    'budgets-header': {
      type: 'SectionHeader',
      props: { title: 'Department Budgets', description: 'Using repeat with $item' }
    },
    'budgets-grid': {
      type: 'Grid',
      props: { columns: 2, gap: 'md' },
      repeat: { statePath: '/budgets', key: 'id' },
      children: ['budget-card']
    },
    'budget-card': {
      type: 'BudgetCard',
      props: {
        title: { $item: 'department' },
        budgeted: { $item: 'budgeted' },
        spent: { $item: 'spent' }
      }
    },

    'ranking-section': {
      type: 'Grid',
      props: { columns: 1, gap: 'md' },
      children: ['ranking-header', 'ranking-list']
    },
    'ranking-header': {
      type: 'SectionHeader',
      props: { title: 'Top Spenders', description: 'Using repeat with $item and $index' }
    },
    'ranking-list': {
      type: 'Grid',
      props: { columns: 1, gap: 'sm' },
      repeat: { statePath: '/topSpenders', key: 'id' },
      children: ['ranking-item']
    },
    'ranking-item': {
      type: 'InsightCard',
      props: {
        title: { $item: 'department' },
        insight: { $item: 'category' },
        sentiment: {
          $cond: { $item: 'isOverBudget' },
          $then: 'negative',
          $else: 'positive'
        }
      }
    }
  }
};

const INITIAL_STATE = {
  fiscalYear: 'FY 2024',
  showAlerts: true,
  form: { name: '', email: '' },
  filters: { search: '' },
  summary: {
    totalBudget: 505000,
    totalSpent: 482500,
    remaining: 22500,
    departmentsOverBudget: 1,
    spentPercentChange: 5
  },
  budgets: [
    { id: 'it', department: 'IT', budgeted: 150000, spent: 142500 },
    { id: 'hr', department: 'Human Resources', budgeted: 80000, spent: 65000 },
    { id: 'marketing', department: 'Marketing', budgeted: 120000, spent: 135000 },
    { id: 'facilities', department: 'Facilities', budgeted: 95000, spent: 88000 },
    { id: 'legal', department: 'Legal', budgeted: 60000, spent: 52000 }
  ],
  topSpenders: [
    { id: 'marketing', department: 'Marketing', category: 'Over budget by $15,000', isOverBudget: true },
    { id: 'it', department: 'IT', category: '95% of budget used', isOverBudget: false },
    { id: 'facilities', department: 'Facilities', category: '93% of budget used', isOverBudget: false }
  ]
};

const ALTERNATE_STATE = {
  fiscalYear: 'FY 2025',
  showAlerts: false,
  form: { name: 'John Doe', email: 'john@example.com' },
  filters: { search: 'Marketing' },
  summary: {
    totalBudget: 505000,
    totalSpent: 285000,
    remaining: 220000,
    departmentsOverBudget: 0,
    spentPercentChange: -12
  },
  budgets: [
    { id: 'it', department: 'IT', budgeted: 150000, spent: 98000 },
    { id: 'hr', department: 'Human Resources', budgeted: 80000, spent: 72000 },
    { id: 'marketing', department: 'Marketing', budgeted: 120000, spent: 115000 }
  ],
  topSpenders: [
    { id: 'marketing', department: 'Marketing', category: '96% of budget used', isOverBudget: false },
    { id: 'hr', department: 'Human Resources', category: '90% of budget used', isOverBudget: false },
    { id: 'it', department: 'IT', category: '65% of budget used', isOverBudget: false }
  ]
};

export const RendererDemo: FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [currentDataset, setCurrentDataset] = useState<'initial' | 'alternate'>('initial');

  const toggleDataset = (): void => {
    if (currentDataset === 'initial') {
      setState(ALTERNATE_STATE);
      setCurrentDataset('alternate');
    } else {
      setState(INITIAL_STATE);
      setCurrentDataset('initial');
    }
  };

  return (
    <ForgeScaffold>
      <ForgeAppBar slot="header" titleText="Renderer Demo (React)">
        <ForgeIcon slot="logo" name="forge_logo" />
      </ForgeAppBar>

      <main slot="body" className="renderer-demo">
        <ForgeCard className="renderer-demo__controls">
          <h3>State Control</h3>
          <p>
            Demonstrates all expression types: <code>$state</code>, <code>$template</code>, <code>$cond</code>,{' '}
            <code>$bindState</code>, <code>$computed</code>, <code>watch</code>, <code>repeat</code>, <code>$item</code>
            , <code>$index</code>, <code>visible</code>, and <code>validation</code>.
          </p>
          <ForgeButton variant="raised" onClick={toggleDataset}>
            Switch to {currentDataset === 'initial' ? 'Alternate' : 'Initial'} Data
          </ForgeButton>
          <pre className="renderer-demo__state">{JSON.stringify(state, null, 2)}</pre>
        </ForgeCard>

        <div className="renderer-demo__output">
          <Renderer
            spec={DEMO_SPEC}
            initialState={state}
            registry={registry}
            handlers={handlers}
            functions={COMPUTED_FUNCTIONS}
          />
        </div>
      </main>
    </ForgeScaffold>
  );
};

export default RendererDemo;
