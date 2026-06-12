// Types (re-exported from @json-render/core)
export type { Spec, UIElement, ActionBinding, ComputedFunction, Catalog } from './types.js';

// Types (unique to this package)
export type {
  ChildReference,
  ActionHandler,
  SpecElement,
  ComponentDefinition,
  ActionDefinition,
  ComponentSchema,
  ActionSchema,
  FieldValidationState,
  ActionEvent
} from './types.js';

// State & Registry types
export type {
  StateManager,
  ComponentFactory,
  ComponentContext,
  Registry,
  RegistryActionHandler
} from './types.js';

// Schema
export { defaultSchema, type DefaultSchema } from './schema.js';

// Catalog
export { createCatalog, type CreateCatalogConfig, type AgentCatalog } from './catalog.js';

// Registry
export { createRegistry, type CreateRegistryConfig } from './registry.js';

// State
export { createStateManager } from './state.js';

// Tools
export {
  createCompiler,
  createRenderTool,
  normalizeJsonl,
  processPatches,
  type ToolDefinition,
  type CreateRenderToolConfig,
  type ProcessPatchesConfig
} from './tools.js';

// Rendering
export {
  resolveProps,
  resolveBindingPaths,
  isVisible,
  createRepeatContext,
  type RenderContext
} from './rendering.js';

// Element Renderer
export { renderElement, type RenderElementConfig } from './element-renderer.js';

// Validation & utilities (re-export from @json-render/core)
export { runValidation, builtInValidationFunctions, check, getByPath, setByPath } from '@json-render/core';
