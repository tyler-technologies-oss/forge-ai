import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface ToolbarProps {
  inverted?: boolean;
  noDivider?: boolean;
}

export function Toolbar(ctx: ComponentContext<ToolbarProps>): TemplateResult | typeof nothing {
  const { inverted = false, noDivider = false } = ctx.props;

  if (!ctx.children || ctx.children.length === 0) {
    return nothing;
  }

  return html`
    <forge-toolbar
      ?inverted=${inverted}
      ?no-divider=${noDivider}
    >
      ${ctx.children}
    </forge-toolbar>
  `;
}
