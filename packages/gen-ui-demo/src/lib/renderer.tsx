import { useState, useCallback, useMemo, useEffect, Fragment } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { evaluateVisibility, resolveElementProps } from '@json-render/core';
import {
  createStateManager,
  type GenUISpec,
  type StateManager,
  type ActionEvent,
  type Registry,
  type ComponentContext
} from '../core';

export interface GenUIRendererProps {
  spec: GenUISpec;
  registry: Registry<ReactNode, ReactNode>;
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

  const emit = useCallback(
    (action: string, payload?: Record<string, unknown>): void => {
      onAction?.({
        action,
        payload,
        state: { ...stateModel }
      });
    },
    [onAction, stateModel]
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

      if (element.visible !== undefined && !evaluateVisibility(element.visible as Parameters<typeof evaluateVisibility>[0], { stateModel })) {
        return null;
      }

      const factory = registry.get({ type: element.type });
      if (!factory) {
        console.warn(`Unknown component type: ${element.type}`);
        return null;
      }

      const resolvedProps = element.props ? resolveElementProps(element.props, { stateModel }) : {};
      const children = element.children?.map(childId => renderElement(childId)) ?? [];

      const context: ComponentContext<ReactNode[]> = {
        props: resolvedProps,
        children: children.length > 0 ? children : [],
        emit,
        state: stateManager
      };

      return <Fragment key={elementId}>{factory(context)}</Fragment>;
    },
    [spec.elements, stateModel, registry, emit, stateManager]
  );

  if (!spec.root) {
    return <div className="genui-renderer" />;
  }

  return <div className="genui-renderer">{renderElement(spec.root)}</div>;
}
