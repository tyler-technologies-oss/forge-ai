import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface InlineMessageProps {
  title?: string;
  text?: string;
  theme?: 'info' | 'success' | 'warning' | 'error';
}

export function InlineMessage(ctx: LitComponentContext<InlineMessageProps>): TemplateResult | typeof nothing {
  const { title, text = '', theme = 'info' } = ctx.props;

  if (!text && !title) {
    return nothing;
  }

  return html`
    <forge-inline-message theme=${theme}>
      ${title ? html`<span slot="title">${title}</span>` : nothing}
      ${text}
    </forge-inline-message>
  `;
}
