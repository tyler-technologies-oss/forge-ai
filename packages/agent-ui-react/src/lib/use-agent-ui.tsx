import { useState, useMemo, useCallback, useRef } from 'react';
import type { FC } from 'react';
import { setByPath, type Spec } from '@json-render/core';
import type { ComponentRegistry } from '@json-render/react';
import { createCompiler, createRenderTool, type ToolDefinition, type Catalog } from '@tylertech/agent-ui';
import { Renderer } from './renderer.js';

export interface UseAgentUIConfig {
  /** Component catalog defining available UI components and their schemas */
  catalog: Catalog;
  /** Registry mapping component types to React component implementations */
  registry: ComponentRegistry;
  /** Action handlers invoked when UI components trigger actions */
  handlers?: Record<string, (params: Record<string, unknown>) => Promise<unknown> | unknown>;
  /** Optional callback fired whenever any action is triggered (useful for logging/analytics) */
  onAction?: (actionName: string, params?: Record<string, unknown>) => void;
}

export interface UseAgentUIResult {
  /** AI tool definitions to pass to the LLM - enables the model to render UI */
  tools: ToolDefinition[];
  /** Pre-configured Renderer component that displays the current spec */
  Renderer: FC;
  /** Current UI spec (null when no UI has been rendered) */
  spec: Spec | null;
  /** Manually set the spec (typically called by the AI tool, but exposed for direct control) */
  setSpec: (spec: Spec | null) => void;
  /** Current state model shared between all rendered components */
  state: Record<string, unknown>;
  /** Replace the entire state model */
  setState: (state: Record<string, unknown>) => void;
  /** Update a single value in the state model by path (e.g., "/user/name") */
  patchState: (path: string, value: unknown) => void;
  /** Whether the AI is currently streaming a response */
  isStreaming: boolean;
  /** Set streaming state (shows loading indicators in rendered UI) */
  setIsStreaming: (isStreaming: boolean) => void;
  /** Clear the spec and state, returning to initial empty state */
  reset: () => void;
}

/**
 * Hook for integrating AI-generated UI into a React application.
 *
 * Provides tools for the AI to render UI, a Renderer component to display it,
 * and state management utilities to control the rendered interface.
 *
 * @example
 * ```tsx
 * const { tools, Renderer, isStreaming, setIsStreaming } = useAgentUI({
 *   catalog,
 *   registry,
 *   handlers: { submit: async (params) => api.submit(params) }
 * });
 *
 * // Render the AI-generated UI
 * return <Renderer />;
 * ```
 */
export function useAgentUI(config: UseAgentUIConfig): UseAgentUIResult {
  const { catalog, registry, handlers, onAction } = config;
  const [spec, setSpec] = useState<Spec | null>(null);
  const [state, setStateInternal] = useState<Record<string, unknown>>({});
  const [isStreaming, setIsStreaming] = useState(false);
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

  const wrappedHandlers = useMemo(() => {
    if (!handlers) {
      return undefined;
    }
    const wrapped: Record<string, (params: Record<string, unknown>) => Promise<unknown> | unknown> = {};
    for (const [name, handler] of Object.entries(handlers)) {
      wrapped[name] = (params: Record<string, unknown>) => {
        onAction?.(name, params);
        return handler(params);
      };
    }
    return wrapped;
  }, [handlers, onAction]);

  const RendererComponent: FC = useMemo(() => {
    return function AgentUIRendererWrapper(): React.ReactElement | null {
      if (!spec) {
        return null;
      }
      return (
        <Renderer
          spec={spec}
          registry={registry}
          handlers={wrappedHandlers}
          initialState={state}
          loading={isStreaming}
        />
      );
    };
  }, [spec, registry, wrappedHandlers, state, isStreaming]);

  const reset = useCallback((): void => {
    setSpec(null);
    setStateInternal({});
  }, []);

  return {
    tools,
    Renderer: RendererComponent,
    spec,
    setSpec,
    state,
    setState,
    patchState,
    isStreaming,
    setIsStreaming,
    reset
  };
}
