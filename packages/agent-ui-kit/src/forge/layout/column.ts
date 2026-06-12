import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface ColumnProps {
  gap?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

export function Column(ctx: ComponentContext<ColumnProps, TemplateResult[]>): TemplateResult {
  const { gap = 16, align = 'stretch', justify = 'flex-start' } = ctx.props;

  const styles = [
    'display: flex',
    'flex-direction: column',
    `gap: ${gap}px`,
    `align-items: ${align}`,
    `justify-content: ${justify}`
  ].join('; ');

  return html`<div style="${styles}">${ctx.children}</div>`;
}

export const ColumnSchema = z.object({
  gap: z.number().describe('Gap between items in pixels (default: 16)').optional(),
  align: z
    .enum(['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])
    .describe('Align items (flex align-items)')
    .optional(),
  justify: z
    .enum(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'])
    .describe('Justify content (flex justify-content)')
    .optional()
});
