import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-text-field')
export class ForgeA2uiTextField extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const label = this.resolveValue<string>(this.props.label) ?? '';
    const value = this.resolveValue<string>(this.props.value) ?? '';
    const placeholder = this.resolveValue<string>(this.props.placeholder);
    const disabled = this.resolveValue<boolean>(this.props.disabled) ?? false;
    const required = this.resolveValue<boolean>(this.props.required) ?? false;

    return html`
      <forge-text-field>
        <label slot="label">${label}</label>
        <input
          type="text"
          .value=${value}
          placeholder=${ifDefined(placeholder)}
          ?disabled=${disabled}
          ?required=${required}
          @input=${this.#handleInput}
        />
      </forge-text-field>
    `;
  }

  #handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const componentId = this.context?.componentModel.id;
    if (componentId && this.context) {
      this.context.dataContext.set(`/${componentId}/value`, input.value);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-text-field': ForgeA2uiTextField;
  }
}
