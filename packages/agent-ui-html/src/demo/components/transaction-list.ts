import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency, formatDate } from './utils.js';

import styles from './transaction-list.scss?inline';

interface Transaction {
  date: string;
  description: string;
  amount: number;
  category?: string;
}

interface TransactionListProps {
  title?: string;
  transactions?: Transaction[];
  limit?: number;
}

@customElement('agentui-transaction-list')
export class AgentUITransactionListComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: Array }) public transactions: Transaction[] = [];
  @property({ type: Number }) public limit: number = 5;

  protected override render(): TemplateResult {
    const displayedTransactions = this.transactions.slice(0, this.limit);

    return html`
      <forge-card>
        ${this.titleText
          ? html`
              <forge-toolbar>
                <h3 class="forge-typography--heading6" slot="start">${this.titleText}</h3>
              </forge-toolbar>
            `
          : nothing}
        <ul class="transaction-list__items">
          ${displayedTransactions.map(
            tx => html`
              <li class="transaction-list__item">
                <div class="transaction-list__info">
                  <span class="transaction-list__description forge-typography--body2">${tx.description}</span>
                  <span class="transaction-list__date forge-typography--caption">${formatDate(tx.date)}</span>
                </div>
                <div class="transaction-list__right">
                  <span class="transaction-list__amount forge-typography--label2">${formatCurrency(tx.amount)}</span>
                  ${tx.category ? html`<forge-badge theme="tertiary">${tx.category}</forge-badge>` : nothing}
                </div>
              </li>
            `
          )}
        </ul>
      </forge-card>
    `;
  }
}

export function TransactionList(ctx: ComponentContext<TransactionListProps>): TemplateResult {
  const { title = '', transactions = [], limit = 5 } = ctx.props;

  return html`
    <agentui-transaction-list .titleText=${title} .transactions=${transactions} .limit=${limit}></agentui-transaction-list>
  `;
}

export const TransactionListSchema = z.object({
  title: z.string().describe('List header').optional(),
  transactions: z
    .array(
      z.object({
        date: z.string().describe('ISO date string'),
        description: z.string().describe('Transaction description'),
        amount: z.number().describe('Amount (formatted as currency)'),
        category: z.string().describe('Category label').optional()
      })
    )
    .describe('Array of transactions'),
  limit: z.number().describe('Max items to show (default 5)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-transaction-list': AgentUITransactionListComponent;
  }
}
