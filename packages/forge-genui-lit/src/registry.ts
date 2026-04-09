/**
 * Component Registry
 *
 * Maps component type names (e.g., "Button", "Card") to their LitTemplateFactory
 * functions. When the renderer encounters an element with type "Button", it
 * looks up the factory here and calls it with the LitComponentContext.
 */

import type { LitTemplateFactory, LitRegistry } from './types.js';

/**
 * Creates a registry from a record of components.
 */
export function createRegistry(components: Record<string, LitTemplateFactory> = {}): LitRegistry {
  const map = new Map<string, LitTemplateFactory>(Object.entries(components));

  return {
    components: map,
    get(type: string): LitTemplateFactory | undefined {
      return map.get(type);
    },
    register(type: string, template: LitTemplateFactory): void {
      map.set(type, template);
    }
  };
}
