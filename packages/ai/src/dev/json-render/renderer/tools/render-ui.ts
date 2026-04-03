import type { ToolDefinition, HandlerContext } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';

export function createRenderUiTool(deps: ToolDependencies): ToolDefinition {
  const { specCompiler, renderSpec, setState, catalogDescription, processPatches } = deps;

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
${catalogDescription}

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
    handler: async (context: HandlerContext) => {
      const patches = context.args.patches as string;
      console.log('[render_ui] Received patches:', patches);

      try {
        const spec = processPatches(specCompiler, patches, 'render_ui', true);

        setState({ spec, lastRenderedAt: new Date().toISOString() });
        renderSpec(spec);
        console.log('[render_ui] Applied spec:', spec);

        return {
          success: true,
          renderedElements: Object.keys(spec.elements || {}),
          message: 'UI rendered successfully. Do not call render_ui again unless user requests changes.'
        };
      } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        console.error('Spec stream error:', error);
        return { success: false, error: error.message };
      }
    }
  };
}
