import { defineCatalog } from '@json-render/core';
import { defaultSchema } from './schema.js';
import type { ActionDefinition, ComponentDefinition, ComponentSchema, ActionSchema } from './types.js';

export interface CreateCatalogConfig {
  components: Record<string, ComponentDefinition>;
  actions?: Record<string, ActionDefinition>;
  rules?: string[];
}

export function createCatalog(config: CreateCatalogConfig) {
  const { components, actions = {}, rules } = config;
  const baseCatalog = defineCatalog(defaultSchema, { components, actions });

  const getComponents = (): Record<string, ComponentSchema> => {
    const result: Record<string, ComponentSchema> = {};
    for (const [name, def] of Object.entries(components)) {
      result[name] = {
        component: name,
        description: def.description ?? '',
        props: def.props,
        slots: def.slots
      };
    }
    return result;
  };

  const getActions = (): Record<string, ActionSchema> => {
    const result: Record<string, ActionSchema> = {};
    for (const [name, def] of Object.entries(actions)) {
      result[name] = {
        action: name,
        description: def.description ?? '',
        params: def.params
      };
    }
    return result;
  };

  const originalPrompt = baseCatalog.prompt.bind(baseCatalog);

  return Object.assign(baseCatalog, {
    components: getComponents,
    actions: getActions,
    prompt: (options?: { mode?: 'standalone' | 'inline' | 'generate' | 'chat' }) =>
      originalPrompt({ ...options, customRules: rules })
  });
}

export type AgentCatalog = ReturnType<typeof createCatalog>;
