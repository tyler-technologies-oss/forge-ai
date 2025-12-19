import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ToolCall } from '../../../../../lib/ai-chatbot';
import '../../../../../lib/ai-artifact';
import styles from './data-table.scss?inline';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFilterList } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconFilterList]);

interface TableData {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
}

@customElement('data-table')
export class DataTable extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall?: ToolCall;

  // Support for standalone usage without toolCall
  @property({ type: String, attribute: 'table-title' })
  public tableTitle?: string;

  @property({ attribute: false })
  public headers?: string[];

  @property({ attribute: false })
  public rows?: (string | number)[][];

  private get tableData(): TableData | null {
    // If toolCall is provided, use its args (chatbot mode)
    if (this.toolCall) {
      return this.toolCall.args as unknown as TableData;
    }

    // Otherwise use direct properties (standalone mode)
    if (this.headers && this.rows) {
      return {
        title: this.tableTitle,
        headers: this.headers,
        rows: this.rows
      };
    }

    return null;
  }

  render() {
    const data = this.tableData;
    if (!data || !data.headers || !data.rows) {
      return html`<forge-ai-artifact
        ><p class="forge-typography--body2">No table data available</p></forge-ai-artifact
      >`;
    }

    return html`
      <forge-ai-artifact class="artifact">
        ${data.title ? html`<h2 class="title" slot="start">${data.title}</h2>` : ''}

        <forge-stack slot="actions" alignment="center" inline>
          <forge-icon-button aria-label="Filter data">
            <forge-icon name="filter_list"></forge-icon>
          </forge-icon-button>
        </forge-stack>

        <div class="table-container">
          <table class="data-table">
            <thead class="table-head">
              <tr class="table-row">
                ${data.headers.map(
                  header => html`
                    <th>
                      <div class="column-header">${header}</div>
                    </th>
                  `
                )}
              </tr>
            </thead>
            <tbody>
              ${data.rows.map(
                row => html`
                  <tr class="table-row">
                    ${row.map(cell => html` <td>${cell}</td> `)}
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </forge-ai-artifact>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'data-table': DataTable;
  }
}
