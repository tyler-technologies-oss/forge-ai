import type { ReactElement } from 'react';
import { ForgeInlineMessage } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface InlineMessageProps {
  title?: string;
  text?: string;
  theme?: 'info' | 'success' | 'warning' | 'error';
}

export function InlineMessage(ctx: ReactComponentContext<InlineMessageProps>): ReactElement | null {
  const { title, text = '', theme = 'info' } = ctx.props;

  if (!text && !title) {
    return null;
  }

  return (
    <ForgeInlineMessage theme={theme}>
      {title && <span slot="title">{title}</span>}
      {text}
    </ForgeInlineMessage>
  );
}
