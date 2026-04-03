import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { ComponentContext } from '../types.js';

interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  binding?: string;
}

export function TextField(ctx: ComponentContext<TextFieldProps>): TemplateResult | typeof nothing {
  const { label = '', value = '', placeholder, disabled = false, required = false, binding } = ctx.props;

  const handleInput = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    if (binding) {
      ctx.state.set(binding, input.value);
    }
  };

  return html`
    <forge-text-field>
      <label slot="label">${label}</label>
      <input
        type="text"
        .value=${value}
        placeholder=${placeholder ?? ''}
        ?disabled=${disabled}
        ?required=${required}
        @input=${handleInput}
      />
    </forge-text-field>
  `;
}
