// Types
export type {
  GenUISpec,
  GenUIElement,
  ActionHandler,
  ComponentDefinition,
  ActionDefinition,
  ComponentSchema,
  ActionSchema,
  Catalog,
  PromptConfig,
  ValidateConfig,
  ValidationResult,
  StateManager,
  ActionEvent,
  ComponentFactory,
  ComponentContext,
  Registry,
  RegistryActionHandler
} from './types';

// Schema
export { defaultSchema, type DefaultSchema } from './schema';

// Catalog
export { createCatalog, type CreateCatalogConfig } from './catalog';

// Registry
export { createRegistry, type CreateRegistryConfig } from './registry';

// State
export { createStateManager } from './state';

// Tools
export {
  createCompiler,
  createRenderTool,
  normalizeJsonl,
  processPatches,
  type ToolDefinition,
  type CreateRenderToolConfig,
  type ProcessPatchesConfig
} from './tools';

// Rendering
export { resolveProps, resolveBindingPaths, isVisible, type RenderContext } from './rendering';
