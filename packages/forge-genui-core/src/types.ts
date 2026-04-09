/**
 * Core types for the Forge GenUI system.
 *
 * These types are framework-agnostic and can be used with any rendering framework.
 * Framework-specific packages extend these base types with their own return types.
 */

import type {
  Spec,
  UIElement,
  VisibilityCondition as JsonRenderVisibilityCondition,
  DynamicValue as JsonRenderDynamicValue
} from '@json-render/core';

// Re-export with Forge-branded names (hide json-render implementation detail)
export type GenUISpec = Spec;
export type GenUIElement = UIElement;
export type VisibilityCondition = JsonRenderVisibilityCondition;
export type DynamicValue = JsonRenderDynamicValue;

/**
 * Manages reactive state for the GenUI system.
 * Components read/write state via JSON Pointer paths (RFC 6901).
 */
export interface StateManager {
  get<T = unknown>(path: string): T | undefined;
  set(path: string, value: unknown): void;
  resolve<T = unknown>(value: unknown): T;
}

/**
 * Event dispatched when a component action occurs (e.g., button click).
 */
export interface ActionEvent {
  action: string;
  payload?: Record<string, unknown>;
  state: Record<string, unknown>;
}

/**
 * Base context passed to component factories.
 * Framework-specific packages extend this with their own children type.
 */
export interface BaseComponentContext<TProps = Record<string, unknown>> {
  props: TProps;
  emit: (action: string, payload?: Record<string, unknown>) => void;
  state: StateManager;
}

/**
 * Base registry interface for component lookup.
 * Framework-specific packages provide their own factory type.
 */
export interface BaseRegistry<TFactory> {
  get(type: string): TFactory | undefined;
  register(type: string, factory: TFactory): void;
}

/**
 * State of the spec renderer for persistence/restoration.
 */
export interface SpecRendererState {
  spec: GenUISpec | null;
  lastRenderedAt: string | null;
}

/**
 * Generic tool definition interface compatible with various AI frameworks.
 */
export interface GenUIToolDefinition<THandlerArgs = Record<string, unknown>> {
  name: string;
  description?: string;
  parameters?: {
    type: 'object';
    properties?: Record<string, unknown>;
    required?: string[];
  };
  handler: (context: GenUIHandlerContext<THandlerArgs>) => Promise<Record<string, unknown>>;
}

/**
 * Context passed to tool handlers.
 */
export interface GenUIHandlerContext<TArgs = Record<string, unknown>> {
  args: TArgs;
  toolCallId?: string;
  toolName?: string;
}

/**
 * Adapter interface for framework-specific renderers.
 * Each framework package implements this to integrate with the controller.
 */
export interface RendererAdapter {
  attach(container: HTMLElement): void;
  update(spec: GenUISpec): void;
  detach(): void;
  onAction(handler: (event: ActionEvent) => void): void;
}
