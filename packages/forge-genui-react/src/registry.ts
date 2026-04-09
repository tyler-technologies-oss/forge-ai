/**
 * Component Registry
 *
 * Maps component type names (e.g., "Button", "Card") to their ReactComponentFactory
 * functions. When the renderer encounters an element with type "Button", it
 * looks up the factory here and calls it with the ReactComponentContext.
 */

import type { ReactComponentFactory, ReactRegistry } from './types.js';

/**
 * Creates a registry from a record of components.
 */
export function createRegistry(components: Record<string, ReactComponentFactory> = {}): ReactRegistry {
  const map = new Map<string, ReactComponentFactory>(Object.entries(components));

  return {
    components: map,
    get(type: string): ReactComponentFactory | undefined {
      return map.get(type);
    },
    register(type: string, factory: ReactComponentFactory): void {
      map.set(type, factory);
    }
  };
}
