import { ToolDefinition, createToolRenderer } from '$lib/ai-chatbot';

export const displayDataTableTool: ToolDefinition = {
  name: 'displayDataTable',
  displayName: 'Display Data Table',
  description:
    'Display tabular data in a formatted table with headers and rows. Use this tool when you want to present structured data, statistics, or any information that works well in a table format.',
  parameters: {
    type: 'object' as const,
    properties: {
      title: { type: 'string', description: 'Optional table title or caption' },
      headers: {
        type: 'array',
        items: { type: 'string' },
        description: 'Column headers for the table'
      },
      maxNumberOfRows: { type: 'number', description: 'Maximum number of rows to display' },
      rows: {
        type: 'array',
        items: {
          type: 'array',
          items: { type: ['string', 'number'] }
        },
        description: 'Table data rows - each row is an array of cell values'
      }
    },
    required: ['headers', 'rows']
  },
  renderer: createToolRenderer({
    elementTag: 'ai-data-table'
  })
};
