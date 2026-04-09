import type { ReactElement } from 'react';
import { ForgeIcon } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface IconProps {
  name?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Icon(ctx: ReactComponentContext<IconProps>): ReactElement | null {
  const { name, size } = ctx.props;

  if (!name) {
    return null;
  }

  const sizeClass = size === 'small' ? 'forge-icon--small' : size === 'large' ? 'forge-icon--large' : '';

  return <ForgeIcon name={name} className={sizeClass || undefined} />;
}
