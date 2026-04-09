/**
 * Tool Utilities
 *
 * Shared utilities for processing JSONL patches from LLM tool calls.
 */

import {
  createSpecStreamCompiler,
  autoFixSpec,
  validateSpec,
  formatSpecIssues,
  type Spec,
  type SpecStreamCompiler
} from '@json-render/core';

/**
 * Extracts complete JSON objects from potentially malformed JSONL input.
 * Handles streaming chunks where JSON may be split across multiple lines
 * or contain incomplete objects. Uses bracket matching to find valid JSON boundaries.
 */
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

export interface ProcessPatchesConfig {
  toolName: string;
  reset?: boolean;
}

/**
 * Processes JSONL patch input through the spec compiler.
 * Normalizes input, applies patches, auto-fixes structural issues, and validates the result.
 */
export function processPatches(
  specCompiler: SpecStreamCompiler<Spec>,
  patches: string,
  config: ProcessPatchesConfig
): Spec {
  const { toolName, reset = false } = config;

  if (reset) {
    specCompiler.reset({ elements: {}, state: {} });
  }

  const normalized = normalizeJsonl(patches);
  const { result } = specCompiler.push(normalized);

  const { spec: fixedSpec, fixes } = autoFixSpec(result);
  if (fixes.length) {
    console.log(`[${toolName}] Auto-fixed:`, fixes);
  }

  const validation = validateSpec(fixedSpec);
  if (!validation.valid) {
    console.warn(`[${toolName}] Spec issues:`, formatSpecIssues(validation.issues));
  }

  return fixedSpec as Spec;
}

/**
 * Creates a new spec stream compiler with empty initial state.
 */
export function createCompiler(): SpecStreamCompiler<Spec> {
  return createSpecStreamCompiler<Spec>({ elements: {}, state: {} });
}

// Re-export useful functions from @json-render/core
export {
  createSpecStreamCompiler,
  autoFixSpec,
  validateSpec,
  formatSpecIssues
} from '@json-render/core';
