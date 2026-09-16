import { LitElement, PropertyValues, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { when } from 'lit/directives/when.js';
import type { AssistantResponse, ToolCall, ToolDefinition } from '../ai-chatbot/types.js';
import { isToolCallSettled as isStepCallSettled } from '../ai-chatbot/utils.js';

import styles from './ai-steps.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-steps': AiStepsComponent;
  }
}

export const AiStepsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-steps';

const MAX_DETAIL_LENGTH = 2000;

/**
 * A step label split into prose and an optional value, returned from
 * {@link AiStepsComponent.stepLabel}. The component renders `code` as an inline chip after `label`,
 * so consumers get the styling without needing to build markup themselves.
 */
export interface AiStepLabel {
  /** Leading prose, e.g. `'Filtered by'`. */
  label: string;
  /** Optional trailing value rendered as an inline `<code>` chip, e.g. `'crime_category'`. */
  code?: string;
}

/**
 * Passed to {@link AiStepsComponent.stepLabel} for each step.
 */
export interface AiStepLabelContext {
  /**
   * The label the component would render on its own: the matching `ToolDefinition.displayName`, or
   * the raw `toolCall.name` when the tool has no display name. Reformat or restructure this rather
   * than rebuilding the label from scratch.
   */
  displayName: string;
  /** The tool call the label is being rendered for, for status- or argument-dependent wording. */
  toolCall: ToolCall;
}

/**
 * @tag forge-ai-steps
 *
 * @summary Expandable timeline summarizing the tool calls made during an assistant response.
 *
 * @description
 * Collapsed, it shows a step count and an activity summary of the tool calls performed. When
 * expanded, it lists each tool call as a row in a vertical timeline along with its status. Steps
 * that have arguments or a result are rendered as detail cards showing each key/value pair;
 * steps without any detail render as a simple labeled row.
 *
 * When `status` is provided, the component auto-collapses once the run completes
 * (`status === 'complete'`) and the summary row only renders once every step has settled. When
 * `status` is omitted, the component is always expanded and the summary row is hidden.
 *
 * Step labels come from the `tools` map: each step is labeled with its matching
 * `ToolDefinition.displayName`, falling back to the raw `toolCall.name` for tools that don't declare
 * one. Naming steps is therefore a matter of filling in `displayName`, and the component makes no
 * assumption about how tool names are structured.
 *
 * `stepLabel` is an optional formatter layered on top of that. It receives the resolved display name
 * plus the tool call and returns either a replacement string or an `AiStepLabel` (`{ label, code }`),
 * whose `code` portion renders as an inline chip. Use it to reword, shorten, or split labels without
 * building markup or depending on Lit; omit it and `displayName` is used verbatim.
 *
 * @property {ToolCall[]} toolCalls - The tool calls to render as timeline steps
 * @property {Map<string, ToolDefinition>} tools - Tool definitions supplying each step's `displayName`
 * @property {Function} stepLabel - Optional formatter for the resolved display name; returns a string or `AiStepLabel`
 * @property {string} status - Status of the overall response/run these steps belong to; `'complete'` collapses the timeline
 */
