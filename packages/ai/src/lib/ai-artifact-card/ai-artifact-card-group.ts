import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styles from './ai-artifact-card-group.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-artifact-card-group': AiArtifactCardGroupComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-artifact-card-group-toggle': CustomEvent<ForgeAiArtifactCardGroupToggleEventData>;
  }
}

export interface ForgeAiArtifactCardGroupToggleEventData {
  expanded: boolean;
}

export const AiArtifactCardGroupComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-artifact-card-group';

/**
 * @tag forge-ai-artifact-card-group
 *
 * @summary Presents several artifact cards as a single list that collapses past a set count.
 *
 * @description
 * Wraps `forge-ai-artifact-card` elements in one bordered container with dividers between them.
 * Cards inside a group switch to a flatter row style on their own. When there are more cards than
 * `visibleCount`, the extras are hidden behind a toggle that expands and collapses the list. Each
 * card still emits its own open event.
 *
 * @slot - The `forge-ai-artifact-card` elements to list.
 *
 * @event {CustomEvent<ForgeAiArtifactCardGroupToggleEventData>} forge-ai-artifact-card-group-toggle -
 * Fired when the user expands or collapses the list with the toggle.
 *
 * @cssproperty --forge-ai-artifact-card-group-border-radius - Corner radius of the group
 */
@customElement(AiArtifactCardGroupComponentTagName)
export class AiArtifactCardGroupComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * How many cards show while the list is collapsed. Values below 1 are treated as 1.
   */
  @property({ type: Number, attribute: 'visible-count' })
  public visibleCount = 3;

  /**
   * Whether every card is showing.
   */
  @property({ type: Boolean, reflect: true })
  public expanded = false;

  /**
   * Label of the toggle while collapsed. `{count}` is replaced with the number of hidden cards.
   */
  @property({ attribute: 'show-more-text' })
  public showMoreText = '{count} more';

  /**
   * Label of the toggle while expanded.
   */
  @property({ attribute: 'show-less-text' })
  public showLessText = 'Show less';

  @queryAssignedElements({ selector: 'forge-ai-artifact-card' })
  private _cards!: HTMLElement[];

  get #collapsedCount(): number {
    return Math.max(1, this.visibleCount);
  }

  get #overflowCount(): number {
    return Math.max(0, this._cards.length - this.#collapsedCount);
  }

  readonly #chevronDownIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="currentColor"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `;

  readonly #chevronUpIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M13.5 11.25L9 6.75L4.5 11.25"
        stroke="currentColor"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `;

  public override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    this.#syncCardVisibility();
  }

  #syncCardVisibility(): void {
    this._cards.forEach((card, index) => {
      card.hidden = !this.expanded && index >= this.#collapsedCount;
    });
  }

  #handleSlotChange(): void {
    this.requestUpdate();
  }

  #handleToggle(): void {
    this.expanded = !this.expanded;

    this.dispatchEvent(
      new CustomEvent<ForgeAiArtifactCardGroupToggleEventData>('forge-ai-artifact-card-group-toggle', {
        detail: { expanded: this.expanded },
        bubbles: true,
        composed: true
      })
    );
  }

  get #toggle(): TemplateResult | typeof nothing {
    if (this.#overflowCount === 0) {
      return nothing;
    }

    const label = this.expanded ? this.showLessText : this.showMoreText.replace('{count}', String(this.#overflowCount));

    return html`
      <button class="toggle" type="button" aria-expanded=${this.expanded} @click=${this.#handleToggle}>
        ${this.expanded ? this.#chevronUpIcon : this.#chevronDownIcon}
        <span>${label}</span>
      </button>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="artifact-card-group">
        <div class="list" role="list">
          <slot @slotchange=${this.#handleSlotChange}></slot>
        </div>
        ${this.#toggle}
      </div>
    `;
  }
}
