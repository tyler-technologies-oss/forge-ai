/**
 * A2UI Node Renderer
 *
 * Recursively renders A2UI component nodes into Lit templates.
 * Maps A2UI component types (Text, Button, etc.) to their Forge implementations.
 *
 * Each component receives a `context` (provides component model + data binding)
 * and `surface` (access to sibling components and shared data model).
 */
import { html, type TemplateResult, nothing } from 'lit';
import type { ComponentContext, SurfaceModel, ComponentApi } from '@a2ui/web_core/v0_9';
import { ComponentContext as ComponentContextClass } from '@a2ui/web_core/v0_9';

import './components/index.js';

/** Supported A2UI component types */
type ComponentType =
  | 'Text'
  | 'Icon'
  | 'Stack'
  | 'List'
  | 'ListItem'
  | 'Card'
  | 'Button'
  | 'IconButton'
  | 'TextField'
  | 'CheckBox'
  | 'Avatar'
  | 'Badge'
  | 'Divider'
  | 'InlineMessage'
  | 'Toolbar';

/** Maps A2UI type names to Forge web component tag names */
const componentTagMap: Record<ComponentType, string> = {
  Text: 'forge-a2ui-text',
  Icon: 'forge-a2ui-icon',
  Stack: 'forge-a2ui-stack',
  List: 'forge-a2ui-list',
  ListItem: 'forge-a2ui-list-item',
  Card: 'forge-a2ui-card',
  Button: 'forge-a2ui-button',
  IconButton: 'forge-a2ui-icon-button',
  TextField: 'forge-a2ui-text-field',
  CheckBox: 'forge-a2ui-checkbox',
  Avatar: 'forge-a2ui-avatar',
  Badge: 'forge-a2ui-badge',
  Divider: 'forge-a2ui-divider',
  InlineMessage: 'forge-a2ui-inline-message',
  Toolbar: 'forge-a2ui-toolbar'
};

/**
 * Render a single component by ID.
 * Looks up the component model, creates its context, and returns the appropriate Lit template.
 */
export function renderNode(
  componentId: string,
  surface: SurfaceModel<ComponentApi>,
  dataModelBasePath = '/'
): TemplateResult | typeof nothing {
  const componentModel = surface.componentsModel.get(componentId);
  if (!componentModel) {
    console.warn(`Component not found: ${componentId}`);
    return nothing;
  }

  // Context provides component model access and data binding for this node
  const context = new ComponentContextClass(surface, componentId, dataModelBasePath);
  const tagName = componentTagMap[componentModel.type as ComponentType];

  if (!tagName) {
    console.warn(`Unknown component type: ${componentModel.type}`);
    return nothing;
  }

  return renderElement(tagName, context, surface);
}

/**
 * Create the actual Lit template for a component.
 * Uses explicit switch to enable proper type checking and tree shaking.
 */
function renderElement(
  tagName: string,
  context: ComponentContext,
  surface: SurfaceModel<ComponentApi>
): TemplateResult {
  switch (tagName) {
    case 'forge-a2ui-text':
      return html`<forge-a2ui-text .context=${context} .surface=${surface}></forge-a2ui-text>`;
    case 'forge-a2ui-icon':
      return html`<forge-a2ui-icon .context=${context} .surface=${surface}></forge-a2ui-icon>`;
    case 'forge-a2ui-stack':
      return html`<forge-a2ui-stack .context=${context} .surface=${surface}></forge-a2ui-stack>`;
    case 'forge-a2ui-list':
      return html`<forge-a2ui-list .context=${context} .surface=${surface}></forge-a2ui-list>`;
    case 'forge-a2ui-list-item':
      return html`<forge-a2ui-list-item .context=${context} .surface=${surface}></forge-a2ui-list-item>`;
    case 'forge-a2ui-card':
      return html`<forge-a2ui-card .context=${context} .surface=${surface}></forge-a2ui-card>`;
    case 'forge-a2ui-button':
      return html`<forge-a2ui-button .context=${context} .surface=${surface}></forge-a2ui-button>`;
    case 'forge-a2ui-icon-button':
      return html`<forge-a2ui-icon-button .context=${context} .surface=${surface}></forge-a2ui-icon-button>`;
    case 'forge-a2ui-text-field':
      return html`<forge-a2ui-text-field .context=${context} .surface=${surface}></forge-a2ui-text-field>`;
    case 'forge-a2ui-checkbox':
      return html`<forge-a2ui-checkbox .context=${context} .surface=${surface}></forge-a2ui-checkbox>`;
    case 'forge-a2ui-avatar':
      return html`<forge-a2ui-avatar .context=${context} .surface=${surface}></forge-a2ui-avatar>`;
    case 'forge-a2ui-badge':
      return html`<forge-a2ui-badge .context=${context} .surface=${surface}></forge-a2ui-badge>`;
    case 'forge-a2ui-divider':
      return html`<forge-a2ui-divider .context=${context} .surface=${surface}></forge-a2ui-divider>`;
    case 'forge-a2ui-inline-message':
      return html`<forge-a2ui-inline-message .context=${context} .surface=${surface}></forge-a2ui-inline-message>`;
    case 'forge-a2ui-toolbar':
      return html`<forge-a2ui-toolbar .context=${context} .surface=${surface}></forge-a2ui-toolbar>`;
    default:
      return html`<div>Unknown: ${tagName}</div>`;
  }
}

/** Render an array of child component IDs. Used by container components (Stack, List, Toolbar, etc.) */
export function renderChildren(
  children: string[] | undefined,
  surface: SurfaceModel<ComponentApi>,
  dataModelBasePath = '/'
): TemplateResult[] {
  if (!children || children.length === 0) {
    return [];
  }
  return children.map(id => renderNode(id, surface, dataModelBasePath) as TemplateResult);
}
