import type { ReactElement } from 'react';
import { ForgeCard, ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency } from './utils';

interface ComparisonCardProps {
  title?: string;
  leftLabel?: string;
  leftValue?: number;
  rightLabel?: string;
  rightValue?: number;
}

export function ComparisonCard(ctx: ComponentContext<ComparisonCardProps>): ReactElement {
  const {
    title = '',
    leftLabel = '',
    leftValue = 0,
    rightLabel = '',
    rightValue = 0
  } = ctx.props;

  const diff = rightValue - leftValue;
  const percentChange = leftValue !== 0 ? ((diff / leftValue) * 100) : 0;
  const isPositive = diff > 0;
  const isNegative = diff < 0;

  return (
    <ForgeCard className="genui-comparison-card">
      {title && <h3 className="genui-comparison-card__title forge-typography--label1">{title}</h3>}
      <div className="genui-comparison-card__values">
        <div className="genui-comparison-card__side">
          <span className="genui-comparison-card__label forge-typography--caption">{leftLabel}</span>
          <span className="genui-comparison-card__value forge-typography--heading5">{formatCurrency(leftValue)}</span>
        </div>
        <div className="genui-comparison-card__arrow">
          <ForgeIcon name="arrow_forward" />
        </div>
        <div className="genui-comparison-card__side">
          <span className="genui-comparison-card__label forge-typography--caption">{rightLabel}</span>
          <span className="genui-comparison-card__value forge-typography--heading5">{formatCurrency(rightValue)}</span>
        </div>
      </div>
      <div className={`genui-comparison-card__change ${isPositive ? 'genui-comparison-card__change--positive' : ''} ${isNegative ? 'genui-comparison-card__change--negative' : ''}`}>
        {isPositive && <ForgeIcon name="trending_up" />}
        {isNegative && <ForgeIcon name="trending_down" />}
        <span>
          {isPositive ? '+' : ''}{formatCurrency(diff)} ({isPositive ? '+' : ''}{percentChange.toFixed(1)}%)
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
