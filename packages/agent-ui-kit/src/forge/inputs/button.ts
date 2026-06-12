import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';

interface ForgeButtonProps {
  label?: string;
  variant?: 'raised' | 'outlined' | 'text' | 'flat' | 'tonal';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function ForgeButton(ctx: ComponentContext<ForgeButtonProps>): TemplateResult {
  const { label = '', variant = 'raised', disabled = false, type = 'button' } = ctx.props;

  return html`
    <forge-button variant=${variant} ?disabled=${disabled} type=${type} @click=${() => ctx.emit('click')}
      >${label}</forge-button
    >
  `;
}

export const ForgeButtonSchema = z.object({
  label: z.string().min(1).describe('Button text (required)'),
  variant: z
    .enum(['raised', 'outlined', 'text', 'flat', 'tonal'])
    .describe('Button style variant (raised, outlined, text, flat, tonal)')
    .optional(),
  disabled: z.boolean().describe('Disable button').optional(),
  type: z.enum(['button', 'submit', 'reset']).describe('Button type (button, submit, reset)').optional()
});
