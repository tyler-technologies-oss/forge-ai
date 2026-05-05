import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './metric-card.scss?inline';

interface MetricCardProps {
  title?: string;
  value?: number | string;
  subtitle?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

@customElement('agentui-metric-card')
export class AgentUIMetricCardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property() public value?: number | string;
  @property({ type: String }) public subtitle?: string;
  @property({ type: String }) public icon?: string;
  @property({ type: String }) public trend?: 'up' | 'down' | 'neutral';
  @property({ type: String }) public trendValue?: string;
  @property({ type: String, reflect: true }) public variant: 'default' | 'success' | 'warning' | 'danger' = 'default';

  protected override render(): TemplateResult {
    const displayValue =
      typeof this.value === 'string' ? this.value : typeof this.value === 'number' ? formatCurrency(this.value) : String(this.value);

    const trendIcon = this.trend === 'up' ? 'trending_up' : this.trend === 'down' ? 'trending_down' : undefined;
    const trendTheme = this.trend === 'up' ? 'success' : this.trend === 'down' ? 'danger' : 'tertiary';

    return html`
      <forge-card>
        <div class="metric-card__content">
          ${this.icon
            ? html`
                <div class="metric-card__icon">
                  <forge-icon name=${this.icon}></forge-icon>
                </div>
              `
            : nothing}
          <div class="metric-card__body">
            <span class="metric-card__title forge-typography--label2">${this.titleText}</span>
            <span class="metric-card__value forge-typography--heading4">${displayValue}</span>
            ${this.subtitle ? html`<span class="metric-card__subtitle forge-typography--caption">${this.subtitle}</span>` : nothing}
          </div>
          ${this.trend && this.trendValue
            ? html`
                <forge-badge theme=${trendTheme} class="metric-card__trend">
                  ${trendIcon ? html`<forge-icon name=${trendIcon}></forge-icon>` : nothing}
                  <span>${this.trendValue}</span>
                </forge-badge>
              `
            : nothing}
        </div>
      </forge-card>
    `;
  }
}

export function MetricCard(ctx: ComponentContext<MetricCardProps>): TemplateResult {
  const { title = '', value = 0, subtitle, icon, trend, trendValue, variant = 'default' } = ctx.props;

  return html`
    <agentui-metric-card
      .titleText=${title}
      .value=${value}
      .subtitle=${subtitle}
      .icon=${icon}
      .trend=${trend}
      .trendValue=${trendValue}
      .variant=${variant}
      @click=${() => ctx.emit('click', { title, value })}>
    </agentui-metric-card>
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

declare global {
  interface HTMLElementTagNameMap {
    'agentui-metric-card': AgentUIMetricCardComponent;
  }
}
