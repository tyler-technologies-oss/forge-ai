import { type ToolDefinition, createToolRenderer } from '../../ai-chatbot';

// A type alias rather than an interface so the tool stays assignable to a plain `ToolDefinition`.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type DataTableArgs = {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  maxNumberOfRows?: number;
};

function rowCountLabel(rows: unknown[] | undefined): string {
  const count = rows?.length ?? 0;
  return `${count} ${count === 1 ? 'row' : 'rows'}`;
}

export const displayDataTableTool: ToolDefinition<DataTableArgs> = {
  name: 'displayDataTable',
  displayName: 'Display Data Table',
  description:
    'Display tabular data in a formatted table with headers and rows. Use this tool when you want to present structured data, lists where there are 2 or more columns, statistics, or any information that works well in a table format.',
  parameters: {
    type: 'object' as const,
    properties: {
      title: { type: 'string', description: 'Table title or caption displayed above the data.' },
      headers: {
        type: 'array',
        items: { type: 'string' },
        description: 'Column names displayed as table headers. Order matches the row data order.'
      },
      maxNumberOfRows: {
        type: 'number',
        description: 'Limit total rows shown. Useful for large datasets to prevent overwhelming display.'
      },
      rows: {
        type: 'array',
        items: {
          type: 'array',
          items: { anyOf: [{ type: 'string' }, { type: 'number' }] }
        },
        description: 'Data rows where each row is an array of values matching header order.'
      }
    },
    required: ['headers', 'rows']
  },
  renderer: createToolRenderer({
    elementTag: 'forge-ai-tool-data-table'
  }),
  canvas: {
    open: 'on-request',
    title: toolCall => toolCall.args.title ?? 'Data table',
    subtitle: toolCall => rowCountLabel(toolCall.args.rows),
    actionLabel: { open: 'Open table in canvas', collapse: 'Collapse table' }
  }
};
