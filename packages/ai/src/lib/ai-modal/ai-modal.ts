import { html, LitElement, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './ai-modal.scss?inline';

const FULLSCREEN_WIDTH_THRESHOLD = 768;

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-modal': AiModalComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-modal-open': CustomEvent<void>;
    'forge-ai-modal-close': CustomEvent<void>;
    'forge-ai-modal-fullscreen-change': CustomEvent<{ isFullscreen: boolean }>;
  }
}

/**
 * @tag forge-ai-modal
 *
 * @slot - Default slot for modal content
 *
 * @event {CustomEvent<void>} forge-ai-modal-open - Fired when the modal is opened
 * @event {CustomEvent<void>} forge-ai-modal-close - Fired when the modal is closed
 * @event {CustomEvent<{ isFullscreen: boolean }>} forge-ai-modal-fullscreen-change - Fired when the fullscreen state changes
 */
@customElement('forge-ai-modal')
export class AiModalComponent extends LitElement {
  public static readonly styles = unsafeCSS(styles);

  @query('dialog')
  private _dialog!: HTMLDialogElement;

  /**
   * Controls whether the modal is open or closed.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Controls whether the modal is displayed in fullscreen mode.
   * When not explicitly set, this will be automatically determined based on viewport size.
   */
  @property({ type: Boolean })
  public fullscreen?: boolean;

  @state()
  private _autoFullscreen = window.innerWidth <= FULLSCREEN_WIDTH_THRESHOLD;

  #mediaQuery?: MediaQueryList;

  public render(): TemplateResult {
    const isFullscreen = this.fullscreen ?? this._autoFullscreen;
    const classes = {
      'forge-dialog': true,
      'forge-dialog--fullscreen': isFullscreen
    };
    return html`
      <dialog
        class=${classMap(classes)}
        aria-labelledby="chat-interface-title"
        @close=${this.#handleDialogClose}
        @click=${this.#handleDialogClick}>
        <slot></slot>
      </dialog>
    `;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupMediaQuery();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupMediaQuery();
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._dialog?.showModal();
        this.dispatchEvent(new CustomEvent('forge-ai-modal-open', { bubbles: true, composed: true }));
      } else {
        this._dialog?.close();
        window.setTimeout(() => {
          this.dispatchEvent(new CustomEvent('forge-ai-modal-close', { bubbles: true, composed: true }));
        }, 100); // Delay to allow dialog close animation to complete
      }
    }
  }

  #handleDialogClose(): void {
    this.open = false;
  }

  #handleDialogClick(event: MouseEvent): void {
    // Close modal when clicking on the backdrop (the dialog element itself)
    if (event.target === this._dialog) {
      this.close();
    }
  }

  /**
   * Shows the modal dialog.
   */
  public show(): void {
    this.open = true;
  }

  /**
   * Closes the modal dialog.
   */
  public close(): void {
    this.open = false;
  }

  #setupMediaQuery(): void {
    this.#mediaQuery = window.matchMedia(`(max-width: ${FULLSCREEN_WIDTH_THRESHOLD}px)`);
    this.#mediaQuery.addEventListener('change', this.#handleMediaChange);
    this.#handleMediaChange(this.#mediaQuery);
  }

  #cleanupMediaQuery(): void {
    this.#mediaQuery?.removeEventListener('change', this.#handleMediaChange);
  }

  #handleMediaChange = (e: MediaQueryList | MediaQueryListEvent): void => {
    const previousFullscreen = this._autoFullscreen;
    this._autoFullscreen = e.matches;

    // Only dispatch event if the effective fullscreen state changed and we don't have an explicit override
    if (this.fullscreen === undefined && previousFullscreen !== this._autoFullscreen) {
      const event = new CustomEvent('forge-ai-modal-fullscreen-change', {
        bubbles: true,
        composed: true,
        detail: { isFullscreen: this._autoFullscreen }
      });
      this.dispatchEvent(event);
    }
  };
}
