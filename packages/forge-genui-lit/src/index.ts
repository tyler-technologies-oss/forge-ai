/**
 * @tylertech/forge-genui-lit
 *
 * Lit-based renderer and Forge components for Tyler Forge GenUI.
 * This package provides the Lit-specific implementation for rendering
 * GenUI specs with Tyler Forge components.
 */

// Main API
export { createRenderer } from './create-renderer.js';

// Types
export type {
  LitComponentContext,
  LitTemplateFactory,
  LitRegistry,
  CatalogEntry,
  CatalogConfig,
  ComponentOverride,
  ComponentDefinition,
  ComponentsConfig,
  RendererConfig,
  GenUIRenderer
} from './types.js';

// Renderer (for advanced usage)
export { ForgeGenUIRenderer } from './renderer.js';

// Registry (for advanced usage)
export { createRegistry } from './registry.js';

// Adapter (for advanced usage)
export { LitRendererAdapter, type LitRendererAdapterConfig } from './adapter.js';

// Components (for custom registries)
export {
  catalogComponents,
  Text,
  Button,
  IconButton,
  Stack,
  Card,
  List,
  ListItem,
  TextField,
  CheckBox,
  Badge,
  Divider,
  InlineMessage,
  Avatar,
  Toolbar,
  Icon
} from './components/index.js';
