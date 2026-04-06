import type { ToolDefinition } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';
import { createToolHandler } from './utils.js';

export function createRenderUiTool(deps: ToolDependencies): ToolDefinition {
  return {
    name: 'render_ui',
    description: `COMPLETELY REPLACES the UI with a new spec. Previous UI is discarded.

When user asks for new UI (form, table, dashboard, etc.), use this tool.
Only include elements you want displayed - anything not in the spec is removed.

IMPORTANT: Output JSONL format - each JSON patch on its OWN LINE.

Example:
{"op":"add","path":"/root","value":"main"}
{"op":"add","path":"/elements/main","value":{"type":"Card","children":["text"]}}
{"op":"add","path":"/elements/text","value":{"type":"Text","props":{"text":"Hello"}}}

Available components:
${deps.catalogDescription}

For data binding: { "$state": "/path" }
For actions: "action": "actionName"`,
    parameters: {
      type: 'object',
      properties: {
        patches: {
          type: 'string',
          description:
            'JSONL patches - MUST be one JSON object per line, separated by newlines. Example: {"op":"add","path":"/root","value":"x"}\\n{"op":"add","path":"/elements/x","value":{...}}'
        }
      },
      required: ['patches']
    },
    handler: createToolHandler(deps, { toolName: 'render_ui', reset: true })
  };
}
