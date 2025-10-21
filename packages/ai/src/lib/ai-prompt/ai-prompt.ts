import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, queryAssignedNodes, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { toggleState } from '../utils';

import styles from './ai-prompt.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-prompt': AiPromptComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-prompt-send': CustomEvent<ForgeAiPromptSendEventData>;
    'forge-ai-prompt-cancel': CustomEvent<void>;
    'forge-ai-prompt-attachment': CustomEvent<ForgeAiPromptAttachmentEventData>;
    'forge-ai-prompt-stop': CustomEvent<void>;
  }
}

export interface ForgeAiPromptSendEventData {
  value: string;
  time: string;
  date: Date;
}

export interface ForgeAiPromptAttachmentEventData {
  files: File[];
}

export type AiPromptVariant = 'stacked' | 'inline';

export const AiPromptComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-prompt';

/**
 * @tag forge-ai-prompt
 *
 * @slot actions - Slot for action components that are hidden in inline mode (voice input, file picker, model selectors, web search, etc.)
 *
 * @state inline - The prompt is in inline layout mode with actions hidden.
 * @state stacked - The prompt is in stacked layout mode with actions displayed below the input.
 *
 * @event {CustomEvent<ForgeAiPromptSendEventData>} forge-ai-prompt-send - Fired when the send button is clicked or Enter is pressed (without Shift). Cancelable - if cancelled, running state is not set and input is not cleared.
 * @event {CustomEvent<void>} forge-ai-prompt-cancel - Fired when the Escape key is pressed (if cancelOnEscape is true).
 * @event {CustomEvent<ForgeAiPromptAttachmentEventData>} forge-ai-prompt-attachment - Fired when files are pasted into the textarea.
 * @event {CustomEvent<void>} forge-ai-prompt-stop - Fired when the stop button is clicked. Cancelable - if cancelled, running state remains true.
 */
@customElement(AiPromptComponentTagName)
export class AiPromptComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Placeholder text for the textarea field */
  @property()
  public placeholder = 'Ask a question...';

  /** Current value of the textarea field */
  @property()
  public value = '';

  /** Layout variant for the prompt component */
  @property({ type: String, attribute: 'variant' })
  public variant: AiPromptVariant = 'stacked';

  /** Whether the send button is disabled */
  @property({ type: Boolean, attribute: 'send-disabled' })
  public sendDisabled = false;

  /** Whether to autofocus the textarea field when the component renders */
  @property({ type: Boolean })
  public autofocus = false;

  /** Whether the textarea field is disabled */
  @property({ type: Boolean, attribute: 'input-disabled' })
  public inputDisabled = false;

  /** Whether to dispatch escape events when Escape key is pressed */
  @property({ type: Boolean, attribute: 'cancel-on-escape' })
  public cancelOnEscape = true;

  /** Whether the component is in running state (shows stop button instead of send button) */
  @property({ type: Boolean })
  public running = false;

  @queryAssignedNodes({ slot: 'actions', flatten: true })
  private _actionsSlottedNodes!: Node[];

  @query('#chat-input')
  private _inputElement!: HTMLTextAreaElement;

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

  public override firstUpdated(): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  #setCssState(): void {
    toggleState(this.#internals, 'inline', this.variant === 'inline');
    toggleState(this.#internals, 'stacked', this.variant === 'stacked');
  }

  readonly #actionsSlot = html`<slot name="actions" @slotchange=${this.#handleSlotChange}></slot>`;

  get #shouldShowStopButton(): boolean {
    return this.running && !this.value.trim();
  }

  get #conditionalActions(): TemplateResult | typeof nothing {
    const hasActions = this._actionsSlottedNodes.length > 0;

    return when(
      hasActions,
      () => html`
        <hr class="forge-divider" />
        <div class="actions">${this.#actionsSlot}</div>
      `,
      () => html`${this.#actionsSlot}` // Always render slot for detection
    );
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (slotName === 'actions') {
      this.requestUpdate();
    }
  }

  private _handleSend(): void {
    if (this.sendDisabled || this.inputDisabled || !this.value.trim()) {
      return;
    }

    const now = new Date();
    const event = new CustomEvent<ForgeAiPromptSendEventData>('forge-ai-prompt-send', {
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

    // Only set running state and clear input if event wasn't cancelled
    if (!event.defaultPrevented) {
      this.running = true;
      this.value = ''; // Clear input after sending
    }
  }

  private _handleInput(event: InputEvent): void {
    this.value = (event.target as HTMLTextAreaElement).value;
    const inputEvent = new Event('input', { bubbles: true, composed: true });
    this.dispatchEvent(inputEvent);
  }

  private _handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      // Ignore Enter during IME composition
      if (event.isComposing) {
        return;
      }

      // Submit on Enter (without Shift)
      event.preventDefault();
      this._handleSend();
    } else if (event.key === 'Escape' && this.cancelOnEscape) {
      event.preventDefault();
      this._handleEscape();
    }
    // Allow Shift+Enter to create new lines naturally
  }

  private _handleStop(): void {
    const event = new CustomEvent<void>('forge-ai-prompt-stop', {
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);

    // Only set running to false if event wasn't cancelled
    if (!event.defaultPrevented) {
      this.running = false;
    }
  }

  private _handleEscape(): void {
    const event = new CustomEvent<void>('forge-ai-prompt-cancel', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  private _handlePaste(event: ClipboardEvent): void {
    const files = Array.from(event.clipboardData?.files || []);

    if (files.length > 0) {
      event.preventDefault();

      const attachmentEvent = new CustomEvent<ForgeAiPromptAttachmentEventData>('forge-ai-prompt-attachment', {
        detail: { files },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(attachmentEvent);
    }
  }

  /**
   * Focuses the textarea element
   */
  public override focus(): void {
    this._inputElement?.focus();
  }

  public override render(): TemplateResult {
    return html`
      <div class="input-container">
        <div class="forge-card">
          <div class="forge-field">
            <textarea
              id="chat-input"
              rows="1"
              .value=${this.value}
              placeholder=${this.placeholder}
              ?disabled=${this.inputDisabled}
              @input=${this._handleInput}
              @keydown=${this._handleKeyDown}
              @paste=${this._handlePaste}></textarea>
            <button
              aria-label=${this.#shouldShowStopButton ? 'Stop' : 'Send message'}
              class="forge-icon-button forge-icon-button--large ai-icon-button"
              ?disabled=${this.sendDisabled || this.inputDisabled}
              @click=${this.#shouldShowStopButton ? this._handleStop : this._handleSend}>
              ${this.#shouldShowStopButton
                ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18 18H6V6h12z" />
                  </svg>`
                : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m2 21 21-9L2 3v7l15 2-15 2z" />
                  </svg>`}
            </button>
          </div>
          ${this.#conditionalActions}
        </div>
      </div>
    `;
  }
}
