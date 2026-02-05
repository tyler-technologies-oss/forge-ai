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
}

export const AiThreadContainerComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thread-container';

/**
 * @tag forge-ai-thread-container
 *
 * @state open - The drawer is open
 * @state narrow - The container is below the drawer breakpoint
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

  readonly #threadList: TemplateResult = html`
    <ul class="forge-list">
      <li class="forge-list-item forge-list-item--interactive">
        <button>
          <span>Title</span>
        </button>
      </li>
      <li class="forge-list-item forge-list-item--interactive">
        <button>
          <span>Title</span>
        </button>
      </li>
      <li class="forge-list-item forge-list-item--interactive">
        <button>
          <span>Title</span>
        </button>
      </li>
    </ul>
  `;

  readonly #newChatButton: TemplateResult = html`
    <button class="forge-button forge-button--tonal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
      </svg>
      New chat
    </button>
  `;

  get #drawerContent(): TemplateResult {
    return html` <div class="history-container">${this.#searchField} ${this.#threadList} ${this.#newChatButton}</div> `;
  }

  #handleShowHistory(): void {
    this.open = true;
    toggleState(this.#internals, 'open', true);
    this._dialog.show();
  }

  #handleDialogClose(): void {
    this.open = false;
    toggleState(this.#internals, 'open', false);
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupResizeObserver();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupResizeObserver();
  }

  #setupResizeObserver(): void {
    this.#resizeObserver = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      const isNarrow = width < DRAWER_BREAKPOINT;
      if (this._narrow !== isNarrow) {
        this._narrow = isNarrow;
        toggleState(this.#internals, 'narrow', isNarrow);
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
  }

  public override render(): TemplateResult {
    return html`<div class="container">
      <div class="header">
        ${when(
          this._narrow,
          () => html`
            <button
              aria-label="Show chat history"
              class="forge-icon-button forge-icon-button--small chat-history-button"
              @click=${this.#handleShowHistory}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Show chat history</title>
                <path d="M0 0h24v24H0Z" fill="none" />
                <path d="M0 0h24v24H0Z" fill="none" />
                <path d="M0 0h24v24H0Z" fill="none" />
                <path
                  d="M3 4.98h3.11v14.04H3zM8.11 19H21V5H8.11ZM13 8.28l1.41-1.41 5 5-5 5L13 15.46l2.58-2.59H9.94v-2h5.67Z"
                  fill="none" />
                <path d="M9.94 12.87h5.67l-2.58 2.59 1.41 1.41 5-5-5-5-1.41 1.41 2.58 2.59H9.94z" />
                <path
                  d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M3 5h3.11v14H3Zm18 14H8.11V5H21Z" />
              </svg>
            </button>
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
