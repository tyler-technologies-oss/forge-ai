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
  type FieldValidationState,
  type ChildReference
} from './index.js';

function parseChildRef(ref: ChildReference): { id: string; slot: string } {
  if (typeof ref === 'string') {
    return { id: ref, slot: 'default' };
  }
  return { id: ref.id, slot: ref.slot };
}

export interface RenderElementConfig<TResult, TChildren> {
  elementId: string;
  element: SpecElement;
  elements: Record<string, SpecElement>;
  renderContext: RenderContext;
  registry: Registry<TResult, TChildren>;
  stateManager: StateManager;
  createEmit: (
    elementOn: Record<string, ActionHandler> | undefined,
    ctx: RenderContext
  ) => (eventName: string, eventPayload?: Record<string, unknown>) => void;
  validationState: Record<string, FieldValidationState>;
  markTouched: (elementId: string) => void;
  nothingValue: TResult;
  createErrorResult: (error: Error, elementType: string) => TResult;
  errorFallback?: (error: Error, elementType: string) => TResult;
  wrapWithSlot?: (child: TResult, slotName: string) => TResult;
}

export function renderElement<TResult, TChildren>(config: RenderElementConfig<TResult, TChildren>): TResult {
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
    nothingValue,
    createErrorResult,
    errorFallback,
    wrapWithSlot
  } = config;

  if (element.visible !== undefined && !isVisible(element.visible, renderContext)) {
    return nothingValue;
  }

  const factory = registry.get({ type: element.type });
  if (!factory) {
    console.warn(`Unknown component type: ${element.type}`);
    return nothingValue;
  }

  const resolvedProps = element.props ? resolveProps(element.props, renderContext) : {};
  const bindings = (element.props ? resolveBindingPaths(element.props, renderContext) : {}) ?? {};

  let children: TResult[];
  let childrenBySlot: Map<string, TResult[]> = new Map();

  if (element.repeat && element.children?.length) {
    const array = getByPath(renderContext.stateModel, element.repeat.statePath) as unknown[] | undefined;
    if (Array.isArray(array)) {
      children = array.flatMap((_, index) => {
        const repeatCtx = createRepeatContext(renderContext, element.repeat!.statePath, index);
        return element.children!.map(childRef => {
          const { id, slot } = parseChildRef(childRef);
          const childElement = elements[id];
          if (!childElement) {
            return nothingValue;
          }
          let rendered = renderElement({
            elementId: id,
            element: childElement,
            elements,
            renderContext: repeatCtx,
            registry,
            stateManager,
            createEmit,
            validationState,
            markTouched,
            nothingValue,
            createErrorResult,
            errorFallback,
            wrapWithSlot
          });

          if (wrapWithSlot && slot !== 'default') {
            rendered = wrapWithSlot(rendered, slot);
          }

          if (!childrenBySlot.has(slot)) {
            childrenBySlot.set(slot, []);
          }
          childrenBySlot.get(slot)!.push(rendered);

          return rendered;
        });
      });
    } else {
      children = [];
    }
  } else {
    children =
      element.children?.map(childRef => {
        const { id, slot } = parseChildRef(childRef);
        const childElement = elements[id];
        if (!childElement) {
          return nothingValue;
        }
        let rendered = renderElement({
          elementId: id,
          element: childElement,
          elements,
          renderContext,
          registry,
          stateManager,
          createEmit,
          validationState,
          markTouched,
          nothingValue,
          createErrorResult,
          errorFallback,
          wrapWithSlot
        });

        if (wrapWithSlot && slot !== 'default') {
          rendered = wrapWithSlot(rendered, slot);
        }

        if (!childrenBySlot.has(slot)) {
          childrenBySlot.set(slot, []);
        }
        childrenBySlot.get(slot)!.push(rendered);

        return rendered;
      }) ?? [];
  }

  const slots = childrenBySlot.size > 0 ? (Object.fromEntries(childrenBySlot) as Record<string, TChildren>) : undefined;

  const context: ComponentContext<Record<string, unknown>, TChildren> = {
    props: resolvedProps,
    children: children as TChildren,
    slots,
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
    return createErrorResult(error as Error, element.type);
  }
}
