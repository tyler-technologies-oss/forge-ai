import { LitElement, html, unsafeCSS, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ToolCall } from '../ai-chatbot/types.js';

import '../ai-spinner/ai-spinner.js';

import styles from './ai-agent-tool-group.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-agent-tool-group': AiAgentToolGroupComponent;
  }
}

export const AiAgentToolGroupComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-agent-tool-group';

/**
 * @tag forge-ai-agent-tool-group
 *
 * @summary Groups and displays consecutive server-side (agent) tool calls with a collapsible UI.
 *
 * @description
 * Shows "Processing..." with spinner while tool calls are executing.
 * After completion, shows "Tasks completed (N)" with an expandable list of tool names.
 */
@customElement(AiAgentToolGroupComponentTagName)
export class AiAgentToolGroupComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCalls: ToolCall[] = [];

  @property({ type: Boolean, reflect: true })
  public expanded = false;

  get #isExecuting(): boolean {
    return this.toolCalls.some(tc => tc.status === 'executing' || tc.status === 'parsing' || tc.status === 'pending');
  }

  get #hasError(): boolean {
    return this.toolCalls.some(tc => tc.status === 'error');
  }

  get #statusText(): string {
    const count = this.toolCalls.length;
    const taskWord = count === 1 ? 'task' : 'tasks';

    if (this.#isExecuting) {
      return `Processing... (${count} ${taskWord})`;
    }

    if (this.#hasError) {
      const errorCount = this.toolCalls.filter(tc => tc.status === 'error').length;
      return `Tasks completed with ${errorCount} ${errorCount === 1 ? 'error' : 'errors'} (${count})`;
    }

    return `Tasks completed (${count})`;
  }

  readonly #checkmarkIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" fill="currentColor">
      <path
        d="M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z" />
    </svg>
  `;

  readonly #chevronIcon = html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      fill="currentColor"
      class="chevron">
      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  `;

  readonly #errorIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" />
    </svg>
  `;

  readonly #itemCheckIcon = html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16" width="16" fill="currentColor">
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
    </svg>
  `;

  #handleToggle(): void {
    if (!this.#isExecuting) {
      this.expanded = !this.expanded;
    }
  }

  get #statusIcon(): TemplateResult {
    if (this.#isExecuting) {
      return html`<forge-ai-spinner size="small"></forge-ai-spinner>`;
    }
    if (this.#hasError) {
      return this.#errorIcon;
    }
    return this.#checkmarkIcon;
  }

  get #toolList(): TemplateResult | typeof nothing {
    if (!this.expanded) {
      return nothing;
    }

    return html`
      <div class="forge-list forge-list--dense tool-list">
        ${this.toolCalls.map(
          tc => html`
            <div
              class="forge-list-item forge-list-item--dense tool-item ${tc.status === 'error'
                ? 'tool-item--error'
                : ''}">
              <span class="forge-list-item__start tool-item__start">${this.#itemCheckIcon}</span>
              <span class="forge-list-item__text">${tc.name}</span>
              ${tc.status === 'error' ? html`<span class="forge-list-item__end error-badge">error</span>` : nothing}
            </div>
          `
        )}
      </div>
    `;
  }

  public override render(): TemplateResult {
    const canExpand = !this.#isExecuting;

    return html`
      <div class="agent-tool-group ${this.#hasError ? 'agent-tool-group--error' : ''}">
        <button
          type="button"
          class="forge-button header"
          ?disabled=${!canExpand}
          aria-expanded=${this.expanded}
          aria-label=${this.#statusText}
          @click=${this.#handleToggle}>
          <span class="status-icon">${this.#statusIcon}</span>
          <span class="status-text">${this.#statusText}</span>
          ${canExpand ? this.#chevronIcon : nothing}
        </button>
        ${this.#toolList}
      </div>
    `;
  }
}
