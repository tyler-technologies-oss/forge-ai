import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface CardProps {
  raised?: boolean;
}

export function Card(ctx: LitComponentContext<CardProps>): TemplateResult | typeof nothing {
  const { raised = false } = ctx.props;

  return html`<forge-card ?raised=${raised}>${ctx.children}</forge-card>`;
}
