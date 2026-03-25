import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

type IconButtonVariant = 'text' | 'outlined' | 'tonal' | 'filled' | 'raised';
type IconButtonShape = 'circular' | 'squared';
type IconButtonDensity = 'small' | 'medium' | 'large';

@customElement('forge-a2ui-icon-button')
export class ForgeA2uiIconButton extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
  `;

  protected override render(): TemplateResult {
    const icon = this.resolveValue<string>(this.props.icon) ?? '';
    const disabled = this.resolveValue<boolean>(this.props.disabled) ?? false;
    const variant = (this.props.variant as IconButtonVariant) ?? 'text';
    const shape = (this.props.shape as IconButtonShape) ?? 'circular';
    const density = (this.props.density as IconButtonDensity) ?? 'large';
    const toggle = this.resolveValue<boolean>(this.props.toggle) ?? false;
    const pressed = this.resolveValue<boolean>(this.props.pressed) ?? false;

    return html`
      <forge-icon-button
        variant=${variant}
        shape=${shape}
        density=${density}
        ?disabled=${disabled}
        ?toggle=${toggle}
        ?pressed=${pressed}
        @click=${this.#handleClick}
      >
        <forge-icon name=${icon}></forge-icon>
      </forge-icon-button>
    `;
  }

  #handleClick(): void {
    this.dispatchA2uiAction(this.props.action ?? this.props.onClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-icon-button': ForgeA2uiIconButton;
  }
}
