import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface IconProps {
  name?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Icon(ctx: LitComponentContext<IconProps>): TemplateResult | typeof nothing {
  const { name, size } = ctx.props;

  if (!name) {
    return nothing;
  }

  const sizeClass = size === 'small' ? 'forge-icon--small' : size === 'large' ? 'forge-icon--large' : '';

  return html`<forge-icon name=${name} class=${sizeClass}></forge-icon>`;
}
