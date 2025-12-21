import { LitElement, html, unsafeCSS, type TemplateResult, nothing, type PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { ToolCall, ToolDefinition } from './types.js';
import { PopoverToggleEventData } from '../core/popover/popover.js';

import '../core/popover/popover.js';
import '../ai-thinking-indicator/ai-thinking-indicator.js';

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
  private _popoverOpen = false;

  @query('.info-button')
  private _infoButton?: HTMLButtonElement;

  #customRendererRef = createRef<HTMLDivElement>();
  #renderedElement?: HTMLElement | DocumentFragment;

  #handleButtonClick(_evt: Event): void {
    this._popoverOpen = !this._popoverOpen;
  }

  #handlePopoverToggle(evt: CustomEvent<PopoverToggleEventData>): void {
    this._popoverOpen = evt.detail.newState === 'open';
  }

  #dispatchScrollRequest(): void {
    this.dispatchEvent(
      new CustomEvent('forge-ai-message-thread-scroll-request', {
        bubbles: true,
        composed: true
      })
    );
  }

  get #statusIcon(): TemplateResult | typeof nothing {
    switch (this.toolCall.status) {
      case 'pending':
      case 'executing':
        return html`<forge-ai-thinking-indicator></forge-ai-thinking-indicator>`;
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

  readonly #infoIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z" />
    </svg>
  `;

  get #customRenderer(): TemplateResult | typeof nothing {
    const renderer = this.toolDefinition?.renderer;
    if (!renderer || this.toolCall.status !== 'complete') {
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

      if (container && this.toolCall.status === 'complete') {
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

  get #popoverContent(): TemplateResult | typeof nothing {
    const hasArgs = Object.keys(this.toolCall.args).length > 0;
    const hasArgsBuffer = this.toolCall.argsBuffer && this.toolCall.argsBuffer.length > 0;
    const hasResult = this.toolCall.result !== undefined;

    return html`
      <div class="tool-details">
        ${hasArgsBuffer
          ? html`
              <div class="tool-section">
                <div class="section-label">Arguments (streaming):</div>
                <pre class="code-block">${this.toolCall.argsBuffer}</pre>
              </div>
            `
          : hasArgs
            ? html`
                <div class="tool-section">
                  <div class="section-label">Arguments:</div>
                  <pre class="code-block">${JSON.stringify(this.toolCall.args, null, 2)}</pre>
                </div>
              `
            : nothing}
        ${hasResult
          ? html`
              <div class="tool-section">
                <div class="section-label">Result:</div>
                <pre class="code-block">${JSON.stringify(this.toolCall.result, null, 2)}</pre>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  public override render(): TemplateResult {
    const isComplete = this.toolCall.status === 'complete';

    return html`
      <div class="tool-call">
        <span class="status-icon">${this.#statusIcon}</span>
        <span class="tool-name">${this.toolDefinition?.displayName ?? this.toolCall.name}</span>
        ${isComplete
          ? html`
              <button
                class="forge-icon-button forge-icon-button--small info-button"
                type="button"
                aria-label="${this._popoverOpen ? 'Hide' : 'Show'} tool details"
                aria-expanded="${this._popoverOpen}"
                @click=${this.#handleButtonClick}>
                ${this.#infoIcon}
              </button>
            `
          : nothing}
      </div>
      ${isComplete
        ? html`
            <forge-ai-popover
              .anchor=${this._infoButton as Element | null}
              .open=${this._popoverOpen}
              placement="bottom-start"
              .flip=${true}
              @forge-ai-popover-toggle=${this.#handlePopoverToggle}>
              ${this.#popoverContent}
            </forge-ai-popover>
          `
        : nothing}
      ${this.#customRenderer}
    `;
  }
}
