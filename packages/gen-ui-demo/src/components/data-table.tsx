import { useState, useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import { ForgeCard, ForgeToolbar, ForgePaginator } from '@tylertech/forge-react';
import type { IColumnConfiguration, IPaginatorChangeEventData } from '@tylertech/forge';
import { z } from 'zod';
import type { ComponentContext } from '../core';

interface DataTableProps {
  title?: string;
  description?: string;
  data?: Record<string, unknown>[];
  columns?: IColumnConfiguration[];
  pageSize?: number;
}

export function DataTable(ctx: ComponentContext): ReactElement {
  const props = ctx.props as DataTableProps;
  const { title = '', description = '', data = [], columns = [], pageSize = 10 } = props;

  const [pageIndex, setPageIndex] = useState(0);
  const tableRef = useRef<HTMLElement>(null);

  const showPaginator = data.length > pageSize;
  const pagedData = showPaginator ? data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize) : data;

  useEffect(() => {
    setPageIndex(0);
  }, [data]);

  useEffect(() => {
    if (tableRef.current) {
      (tableRef.current as any).data = pagedData;
      (tableRef.current as any).columnConfigurations = columns;
    }
  }, [pagedData, columns]);

  const handlePageChange = (evt: CustomEvent<IPaginatorChangeEventData>): void => {
    setPageIndex(evt.detail.pageIndex);
  };

  return (
    <div className="genui-data-table">
      <ForgeCard>
        {title && (
          <ForgeToolbar>
            <h2 className="forge-typography--heading5" slot="start">{title}</h2>
          </ForgeToolbar>
        )}
        {description && <p className="genui-data-table__description forge-typography--body2">{description}</p>}
        <forge-table ref={tableRef}></forge-table>
        {showPaginator && (
          <ForgeToolbar noDivider>
            <ForgePaginator
              slot="end"
              pageIndex={pageIndex}
              pageSize={pageSize}
              total={data.length}
              pageSizeOptions={[pageSize]}
              onForgePaginatorChange={handlePageChange}
            />
          </ForgeToolbar>
        )}
      </ForgeCard>
    </div>
  );
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
