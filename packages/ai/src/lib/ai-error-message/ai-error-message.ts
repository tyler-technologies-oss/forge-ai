import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-error-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-error-message': AiErrorMessageComponent;
  }
}

export const AiErrorMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-error-message';

/**
 * @tag forge-ai-error-message
 *
 * @summary Displays error messages using Forge inline message banner style.
 *
 * @slot title - The error title text
 * @slot - The error message content
 */
@customElement(AiErrorMessageComponentTagName)
export class AiErrorMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <div class="forge-inline-message">
        <svg
          class="forge-inline-message__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
        <div class="forge-inline-message__title">
          <slot name="title"></slot>
        </div>
        <div class="forge-inline-message__content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
