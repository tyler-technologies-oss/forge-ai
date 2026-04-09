import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface StackProps {
  inline?: boolean;
  gap?: string;
  alignment?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  wrap?: boolean;
  stretch?: boolean;
}

export function Stack(ctx: LitComponentContext<StackProps>): TemplateResult | typeof nothing {
  const {
    inline = false,
    gap = '16',
    alignment = 'start',
    justify = 'start',
    wrap = false,
    stretch = false
  } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return nothing;
  }

  return html`
    <forge-stack
      ?inline=${inline}
      gap=${gap}
      alignment=${alignment}
      justify=${justify}
      ?wrap=${wrap}
      ?stretch=${stretch}
    >
      ${ctx.children}
    </forge-stack>
  `;
}
