import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon, ForgeBadge } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';
import { formatCurrency } from './utils.js';

interface MetricCardProps {
  title?: string;
  value?: number | string;
  subtitle?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export function MetricCard({ props, emit }: BaseComponentProps<MetricCardProps>): ReactElement {
  const { title = '', value = 0, subtitle, icon, trend, trendValue, variant = 'default' } = props;
  const displayValue =
    typeof value === 'string' ? value : typeof value === 'number' ? formatCurrency(value) : String(value);

  const trendIcon = trend === 'up' ? 'trending_up' : trend === 'down' ? 'trending_down' : undefined;
  const trendTheme = trend === 'up' ? 'success' : trend === 'down' ? 'danger' : 'tertiary';

  return (
    <ForgeCard className={`agentui-metric-card agentui-metric-card--${variant}`} onClick={() => emit('click')}>
      <div className="agentui-metric-card__content">
        {icon && (
          <div className="agentui-metric-card__icon">
            <ForgeIcon name={icon} />
          </div>
        )}
        <div className="agentui-metric-card__body">
          <span className="agentui-metric-card__title forge-typography--label2">{title}</span>
          <span className="agentui-metric-card__value forge-typography--heading4">{displayValue}</span>
          {subtitle && <span className="agentui-metric-card__subtitle forge-typography--caption">{subtitle}</span>}
        </div>
        {trend && trendValue && (
          <ForgeBadge theme={trendTheme} className="agentui-metric-card__trend">
            {trendIcon && <ForgeIcon name={trendIcon} />}
            <span>{trendValue}</span>
          </ForgeBadge>
        )}
      </div>
    </ForgeCard>
  );
}

export const MetricCardSchema = z.object({
  title: z.string().describe('Metric label'),
  value: z
    .union([z.number(), z.string()])
    .describe('Numeric value (auto-formatted as currency) or pre-formatted string'),
  subtitle: z.string().describe('Secondary info').optional(),
  icon: z.string().describe('Icon name (e.g., attach_money, account_balance)').optional(),
  trend: z.enum(['up', 'down', 'neutral']).describe('Trend direction').optional(),
  trendValue: z.string().describe('Trend change (e.g., +5%, -$2,000)').optional(),
  variant: z.enum(['default', 'success', 'warning', 'danger']).describe('Visual variant').optional()
});
