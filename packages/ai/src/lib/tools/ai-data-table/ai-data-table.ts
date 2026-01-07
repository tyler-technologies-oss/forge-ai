import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../ai-artifact/ai-artifact.ts';
import styles from './ai-data-table.scss?inline';
import '../ai-paginator/ai-paginator.ts';
import { ToolCall } from '$lib/ai-chatbot';

interface TableData {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  maxNumberOfRows?: number;
}

@customElement('ai-data-table')
export class DataTable extends LitElement {
  public static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  /** Current page number for pagination */
  @state()
  private _currentPage = 1;

  /** Current filter value for searching table data */
  @state()
  private _filterValue = '';

  private get _shouldShowPaginator(): boolean {
    const filteredRows = this._filteredRows;
    return filteredRows.length > this._maxNumberOfRows;
  }

  private get _totalPages(): number {
    const filteredRows = this._filteredRows;
    if (!filteredRows.length) {
      return 1;
    }
    return Math.ceil(filteredRows.length / this._maxNumberOfRows);
  }

  private get _filteredRows(): (string | number)[][] {
    const data = this._tableData;
    if (!data || !data.rows) {
      return [];
    }

    if (!this._filterValue.trim()) {
      return data.rows;
    }

    return data.rows.filter(row =>
      row.some(cell => String(cell).toLowerCase().includes(this._filterValue.toLowerCase()))
    );
  }

  private get _totalRows(): number {
    const data = this._tableData;
    return data?.rows?.length || 0;
  }

  private get _shouldShowEmptyState(): boolean {
    return this._filterValue.trim() !== '' && this._filteredRows.length === 0;
  }

  private get _paginatedRows(): (string | number)[][] {
    const filteredRows = this._filteredRows;
    if (!filteredRows.length || !this._shouldShowPaginator) {
      return filteredRows;
    }

    const startIndex = (this._currentPage - 1) * this._maxNumberOfRows;
    const endIndex = startIndex + this._maxNumberOfRows;
    return filteredRows.slice(startIndex, endIndex);
  }

  #handlePageChange(event: CustomEvent): void {
    this._currentPage = event.detail.currentPage;
  }

  #handleFilterInput(event: InputEvent): void {
    this._filterValue = (event.target as HTMLInputElement).value;
    // Reset to first page when filtering
    this._currentPage = 1;
  }

  get #emptyState(): TemplateResult {
    return html`
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="empty-state-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <h3 class="empty-state-title">No results found</h3>
        <p class="empty-state-message">
          No data matches your filter "${this._filterValue}". Try adjusting your search terms.
        </p>
      </div>
    `;
  }

  private get _tableData(): TableData | null {
    return this.toolCall.args as unknown as TableData;
  }

  private get _maxNumberOfRows(): number {
    const data = this._tableData;
    return data?.maxNumberOfRows || 10;
  }

  public override render(): TemplateResult {
    const data = this._tableData;
    if (!data || !data.headers || !data.rows) {
      return html`<forge-ai-artifact><p class="body2">No table data available</p></forge-ai-artifact>`;
    }

    return html`
      <forge-ai-artifact class="artifact">
        ${data.title ? html`<h2 class="title" slot="start">${data.title}</h2>` : ''}
        ${this._totalRows > 5
          ? html`
              <div class="actions" slot="actions">
                <label for="my-css-only-input" class="sr-only">Label</label>
                <div class="forge-field forge-field--small icon-field">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
                  </svg>
                  <input
                    autocomplete="off"
                    type="text"
                    id="my-css-only-input"
                    placeholder="Filter data"
                    .value=${this._filterValue}
                    @input=${this.#handleFilterInput} />
                </div>
              </div>
            `
          : ''}
        ${this._shouldShowEmptyState
          ? this.#emptyState
          : html`
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
            `}
        ${this._shouldShowPaginator
          ? html`<ai-paginator
              current-page="${this._currentPage}"
              total-pages="${this._totalPages}"
              @page-change=${this.#handlePageChange}></ai-paginator>`
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
