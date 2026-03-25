import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';
import { renderNode } from '../forge-a2ui-node.js';

@customElement('forge-a2ui-toolbar')
export class ForgeA2uiToolbar extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const children = this.props.children as string[] | undefined;
    const inverted = this.resolveValue<boolean>(this.props.inverted) ?? false;
    const noDivider = this.resolveValue<boolean>(this.props.noDivider) ?? false;

    return html`
      <forge-toolbar ?inverted=${inverted} ?no-divider=${noDivider}>
        ${this.#renderChildren(children)}
      </forge-toolbar>
    `;
  }

  #renderChildren(children: string[] | undefined): TemplateResult | typeof nothing {
    if (!children || children.length === 0 || !this.surface) {
      return nothing;
    }
    const dataPath = this.context?.dataContext.path ?? '/';
    return html`${children.map(id => renderNode(id, this.surface!, dataPath))}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-toolbar': ForgeA2uiToolbar;
  }
}
