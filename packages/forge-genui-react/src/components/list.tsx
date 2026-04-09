import type { ReactElement } from 'react';
import { ForgeList } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface ListProps {
  dense?: boolean;
  twoLine?: boolean;
  threeLine?: boolean;
}

export function List(ctx: ReactComponentContext<ListProps>): ReactElement | null {
  const { dense = false, twoLine = false, threeLine = false } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return null;
  }

  return (
    <ForgeList dense={dense} twoLine={twoLine} threeLine={threeLine}>
      {ctx.children}
    </ForgeList>
  );
}
