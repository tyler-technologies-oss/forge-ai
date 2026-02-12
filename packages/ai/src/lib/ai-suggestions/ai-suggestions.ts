import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { generateUniqueId, toggleState } from '../utils';

import '../core/tooltip/tooltip.js';

import styles from './ai-suggestions.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-suggestions': AiSuggestionsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-suggestions-select': CustomEvent<ForgeAiSuggestionsEventData>;
  }
}

export interface Suggestion {
  text: string;
  value: string;
}

export interface ForgeAiSuggestionsEventData {
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
 * @event {CustomEvent<ForgeAiSuggestionsEventData>} forge-ai-suggestions-select - Fired when a suggestion is selected.
 *
 * @cssproperty --forge-ai-suggestions-inline-size - The maximum inline size of the suggestions container.
 * @cssproperty --forge-ai-suggestion-max-width - The maximum width of the suggestion buttons in inline layout.
 */
@customElement(AiSuggestionsComponentTagName)
export class AiSuggestionsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of suggestion objects to display */
  @property({ type: Array, attribute: false })
  public suggestions: Suggestion[] = [];

  /** Display variant for suggestions layout */
  @property({ type: String, attribute: 'variant' })
  public variant: AiSuggestionsVariant = 'inline';

  readonly #internals: ElementInternals;
  private _suggestionState = new Map<Suggestion, { id: string; isOverflowing: boolean }>();

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#setCssState();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('variant')) {
      this.#setCssState();
    }

    if (changedProperties.has('suggestions')) {
      this.#syncSuggestionState();
    }
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('suggestions')) {
      this.#checkOverflows();
    }
  }

  #syncSuggestionState(): void {
    const newState = new Map<Suggestion, { id: string; isOverflowing: boolean }>();

    for (const suggestion of this.suggestions) {
      const existing = this._suggestionState.get(suggestion);
      if (existing) {
        newState.set(suggestion, existing);
      } else {
        newState.set(suggestion, {
          id: generateUniqueId('suggestion'),
          isOverflowing: false
        });
      }
    }

    this._suggestionState = newState;
  }

  #checkOverflows(): void {
    setTimeout(() => {
      let hasChanges = false;
      const buttons = this.shadowRoot?.querySelectorAll('.suggestion');

      buttons?.forEach(button => {
        const textSpan = button.querySelector('.suggestion-text') as HTMLElement;
        const isOverflowing = textSpan.scrollWidth > textSpan.offsetWidth;
        const id = button.id;

        for (const [, state] of this._suggestionState.entries()) {
          if (state.id === id && state.isOverflowing !== isOverflowing) {
            state.isOverflowing = isOverflowing;
            hasChanges = true;
            break;
          }
        }
      });

      if (hasChanges) {
        this.requestUpdate();
      }
    });
  }

  #setCssState(): void {
    toggleState(this.#internals, 'inline', this.variant === 'inline');
    toggleState(this.#internals, 'block', this.variant === 'block');
  }

  get #suggestionButtons(): TemplateResult[] {
    return this.suggestions?.map(suggestion => {
      const state = this._suggestionState.get(suggestion);
      const id = state?.id ?? '';
      const showTooltip = state?.isOverflowing ?? false;

      return html`<div class="container">
        <button
          id="${id}"
          class="forge-button forge-button--tonal suggestion"
          @click=${() => this._handleSuggestionClick(suggestion)}>
          <span class="suggestion-text">${suggestion.text}</span>
        </button>
        ${when(
          showTooltip,
          () =>
            html`<forge-ai-tooltip class="suggestion-tooltip" for="${id}" role="presentation"
              >${suggestion.text}</forge-ai-tooltip
            >`
        )}
      </div>`;
    });
  }

  private _handleSuggestionClick(suggestion: Suggestion): void {
    const event = new CustomEvent<ForgeAiSuggestionsEventData>('forge-ai-suggestions-select', {
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
