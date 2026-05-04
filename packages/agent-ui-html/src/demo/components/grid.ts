import { html, type TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';
import type { LitResult } from '../types.js';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function Grid(ctx: ComponentContext<GridProps, LitResult[]>): TemplateResult {
  const { columns = 2, gap = 'md' } = ctx.props;
  return html`<div class="agentui-grid agentui-grid--cols-${columns} agentui-grid--gap-${gap}">${ctx.children}</div>`;
}

export const GridSchema = z.object({
  columns: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .describe('Number of columns (1-4)')
    .optional(),
  gap: z.enum(['sm', 'md', 'lg']).describe('Gap between items').optional()
});
