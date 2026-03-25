import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-list-item')
export class ForgeA2uiListItem extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: contents;
    }
  `;

  protected override render(): TemplateResult {
    const text = this.resolveValue<string>(this.props.text) ?? '';
    const secondaryText = this.resolveValue<string>(this.props.secondaryText);
    const tertiaryText = this.resolveValue<string>(this.props.tertiaryText);
    const selected = this.resolveValue<boolean>(this.props.selected) ?? false;
    const value = this.resolveValue<string>(this.props.value);

    return html`
      <forge-list-item
        ?selected=${selected}
        value=${ifDefined(value)}
        @click=${this.#handleClick}
      >
        ${text}
        ${secondaryText ? html`<span slot="secondary-text">${secondaryText}</span>` : nothing}
        ${tertiaryText ? html`<span slot="tertiary-text">${tertiaryText}</span>` : nothing}
      </forge-list-item>
    `;
  }

  #handleClick(): void {
    this.dispatchA2uiAction(this.props.action ?? this.props.onClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-list-item': ForgeA2uiListItem;
  }
}
