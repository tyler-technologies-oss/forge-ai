import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

import styles from './alert-banner.scss?inline';

interface AlertBannerProps {
  message?: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
  icon?: string;
}

const VARIANT_MAP: Record<string, { theme: string; defaultIcon: string }> = {
  info: { theme: 'info-secondary', defaultIcon: 'info' },
  warning: { theme: 'warning', defaultIcon: 'warning' },
  error: { theme: 'danger', defaultIcon: 'error' },
  success: { theme: 'success', defaultIcon: 'check_circle' }
};

@customElement('agentui-alert-banner')
export class AgentUIAlertBannerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public message: string = '';
  @property({ type: String }) public variant: 'info' | 'warning' | 'error' | 'success' = 'info';
  @property({ type: String }) public icon?: string;

  protected override render(): TemplateResult | typeof nothing {
    if (!this.message) {
      return nothing;
    }

    const config = VARIANT_MAP[this.variant] || VARIANT_MAP.info;
    const displayIcon = this.icon || config.defaultIcon;

    return html`
      <forge-banner theme=${config.theme} persistent>
        <forge-icon slot="icon" name=${displayIcon} external></forge-icon>
        <span>${this.message}</span>
      </forge-banner>
    `;
  }
}

export function AlertBanner(ctx: ComponentContext<AlertBannerProps>): TemplateResult | typeof nothing {
  const { message, variant = 'info', icon } = ctx.props;

  if (!message) {
    return nothing;
  }

  return html`
    <agentui-alert-banner
      .message=${message}
      .variant=${variant}
      .icon=${icon}
      @click=${() => ctx.emit('click', { variant })}>
    </agentui-alert-banner>
  `;
}

export const AlertBannerSchema = z.object({
  message: z.string().describe('Alert message text'),
  variant: z.enum(['info', 'warning', 'error', 'success']).describe('Alert type').optional(),
  icon: z.string().describe('Icon name override').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-alert-banner': AgentUIAlertBannerComponent;
  }
}
