import { useState, useCallback, useMemo, useEffect, Fragment } from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
  createStateManager,
  resolveProps,
  resolveBindingPaths,
  isVisible,
  type GenUISpec,
  type StateManager,
  type ActionEvent,
  type Registry,
  type ComponentContext,
  type ActionHandler
} from '../core';

export interface GenUIRendererProps {
  spec: GenUISpec;
  registry: Registry<ReactNode, ReactNode[]>;
  onAction?: (event: ActionEvent) => void;
}

export function GenUIRenderer({ spec, registry, onAction }: GenUIRendererProps): ReactElement {
  const [stateModel, setStateModel] = useState<Record<string, unknown>>(() => spec.state ?? {});

  useEffect(() => {
    if (spec.state) {
      setStateModel({ ...spec.state });
    }
  }, [spec.state]);

  const stateManager: StateManager = useMemo(() => {
    return createStateManager(stateModel, () => {
      setStateModel(prev => ({ ...prev }));
    });
  }, [stateModel]);

  const createEmit = useCallback(
    (elementOn: Record<string, ActionHandler> | undefined) => {
      return (eventName: string, eventPayload?: Record<string, unknown>): void => {
        const handler = elementOn?.[eventName];
        if (handler) {
          const actionHandler = registry.getAction(handler.action);
          const params = { ...handler.params, ...eventPayload };
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
    (elementId: string): ReactNode => {
      if (!spec.elements) {
        return null;
      }

      const element = spec.elements[elementId];
      if (!element) {
        console.warn(`Element not found: ${elementId}`);
        return null;
      }

      if (element.visible !== undefined && !isVisible(element.visible, { stateModel })) {
        return null;
      }

      const factory = registry.get({ type: element.type });
      if (!factory) {
        console.warn(`Unknown component type: ${element.type}`);
        return null;
      }

      const resolvedProps = element.props ? resolveProps(element.props, { stateModel }) : {};
      const bindings = (element.props ? resolveBindingPaths(element.props, { stateModel }) : {}) ?? {};
      const children = element.children?.map(childId => renderElement(childId)) ?? [];

      const context: ComponentContext<Record<string, unknown>, ReactNode[]> = {
        props: resolvedProps,
        children,
        emit: createEmit(element.on),
        state: stateManager,
        bindings
      };

      return <Fragment key={elementId}>{factory(context)}</Fragment>;
    },
    [spec.elements, stateModel, registry, createEmit, stateManager]
  );

  if (!spec.root) {
    return <div className="genui-renderer" />;
  }

  return <div className="genui-renderer">{renderElement(spec.root)}</div>;
}
