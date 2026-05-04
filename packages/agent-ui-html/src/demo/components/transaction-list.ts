import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';
import { formatCurrency, formatDate } from './utils.js';

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

export function TransactionList(ctx: ComponentContext<TransactionListProps>): TemplateResult {
  const { title, transactions = [], limit = 5 } = ctx.props;
  const displayedTransactions = transactions.slice(0, limit);

  return html`
    <forge-card class="agentui-transaction-list">
      ${title
        ? html`
            <forge-toolbar>
              <h3 class="forge-typography--heading6" slot="start">${title}</h3>
            </forge-toolbar>
          `
        : nothing}
      <ul class="agentui-transaction-list__items">
        ${displayedTransactions.map(
          tx => html`
            <li class="agentui-transaction-list__item">
              <div class="agentui-transaction-list__info">
                <span class="agentui-transaction-list__description forge-typography--body2">${tx.description}</span>
                <span class="agentui-transaction-list__date forge-typography--caption">${formatDate(tx.date)}</span>
              </div>
              <div class="agentui-transaction-list__right">
                <span class="agentui-transaction-list__amount forge-typography--label2">${formatCurrency(tx.amount)}</span>
                ${tx.category ? html`<forge-badge theme="tertiary">${tx.category}</forge-badge>` : nothing}
              </div>
            </li>
          `
        )}
      </ul>
    </forge-card>
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
