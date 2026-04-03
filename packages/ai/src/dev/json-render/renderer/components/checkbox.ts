import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface CheckBoxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  action?: string;
  binding?: string;
}

export function CheckBox(ctx: ComponentContext<CheckBoxProps>): TemplateResult | typeof nothing {
  const { label = '', checked = false, disabled = false, action, binding } = ctx.props;

  const handleChange = (event: Event): void => {
    const checkbox = event.target as HTMLInputElement;
    if (binding) {
      ctx.state.set(binding, checkbox.checked);
    }
    if (action) {
      ctx.emit(action, { checked: checkbox.checked });
    }
  };

  return html`
    <forge-checkbox ?disabled=${disabled}>
      <input
        type="checkbox"
        .checked=${checked}
        @change=${handleChange}
      />
      <label slot="label">${label}</label>
    </forge-checkbox>
  `;
}
