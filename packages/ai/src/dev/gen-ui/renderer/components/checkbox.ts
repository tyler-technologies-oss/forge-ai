import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-checkbox')
export class ForgeA2uiCheckbox extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  `;

  protected override render(): TemplateResult {
    const label = this.resolveValue<string>(this.props.label) ?? '';
    const checked = this.resolveValue<boolean>(this.props.checked) ?? false;
    const disabled = this.resolveValue<boolean>(this.props.disabled) ?? false;

    return html`
      <forge-checkbox
        ?checked=${checked}
        ?disabled=${disabled}
        @change=${this.#handleChange}
      >
        ${label}
      </forge-checkbox>
    `;
  }

  #handleChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const componentId = this.context?.componentModel.id;
    if (componentId && this.context) {
      this.context.dataContext.set(`/${componentId}/checked`, checkbox.checked);
    }
    this.dispatchA2uiAction(this.props.action);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-checkbox': ForgeA2uiCheckbox;
  }
}
