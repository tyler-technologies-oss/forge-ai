import { LitElement, PropertyValues, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { when } from 'lit/directives/when.js';

import styles from './ai-steps.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-steps': AiStepsComponent;
  }
}

export const AiStepsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-steps';

const MAX_DETAIL_LENGTH = 2000;

/** Lifecycle state of an individual step. */
export type AiStepStatus = 'pending' | 'running' | 'complete' | 'error';

/**
 * A single step in the timeline. Every field is supplied by the agent — the component derives no
 * labels of its own and makes no assumption about how the agent names its work.
 */
export interface AiStep {
  /** Agent-provided label for the step, e.g. `'Filtered by crime category'`. */
  label: string;
  /**
   * Optional value rendered as an inline `<code>` chip after `label`, for the part of the step that
   * reads better set apart — a column, table, or query fragment, e.g. `'crime_category'`. Supplying
   * it as its own field rather than embedding markup in `label` keeps the input plain JSON.
   */
  code?: string;
  /** Optional agent-provided elaboration, rendered as a detail card beneath the label. */
  detail?: string;
  /** Lifecycle state of this step. Defaults to `'complete'` when omitted. */
  status?: AiStepStatus;
}

/**
 * @tag forge-ai-steps
 *
 * @summary Expandable timeline summarizing the steps an agent took while producing a response.
 *
 * @description
 * Collapsed, it shows a step count and a summary of the first couple of step labels. When expanded,
 * it lists each step as a row in a vertical timeline along with its status. Steps carrying a
 * `detail` render as detail cards; steps without one render as a simple labeled row. A step may also
 * carry a `code` value, rendered as an inline chip after the label.
 *
 * This is a presentational primitive: it renders whatever `steps` it is given and knows nothing
 * about tool calls or tool definitions. `forge-ai-tool-steps` is the tool renderer that maps an
 * agent's `displaySteps` tool call onto these properties.
 *
 * While `running` is `true` the timeline stays expanded and the summary row is hidden. When
 * `running` flips back to `false` the timeline auto-collapses, leaving the summary row as the way
 * back in. An element that mounts with `running` already `false` renders expanded, so static usage
 * (a finished run, or a Storybook story) is readable without interaction.
 *
 * @property {AiStep[]} steps - The steps to render as timeline rows
 * @property {boolean} running - Whether the run producing these steps is still in progress
 */
@customElement(AiStepsComponentTagName)
export class AiStepsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public steps: AiStep[] = [];

  /**
   * Whether the run producing these steps is still in progress. While `true` the timeline is held
   * open and the summary row is hidden; the transition back to `false` collapses the timeline.
   */
  @property({ type: Boolean, reflect: true })
  public running = false;

  @state()
  private _expanded = true;

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

  // Shared so a step reads the same in the collapsed summary as it does in its timeline row.
  #renderLabel(step: AiStep): TemplateResult {
    return step.code ? html`${step.label} <code>${step.code}</code>` : html`${step.label}`;
  }

  get #summaryLabel(): TemplateResult {
    const stepLabels = this.steps.map(step => html`<span>${this.#renderLabel(step)}</span>`);
    const visibleLabels = stepLabels.slice(0, 2);
    const remaining = stepLabels.length - visibleLabels.length;
    return remaining > 0
      ? html`${join(visibleLabels, html`, `)} +${remaining} more`
      : html`${join(visibleLabels, html`, `)}`;
  }

  #toggle(): void {
    this._expanded = !this._expanded;
  }

  #renderNoDetailStep(step: AiStep): TemplateResult {
    return html`
      <div class="timeline-row" data-status=${step.status ?? 'complete'}>
        <div class="row-header">
          ${this.#rowMarker}
          <span class="row-label">
            <span class="row-name">${this.#renderLabel(step)}</span>
          </span>
        </div>
      </div>
    `;
  }

  #renderStep(step: AiStep): TemplateResult {
    const detail = step.detail;
    if (!detail) {
      return this.#renderNoDetailStep(step);
    }

    const truncated = detail.length > MAX_DETAIL_LENGTH ? `${detail.slice(0, MAX_DETAIL_LENGTH)}… (truncated)` : detail;

    return html`
      <div class="timeline-row" data-status=${step.status ?? 'complete'}>
        <div class="row-header">
          ${this.#rowMarker}
          <div class="step-card">
            <span class="step-card-title">${this.#renderLabel(step)}</span>
            <div class="step-card-body">
              <div class="step-card-result">${truncated}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  get #isExpanded(): boolean {
    return this.running || this._expanded;
  }

  get #steps(): TemplateResult {
    return html`
      <div
        id="timeline-content"
        class="timeline ${this.#isExpanded ? 'expanded' : ''}"
        aria-hidden=${this.#isExpanded ? 'false' : 'true'}>
        <div class="timeline-content">${this.steps.map(step => this.#renderStep(step))}</div>
      </div>
    `;
  }

  get #stepsSummary(): TemplateResult | typeof nothing {
    return when(
      !this.running,
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
    const count = this.steps.length;
    return `${count} STEP${count === 1 ? '' : 'S'}`;
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    // Collapse only on a true -> false transition. Guarding on the previous value keeps an element
    // that mounts with `running` already false (a finished run, or a static story) expanded, and
    // still collapses again when the same element is reused for a second run.
    if (changedProperties.has('running') && !this.running && changedProperties.get('running') === true) {
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
