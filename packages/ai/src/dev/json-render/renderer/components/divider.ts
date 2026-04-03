import { html } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface DividerProps {
  vertical?: boolean;
}

export function Divider(ctx: ComponentContext<DividerProps>): TemplateResult {
  const { vertical = false } = ctx.props;

  return html`<forge-divider ?vertical=${vertical}></forge-divider>`;
}
