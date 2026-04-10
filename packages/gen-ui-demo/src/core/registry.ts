import type { Registry, ComponentFactory } from './types';

export interface CreateRegistryConfig<TResult, TChildren = unknown> {
  components: Record<string, ComponentFactory<TResult, TChildren>>;
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
