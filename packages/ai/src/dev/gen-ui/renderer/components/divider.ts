import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-divider')
export class ForgeA2uiDivider extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
    :host([data-vertical]) {
      display: inline-block;
    }
  `;

  protected override render(): TemplateResult {
    const vertical = this.resolveValue<boolean>(this.props.vertical) ?? false;

    if (vertical) {
      this.dataset.vertical = '';
    } else {
      delete this.dataset.vertical;
    }

    return html`<forge-divider ?vertical=${vertical}></forge-divider>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-divider': ForgeA2uiDivider;
  }
}
