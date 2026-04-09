/**
 * Lit-specific types for Forge GenUI.
 *
 * Extends the framework-agnostic base types with Lit-specific return types.
 */

import type { TemplateResult } from 'lit';
import type { nothing } from 'lit';
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
 * Context passed to Lit component factories.
 * Extends base context with Lit-specific children type.
 */
export interface LitComponentContext<T = Record<string, unknown>> extends BaseComponentContext<T> {
  children?: (TemplateResult | typeof nothing)[];
}

/**
 * A function that renders a Lit component given its context.
 */
export type LitTemplateFactory<T = Record<string, unknown>> = (
  context: LitComponentContext<T>
) => TemplateResult | typeof nothing;

/**
 * Lit-specific registry for component lookup.
 */
export interface LitRegistry extends BaseRegistry<LitTemplateFactory> {
  components: Map<string, LitTemplateFactory>;
}

/**
 * A catalog entry combining a factory with its schema.
 */
export interface CatalogEntry {
  factory: LitTemplateFactory;
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
  factory: LitTemplateFactory;
  schema?: ComponentSchema;
}

/**
 * Definition for a new custom component - schema is required.
 */
export interface ComponentDefinition {
  factory: LitTemplateFactory;
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
 * Configuration options for createRenderer().
 */
export interface RendererConfig {
  /** Complete replacement catalog - if provided, no built-ins are included */
  catalog?: CatalogConfig;
  /** Add/override components to the built-in catalog */
  components?: ComponentsConfig;
  includePatchTool?: boolean;
}

/**
 * The renderer instance returned by createRenderer().
 */
export interface GenUIRenderer {
  readonly tools: GenUIToolDefinition[];
  readonly componentSchemas: Record<string, ComponentSchema>;
  attach(container: HTMLElement): void;
  detach(): void;
  reset(): void;
  setLoading(loading: boolean): void;
  getState(): SpecRendererState;
  setState(state: SpecRendererState): void;
  onAction(handler: (event: ActionEvent) => void): void;
  onLoadingChange: ((loading: boolean) => void) | undefined;
  onRender: ((spec: GenUISpec) => void) | undefined;
}
