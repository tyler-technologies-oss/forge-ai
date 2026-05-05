import type { ReactElement } from 'react';
import { ForgeTextField } from '@tylertech/forge-react';
import { z } from 'zod';
import { useBoundProp, useFieldValidation, type BaseComponentProps } from '@tylertech/agent-ui-react';

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

export function TextField({ props, bindings }: BaseComponentProps<TextFieldProps>): ReactElement {
  const { label, placeholder, required, checks, validateOn } = props;
  const [value, setValue] = useBoundProp(props.value ?? '', bindings?.value);

  const fieldPath = bindings?.value ?? '';
  const validationConfig = checks && checks.length > 0 ? { checks, validateOn } : undefined;

  const validation = useFieldValidation(fieldPath, validationConfig);

  const showError = !validation.isValid && validation.state.touched;
  const errorMessage = showError ? validation.errors[0] : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    if (validation.state.touched) {
      validation.validate();
    }
  };

  const handleBlur = (): void => {
    validation.touch();
    validation.validate();
  };

  return (
    <ForgeTextField invalid={showError}>
      <input
        type="text"
        value={value ?? ''}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}
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
  required: z.boolean().describe('Mark field as required').optional(),
  checks: z.array(z.object({
    type: z.string(),
    args: z.record(z.string(), z.unknown()).optional(),
    message: z.string()
  })).describe('Validation checks to run').optional(),
  validateOn: z.enum(['change', 'blur', 'submit']).describe('When to validate').optional()
});
