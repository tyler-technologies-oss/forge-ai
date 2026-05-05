import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

interface BudgetCardProps {
  title?: string;
  budgeted?: number;
  spent?: number;
  showRemaining?: boolean;
}

export function BudgetCard(ctx: ComponentContext<BudgetCardProps>): TemplateResult {
  const { title = '', budgeted = 0, spent = 0, showRemaining = true } = ctx.props;

  const percentage = budgeted > 0 ? Math.min((spent / budgeted) * 100, 100) : 0;
  const remaining = budgeted - spent;
  const isOverBudget = spent > budgeted;
  const theme = isOverBudget ? 'danger' : percentage > 90 ? 'warning' : 'primary';

  return html`
    <forge-card
      class="agentui-budget-card ${isOverBudget ? 'agentui-budget-card--over' : ''}"
      @click=${() => ctx.emit('click', { title, percentUsed: Math.round(percentage) })}>
      <div class="agentui-budget-card__header">
        <span class="agentui-budget-card__title forge-typography--label1">${title}</span>
        <span class="agentui-budget-card__amount forge-typography--body2">
          ${formatCurrency(spent)} / ${formatCurrency(budgeted)}
        </span>
      </div>
      <forge-linear-progress .progress=${percentage / 100} theme=${theme} determinate></forge-linear-progress>
      ${showRemaining
        ? html`
            <div class="agentui-budget-card__footer">
              <span
                class="agentui-budget-card__remaining forge-typography--caption ${isOverBudget ? 'agentui-budget-card__remaining--over' : ''}">
                ${isOverBudget
                  ? `${formatCurrency(Math.abs(remaining))} over budget`
                  : `${formatCurrency(remaining)} remaining`}
              </span>
              <span class="agentui-budget-card__percentage forge-typography--caption">${Math.round(percentage)}%</span>
            </div>
          `
        : ''}
    </forge-card>
  `;
}

export const BudgetCardSchema = z.object({
  title: z.string().describe('Budget name'),
  budgeted: z.number().describe('Total budget amount'),
  spent: z.number().describe('Amount spent'),
  showRemaining: z.boolean().describe('Show remaining amount (default true)').optional()
});
