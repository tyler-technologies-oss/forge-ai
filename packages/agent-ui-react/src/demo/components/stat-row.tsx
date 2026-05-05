import type { ReactElement } from 'react';
import { ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';
import { formatCurrency } from './utils.js';

interface Stat {
  label: string;
  value: number;
  icon?: string;
}

interface StatRowProps {
  stats?: Stat[];
}

export function StatRow({ props }: BaseComponentProps<StatRowProps>): ReactElement | null {
  const { stats = [] } = props;

  if (stats.length === 0) {
    return null;
  }

  return (
    <div className="agentui-stat-row">
      {stats.map((stat, idx) => (
        <div key={idx} className="agentui-stat-row__item">
          {stat.icon && <ForgeIcon name={stat.icon} className="agentui-stat-row__icon" />}
          <div className="agentui-stat-row__content">
            <span className="agentui-stat-row__value forge-typography--heading6">{formatCurrency(stat.value)}</span>
            <span className="agentui-stat-row__label forge-typography--caption">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export const StatRowSchema = z.object({
  stats: z
    .array(
      z.object({
        label: z.string().describe('Stat label'),
        value: z.number().describe('Numeric value (formatted as currency)'),
        icon: z.string().describe('Icon name').optional()
      })
    )
    .describe('Array of stats to display')
});
