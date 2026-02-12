import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { toggleState } from '../utils';
import styles from './ai-thread-container.scss?inline';

const DRAWER_BREAKPOINT = 768;

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thread-container': AiThreadContainerComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-thread-container-layout-change': CustomEvent<{ narrow: boolean }>;
  }
}

export const AiThreadContainerComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thread-container';

/**
 * @tag forge-ai-thread-container
 *
 * @slot thread-list - Slot for the thread list component
 * @slot thread-header - Slot for the thread header content
 * @slot thread-body - Slot for the thread body content
 *
 * @state open - The drawer is open
 * @state narrow - The container is below the drawer breakpoint
 *
 * @event {CustomEvent<{ narrow: boolean }>} forge-ai-thread-container-layout-change - Fired when the layout changes between narrow and wide modes
 */
@customElement(AiThreadContainerComponentTagName)
export class AiThreadContainerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Whether the drawer is open */
  @property({ type: Boolean, reflect: true })
  public open = false;

  @state()
  private _narrow = false;

  @query('#css-dialog')
  private _dialog!: HTMLDialogElement;

  @query('.container')
  private _container!: HTMLDivElement;

  readonly #internals: ElementInternals;
  #resizeObserver?: ResizeObserver;
  #firstObservation = true;
  #boundEscapeHandler = this.#handleWindowObjectEscapeKeydown.bind(this);

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  readonly #searchField = html`
    <div class="forge-field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
      </svg>
      <input type="text" id="search-threads" placeholder="Search threads..." />
    </div>
  `;

  readonly #threadListSlot = html`<slot name="thread-list"></slot>`;

  readonly #newChatButton: TemplateResult = html`
    <button class="forge-button forge-button--tonal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
      </svg>
      New chat
    </button>
  `;

  readonly #clearHistoryButton: TemplateResult = html`
    <button class="forge-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
      </svg>
      Clear history
    </button>
  `;

  get #drawerContent(): TemplateResult {
    return html`
      <div class="history-container">
        ${this.#searchField} ${this.#threadListSlot}
        <div class="history-buttons">
          ${this.#clearHistoryButton}
          <hr class="forge-divider" />
          ${this.#newChatButton}
        </div>
      </div>
    `;
  }

  #handleDialogClose(): void {
    this.open = false;
    toggleState(this.#internals, 'open', false);
    window.removeEventListener('keydown', this.#boundEscapeHandler);
  }

  #handleWindowObjectEscapeKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.open && this._narrow) {
      this._dialog.close();
    }
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupResizeObserver();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupResizeObserver();
    window.removeEventListener('keydown', this.#boundEscapeHandler);
  }

  public toggleHistoryDrawer(): void {
    this.open = true;
    toggleState(this.#internals, 'open', true);
    this._dialog.show();
    window.addEventListener('keydown', this.#boundEscapeHandler);
  }

  #setupResizeObserver(): void {
    this.#resizeObserver = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      const isNarrow = width < DRAWER_BREAKPOINT;
      const stateChanged = this._narrow !== isNarrow;

      if (stateChanged) {
        this._narrow = isNarrow;
        toggleState(this.#internals, 'narrow', isNarrow);
      }

      // Emit event on first observation or when state changes
      if (this.#firstObservation || stateChanged) {
        this.#firstObservation = false;
        this.dispatchEvent(
          new CustomEvent('forge-ai-thread-container-layout-change', {
            detail: { narrow: isNarrow },
            bubbles: true,
            composed: true
          })
        );
      }
    });

    // Wait for first update to ensure container is available
    this.updateComplete.then(() => {
      if (this._container) {
        this.#resizeObserver?.observe(this._container);
      }
    });
  }

  #cleanupResizeObserver(): void {
    if (this.#resizeObserver) {
      this.#resizeObserver.disconnect();
      this.#resizeObserver = undefined;
    }
    this.#firstObservation = true;
  }

  public override render(): TemplateResult {
    return html`<div class="container">
      <div class="header">
        ${when(
          this._narrow,
          () => html`
            <dialog
              id="css-dialog"
              class="chat-history-drawer forge-dialog forge-dialog--modal forge-dialog--left-sheet"
              @close=${this.#handleDialogClose}>
              ${this.#drawerContent}
            </dialog>
          `
        )}
        <slot name="thread-header"></slot>
      </div>
      <div class="body-container">
        ${when(
          !this._narrow,
          () => html`
            <div class="left">
              <aside class="forge-drawer">${this.#drawerContent}</aside>
            </div>
          `
        )}
        <div class="body">
          <slot name="thread-body"></slot>
        </div>
      </div>
    </div>`;
  }
}
