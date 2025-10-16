import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import styles from './ai-empty-state.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-empty-state': AiEmptyStateComponent;
  }
}

export const AiEmptyStateComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-empty-state';

/**
 * @tag forge-ai-empty-state
 *
 * @slot - The custom welcome message content.
 * @slot actions - The actions or suggestions to display below the message.
 */
@customElement(AiEmptyStateComponentTagName)
export class AiEmptyStateComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ flatten: true })
  private _slottedNodes!: Node[];

  readonly #messageSlot = html`<slot @slotchange=${this.#handleSlotChange}></slot>`;

  readonly #defaultMessage = html`Welcome to AI Assistant! Start a conversation by asking a question or describing what
  you'd like help with.`;

  get #messageContent(): TemplateResult {
    const hasCustomContent = this._slottedNodes.length > 0;
    return when(
      hasCustomContent,
      () => this.#messageSlot,
      () => this.#defaultMessage
    );
  }

  #handleSlotChange(): void {
    this.requestUpdate();
  }

  public override render(): TemplateResult {
    return html` <div class="forge-page-state">
      <div class="welcome-container">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 92 92" class="graphic">
          <defs>
            <style>
              .cls-1,
              .cls-7 {
                fill: none;
              }
              .cls-2 {
                fill: #d0dbf4;
                fill-rule: evenodd;
              }
              .cls-3 {
                fill: #fff;
                stroke-width: 2.5px;
              }
              .cls-3,
              .cls-4,
              .cls-5 {
                stroke: #586ab1;
                stroke-linecap: round;
                stroke-linejoin: round;
              }
              .cls-4 {
                fill: #fcbf12;
              }
              .cls-4,
              .cls-5 {
                stroke-width: 2px;
              }
              .cls-5 {
                fill: #5cc5cd;
              }
              .cls-6 {
                fill: #586ab1;
              }
              .cls-7 {
                stroke: #d1d1d1;
                stroke-miterlimit: 10;
                stroke-width: 0.75px;
              }
            </style>
          </defs>
          <title>books-spot</title>
          <rect class="cls-1" x="0.09" y="0.05" width="92" height="92" />
          <path class="cls-2" d="M46.1,82a36,36,0,1,0-36-36A36,36,0,0,0,46.1,82Z" />
          <rect class="cls-3" x="13.81" y="64.02" width="64.9" height="8.3" rx="1" />
          <rect class="cls-4" x="12.19" y="61.41" width="67.72" height="3.69" rx="1" />
          <rect class="cls-4" x="12.19" y="71.99" width="67.72" height="3.69" rx="1" />
          <rect
            class="cls-5"
            x="25.75"
            y="8.77"
            width="12.26"
            height="51.94"
            rx="1"
            transform="translate(14.61 -9.14) rotate(21.06)" />
          <rect
            class="cls-6"
            x="20.89"
            y="47.21"
            width="10.63"
            height="4.51"
            transform="translate(19.53 -6.11) rotate(21.06)" />
          <line class="cls-7" x1="15.05" y1="67.62" x2="77.45" y2="67.69" />
          <line class="cls-7" x1="15.05" y1="69.49" x2="77.45" y2="69.55" />
          <rect class="cls-4" x="47.18" y="8.29" width="12.26" height="51.94" rx="1" />
          <rect class="cls-6" x="47.99" y="47.79" width="10.63" height="4.51" />
          <polygon class="cls-6" points="55.47 17.96 53.08 15.96 50.75 17.96 50.75 8.81 55.47 8.81 55.47 17.96" />
          <rect class="cls-5" x="59.69" y="8.29" width="12.26" height="51.94" rx="1" />
          <rect class="cls-6" x="60.49" y="47.79" width="10.63" height="4.51" />
        </svg>
        <div class="forge-page-state__message message">${this.#messageContent}</div>
        <slot name="actions"></slot>
      </div>
    </div>`;
  }
}
