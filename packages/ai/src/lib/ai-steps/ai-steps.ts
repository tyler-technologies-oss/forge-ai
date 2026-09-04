import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { ToolCall, ToolDefinition } from '../ai-chatbot/types.js';
import { isToolCallSettled as isStepCallSettled } from '../ai-chatbot/utils.js';

import styles from './ai-steps.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-steps': AiStepsComponent;
  }
}

export const AiStepsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-steps';

/** Maps the action segment of a `toolCall.name` (e.g. `searched` in `searched.customers_table`) to its display label. */
const ACTION_STEPS: Record<string, string> = {
  called: 'Called',
  filtered: 'Filtered by',
  grouped: 'Grouped',
  joined: 'Joined',
  queried: 'Queried',
  searched: 'Searched',
  separated: 'Separated',
  sorted: 'Sorted'
};

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

  @property({ attribute: false })
  public toolCalls: ToolCall[] = [];

  @property({ attribute: false })
  public tools?: Map<string, ToolDefinition>;

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

  readonly #rowMarker: TemplateResult = html`<span class="row-marker"></span>`;

  get #count(): number {
    return this.toolCalls.length;
  }

  get #isRunning(): boolean {
    return this.toolCalls.some(tc => !isStepCallSettled(tc, this.tools?.get(tc.name)));
  }

  #actionDisplayName(toolCall: ToolCall): string {
    const [action] = toolCall.name.split('.');
    return ACTION_STEPS[action] ?? action;
  }

  #stepLabel(toolCall: ToolCall): TemplateResult {
    const toolDisplayName = this.tools?.get(toolCall.name)?.displayName ?? toolCall.name;
    return html`${this.#actionDisplayName(toolCall)} <code>${toolDisplayName}</code>`;
  }

  get #summaryLabel(): TemplateResult {
    const stepLabels = this.toolCalls.map(toolCall => html`<span>${this.#stepLabel(toolCall)}</span>`);
    const visibleLabels = stepLabels.slice(0, 2);
    const remaining = stepLabels.length - visibleLabels.length;
    return remaining > 0 ? html`${visibleLabels} +${remaining} more` : html`${visibleLabels}`;
  }

  #toggle(): void {
    this._expanded = !this._expanded;
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

  #formatValue(value: unknown): TemplateResult {
    if (!value || typeof value !== 'object') {
      return html`${String(value)}`;
    }

    return html`${Object.entries(value).map(([key, propertyValue]) => {
      const text = String(propertyValue);
      const truncated = text.length > MAX_DETAIL_LENGTH ? `${text.slice(0, MAX_DETAIL_LENGTH)}… (truncated)` : text;
      return html`<div class="detail-c">
        <span class="detail-key">${key}</span> <span class="detail-value">${truncated}</span>
      </div>`;
    })}`;
  }

  #statusBadge(toolCall: ToolCall): TemplateResult | typeof nothing {
    const duration = this.#rowDuration(toolCall);
    if (!duration) {
      return nothing;
    }
    return html`<span class="code-card__status" data-status=${toolCall.status}>${duration}</span>`;
  }

  #renderCard(toolCall: ToolCall): TemplateResult {
    return html`
      <div class="step-card">
        <span class="step-card-title">${this.#stepLabel(toolCall)}</span>
        <div class="step-card-body">
          <div class="step-card-result">${this.#formatValue(toolCall.result)}</div>
        </div>
      </div>
    `;
  }

  #renderRow(toolCall: ToolCall): TemplateResult {
    if (this.#hasDetail(toolCall)) {
      return html`
        <div class="timeline-row" data-status=${toolCall.status}>
          <div class="row-header">${this.#rowMarker}${this.#renderCard(toolCall)}</div>
        </div>
      `;
    }

    const definition = this.tools?.get(toolCall.name);
    const name = definition?.displayName ?? toolCall.name;

    return html`
      <div class="timeline-row" data-status=${toolCall.status}>
        <div class="row-header">
          ${this.#rowMarker}
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
        <div class="timeline-content">${this.toolCalls.map(tc => this.#renderRow(tc))}</div>
      </div>
    `;
  }

  get #summaryButton(): TemplateResult | typeof nothing {
    return when(
      !this.#isRunning,
      () => html`
        <button class="summary" type="button" aria-expanded=${this._expanded} @click=${this.#toggle}>
          ${this.#chevronIcon}
          <span class="status-text">${this.#summaryLabel}</span>
          <span class="focus-indicator"></span>
        </button>
      `
    );
  }

  public override render(): TemplateResult | typeof nothing {
    return html`
      <div class="steps">
        <div class="steps-count">${this.#count} STEPS</div>
        ${this.#summaryButton} ${this.#timeline}
      </div>
    `;
  }
}
