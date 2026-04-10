import type { ReactElement } from 'react';
import { ForgeCard, ForgeBadge, ForgeToolbar } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency, formatDate } from './utils';

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

export function TransactionList(ctx: ComponentContext<TransactionListProps>): ReactElement {
  const { title, transactions = [], limit = 5 } = ctx.props;
  const displayedTransactions = transactions.slice(0, limit);

  return (
    <ForgeCard className="genui-transaction-list">
      {title && (
        <ForgeToolbar>
          <h3 className="forge-typography--heading6" slot="start">{title}</h3>
        </ForgeToolbar>
      )}
      <ul className="genui-transaction-list__items">
        {displayedTransactions.map((tx, idx) => (
          <li key={idx} className="genui-transaction-list__item">
            <div className="genui-transaction-list__info">
              <span className="genui-transaction-list__description forge-typography--body2">{tx.description}</span>
              <span className="genui-transaction-list__date forge-typography--caption">{formatDate(tx.date)}</span>
            </div>
            <div className="genui-transaction-list__right">
              <span className="genui-transaction-list__amount forge-typography--label2">{formatCurrency(tx.amount)}</span>
              {tx.category && <ForgeBadge theme="tertiary">{tx.category}</ForgeBadge>}
            </div>
          </li>
        ))}
      </ul>
    </ForgeCard>
  );
}

export const TransactionListSchema = z.object({
  title: z.string().describe('List header').optional(),
  transactions: z.array(z.object({
    date: z.string().describe('ISO date string'),
    description: z.string().describe('Transaction description'),
    amount: z.number().describe('Amount (formatted as currency)'),
    category: z.string().describe('Category label').optional()
  })).describe('Array of transactions'),
  limit: z.number().describe('Max items to show (default 5)').optional()
});
