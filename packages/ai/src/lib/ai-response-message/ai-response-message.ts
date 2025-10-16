import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../ai-actions-toolbar/ai-actions-toolbar';
import '../core/popover/popover';

import styles from './ai-response-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-response-message': AiResponseMessageComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-response-message-action': CustomEvent<AiResponseMessageActionEventData>;
  }
}

export type AiResponseMessageActionType = 'refresh' | 'copy' | 'thumbs-up' | 'thumbs-down';

export interface AiResponseMessageActionEventData {
  action: AiResponseMessageActionType;
}

export const AiResponseMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-response-message';

/**
 * @tag forge-ai-response-message
 *
 * @event {CustomEvent<AiResponseMessageActionEventData>} forge-ai-response-message-action - Fired when an action button is clicked.
 */
@customElement(AiResponseMessageComponentTagName)
export class AiResponseMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @state()
  private _overlayOpen = false;

  @state()
  private _mousePosition: { x: number; y: number } | null = null;

  private _hoverTimeoutId: number | null = null;
  private _messageContainer: HTMLElement | null = null;

  private _handleMouseEnter = (): void => {
    if (this._hoverTimeoutId) {
      clearTimeout(this._hoverTimeoutId);
      this._hoverTimeoutId = null;
    }
    this._overlayOpen = true;
  };

  private _handleMouseMove = (event: MouseEvent): void => {
    this._mousePosition = { x: event.clientX, y: event.clientY };
  };

  private _handleMouseLeave = (): void => {
    this._hoverTimeoutId = window.setTimeout(() => {
      this._overlayOpen = false;
    }, 100); // Small delay to allow seamless hover to overlay
  };

  private _handleOverlayMouseEnter = (): void => {
    if (this._hoverTimeoutId) {
      clearTimeout(this._hoverTimeoutId);
      this._hoverTimeoutId = null;
    }
  };

  private _handleOverlayMouseLeave = (): void => {
    this._overlayOpen = false;
  };

  private _handleOverlayToggle = (event: CustomEvent<{ open: boolean }>): void => {
    this._overlayOpen = event.detail.open;
  };

  get #messageContainer(): TemplateResult {
    return html`
      <div
        class="ai-message-container"
        @mouseenter=${this._handleMouseEnter}
        @mousemove=${this._handleMouseMove}
        @mouseleave=${this._handleMouseLeave}>
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }

  get #actionsToolbarOverlay(): TemplateResult {
    return html`
      <forge-ai-popover
        .anchor=${this._messageContainer}
        placement="top-end"
        .open=${this._overlayOpen}
        @ai-popover-toggle=${this._handleOverlayToggle}>
        <div
          class="toolbar-container"
          @mouseenter=${this._handleOverlayMouseEnter}
          @mouseleave=${this._handleOverlayMouseLeave}>
          <forge-ai-actions-toolbar
            @forge-ai-actions-toolbar-action=${this._handleToolbarAction}></forge-ai-actions-toolbar>
        </div>
      </forge-ai-popover>
    `;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this._handleKeyDown);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  public override firstUpdated(): void {
    this._messageContainer = this.shadowRoot?.querySelector('.ai-message-container') as HTMLElement;
  }

  private _handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this._overlayOpen) {
      this._overlayOpen = false;
    }
  };

  private _handleToolbarAction(event: CustomEvent<{ action: AiResponseMessageActionType }>): void {
    this._overlayOpen = false; // Close overlay when action is clicked
    this._emitActionEvent(event.detail.action);
  }

  private _emitActionEvent(action: AiResponseMessageActionType): void {
    const event = new CustomEvent<AiResponseMessageActionEventData>('forge-ai-response-message-action', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { action }
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html` <div class="grid-container">${this.#messageContainer} ${this.#actionsToolbarOverlay}</div> `;
  }
}
