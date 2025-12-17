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
              <forge-toolbar>
                <h2 class="forge-typography--heading4" slot="start">${data.title}</h2>
              </forge-toolbar>
            `
          : ''}

        <div class="table-container">
          <table class="forge-data-table">
            <thead>
              <tr>
                ${data.headers.map(header => html` <th class="forge-typography--label2">${header}</th> `)}
              </tr>
            </thead>
            <tbody>
              ${data.rows.map(
                row => html`
                  <tr>
                    ${row.map(cell => html` <td class="forge-typography--body2">${cell}</td> `)}
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
