/**
 * createRenderer - Main entry point for Lit-based GenUI rendering.
 *
 * Provides a simple API for setting up GenUI with optional custom components.
 */

import {
  GenUIController,
  type ComponentSchema,
  type SpecRendererState,
  type ActionEvent,
  type GenUISpec
} from '@tylertech/forge-genui-core';
import { createRegistry } from './registry.js';
import { LitRendererAdapter } from './adapter.js';
import { catalogComponents } from './components/index.js';
import type { RendererConfig, GenUIRenderer, LitTemplateFactory, CatalogEntry } from './types.js';

export function createRenderer(config: RendererConfig = {}): GenUIRenderer {
  const { catalog, components, includePatchTool = false } = config;

  if (catalog && components) {
    throw new Error(
      'Cannot specify both "catalog" and "components". ' +
        'Use "catalog" for complete replacement or "components" for add/override.'
    );
  }

  let finalCatalog: Record<string, CatalogEntry>;

  if (catalog) {
    finalCatalog = catalog;
  } else {
    finalCatalog = { ...catalogComponents };

    if (components) {
      for (const [name, def] of Object.entries(components)) {
        const existing = finalCatalog[name];
        const schema = def.schema ?? existing?.schema;

        if (!schema) {
          console.warn(
            `[forge-genui-lit] Component "${name}" has no schema. ` +
              `LLM won't know how to use it. Provide a schema in the config.`
          );
          continue;
        }

        finalCatalog[name] = {
          factory: def.factory as LitTemplateFactory,
          schema
        };
      }
    }
  }

  const registry = createRegistry();
  const schemas: Record<string, ComponentSchema> = {};

  for (const [name, entry] of Object.entries(finalCatalog)) {
    registry.register(name, entry.factory);
    schemas[name] = entry.schema;
  }

  const controller = new GenUIController({
    componentSchemas: schemas,
    includePatchTool
  });

  const adapter = new LitRendererAdapter({ registry });
  controller.setAdapter(adapter);

  let onLoadingCallback: ((loading: boolean) => void) | undefined;
  let onRenderCallback: ((spec: GenUISpec) => void) | undefined;

  controller.onLoading = (loading: boolean): void => {
    adapter.setLoading(loading);
    onLoadingCallback?.(loading);
  };

  controller.onRender = (spec: GenUISpec): void => {
    onRenderCallback?.(spec);
  };

  return {
    get tools() {
      return controller.tools;
    },

    get componentSchemas() {
      return schemas;
    },

    attach(container: HTMLElement): void {
      controller.attach(container);
    },

    detach(): void {
      controller.detach();
    },

    reset(): void {
      controller.reset();
    },

    setLoading(loading: boolean): void {
      adapter.setLoading(loading);
      onLoadingCallback?.(loading);
    },

    getState(): SpecRendererState {
      return controller.getState();
    },

    setState(state: SpecRendererState): void {
      controller.setState(state);
    },

    onAction(handler: (event: ActionEvent) => void): void {
      controller.onAction(handler);
    },

    get onLoadingChange() {
      return onLoadingCallback;
    },
    set onLoadingChange(handler: ((loading: boolean) => void) | undefined) {
      onLoadingCallback = handler;
    },

    get onRender() {
      return onRenderCallback;
    },
    set onRender(handler: ((spec: GenUISpec) => void) | undefined) {
      onRenderCallback = handler;
    }
  };
}
