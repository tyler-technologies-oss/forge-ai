import type { ReactElement } from 'react';
import { ForgeCard, ForgeLinearProgress } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency } from './utils';

interface BudgetCardProps {
  title?: string;
  budgeted?: number;
  spent?: number;
  showRemaining?: boolean;
  action?: string;
}

export function BudgetCard(ctx: ComponentContext<BudgetCardProps>): ReactElement {
  const { title = '', budgeted = 0, spent = 0, showRemaining = true, action } = ctx.props;

  const percentage = budgeted > 0 ? Math.min((spent / budgeted) * 100, 100) : 0;
  const remaining = budgeted - spent;
  const isOverBudget = spent > budgeted;
  const theme = isOverBudget ? 'danger' : percentage > 90 ? 'warning' : 'primary';

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action, { title, percentUsed: Math.round(percentage) });
    }
  };

  return (
    <ForgeCard
      className={`genui-budget-card ${isOverBudget ? 'genui-budget-card--over' : ''}${action ? ' genui-budget-card--clickable' : ''}`}
      onClick={action ? handleClick : undefined}>
      <div className="genui-budget-card__header">
        <span className="genui-budget-card__title forge-typography--label1">{title}</span>
        <span className="genui-budget-card__amount forge-typography--body2">
          {formatCurrency(spent)} / {formatCurrency(budgeted)}
        </span>
      </div>
      <ForgeLinearProgress progress={percentage / 100} theme={theme} determinate />
      {showRemaining && (
        <div className="genui-budget-card__footer">
          <span className={`genui-budget-card__remaining forge-typography--caption ${isOverBudget ? 'genui-budget-card__remaining--over' : ''}`}>
            {isOverBudget ? `${formatCurrency(Math.abs(remaining))} over budget` : `${formatCurrency(remaining)} remaining`}
          </span>
          <span className="genui-budget-card__percentage forge-typography--caption">{Math.round(percentage)}%</span>
        </div>
      )}
    </ForgeCard>
  );
}

export const BudgetCardSchema = z.object({
  title: z.string().describe('Budget name'),
  budgeted: z.number().describe('Total budget amount'),
  spent: z.number().describe('Amount spent'),
  showRemaining: z.boolean().describe('Show remaining amount (default true)').optional(),
  action: z.string().describe('Action to trigger on click').optional()
});
