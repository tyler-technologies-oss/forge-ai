import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AssistantResponse, StreamEvent, ToolCall, ToolDefinition, ResponseItem } from '../ai-chatbot/types.js';
import { MarkdownStreamController } from '../ai-chatbot/markdown-stream-controller.js';
import type { ForgeAiResponseMessageToolbarFeedbackEventData } from '../ai-response-message-toolbar';

import '../ai-response-message-toolbar';
import '../ai-chatbot/ai-chatbot-tool-call.js';
import '../ai-agent-tool-group';
import '../ai-event-stream-viewer';
import '../core/popover/popover.js';
import '../core/tooltip/tooltip.js';

import styles from './ai-assistant-response.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-assistant-response': AiAssistantResponseComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-assistant-response-copy': CustomEvent<{ responseId: string }>;
    'forge-ai-assistant-response-resend': CustomEvent<{ responseId: string }>;
    'forge-ai-assistant-response-thumbs-up': CustomEvent<ForgeAiAssistantResponseFeedbackEventData>;
    'forge-ai-assistant-response-thumbs-down': CustomEvent<ForgeAiAssistantResponseFeedbackEventData>;
  }
}

export interface ForgeAiAssistantResponseFeedbackEventData {
  responseId: string;
  feedback?: string;
}

export const AiAssistantResponseComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-assistant-response';

/**
 * @tag forge-ai-assistant-response
 *
 * @summary Renders a complete assistant response with interleaved text chunks and tool calls.
 *
 * @event {CustomEvent<{ responseId: string }>} forge-ai-assistant-response-copy - Fired when copy action is clicked
 * @event {CustomEvent<{ responseId: string }>} forge-ai-assistant-response-resend - Fired when resend action is clicked
 * @event {CustomEvent<ForgeAiAssistantResponseFeedbackEventData>} forge-ai-assistant-response-thumbs-up - Fired when thumbs up is clicked
 * @event {CustomEvent<ForgeAiAssistantResponseFeedbackEventData>} forge-ai-assistant-response-thumbs-down - Fired when thumbs down is clicked
 */
