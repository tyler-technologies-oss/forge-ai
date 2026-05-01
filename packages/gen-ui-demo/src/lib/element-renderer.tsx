/**
 * Memoized Element Renderer
 *
 * Renders a single element from the spec tree. This component is wrapped with
 * React.memo to prevent unnecessary re-renders when parent state changes but
 * the element's own props haven't changed. This is especially important for
 * large lists created with `repeat`.
 *
 * Key responsibilities:
 * - Visibility evaluation (show/hide based on `visible` condition)
 * - Prop resolution (resolves $state, $item, $computed, etc.)
 * - Binding extraction (extracts $bindState paths for two-way binding)
 * - Child rendering (handles both regular children and `repeat` iterations)
 * - Error containment (wraps each element in an error boundary)
 *
 * Architecture note: This component recursively renders itself for children,
 * which is why it needs access to the full `elements` map. Each element is
 * wrapped in an error boundary so failures are isolated.
 */
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
} from '../core';
import { ElementErrorBoundary, type ErrorFallback } from './element-error-boundary';

export interface ElementRendererProps {
  /** Unique ID of this element in the spec */
  elementId: string;
  /** The element definition from the spec */
  element: SpecElement;
  /** All elements in the spec (needed for recursive child rendering) */
  elements: Record<string, SpecElement>;
  /** Current render context with state and repeat scope */
  renderContext: RenderContext;
  /** Registry mapping component types to factory functions */
  registry: Registry<ReactNode, ReactNode[]>;
  /** State manager for reading/writing state */
  stateManager: StateManager;
  /** Factory for creating emit functions bound to element event handlers */
  createEmit: (elementOn: Record<string, ActionHandler> | undefined, ctx: RenderContext) => (eventName: string, eventPayload?: Record<string, unknown>) => void;
  /** Validation state for all elements */
  validationState: Record<string, FieldValidationState>;
  /** Callback to mark an element as touched (for validation) */
  markTouched: (elementId: string) => void;
  /** Optional fallback UI to show when a component throws */
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
  // Visibility check - skip rendering if condition evaluates to false
  if (element.visible !== undefined && !isVisible(element.visible, renderContext)) {
    return null;
  }

  // Look up the component factory from the registry
  const factory = registry.get({ type: element.type });
  if (!factory) {
    console.warn(`Unknown component type: ${element.type}`);
    return null;
  }

  // Resolve dynamic prop expressions ($state, $item, $computed, $cond, etc.)
  const resolvedProps = element.props ? resolveProps(element.props, renderContext) : {};

  // Extract binding paths for two-way data binding ($bindState, $bindItem)
  const bindings = (element.props ? resolveBindingPaths(element.props, renderContext) : {}) ?? {};

  // Render children - handles both regular children and repeat iterations
  let children: ReactNode[];

  if (element.repeat && element.children?.length) {
    // Repeat mode: render children once per item in the array
    const array = getByPath(renderContext.stateModel, element.repeat.statePath) as unknown[] | undefined;
    if (Array.isArray(array)) {
      children = array.flatMap((item, index) => {
        // Create a new context with $item and $index bound to current iteration
        const repeatCtx = createRepeatContext(renderContext, element.repeat!.statePath, index);
        // Use the specified key field or fall back to index for React keys
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
    // Regular mode: render each child element once
    children = element.children?.map(childId => {
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

  // Build the context object passed to the component factory
  const context: ComponentContext<Record<string, unknown>, ReactNode[]> = {
    props: resolvedProps,
    children,
    emit: createEmit(element.on, renderContext),
    state: stateManager,
    bindings,
    validation: validationState[elementId],
    onBlur: element.validation ? () => markTouched(elementId) : undefined
  };

  // Wrap in error boundary to contain any rendering failures
  return (
    <ElementErrorBoundary elementType={element.type} fallback={errorFallback}>
      {factory(context)}
    </ElementErrorBoundary>
  );
}

/**
 * Memoized element renderer - only re-renders when props actually change.
 * This is critical for performance with large repeat lists.
 */
export const ElementRenderer = React.memo(ElementRendererInner);
