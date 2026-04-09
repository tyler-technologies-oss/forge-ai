/**
 * Render UI Tool
 *
 * Creates a tool definition for completely replacing the UI with a new spec.
 */

import type { Spec, SpecStreamCompiler } from '@json-render/core';
import type { GenUIToolDefinition, GenUIHandlerContext, SpecRendererState } from '../types.js';
import { processPatches, type ProcessPatchesConfig } from './utils.js';

export interface RenderUiToolDependencies {
  specCompiler: SpecStreamCompiler<Spec>;
  renderSpec: (spec: Spec) => void;
  setState: (state: SpecRendererState) => void;
  catalogDescription: string;
  processPatches?: (
    specCompiler: SpecStreamCompiler<Spec>,
    patches: string,
    config: ProcessPatchesConfig
  ) => Spec;
}

interface RenderUiArgs {
  patches: string;
}

export function createRenderUiTool(deps: RenderUiToolDependencies): GenUIToolDefinition<RenderUiArgs> {
  const patchProcessor = deps.processPatches ?? processPatches;

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
    handler: async (context: GenUIHandlerContext<RenderUiArgs>) => {
      const patches = context.args.patches;
      console.log('[render_ui] Received patches:', patches);

      try {
        const spec = patchProcessor(deps.specCompiler, patches, { toolName: 'render_ui', reset: true });
        deps.setState({ spec, lastRenderedAt: new Date().toISOString() });
        deps.renderSpec(spec);
        console.log('[render_ui] Applied:', JSON.stringify(spec, null, 2));

        return {
          success: true,
          elements: Object.keys(spec.elements || {})
        };
      } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        console.error('[render_ui] error:', error);
        return { success: false, error: error.message };
      }
    }
  };
}
