import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';
import { formatCurrency } from './utils.js';

interface Stat {
  label: string;
  value: number;
  icon?: string;
}

interface StatRowProps {
  stats?: Stat[];
}

export function StatRow(ctx: ComponentContext<StatRowProps>): TemplateResult | typeof nothing {
  const { stats = [] } = ctx.props;

  if (stats.length === 0) {
    return nothing;
  }

  return html`
    <div class="agentui-stat-row">
      ${stats.map(
        stat => html`
          <div class="agentui-stat-row__item">
            ${stat.icon ? html`<forge-icon name=${stat.icon} class="agentui-stat-row__icon"></forge-icon>` : nothing}
            <div class="agentui-stat-row__content">
              <span class="agentui-stat-row__value forge-typography--heading6">${formatCurrency(stat.value)}</span>
              <span class="agentui-stat-row__label forge-typography--caption">${stat.label}</span>
            </div>
          </div>
        `
      )}
    </div>
  `;
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
