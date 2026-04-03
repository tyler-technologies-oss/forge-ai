/**
 * State Management
 *
 * Provides reactive state for the json-render system. Components can:
 * - Bind props to state using { $state: "/path/to/value" } syntax
 * - Read state via state.get("/path")
 * - Write state via state.set("/path", value) which triggers re-render
 *
 * Paths use JSON Pointer format (RFC 6901): "/users/0/name"
 */

import { getByPath, setByPath, resolveDynamicValue } from '@json-render/core';
import type { StateManager } from './types.js';

/**
 * Creates a StateManager that wraps the spec's state object.
 * onChange callback is invoked on any state.set() to trigger re-renders.
 */
export function createStateManager(
  state: Record<string, unknown>,
  onChange: () => void
): StateManager {
  return {
    get<T = unknown>(path: string): T | undefined {
      return getByPath(state, path) as T | undefined;
    },
    set(path: string, value: unknown): void {
      setByPath(state, path, value);
      onChange();
    },
    resolve<T = unknown>(value: unknown): T {
      return resolveDynamicValue(value, { stateModel: state }) as T;
    }
  };
}
