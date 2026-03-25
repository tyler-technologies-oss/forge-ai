import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-icon')
export class ForgeA2uiIcon extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
    forge-icon {
      --forge-icon-font-size: 24px;
    }
    :host([data-size="small"]) forge-icon {
      --forge-icon-font-size: 18px;
    }
    :host([data-size="large"]) forge-icon {
      --forge-icon-font-size: 36px;
    }
  `;

  protected override render(): TemplateResult {
    const name = this.resolveValue<string>(this.props.name) ?? '';
    const size = (this.props.size as string) ?? 'medium';

    this.dataset.size = size;

    return html`<forge-icon name=${name}></forge-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-icon': ForgeA2uiIcon;
  }
}
