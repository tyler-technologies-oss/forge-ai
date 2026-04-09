import type { ReactElement, ChangeEvent } from 'react';
import { ForgeCheckbox } from '@tylertech/forge-react';
import type { ReactComponentContext } from '../types.js';

interface CheckBoxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  action?: string;
  binding?: string;
}

export function CheckBox(ctx: ReactComponentContext<CheckBoxProps>): ReactElement | null {
  const { label = '', checked = false, disabled = false, action, binding } = ctx.props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    if (binding) {
      ctx.state.set(binding, isChecked);
    }
    if (action) {
      ctx.emit(action, { checked: isChecked });
    }
  };

  return (
    <ForgeCheckbox disabled={disabled}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label slot="label">{label}</label>
    </ForgeCheckbox>
  );
}
