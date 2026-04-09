import type { ReactElement } from 'react';
import { ForgeCard } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface CardProps {
  raised?: boolean;
}

export function Card(ctx: ReactComponentContext<CardProps>): ReactElement | null {
  const { raised = false } = ctx.props;

  return <ForgeCard raised={raised}>{ctx.children}</ForgeCard>;
}
