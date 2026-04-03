/**
 * Core types for the json-render system.
 *
 * Re-exports common types from @json-render/core and defines Lit-specific types
 * for our Forge component renderer.
 */

import type { TemplateResult } from 'lit';
import type { nothing } from 'lit';

// Re-export types from @json-render/core
export type {
  Spec as JsonRenderSpec,
  UIElement as JsonRenderElement,
  VisibilityCondition,
  DynamicValue,
  JsonPatch as JsonPatchOperation
} from '@json-render/core';

/**
 * Passed to each TemplateFactory when rendering. Provides:
 * - Resolved props (with $state bindings already evaluated)
 * - Rendered children templates
 * - emit() for triggering actions
 * - state manager for reading/writing reactive state
 */
export interface ComponentContext<T = Record<string, unknown>> {
  props: T;
  children?: (TemplateResult | typeof nothing)[];
  emit: (action: string, payload?: Record<string, unknown>) => void;
  state: StateManager;
}

export interface StateManager {
  get<T = unknown>(path: string): T | undefined;
  set(path: string, value: unknown): void;
  resolve<T = unknown>(value: unknown): T;
}

/**
 * A function that renders a component given its context.
 * Registered in the Registry and looked up by element.type.
 */
export type TemplateFactory<T = Record<string, unknown>> = (
  context: ComponentContext<T>
) => TemplateResult | typeof nothing;

/** Event detail dispatched when a component action occurs (e.g., button click) */
export interface ActionEvent {
  action: string;
  payload?: Record<string, unknown>;
  state: Record<string, unknown>;
}
