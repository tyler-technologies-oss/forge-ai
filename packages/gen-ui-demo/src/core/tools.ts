import {
  createSpecStreamCompiler,
  autoFixSpec,
  validateSpec,
  formatSpecIssues,
  type Spec,
  type SpecStreamCompiler
} from '@json-render/core';
import type { ToolDefinition } from '@tylertech/forge-ai';
import type { GenUISpec, Catalog } from './types';

export type { ToolDefinition };

export function normalizeJsonl(input: string): string {
  const objects: string[] = [];
  let i = 0;

  while (i < input.length) {
    while (i < input.length && /\s/.test(input[i])) i++;
    if (i >= input.length) break;
    if (input[i] !== '{') {
      i++;
      continue;
    }

    let depth = 0;
    let inString = false;
    let escape = false;
    const start = i;

    for (; i < input.length; i++) {
      const char = input[i];
      if (escape) {
        escape = false;
        continue;
      }
      if (char === '\\' && inString) {
        escape = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        continue;
      }
      if (inString) continue;
      if (char === '{') {
        depth++;
      } else if (char === '}') {
        depth--;
        if (depth === 0) {
          objects.push(input.slice(start, i + 1));
          i++;
          break;
        }
      }
    }
    if (depth > 0) break;
  }

  return objects.join('\n') + '\n';
}

export function createCompiler(): SpecStreamCompiler<Spec> {
  return createSpecStreamCompiler<Spec>({ elements: {}, state: {} });
}

export interface ProcessPatchesConfig {
  reset?: boolean;
}

export function processPatches(
  specCompiler: SpecStreamCompiler<Spec>,
  patches: string,
  config: ProcessPatchesConfig = {}
): GenUISpec {
  const { reset = false } = config;

  if (reset) {
    specCompiler.reset({ elements: {}, state: {} });
  }

  const normalized = normalizeJsonl(patches);
  const { result } = specCompiler.push(normalized);

  const { spec: fixedSpec, fixes } = autoFixSpec(result);
  if (fixes.length) {
    console.log('[processPatches] Auto-fixed:', fixes);
  }

  const validation = validateSpec(fixedSpec);
  if (!validation.valid) {
    console.warn('[processPatches] Spec issues:', formatSpecIssues(validation.issues));
  }

  return fixedSpec as GenUISpec;
}

export interface CreateRenderToolConfig {
  specCompiler: SpecStreamCompiler<Spec>;
  catalog: Catalog;
  onRender: (spec: GenUISpec) => void;
}

export function createRenderTool(config: CreateRenderToolConfig): ToolDefinition {
  const { specCompiler, onRender } = config;

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
    handler: async ctx => {
      const patches = ctx.args.patches as string;
      console.log('[render_ui] Received patches:', patches);

      try {
        const spec = processPatches(specCompiler, patches, { reset: true });
        onRender(spec);
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
