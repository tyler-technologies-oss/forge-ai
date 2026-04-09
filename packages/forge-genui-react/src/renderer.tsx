/**
 * GenUIRenderer Component
 *
 * A React component that renders a GenUISpec into actual DOM.
 *
 * How it works:
 * 1. Set spec prop with a GenUISpec (typically from LLM tool output)
 * 2. Set registry prop with component factories
 * 3. Component recursively renders from spec.root, looking up each element's
 *    type in the registry and calling its ReactComponentFactory
 * 4. Props with { $state: "/path" } are resolved to actual state values
 * 5. User interactions call emit() which calls the onAction handler
 *
 * The loading prop shows a shimmer overlay while the LLM is generating.
 */

import { useState, useCallback, useMemo, useEffect, Fragment } from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
  evaluateVisibility,
  resolveElementProps,
  createStateManager,
  type GenUISpec,
  type StateManager,
  type ActionEvent,
  type VisibilityCondition
} from '@tylertech/forge-genui-core';
import type { ReactRegistry, ReactComponentContext } from './types.js';

import './renderer.scss';

export interface GenUIRendererProps {
  spec: GenUISpec;
  registry: ReactRegistry;
  loading?: boolean;
  onAction?: (event: ActionEvent) => void;
}

export function GenUIRenderer({ spec, registry, loading = false, onAction }: GenUIRendererProps): ReactElement {
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

  const evaluateCondition = useCallback(
    (condition: VisibilityCondition): boolean => {
      return evaluateVisibility(condition, { stateModel });
    },
    [stateModel]
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

      if (element.visible && !evaluateCondition(element.visible as VisibilityCondition)) {
        return null;
      }

      const factory = registry.get(element.type);
      if (!factory) {
        console.warn(`Unknown component type: ${element.type}`);
        return null;
      }

      const resolvedProps = element.props ? resolveElementProps(element.props, { stateModel }) : {};

      const children = element.children?.map(childId => renderElement(childId)) ?? [];

      const context: ReactComponentContext = {
        props: resolvedProps,
        children: children.length > 0 ? children : undefined,
        emit,
        state: stateManager
      };

      return <Fragment key={elementId}>{factory(context)}</Fragment>;
    },
    [spec.elements, stateModel, registry, emit, stateManager, evaluateCondition]
  );

  if (!spec.root) {
    return <div className="forge-genui-renderer" />;
  }

  return (
    <div className={`forge-genui-renderer${loading ? ' forge-genui-renderer--loading' : ''}`}>
      {renderElement(spec.root)}
      <div className="forge-genui-renderer__loading-overlay" />
    </div>
  );
}
