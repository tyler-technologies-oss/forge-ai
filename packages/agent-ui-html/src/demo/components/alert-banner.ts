import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';

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

export function AlertBanner(ctx: ComponentContext<AlertBannerProps>): TemplateResult | typeof nothing {
  const { message, variant = 'info', icon } = ctx.props;

  if (!message) {
    return nothing;
  }

  const config = VARIANT_MAP[variant] || VARIANT_MAP.info;
  const displayIcon = icon || config.defaultIcon;

  return html`
    <forge-banner theme=${config.theme} persistent class="agentui-alert-banner" @click=${() => ctx.emit('click', { variant })}>
      <forge-icon slot="icon" name=${displayIcon} external></forge-icon>
      <span>${message}</span>
    </forge-banner>
  `;
}

export const AlertBannerSchema = z.object({
  message: z.string().describe('Alert message text'),
  variant: z.enum(['info', 'warning', 'error', 'success']).describe('Alert type').optional(),
  icon: z.string().describe('Icon name override').optional()
});
