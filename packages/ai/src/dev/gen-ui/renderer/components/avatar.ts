import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-avatar')
export class ForgeA2uiAvatar extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
  `;

  protected override render(): TemplateResult {
    const text = this.resolveValue<string>(this.props.text) ?? '';
    const imageUrl = this.resolveValue<string>(this.props.imageUrl);
    const letterCount = (this.props.letterCount as number) ?? 2;

    return html`
      <forge-avatar
        text=${text}
        letter-count=${letterCount}
        image-url=${ifDefined(imageUrl)}
      ></forge-avatar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-avatar': ForgeA2uiAvatar;
  }
}
