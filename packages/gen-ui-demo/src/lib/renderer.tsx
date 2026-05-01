/**
 * Spec Renderer
 *
 * The main entry point for rendering a JSON UI spec. This component acts as
 * the orchestrator - it manages state, handles watch effects, and delegates
 * element rendering to the memoized ElementRenderer component.
 *
 * Architecture:
 * - SpecRenderer: Orchestrator (state, watches, validation, emit factory)
 * - ElementRenderer: Memoized recursive renderer (one per element)
 * - ElementErrorBoundary: Error containment (wraps each element)
 * - useValidation: Validation state management (extracted hook)
 *
 * @example
 * <SpecRenderer
 *   spec={aiGeneratedSpec}
 *   state={appState}
 *   registry={componentRegistry}
 *   onAction={handleAction}
 *   functions={{ formatCurrency, formatDate }}
 *   errorFallback={(error, type) => <ErrorCard error={error} />}
 * />
 */
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { getByPath } from '@json-render/core';
import {
  createStateManager,
  resolveProps,
  type Spec,
  type StateManager,
  type ActionEvent,
  type Registry,
  type ActionHandler,
  type RenderContext,
  type ComputedFunction
} from '../core';
import { useValidation } from './use-validation';
import { ElementRenderer } from './element-renderer';
import type { ErrorFallback } from './element-error-boundary';

export interface SpecRendererProps {
  /** The UI spec to render */
  spec: Spec;
  /** External state to merge with spec's default state */
  state?: Record<string, unknown>;
  /** Callback when internal state changes */
  onStateChange?: (state: Record<string, unknown>) => void;
  /** Component registry mapping types to factory functions */
  registry: Registry<ReactNode, ReactNode[]>;
  /** Callback when actions are triggered (for logging/external handling) */
  onAction?: (event: ActionEvent) => void;
  /** Named functions for $computed expressions */
  functions?: Record<string, ComputedFunction>;
  /** Fallback UI to show when a component throws during render */
  errorFallback?: ErrorFallback;
}

export function SpecRenderer({
  spec,
  state: externalState,
  onStateChange,
  registry,
  onAction,
  functions,
  errorFallback
}: SpecRendererProps): ReactElement {
  // Initialize state from spec defaults and external state
  const [stateModel, setStateModel] = useState<Record<string, unknown>>(() => ({
    ...(spec.state ?? {}),
    ...(externalState ?? {})
  }));

  // Sync external state changes into internal state
  useEffect(() => {
    setStateModel(prev => ({
      ...(spec.state ?? {}),
      ...prev,
      ...(externalState ?? {})
    }));
  }, [spec.state, externalState]);

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.(stateModel);
  }, [stateModel, onStateChange]);

  // Track previous state for watch comparisons
  const prevStateRef = useRef<Record<string, unknown> | null>(null);

  // Watch effect: fire actions when watched state paths change
  useEffect(() => {
    // Skip on first render - only fire on actual changes
    if (!spec.elements || !prevStateRef.current) {
      prevStateRef.current = structuredClone(stateModel);
      return;
    }

    const prevState = prevStateRef.current;
    const renderCtx: RenderContext = { stateModel, functions };

    // Check each element's watch config for changed paths
    for (const element of Object.values(spec.elements)) {
      if (!element.watch) {
        continue;
      }

      for (const [watchPath, handlers] of Object.entries(element.watch)) {
        const prevValue = getByPath(prevState, watchPath);
        const newValue = getByPath(stateModel, watchPath);

        // Only fire if value actually changed
        if (prevValue === newValue) {
          continue;
        }

        // Execute all handlers for this path
        const handlerArray = Array.isArray(handlers) ? handlers : [handlers];
        for (const handler of handlerArray) {
          const actionHandler = registry.getAction(handler.action);
          const resolvedParams = handler.params ? resolveProps(handler.params, renderCtx) : {};
          if (actionHandler) {
            actionHandler(resolvedParams, setStateModel, stateModel);
          }
          onAction?.({ action: handler.action, payload: resolvedParams, state: { ...stateModel } });
        }
      }
    }

    // Store current state for next comparison
    prevStateRef.current = JSON.parse(JSON.stringify(stateModel));
  }, [stateModel, spec.elements, registry, onAction, functions]);

  // Create state manager for components to read/write state
  const stateManager: StateManager = useMemo(() => {
    return createStateManager(stateModel, () => {
      setStateModel(prev => ({ ...prev }));
    });
  }, [stateModel]);

  // Validation state management (extracted to separate hook)
  const { validationState, markTouched } = useValidation(spec, stateModel);

  // Factory for creating emit functions bound to element event handlers.
  // Each element gets its own emit function that resolves its `on` handlers.
  const createEmit = useCallback(
    (elementOn: Record<string, ActionHandler> | undefined, ctx: RenderContext) => {
      return (eventName: string, eventPayload?: Record<string, unknown>): void => {
        const handler = elementOn?.[eventName];
        if (handler) {
          const actionHandler = registry.getAction(handler.action);
          const resolvedParams = handler.params ? resolveProps(handler.params, ctx) : {};
          const params = { ...resolvedParams, ...eventPayload };
          if (actionHandler) {
            actionHandler(params, setStateModel, stateModel);
          }
          onAction?.({ action: handler.action, payload: params, state: { ...stateModel } });
        }
      };
    },
    [registry, onAction, stateModel]
  );

  // Handle missing/empty spec
  if (!spec.root || !spec.elements) {
    return <div className="genui-renderer" />;
  }

  const rootElement = spec.elements[spec.root];
  if (!rootElement) {
    return <div className="genui-renderer" />;
  }

  const renderContext: RenderContext = { stateModel, functions };

  return (
    <div className="genui-renderer">
      <ElementRenderer
        elementId={spec.root}
        element={rootElement}
        elements={spec.elements}
        renderContext={renderContext}
        registry={registry}
        stateManager={stateManager}
        createEmit={createEmit}
        validationState={validationState}
        markTouched={markTouched}
        errorFallback={errorFallback}
      />
    </div>
  );
}
