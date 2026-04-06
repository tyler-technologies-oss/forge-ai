import type { HandlerContext } from '../../../../lib/ai-chatbot/index.js';
import type { ToolDependencies } from './types.js';

export interface ToolHandlerConfig {
  toolName: string;
  reset: boolean;
}

/**
 * Creates a tool handler for processing JSONL patches.
 * Used by both render_ui (reset=true) and patch_ui (reset=false) tools.
 */
export function createToolHandler(
  deps: ToolDependencies,
  config: ToolHandlerConfig
): (context: HandlerContext) => Promise<Record<string, unknown>> {
  const { specCompiler, renderSpec, setState, processPatches } = deps;
  const { toolName, reset } = config;

  return async (context: HandlerContext) => {
    const patches = context.args.patches as string;
    console.log(`[${toolName}] Received patches:`, patches);

    try {
      const spec = processPatches(specCompiler, patches, { toolName, reset });
      setState({ spec, lastRenderedAt: new Date().toISOString() });
      renderSpec(spec);
      console.log(`[${toolName}] Applied:`, JSON.stringify(spec, null, 2));

      return {
        success: true,
        elements: Object.keys(spec.elements || {})
      };
    } catch (e) {
      const error = e instanceof Error ? e : new Error(String(e));
      console.error(`[${toolName}] error:`, error);
      return { success: false, error: error.message };
    }
  };
}
