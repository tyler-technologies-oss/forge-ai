import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface ListProps {
  dense?: boolean;
  twoLine?: boolean;
  threeLine?: boolean;
}

export function List(ctx: ComponentContext<ListProps>): TemplateResult | typeof nothing {
  const { dense = false, twoLine = false, threeLine = false } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return nothing;
  }

  return html`
    <forge-list
      ?dense=${dense}
      ?two-line=${twoLine}
      ?three-line=${threeLine}
    >
      ${ctx.children}
    </forge-list>
  `;
}
