import { LitElement, html, unsafeCSS, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '@tylertech/forge-ai/ai-fab';

import styles from './foundry-fab.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'foundry-fab': FoundryFabComponent;
  }
}

const FoundryFabComponentTagName: keyof HTMLElementTagNameMap = 'foundry-fab';

/**
 * @tag foundry-fab
 */
@customElement(FoundryFabComponentTagName)
export class FoundryFabComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property()
  public text?: string;

  @property({ type: Boolean })
  public hidden = false;

  @property()
  public target?: string;

  #targetElement?: HTMLElement & { toggle?: () => void };
  #boundOpenHandler = this.#handleTargetOpen.bind(this);
  #boundCloseHandler = this.#handleTargetClose.bind(this);

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupAutoWiring();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupAutoWiring();
  }

  public override willUpdate(changed: PropertyValues): void {
    if (changed.has('target')) {
      this.#cleanupAutoWiring();
      this.#setupAutoWiring();
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-fab ?hidden=${this.hidden} ?extended=${Boolean(this.text)} @click=${this.#handleClick}>
        ${when(this.text, () => html`<span>${this.text}</span>`)}
      </forge-ai-fab>
    `;
  }

  #setupAutoWiring(): void {
    if (!this.target) {
      return;
    }

    const rootElement = this.getRootNode() as Document | ShadowRoot;
    const element = rootElement.querySelector(this.target) as HTMLElement & { toggle?: () => void };
    if (!element) {
      console.warn(`[FoundryFab] Target element not found: ${this.target}`);
      return;
    }

    if (typeof element.toggle !== 'function') {
      console.warn(`[FoundryFab] Target element does not have a toggle() method: ${this.target}`);
      return;
    }

    this.#targetElement = element;

    element.addEventListener('foundry-floating-chatbot-open', this.#boundOpenHandler);
    element.addEventListener('foundry-floating-chatbot-close', this.#boundCloseHandler);
  }

  #cleanupAutoWiring(): void {
    if (this.#targetElement) {
      this.#targetElement.removeEventListener('foundry-floating-chatbot-open', this.#boundOpenHandler);
      this.#targetElement.removeEventListener('foundry-floating-chatbot-close', this.#boundCloseHandler);
      this.#targetElement = undefined;
    }
  }

  #handleClick(): void {
    if (this.#targetElement && typeof this.#targetElement.toggle === 'function') {
      this.#targetElement.toggle();
    }
  }

  #handleTargetOpen(): void {
    this.hidden = true;
  }

  #handleTargetClose(): void {
    this.hidden = false;
  }
}
