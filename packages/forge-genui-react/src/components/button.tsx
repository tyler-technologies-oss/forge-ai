import type { ReactElement } from 'react';
import { ForgeButton } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface ButtonProps {
  label?: string;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';
  disabled?: boolean;
  action?: string;
}

export function Button(ctx: ReactComponentContext<ButtonProps>): ReactElement | null {
  const { label = '', variant = 'raised', disabled = false, action } = ctx.props;

  if (!label) {
    return null;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action);
    }
  };

  return (
    <ForgeButton variant={variant} disabled={disabled} onClick={handleClick}>
      {label}
    </ForgeButton>
  );
}
