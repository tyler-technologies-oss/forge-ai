import { LitElement, html, nothing, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import type { IColumnConfiguration, IPaginatorChangeEventData } from '@tylertech/forge';

import styles from './data-table.scss?inline';

interface DataTableProps {
  title?: string;
  description?: string;
  data?: Record<string, unknown>[];
  columns?: IColumnConfiguration[];
  pageSize?: number;
}

@customElement('agentui-data-table')
export class AgentUIDataTableComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public titleText: string = '';
  @property({ type: String }) public description?: string;
  @property({ type: Array }) public data: Record<string, unknown>[] = [];
  @property({ type: Array }) public columns: IColumnConfiguration[] = [];
  @property({ type: Number }) public pageSize = 10;

  @query('forge-table') private _table?: HTMLElement & { data: unknown[]; columnConfigurations: unknown[] };

  #currentPageIndex = 0;

  protected override firstUpdated(): void {
    this.#updateTableData();
  }

  protected override updated(changedProps: Map<string, unknown>): void {
    if (changedProps.has('data') || changedProps.has('columns') || changedProps.has('pageSize')) {
      this.#currentPageIndex = 0;
      this.#updateTableData();
    }
  }

  #updateTableData(): void {
    if (!this._table) {
      return;
    }

    const showPaginator = this.data.length > this.pageSize;
    this._table.data = showPaginator ? this.data.slice(0, this.pageSize) : this.data;
    this._table.columnConfigurations = this.columns;
  }

  #handlePageChange(e: CustomEvent<IPaginatorChangeEventData>): void {
    this.#currentPageIndex = e.detail.pageIndex;
    if (!this._table) {
      return;
    }

    this._table.data = this.data.slice(this.#currentPageIndex * this.pageSize, (this.#currentPageIndex + 1) * this.pageSize);
  }

  get #showPaginator(): boolean {
    return this.data.length > this.pageSize;
  }

  protected override render(): TemplateResult {
    return html`
      <forge-card>
        ${this.titleText
          ? html`
              <forge-toolbar>
                <h2 class="forge-typography--heading5" slot="start">${this.titleText}</h2>
              </forge-toolbar>
            `
          : nothing}
        ${this.description ? html`<p class="data-table__description forge-typography--body2">${this.description}</p>` : nothing}
        <forge-table></forge-table>
        ${this.#showPaginator
          ? html`
              <forge-toolbar no-divider>
                <forge-paginator
                  slot="end"
                  page-index="0"
                  .pageSize=${this.pageSize}
                  .total=${this.data.length}
                  .pageSizeOptions=${[this.pageSize]}
                  @forge-paginator-change=${this.#handlePageChange}>
                </forge-paginator>
              </forge-toolbar>
            `
          : nothing}
      </forge-card>
    `;
  }
}

export function DataTable(ctx: ComponentContext<DataTableProps>): TemplateResult {
  const { title = '', description = '', data = [], columns = [], pageSize = 10 } = ctx.props;

  return html`
    <agentui-data-table .titleText=${title} .description=${description} .data=${data} .columns=${columns} .pageSize=${pageSize}>
    </agentui-data-table>
  `;
}

export const DataTableSchema = z.object({
  title: z.string().describe('Title above the table').optional(),
  description: z.string().describe('Description below the header').optional(),
  data: z
    .array(z.record(z.string(), z.unknown()))
    .describe('Array of row objects, e.g. [{name:"Alice",amount:30}]')
    .optional(),
  columns: z
    .array(
      z.object({
        property: z.string().describe('Object key to display'),
        header: z.string().describe('Column header text')
      })
    )
    .describe('Column definitions. MUST use "property" and "header" keys.')
    .optional(),
  pageSize: z.number().describe('Rows per page (default 10)').optional()
});

declare global {
  interface HTMLElementTagNameMap {
    'agentui-data-table': AgentUIDataTableComponent;
  }
}
