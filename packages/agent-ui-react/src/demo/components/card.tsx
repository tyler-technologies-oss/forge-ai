import type { ReactElement } from 'react';
import { ForgeCard } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';

interface CardProps {
  padded?: boolean;
}

export function Card({ props, children }: BaseComponentProps<CardProps>): ReactElement {
  const { padded = true } = props;

  return <ForgeCard className={`agentui-card ${padded ? 'agentui-card--padded' : ''}`}>{children}</ForgeCard>;
}

export const CardSchema = z.object({
  padded: z.boolean().describe('Add padding inside card (default true)').optional()
});
