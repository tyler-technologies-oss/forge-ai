import { autoFixSpec, formatSpecIssues, validateSpec, type Spec } from '@json-render/core';
import type { ToolDefinition, HandlerContext } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';

export function createRenderUiTool(deps: ToolDependencies): ToolDefinition {
  const { specCompiler, renderSpec, setState, catalogDescription, normalizeJsonl } = deps;

  return {
    name: 'render_ui',
    description: `Replaces entire UI with a new json-render spec. Resets current state.

IMPORTANT: Output JSONL format - each JSON patch on its OWN LINE separated by newlines (\\n).

Example patches parameter:
{"op":"add","path":"/root","value":"main"}
{"op":"add","path":"/elements/main","value":{"type":"Card","children":["text"]}}
{"op":"add","path":"/elements/text","value":{"type":"Text","props":{"text":"Hello"}}}

Available components:
${catalogDescription}

For data binding, use { "$state": "/path" } in props.
For actions, set "action": "actionName" on interactive components.`,
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
        specCompiler.reset({ elements: {}, state: {} });
        const normalized = normalizeJsonl(patches);
        const { result } = specCompiler.push(normalized);

        const { spec: fixedSpec, fixes } = autoFixSpec(result);
        if (fixes.length) {
          console.log('[render_ui] Auto-fixed:', fixes);
        }

        const validation = validateSpec(fixedSpec);
        if (!validation.valid) {
          console.warn('[render_ui] Spec issues:', formatSpecIssues(validation.issues));
        }

        setState({
          spec: fixedSpec as Spec,
          lastRenderedAt: new Date().toISOString()
        });

        renderSpec(fixedSpec as Spec);
        console.log('[render_ui] Applied spec:', fixedSpec);

        return {
          success: true,
          renderedElements: Object.keys(fixedSpec.elements || {}),
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
