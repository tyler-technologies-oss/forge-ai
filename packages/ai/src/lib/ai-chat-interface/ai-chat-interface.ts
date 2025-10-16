import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '../ai-chat-header/ai-chat-header';
import type { MinimizeIconType } from '../ai-chat-header/ai-chat-header';
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
 * @slot suggestions - Slot for AI suggestions component
 * @slot prompt - Slot for AI prompt component
 */
@customElement(AiChatInterfaceComponentTagName)
export class AiChatInterfaceComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Controls whether the expand button is visible in the header
   */
  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  /**
   * Controls whether the minimize button is visible in the header
   */
  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  /**
   * Indicates the current expanded state for displaying the appropriate expand/collapse icon
   */
  @property({ type: Boolean })
  public expanded = false;

  /**
   * Controls which minimize icon to display in the header
   */
  @property({ attribute: 'minimize-icon' })
  public minimizeIcon: MinimizeIconType = 'default';

  @queryAssignedNodes({ slot: 'suggestions', flatten: true })
  private _slottedSuggestionsNodes!: Node[];

  @state()
  private _hasMessages = false;

  get #header(): TemplateResult {
    return html`
      <forge-ai-chat-header
        ?show-expand-button=${this.showExpandButton}
        ?show-minimize-button=${this.showMinimizeButton}
        ?expanded=${this.expanded}
        minimize-icon=${this.minimizeIcon}>
      </forge-ai-chat-header>
    `;
  }

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
      <div class="messages-container">
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

    if (['suggestions', 'prompt', 'default'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="ai-chat-interface">
        ${this.#header} ${this.#messagesContainer} ${this.#suggestions}
        <div class="prompt-container">${this.#prompt}</div>
      </div>
    `;
  }
}
