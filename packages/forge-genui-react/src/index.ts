/**
 * @tylertech/forge-genui-react
 *
 * React renderer and Forge components for Tyler Forge GenUI.
 * This package provides the React-specific implementation for rendering
 * GenUI specs with Tyler Forge components.
 */

// Main API
export { useRenderer } from './use-renderer.js';

// Types
export type {
  ReactComponentContext,
  ReactComponentFactory,
  ReactRegistry,
  CatalogEntry,
  CatalogConfig,
  ComponentOverride,
  ComponentDefinition,
  ComponentsConfig,
  RendererConfig,
  UseRendererResult
} from './types.js';

// Renderer (for advanced usage)
export { GenUIRenderer, type GenUIRendererProps } from './renderer.js';

// Registry (for advanced usage)
export { createRegistry } from './registry.js';

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
