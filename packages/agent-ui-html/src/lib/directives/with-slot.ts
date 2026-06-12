import { Directive, PartInfo, PartType, directive } from 'lit/directive.js';
import type { ChildPart, TemplateResult } from 'lit';

class WithSlotDirective extends Directive {
  #slotName?: string;
  #part?: ChildPart;

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error('withSlot directive must be used in a child position');
    }
  }

  render(child: TemplateResult, slotName?: string): TemplateResult {
    this.#slotName = slotName;
    return child;
  }

  update(part: ChildPart, [child, slotName]: Parameters<this['render']>): TemplateResult {
    this.#part = part;
    this.#slotName = slotName;

    if (slotName && slotName !== 'default') {
      requestAnimationFrame(() => {
        this.#applySlotAttribute();
      });
    }

    return this.render(child, slotName);
  }

  #applySlotAttribute(): void {
    if (!this.#part || !this.#slotName || this.#slotName === 'default') {
      return;
    }

    const element = this.#findFirstElement(this.#part.startNode);
    if (element instanceof Element) {
      element.setAttribute('slot', this.#slotName);
    }
  }

  #findFirstElement(node: Node | null): Node | null {
    let current = node;
    while (current) {
      if (current.nodeType === Node.ELEMENT_NODE) {
        return current;
      }
      current = current.nextSibling;
    }
    return null;
  }
}

export const withSlot = directive(WithSlotDirective);
