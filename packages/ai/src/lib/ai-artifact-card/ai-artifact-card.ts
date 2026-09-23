import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './ai-artifact-card.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-artifact-card': AiArtifactCardComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-artifact-card-open': CustomEvent<ForgeAiArtifactCardOpenEventData>;
  }
}

export interface ForgeAiArtifactCardOpenEventData {
  assetId: string;
}

export const AiArtifactCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-artifact-card';

/**
 * @tag forge-ai-artifact-card
 *
 * @summary A compact, clickable card representing an artifact an agent produced.
 *
 * @description
 * Displays a leading icon, two lines of truncating text, and a trailing arrow inside a single
 * button that covers the whole card. Activating it emits an event; the consumer decides what
 * opens. Placed in a `forge-ai-artifact-card-group`, it renders as a row of that list. The component is presentational — it holds no knowledge of
 * what the artifact is or where it lives.
 *
 * @slot icon - The leading icon, shown inside a bordered tile. Consumers supply their own.
 *
 * @event {CustomEvent<ForgeAiArtifactCardOpenEventData>} forge-ai-artifact-card-open - Fired
 * when the card is activated by click, Enter, or Space. Not fired while disabled.
 *
 * @cssproperty --forge-ai-artifact-card-accent-color - Color of the active border and ring, and the focus outline
 * @cssproperty --forge-ai-artifact-card-background - Background color of the card
 * @cssproperty --forge-ai-artifact-card-border-radius - Corner radius of the card
 * @cssproperty --forge-ai-artifact-card-padding - Padding inside the card
 * @cssproperty --forge-ai-artifact-card-gap - Gap between the icon and the text
 */
@customElement(AiArtifactCardComponentTagName)
export class AiArtifactCardComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The primary line of text. Truncates to a single line.
   */
  @property({ attribute: 'title-text' })
  public titleText = '';

  /**
   * The secondary line of text. Truncates to a single line.
   */
  @property({ attribute: 'subtitle-text' })
  public subtitleText = '';

  /**
   * An opaque identifier echoed back in the open event detail. The component never
   * interprets it.
   */
  @property({ attribute: 'asset-id' })
  public assetId = '';

  /**
   * Whether the artifact this card points at is the one currently being viewed. Exposed to
   * assistive technology as `aria-current`.
   */
  @property({ type: Boolean, reflect: true })
  public active = false;

  /**
   * Whether the card can be activated.
   */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  @state()
  private _grouped = false;

  readonly #arrowIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M5.25 5.25H12.75V12.75M5.25 12.75L12.75 5.25"
        stroke="currentColor"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#detectGroup();
  }

  #detectGroup(): void {
    this._grouped = this.parentElement?.tagName.toLowerCase() === 'forge-ai-artifact-card-group';
    if (this._grouped) {
      this.setAttribute('role', 'listitem');
    } else if (this.getAttribute('role') === 'listitem') {
      this.removeAttribute('role');
    }
  }

  #handleClick(): void {
    if (this.disabled) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent<ForgeAiArtifactCardOpenEventData>('forge-ai-artifact-card-open', {
        detail: { assetId: this.assetId },
        bubbles: true,
        composed: true
      })
    );
  }

  public override render(): TemplateResult {
    return html`
      <button
        class=${classMap({ 'artifact-card': true, 'artifact-card--grouped': this._grouped })}
        type="button"
        aria-current=${this.active ? 'true' : nothing}
        ?disabled=${this.disabled}
        @click=${this.#handleClick}>
        <span class="icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
        <span class="text">
          <span class="title">${this.titleText}</span>
          <span class="subtitle">${this.subtitleText}</span>
        </span>
        <span class="arrow">${this.#arrowIcon}</span>
      </button>
    `;
  }
}
