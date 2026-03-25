import { html, css, type TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';
import { renderNode } from '../forge-a2ui-node.js';

type StackAlignment = 'start' | 'center' | 'end';
type StackJustify = 'start' | 'center' | 'end' | 'space-between';

@customElement('forge-a2ui-stack')
export class ForgeA2uiStack extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const children = this.props.children as string[] | undefined;
    const inline = this.resolveValue<boolean>(this.props.inline) ?? false;
    const gap = this.resolveValue<string>(this.props.gap) ?? '16';
    const alignment = (this.props.alignment as StackAlignment) ?? 'start';
    const justify = (this.props.justify as StackJustify) ?? 'start';
    const wrap = this.resolveValue<boolean>(this.props.wrap) ?? false;
    const stretch = this.resolveValue<boolean>(this.props.stretch) ?? false;

    return html`
      <forge-stack
        ?inline=${inline}
        gap=${gap}
        alignment=${alignment}
        justify=${justify}
        ?wrap=${wrap}
        ?stretch=${stretch}
      >
        ${this.#renderChildren(children)}
      </forge-stack>
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
    'forge-a2ui-stack': ForgeA2uiStack;
  }
}
