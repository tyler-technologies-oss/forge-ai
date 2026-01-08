import { LitElement, html, type TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { type OverlayPlacement, type OverlayOffset } from '../overlay/overlay.js';
import '../overlay/overlay.js';

import styles from './popover.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-popover': ForgeAiPopoverComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-popover-toggle': CustomEvent<PopoverToggleEventData>;
  }
}

export interface PopoverToggleEventData {
  open: boolean;
  newState: string;
  oldState: string;
}

export type PopoverPlacement = OverlayPlacement;

export type PopoverOffset = OverlayOffset;

/**
 * @summary A popover component that provides styled overlay functionality.
 *
 * @description
 * This component wraps the base overlay component with popover-specific styling
 * including animations, shadows, and rounded corners.
 *
 * @cssproperty--ai-popover-max-width - The maximum width of the popover.
 * @cssproperty--ai-popover-max-height - The maximum height of the popover.
 * @cssproperty--ai-popover-min-width - The minimum width of the popover.
 * @cssproperty--ai-popover-min-height - The minimum height of the popover.
 *
 * @slot - The default slot for popover content.
 */
@customElement('forge-ai-popover')
export class ForgeAiPopoverComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The anchor element to position the popover relative to.
   */
  @property({ type: Object })
  public anchor: Element | null = null;

  /**
   * The placement of the popover relative to the anchor.
   */
  @property()
  public placement: PopoverPlacement = 'bottom-start';

  /**
   * Whether the popover should flip to the opposite side when there's no space.
   */
  @property({ type: Boolean })
  public flip = false;

  /**
   * Whether the popover should shift to stay in view.
   */
  @property({ type: Boolean })
  public shift = false;

  /**
   * Whether the popover is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Whether to show an arrow pointing to the anchor element.
   */
  @property({ type: Boolean })
  public arrow = false;

  /**
   * The offset of the popover from the anchor element.
   * Can be a number (main axis offset) or an object with mainAxis, crossAxis, and alignmentAxis properties.
   */
  @property({ type: Object })
  public offset: PopoverOffset | undefined = undefined;

  /**
   * The dismiss mode for the popover.
   * - 'auto': Automatically closes on outside clicks and Escape key
   * - 'manual': Requires manual control to close
   */
  @property({ attribute: 'dismiss-mode' })
  public dismissMode: 'auto' | 'manual' = 'auto';

  @query('.ai-popover__arrow')
  private _arrowElement?: HTMLElement;

  private _onOverlayToggle = (event: CustomEvent): void => {
    this.open = event.detail.open;

    // Re-emit as popover-specific event
    this.dispatchEvent(
      new CustomEvent('forge-ai-popover-toggle', {
        detail: event.detail,
        bubbles: true,
        composed: true
      })
    );
  };

  public override render(): TemplateResult {
    return html`
      <forge-ai-overlay
        .anchor=${this.anchor}
        .placement=${this.placement}
        .flip=${this.flip}
        .shift=${this.shift}
        .offset=${this.offset}
        .open=${this.open}
        .arrowElement=${this.arrow ? this._arrowElement : null}
        .dismissMode=${this.dismissMode}
        @forge-ai-overlay-toggle=${this._onOverlayToggle}>
        <div class="ai-popover">
          ${this.arrow ? html`<div class="ai-popover__arrow"></div>` : null}
          <slot></slot>
        </div>
      </forge-ai-overlay>
    `;
  }
}
