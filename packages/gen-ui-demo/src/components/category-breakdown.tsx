import type { ReactElement } from 'react';
import { ForgeCard, ForgeToolbar } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { formatCurrency } from './utils';

interface Category {
  name: string;
  value: number;
  color?: string;
}

interface CategoryBreakdownProps {
  title?: string;
  categories?: Category[];
  showLegend?: boolean;
}

const DEFAULT_COLORS = [
  'var(--forge-theme-primary)',
  'var(--forge-theme-secondary)',
  'var(--forge-theme-tertiary)',
  'var(--forge-theme-success)',
  'var(--forge-theme-warning)',
  'var(--forge-theme-info-secondary)',
];

export function CategoryBreakdown(ctx: ComponentContext): ReactElement {
  const { title, categories = [], showLegend = true } = ctx.props as CategoryBreakdownProps;

  const total = categories.reduce((sum, cat) => sum + cat.value, 0);

  const getColor = (index: number, customColor?: string): string => {
    return customColor || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
  };

  return (
    <ForgeCard className="genui-category-breakdown">
      {title && (
        <ForgeToolbar>
          <h3 className="forge-typography--heading6" slot="start">{title}</h3>
          <span className="forge-typography--label2" slot="end">{formatCurrency(total)}</span>
        </ForgeToolbar>
      )}
      <div className="genui-category-breakdown__bar">
        {categories.map((cat, idx) => {
          const percentage = total > 0 ? (cat.value / total) * 100 : 0;
          return (
            <div
              key={idx}
              className="genui-category-breakdown__segment"
              style={{
                width: `${percentage}%`,
                backgroundColor: getColor(idx, cat.color)
              }}
              title={`${cat.name}: ${formatCurrency(cat.value)} (${percentage.toFixed(1)}%)`}
            />
          );
        })}
      </div>
      {showLegend && (
        <ul className="genui-category-breakdown__legend">
          {categories.map((cat, idx) => {
            const percentage = total > 0 ? (cat.value / total) * 100 : 0;
            return (
              <li key={idx} className="genui-category-breakdown__legend-item">
                <span
                  className="genui-category-breakdown__legend-color"
                  style={{ backgroundColor: getColor(idx, cat.color) }}
                />
                <span className="genui-category-breakdown__legend-label forge-typography--body2">{cat.name}</span>
                <span className="genui-category-breakdown__legend-value forge-typography--caption">
                  {formatCurrency(cat.value)} ({percentage.toFixed(0)}%)
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </ForgeCard>
  );
}

export const CategoryBreakdownSchema = z.object({
  title: z.string().describe('Chart title').optional(),
  categories: z.array(z.object({
    name: z.string().describe('Category name'),
    value: z.number().describe('Category value'),
    color: z.string().describe('CSS color (optional, auto-assigned if not provided)').optional()
  })).describe('Categories to display'),
  showLegend: z.boolean().describe('Show legend below bar (default true)').optional()
});
