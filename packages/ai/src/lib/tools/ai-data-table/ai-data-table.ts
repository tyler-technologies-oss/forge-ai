import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '$lib/ai-artifact';
import styles from './data-table.scss?inline';
import '../ai-paginator/ai-paginator.ts';
import { ToolCall } from '$lib/ai-chatbot';

interface TableData {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
}

@customElement('data-table')
export class DataTable extends LitElement {
  public static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall?: ToolCall;

  // Support for standalone usage without toolCall
  @property({ type: String, attribute: 'table-title' })
  public tableTitle?: string;

  @property({ attribute: false })
  public headers?: string[];

  @property({ attribute: false })
  public rows?: (string | number)[][];

  @property({ type: Boolean, attribute: 'show-paginator' })
  public showPaginator = false;

  @property({ type: Number, attribute: 'max-number-of-rows' })
  public maxNumberOfRows = 10;

  @property({ type: Number, attribute: 'current-page' })
  public currentPage = 1;

  private get _totalPages(): number {
    const data = this._tableData;
    if (!data || !data.rows) {
      return 1;
    }
    return Math.ceil(data.rows.length / this.maxNumberOfRows);
  }

  private get _paginatedRows(): (string | number)[][] {
    const data = this._tableData;
    if (!data || !data.rows || !this.showPaginator) {
      return data?.rows || [];
    }

    const startIndex = (this.currentPage - 1) * this.maxNumberOfRows;
    const endIndex = startIndex + this.maxNumberOfRows;
    return data.rows.slice(startIndex, endIndex);
  }

  #handlePageChange(event: CustomEvent): void {
    this.currentPage = event.detail.currentPage;
  }

  private get _tableData(): TableData | null {
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

  public override render(): TemplateResult {
    const data = this._tableData;
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
            </svg>
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
              ${this._paginatedRows.map(
                row => html`
                  <tr class="table-row">
                    ${row.map(cell => html` <td>${cell}</td> `)}
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>

        ${this.showPaginator
          ? html`<data-table-paginator
              current-page="${this.currentPage}"
              total-pages="${this._totalPages}"
              @page-change=${this.#handlePageChange}></data-table-paginator>`
          : ''}
      </forge-ai-artifact>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'data-table': DataTable;
  }
}
