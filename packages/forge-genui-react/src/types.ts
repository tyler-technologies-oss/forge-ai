/**
 * React-specific types for Forge GenUI.
 *
 * Extends the framework-agnostic base types with React-specific return types.
 */

import type { ReactNode, ReactElement, FC } from 'react';
import type {
  BaseComponentContext,
  BaseRegistry,
  ComponentSchema,
  ComponentName,
  GenUIToolDefinition,
  SpecRendererState,
  GenUISpec,
  ActionEvent
} from '@tylertech/forge-genui-core';

/**
 * Context passed to React component factories.
 * Extends base context with React-specific children type.
 */
export interface ReactComponentContext<T = Record<string, unknown>> extends BaseComponentContext<T> {
  children?: ReactNode[];
}

/**
 * A function that renders a React component given its context.
 */
export type ReactComponentFactory<T = Record<string, unknown>> = (
  context: ReactComponentContext<T>
) => ReactElement | null;

/**
 * React-specific registry for component lookup.
 */
export interface ReactRegistry extends BaseRegistry<ReactComponentFactory> {
  components: Map<string, ReactComponentFactory>;
}

/**
 * A catalog entry combining a factory with its schema.
 */
export interface CatalogEntry {
  factory: ReactComponentFactory;
  schema: ComponentSchema;
}

/**
 * Complete catalog configuration - replaces built-in catalog entirely.
 */
export type CatalogConfig = Record<string, CatalogEntry>;

/**
 * Override for a built-in component - schema is optional (uses default).
 */
export interface ComponentOverride {
  factory: ReactComponentFactory;
  schema?: ComponentSchema;
}

/**
 * Definition for a new custom component - schema is required.
 */
export interface ComponentDefinition {
  factory: ReactComponentFactory;
  schema: ComponentSchema;
}

/**
 * Component configuration map for add/override mode.
 * Built-in component names allow optional schema (override).
 * New component names require schema (definition).
 */
export type ComponentsConfig = {
  [K in ComponentName]?: ComponentOverride;
} & {
  [K: string]: ComponentOverride | ComponentDefinition;
};

/**
 * Configuration options for useRenderer().
 */
export interface RendererConfig {
  /** Complete replacement catalog - if provided, no built-ins are included */
  catalog?: CatalogConfig;
  /** Add/override components to the built-in catalog */
  components?: ComponentsConfig;
  includePatchTool?: boolean;
  onAction?: (event: ActionEvent) => void;
  onRender?: (spec: GenUISpec) => void;
}

/**
 * The result returned by useRenderer().
 */
export interface UseRendererResult {
  readonly tools: GenUIToolDefinition[];
  readonly componentSchemas: Record<string, ComponentSchema>;
  Renderer: FC;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  reset: () => void;
  getState: () => SpecRendererState;
  setState: (state: SpecRendererState) => void;
}
