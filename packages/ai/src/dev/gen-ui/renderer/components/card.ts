import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';
import { renderNode } from '../forge-a2ui-node.js';

@customElement('forge-a2ui-card')
export class ForgeA2uiCard extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: contents;
    }
  `;

  protected override render(): TemplateResult {
    const children = this.props.children as string[] | undefined;
    const raised = this.resolveValue<boolean>(this.props.raised) ?? false;

    return html`
      <forge-card ?raised=${raised}>
        ${this.#renderChildren(children)}
      </forge-card>
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
    'forge-a2ui-card': ForgeA2uiCard;
  }
}
