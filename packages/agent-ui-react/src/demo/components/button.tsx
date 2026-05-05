import type { ReactElement } from 'react';
import { ForgeButton } from '@tylertech/forge-react';
import { z } from 'zod';
import type { BaseComponentProps } from '@tylertech/agent-ui-react';

interface ButtonProps {
  label?: string;
  variant?: 'raised' | 'outlined' | 'text' | 'flat' | 'tonal';
  disabled?: boolean;
}

export function Button({ props, emit }: BaseComponentProps<ButtonProps>): ReactElement {
  const { label = '', variant = 'raised', disabled = false } = props;

  return (
    <ForgeButton variant={variant} disabled={disabled} onClick={() => emit('click')}>
      {label}
    </ForgeButton>
  );
}

export const ButtonSchema = z.object({
  label: z.string().min(1).describe('Button text (required)'),
  variant: z.enum(['raised', 'outlined', 'text', 'flat', 'tonal']).describe('Button style variant').optional(),
  disabled: z.boolean().describe('Disable button').optional()
});
