import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { z } from 'zod';
import type { ComponentContext } from '@tylertech/agent-ui-core';
import type { IColumnConfiguration, IPaginatorChangeEventData } from '@tylertech/forge';

interface DataTableProps {
  title?: string;
  description?: string;
  data?: Record<string, unknown>[];
  columns?: IColumnConfiguration[];
  pageSize?: number;
}

let tableIdCounter = 0;

export function DataTable(ctx: ComponentContext<DataTableProps>): TemplateResult {
  const { title = '', description = '', data = [], columns = [], pageSize = 10 } = ctx.props;
  const tableId = `data-table-${tableIdCounter++}`;

  const showPaginator = data.length > pageSize;

  const initTable = (el: Element | undefined): void => {
    if (!el) return;
    const table = el.querySelector('forge-table') as HTMLElement & { data: unknown[]; columnConfigurations: unknown[] };
    if (table) {
      table.data = showPaginator ? data.slice(0, pageSize) : data;
      table.columnConfigurations = columns;
    }
  };

  const handlePageChange = (e: CustomEvent<IPaginatorChangeEventData>): void => {
    const pageIndex = e.detail.pageIndex;
    const container = document.getElementById(tableId);
    if (container) {
      const table = container.querySelector('forge-table') as HTMLElement & { data: unknown[] };
      if (table) {
        table.data = data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
      }
    }
  };

  return html`
    <div id=${tableId} class="agentui-data-table" ${initTable as any}>
      <forge-card>
        ${title
          ? html`
              <forge-toolbar>
                <h2 class="forge-typography--heading5" slot="start">${title}</h2>
              </forge-toolbar>
            `
          : nothing}
        ${description ? html`<p class="agentui-data-table__description forge-typography--body2">${description}</p>` : nothing}
        <forge-table></forge-table>
        ${showPaginator
          ? html`
              <forge-toolbar no-divider>
                <forge-paginator
                  slot="end"
                  page-index="0"
                  .pageSize=${pageSize}
                  .total=${data.length}
                  .pageSizeOptions=${[pageSize]}
                  @forge-paginator-change=${handlePageChange}>
                </forge-paginator>
              </forge-toolbar>
            `
          : nothing}
      </forge-card>
    </div>
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
