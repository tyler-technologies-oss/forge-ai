import type { ReactElement, ReactNode } from 'react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function Grid(ctx: ComponentContext<ReactNode>): ReactElement {
  const { columns = 2, gap = 'md' } = ctx.props as GridProps;

  return (
    <div className={`genui-grid genui-grid--cols-${columns} genui-grid--gap-${gap}`}>
      {ctx.children}
    </div>
  );
}

export const GridSchema = z.object({
  columns: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe('Number of columns (1-4)').optional(),
  gap: z.enum(['sm', 'md', 'lg']).describe('Gap between items').optional()
});
