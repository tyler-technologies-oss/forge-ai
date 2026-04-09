import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface TextProps {
  text?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'body';
}

export function Text(ctx: LitComponentContext<TextProps>): TemplateResult | typeof nothing {
  const { text = '', variant = 'body' } = ctx.props;

  if (!text) {
    return nothing;
  }

  const tagMap: Record<string, string> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    caption: 'span',
    body: 'p'
  };

  const classMap: Record<string, string> = {
    h1: 'forge-typography--headline1',
    h2: 'forge-typography--headline2',
    h3: 'forge-typography--headline3',
    h4: 'forge-typography--headline4',
    h5: 'forge-typography--headline5',
    caption: 'forge-typography--caption',
    body: 'forge-typography--body1'
  };

  const tag = tagMap[variant] || 'p';
  const className = classMap[variant] || 'forge-typography--body1';

  switch (tag) {
    case 'h1':
      return html`<h1 class=${className}>${text}</h1>`;
    case 'h2':
      return html`<h2 class=${className}>${text}</h2>`;
    case 'h3':
      return html`<h3 class=${className}>${text}</h3>`;
    case 'h4':
      return html`<h4 class=${className}>${text}</h4>`;
    case 'h5':
      return html`<h5 class=${className}>${text}</h5>`;
    case 'span':
      return html`<span class=${className}>${text}</span>`;
    default:
      return html`<p class=${className}>${text}</p>`;
  }
}
