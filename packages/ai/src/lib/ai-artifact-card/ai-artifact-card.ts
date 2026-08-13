import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
 * Displays a leading icon, two lines of truncating text, and a trailing action affordance
 * inside a single button that covers the whole card. Activating it emits an event; the
 * consumer decides what opens. The component is presentational — it holds no knowledge of
 * what the artifact is or where it lives.
 *
 * @slot icon - The leading icon. Consumers supply their own.
 * @slot action - The trailing affordance. Must contain text, not an icon alone — this label
 * is the only non-color signal distinguishing one card from another for screen reader and
 * colorblind users.
 *
 * @event {CustomEvent<ForgeAiArtifactCardOpenEventData>} forge-ai-artifact-card-open - Fired
 * when the card is activated by click, Enter, or Space. Not fired while disabled.
 *
 * @cssproperty --forge-ai-artifact-card-accent-color - Color of the icon, the action label, and the active ring
 * @cssproperty --forge-ai-artifact-card-background - Background color of the card
 * @cssproperty --forge-ai-artifact-card-border-radius - Corner radius of the card
 * @cssproperty --forge-ai-artifact-card-padding - Padding inside the card
 * @cssproperty --forge-ai-artifact-card-gap - Gap between the icon, text, and action
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
   * Whether the artifact this card points at is the one currently being viewed.
   */
  @property({ type: Boolean, reflect: true })
  public active = false;

  /**
   * Whether the card can be activated.
   */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

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
      <button class="artifact-card" type="button" ?disabled=${this.disabled} @click=${this.#handleClick}>
        <span class="icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
        <span class="text">
          <span class="title">${this.titleText}</span>
          <span class="subtitle">${this.subtitleText}</span>
        </span>
        <span class="action">
          <slot name="action"></slot>
        </span>
      </button>
    `;
  }
}
