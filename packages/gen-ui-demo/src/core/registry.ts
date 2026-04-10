import type { Registry, ComponentFactory } from './types';

export interface CreateRegistryConfig<TResult, TChildren = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: Record<string, ComponentFactory<TResult, any, TChildren>>;
}

export function createRegistry<TResult, TChildren = unknown>(
  config: CreateRegistryConfig<TResult, TChildren>
): Registry<TResult, TChildren> {
  const { components } = config;

  return {
    get: ({ type }) => components[type],
    has: ({ type }) => type in components
  };
}
