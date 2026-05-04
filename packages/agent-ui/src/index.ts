// Types
export type {
  Spec,
  SpecElement,
  ActionHandler,
  ComponentDefinition,
  ActionDefinition,
  ComponentSchema,
  ActionSchema,
  Catalog,
  PromptConfig,
  ValidateConfig,
  ValidationResult,
  ValidationConfig,
  ValidationCheck,
  FieldValidationState,
  StateManager,
  ActionEvent,
  ComponentFactory,
  ComponentContext,
  Registry,
  RegistryActionHandler
} from './types.js';

// Schema
export { defaultSchema, type DefaultSchema } from './schema.js';

// Catalog
export { createCatalog, type CreateCatalogConfig } from './catalog.js';

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
  type RenderContext,
  type ComputedFunction
} from './rendering.js';

// Validation & utilities (re-export from @json-render/core)
export { runValidation, builtInValidationFunctions, check, getByPath, setByPath } from '@json-render/core';
