import type { ReactElement } from 'react';
import type { ReactComponentContext } from '../types.js';

interface TextProps {
  text?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'body';
}

export function Text(ctx: ReactComponentContext<TextProps>): ReactElement | null {
  const { text = '', variant = 'body' } = ctx.props;

  if (!text) {
    return null;
  }

  const classMap: Record<string, string> = {
    h1: 'forge-typography--headline1',
    h2: 'forge-typography--headline2',
    h3: 'forge-typography--headline3',
    h4: 'forge-typography--headline4',
    h5: 'forge-typography--headline5',
    caption: 'forge-typography--caption',
    body: 'forge-typography--body1'
  };

  const className = classMap[variant] || 'forge-typography--body1';

  switch (variant) {
    case 'h1':
      return <h1 className={className}>{text}</h1>;
    case 'h2':
      return <h2 className={className}>{text}</h2>;
    case 'h3':
      return <h3 className={className}>{text}</h3>;
    case 'h4':
      return <h4 className={className}>{text}</h4>;
    case 'h5':
      return <h5 className={className}>{text}</h5>;
    case 'caption':
      return <span className={className}>{text}</span>;
    default:
      return <p className={className}>{text}</p>;
  }
}
