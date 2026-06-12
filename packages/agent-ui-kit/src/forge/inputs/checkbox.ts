import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { live } from 'lit/directives/live.js';

interface ForgeCheckboxProps {
  label?: string;
  checked?: boolean;
  checkedBinding?: string;
  disabled?: boolean;
}

export function ForgeCheckbox(ctx: ComponentContext<ForgeCheckboxProps>): TemplateResult {
  const { label, disabled = false } = ctx.props;

  const checkedBinding = ctx.bindings.checkedBinding as string | undefined;

  const getChecked = (): boolean => {
    if (checkedBinding) {
      return (ctx.state.get(checkedBinding) as boolean) ?? false;
    }
    return ctx.props.checked ?? false;
  };

  const handleChange = (e: Event): void => {
    const isChecked = (e.target as HTMLInputElement).checked;
    if (checkedBinding) {
      ctx.state.set(checkedBinding, isChecked);
    }
    ctx.emit('change', { checked: isChecked });
  };

  const checked = getChecked();

  return html`
    <forge-checkbox .defaultChecked=${live(checked)} ?disabled=${disabled} @change=${handleChange}
      >${label}</forge-checkbox
    >
  `;
}

export const ForgeCheckboxSchema = z.object({
  label: z.string().describe('Checkbox label').optional(),
  checked: z.boolean().describe('Checked state').optional(),
  checkedBinding: z.string().describe('State path for two-way binding').optional(),
  disabled: z.boolean().describe('Disable checkbox').optional()
});
