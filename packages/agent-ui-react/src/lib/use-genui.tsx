import { useState, useMemo, useCallback, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { setByPath } from '@json-render/core';
import {
  createCompiler,
  createRenderTool,
  type Spec,
  type ActionEvent,
  type ToolDefinition,
  type Catalog,
  type Registry
} from '@tylertech/agent-ui';
import { SpecRenderer } from './renderer.js';

export interface UseGenUIConfig {
  catalog: Catalog;
  registry: Registry<ReactNode, ReactNode[]>;
  onAction?: (event: ActionEvent) => void;
}

export interface UseGenUIResult {
  tools: ToolDefinition[];
  Renderer: FC;
  spec: Spec | null;
  setSpec: (spec: Spec | null) => void;
  state: Record<string, unknown>;
  setState: (state: Record<string, unknown>) => void;
  patchState: (path: string, value: unknown) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export function useGenUI(config: UseGenUIConfig): UseGenUIResult {
  const { catalog, registry, onAction } = config;
  const [spec, setSpec] = useState<Spec | null>(null);
  const [state, setStateInternal] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;

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

  const setState = useCallback((newState: Record<string, unknown>): void => {
    setStateInternal(newState);
  }, []);

  const patchState = useCallback((path: string, value: unknown): void => {
    const newState = { ...stateRef.current };
    setByPath(newState, path, value);
    setStateInternal(newState);
  }, []);

  const handleAction = useCallback((event: ActionEvent): void => onAction?.(event), [onAction]);

  const Renderer: FC = useMemo(() => {
    return function AgentUIRendererWrapper(): React.ReactElement | null {
      if (!spec) {
        return null;
      }
      return <SpecRenderer spec={spec} registry={registry} onAction={handleAction} />;
    };
  }, [spec, registry, handleAction]);

  const reset = useCallback((): void => {
    setSpec(null);
    setStateInternal({});
  }, []);

  return {
    tools,
    Renderer,
    spec,
    setSpec,
    state,
    setState,
    patchState,
    loading,
    setLoading,
    reset
  };
}
