import type { ReactElement, ReactNode } from 'react';
import { ForgeCard } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface CardProps {
  padded?: boolean;
}

export function Card(ctx: ComponentContext<CardProps, ReactNode[]>): ReactElement {
  const { padded = true } = ctx.props;

  return (
    <ForgeCard className={`genui-card ${padded ? 'genui-card--padded' : ''}`}>
      {ctx.children}
    </ForgeCard>
  );
}

export const CardSchema = z.object({
  padded: z.boolean().describe('Add padding inside card (default true)').optional()
});
