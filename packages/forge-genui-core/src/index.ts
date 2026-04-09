/**
 * @tylertech/forge-genui-core
 *
 * Framework-agnostic core utilities for Tyler Forge GenUI.
 * This package provides types, state management, catalog schemas,
 * and tool definitions that can be used with any rendering framework.
 */

// Types
export type {
  GenUISpec,
  GenUIElement,
  VisibilityCondition,
  DynamicValue,
  StateManager,
  ActionEvent,
  BaseComponentContext,
  BaseRegistry,
  SpecRendererState,
  GenUIToolDefinition,
  GenUIHandlerContext,
  RendererAdapter
} from './types.js';

// State management
export { createStateManager } from './state.js';

// Catalog
export {
  componentCatalog,
  buildCatalogDescription,
  type ComponentSchema,
  type ComponentName
} from './catalog.js';

// Controller
export { GenUIController, type GenUIControllerConfig } from './controller.js';

// Tools
export {
  createRenderUiTool,
  createPatchUiTool,
  normalizeJsonl,
  processPatches,
  createCompiler,
  type RenderUiToolDependencies,
  type PatchUiToolDependencies,
  type ProcessPatchesConfig
} from './tools/index.js';

// Re-exports from @json-render/core for advanced usage
export {
  createSpecStreamCompiler,
  autoFixSpec,
  validateSpec,
  formatSpecIssues,
  evaluateVisibility,
  resolveElementProps,
  getByPath,
  setByPath,
  resolveDynamicValue
} from '@json-render/core';
