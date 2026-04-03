import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface IconButtonProps {
  icon?: string;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';
  disabled?: boolean;
  action?: string;
}

export function IconButton(ctx: ComponentContext<IconButtonProps>): TemplateResult | typeof nothing {
  const { icon, variant = 'text', disabled = false, action } = ctx.props;

  if (!icon) {
    return nothing;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action);
    }
  };

  return html`
    <forge-icon-button
      variant=${variant}
      ?disabled=${disabled}
      @click=${handleClick}
    >
      <forge-icon name=${icon}></forge-icon>
    </forge-icon-button>
  `;
}
