import { html, nothing } from 'lit';
import {
  renderElement as renderElementCore,
  type RenderElementConfig as CoreRenderElementConfig,
  type SpecElement,
  type StateManager,
  type Registry,
  type ActionHandler,
  type RenderContext,
  type FieldValidationState
} from '@tylertech/agent-ui-core';
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
  const coreConfig: CoreRenderElementConfig<LitResult, LitResult[]> = {
    ...config,
    nothingValue: nothing,
    createErrorResult: (_error: Error, elementType: string) =>
      html`<div class="render-error">Error rendering ${elementType}</div>`
  };

  return renderElementCore(coreConfig);
}
