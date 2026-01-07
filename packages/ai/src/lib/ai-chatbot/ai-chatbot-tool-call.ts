import { LitElement, html, unsafeCSS, type TemplateResult, nothing, type PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { StreamEvent, ToolCall, ToolDefinition } from './types.js';
import { PopoverToggleEventData } from '../core/popover/popover.js';

import '../core/popover/popover.js';
import '../ai-spinner/ai-spinner.js';
import '../ai-event-stream-viewer';
import '../core/tooltip/tooltip.js';

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

  @property({ type: Boolean, attribute: 'debug-mode' })
  public debugMode = false;

  @state()
  private _popoverOpen = false;

  @state()
  private _debugPopoverOpen = false;

  @query('.info-button')
  private _infoButton?: HTMLButtonElement;

  @query('#debug-btn')
  private _debugButton?: HTMLButtonElement;

  #customRendererRef = createRef<HTMLDivElement>();
  #renderedElement?: HTMLElement | DocumentFragment;

  #handleButtonClick(_evt: Event): void {
    this._popoverOpen = !this._popoverOpen;
  }

  #handlePopoverToggle(evt: CustomEvent<PopoverToggleEventData>): void {
    this._popoverOpen = evt.detail.newState === 'open';
  }

  #handleDebugClick(): void {
    this._debugPopoverOpen = !this._debugPopoverOpen;
  }

  #handleDebugPopoverToggle(event: CustomEvent<{ open: boolean }>): void {
    this._debugPopoverOpen = event.detail.open;
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
        return html`<forge-ai-spinner size="small"></forge-ai-spinner>`;
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

  readonly #debugIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a6 6 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20z" />
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

  get #debugButton(): TemplateResult | typeof nothing {
    const hasDebugData = this.debugMode && (this.toolCall.eventStream?.length ?? 0) > 0;
    if (!hasDebugData) {
      return nothing;
    }

    return html`
      <button
        id="debug-btn"
        aria-label="View event stream"
        class="forge-icon-button forge-icon-button--tonal forge-icon-button--small debug-button"
        @click=${this.#handleDebugClick}>
        ${this.#debugIcon}
      </button>
      ${this._debugPopoverOpen
        ? html`<forge-ai-tooltip for="debug-btn" placement="bottom">Event Stream</forge-ai-tooltip>`
        : nothing}
    `;
  }

  get #debugPopover(): TemplateResult | typeof nothing {
    const hasDebugData = this.debugMode && this.toolCall.eventStream;
    if (!hasDebugData) {
      return nothing;
    }

    return html`
      <forge-ai-popover
        .anchor=${this._debugButton as Element | null}
        .open=${this._debugPopoverOpen}
        id="debug-popover"
        placement="right"
        @forge-ai-popover-toggle=${this.#handleDebugPopoverToggle}>
        <forge-ai-event-stream-viewer
          .events=${this.toolCall.eventStream as StreamEvent[]}></forge-ai-event-stream-viewer>
      </forge-ai-popover>
    `;
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

  public override render(): TemplateResult | typeof nothing {
    const isComplete = this.toolCall.status === 'complete';

    if (!this.debugMode) {
      const hasCustomRenderer = this.toolDefinition?.renderer && isComplete;
      if (!hasCustomRenderer) {
        return nothing;
      }
      return html`${this.#customRenderer}`;
    }

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
              ${this.#debugButton}
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
      ${this.#debugPopover} ${this.#customRenderer}
    `;
  }
}
