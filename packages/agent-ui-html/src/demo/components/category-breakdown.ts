import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

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
  'var(--forge-theme-info-secondary)'
];

export function CategoryBreakdown(ctx: ComponentContext<CategoryBreakdownProps>): TemplateResult {
  const { title, categories = [], showLegend = true } = ctx.props;

  const total = categories.reduce((sum, cat) => sum + cat.value, 0);

  const getColor = (index: number, customColor?: string): string => {
    return customColor || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
  };

  return html`
    <forge-card class="agentui-category-breakdown">
      ${title
        ? html`
            <forge-toolbar>
              <h3 class="forge-typography--heading6" slot="start">${title}</h3>
              <span class="forge-typography--label2" slot="end">${formatCurrency(total)}</span>
            </forge-toolbar>
          `
        : nothing}
      <div class="agentui-category-breakdown__bar">
        ${categories.map((cat, idx) => {
          const percentage = total > 0 ? (cat.value / total) * 100 : 0;
          return html`
            <div
              class="agentui-category-breakdown__segment"
              style="width: ${percentage}%; background-color: ${getColor(idx, cat.color)}"
              title="${cat.name}: ${formatCurrency(cat.value)} (${percentage.toFixed(1)}%)"></div>
          `;
        })}
      </div>
      ${showLegend
        ? html`
            <ul class="agentui-category-breakdown__legend">
              ${categories.map((cat, idx) => {
                const percentage = total > 0 ? (cat.value / total) * 100 : 0;
                return html`
                  <li class="agentui-category-breakdown__legend-item">
                    <span
                      class="agentui-category-breakdown__legend-color"
                      style="background-color: ${getColor(idx, cat.color)}"></span>
                    <span class="agentui-category-breakdown__legend-label forge-typography--body2">${cat.name}</span>
                    <span class="agentui-category-breakdown__legend-value forge-typography--caption">
                      ${formatCurrency(cat.value)} (${percentage.toFixed(0)}%)
                    </span>
                  </li>
                `;
              })}
            </ul>
          `
        : nothing}
    </forge-card>
  `;
}

export const CategoryBreakdownSchema = z.object({
  title: z.string().describe('Chart title').optional(),
  categories: z
    .array(
      z.object({
        name: z.string().describe('Category name'),
        value: z.number().describe('Category value'),
        color: z.string().describe('CSS color (optional, auto-assigned if not provided)').optional()
      })
    )
    .describe('Categories to display'),
  showLegend: z.boolean().describe('Show legend below bar (default true)').optional()
});
