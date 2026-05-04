import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
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

  const showError = ctx.validation && !ctx.validation.valid && ctx.validation.touched;
  const errorMessage = showError ? ctx.validation?.errors[0] : undefined;

  const handleInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    setValue(value);
  };

  return html`
    <forge-text-field ?invalid=${showError}>
      <input
        type="text"
        .value=${getValue()}
        placeholder=${placeholder ?? ''}
        ?required=${required}
        @input=${handleInput}
        @blur=${() => ctx.onBlur?.()} />
      <label>${label}</label>
      ${errorMessage ? html`<span slot="helper-text">${errorMessage}</span>` : nothing}
    </forge-text-field>
  `;
}

export const TextFieldSchema = z.object({
  label: z.string().describe('Field label'),
  value: z.any().describe('Value or $bindState expression for two-way binding'),
  placeholder: z.string().describe('Placeholder text').optional(),
  required: z.boolean().describe('Mark field as required').optional()
});
