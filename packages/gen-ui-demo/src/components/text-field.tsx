import type { ReactElement } from 'react';
import { ForgeTextField } from '@tylertech/forge-react';
import { z } from 'zod';
import type { ComponentContext } from '../core';
import { useBoundProp } from '../lib/use-bound-prop';

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
}

export function TextField(ctx: ComponentContext<TextFieldProps>): ReactElement {
  const { label, placeholder, required } = ctx.props;
  const [value, setValue] = useBoundProp(ctx.props.value ?? '', ctx.bindings.value, ctx.state);

  return (
    <ForgeTextField>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={e => setValue(e.target.value)}
      />
      <label>{label}</label>
    </ForgeTextField>
  );
}

export const TextFieldSchema = z.object({
  label: z.string().describe('Field label'),
  value: z.any().describe('Value or $bindState expression for two-way binding'),
  placeholder: z.string().describe('Placeholder text').optional(),
  required: z.boolean().describe('Mark field as required').optional()
});
