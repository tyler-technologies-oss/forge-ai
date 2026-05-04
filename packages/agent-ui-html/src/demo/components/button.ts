import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';

interface ButtonProps {
  label?: string;
  variant?: 'raised' | 'outlined' | 'text' | 'flat' | 'tonal';
  disabled?: boolean;
}

export function Button(ctx: ComponentContext<ButtonProps>): TemplateResult {
  const { label = '', variant = 'raised', disabled = false } = ctx.props;

  return html`
    <forge-button variant=${variant} ?disabled=${disabled} @click=${() => ctx.emit('click')}> ${label} </forge-button>
  `;
}

export const ButtonSchema = z.object({
  label: z.string().min(1).describe('Button text (required)'),
  variant: z.enum(['raised', 'outlined', 'text', 'flat', 'tonal']).describe('Button style variant').optional(),
  disabled: z.boolean().describe('Disable button').optional()
});
