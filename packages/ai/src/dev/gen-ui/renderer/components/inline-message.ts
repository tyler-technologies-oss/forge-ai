import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

type InlineMessageTheme = 'info' | 'success' | 'warning' | 'error';

@customElement('forge-a2ui-inline-message')
export class ForgeA2uiInlineMessage extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const title = this.resolveValue<string>(this.props.title);
    const text = this.resolveValue<string>(this.props.text) ?? '';
    const theme = (this.props.theme as InlineMessageTheme) ?? 'info';
    const icon = this.resolveValue<string>(this.props.icon);

    return html`
      <forge-inline-message theme=${theme}>
        ${icon ? html`<forge-icon slot="icon" name=${icon}></forge-icon>` : nothing}
        ${title ? html`<span slot="title">${title}</span>` : nothing}
        ${text}
      </forge-inline-message>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-inline-message': ForgeA2uiInlineMessage;
  }
}
