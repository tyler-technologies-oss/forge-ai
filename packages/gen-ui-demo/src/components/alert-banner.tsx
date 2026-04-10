import type { ReactElement } from 'react';
import { ForgeBanner, ForgeIcon } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface AlertBannerProps {
  message?: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
  icon?: string;
  action?: string;
}

const VARIANT_MAP: Record<string, { theme: string; defaultIcon: string }> = {
  info: { theme: 'info-secondary', defaultIcon: 'info' },
  warning: { theme: 'warning', defaultIcon: 'warning' },
  error: { theme: 'danger', defaultIcon: 'error' },
  success: { theme: 'success', defaultIcon: 'check_circle' }
};

export function AlertBanner(ctx: ComponentContext<AlertBannerProps>): ReactElement | null {
  const { message, variant = 'info', icon, action } = ctx.props;

  if (!message) {
    return null;
  }

  const config = VARIANT_MAP[variant] || VARIANT_MAP.info;
  const displayIcon = icon || config.defaultIcon;

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action, { variant });
    }
  };

  return (
    <ForgeBanner
      theme={config.theme as any}
      persistent
      className={`genui-alert-banner${action ? ' genui-alert-banner--clickable' : ''}`}
      onClick={action ? handleClick : undefined}>
      <ForgeIcon slot="icon" name={displayIcon} external />
      <span>{message}</span>
    </ForgeBanner>
  );
}

export const AlertBannerSchema = z.object({
  message: z.string().describe('Alert message text'),
  variant: z.enum(['info', 'warning', 'error', 'success']).describe('Alert type').optional(),
  icon: z.string().describe('Icon name override').optional(),
  action: z.string().describe('Action to trigger on click').optional()
});
