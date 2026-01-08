import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../ai-actions-toolbar';
import type { ForgeAiActionsToolbarActionEventData } from '../ai-actions-toolbar';
import type { StreamEvent } from '../ai-chatbot/types.js';
import '../ai-event-stream-viewer';
import '../core/popover/popover.js';
import '../core/tooltip/tooltip.js';

import styles from './ai-response-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-response-message': AiResponseMessageComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-response-message-copy': CustomEvent<void>;
    'forge-ai-response-message-refresh': CustomEvent<void>;
    'forge-ai-response-message-thumbs-up': CustomEvent<void>;
    'forge-ai-response-message-thumbs-down': CustomEvent<void>;
  }
}

export const AiResponseMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-response-message';

/**
 * @tag forge-ai-response-message
 *
 * @property {boolean} complete - Whether the message is complete. Toolbar only shows when true.
 *
 * @event {CustomEvent<void>} forge-ai-response-message-copy - Fired when copy action is clicked.
 * @event {CustomEvent<void>} forge-ai-response-message-refresh - Fired when refresh action is clicked.
 * @event {CustomEvent<void>} forge-ai-response-message-thumbs-up - Fired when thumbs-up action is clicked.
 * @event {CustomEvent<void>} forge-ai-response-message-thumbs-down - Fired when thumbs-down action is clicked.
 */
@customElement(AiResponseMessageComponentTagName)
export class AiResponseMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  public complete = false;

  @property({ type: Boolean, attribute: 'enable-reactions' })
  public enableReactions = false;

  @property({ type: Boolean, attribute: 'has-debug-data' })
  public hasDebugData = false;

  @property({ attribute: false })
  public eventStream?: StreamEvent[];

  @query('#debug-btn')
  private _debugButton!: HTMLButtonElement;

  @state()
  private _debugPopoverOpen = false;

  readonly #messageContainer = html`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `;

  #handleDebugClick(): void {
    this._debugPopoverOpen = !this._debugPopoverOpen;
  }

  #handlePopoverToggle(event: CustomEvent<{ open: boolean }>): void {
    this._debugPopoverOpen = event.detail.open;
  }

  get #debugButton(): TemplateResult | typeof nothing {
    if (!this.hasDebugData) {
      return nothing;
    }

    return html`
      <button
        id="debug-btn"
        aria-label="View event stream"
        class="forge-icon-button forge-icon-button--tonal forge-icon-button--small debug-button"
        @click=${this.#handleDebugClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a6 6 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20z" />
        </svg>
      </button>
      ${this._debugPopoverOpen
        ? html`<forge-ai-tooltip for="debug-btn" placement="bottom">Event Stream</forge-ai-tooltip>`
        : nothing}
    `;
  }

  get #debugPopover(): TemplateResult | typeof nothing {
    if (!this.hasDebugData || !this.eventStream) {
      return nothing;
    }

    return html`
      <forge-ai-popover
        .anchor=${this._debugButton}
        .open=${this._debugPopoverOpen}
        id="debug-popover"
        placement="right"
        @forge-ai-popover-toggle=${this.#handlePopoverToggle}>
        <forge-ai-event-stream-viewer .events=${this.eventStream}></forge-ai-event-stream-viewer>
      </forge-ai-popover>
    `;
  }

  get #actionsToolbar(): TemplateResult {
    return html`
      <div class="toolbar-container">
        <forge-ai-actions-toolbar
          ?enable-reactions=${this.enableReactions}
          @forge-ai-actions-toolbar-action=${this.#handleToolbarAction}></forge-ai-actions-toolbar>
        ${this.#debugButton}
      </div>
      ${this.#debugPopover}
    `;
  }

  #handleToolbarAction(event: CustomEvent<ForgeAiActionsToolbarActionEventData>): void {
    const action = event.detail.action;
    const eventType = `forge-ai-response-message-${action}`;
    const bubbleEvent = new CustomEvent(eventType, {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(bubbleEvent);
  }

  public override render(): TemplateResult {
    return html` <div class="grid-container">${this.#messageContainer} ${this.#actionsToolbar}</div> `;
  }
}