@customElement(AiAssistantResponseComponentTagName)
export class AiAssistantResponseComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public response!: AssistantResponse;

  @property({ attribute: false })
  public tools?: Map<string, ToolDefinition>;

  @property({ type: Boolean, attribute: 'enable-reactions' })
  public enableReactions = false;

  @property({ type: Boolean, attribute: 'debug-mode' })
  public debugMode = false;

  @state()
  private _debugPopoverOpen = false;

  @query('#debug-btn')
  private _debugButton?: HTMLButtonElement;

  #internals = this.attachInternals();
  #markdownController!: MarkdownStreamController;

  readonly #debugIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a6 6 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20z" />
    </svg>
  `;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#markdownController = new MarkdownStreamController(this);
  }

  public override willUpdate(): void {
    this.#updateEmptyState();
  }

  get #hasVisibleContent(): boolean {
    return this.response.children.some(child => {
      if (child.type === 'text') {
        return child.content.trim().length > 0;
      }
      if (this.debugMode) {
        return true;
      }
      const toolCall = child.data;
      const isAgentTool = toolCall.type === 'agent';
      if (isAgentTool) {
        return true;
      }
      const toolDef = this.tools?.get(toolCall.name);
      return !!toolDef?.renderer && toolCall.status === 'complete';
    });
  }

  #updateEmptyState(): void {
    const isEmpty = !this.#hasVisibleContent && this.response.status !== 'complete';
    if (isEmpty) {
      this.#internals.states.add('empty');
    } else {
      this.#internals.states.delete('empty');
    }
  }

  #renderTextChunk(child: ResponseItem & { type: 'text' }): TemplateResult | typeof nothing {
    if (!child.content.trim()) {
      return nothing;
    }
    const renderedHtml = this.#markdownController.getCachedHtml(child.messageId, child.content);
    return html`<div class="text-chunk">${unsafeHTML(renderedHtml)}</div>`;
  }

  #renderToolCall(toolCall: ToolCall): TemplateResult | typeof nothing {
    const toolDefinition = this.tools?.get(toolCall.name);

    if (!this.debugMode) {
      if (!toolDefinition?.renderer || toolCall.status !== 'complete') {
        return nothing;
      }
    }

    return html`<forge-ai-chatbot-tool-call
      .toolCall=${toolCall}
      .toolDefinition=${toolDefinition}
      ?debug-mode=${this.debugMode}></forge-ai-chatbot-tool-call>`;
  }

  get #children(): (TemplateResult | typeof nothing)[] {
    const results: (TemplateResult | typeof nothing)[] = [];
    let agentToolBuffer: ToolCall[] = [];

    const flushAgentTools = (): void => {
      if (agentToolBuffer.length > 0) {
        results.push(html`<forge-ai-agent-tool-group .toolCalls=${[...agentToolBuffer]}></forge-ai-agent-tool-group>`);
        agentToolBuffer = [];
      }
    };

    for (const child of this.response.children) {
      if (child.type === 'text') {
        flushAgentTools();
        results.push(this.#renderTextChunk(child));
      } else {
        const toolCall = child.data;
        const isAgentTool = toolCall.type === 'agent';

        if (isAgentTool && !this.debugMode) {
          agentToolBuffer.push(toolCall);
        } else {
          flushAgentTools();
          results.push(this.#renderToolCall(toolCall));
        }
      }
    }

    flushAgentTools();
    return results;
  }

  #handleToolbarAction(event: CustomEvent<{ action: string }>): void {
    const action = event.detail.action;
    const eventType = `forge-ai-assistant-response-${action}`;
    const bubbleEvent = new CustomEvent(eventType, {
      detail: { responseId: this.response.id }
    });
    this.dispatchEvent(bubbleEvent);
  }

  #handleToolbarFeedback(event: CustomEvent<ForgeAiResponseMessageToolbarFeedbackEventData>): void {
    const { action, feedback } = event.detail;
    const eventType: keyof HTMLElementEventMap =
      action === 'positive' ? 'forge-ai-assistant-response-thumbs-up' : 'forge-ai-assistant-response-thumbs-down';
    const bubbleEvent = new CustomEvent<ForgeAiAssistantResponseFeedbackEventData>(eventType, {
      detail: { responseId: this.response.id, feedback }
    });
    this.dispatchEvent(bubbleEvent);
  }

  #handleDebugClick(): void {
    this._debugPopoverOpen = !this._debugPopoverOpen;
  }

  #handleDebugPopoverToggle(event: CustomEvent<{ open: boolean }>): void {
    this._debugPopoverOpen = event.detail.open;
  }

  get #debugButton(): TemplateResult | typeof nothing {
    const hasDebugData = this.debugMode && (this.response.eventStream?.length ?? 0) > 0;
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
      <forge-ai-tooltip for="debug-btn" placement="bottom">Event Stream</forge-ai-tooltip>
    `;
  }

  get #debugPopover(): TemplateResult | typeof nothing {
    const hasDebugData = this.debugMode && this.response.eventStream;
    if (!hasDebugData) {
      return nothing;
    }

    return html`
      <forge-ai-popover
        .anchor=${this._debugButton as Element | null}
        .open=${this._debugPopoverOpen}
        id="debug-popover"
        placement="right"
        .flip=${true}
        .shift=${true}
        @forge-ai-popover-toggle=${this.#handleDebugPopoverToggle}>
        <forge-ai-event-stream-viewer
          .events=${this.response.eventStream as StreamEvent[]}></forge-ai-event-stream-viewer>
      </forge-ai-popover>
    `;
  }

  get #toolbar(): TemplateResult | typeof nothing {
    if (this.response.status !== 'complete') {
      return nothing;
    }

    const hasTextContent = this.response.children.some(
      child => child.type === 'text' && child.content.trim().length > 0
    );

    if (!hasTextContent) {
      return nothing;
    }

    return html`
      <div class="toolbar-container">
        <forge-ai-response-message-toolbar
          ?enable-reactions=${this.enableReactions}
          feedback-type=${ifDefined(this.response.feedback?.type)}
          feedback-reason=${ifDefined(this.response.feedback?.reason)}
          @forge-ai-response-message-toolbar-action=${this.#handleToolbarAction}
          @forge-ai-response-message-toolbar-feedback=${this.#handleToolbarFeedback}>
        </forge-ai-response-message-toolbar>
        ${this.#debugButton}
      </div>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="assistant-response" ?data-complete=${this.response.status === 'complete'}>
        ${this.#children} ${this.#toolbar}
      </div>
      ${this.#debugPopover}
    `;
  }
}
