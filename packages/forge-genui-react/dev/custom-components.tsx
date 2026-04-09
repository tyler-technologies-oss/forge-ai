import { useState, useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import { ForgeCard, ForgeToolbar, ForgePaginator } from '@tylertech/forge-react';
import type { IColumnConfiguration, IPaginatorChangeEventData } from '@tylertech/forge';
import { z } from 'zod';
import type { ReactComponentContext, ComponentsConfig } from '../src';

interface ReportingTableProps {
  header?: string;
  description?: string;
  data?: Record<string, unknown>[];
  columns?: IColumnConfiguration[];
  pageSize?: number;
}

function ReportingTable(ctx: ReactComponentContext<ReportingTableProps>): ReactElement {
  const { header = '', description = '', data = [], columns = [], pageSize = 10 } = ctx.props;
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
    <div className="reporting-table">
      <ForgeCard>
        <ForgeToolbar>
          <h2 className="forge-typography--heading5" slot="start">
            {header}
          </h2>
        </ForgeToolbar>
        <p className="description forge-typography--body2">{description}</p>
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

const ReportingTablePropsSchema = z.object({
  header: z.string().describe('Title displayed above the table').nullable(),
  description: z.string().describe('Subtitle/description below the header').nullable(),
  data: z
    .array(z.record(z.string(), z.unknown()))
    .describe('Array of row objects, e.g. [{name:"Alice",age:30}]')
    .nullable(),
  columns: z
    .array(
      z.object({
        property: z.string().describe('Object key to display in this column'),
        header: z.string().describe('Column header text')
      })
    )
    .describe('Column definitions. MUST use "property" and "header" keys.')
    .nullable(),
  pageSize: z.number().describe('Rows per page (default 10)').nullable()
});

export const customComponents: ComponentsConfig = {
  ReportingTable: {
    factory: ReportingTable,
    schema: {
      component: 'ReportingTable',
      description:
        'Data table with pagination. Example: {"header":"Title","description":"Subtitle","data":[{"name":"Alice","age":30}],"columns":[{"property":"name","header":"Name"},{"property":"age","header":"Age"}],"pageSize":10}',
      props: ReportingTablePropsSchema
    }
  }
} as const;
