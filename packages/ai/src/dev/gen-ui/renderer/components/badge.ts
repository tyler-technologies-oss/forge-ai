import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

type BadgeTheme = 'default' | 'info' | 'info-secondary' | 'success' | 'warning' | 'error' | 'danger';

@customElement('forge-a2ui-badge')
export class ForgeA2uiBadge extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
  `;

  protected override render(): TemplateResult {
    const text = this.resolveValue<string>(this.props.text) ?? '';
    const theme = (this.props.theme as BadgeTheme) ?? 'default';
    const dot = this.resolveValue<boolean>(this.props.dot) ?? false;
    const strong = this.resolveValue<boolean>(this.props.strong) ?? false;

    return html`
      <forge-badge
        theme=${theme}
        ?dot=${dot}
        ?strong=${strong}
      >${text}</forge-badge>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-badge': ForgeA2uiBadge;
  }
}
