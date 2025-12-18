import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ToolCall } from '../../../lib/ai-chatbot';
import styles from './data-table.scss?inline';

interface TableData {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
}

@customElement('data-table')
export class DataTable extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  render() {
    // For pure rendering tools, data comes from LLM via args, not result
    const data = this.toolCall.args as unknown as TableData;
    if (!data || !data.headers || !data.rows) {
      return html`<forge-card><p class="forge-typography--body2">No table data available</p></forge-card>`;
    }

    return html`
      <forge-card>
        ${data.title
          ? html`
              <forge-toolbar class="table-toolbar">
                <h2 class="title" slot="start">${data.title}</h2>
                <forge-stack slot="end" alignment="center" inline>
                  <forge-icon name="filter_list" external></forge-icon>
                  <forge-icon name="more_vert" external></forge-icon>
                </forge-stack>
              </forge-toolbar>
            `
          : ''}

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
      </forge-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'data-table': DataTable;
  }
}
