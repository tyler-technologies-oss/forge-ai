import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-thinking-indicator.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thinking-indicator': AiThinkingIndicatorComponent;
  }
}

export const AiThinkingIndicatorComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thinking-indicator';

/**
 * @tag forge-ai-thinking-indicator
 *
 * @summary A thinking indicator component that displays three animated dots to show that the system is processing or awaiting a response.
 *
 * @description
 * The AI Thinking Indicator component provides a visual cue that the system is working on a response.
 * It displays three dots that animate in sequence from left to right, then bounce in a wave pattern,
 * creating an engaging loading animation perfect for chat interfaces.
 */
@customElement(AiThinkingIndicatorComponentTagName)
export class AiThinkingIndicatorComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #dotsTemplate = html`
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  `;

  public override render(): TemplateResult {
    return html`<div class="thinking-indicator">${this.#dotsTemplate}</div>`;
  }
}
