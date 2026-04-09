import type { ReactElement } from 'react';
import { ForgeAvatar } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface AvatarProps {
  text?: string;
  imageUrl?: string;
  letterCount?: number;
}

export function Avatar(ctx: ReactComponentContext<AvatarProps>): ReactElement | null {
  const { text, imageUrl, letterCount = 2 } = ctx.props;

  if (!text && !imageUrl) {
    return null;
  }

  return <ForgeAvatar text={text ?? ''} imageUrl={imageUrl ?? ''} letterCount={letterCount} />;
}
