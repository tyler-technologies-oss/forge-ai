import type { ReactElement } from 'react';
import { ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency } from './utils';

interface Stat {
  label: string;
  value: number;
  icon?: string;
}

interface StatRowProps {
  stats?: Stat[];
}

export function StatRow(ctx: ComponentContext<StatRowProps>): ReactElement | null {
  const { stats = [] } = ctx.props;

  if (stats.length === 0) {
    return null;
  }

  return (
    <div className="genui-stat-row">
      {stats.map((stat, idx) => (
        <div key={idx} className="genui-stat-row__item">
          {stat.icon && <ForgeIcon name={stat.icon} className="genui-stat-row__icon" />}
          <div className="genui-stat-row__content">
            <span className="genui-stat-row__value forge-typography--heading6">{formatCurrency(stat.value)}</span>
            <span className="genui-stat-row__label forge-typography--caption">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export const StatRowSchema = z.object({
  stats: z.array(z.object({
    label: z.string().describe('Stat label'),
    value: z.number().describe('Numeric value (formatted as currency)'),
    icon: z.string().describe('Icon name').optional()
  })).describe('Array of stats to display')
});
