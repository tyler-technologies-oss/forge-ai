import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon, ForgeBadge } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency } from './utils';

interface MetricCardProps {
  title?: string;
  value?: number;
  subtitle?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export function MetricCard(ctx: ComponentContext): ReactElement {
  const { title = '', value = 0, subtitle, icon, trend, trendValue, variant = 'default' } = ctx.props as MetricCardProps;

  const trendIcon = trend === 'up' ? 'trending_up' : trend === 'down' ? 'trending_down' : undefined;
  const trendTheme = trend === 'up' ? 'success' : trend === 'down' ? 'danger' : 'tertiary';

  return (
    <ForgeCard className={`genui-metric-card genui-metric-card--${variant}`}>
      <div className="genui-metric-card__content">
        {icon && (
          <div className="genui-metric-card__icon">
            <ForgeIcon name={icon} />
          </div>
        )}
        <div className="genui-metric-card__body">
          <span className="genui-metric-card__title forge-typography--label2">{title}</span>
          <span className="genui-metric-card__value forge-typography--heading4">{formatCurrency(value)}</span>
          {subtitle && <span className="genui-metric-card__subtitle forge-typography--caption">{subtitle}</span>}
        </div>
        {trend && trendValue && (
          <ForgeBadge theme={trendTheme} className="genui-metric-card__trend">
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
  value: z.number().describe('Numeric value (formatted as currency)'),
  subtitle: z.string().describe('Secondary info').optional(),
  icon: z.string().describe('Icon name (e.g., attach_money, account_balance)').optional(),
  trend: z.enum(['up', 'down', 'neutral']).describe('Trend direction').optional(),
  trendValue: z.string().describe('Trend change (e.g., +5%, -$2,000)').optional(),
  variant: z.enum(['default', 'success', 'warning', 'danger']).describe('Visual variant').optional()
});
