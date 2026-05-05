import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';

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

export function InsightCard({ props, emit }: BaseComponentProps<InsightCardProps>): ReactElement | null {
  const { title, insight, icon, sentiment = 'neutral' } = props;

  if (!insight) {
    return null;
  }

  const config = VARIANT_CONFIG[sentiment] || VARIANT_CONFIG.neutral;
  const displayIcon = icon || config.icon;

  return (
    <ForgeCard className={`agentui-insight-card ${config.className}`} onClick={() => emit('click')}>
      <div className="agentui-insight-card__content">
        <div className="agentui-insight-card__icon">
          <ForgeIcon name={displayIcon} />
        </div>
        <div className="agentui-insight-card__body">
          {title && <span className="agentui-insight-card__title forge-typography--label1">{title}</span>}
          <p className="agentui-insight-card__insight forge-typography--body2">{insight}</p>
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
