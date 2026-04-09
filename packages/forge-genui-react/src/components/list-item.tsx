import type { ReactElement } from 'react';
import { ForgeListItem } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface ListItemProps {
  text?: string;
  secondaryText?: string;
  tertiaryText?: string;
  selected?: boolean;
  value?: string;
  action?: string;
}

export function ListItem(ctx: ReactComponentContext<ListItemProps>): ReactElement | null {
  const { text = '', secondaryText, tertiaryText, selected = false, value, action } = ctx.props;

  if (!text) {
    return null;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action, { value });
    }
  };

  return (
    <ForgeListItem selected={selected} value={value ?? ''} onClick={handleClick}>
      {text}
      {secondaryText && <span slot="secondary-text">{secondaryText}</span>}
      {tertiaryText && <span slot="tertiary-text">{tertiaryText}</span>}
    </ForgeListItem>
  );
}
