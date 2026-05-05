import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './budget-card.scss?inline';

interface BudgetCardProps {
  title?: string;
  budgeted?: number;
  spent?: number;
  showRemaining?: boolean;
}

@customElement('agentui-budget-card')
export class AgentUIBudgetCardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public title: string = '';
  @property({ type: Number }) public budgeted: number = 0;
  @property({ type: Number }) public spent: number = 0;
  @property({ type: Boolean }) public showRemaining: boolean = true;
  @property({ type: Boolean, reflect: true }) public over: boolean = false;

  protected override render(): TemplateResult {
    const percentage = this.budgeted > 0 ? Math.min((this.spent / this.budgeted) * 100, 100) : 0;
    const remaining = this.budgeted - this.spent;
    const isOverBudget = this.spent > this.budgeted;
    const theme = isOverBudget ? 'danger' : percentage > 90 ? 'warning' : 'primary';

    this.over = isOverBudget;

    return html`
      <forge-card>
        <div class="budget-card">
          <div class="budget-card__header">
            <span class="budget-card__title forge-typography--label1">${this.title}</span>
            <span class="budget-card__amount forge-typography--body2">
              ${formatCurrency(this.spent)} / ${formatCurrency(this.budgeted)}
            </span>
          </div>
          <forge-linear-progress .progress=${percentage / 100} theme=${theme} determinate></forge-linear-progress>
          ${this.showRemaining
            ? html`
                <div class="budget-card__footer">
                  <span
                    class="budget-card__remaining forge-typography--caption ${isOverBudget ? 'budget-card__remaining--over' : ''}">
                    ${isOverBudget ? `${formatCurrency(Math.abs(remaining))} over budget` : `${formatCurrency(remaining)} remaining`}
                  </span>
                  <span class="budget-card__percentage forge-typography--caption">${Math.round(percentage)}%</span>
                </div>
              `
            : ''}
        </div>
      </forge-card>
    `;
  }
}

export function BudgetCard(ctx: ComponentContext<BudgetCardProps>): TemplateResult {
  const { title = '', budgeted = 0, spent = 0, showRemaining = true } = ctx.props;
  const percentage = budgeted > 0 ? Math.min((spent / budgeted) * 100, 100) : 0;

  return html`
    <agentui-budget-card
      .title=${title}
      .budgeted=${budgeted}
      .spent=${spent}
      .showRemaining=${showRemaining}
      @click=${() => ctx.emit('click', { title, percentUsed: Math.round(percentage) })}>
    </agentui-budget-card>
  `;
}

export const BudgetCardSchema = z.object({
  title: z.string().describe('Budget name'),
  budgeted: z.number().describe('Total budget amount'),
  spent: z.number().describe('Amount spent'),
  showRemaining: z.boolean().describe('Show remaining amount (default true)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-budget-card': AgentUIBudgetCardComponent;
  }
}
