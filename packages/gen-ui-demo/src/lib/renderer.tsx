import { useState, useCallback, useMemo, useEffect, useRef, Fragment } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { getByPath, runValidation, builtInValidationFunctions, type ValidationConfig as JRValidationConfig } from '@json-render/core';
import {
  createStateManager,
  resolveProps,
  resolveBindingPaths,
  isVisible,
  createRepeatContext,
  type Spec,
  type FieldValidationState,
  type StateManager,
  type ActionEvent,
  type Registry,
  type ComponentContext,
  type ActionHandler,
  type RenderContext,
  type ComputedFunction
} from '../core';

export interface SpecRendererProps {
  /** The specification for the UI to render */
  spec: Spec;
  /** The initial state for the UI */
  state?: Record<string, unknown>;
  /** Callback invoked when the state changes */
  onStateChange?: (state: Record<string, unknown>) => void;
  /** The registry of available components for the catalog */
  registry: Registry<ReactNode, ReactNode[]>;
  /** Callback invoked when an action is triggered */
  onAction?: (event: ActionEvent) => void;
  /** Named functions for $computed expressions */
  functions?: Record<string, ComputedFunction>;
}

export function SpecRenderer({
  spec,
  state: externalState,
  onStateChange,
  registry,
  onAction,
  functions
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

  const [validationState, setValidationState] = useState<Record<string, FieldValidationState>>({});

  const markTouched = useCallback((elementId: string) => {
    setValidationState(prev => ({
      ...prev,
      [elementId]: { ...(prev[elementId] ?? { valid: true, errors: [] }), touched: true }
    }));
  }, []);

  useEffect(() => {
    if (!spec.elements) return;

    const newValidationState: Record<string, FieldValidationState> = {};
    for (const [elementId, element] of Object.entries(spec.elements)) {
      if (!element.validation?.checks?.length) continue;

      const bindPath = Object.values(element.props ?? {}).find(
        (v): v is { $bindState: string } => typeof v === 'object' && v !== null && '$bindState' in v
      )?.$bindState;

      if (!bindPath) continue;

      const value = getByPath(stateModel, bindPath);
      const result = runValidation(element.validation as JRValidationConfig, {
        value,
        stateModel,
        customFunctions: builtInValidationFunctions
      });

      newValidationState[elementId] = {
        valid: result.valid,
        errors: result.errors,
        touched: validationState[elementId]?.touched ?? false
      };
    }

    setValidationState(prev => ({ ...prev, ...newValidationState }));
  }, [stateModel, spec.elements]);

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

  const renderElement = useCallback(
    (elementId: string, ctx?: RenderContext): ReactNode => {
      if (!spec.elements) {
        return null;
      }

      const element = spec.elements[elementId];
      if (!element) {
        console.warn(`Element not found: ${elementId}`);
        return null;
      }

      const renderCtx: RenderContext = ctx ?? { stateModel, functions };

      if (element.visible !== undefined && !isVisible(element.visible, renderCtx)) {
        return null;
      }

      const factory = registry.get({ type: element.type });
      if (!factory) {
        console.warn(`Unknown component type: ${element.type}`);
        return null;
      }

      const resolvedProps = element.props ? resolveProps(element.props, renderCtx) : {};
      const bindings = (element.props ? resolveBindingPaths(element.props, renderCtx) : {}) ?? {};

      let children: ReactNode[];
      if (element.repeat && element.children?.length) {
        const array = getByPath(stateModel, element.repeat.statePath) as unknown[] | undefined;
        if (Array.isArray(array)) {
          children = array.flatMap((item, index) => {
            const repeatCtx = createRepeatContext(renderCtx, element.repeat!.statePath, index);
            const key = element.repeat!.key ? (item as Record<string, unknown>)[element.repeat!.key] : index;
            return element.children!.map(childId => (
              <Fragment key={`${childId}-${key}`}>{renderElement(childId, repeatCtx)}</Fragment>
            ));
          });
        } else {
          children = [];
        }
      } else {
        children = element.children?.map(childId => renderElement(childId, renderCtx)) ?? [];
      }

      const context: ComponentContext<Record<string, unknown>, ReactNode[]> = {
        props: resolvedProps,
        children,
        emit: createEmit(element.on, renderCtx),
        state: stateManager,
        bindings,
        validation: validationState[elementId],
        onBlur: element.validation ? () => markTouched(elementId) : undefined
      };

      return <Fragment key={elementId}>{factory(context)}</Fragment>;
    },
    [spec.elements, stateModel, registry, createEmit, stateManager, functions, validationState, markTouched]
  );

  if (!spec.root) {
    return <div className="genui-renderer" />;
  }

  return <div className="genui-renderer">{renderElement(spec.root)}</div>;
}
