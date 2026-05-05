import { html, nothing } from 'lit';
import {
  getByPath,
  resolveProps,
  resolveBindingPaths,
  isVisible,
  createRepeatContext,
  type SpecElement,
  type StateManager,
  type Registry,
  type ComponentContext,
  type ActionHandler,
  type RenderContext,
  type FieldValidationState
} from '@tylertech/agent-ui';
import type { LitResult, ErrorFallback } from './spec-renderer.js';

export interface RenderElementConfig {
  elementId: string;
  element: SpecElement;
  elements: Record<string, SpecElement>;
  renderContext: RenderContext;
  registry: Registry<LitResult, LitResult[]>;
  stateManager: StateManager;
  createEmit: (
    elementOn: Record<string, ActionHandler> | undefined,
    ctx: RenderContext
  ) => (eventName: string, eventPayload?: Record<string, unknown>) => void;
  validationState: Record<string, FieldValidationState>;
  markTouched: (elementId: string) => void;
  errorFallback?: ErrorFallback;
}

export function renderElement(config: RenderElementConfig): LitResult {
  const {
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
  } = config;

  if (element.visible !== undefined && !isVisible(element.visible, renderContext)) {
    return nothing;
  }

  const factory = registry.get({ type: element.type });
  if (!factory) {
    console.warn(`Unknown component type: ${element.type}`);
    return nothing;
  }

  const resolvedProps = element.props ? resolveProps(element.props, renderContext) : {};
  const bindings = (element.props ? resolveBindingPaths(element.props, renderContext) : {}) ?? {};

  let children: LitResult[];

  if (element.repeat && element.children?.length) {
    const array = getByPath(renderContext.stateModel, element.repeat.statePath) as unknown[] | undefined;
    if (Array.isArray(array)) {
      children = array.flatMap((_, index) => {
        const repeatCtx = createRepeatContext(renderContext, element.repeat!.statePath, index);
        return element.children!.map(childId => {
          const childElement = elements[childId];
          if (!childElement) {
            return nothing;
          }
          return renderElement({
            elementId: childId,
            element: childElement,
            elements,
            renderContext: repeatCtx,
            registry,
            stateManager,
            createEmit,
            validationState,
            markTouched,
            errorFallback
          });
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
          return nothing;
        }
        return renderElement({
          elementId: childId,
          element: childElement,
          elements,
          renderContext,
          registry,
          stateManager,
          createEmit,
          validationState,
          markTouched,
          errorFallback
        });
      }) ?? [];
  }

  const context: ComponentContext<Record<string, unknown>, LitResult[]> = {
    props: resolvedProps,
    children,
    emit: createEmit(element.on, renderContext),
    state: stateManager,
    bindings,
    validation: validationState[elementId],
    onBlur: () => markTouched(elementId)
  };

  try {
    return factory(context);
  } catch (error) {
    console.error(`Error rendering ${element.type}:`, error);
    if (errorFallback) {
      return errorFallback(error as Error, element.type);
    }
    return html`<div class="render-error">Error rendering ${element.type}</div>`;
  }
}
