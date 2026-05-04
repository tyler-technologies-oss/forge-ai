import { useCallback } from 'react';
import type { StateManager } from '@tylertech/agent-ui';

export function useBoundProp<T>(
  value: T,
  bindingPath: string | undefined,
  state: StateManager
): [T, (newValue: T) => void] {
  const setValue = useCallback(
    (newValue: T) => {
      if (bindingPath) {
        state.set(bindingPath, newValue);
      }
    },
    [bindingPath, state]
  );

  return [value, setValue];
}
