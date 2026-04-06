import type { ToolDefinition } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';
import { createToolHandler } from './utils.js';

export function createPatchUiTool(deps: ToolDependencies): ToolDefinition {
  return {
    name: 'patch_ui',
    description: `Modifies existing UI by applying JSON Patch operations. Use ONLY after render_ui has been called.

IMPORTANT: Output JSONL format - each JSON patch on its OWN LINE.

Use for: adding/removing/updating specific elements in an already-rendered UI.
Do NOT use for initial UI creation - use render_ui instead.`,
    parameters: {
      type: 'object',
      properties: {
        patches: {
          type: 'string',
          description: 'JSONL patches - MUST be one JSON object per line, separated by newlines.'
        }
      },
      required: ['patches']
    },
    handler: createToolHandler(deps, { toolName: 'patch_ui', reset: false })
  };
}
