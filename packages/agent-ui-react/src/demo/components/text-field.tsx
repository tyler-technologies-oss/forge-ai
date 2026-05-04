import type { ReactElement } from 'react';
import { ForgeTextField } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui';
import { useBoundProp } from '../../lib/use-bound-prop.js';

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
}

export function TextField(ctx: ComponentContext<TextFieldProps>): ReactElement {
  const { label, placeholder, required } = ctx.props;
  const [value, setValue] = useBoundProp(ctx.props.value ?? '', ctx.bindings.value, ctx.state);

  const showError = ctx.validation && !ctx.validation.valid && ctx.validation.touched;
  const errorMessage = showError ? ctx.validation?.errors[0] : undefined;

  return (
    <ForgeTextField invalid={showError}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={e => setValue(e.target.value)}
        onBlur={() => ctx.onBlur?.()}
      />
      <label>{label}</label>
      {errorMessage && <span slot="helper-text">{errorMessage}</span>}
    </ForgeTextField>
  );
}

export const TextFieldSchema = z.object({
  label: z.string().describe('Field label'),
  value: z.any().describe('Value or $bindState expression for two-way binding'),
  placeholder: z.string().describe('Placeholder text').optional(),
  required: z.boolean().describe('Mark field as required').optional()
});
