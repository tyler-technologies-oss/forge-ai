import type { Registry, ComponentFactory, RegistryActionHandler } from './types';

export interface CreateRegistryConfig<TResult, TChildren = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: Record<string, ComponentFactory<TResult, any, TChildren>>;
  actions?: Record<string, RegistryActionHandler>;
}

export function createRegistry<TResult, TChildren = unknown>(
  config: CreateRegistryConfig<TResult, TChildren>
): Registry<TResult, TChildren> {
  const { components, actions = {} } = config;

  return {
    get: ({ type }) => components[type],
    has: ({ type }) => type in components,
    getAction: (name) => actions[name]
  };
}
