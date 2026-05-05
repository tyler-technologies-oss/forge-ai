import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { formatCurrency } from './utils.js';

import styles from './comparison-card.scss?inline';

interface ComparisonCardProps {
  title?: string;
  leftLabel?: string;
  leftValue?: number;
  rightLabel?: string;
  rightValue?: number;
}

@customElement('agentui-comparison-card')
export class AgentUIComparisonCardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: String }) public leftLabel = '';
  @property({ type: Number }) public leftValue = 0;
  @property({ type: String }) public rightLabel = '';
  @property({ type: Number }) public rightValue = 0;

  get #diff(): number {
    return this.rightValue - this.leftValue;
  }

  get #percentChange(): number {
    return this.leftValue !== 0 ? (this.#diff / this.leftValue) * 100 : 0;
  }

  get #isPositive(): boolean {
    return this.#diff > 0;
  }

  get #isNegative(): boolean {
    return this.#diff < 0;
  }

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        ${this.titleText ? html`<h3 class="comparison-card__title forge-typography--label1">${this.titleText}</h3>` : nothing}
        <div class="comparison-card__values">
          <div class="comparison-card__side">
            <span class="comparison-card__label forge-typography--caption">${this.leftLabel}</span>
            <span class="comparison-card__value forge-typography--heading5">${formatCurrency(this.leftValue)}</span>
          </div>
          <div class="comparison-card__arrow">
            <forge-icon name="arrow_forward"></forge-icon>
          </div>
          <div class="comparison-card__side">
            <span class="comparison-card__label forge-typography--caption">${this.rightLabel}</span>
            <span class="comparison-card__value forge-typography--heading5">${formatCurrency(this.rightValue)}</span>
          </div>
        </div>
        <div
          class="comparison-card__change ${this.#isPositive ? 'comparison-card__change--positive' : ''} ${this.#isNegative ? 'comparison-card__change--negative' : ''}">
          ${this.#isPositive ? html`<forge-icon name="trending_up"></forge-icon>` : nothing}
          ${this.#isNegative ? html`<forge-icon name="trending_down"></forge-icon>` : nothing}
          <span>
            ${this.#isPositive ? '+' : ''}${formatCurrency(this.#diff)} (${this.#isPositive ? '+' : ''}${this.#percentChange.toFixed(1)}%)
          </span>
        </div>
      </forge-card>
    `;
  }
}

export function ComparisonCard(ctx: ComponentContext<ComparisonCardProps>): TemplateResult {
  const { title = '', leftLabel = '', leftValue = 0, rightLabel = '', rightValue = 0 } = ctx.props;

  return html`
    <agentui-comparison-card
      .titleText=${title}
      .leftLabel=${leftLabel}
      .leftValue=${leftValue}
      .rightLabel=${rightLabel}
      .rightValue=${rightValue}>
    </agentui-comparison-card>
  `;
}

export const ComparisonCardSchema = z.object({
  title: z.string().describe('Card title').optional(),
  leftLabel: z.string().describe('Label for left value (e.g., "Last Month")'),
  leftValue: z.number().describe('Left/baseline value'),
  rightLabel: z.string().describe('Label for right value (e.g., "This Month")'),
  rightValue: z.number().describe('Right/current value')
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-comparison-card': AgentUIComparisonCardComponent;
  }
}
