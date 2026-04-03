import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface ListItemProps {
  text?: string;
  secondaryText?: string;
  tertiaryText?: string;
  selected?: boolean;
  value?: string;
  action?: string;
}

export function ListItem(ctx: ComponentContext<ListItemProps>): TemplateResult | typeof nothing {
  const { text = '', secondaryText, tertiaryText, selected = false, value, action } = ctx.props;

  if (!text) {
    return nothing;
  }

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action, { value });
    }
  };

  return html`
    <forge-list-item
      ?selected=${selected}
      .value=${value ?? ''}
      @click=${handleClick}
    >
      ${text}
      ${secondaryText ? html`<span slot="secondary-text">${secondaryText}</span>` : nothing}
      ${tertiaryText ? html`<span slot="tertiary-text">${tertiaryText}</span>` : nothing}
    </forge-list-item>
  `;
}
