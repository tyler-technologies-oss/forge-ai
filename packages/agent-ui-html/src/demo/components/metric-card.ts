import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
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

export function MetricCard(ctx: ComponentContext<MetricCardProps>): TemplateResult {
  const { title = '', value = 0, subtitle, icon, trend, trendValue, variant = 'default' } = ctx.props;
  const displayValue =
    typeof value === 'string' ? value : typeof value === 'number' ? formatCurrency(value) : String(value);

  const trendIcon = trend === 'up' ? 'trending_up' : trend === 'down' ? 'trending_down' : undefined;
  const trendTheme = trend === 'up' ? 'success' : trend === 'down' ? 'danger' : 'tertiary';

  return html`
    <forge-card
      class="agentui-metric-card agentui-metric-card--${variant}"
      @click=${() => ctx.emit('click', { title, value })}>
      <div class="agentui-metric-card__content">
        ${icon
          ? html`
              <div class="agentui-metric-card__icon">
                <forge-icon name=${icon}></forge-icon>
              </div>
            `
          : nothing}
        <div class="agentui-metric-card__body">
          <span class="agentui-metric-card__title forge-typography--label2">${title}</span>
          <span class="agentui-metric-card__value forge-typography--heading4">${displayValue}</span>
          ${subtitle ? html`<span class="agentui-metric-card__subtitle forge-typography--caption">${subtitle}</span>` : nothing}
        </div>
        ${trend && trendValue
          ? html`
              <forge-badge theme=${trendTheme} class="agentui-metric-card__trend">
                ${trendIcon ? html`<forge-icon name=${trendIcon}></forge-icon>` : nothing}
                <span>${trendValue}</span>
              </forge-badge>
            `
          : nothing}
      </div>
    </forge-card>
  `;
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
