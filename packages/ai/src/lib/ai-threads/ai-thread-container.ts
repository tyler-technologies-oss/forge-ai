import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-thread-container.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thread-container': AiThreadContainerComponent;
  }
}

export const AiThreadContainerComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thread-container';

/**
 * @tag forge-ai-thread-container
 */
@customElement(AiThreadContainerComponentTagName)
export class AiThreadContainerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`<div class="container">
      <div class="header">
        <slot name="thread-header"></slot>
      </div>
      <div class="left">
        <slot name="thread-left"></slot>
      </div>
      <div class="body">
        <slot name="thread-body"></slot>
      </div>
    </div>`;
  }
}
