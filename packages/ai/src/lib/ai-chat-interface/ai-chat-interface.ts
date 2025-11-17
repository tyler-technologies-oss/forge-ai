import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '../ai-gradient-container/ai-gradient-container';

import styles from './ai-chat-interface.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-interface': AiChatInterfaceComponent;
  }
}

export const AiChatInterfaceComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-interface';

/**
 * @tag forge-ai-chat-interface
 *
 * @slot - Default slot for messages
 * @slot header - Slot for AI chat header component
 * @slot suggestions - Slot for AI suggestions component
 * @slot prompt - Slot for AI prompt component
 */
@customElement(AiChatInterfaceComponentTagName)
export class AiChatInterfaceComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'suggestions', flatten: true })
  private _slottedSuggestionsNodes!: Node[];

  readonly #headerSlot = html`<slot name="header" @slotchange=${this.#handleSlotChange}></slot>`;

  readonly #suggestionsSlot = html`<slot name="suggestions" @slotchange=${this.#handleSlotChange}></slot>`;

  get #suggestions(): TemplateResult | typeof nothing {
    const hasSuggestions = this._slottedSuggestionsNodes.length > 0;
    return when(
      hasSuggestions,
      () => html`<div class="suggestions-container">${this.#suggestionsSlot}</div>`,
      () => this.#suggestionsSlot
    );
  }

  readonly #promptSlot = html`<slot name="prompt" @slotchange=${this.#handleSlotChange}></slot>`;

  get #prompt(): TemplateResult {
    return this.#promptSlot;
  }

  get #messagesContainer(): TemplateResult {
    return html`
      <div class="messages-container" part="messages">
        <slot @slotchange=${this.#handleSlotChange}></slot>
      </div>
    `;
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;

    if (['header', 'suggestions', 'prompt'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  /**
   * Scrolls the messages container to the bottom with smooth animation
   */
  public scrollToBottom(): void {
    const messagesContainer = this.shadowRoot?.querySelector('.messages-container') as HTMLElement;
    if (messagesContainer) {
      messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="ai-chat-interface">
        ${this.#headerSlot} ${this.#messagesContainer} ${this.#suggestions}
        <div class="prompt-container">${this.#prompt}</div>
      </div>
    `;
  }
}
