import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';

interface ValidationCheck {
  type: string;
  args?: Record<string, unknown>;
  message: string;
}

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  checks?: ValidationCheck[];
  validateOn?: 'change' | 'blur' | 'submit';
}

export function TextField(ctx: ComponentContext<TextFieldProps>): TemplateResult {
  const { label, placeholder, required } = ctx.props;
  const bindingPath = ctx.bindings.value as string | undefined;

  const getValue = (): string => {
    if (bindingPath) {
      return (ctx.state.get(bindingPath) as string) ?? '';
    }
    return ctx.props.value ?? '';
  };

  const setValue = (value: string): void => {
    if (bindingPath) {
      ctx.state.set(bindingPath, value);
    }
  };

  const currentValue = getValue();

  const showError = ctx.validation ? !ctx.validation.valid && ctx.validation.touched : false;
  const errorMessage = showError && ctx.validation ? ctx.validation.errors[0] : undefined;

  const handleInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    setValue(value);
  };

  const handleBlur = (): void => {
    ctx.onBlur?.();
  };

  return html`
    <forge-text-field ?invalid=${showError}>
      <input
        type="text"
        .value=${currentValue}
        placeholder=${placeholder ?? ''}
        ?required=${required}
        @input=${handleInput}
        @blur=${handleBlur} />
      <label>${label}</label>
      ${errorMessage ? html`<span slot="helper-text">${errorMessage}</span>` : nothing}
    </forge-text-field>
  `;
}

export const TextFieldSchema = z.object({
  label: z.string().describe('Field label'),
  value: z.any().describe('Value or $bindState expression for two-way binding'),
  placeholder: z.string().describe('Placeholder text').optional(),
  required: z.boolean().describe('Mark field as required').optional(),
  checks: z.array(z.object({
    type: z.string(),
    args: z.record(z.string(), z.unknown()).optional(),
    message: z.string()
  })).describe('Validation checks to run').optional(),
  validateOn: z.enum(['change', 'blur', 'submit']).describe('When to validate').optional()
});
