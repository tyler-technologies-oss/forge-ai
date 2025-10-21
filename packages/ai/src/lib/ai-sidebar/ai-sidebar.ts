import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './ai-sidebar.scss?inline';

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
  public open = true;

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

  public override render(): TemplateResult {
    const containerClasses = {
      'animation-container': true,
      'animation-container--open': this.open && !this._containerClosing,
      'animation-container--closing': this._containerClosing,
      'animation-container--closed': !this.open && !this._containerClosing
    };

    const drawerClasses = {
      'forge-drawer': true,
      'forge-drawer--right': true,
      'forge-drawer--closing': this._closing,
      'forge-drawer--closed': !this.open && !this._closing
    };

    return html`
      <div class=${classMap(containerClasses)} @transitionend=${this.#handleContainerTransitionEnd}>
        <aside
          class=${classMap(drawerClasses)}
          ?open=${this.open}
          role="complementary"
          aria-hidden=${!this.open}
          @transitionend=${this.#handleDrawerTransitionEnd}>
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

  #dispatchEvent(type: keyof HTMLElementEventMap): void {
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
