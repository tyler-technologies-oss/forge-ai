import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { LitComponentContext, ComponentsConfig } from '@tylertech/forge-genui-lit';
import type { IColumnConfiguration } from '@tylertech/forge';
import { z } from 'zod';

import '../external-ui/components/reporting-table.js';

interface ReportingTableProps {
  header?: string;
  description?: string;
  data?: Record<string, unknown>[];
  columns?: IColumnConfiguration[];
  pageSize?: number;
}

function ReportingTable(ctx: LitComponentContext<ReportingTableProps>): TemplateResult | typeof nothing {
  const { header = '', description = '', data = [], columns = [], pageSize = 10 } = ctx.props;

  return html`
    <reporting-table
      .header=${header}
      .description=${description}
      .data=${data}
      .columns=${columns}
      .pageSize=${pageSize}>
    </reporting-table>
  `;
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
};
