import type { ReactElement } from 'react';
import { ForgeIconButton, ForgeIcon } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface IconButtonProps {
  icon?: string;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';
  disabled?: boolean;
  action?: string;
}

export function IconButton(ctx: ReactComponentContext<IconButtonProps>): ReactElement | null {
  const { icon, variant = 'text', disabled = false, action } = ctx.props;

  if (!icon) {
    return null;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action);
    }
  };

  return (
    <ForgeIconButton variant={variant} disabled={disabled} onClick={handleClick}>
      <ForgeIcon name={icon} />
    </ForgeIconButton>
  );
}
