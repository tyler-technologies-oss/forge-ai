import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

import styles from './insight-card.scss?inline';

interface InsightCardProps {
  title?: string;
  insight?: string;
  icon?: string;
  sentiment?: 'neutral' | 'positive' | 'negative' | 'warning';
}

const VARIANT_CONFIG: Record<string, { icon: string; className: string }> = {
  neutral: { icon: 'lightbulb', className: '' },
  positive: { icon: 'thumb_up', className: 'insight-card--positive' },
  negative: { icon: 'thumb_down', className: 'insight-card--negative' },
  warning: { icon: 'priority_high', className: 'insight-card--warning' }
};

@customElement('agentui-insight-card')
export class AgentUIInsightCardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: String }) public insight?: string;
  @property({ type: String }) public icon?: string;
  @property({ type: String, reflect: true }) public sentiment: 'neutral' | 'positive' | 'negative' | 'warning' = 'neutral';

  get #config(): { icon: string; className: string } {
    return VARIANT_CONFIG[this.sentiment] || VARIANT_CONFIG.neutral;
  }

  get #displayIcon(): string {
    return this.icon || this.#config.icon;
  }

  #handleClick(): void {
    this.dispatchEvent(
      new CustomEvent('click-detail', {
        detail: { title: this.titleText, sentiment: this.sentiment },
        bubbles: true,
        composed: true
      })
    );
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this.insight) {
      return nothing;
    }

    return html`
      <forge-card class="${this.#config.className}" @click=${this.#handleClick}>
        <div class="insight-card__content">
          <div class="insight-card__icon">
            <forge-icon name=${this.#displayIcon}></forge-icon>
          </div>
          <div class="insight-card__body">
            ${this.titleText ? html`<span class="insight-card__title forge-typography--label1">${this.titleText}</span>` : nothing}
            <p class="insight-card__insight forge-typography--body2">${this.insight}</p>
          </div>
        </div>
      </forge-card>
    `;
  }
}

export function InsightCard(ctx: ComponentContext<InsightCardProps>): TemplateResult | typeof nothing {
  const { title = '', insight, icon, sentiment = 'neutral' } = ctx.props;

  if (!insight) {
    return nothing;
  }

  return html`
    <agentui-insight-card
      .titleText=${title}
      .insight=${insight}
      .icon=${icon}
      .sentiment=${sentiment}
      @click-detail=${(e: CustomEvent) => ctx.emit('click', e.detail)}>
    </agentui-insight-card>
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

declare global {
  interface HTMLElementTagNameMap {
    'agentui-insight-card': AgentUIInsightCardComponent;
  }
}
