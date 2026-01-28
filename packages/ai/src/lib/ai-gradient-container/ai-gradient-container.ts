import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '../utils';

import styles from './ai-gradient-container.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-gradient-container': AiGradientContainerComponent;
  }
}

export type AiGradientContainerVariant = 'low' | 'medium' | 'high' | 'disabled';
export type AiGradientContainerAttention = 'subtle' | 'strong';

export const AiGradientContainerComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-gradient-container';

/**
 * @tag forge-ai-gradient-container
 *
 * @slot - Default slot for container content
 *
 * @state low - The container displays a low intensity gradient.
 * @state medium - The container displays a medium intensity gradient.
 * @state high - The container displays a high intensity gradient.
 * @state subtle - The container displays subtle attention styling.
 * @state strong - The container displays strong attention styling.
 */
@customElement(AiGradientContainerComponentTagName)
export class AiGradientContainerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Gradient intensity variant */
  @property({ type: String, attribute: 'variant' })
  public variant: AiGradientContainerVariant = 'medium';

  /** Attention level for visual emphasis */
  @property({ type: String, attribute: 'attention' })
  public attention: AiGradientContainerAttention = 'subtle';

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#setCssState();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('variant') || changedProperties.has('attention')) {
      this.#setCssState();
    }
  }

  #setCssState(): void {
    toggleState(this.#internals, 'low', this.variant === 'low');
    toggleState(this.#internals, 'medium', this.variant === 'medium');
    toggleState(this.#internals, 'high', this.variant === 'high');
    toggleState(this.#internals, 'disabled', this.variant === 'disabled');
    toggleState(this.#internals, 'subtle', this.attention === 'subtle');
    toggleState(this.#internals, 'strong', this.attention === 'strong');
  }

  public override render(): TemplateResult {
    return html` <div class="gradient-border">
      <slot></slot>
    </div>`;
  }
}
