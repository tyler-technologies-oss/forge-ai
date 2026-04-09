import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface AvatarProps {
  text?: string;
  imageUrl?: string;
  letterCount?: number;
}

export function Avatar(ctx: LitComponentContext<AvatarProps>): TemplateResult | typeof nothing {
  const { text, imageUrl, letterCount = 2 } = ctx.props;

  if (!text && !imageUrl) {
    return nothing;
  }

  return html`
    <forge-avatar
      text=${text ?? ''}
      image-url=${imageUrl ?? ''}
      letter-count=${letterCount}
    ></forge-avatar>
  `;
}
