import type { ReactElement } from 'react';
import { ForgeDivider } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface DividerProps {
  vertical?: boolean;
}

export function Divider(ctx: ReactComponentContext<DividerProps>): ReactElement {
  const { vertical = false } = ctx.props;

  return <ForgeDivider vertical={vertical} />;
}
