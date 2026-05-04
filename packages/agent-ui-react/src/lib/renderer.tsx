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
} from '@tylertech/agent-ui';
import { useValidation } from './use-validation.js';
import { ElementRenderer } from './element-renderer.js';
import type { ErrorFallback } from './element-error-boundary.js';

export interface SpecRendererProps {
  spec: Spec;
  state?: Record<string, unknown>;
  onStateChange?: (state: Record<string, unknown>) => void;
  registry: Registry<ReactNode, ReactNode[]>;
  onAction?: (event: ActionEvent) => void;
  functions?: Record<string, ComputedFunction>;
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
  const [stateModel, setStateModel] = useState<Record<string, unknown>>(() => ({
    ...(spec.state ?? {}),
    ...(externalState ?? {})
  }));

  useEffect(() => {
    setStateModel(prev => ({
      ...(spec.state ?? {}),
      ...prev,
      ...(externalState ?? {})
    }));
  }, [spec.state, externalState]);

  useEffect(() => {
    onStateChange?.(stateModel);
  }, [stateModel, onStateChange]);

  const prevStateRef = useRef<Record<string, unknown> | null>(null);

  useEffect(() => {
    if (!spec.elements || !prevStateRef.current) {
      prevStateRef.current = structuredClone(stateModel);
      return;
    }

    const prevState = prevStateRef.current;
    const renderCtx: RenderContext = { stateModel, functions };

    for (const element of Object.values(spec.elements)) {
      if (!element.watch) {
        continue;
      }

      for (const [watchPath, handlers] of Object.entries(element.watch)) {
        const prevValue = getByPath(prevState, watchPath);
        const newValue = getByPath(stateModel, watchPath);

        if (prevValue === newValue) {
          continue;
        }

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

    prevStateRef.current = JSON.parse(JSON.stringify(stateModel));
  }, [stateModel, spec.elements, registry, onAction, functions]);

  const stateManager: StateManager = useMemo(() => {
    return createStateManager(stateModel, () => {
      setStateModel(prev => ({ ...prev }));
    });
  }, [stateModel]);

  const { validationState, markTouched } = useValidation(spec, stateModel);

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

  if (!spec.root || !spec.elements) {
    return <div className="spec-renderer" />;
  }

  const rootElement = spec.elements[spec.root];
  if (!rootElement) {
    return <div className="spec-renderer" />;
  }

  const renderContext: RenderContext = { stateModel, functions };

  return (
    <div className="spec-renderer">
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
