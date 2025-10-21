import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, queryAssignedNodes, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '../ai-empty-state/ai-empty-state';
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

  @state()
  private _hasMessages = false;

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

  readonly #messagesSlot = html`<slot @slotchange=${this.#handleSlotChange}></slot>`;

  get #messagesContainer(): TemplateResult {
    return html`
      <div class="messages-container" part="messages">
        ${this.#messagesSlot} ${!this._hasMessages ? html`<forge-ai-empty-state></forge-ai-empty-state>` : nothing}
      </div>
    `;
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name || 'default';

    if (slotName === 'default') {
      // Check if there are any assigned elements (messages)
      const slot = evt.target as HTMLSlotElement;
      const assignedElements = slot.assignedElements();
      this._hasMessages = assignedElements.length > 0;
    }

    if (['header', 'suggestions', 'prompt', 'default'].includes(slotName)) {
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
