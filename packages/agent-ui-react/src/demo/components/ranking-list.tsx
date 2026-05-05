import type { ReactElement } from 'react';
import { ForgeCard, ForgeToolbar } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';
import { formatCurrency } from './utils.js';

interface RankingItem {
  label: string;
  value: number;
  subtitle?: string;
}

interface RankingListProps {
  title?: string;
  items?: RankingItem[];
  variant?: 'top' | 'bottom';
  limit?: number;
}

export function RankingList({ props }: BaseComponentProps<RankingListProps>): ReactElement {
  const { title, items = [], variant = 'top', limit = 5 } = props;
  const displayedItems = items.slice(0, limit);

  const getMedalClass = (index: number): string => {
    if (variant === 'top') {
      if (index === 0) return 'agentui-ranking-list__rank--gold';
      if (index === 1) return 'agentui-ranking-list__rank--silver';
      if (index === 2) return 'agentui-ranking-list__rank--bronze';
    }
    return '';
  };

  return (
    <ForgeCard className="agentui-ranking-list">
      {title && (
        <ForgeToolbar>
          <h3 className="forge-typography--heading6" slot="start">
            {title}
          </h3>
        </ForgeToolbar>
      )}
      <ol className="agentui-ranking-list__items">
        {displayedItems.map((item, idx) => (
          <li key={idx} className="agentui-ranking-list__item">
            <span className={`agentui-ranking-list__rank ${getMedalClass(idx)}`}>{idx + 1}</span>
            <div className="agentui-ranking-list__info">
              <span className="agentui-ranking-list__label forge-typography--body2">{item.label}</span>
              {item.subtitle && (
                <span className="agentui-ranking-list__subtitle forge-typography--caption">{item.subtitle}</span>
              )}
            </div>
            <span className="agentui-ranking-list__value forge-typography--label2">{formatCurrency(item.value)}</span>
          </li>
        ))}
      </ol>
    </ForgeCard>
  );
}

export const RankingListSchema = z.object({
  title: z.string().describe('List title').optional(),
  items: z
    .array(
      z.object({
        label: z.string().describe('Item name'),
        value: z.number().describe('Numeric value'),
        subtitle: z.string().describe('Secondary text').optional()
      })
    )
    .describe('Ranked items (will be displayed in order)'),
  variant: z.enum(['top', 'bottom']).describe('top = best/highest, bottom = worst/lowest').optional(),
  limit: z.number().describe('Max items to show (default 5)').optional()
});
