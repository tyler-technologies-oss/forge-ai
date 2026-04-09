import type { ReactElement } from 'react';
import { ForgeStack } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface StackProps {
  inline?: boolean;
  gap?: string;
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  wrap?: boolean;
  stretch?: boolean;
}

export function Stack(ctx: ReactComponentContext<StackProps>): ReactElement | null {
  const {
    inline = false,
    gap = '16',
    alignment = 'start',
    justify = 'start',
    wrap = false,
    stretch = false
  } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return null;
  }

  return (
    <ForgeStack
      inline={inline}
      gap={gap}
      alignment={alignment}
      justify={justify}
      wrap={wrap}
      stretch={stretch}
    >
      {ctx.children}
    </ForgeStack>
  );
}
