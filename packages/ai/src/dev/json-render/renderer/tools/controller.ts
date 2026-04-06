import {
  createSpecStreamCompiler,
  autoFixSpec,
  validateSpec,
  formatSpecIssues,
  type Spec,
  type SpecStreamCompiler
} from '@json-render/core';
import type { ToolDefinition } from '../../../../lib/ai-chatbot/index.js';
import type { Registry } from '../registry.js';
import { ForgeSpecRenderer } from '../renderer.js';
import { createRenderUiTool } from './render-ui.js';
import type { SpecRendererState } from './types.js';

export interface SpecRendererControllerConfig {
  registry: Registry;
  componentSchemas: Record<string, { description?: string }>;
}

/**
 * Extracts complete JSON objects from potentially malformed JSONL input.
 * Handles streaming chunks where JSON may be split across multiple lines
 * or contain incomplete objects. Uses bracket matching to find valid JSON boundaries.
 */
function normalizeJsonl(input: string): string {
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

export class SpecRendererController {
  readonly tools: ToolDefinition[];

  #registry: Registry;
  #container: HTMLElement | null = null;
  #renderer: ForgeSpecRenderer | null = null;
  #specCompiler: SpecStreamCompiler<Spec>;
  #state: SpecRendererState = { spec: null, lastRenderedAt: null };

  public onLoading?: (loading: boolean) => void;
  public onRender?: (spec: Spec) => void;

  constructor(config: SpecRendererControllerConfig) {
    this.#registry = config.registry;
    this.#specCompiler = createSpecStreamCompiler<Spec>({ elements: {}, state: {} });

    const catalogDescription = Object.entries(config.componentSchemas)
      .map(([name, def]) => `- ${name}: ${def.description ?? ''}`)
      .join('\n');

    const deps = {
      specCompiler: this.#specCompiler,
      renderSpec: this.#renderSpec.bind(this),
      getState: this.getState.bind(this),
      setState: this.setState.bind(this),
      catalogDescription,
      processPatches
    };

    this.tools = [createRenderUiTool(deps)];
  }

  public attach(container: HTMLElement): void {
    this.#container = container;
  }

  public detach(): void {
    this.#renderer?.remove();
    this.#renderer = null;
    this.#container = null;
  }

  public reset(): void {
    this.#specCompiler.reset({ elements: {}, state: {} });
    this.#state = { spec: null, lastRenderedAt: null };
    this.#renderer?.remove();
    this.#renderer = null;
  }

  public getState(): SpecRendererState {
    return { ...this.#state };
  }

  public setState(state: SpecRendererState): void {
    this.#state = { ...state };
    if (state.spec) {
      this.#specCompiler.reset(state.spec);
      this.#renderSpec(state.spec);
    }
  }

  #renderSpec(spec: Spec): void {
    if (!this.#container) {
      console.warn('[SpecRendererController] No container attached');
      return;
    }

    if (!this.#renderer) {
      this.#renderer = new ForgeSpecRenderer();
      this.#renderer.registry = this.#registry;
      this.#container.appendChild(this.#renderer);
    }

    this.#renderer.spec = spec;
    this.#state = { spec, lastRenderedAt: new Date().toISOString() };
    this.onRender?.(spec);
  }
}
