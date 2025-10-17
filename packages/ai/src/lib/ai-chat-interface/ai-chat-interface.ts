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

  private _resizeObserver: ResizeObserver | null = null;
  private _mutationObserver: MutationObserver | null = null;
  private _userHasScrolledUp = false;
  private _isScrollEventListenerAdded = false;

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

    if (['header', 'suggestions', 'prompt', 'default'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  /**
   * Scrolls the messages container to the bottom only if user hasn't scrolled up
   */
  public scrollMessagesToBottom(): void {
    const messagesContainer = this.shadowRoot?.querySelector('.messages-container') as HTMLElement;
    if (!messagesContainer) {
      return;
    }

    // Check if container has overflow (scrollbar is present)
    const hasOverflow = messagesContainer.scrollHeight > messagesContainer.clientHeight;

    // If no overflow, always scroll (no scrollbar means no user scroll conflict)
    if (!hasOverflow) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      return;
    }

    // Setup scroll listener once overflow is detected
    if (hasOverflow && !this._isScrollEventListenerAdded) {
      this.#setupScrollListener(messagesContainer);
    }

    // Check if user is at the bottom (with small tolerance for floating point issues)
    const tolerance = 5;
    const isAtBottom =
      messagesContainer.scrollTop + messagesContainer.clientHeight >= messagesContainer.scrollHeight - tolerance;

    // Reset scroll flag if user is back at bottom
    if (isAtBottom) {
      this._userHasScrolledUp = false;
    }

    // Only auto-scroll if user hasn't manually scrolled up
    if (!this._userHasScrolledUp) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  public override firstUpdated(): void {
    this.#setupResizeObserver();
    this.#setupMutationObserver();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupResizeObserver();
    this.#cleanupMutationObserver();
    this.#cleanupScrollListener();
  }

  #setupResizeObserver(): void {
    const messagesContainer = this.shadowRoot?.querySelector('.messages-container') as HTMLElement;
    if (!messagesContainer) {
      return;
    }

    this._resizeObserver = new ResizeObserver(() => {
      // Use requestAnimationFrame to ensure DOM updates are complete
      requestAnimationFrame(() => {
        this.scrollMessagesToBottom();
      });
    });

    this._resizeObserver.observe(messagesContainer);
  }

  #cleanupResizeObserver(): void {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  #setupMutationObserver(): void {
    // Watch for changes in the light DOM (slotted content)
    this._mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(() => {
        this.scrollMessagesToBottom();
      });
    });

    // Observe changes to the component's children (slotted content)
    this._mutationObserver.observe(this, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: true
    });
  }

  #cleanupMutationObserver(): void {
    if (this._mutationObserver) {
      this._mutationObserver.disconnect();
      this._mutationObserver = null;
    }
  }

  #setupScrollListener(messagesContainer: HTMLElement): void {
    let lastScrollTop = messagesContainer.scrollTop;

    const handleScroll = (): void => {
      const currentScrollTop = messagesContainer.scrollTop;

      // Detect if user scrolled up (not due to programmatic scroll to bottom)
      if (currentScrollTop < lastScrollTop) {
        this._userHasScrolledUp = true;
      }

      lastScrollTop = currentScrollTop;
    };

    messagesContainer.addEventListener('scroll', handleScroll, { passive: true });
    this._isScrollEventListenerAdded = true;
  }

  #cleanupScrollListener(): void {
    const messagesContainer = this.shadowRoot?.querySelector('.messages-container') as HTMLElement;
    if (messagesContainer && this._isScrollEventListenerAdded) {
      // Remove all scroll listeners (we can't remove specific one due to closure)
      messagesContainer.replaceWith(messagesContainer.cloneNode(true));
      this._isScrollEventListenerAdded = false;
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
