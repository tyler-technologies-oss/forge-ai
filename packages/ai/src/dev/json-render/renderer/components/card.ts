import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface CardProps {
  raised?: boolean;
}

export function Card(ctx: ComponentContext<CardProps>): TemplateResult | typeof nothing {
  const { raised = false } = ctx.props;

  return html`<forge-card ?raised=${raised}>${ctx.children}</forge-card>`;
}
