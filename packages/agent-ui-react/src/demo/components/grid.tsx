import type { ReactElement } from 'react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function Grid({ props, children }: BaseComponentProps<GridProps>): ReactElement {
  const { columns = 2, gap = 'md' } = props;

  return <div className={`agentui-grid agentui-grid--cols-${columns} agentui-grid--gap-${gap}`}>{children}</div>;
}

export const GridSchema = z.object({
  columns: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .describe('Number of columns (1-4)')
    .optional(),
  gap: z.enum(['sm', 'md', 'lg']).describe('Gap between items').optional()
});
