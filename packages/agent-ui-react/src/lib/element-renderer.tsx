import React from 'react';
import type { ReactNode } from 'react';
import { getByPath } from '@json-render/core';
import {
  resolveProps,
  resolveBindingPaths,
  isVisible,
  createRepeatContext,
  type SpecElement,
  type FieldValidationState,
  type StateManager,
  type Registry,
  type ComponentContext,
  type ActionHandler,
  type RenderContext
} from '@tylertech/agent-ui';
import { ElementErrorBoundary, type ErrorFallback } from './element-error-boundary.js';

export interface ElementRendererProps {
  elementId: string;
  element: SpecElement;
  elements: Record<string, SpecElement>;
  renderContext: RenderContext;
  registry: Registry<ReactNode, ReactNode[]>;
  stateManager: StateManager;
  createEmit: (
    elementOn: Record<string, ActionHandler> | undefined,
    ctx: RenderContext
  ) => (eventName: string, eventPayload?: Record<string, unknown>) => void;
  validationState: Record<string, FieldValidationState>;
  markTouched: (elementId: string) => void;
  errorFallback?: ErrorFallback;
}

function ElementRendererInner({
  elementId,
  element,
  elements,
  renderContext,
  registry,
  stateManager,
  createEmit,
  validationState,
  markTouched,
  errorFallback
}: ElementRendererProps): ReactNode {
  if (element.visible !== undefined && !isVisible(element.visible, renderContext)) {
    return null;
  }

  const factory = registry.get({ type: element.type });
  if (!factory) {
    console.warn(`Unknown component type: ${element.type}`);
    return null;
  }

  const resolvedProps = element.props ? resolveProps(element.props, renderContext) : {};
  const bindings = (element.props ? resolveBindingPaths(element.props, renderContext) : {}) ?? {};

  let children: ReactNode[];

  if (element.repeat && element.children?.length) {
    const array = getByPath(renderContext.stateModel, element.repeat.statePath) as unknown[] | undefined;
    if (Array.isArray(array)) {
      children = array.flatMap((item, index) => {
        const repeatCtx = createRepeatContext(renderContext, element.repeat!.statePath, index);
        const key = element.repeat!.key ? (item as Record<string, unknown>)[element.repeat!.key] : index;
        return element.children!.map(childId => {
          const childElement = elements[childId];
          if (!childElement) {
            return null;
          }
          return (
            <ElementRenderer
              key={`${childId}-${key}`}
              elementId={childId}
              element={childElement}
              elements={elements}
              renderContext={repeatCtx}
              registry={registry}
              stateManager={stateManager}
              createEmit={createEmit}
              validationState={validationState}
              markTouched={markTouched}
              errorFallback={errorFallback}
            />
          );
        });
      });
    } else {
      children = [];
    }
  } else {
    children =
      element.children?.map(childId => {
        const childElement = elements[childId];
        if (!childElement) {
          return null;
        }
        return (
          <ElementRenderer
            key={childId}
            elementId={childId}
            element={childElement}
            elements={elements}
            renderContext={renderContext}
            registry={registry}
            stateManager={stateManager}
            createEmit={createEmit}
            validationState={validationState}
            markTouched={markTouched}
            errorFallback={errorFallback}
          />
        );
      }) ?? [];
  }

  const context: ComponentContext<Record<string, unknown>, ReactNode[]> = {
    props: resolvedProps,
    children,
    emit: createEmit(element.on, renderContext),
    state: stateManager,
    bindings,
    validation: validationState[elementId],
    onBlur: element.validation ? () => markTouched(elementId) : undefined
  };

  return (
    <ElementErrorBoundary elementType={element.type} fallback={errorFallback}>
      {factory(context)}
    </ElementErrorBoundary>
  );
}

export const ElementRenderer = React.memo(ElementRendererInner);
