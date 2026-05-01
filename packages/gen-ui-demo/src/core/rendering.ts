import { evaluateVisibility, resolveElementProps, resolveBindings, getByPath } from '@json-render/core';

export type ComputedFunction = (args: Record<string, unknown>) => unknown;

/**
 * Context provided to rendering utilities containing the current state.
 */
export interface RenderContext {
  stateModel: Record<string, unknown>;
  repeatItem?: unknown;
  repeatIndex?: number;
  repeatBasePath?: string;
  functions?: Record<string, ComputedFunction>;
}

/**
 * Creates a render context for a repeat iteration.
 */
export function createRepeatContext(
  baseCtx: RenderContext,
  statePath: string,
  index: number
): RenderContext {
  const array = getByPath(baseCtx.stateModel, statePath) as unknown[];
  return {
    ...baseCtx,
    repeatItem: array?.[index],
    repeatIndex: index,
    repeatBasePath: `${statePath}/${index}`
  };
}

/**
 * Resolves dynamic prop expressions to their actual values.
 *
 * Handles expressions like:
 * - `{ "$state": "/path" }` → reads value from state
 * - `{ "$bindState": "/path" }` → reads value from state (for two-way binding)
 * - `{ "$item": "field" }` → reads field from current repeat item
 * - `{ "$index": true }` → returns current repeat index
 * - `{ "$cond": ..., "$then": ..., "$else": ... }` → conditional values
 * - `{ "$template": "Hello ${/name}" }` → string interpolation
 */
export function resolveProps(props: Record<string, unknown>, ctx: RenderContext): Record<string, unknown> {
  return resolveElementProps(props, ctx);
}

/**
 * Extracts binding paths from props for two-way data binding.
 *
 * Returns a map of prop name → state path for props using `$bindState`.
 * Components use these paths to write values back to state.
 *
 * @example
 * // Given props: { value: { "$bindState": "/form/name" } }
 * // Returns: { value: "/form/name" }
 */
export function resolveBindingPaths(props: Record<string, unknown>, ctx: RenderContext): Record<string, string> | undefined {
  return resolveBindings(props, ctx);
}

/**
 * Evaluates visibility conditions to determine if an element should render.
 *
 * Supports expressions like:
 * - `{ "$state": "/showDetails" }` → boolean from state
 * - `{ "$and": [...] }` / `{ "$or": [...] }` → logical operators
 * - `{ "$eq": [a, b] }`, `$ne`, `$gt`, `$lt`, etc. → comparisons
 */
export function isVisible(condition: unknown, ctx: RenderContext): boolean {
  return evaluateVisibility(condition as Parameters<typeof evaluateVisibility>[0], ctx);
}
