/**
 * useRenderer Hook
 *
 * Main entry point for React-based GenUI rendering.
 * Provides a simple API for setting up GenUI with optional custom components.
 */

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import {
  GenUIController,
  type ComponentSchema,
  type GenUISpec,
  type ActionEvent
} from '@tylertech/forge-genui-core';
import { createRegistry } from './registry.js';
import { catalogComponents } from './components/index.js';
import { GenUIRenderer } from './renderer.js';
import type { RendererConfig, UseRendererResult, ReactComponentFactory, CatalogEntry } from './types.js';

export function useRenderer(config: RendererConfig = {}): UseRendererResult {
  const { catalog, components, includePatchTool = false, onAction, onRender } = config;

  const [loading, setLoadingState] = useState(false);
  const [spec, setSpec] = useState<GenUISpec | null>(null);

  const onActionRef = useRef(onAction);
  onActionRef.current = onAction;

  const onRenderRef = useRef(onRender);
  onRenderRef.current = onRender;

  const { registry, schemas, controller } = useMemo(() => {
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
              `[forge-genui-react] Component "${name}" has no schema. ` +
                `LLM won't know how to use it. Provide a schema in the config.`
            );
            continue;
          }

          finalCatalog[name] = {
            factory: def.factory as ReactComponentFactory,
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

    return { registry, schemas, controller };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    controller.onLoading = setLoadingState;
    controller.onRender = (newSpec: GenUISpec): void => {
      setSpec(newSpec);
      onRenderRef.current?.(newSpec);
    };
    controller.onAction((event: ActionEvent): void => {
      onActionRef.current?.(event);
    });
  }, [controller]);

  const handleAction = useCallback((event: ActionEvent): void => {
    onActionRef.current?.(event);
  }, []);

  const Renderer: FC = useMemo(() => {
    return function GenUIRendererComponent(): React.ReactElement | null {
      if (!spec) {
        return null;
      }
      return <GenUIRenderer spec={spec} registry={registry} loading={loading} onAction={handleAction} />;
    };
  }, [spec, registry, loading, handleAction]);

  const setLoading = useCallback((value: boolean): void => {
    setLoadingState(value);
  }, []);

  const reset = useCallback((): void => {
    controller.reset();
    setSpec(null);
  }, [controller]);

  const getState = useCallback(() => {
    return controller.getState();
  }, [controller]);

  const setState = useCallback(
    (state: Parameters<typeof controller.setState>[0]): void => {
      controller.setState(state);
      const currentState = controller.getState();
      if (currentState.spec) {
        setSpec(currentState.spec);
      }
    },
    [controller]
  );

  return {
    tools: controller.tools,
    componentSchemas: schemas,
    Renderer,
    loading,
    setLoading,
    reset,
    getState,
    setState
  };
}
