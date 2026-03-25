/**
 * A2UI Node Renderer
 *
 * Recursively renders A2UI component nodes into Lit templates.
 * Uses the catalog-driven template registry from forge-catalog.ts.
 *
 * Each component receives a `context` (provides component model + data binding)
 * and `surface` (access to sibling components and shared data model).
 */
import { type TemplateResult, nothing } from 'lit';
import type { SurfaceModel, ComponentApi } from '@a2ui/web_core/v0_9';
import { ComponentContext as ComponentContextClass } from '@a2ui/web_core/v0_9';
import { componentTemplates } from './forge-catalog.js';

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

  const context = new ComponentContextClass(surface, componentId, dataModelBasePath);
  const templateFn = componentTemplates.get(componentModel.type);

  if (!templateFn) {
    console.warn(`Unknown component type: ${componentModel.type}`);
    return nothing;
  }

  return templateFn(context, surface);
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
