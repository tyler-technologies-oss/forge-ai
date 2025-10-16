import {
  autoUpdate,
  computePosition,
  flip,
  shift,
  type ComputePositionReturn,
  type Middleware,
  type Placement
} from '@floating-ui/dom';
import { LitElement, PropertyValues, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './overlay.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-overlay': ForgeAiOverlayComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-overlay-toggle': CustomEvent<{
      open: boolean;
      newState: string;
      oldState: string;
    }>;
  }
}

export type OverlayPlacement = Placement;

/**
 * @summary A low-level overlay component for internal use within AI components.
 *
 * @cssprop --ai-overlay-max-width - The maximum width of the overlay.
 * @cssprop --ai-overlay-max-height - The maximum height of the overlay.
 * @cssprop --ai-overlay-min-width - The minimum width of the overlay.
 * @cssprop --ai-overlay-min-height - The minimum height of the overlay.
 *
 * @slot - The default slot for overlay content.
 */
@customElement('forge-ai-overlay')
export class ForgeAiOverlayComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The anchor element to position the overlay relative to.
   */
  @property({ type: Object })
  public anchor: Element | null = null;

  /**
   * The placement of the overlay relative to the anchor.
   */
  @property()
  public placement: OverlayPlacement = 'bottom-start';

  /**
   * Whether the overlay should flip to the opposite side when there's no space.
   */
  @property({ type: Boolean })
  public flip = true;

  /**
   * Whether the overlay should shift to stay in view.
   */
  @property({ type: Boolean })
  public shift = false;

  /**
   * Whether the overlay is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  private _overlayElement: HTMLElement | null = null;
  private _cleanupAutoUpdate: (() => void) | null = null;

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cleanup();
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('open')) {
      this._handleOpenChange();
    }

    if (
      changedProperties.has('anchor') ||
      changedProperties.has('placement') ||
      changedProperties.has('flip') ||
      changedProperties.has('shift')
    ) {
      if (this.open && this._overlayElement && this.anchor) {
        this._updatePosition();
      }
    }
  }

  private _handleOpenChange(): void {
    if (this.open) {
      this._showOverlay();
    } else {
      this._hideOverlay();
    }
  }

  private async _showOverlay(): Promise<void> {
    if (!this._overlayElement) {
      await this.updateComplete;
      this._overlayElement = this.shadowRoot?.querySelector('.ai-overlay') as HTMLElement;
    }

    if (this._overlayElement) {
      this._overlayElement.showPopover();

      if (this.anchor) {
        this._updatePosition();
      }
    }
  }

  private _hideOverlay(): void {
    this._overlayElement?.hidePopover();
    this._cleanup();
  }

  private _updatePosition(): void {
    if (!this.anchor || !this._overlayElement) {
      return;
    }

    this._cleanup();

    const middleware = [...(this.flip ? [flip()] : []), ...(this.shift ? [shift({ padding: 8 })] : [])];

    this._cleanupAutoUpdate = autoUpdate(this.anchor, this._overlayElement, () => this._computePosition(middleware));
  }

  private async _computePosition(middleware: Middleware[]): Promise<void> {
    if (!this.anchor || !this._overlayElement) {
      return;
    }

    try {
      const result: ComputePositionReturn = await computePosition(this.anchor, this._overlayElement, {
        placement: this.placement,
        middleware
      });

      Object.assign(this._overlayElement.style, {
        left: '0',
        top: '0',
        translate: `${this._roundByDPR(result.x)}px ${this._roundByDPR(result.y)}px`
      });

      // Add a data attribute for the "actual" placement
      this.setAttribute('data-position-placement', result.placement);
    } catch (error) {
      console.error('Failed to compute overlay position:', error);
    }
  }

  private _roundByDPR(value: number): number {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }

  private _cleanup(): void {
    this._cleanupAutoUpdate?.();
    this._cleanupAutoUpdate = null;
    this.removeAttribute('data-position-placement');
  }

  private _onToggle = (event: ToggleEvent): void => {
    this.open = event.newState === 'open';

    // Dispatch a custom event for consumers to listen to
    this.dispatchEvent(
      new CustomEvent('forge-ai-overlay-toggle', {
        detail: {
          open: this.open,
          newState: event.newState,
          oldState: event.oldState
        },
        bubbles: true,
        composed: true
      })
    );
  };

  public override render(): TemplateResult {
    return html`
      <div class="ai-overlay" popover="manual" @toggle=${this._onToggle}>
        <slot></slot>
      </div>
    `;
  }
}
