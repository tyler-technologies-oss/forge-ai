import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';
import { formatCurrency } from './utils.js';

interface ComparisonCardProps {
  title?: string;
  leftLabel?: string;
  leftValue?: number;
  rightLabel?: string;
  rightValue?: number;
}

export function ComparisonCard({ props }: BaseComponentProps<ComparisonCardProps>): ReactElement {
  const { title = '', leftLabel = '', leftValue = 0, rightLabel = '', rightValue = 0 } = props;

  const diff = rightValue - leftValue;
  const percentChange = leftValue !== 0 ? (diff / leftValue) * 100 : 0;
  const isPositive = diff > 0;
  const isNegative = diff < 0;

  return (
    <ForgeCard className="agentui-comparison-card">
      {title && <h3 className="agentui-comparison-card__title forge-typography--label1">{title}</h3>}
      <div className="agentui-comparison-card__values">
        <div className="agentui-comparison-card__side">
          <span className="agentui-comparison-card__label forge-typography--caption">{leftLabel}</span>
          <span className="agentui-comparison-card__value forge-typography--heading5">{formatCurrency(leftValue)}</span>
        </div>
        <div className="agentui-comparison-card__arrow">
          <ForgeIcon name="arrow_forward" />
        </div>
        <div className="agentui-comparison-card__side">
          <span className="agentui-comparison-card__label forge-typography--caption">{rightLabel}</span>
          <span className="agentui-comparison-card__value forge-typography--heading5">{formatCurrency(rightValue)}</span>
        </div>
      </div>
      <div
        className={`agentui-comparison-card__change ${isPositive ? 'agentui-comparison-card__change--positive' : ''} ${isNegative ? 'agentui-comparison-card__change--negative' : ''}`}>
        {isPositive && <ForgeIcon name="trending_up" />}
        {isNegative && <ForgeIcon name="trending_down" />}
        <span>
          {isPositive ? '+' : ''}
          {formatCurrency(diff)} ({isPositive ? '+' : ''}
          {percentChange.toFixed(1)}%)
        </span>
      </div>
    </ForgeCard>
  );
}

export const ComparisonCardSchema = z.object({
  title: z.string().describe('Card title').optional(),
  leftLabel: z.string().describe('Label for left value (e.g., "Last Month")'),
  leftValue: z.number().describe('Left/baseline value'),
  rightLabel: z.string().describe('Label for right value (e.g., "This Month")'),
  rightValue: z.number().describe('Right/current value')
});
