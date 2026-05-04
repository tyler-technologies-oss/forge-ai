import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';

interface InsightCardProps {
  title?: string;
  insight?: string;
  icon?: string;
  sentiment?: 'neutral' | 'positive' | 'negative' | 'warning';
}

const VARIANT_CONFIG: Record<string, { icon: string; className: string }> = {
  neutral: { icon: 'lightbulb', className: '' },
  positive: { icon: 'thumb_up', className: 'agentui-insight-card--positive' },
  negative: { icon: 'thumb_down', className: 'agentui-insight-card--negative' },
  warning: { icon: 'priority_high', className: 'agentui-insight-card--warning' }
};

export function InsightCard(ctx: ComponentContext<InsightCardProps>): TemplateResult | typeof nothing {
  const { title, insight, icon, sentiment = 'neutral' } = ctx.props;

  if (!insight) {
    return nothing;
  }

  const config = VARIANT_CONFIG[sentiment] || VARIANT_CONFIG.neutral;
  const displayIcon = icon || config.icon;

  return html`
    <forge-card class="agentui-insight-card ${config.className}" @click=${() => ctx.emit('click', { title, sentiment })}>
      <div class="agentui-insight-card__content">
        <div class="agentui-insight-card__icon">
          <forge-icon name=${displayIcon}></forge-icon>
        </div>
        <div class="agentui-insight-card__body">
          ${title ? html`<span class="agentui-insight-card__title forge-typography--label1">${title}</span>` : nothing}
          <p class="agentui-insight-card__insight forge-typography--body2">${insight}</p>
        </div>
      </div>
    </forge-card>
  `;
}

export const InsightCardSchema = z.object({
  title: z.string().describe('Insight title (e.g., "Key Finding")').optional(),
  insight: z.string().describe('The insight or analysis text'),
  icon: z.string().describe('Icon name override').optional(),
  sentiment: z
    .enum(['neutral', 'positive', 'negative', 'warning'])
    .describe('Visual style based on insight sentiment')
    .optional()
});
