import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface ButtonProps {
  label?: string;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';
  disabled?: boolean;
  action?: string;
}

export function Button(ctx: LitComponentContext<ButtonProps>): TemplateResult | typeof nothing {
  const { label = '', variant = 'raised', disabled = false, action } = ctx.props;

  if (!label) {
    return nothing;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action);
    }
  };

  return html`
    <forge-button
      variant=${variant}
      ?disabled=${disabled}
      @click=${handleClick}
    >
      ${label}
    </forge-button>
  `;
}
