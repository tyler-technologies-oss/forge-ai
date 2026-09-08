import { LitElement, html, unsafeCSS, type TemplateResult, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { ToolCall, ToolDefinition } from './types.js';
import { shouldShowToolRenderer } from './utils.js';

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
    return shouldShowToolRenderer(this.toolCall, this.toolDefinition);
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

    if (!changedProperties.has('toolCall') && !changedProperties.has('toolDefinition')) {
      return;
    }

    const container = this.#customRendererRef.value;
    if (!container || !this.#shouldRenderCustom) {
      return;
    }

    const renderer = this.toolDefinition?.renderer;

    if (renderer?.elementTag) {
      // Update the existing element in place rather than tearing it down and recreating it on
      // every args/status change: a live renderer (e.g. one awaiting user confirmation) may treat
      // disconnection as abandonment, so churning it while the tool call is still in flight can
      // reject work the renderer is actively waiting on.
      if (
        this.#renderedElement instanceof HTMLElement &&
        this.#renderedElement.tagName.toLowerCase() === renderer.elementTag
      ) {
        (this.#renderedElement as HTMLElement & { toolCall: ToolCall }).toolCall = this.toolCall;
        return;
      }

      const element = document.createElement(renderer.elementTag) as HTMLElement & { toolCall: ToolCall };
      element.toolCall = this.toolCall;
      this.#replaceRenderedElement(container, element);
    } else if (renderer?.render) {
      this.#replaceRenderedElement(container, renderer.render(this.toolCall));
    }
  }

  #replaceRenderedElement(container: HTMLDivElement, element: HTMLElement | DocumentFragment): void {
    if (this.#renderedElement && container.contains(this.#renderedElement as Node)) {
      container.removeChild(this.#renderedElement as Node);
    }
    this.#renderedElement = element;
    container.appendChild(element);
    this.#dispatchScrollRequest();
  }

  public override render(): TemplateResult | typeof nothing {
    return this.#customRenderer;
  }
}
