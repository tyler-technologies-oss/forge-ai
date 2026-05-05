import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './ranking-list.scss?inline';

interface RankingItem {
  label: string;
  value: number;
  subtitle?: string;
}

interface RankingListProps {
  title?: string;
  items?: RankingItem[];
  variant?: 'top' | 'bottom';
  limit?: number;
}

@customElement('agentui-ranking-list')
export class AgentUIRankingListComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: Array }) public items: RankingItem[] = [];
  @property({ type: String }) public variant: 'top' | 'bottom' = 'top';
  @property({ type: Number }) public limit = 5;

  get #displayedItems(): RankingItem[] {
    return this.items.slice(0, this.limit);
  }

  #getMedalClass(index: number): string {
    if (this.variant === 'top') {
      if (index === 0) {
        return 'ranking-list__rank--gold';
      }
      if (index === 1) {
        return 'ranking-list__rank--silver';
      }
      if (index === 2) {
        return 'ranking-list__rank--bronze';
      }
    }
    return '';
  }

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        ${this.titleText
          ? html`
              <forge-toolbar>
                <h3 class="forge-typography--heading6" slot="start">${this.titleText}</h3>
              </forge-toolbar>
            `
          : nothing}
        <ol class="ranking-list__items">
          ${this.#displayedItems.map(
            (item, idx) => html`
              <li class="ranking-list__item">
                <span class="ranking-list__rank ${this.#getMedalClass(idx)}">${idx + 1}</span>
                <div class="ranking-list__info">
                  <span class="ranking-list__label forge-typography--body2">${item.label}</span>
                  ${item.subtitle ? html`<span class="ranking-list__subtitle forge-typography--caption">${item.subtitle}</span>` : nothing}
                </div>
                <span class="ranking-list__value forge-typography--label2">${formatCurrency(item.value)}</span>
              </li>
            `
          )}
        </ol>
      </forge-card>
    `;
  }
}

export function RankingList(ctx: ComponentContext<RankingListProps>): TemplateResult {
  const { title = '', items = [], variant = 'top', limit = 5 } = ctx.props;

  return html`
    <agentui-ranking-list .titleText=${title} .items=${items} .variant=${variant} .limit=${limit}> </agentui-ranking-list>
  `;
}

export const RankingListSchema = z.object({
  title: z.string().describe('List title').optional(),
  items: z
    .array(
      z.object({
        label: z.string().describe('Item name'),
        value: z.number().describe('Numeric value'),
        subtitle: z.string().describe('Secondary text').optional()
      })
    )
    .describe('Ranked items (will be displayed in order)'),
  variant: z.enum(['top', 'bottom']).describe('top = best/highest, bottom = worst/lowest').optional(),
  limit: z.number().describe('Max items to show (default 5)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-ranking-list': AgentUIRankingListComponent;
  }
}
