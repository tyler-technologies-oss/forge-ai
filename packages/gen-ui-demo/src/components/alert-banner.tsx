import type { ReactElement } from 'react';
import { ForgeBanner, ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

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

export function AlertBanner(ctx: ComponentContext): ReactElement | null {
  const { message, variant = 'info', icon } = ctx.props as AlertBannerProps;

  if (!message) {
    return null;
  }

  const config = VARIANT_MAP[variant] || VARIANT_MAP.info;
  const displayIcon = icon || config.defaultIcon;

  return (
    <ForgeBanner theme={config.theme as any} persistent className="genui-alert-banner">
      <ForgeIcon slot="icon" name={displayIcon} />
      <span>{message}</span>
    </ForgeBanner>
  );
}

export const AlertBannerSchema = z.object({
  message: z.string().describe('Alert message text'),
  variant: z.enum(['info', 'warning', 'error', 'success']).describe('Alert type').optional(),
  icon: z.string().describe('Icon name override').optional()
});
