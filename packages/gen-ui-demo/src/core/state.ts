import { getByPath, setByPath, resolveDynamicValue } from '@json-render/core';
import type { StateManager } from './types';

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
