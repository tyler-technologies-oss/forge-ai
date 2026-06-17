import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { ResizeController } from '../core/resize-controller.js';

import styles from './ai-sidebar.scss?inline';

const DEFAULT_WIDTH = 420;
const MIN_WIDTH = 360;
const MAX_WIDTH = 800;

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-sidebar': AiSidebarComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-sidebar-open': CustomEvent<void>;
    'forge-ai-sidebar-close': CustomEvent<void>;
  }
}

export const AiSidebarComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-sidebar';

/**
 * @tag forge-ai-sidebar
 *
 * @slot - Default slot for sidebar content (typically ai-chat-interface)
 *
 * @fires forge-ai-sidebar-open - Fired when the sidebar is opened
 * @fires forge-ai-sidebar-close - Fired when the sidebar is closed
 */
@customElement(AiSidebarComponentTagName)
export class AiSidebarComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the sidebar is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Enables sidebar resizing.
   */
  @property({ type: Boolean })
  public resizable = true;

  @state()
  private _width = DEFAULT_WIDTH;

  /**
   * Indicates whether the sidebar is in a closing animation state.
   */
  @state()
  private _closing = false;

  /**
   * Indicates whether the animation container is in a closing state.
   */
  @state()
  private _containerClosing = false;

  /**
   * Indicates whether the sidebar is being resized.
   */
  @state()
  private _isResizing = false;

  #resizeHandleRef: Ref<HTMLElement> = createRef();
  #drawerRef: Ref<HTMLElement> = createRef();
  #containerRef: Ref<HTMLElement> = createRef();
  #resizeController?: ResizeController;

  public override render(): TemplateResult {
    const containerClasses = {
      'animation-container': true,
      'animation-container--open': this.open && !this._containerClosing,
      'animation-container--closing': this._containerClosing,
      'animation-container--closed': !this.open && !this._containerClosing,
      'animation-container--resizing': this._isResizing
    };

    const drawerClasses = {
      'forge-drawer': true,
      'forge-drawer--right': true,
      'forge-drawer--closing': this._closing,
      'forge-drawer--closed': !this.open && !this._closing,
      'forge-drawer--resizing': this._isResizing
    };

    const handleClasses = {
      'resize-handle': true,
      'resize-handle--active': this._isResizing
    };

    const containerStyles = {
      '--forge-drawer-width': `${this._width}px`
    };

    return html`
      <div
        ${ref(this.#containerRef)}
        class=${classMap(containerClasses)}
        style=${styleMap(containerStyles)}
        @transitionend=${this.#handleContainerTransitionEnd}>
        <aside
          ${ref(this.#drawerRef)}
          class=${classMap(drawerClasses)}
          ?open=${this.open}
          role="complementary"
          aria-hidden=${!this.open}
          @transitionend=${this.#handleDrawerTransitionEnd}>
          ${when(
            this.resizable,
            () => html`
              <div
                ${ref(this.#resizeHandleRef)}
                class=${classMap(handleClasses)}
                role="separator"
                aria-orientation="vertical"
                aria-label="Resize sidebar"
                aria-valuemin="${MIN_WIDTH}"
                aria-valuemax="${MAX_WIDTH}"
                aria-valuenow=${this._width}
                aria-valuetext="${this._width} pixels"
                tabindex="0"
                @pointerdown=${this.#handleResizePointerDown}
                @keydown=${this.#handleResizeKeyDown}></div>
            `
          )}
          <slot></slot>
        </aside>
      </div>
    `;
  }

  /**
   * Opens the sidebar.
   */
  public show(): void {
    if (!this.open) {
      this._closing = false;
      this._containerClosing = false;
      this.open = true;
      this.#dispatchEvent('forge-ai-sidebar-open');
    }
  }

  /**
   * Closes the sidebar.
   */
  public close(): void {
    if (this.open && !this._closing && !this._containerClosing) {
      this._closing = true;
      this._containerClosing = true;
      // The actual closing and event dispatch will happen in transition end handlers
    }
  }

  /**
   * Toggles the sidebar open state.
   */
  public toggle(): void {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  public override firstUpdated(): void {
    this.#resizeController = new ResizeController(this, {
      targetElementRef: this.#containerRef,
      resizeHandleRef: this.#resizeHandleRef,
      minWidth: MIN_WIDTH,
      maxWidth: MAX_WIDTH,
      defaultWidth: DEFAULT_WIDTH,
      onResize: width => {
        this._width = width;
      },
      onResizeStart: () => {
        this._isResizing = true;
      },
      onResizeEnd: () => {
        this._isResizing = false;
      }
    });
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('resizable') && !this.resizable) {
      this._width = DEFAULT_WIDTH;
    }
  }

  #handleContainerTransitionEnd(evt: TransitionEvent): void {
    // Only handle transitions from the animation container, not child elements
    if (evt.target === evt.currentTarget && this._containerClosing) {
      this._containerClosing = false;
      // Wait for drawer animation to complete before finalizing close state
    }
  }

  #handleDrawerTransitionEnd(evt: TransitionEvent): void {
    // Only handle transitions from the drawer element, not child elements
    if (evt.target === evt.currentTarget && this._closing) {
      this.open = false;
      this._closing = false;
      this.#dispatchEvent('forge-ai-sidebar-close');
    }
  }

  #handleResizePointerDown(event: PointerEvent): void {
    this.#resizeController?.handlePointerDown(event);
  }

  #handleResizeKeyDown(event: KeyboardEvent): void {
    this.#resizeController?.handleKeyDown(event);
  }

  #dispatchEvent(type: keyof HTMLElementEventMap): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
