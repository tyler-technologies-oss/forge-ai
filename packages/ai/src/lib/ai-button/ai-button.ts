import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '../utils';
import '../ai-icon';
import '../ai-gradient-container/ai-gradient-container';
import { AiGradientContainerAttention } from '../ai-gradient-container';

import styles from './ai-button.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-button': AiButtonComponent;
  }
}

export const AiButtonComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-button';

/**
 * @tag forge-ai-button
 *
 * @slot - Default slot for button content
 */
@customElement(AiButtonComponentTagName)
export class AiButtonComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  /** Attention level for the gradient container */
  @property({ type: String, attribute: 'attention' })
  public attention: AiGradientContainerAttention = 'subtle';

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#setCssState();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('disabled')) {
      this.#setCssState();
    }
  }

  #setCssState(): void {
    toggleState(this.#internals, 'disabled', this.disabled);
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-gradient-container variant=${this.disabled ? 'disabled' : 'high'} attention=${this.attention}>
        <button class="forge-button forge-button--outlined ai-button" .disabled=${this.disabled} variant="outlined">
          <forge-ai-icon></forge-ai-icon>
          <slot></slot>
          <slot name="end"></slot>
        </button>
      </forge-ai-gradient-container>
    `;
  }
}
