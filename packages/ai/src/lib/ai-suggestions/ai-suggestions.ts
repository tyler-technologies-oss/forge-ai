import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '../utils';

import styles from './ai-suggestions.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-suggestions': AiSuggestionsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-suggestions-select': CustomEvent<AiSuggestionsEventData>;
  }
}

export interface Suggestion {
  text: string;
  value: string;
}

export interface AiSuggestionsEventData {
  text: string;
  value: string;
}

export type AiSuggestionsVariant = 'inline' | 'block';

export const AiSuggestionsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-suggestions';

/**
 * @tag forge-ai-suggestions
 *
 * @state inline - The suggestions are displayed inline.
 * @state block - The suggestions are displayed as blocks.
 *
 * @event {CustomEvent<AiSuggestionsEventData>} forge-ai-suggestions-select - Fired when a suggestion is selected.
 */
@customElement(AiSuggestionsComponentTagName)
export class AiSuggestionsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of suggestion objects to display */
  @property({ type: Array })
  public suggestions: Suggestion[] = [];

  /** Display variant for suggestions layout */
  @property({ type: String, attribute: 'variant' })
  public variant: AiSuggestionsVariant = 'inline';

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#setCssState();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('variant')) {
      this.#setCssState();
    }
  }

  #setCssState(): void {
    toggleState(this.#internals, 'inline', this.variant === 'inline');
    toggleState(this.#internals, 'block', this.variant === 'block');
  }

  get #suggestionButtons(): TemplateResult[] {
    return this.suggestions.map(
      suggestion =>
        html`<button
          class="forge-button forge-button--tonal suggestion"
          @click=${() => this._handleSuggestionClick(suggestion)}>
          ${suggestion.text}
        </button>`
    );
  }

  private _handleSuggestionClick(suggestion: Suggestion): void {
    const event = new CustomEvent<AiSuggestionsEventData>('forge-ai-suggestions-select', {
      detail: {
        text: suggestion.text,
        value: suggestion.value
      },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  get #inlineLayout(): TemplateResult {
    return html`
      <div class="scroll-container">
        <div class="suggestions-container">
          <div class="suggestions-inline">${this.#suggestionButtons}</div>
        </div>
      </div>
    `;
  }

  get #blockLayout(): TemplateResult {
    return html` <div class="suggestions-block">${this.#suggestionButtons}</div> `;
  }

  public override render(): TemplateResult {
    return this.variant === 'block' ? this.#blockLayout : this.#inlineLayout;
  }
}
