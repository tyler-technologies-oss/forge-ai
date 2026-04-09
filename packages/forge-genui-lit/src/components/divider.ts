import { html } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext } from '../types.js';

interface DividerProps {
  vertical?: boolean;
}

export function Divider(ctx: LitComponentContext<DividerProps>): TemplateResult {
  const { vertical = false } = ctx.props;

  return html`<forge-divider ?vertical=${vertical}></forge-divider>`;
}
