import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';
import { renderNode } from '../forge-a2ui-node.js';

@customElement('forge-a2ui-list')
export class ForgeA2uiList extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const children = this.props.children as string[] | undefined;
    const dense = this.resolveValue<boolean>(this.props.dense) ?? false;
    const twoLine = this.resolveValue<boolean>(this.props.twoLine) ?? false;
    const threeLine = this.resolveValue<boolean>(this.props.threeLine) ?? false;

    return html`
      <forge-list ?dense=${dense} ?two-line=${twoLine} ?three-line=${threeLine}>
        ${this.#renderChildren(children)}
      </forge-list>
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
    'forge-a2ui-list': ForgeA2uiList;
  }
}
