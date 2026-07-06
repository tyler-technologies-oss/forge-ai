import { LitElement, html, unsafeCSS, type TemplateResult, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { ToolCall, ToolDefinition } from './types.js';

import styles from './ai-chatbot-tool-call.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chatbot-tool-call': AiChatbotToolCallComponent;
  }
}

export const AiChatbotToolCallComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chatbot-tool-call';

/**
 * @tag forge-ai-chatbot-tool-call
 */
@customElement(AiChatbotToolCallComponentTagName)
export class AiChatbotToolCallComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  @property({ attribute: false })
  public toolDefinition?: ToolDefinition;

  #customRendererRef = createRef<HTMLDivElement>();
  #renderedElement?: HTMLElement | DocumentFragment;

  get #shouldRenderCustom(): boolean {
    const status = this.toolCall?.status;
    if (status === 'complete') {
      return true;
    }
    if (this.toolDefinition?.renderOnStart && (status === 'parsing' || status === 'executing')) {
      return true;
    }
    return false;
  }

  #dispatchScrollRequest(): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-message-thread-scroll-request', {
        bubbles: true,
        composed: true
      })
    );
  }

  get #customRenderer(): TemplateResult | typeof nothing {
    const renderer = this.toolDefinition?.renderer;
    if (!renderer || !this.#shouldRenderCustom) {
      return nothing;
    }

    if (renderer.elementTag || renderer.render) {
      return html`<div ${ref(this.#customRendererRef)}></div>`;
    }

    return nothing;
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('toolCall') || changedProperties.has('toolDefinition')) {
      const renderer = this.toolDefinition?.renderer;
      const container = this.#customRendererRef.value;

      if (container && this.#shouldRenderCustom) {
        if (this.#renderedElement && container.contains(this.#renderedElement as Node)) {
          container.removeChild(this.#renderedElement as Node);
        }

        if (renderer?.elementTag) {
          const element = document.createElement(renderer.elementTag) as HTMLElement & { toolCall: ToolCall };
          element.toolCall = this.toolCall;
          this.#renderedElement = element;
          container.appendChild(element);
          this.#dispatchScrollRequest();
        } else if (renderer?.render) {
          this.#renderedElement = renderer.render(this.toolCall);
          container.appendChild(this.#renderedElement as Node);
          this.#dispatchScrollRequest();
        }
      }
    }
  }

  public override render(): TemplateResult | typeof nothing {
    return this.#customRenderer;
  }
}
