import { useState, useMemo, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import {
  createCompiler,
  createRenderTool,
  type GenUISpec,
  type ActionEvent,
  type ToolDefinition,
  type Catalog,
  type Registry
} from '../core';
import { GenUIRenderer } from './renderer';

export interface UseGenUIConfig {
  catalog: Catalog;
  registry: Registry<ReactNode, ReactNode>;
  onAction?: (event: ActionEvent) => void;
}

export interface UseGenUIResult {
  tools: ToolDefinition[];
  Renderer: FC;
  spec: GenUISpec | null;
  setSpec: (spec: GenUISpec | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export function useGenUI(config: UseGenUIConfig): UseGenUIResult {
  const { catalog, registry, onAction } = config;
  const [spec, setSpec] = useState<GenUISpec | null>(null);
  const [loading, setLoading] = useState(false);

  const specCompiler = useMemo(() => createCompiler(), []);

  const tools = useMemo(
    () => [
      createRenderTool({
        specCompiler,
        catalog,
        onRender: setSpec
      })
    ],
    [specCompiler, catalog]
  );

  const handleAction = useCallback(
    (event: ActionEvent): void => {
      console.log('[GenUI] Action:', event);
      onAction?.(event);
    },
    [onAction]
  );

  const Renderer: FC = useMemo(() => {
    return function GenUIRendererWrapper(): React.ReactElement | null {
      if (!spec) {
        return null;
      }
      return <GenUIRenderer spec={spec} registry={registry} onAction={handleAction} />;
    };
  }, [spec, registry, handleAction]);

  const reset = useCallback((): void => {
    setSpec(null);
  }, []);

  return {
    tools,
    Renderer,
    spec,
    setSpec,
    loading,
    setLoading,
    reset
  };
}
