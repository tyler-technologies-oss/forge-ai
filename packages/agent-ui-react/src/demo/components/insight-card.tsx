import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon } from '@tylertech/forge-react';
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
  positive: { icon: 'thumb_up', className: 'genui-insight-card--positive' },
  negative: { icon: 'thumb_down', className: 'genui-insight-card--negative' },
  warning: { icon: 'priority_high', className: 'genui-insight-card--warning' }
};

export function InsightCard(ctx: ComponentContext<InsightCardProps>): ReactElement | null {
  const { title, insight, icon, sentiment = 'neutral' } = ctx.props;

  if (!insight) {
    return null;
  }

  const config = VARIANT_CONFIG[sentiment] || VARIANT_CONFIG.neutral;
  const displayIcon = icon || config.icon;

  return (
    <ForgeCard
      className={`genui-insight-card ${config.className}`}
      onClick={() => ctx.emit('click', { title, sentiment })}>
      <div className="genui-insight-card__content">
        <div className="genui-insight-card__icon">
          <ForgeIcon name={displayIcon} />
        </div>
        <div className="genui-insight-card__body">
          {title && <span className="genui-insight-card__title forge-typography--label1">{title}</span>}
          <p className="genui-insight-card__insight forge-typography--body2">{insight}</p>
        </div>
      </div>
    </ForgeCard>
  );
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
