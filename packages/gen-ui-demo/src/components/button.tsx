import type { ReactElement } from 'react';
import { ForgeButton } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface ButtonProps {
  label?: string;
  variant?: 'raised' | 'outlined' | 'text' | 'flat' | 'tonal';
  disabled?: boolean;
  action?: string;
}

export function Button(ctx: ComponentContext<ButtonProps>): ReactElement {
  const { label = '', variant = 'raised', disabled = false, action } = ctx.props;

  const handleClick = (): void => {
    if (action) {
      ctx.emit(action);
    }
  };

  return (
    <ForgeButton variant={variant} disabled={disabled} onClick={handleClick}>
      {label}
    </ForgeButton>
  );
}

export const ButtonSchema = z.object({
  label: z.string().min(1).describe('Button text (required)'),
  variant: z.enum(['raised', 'outlined', 'text', 'flat', 'tonal']).describe('Button style variant').optional(),
  disabled: z.boolean().describe('Disable button').optional(),
  action: z.string().describe('Action to trigger on click').optional()
});
