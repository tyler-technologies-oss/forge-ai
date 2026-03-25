import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

type ButtonVariant = 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';

@customElement('forge-a2ui-button')
export class ForgeA2uiButton extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-block;
    }
  `;

  protected override render(): TemplateResult {
    const label = this.resolveValue<string>(this.props.label) ?? '';
    const variant = (this.props.variant as ButtonVariant) ?? 'raised';
    const disabled = this.resolveValue<boolean>(this.props.disabled) ?? false;

    return html`
      <forge-button
        variant=${variant}
        ?disabled=${disabled}
        @click=${this.#handleClick}
      >
        ${label}
      </forge-button>
    `;
  }

  #handleClick(): void {
    this.dispatchA2uiAction(this.props.action ?? this.props.onClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-button': ForgeA2uiButton;
  }
}
