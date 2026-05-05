import { evaluateVisibility, resolveElementProps, resolveBindings, getByPath, type ComputedFunction } from '@json-render/core';

export interface RenderContext {
  stateModel: Record<string, unknown>;
  repeatItem?: unknown;
  repeatIndex?: number;
  repeatBasePath?: string;
  functions?: Record<string, ComputedFunction>;
}

export function createRepeatContext(baseCtx: RenderContext, statePath: string, index: number): RenderContext {
  const array = getByPath(baseCtx.stateModel, statePath) as unknown[];
  return {
    ...baseCtx,
    repeatItem: array?.[index],
    repeatIndex: index,
    repeatBasePath: `${statePath}/${index}`
  };
}

export function resolveProps(props: Record<string, unknown>, ctx: RenderContext): Record<string, unknown> {
  return resolveElementProps(props, ctx);
}

export function resolveBindingPaths(
  props: Record<string, unknown>,
  ctx: RenderContext
): Record<string, string> | undefined {
  return resolveBindings(props, ctx);
}

export function isVisible(condition: unknown, ctx: RenderContext): boolean {
  return evaluateVisibility(condition as Parameters<typeof evaluateVisibility>[0], ctx);
}
