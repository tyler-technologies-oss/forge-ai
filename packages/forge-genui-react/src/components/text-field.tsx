import type { ReactElement, ChangeEvent } from 'react';
import { ForgeTextField } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  binding?: string;
}

export function TextField(ctx: ReactComponentContext<TextFieldProps>): ReactElement | null {
  const { label = '', value = '', placeholder, disabled = false, required = false, binding } = ctx.props;

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    if (binding) {
      ctx.state.set(binding, event.target.value);
    }
  };

  return (
    <ForgeTextField>
      <label slot="label">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder ?? ''}
        disabled={disabled}
        required={required}
        onChange={handleInput}
      />
    </ForgeTextField>
  );
}
