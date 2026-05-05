import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './stat-row.scss?inline';

interface Stat {
  label: string;
  value: number;
  icon?: string;
}

interface StatRowProps {
  stats?: Stat[];
}

@customElement('agentui-stat-row')
export class AgentUIStatRowComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Array }) public stats: Stat[] = [];

  protected override render(): TemplateResult | typeof nothing {
    if (this.stats.length === 0) {
      return nothing;
    }

    return html`
      <div class="stat-row">
        ${this.stats.map(
          stat => html`
            <div class="stat-row__item">
              ${stat.icon ? html`<forge-icon name=${stat.icon} class="stat-row__icon"></forge-icon>` : nothing}
              <div class="stat-row__content">
                <span class="stat-row__value forge-typography--heading6">${formatCurrency(stat.value)}</span>
                <span class="stat-row__label forge-typography--caption">${stat.label}</span>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

export function StatRow(ctx: ComponentContext<StatRowProps>): TemplateResult | typeof nothing {
  const { stats = [] } = ctx.props;

  if (stats.length === 0) {
    return nothing;
  }

  return html`<agentui-stat-row .stats=${stats}></agentui-stat-row>`;
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

declare global {
  interface HTMLElementTagNameMap {
    'agentui-stat-row': AgentUIStatRowComponent;
  }
}
