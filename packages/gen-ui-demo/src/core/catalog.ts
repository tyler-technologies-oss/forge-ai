import { defineCatalog } from '@json-render/core';
import { defaultSchema } from './schema';
import type { Catalog, PromptConfig, ValidateConfig, GenUISpec, ActionDefinition, ComponentDefinition, ComponentSchema, ActionSchema } from './types';

export interface CreateCatalogConfig {
  components: Record<string, ComponentDefinition>;
  actions?: Record<string, ActionDefinition>;
  rules?: string[];
}

export function createCatalog(config: CreateCatalogConfig): Catalog {
  const { components, actions = {}, rules } = config;
  const catalog = defineCatalog(defaultSchema, { components, actions });

  return {
    prompt: (opts?: PromptConfig) =>
      catalog.prompt({
        mode: opts?.mode ?? 'standalone',
        customRules: rules
      }),
    validate: (opts: ValidateConfig) => {
      const result = catalog.validate(opts.spec);
      return {
        success: result.success,
        data: result.success ? (result.data as GenUISpec) : undefined,
        error: result.success ? undefined : String(result.error)
      };
    },
    jsonSchema: () => catalog.jsonSchema(),
    components: () => {
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
    },
    actions: () => {
      const result: Record<string, ActionSchema> = {};
      for (const [name, def] of Object.entries(actions)) {
        result[name] = {
          action: name,
          description: def.description ?? '',
          params: def.params
        };
      }
      return result;
    }
  };
}
