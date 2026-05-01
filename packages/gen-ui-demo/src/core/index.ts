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
export {
  resolveProps,
  resolveBindingPaths,
  isVisible,
  createRepeatContext,
  type RenderContext,
  type ComputedFunction
} from './rendering';

// Validation (re-export from @json-render/core)
export { runValidation, builtInValidationFunctions, check } from '@json-render/core';
