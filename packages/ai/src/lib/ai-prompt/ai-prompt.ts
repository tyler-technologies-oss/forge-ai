import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '../utils';

import styles from './ai-prompt.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-prompt': AiPromptComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-prompt-send': CustomEvent<AiPromptSendEventData>;
  }
}

export interface AiPromptSendEventData {
  value: string;
  time: string;
  date: Date;
}

export type AiPromptVariant = 'stacked' | 'inline';

export const AiPromptComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-prompt';

/**
 * @tag forge-ai-prompt
 *
 * @slot actions - Slot for action components like dropdown menus, voice input, buttons, etc.
 *
 * @state inline - The prompt is in inline layout mode with actions hidden.
 * @state stacked - The prompt is in stacked layout mode with actions displayed below the input.
 *
 * @event {CustomEvent<AiPromptSendEventData>} forge-ai-prompt-send - Fired when the send button is clicked or Enter is pressed.
 */
@customElement(AiPromptComponentTagName)
export class AiPromptComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Placeholder text for the input field */
  @property()
  public placeholder = 'Ask a question...';

  /** Current value of the input field */
  @property()
  public value = '';

  /** Layout variant for the prompt component */
  @property({ type: String, attribute: 'variant' })
  public variant: AiPromptVariant = 'stacked';

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
    toggleState(this.#internals, 'stacked', this.variant === 'stacked');
  }

  readonly #inputActions = html`
    <hr class="forge-divider" />
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  `;

  private _handleSend(): void {
    if (this.value.trim()) {
      const now = new Date();
      const event = new CustomEvent<AiPromptSendEventData>('forge-ai-prompt-send', {
        detail: {
          value: this.value,
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          date: now
        },
        bubbles: true,
        composed: true,
        cancelable: true
      });
      this.dispatchEvent(event);
      this.value = ''; // Clear input after sending
    }
  }

  private _handleInput(event: InputEvent): void {
    this.value = (event.target as HTMLInputElement).value;
  }

  private _handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this._handleSend();
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="input-container">
        <div class="forge-card">
          <div class="forge-field">
            <input
              type="text"
              id="chat-input"
              .value=${this.value}
              placeholder=${this.placeholder}
              @input=${this._handleInput}
              @keypress=${this._handleKeyPress} />
            <button
              aria-label="Send message"
              class="forge-icon-button forge-icon-button--large ai-icon-button"
              @click=${this._handleSend}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m2 21 21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
          ${this.variant === 'stacked' ? this.#inputActions : ''}
        </div>
      </div>
    `;
  }
}
