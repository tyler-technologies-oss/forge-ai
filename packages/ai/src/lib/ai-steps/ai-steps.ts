import { LitElement, html, nothing, unsafeCSS, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { ToolCall, ToolDefinition } from '../ai-chatbot/types.js';
import { isToolCallSettled as isStepCallSettled } from '../ai-chatbot/utils.js';

import styles from './ai-steps.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-steps': AiStepsComponent;
  }
}

type StepActions = "FILTERED" | "JOINED" | "SEPARATED" | "CALLED" |  "SEARCHED" | "QUERIED" | "GROUPED" |  "SORTED"

export const AiStepsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-steps';

const MAX_DETAIL_LENGTH = 2000;

/**
 * @tag forge-ai-tool-call-indicator
 *
 * @summary Expandable timeline summarizing the tool calls made during an assistant response.
 *
 * @description
 * Collapsed, it shows an activity summary ("Running steps…" or "Used N steps · Xs"). When
 * expanded, it lists each tool call with its status. In debug mode the expanded view also
 * shows each tool's arguments and result.
 */
@customElement(AiStepsComponentTagName)
export class AiStepsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #internals = this.attachInternals();

  @property({ attribute: false })
  public stepCalls: ToolCall[] = [];

  @property({ attribute: false })
  public steps?: Map<string, ToolDefinition>;

  @state()
  private _expanded = false;

  @state()
  private _expandedRows = new Set<string>();

  readonly #chevronIcon = html`
    <svg
      class="chevron"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      fill="currentColor"
      aria-hidden="true">
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  `;

  get #count(): number {
    return this.stepCalls.length;
  }

  get #isRunning(): boolean {
    return this.stepCalls.some(tc => !isStepCallSettled(tc, this.steps?.get(tc.name)));
  }

  get #elapsedMs(): number | undefined {
    if (this.#isRunning) {
      return undefined;
    }
    const starts = this.stepCalls.map(tc => tc.startTimestamp ?? 0).filter(t => t > 0);
    const ends = this.stepCalls.map(tc => tc.endTimestamp ?? 0).filter(t => t > 0);
    if (!starts.length || !ends.length) {
      return undefined;
    }
    return Math.max(...ends) - Math.min(...starts);
  }

  get #formattedElapsed(): string {
    const ms = this.#elapsedMs ?? 0;
    if (ms < 1000) {
      return `${ms}ms`;
    }
    return `${Math.round(ms / 1000)}s`;
  }

  get #summaryLabel(): string {
    if (this.#isRunning) {
      return 'Running steps...';
    }
    const stepLabels = this.stepCalls.map((stepCall) => {
      const displayName = this.steps?.get(stepCall.name)?.displayName ?? stepCall.name;
      return `${displayName} ${stepCall.args.name} ${stepCall.args.type}`;
    })
    const visibleLabels = stepLabels.slice(0, 2);
    const remaining = stepLabels.length - visibleLabels.length;
    return remaining > 0 ? `${visibleLabels.join(', ')} +${remaining} more` : visibleLabels.join(', ');
  }

  #toggle(): void {
    this._expanded = !this._expanded;
  }

  #toggleRow(id: string): void {
    const next = new Set(this._expandedRows);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this._expandedRows = next;
  }

  #isRowExpanded(id: string): boolean {
    return this._expandedRows.has(id);
  }

  #hasDetail(toolCall: ToolCall): boolean {
    const hasArgs = !!toolCall.args && Object.keys(toolCall.args).length > 0;
    const showResult = toolCall.status === 'complete' && toolCall.result !== undefined;
    const showError = toolCall.status === 'error';
    return hasArgs || showResult || showError;
  }

  #rowDuration(toolCall: ToolCall): string | undefined {
    const { startTimestamp, endTimestamp } = toolCall;
    if (!startTimestamp || !endTimestamp || endTimestamp < startTimestamp) {
      return undefined;
    }
    const ms = endTimestamp - startTimestamp;
    return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`;
  }

  #formatValue(value: unknown): string {
    let text: string;
    try {
      text = JSON.stringify(value, null, 2);
    } catch {
      text = String(value);
    }
    if (text === undefined) {
      text = String(value);
    }
    if (text.length > MAX_DETAIL_LENGTH) {
      return `${text.slice(0, MAX_DETAIL_LENGTH)}… (truncated)`;
    }
    return text;
  }

  #highlightJson(value: unknown): TemplateResult {
    const escaped = this.#formatValue(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlighted = escaped.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
      match => {
        let cls = 'token-number';
        if (/^"/.test(match)) {
          cls = /:$/.test(match) ? 'token-key' : 'token-string';
        } else if (/true|false/.test(match)) {
          cls = 'token-boolean';
        } else if (/null/.test(match)) {
          cls = 'token-null';
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
    return html`${unsafeHTML(highlighted)}`;
  }

  #detailPayload(toolCall: ToolCall): Record<string, unknown> {
    // prettier-ignore
    const payload: Record<string, unknown> = {
      'tool_name': toolCall.name,
      'tool_call_id': toolCall.id,
      'status': toolCall.status
    };
    const duration = this.#rowDuration(toolCall);
    if (duration) {
      payload.duration = duration;
    }
    if (toolCall.args && Object.keys(toolCall.args).length > 0) {
      payload.input = toolCall.args;
    }
    if (toolCall.result !== undefined) {
      payload.output = toolCall.result;
    }
    return payload;
  }

  #statusBadge(toolCall: ToolCall): TemplateResult | typeof nothing {
    const duration = this.#rowDuration(toolCall);
    if (!duration) {
      return nothing;
    }
    return html`<span class="code-card__status" data-status=${toolCall.status}>${duration}</span>`;
  }

  #renderCard(toolCall: ToolCall): TemplateResult {
    const expanded = this.#isRowExpanded(toolCall.id);
    const regionId = `detail-${toolCall.id}`;
    const name = this.steps?.get(toolCall.name)?.displayName ?? toolCall.name;

    return html`
      <div class="code-card">
        <button
          class="code-card__header row-button"
          type="button"
          aria-expanded=${expanded}
          aria-controls=${regionId}
          @click=${() => this.#toggleRow(toolCall.id)}>
          ${this.#chevronIcon}
          <span class="focus-indicator"></span>
        </button>
        ${when(
          expanded,
          () => html`
            <div id=${regionId} class="code-card__body" role="region">
              <pre class="code-card__code">${this.#highlightJson(this.#detailPayload(toolCall))}</pre>
            </div>
          `
        )}
      </div>
    `;
  }

  #renderRow(toolCall: ToolCall): TemplateResult {
    if (this.#hasDetail(toolCall)) {
      return html`
        <div class="timeline-row" data-status=${toolCall.status}>
          <div class="row-header">${this.#renderCard(toolCall)}</div>
        </div>
      `;
    }

    const definition = this.steps?.get(toolCall.name);
    const name = definition?.displayName ?? toolCall.name;

    return html`
      <div class="timeline-row" data-status=${toolCall.status}>
        <div class="row-header">
          <span class="row-label">
            <span class="row-name">${name}${this.#statusBadge(toolCall)}</span>
          </span>
        </div>
      </div>
    `;
  }

  get #timeline(): TemplateResult {
    return html`
      <div class="timeline ${this._expanded ? 'expanded' : ''}">
        <div class="timeline-content">${this.stepCalls.map(tc => this.#renderRow(tc))}</div>
      </div>
    `;
  }

  public override render(): TemplateResult | typeof nothing {
    return html`
      <div class="steps">
        <div class="steps-count">
          ${this.steps?.size || 0} STEPS
        </div>
        <button class="summary" type="button" aria-expanded=${this._expanded} @click=${this.#toggle}>
          ${this.#chevronIcon}  
          <span class="status-text">${this.#summaryLabel}</span>
          <span class="focus-indicator"></span>
        </button>
        ${this.#timeline}
      </div>
    `;
  }
}
