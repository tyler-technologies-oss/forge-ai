import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-user-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-user-message': AiUserMessageComponent;
  }
}

export const AiUserMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-user-message';

/**
 * @tag forge-ai-user-message
 */
@customElement(AiUserMessageComponentTagName)
export class AiUserMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #messageContainer = html`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `;

  public override render(): TemplateResult {
    return html` <div class="grid-container">${this.#messageContainer}</div> `;
  }
}
