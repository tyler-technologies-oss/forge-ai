import type { ReactElement } from 'react';
import { ForgeCard, ForgeLinearProgress } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';
import { formatCurrency } from './utils.js';

interface BudgetCardProps {
  title?: string;
  budgeted?: number;
  spent?: number;
  showRemaining?: boolean;
}

export function BudgetCard({ props, emit }: BaseComponentProps<BudgetCardProps>): ReactElement {
  const { title = '', budgeted = 0, spent = 0, showRemaining = true } = props;

  const percentage = budgeted > 0 ? Math.min((spent / budgeted) * 100, 100) : 0;
  const remaining = budgeted - spent;
  const isOverBudget = spent > budgeted;
  const theme = isOverBudget ? 'danger' : percentage > 90 ? 'warning' : 'primary';

  return (
    <ForgeCard
      className={`agentui-budget-card ${isOverBudget ? 'agentui-budget-card--over' : ''}`}
      onClick={() => emit('click')}>
      <div className="agentui-budget-card__header">
        <span className="agentui-budget-card__title forge-typography--label1">{title}</span>
        <span className="agentui-budget-card__amount forge-typography--body2">
          {formatCurrency(spent)} / {formatCurrency(budgeted)}
        </span>
      </div>
      <ForgeLinearProgress progress={percentage / 100} theme={theme} determinate />
      {showRemaining && (
        <div className="agentui-budget-card__footer">
          <span
            className={`agentui-budget-card__remaining forge-typography--caption ${isOverBudget ? 'agentui-budget-card__remaining--over' : ''}`}>
            {isOverBudget
              ? `${formatCurrency(Math.abs(remaining))} over budget`
              : `${formatCurrency(remaining)} remaining`}
          </span>
          <span className="agentui-budget-card__percentage forge-typography--caption">{Math.round(percentage)}%</span>
        </div>
      )}
    </ForgeCard>
  );
}

export const BudgetCardSchema = z.object({
  title: z.string().describe('Budget name'),
  budgeted: z.number().describe('Total budget amount'),
  spent: z.number().describe('Amount spent'),
  showRemaining: z.boolean().describe('Show remaining amount (default true)').optional()
});
