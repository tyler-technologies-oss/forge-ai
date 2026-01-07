import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { StreamEvent } from '../ai-chatbot/types.js';

import styles from './ai-event-stream-viewer.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-event-stream-viewer': AiEventStreamViewerComponent;
  }
}

export const AiEventStreamViewerComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-event-stream-viewer';

/**
 * @tag forge-ai-event-stream-viewer
 *
 * @summary Displays a timeline of adapter events with expandable JSON data.
 */
@customElement(AiEventStreamViewerComponentTagName)
export class AiEventStreamViewerComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public events: StreamEvent[] = [];

  #expandedEvents = new Set<number>();

  #toggleEvent(index: number): void {
    if (this.#expandedEvents.has(index)) {
      this.#expandedEvents.delete(index);
    } else {
      this.#expandedEvents.add(index);
    }
    this.requestUpdate();
  }

  #formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const ms = date.getMilliseconds().toString().padStart(3, '0');
    return `${time}.${ms}`;
  }

  #getEventTheme(type: string): 'default' | 'success' | 'error' | 'warning' | 'info-primary' | 'info-secondary' {
    if (type.includes('error')) {
      return 'error';
    }
    if (type.includes('end') || type.includes('result')) {
      return 'success';
    }
    if (type.includes('start')) {
      return 'info-primary';
    }
    if (type.includes('delta') || type.includes('args')) {
      return 'info-secondary';
    }
    return 'default';
  }

  #getEventLabel(type: string): string {
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  #handleCopy(event: StreamEvent): void {
    const jsonString = JSON.stringify(event.data, undefined, 2);
    navigator.clipboard.writeText(jsonString);
  }

  #renderCopyButton(event: StreamEvent): TemplateResult {
    return html`
      <button
        type="button"
        aria-label="Copy to clipboard"
        class="forge-icon-button forge-icon-button--small copy-button"
        @click=${(e: Event) => {
          e.stopPropagation();
          this.#handleCopy(event);
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z" />
        </svg>
      </button>
    `;
  }

  #renderEvent(event: StreamEvent, index: number): TemplateResult {
    const expanded = this.#expandedEvents.has(index);
    const theme = this.#getEventTheme(event.type);
    const label = this.#getEventLabel(event.type);
    const badgeClass = classMap({
      'forge-badge': true,
      [`forge-badge--${theme}`]: theme !== 'default'
    });
    const iconClass = classMap({
      'expansion-icon': true,
      expanded
    });
    return html`
      <li class="forge-list-item">
        <button type="button" class="event-row" @click=${() => this.#toggleEvent(index)}>
          <svg class=${iconClass} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.39-1.02-.39-1.41.01z" />
          </svg>
          <span class=${badgeClass}>${label}</span>
          <span class="timestamp">${this.#formatTimestamp(event.timestamp)}</span>
        </button>
      </li>
    `;
  }

  #renderExpansionPanel(event: StreamEvent, index: number): TemplateResult | typeof nothing {
    const expanded = this.#expandedEvents.has(index);
    if (!expanded) {
      return nothing;
    }
    const expansionPanelClass = classMap({
      'forge-expansion-panel': true,
      'forge-expansion-panel--open': expanded
    });
    return html`
      <div class=${expansionPanelClass}>
        <div class="forge-expansion-panel__content">
          <div class="event-data-container">
            ${this.#renderCopyButton(event)}
            <pre class="event-data">${JSON.stringify(event.data, null, 2)}</pre>
          </div>
        </div>
      </div>
    `;
  }

  get #emptyState(): TemplateResult | typeof nothing {
    if (this.events.length) {
      return nothing;
    }
    return html`<div class="empty-state">No events found</div>`;
  }

  public override render(): TemplateResult {
    return html`
      <div class="event-stream">
        <div class="header">Event Stream (${this.events.length})</div>
        ${this.#emptyState}
        <ul class="forge-list forge-list--dense">
          ${this.events.flatMap((event, i) => [this.#renderEvent(event, i), this.#renderExpansionPanel(event, i)])}
        </ul>
      </div>
    `;
  }
}
