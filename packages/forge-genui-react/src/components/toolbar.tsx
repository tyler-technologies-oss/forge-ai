import type { ReactElement } from 'react';
import { ForgeToolbar } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface ToolbarProps {
  inverted?: boolean;
  noDivider?: boolean;
}

export function Toolbar(ctx: ReactComponentContext<ToolbarProps>): ReactElement | null {
  const { inverted = false, noDivider = false } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return null;
  }

  return (
    <ForgeToolbar inverted={inverted} noDivider={noDivider}>
      {ctx.children}
    </ForgeToolbar>
  );
}
