/**
 * Patch UI Tool
 *
 * Creates a tool definition for incrementally modifying an existing UI spec.
 */

import type { Spec, SpecStreamCompiler } from '@json-render/core';
import type { GenUIToolDefinition, GenUIHandlerContext, SpecRendererState } from '../types.js';
import { processPatches, type ProcessPatchesConfig } from './utils.js';

export interface PatchUiToolDependencies {
  specCompiler: SpecStreamCompiler<Spec>;
  renderSpec: (spec: Spec) => void;
  setState: (state: SpecRendererState) => void;
  processPatches?: (
    specCompiler: SpecStreamCompiler<Spec>,
    patches: string,
    config: ProcessPatchesConfig
  ) => Spec;
}

interface PatchUiArgs {
  patches: string;
}

export function createPatchUiTool(deps: PatchUiToolDependencies): GenUIToolDefinition<PatchUiArgs> {
  const patchProcessor = deps.processPatches ?? processPatches;

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
    handler: async (context: GenUIHandlerContext<PatchUiArgs>) => {
      const patches = context.args.patches;
      console.log('[patch_ui] Received patches:', patches);

      try {
        const spec = patchProcessor(deps.specCompiler, patches, { toolName: 'patch_ui', reset: false });
        deps.setState({ spec, lastRenderedAt: new Date().toISOString() });
        deps.renderSpec(spec);
        console.log('[patch_ui] Applied:', JSON.stringify(spec, null, 2));

        return {
          success: true,
          elements: Object.keys(spec.elements || {})
        };
      } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        console.error('[patch_ui] error:', error);
        return { success: false, error: error.message };
      }
    }
  };
}
