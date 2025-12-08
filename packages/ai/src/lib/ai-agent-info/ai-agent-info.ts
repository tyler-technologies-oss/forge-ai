import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import styles from './ai-agent-info.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-agent-info': AiAgentInfoComponent;
  }
}

export const AiAgentInfoComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-agent-info';

export interface AgentInfo {
  name?: string;
  description?: string;
  identifier?: string;
  version?: string;
  model?: string;
  lastUpdated?: string;
}

/**
 * @tag forge-ai-agent-info
 *
 * @summary Displays agent information in a grid layout
 */
@customElement(AiAgentInfoComponentTagName)
export class AiAgentInfoComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Agent information to display
   */
  @property({ type: Object, attribute: false })
  public agentInfo?: AgentInfo;

  #formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(date);
    } catch {
      return dateString;
    }
  }

  public override render(): TemplateResult {
    if (!this.agentInfo) {
      return html`${nothing}`;
    }

    return html`
      <div class="agent-info-container">
        <div class="agent-info-header">
          ${when(
            this.agentInfo.name,
            () => html`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Name</div>
                <div class="forge-label-value__value">${this.agentInfo?.name}</div>
              </div>
            `
          )}
          ${when(
            this.agentInfo.version,
            () => html`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Version</div>
                <div class="forge-label-value__value">${this.agentInfo?.version}</div>
              </div>
            `
          )}
          ${when(
            this.agentInfo.lastUpdated,
            () => html`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Last Updated</div>
                <div class="forge-label-value__value">${this.agentInfo?.lastUpdated ? this.#formatDate(this.agentInfo.lastUpdated) : ''}</div>
              </div>
            `
          )}
        </div>
        ${when(
          this.agentInfo.description,
          () => html`
            <div class="forge-label-value">
              <div class="forge-label-value__label">Description</div>
              <div class="forge-label-value__value">${this.agentInfo?.description}</div>
            </div>
          `
        )}
        <div class="agent-info-grid">
          ${when(
            this.agentInfo.identifier,
            () => html`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Identifier</div>
                <div class="forge-label-value__value">${this.agentInfo?.identifier}</div>
              </div>
            `
          )}
          ${when(
            this.agentInfo.model,
            () => html`
              <div class="forge-label-value">
                <div class="forge-label-value__label">Model</div>
                <div class="forge-label-value__value">${this.agentInfo?.model}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