@customElement(AiStepsComponentTagName)
export class AiStepsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCalls: ToolCall[] = [];

  @property({ attribute: false })
  public tools?: Map<string, ToolDefinition>;

  /**
   * Optional formatter for step labels. Labels are based on `ToolDefinition.displayName` from the
   * `tools` map (falling back to the raw `toolCall.name`); this hook receives that resolved name and
   * can reword or restructure it, e.g. `({ displayName }) => displayName.toUpperCase()`. Return an
   * {@link AiStepLabel} to render part of the label as an inline `<code>` chip. Omit it and the
   * resolved display name is used as-is.
   */
  @property({ attribute: false })
  public stepLabel?: (context: AiStepLabelContext) => string | AiStepLabel;

  /**
   * Status of the overall response/run these steps belong to — not the status of the steps
   * themselves, which comes from each `ToolCall`. Only `'complete'` is meaningful: it collapses the
   * timeline once every step has settled. Any other value means the run is still in progress, which
   * keeps the timeline expanded and the summary row hidden. Omit it entirely and the component stays
   * expanded and self-contained (e.g. in isolation/Storybook).
   */
  @property({ type: String, reflect: true, attribute: 'status' })
  public status?: AssistantResponse['status'];

  // If status is not provided, we default to expanded
  @state()
  private _expanded = this.status === undefined;

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

  get #isFinished(): boolean {
    const isRunning = this.toolCalls.some(tc => !isStepCallSettled(tc, this.tools?.get(tc.name)));
    return !isRunning && this.status === 'complete';
  }

  #labelFor(toolCall: ToolCall): string | TemplateResult {
    const displayName = this.tools?.get(toolCall.name)?.displayName ?? toolCall.name;
    const label = this.stepLabel?.({ displayName, toolCall }) ?? displayName;

    if (typeof label === 'string') {
      return label;
    }

    return label.code ? html`${label.label} <code>${label.code}</code>` : html`${label.label}`;
  }

  get #summaryLabel(): TemplateResult {
    const stepLabels = this.toolCalls.map(toolCall => html`<span>${this.#labelFor(toolCall)}</span>`);
    const visibleLabels = stepLabels.slice(0, 2);
    const remaining = stepLabels.length - visibleLabels.length;
    return remaining > 0
      ? html`${join(visibleLabels, html`, `)} +${remaining} more`
      : html`${join(visibleLabels, html`, `)}`;
  }

  #toggle(): void {
    this._expanded = !this._expanded;
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

  #renderNoDetailStep(toolCall: ToolCall): TemplateResult {
    const { status, startTimestamp, endTimestamp } = toolCall;
    const durationMs =
      startTimestamp && endTimestamp && endTimestamp >= startTimestamp ? endTimestamp - startTimestamp : undefined;
    const duration =
      durationMs === undefined
        ? undefined
        : durationMs < 1000
          ? `${durationMs}ms`
          : `${(durationMs / 1000).toFixed(1)}s`;
    const statusBadge = duration
      ? html`<span class="code-card__status" data-status=${status}>${duration}</span>`
      : nothing;

    return html`
      <div class="timeline-row" data-status=${status}>
        <div class="row-header">
          ${this.#rowMarker}
          <span class="row-label">
            <span class="row-name">${this.#labelFor(toolCall)}${statusBadge}</span>
          </span>
        </div>
      </div>
    `;
  }

  #renderStep(toolCall: ToolCall): TemplateResult {
    const { args, result, status } = toolCall;
    const hasDetail =
      (!!args && Object.keys(args).length > 0) || (status === 'complete' && result !== undefined) || status === 'error';

    if (!hasDetail) {
      return this.#renderNoDetailStep(toolCall);
    }

    const resultDetails =
      result && typeof result === 'object'
        ? (result as Record<string, unknown>)
        : result !== undefined
          ? { result }
          : {};
    const stepDetails = { ...args, ...resultDetails };

    return html`
      <div class="timeline-row" data-status=${status}>
        <div class="row-header">
          ${this.#rowMarker}
          <div class="step-card">
            <span class="step-card-title">${this.#labelFor(toolCall)}</span>
            <div class="step-card-body">
              <div class="step-card-result">${this.#formatValue(stepDetails)}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  get #isExpanded(): boolean {
    if (this.status === undefined) {
      return this._expanded;
    }
    return !this.#isFinished || this._expanded;
  }

  get #steps(): TemplateResult {
    return html`
      <div
        id="timeline-content"
        class="timeline ${this.#isExpanded ? 'expanded' : ''}"
        aria-hidden=${this.#isExpanded ? 'false' : 'true'}>
        <div class="timeline-content">${this.toolCalls.map(tc => this.#renderStep(tc))}</div>
      </div>
    `;
  }

  get #stepsSummary(): TemplateResult | typeof nothing {
    return when(
      this.#isFinished || this.status === undefined,
      () => html`
        <button
          class="summary"
          type="button"
          aria-expanded=${this._expanded}
          aria-controls="timeline-content"
          @click=${this.#toggle}>
          ${this.#chevronIcon}
          <span class="status-text">${this.#summaryLabel}</span>
          <span class="focus-indicator"></span>
        </button>
      `
    );
  }

  get #stepsCountLabel(): string {
    const count = this.toolCalls.length;
    return `${count} STEP${count === 1 ? '' : 'S'}`;
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    // Collapse rather than toggle: the intent is one-directional, and toggling leaves the component
    // expanded on any later transition back into 'complete' (e.g. an element reused for a second run).
    if (changedProperties.has('status') && this.status === 'complete') {
      this._expanded = false;
    }
  }

  public override render(): TemplateResult | typeof nothing {
    return html`
      <div class="steps">
        <div class="steps-count">${this.#stepsCountLabel}</div>
        ${this.#stepsSummary} ${this.#steps}
      </div>
    `;
  }
}
