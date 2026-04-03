/**
 * Component Registry
 *
 * Maps component type names (e.g., "Button", "Card") to their TemplateFactory
 * functions. When the renderer encounters an element with type "Button", it
 * looks up the factory here and calls it with the ComponentContext.
 *
 * Use createRegistry() with built-in components, then registry.register()
 * to add custom components.
 */

import type { TemplateFactory } from './types.js';

export interface Registry {
  components: Map<string, TemplateFactory>;
  get(type: string): TemplateFactory | undefined;
  register(type: string, template: TemplateFactory): void;
}

export function createRegistry(
  components: Record<string, TemplateFactory>
): Registry {
  const map = new Map<string, TemplateFactory>(Object.entries(components));

  return {
    components: map,
    get(type: string): TemplateFactory | undefined {
      return map.get(type);
    },
    register(type: string, template: TemplateFactory): void {
      map.set(type, template);
    }
  };
}
