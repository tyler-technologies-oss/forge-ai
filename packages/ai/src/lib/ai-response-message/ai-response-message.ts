import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../ai-actions-toolbar';
import type { ForgeAiActionsToolbarActionEventData } from '../ai-actions-toolbar';

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

  readonly #messageContainer = html`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `;

  get #actionsToolbar(): TemplateResult {
    return html`
      <div class="toolbar-container">
        <forge-ai-actions-toolbar
          ?enable-reactions=${this.enableReactions}
          @forge-ai-actions-toolbar-action=${this.#handleToolbarAction}></forge-ai-actions-toolbar>
      </div>
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
