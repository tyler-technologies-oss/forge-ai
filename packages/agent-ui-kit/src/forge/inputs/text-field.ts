import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

interface ForgeTextFieldProps {
  id?: string;
  label?: string;
  value?: string;
  valueBinding?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  disabled?: boolean;
}

export function ForgeTextField(ctx: ComponentContext<ForgeTextFieldProps>): TemplateResult {
  const { label, placeholder, type = 'text', required = false, disabled = false } = ctx.props;
  let id = ctx.props.id;

  if (!id) {
    id = `forge-text-field-${Math.random().toString(36).substring(2, 9)}`;
  }

  const valueBinding = ctx.bindings.valueBinding as string | undefined;

  const getValue = (): string => {
    if (valueBinding) {
      return (ctx.state.get(valueBinding) as string) ?? '';
    }
    return ctx.props.value ?? '';
  };

  const handleInput = (e: Event): void => {
    const inputValue = (e.target as HTMLInputElement).value;
    if (valueBinding) {
      ctx.state.set(valueBinding, inputValue);
    }
    ctx.emit('input', { value: inputValue });
  };

  const handleChange = (e: Event): void => {
    const inputValue = (e.target as HTMLInputElement).value;
    if (valueBinding) {
      ctx.state.set(valueBinding, inputValue);
    }
    ctx.emit('change', { value: inputValue });
  };

  const value = getValue();

  return html`
    <forge-text-field>
      ${label ? html`<label for=${ifDefined(label ? `${id}-input` : undefined)}>${label}</label>` : ''}
      <input
        id=${ifDefined(label ? `${id}-input` : undefined)}
        type=${type}
        .value=${live(value)}
        placeholder=${ifDefined(placeholder)}
        ?required=${required}
        ?disabled=${disabled}
        @input=${handleInput}
        @change=${handleChange} />
    </forge-text-field>
  `;
}

export const ForgeTextFieldSchema = z.object({
  label: z.string().describe('Field label').optional(),
  value: z.string().describe('Field value').optional(),
  valueBinding: z.string().describe('State path for two-way binding').optional(),
  placeholder: z.string().describe('Placeholder text').optional(),
  type: z
    .enum(['text', 'email', 'password', 'number', 'tel', 'url'])
    .describe('Input type (text, email, password, number, tel, url)')
    .optional(),
  required: z.boolean().describe('Mark field as required').optional(),
  disabled: z.boolean().describe('Disable field').optional()
});
