import type { ReactElement } from 'react';
import { ForgeBadge } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface BadgeProps {
  text?: string;
  theme?: 'default' | 'info' | 'info-secondary' | 'success' | 'warning' | 'error' | 'danger';
  dot?: boolean;
  strong?: boolean;
}

export function Badge(ctx: ReactComponentContext<BadgeProps>): ReactElement | null {
  const { text, theme = 'default', dot = false, strong = false } = ctx.props;

  if (!text && !dot) {
    return null;
  }

  return (
    <ForgeBadge theme={theme} dot={dot} strong={strong}>
      {text ?? ''}
    </ForgeBadge>
  );
}
