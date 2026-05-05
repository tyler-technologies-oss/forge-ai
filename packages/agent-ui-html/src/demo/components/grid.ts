import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import type { LitResult } from '../types.js';

import styles from './grid.scss?inline';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

@customElement('agentui-grid')
export class AgentUIGridComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Number, reflect: true }) public columns: 1 | 2 | 3 | 4 = 2;
  @property({ type: String, reflect: true }) public gap: 'sm' | 'md' | 'lg' = 'md';

  protected override render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

export function Grid(ctx: ComponentContext<GridProps, LitResult[]>): TemplateResult {
  const { columns = 2, gap = 'md' } = ctx.props;
  return html`<agentui-grid .columns=${columns} .gap=${gap}>${ctx.children}</agentui-grid>`;
}

export const GridSchema = z.object({
  columns: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .describe('Number of columns (1-4)')
    .optional(),
  gap: z.enum(['sm', 'md', 'lg']).describe('Gap between items').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-grid': AgentUIGridComponent;
  }
}
