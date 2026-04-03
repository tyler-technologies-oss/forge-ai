import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface BadgeProps {
  text?: string;
  theme?: 'default' | 'info' | 'info-secondary' | 'success' | 'warning' | 'error' | 'danger';
  dot?: boolean;
  strong?: boolean;
}

export function Badge(ctx: ComponentContext<BadgeProps>): TemplateResult | typeof nothing {
  const { text, theme = 'default', dot = false, strong = false } = ctx.props;

  if (!text && !dot) {
    return nothing;
  }

  return html`
    <forge-badge
      theme=${theme}
      ?dot=${dot}
      ?strong=${strong}
    >
      ${text ?? ''}
    </forge-badge>
  `;
}
