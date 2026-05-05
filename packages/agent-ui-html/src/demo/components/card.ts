import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import type { LitResult } from '../types.js';

import styles from './card.scss?inline';

interface CardProps {
  padded?: boolean;
}

@customElement('agentui-card')
export class AgentUICardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) public padded = true;

  protected override render(): TemplateResult {
    return html` <forge-card><slot></slot></forge-card> `;
  }
}

export function Card(ctx: ComponentContext<CardProps, LitResult[]>): TemplateResult {
  const { padded = true } = ctx.props;

  return html` <agentui-card .padded=${padded}>${ctx.children}</agentui-card> `;
}

export const CardSchema = z.object({
  padded: z.boolean().describe('Add padding inside card (default true)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-card': AgentUICardComponent;
  }
}
