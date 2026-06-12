import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface BoxProps {
  display?: 'flex' | 'grid' | 'block';
  gap?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  padding?: number | string;
  margin?: number | string;
}

export function Box(ctx: ComponentContext<BoxProps, TemplateResult[]>): TemplateResult {
  const {
    display = 'flex',
    gap,
    flexDirection,
    justifyContent,
    alignItems,
    gridTemplateColumns,
    gridTemplateRows,
    padding,
    margin
  } = ctx.props;

  const styles: string[] = [`display: ${display}`];

  if (gap !== undefined) {
    styles.push(`gap: ${typeof gap === 'number' ? `${gap}px` : gap}`);
  }
  if (flexDirection) {
    styles.push(`flex-direction: ${flexDirection}`);
  }
  if (justifyContent) {
    styles.push(`justify-content: ${justifyContent}`);
  }
  if (alignItems) {
    styles.push(`align-items: ${alignItems}`);
  }
  if (gridTemplateColumns) {
    styles.push(`grid-template-columns: ${gridTemplateColumns}`);
  }
  if (gridTemplateRows) {
    styles.push(`grid-template-rows: ${gridTemplateRows}`);
  }
  if (padding !== undefined) {
    styles.push(`padding: ${typeof padding === 'number' ? `${padding}px` : padding}`);
  }
  if (margin !== undefined) {
    styles.push(`margin: ${typeof margin === 'number' ? `${margin}px` : margin}`);
  }

  return html`<div style="${styles.join('; ')}">${ctx.children}</div>`;
}

export const BoxSchema = z.object({
  display: z.enum(['flex', 'grid', 'block']).describe('Display type (default: flex)').optional(),
  gap: z.number().describe('Gap between items in pixels').optional(),
  flexDirection: z
    .enum(['row', 'column', 'row-reverse', 'column-reverse'])
    .describe('Flex direction (only applies when display=flex)')
    .optional(),
  justifyContent: z
    .enum(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'])
    .describe('Justify content')
    .optional(),
  alignItems: z
    .enum(['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])
    .describe('Align items')
    .optional(),
  gridTemplateColumns: z.string().describe('Grid template columns (e.g., "1fr 1fr 1fr")').optional(),
  gridTemplateRows: z.string().describe('Grid template rows (e.g., "auto auto")').optional(),
  padding: z
    .union([z.number(), z.string()])
    .describe('Padding (number in px or CSS string like "16px 24px")')
    .optional(),
  margin: z
    .union([z.number(), z.string()])
    .describe('Margin (number in px or CSS string like "16px 24px")')
    .optional()
});
