import { LitElement, html, unsafeCSS, type TemplateResult, nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { ToolCall, ToolDefinition } from './types.js';

import '../ai-artifact';

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

  @state()
  private _expanded = false;

  #customRendererRef = createRef<HTMLDivElement>();
  #renderedElement?: HTMLElement | DocumentFragment;

  #toggleExpanded(): void {
    this._expanded = !this._expanded;
  }

  get #statusIcon(): TemplateResult | typeof nothing {
    switch (this.toolCall.status) {
      case 'pending':
      case 'executing':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
            <path d="M8 5.14v14l11-7z" />
          </svg>
        `;
      case 'complete':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
            <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59z" />
          </svg>
        `;
      case 'error':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
        `;
      default:
        return nothing;
    }
  }

  get #statusText(): string {
    switch (this.toolCall.status) {
      case 'pending':
        return 'Pending';
      case 'executing':
        return 'Executing';
      case 'complete':
        return 'Complete';
      case 'error':
        return 'Error';
      default:
        return '';
    }
  }

  get #expandIcon(): TemplateResult {
    return this._expanded
      ? html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        `
      : html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
            <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" />
          </svg>
        `;
  }

  get #customRenderer(): TemplateResult | typeof nothing {
    const renderer = this.toolDefinition?.renderer;
    if (!renderer || this.toolCall.status !== 'complete') {
      return nothing;
    }

    if (renderer.useSlot) {
      return html`<slot name="tool-render-${this.toolCall.id}"></slot>`;
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

      if (container && this.toolCall.status === 'complete') {
        if (this.#renderedElement && container.contains(this.#renderedElement as Node)) {
          container.removeChild(this.#renderedElement as Node);
        }

        if (renderer?.elementTag) {
          const element = document.createElement(renderer.elementTag) as HTMLElement & { toolCall: ToolCall };
          element.toolCall = this.toolCall;
          this.#renderedElement = element;
          container.appendChild(element);
        } else if (renderer?.render) {
          this.#renderedElement = renderer.render(this.toolCall);
          container.appendChild(this.#renderedElement as Node);
        }
      }
    }
  }

  get #details(): TemplateResult | typeof nothing {
    if (!this._expanded) {
      return nothing;
    }

    return html`
      <div class="forge-expansion-panel ${this._expanded ? 'forge-expansion-panel--open' : ''}">
        <div class="forge-expansion-panel__content" id="tool-details">
          <div class="tool-details">
            ${Object.keys(this.toolCall.args).length > 0
              ? html`
                  <div class="tool-section">
                    <div class="section-label">Arguments:</div>
                    <pre class="code-block">${JSON.stringify(this.toolCall.args, null, 2)}</pre>
                  </div>
                `
              : nothing}
            ${this.toolCall.result !== undefined
              ? html`
                  <div class="tool-section">
                    <div class="section-label">Result:</div>
                    <pre class="code-block">${JSON.stringify(this.toolCall.result, null, 2)}</pre>
                  </div>
                `
              : nothing}
          </div>
        </div>
      </div>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <forge-ai-artifact data-status="${this.toolCall.status}" data-expanded="${this._expanded}">
        <div slot="start" class="tool-start">
          <span class="status-icon">${this.#statusIcon}</span>
          <span class="tool-name">${this.toolCall.name}</span>
        </div>
        <div slot="actions" class="tool-actions">
          <span class="status-text">${this.#statusText}</span>
          <button
            class="forge-icon-button forge-icon-button--small"
            aria-label="${this._expanded ? 'Collapse' : 'Expand'} tool details"
            aria-expanded="${this._expanded}"
            aria-controls="tool-details"
            @click=${this.#toggleExpanded}>
            ${this.#expandIcon}
          </button>
        </div>
        ${this.#details}
      </forge-ai-artifact>
      ${this.#customRenderer}
    `;
  }
}
