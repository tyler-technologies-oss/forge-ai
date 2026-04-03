import type { ToolDefinition, HandlerContext } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';

export function createPatchUiTool(deps: ToolDependencies): ToolDefinition {
  const { specCompiler, renderSpec, setState, processPatches } = deps;

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
    handler: async (context: HandlerContext) => {
      const patches = context.args.patches as string;
      console.log('[patch_ui] Received patches:', patches);

      try {
        const spec = processPatches(specCompiler, patches, 'patch_ui', false);

        setState({ spec, lastRenderedAt: new Date().toISOString() });
        renderSpec(spec);
        console.log('[patch_ui] Applied patches:', spec);

        return {
          success: true,
          currentElements: Object.keys(spec.elements || {}),
          message: 'Patches applied. UI updated.'
        };
      } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        console.error('Spec stream error:', error);
        return { success: false, error: error.message };
      }
    }
  };
}
