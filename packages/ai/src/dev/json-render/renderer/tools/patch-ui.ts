import { autoFixSpec, formatSpecIssues, validateSpec, type Spec } from '@json-render/core';
import type { ToolDefinition, HandlerContext } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';

export function createPatchUiTool(deps: ToolDependencies): ToolDefinition {
  const { specCompiler, renderSpec, setState, normalizeJsonl } = deps;

  return {
    name: 'patch_ui',
    description: `Modifies existing UI by applying JSON Patch operations. Use ONLY after render_ui has been called.

IMPORTANT: Output JSONL format - each JSON patch on its OWN LINE separated by newlines (\\n).

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
        const normalized = normalizeJsonl(patches);
        const { result } = specCompiler.push(normalized);

        const { spec: fixedSpec, fixes } = autoFixSpec(result);
        if (fixes.length) {
          console.log('[patch_ui] Auto-fixed:', fixes);
        }

        const validation = validateSpec(fixedSpec);
        if (!validation.valid) {
          console.warn('[patch_ui] Spec issues:', formatSpecIssues(validation.issues));
        }

        setState({
          spec: fixedSpec as Spec,
          lastRenderedAt: new Date().toISOString()
        });

        renderSpec(fixedSpec as Spec);
        console.log('[patch_ui] Applied patches:', fixedSpec);

        return {
          success: true,
          currentElements: Object.keys(fixedSpec.elements || {}),
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
