import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './category-breakdown.scss?inline';

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

@customElement('agentui-category-breakdown')
export class AgentUICategoryBreakdownComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: Array }) public categories: Category[] = [];
  @property({ type: Boolean }) public showLegend = true;

  get #total(): number {
    return this.categories.reduce((sum, cat) => sum + cat.value, 0);
  }

  #getColor(index: number, customColor?: string): string {
    return customColor || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
  }

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        ${this.titleText
          ? html`
              <forge-toolbar>
                <h3 class="forge-typography--heading6" slot="start">${this.titleText}</h3>
                <span class="forge-typography--label2" slot="end">${formatCurrency(this.#total)}</span>
              </forge-toolbar>
            `
          : nothing}
        <div class="category-breakdown__bar">
          ${this.categories.map((cat, idx) => {
            const percentage = this.#total > 0 ? (cat.value / this.#total) * 100 : 0;
            return html`
              <div
                class="category-breakdown__segment"
                style="width: ${percentage}%; background-color: ${this.#getColor(idx, cat.color)}"
                title="${cat.name}: ${formatCurrency(cat.value)} (${percentage.toFixed(1)}%)"></div>
            `;
          })}
        </div>
        ${this.showLegend
          ? html`
              <ul class="category-breakdown__legend">
                ${this.categories.map((cat, idx) => {
                  const percentage = this.#total > 0 ? (cat.value / this.#total) * 100 : 0;
                  return html`
                    <li class="category-breakdown__legend-item">
                      <span
                        class="category-breakdown__legend-color"
                        style="background-color: ${this.#getColor(idx, cat.color)}"></span>
                      <span class="category-breakdown__legend-label forge-typography--body2">${cat.name}</span>
                      <span class="category-breakdown__legend-value forge-typography--caption">
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
}

export function CategoryBreakdown(ctx: ComponentContext<CategoryBreakdownProps>): TemplateResult {
  const { title = '', categories = [], showLegend = true } = ctx.props;

  return html`
    <agentui-category-breakdown .titleText=${title} .categories=${categories} .showLegend=${showLegend}>
    </agentui-category-breakdown>
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

declare global {
  interface HTMLElementTagNameMap {
    'agentui-category-breakdown': AgentUICategoryBreakdownComponent;
  }
}
