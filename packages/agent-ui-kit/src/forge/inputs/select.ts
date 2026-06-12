import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

interface SelectOption {
  label: string;
  value: string;
}

interface ForgeSelectProps {
  label?: string;
  value?: string;
  valueBinding?: string;
  options?: SelectOption[];
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

export function ForgeSelect(ctx: ComponentContext<ForgeSelectProps>): TemplateResult {
  const { label, options = [], disabled = false, required = false, placeholder = '' } = ctx.props;

  const valueBinding = ctx.bindings.valueBinding as string | undefined;

  const getValue = (): string => {
    if (valueBinding) {
      return (ctx.state.get(valueBinding) as string) ?? '';
    }
    return ctx.props.value ?? '';
  };

  const handleChange = (e: Event): void => {
    const selectValue = (e.target as HTMLSelectElement).value;
    if (valueBinding) {
      ctx.state.set(valueBinding, selectValue);
    }
    ctx.emit('change', { value: selectValue });
  };

  const value = getValue();

  return html`
    <forge-select
      .label=${label}
      .value=${live(value)}
      ?disabled=${disabled}
      ?required=${required}
      .placeholder=${placeholder}
      @change=${handleChange}>
      ${options.map(option => html`<forge-option value=${option.value}>${option.label}</forge-option>`)}
    </forge-select>
  `;
}

export const ForgeSelectSchema = z.object({
  label: z.string().describe('Select label').optional(),
  value: z.string().describe('Selected value').optional(),
  valueBinding: z.string().describe('State path for two-way binding').optional(),
  options: z
    .array(
      z.object({
        label: z.string().describe('Option display text'),
        value: z.string().describe('Option value')
      })
    )
    .describe('Array of select options with label and value')
    .optional(),
  disabled: z.boolean().describe('Disable select').optional()
});
