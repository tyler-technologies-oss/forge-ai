import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  getByPath,
  createStateManager,
  resolveProps,
  type Spec,
  type SpecElement,
  type StateManager,
  type ActionEvent,
  type ActionHandler,
  type RenderContext,
  type ComputedFunction,
  type Registry
} from '@tylertech/agent-ui-core';
import { renderElement } from './element-renderer.js';
import { ValidationController } from './validation.js';

export type LitResult = TemplateResult | typeof nothing;
export type ErrorFallback = (error: Error, elementType: string) => LitResult;

@customElement('spec-renderer')
export class SpecRendererElement extends LitElement {
  @property({ type: Object }) public spec: Spec | null = null;
  @property({ type: Object }) public registry: Registry<LitResult, LitResult[]> | null = null;
  @property({ type: Object }) public externalState: Record<string, unknown> = {};
  @property({ type: Object }) public functions: Record<string, ComputedFunction> = {};
  @property({ attribute: false }) public errorFallback?: ErrorFallback;

  @state() private _stateModel: Record<string, unknown> = {};
  #prevState: Record<string, unknown> | null = null;
  #validationController = new ValidationController(this);

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#initializeState();
  }

  public override willUpdate(changedProperties: Map<PropertyKey, unknown>): void {
    if (changedProperties.has('spec') || changedProperties.has('externalState')) {
      this.#initializeState();
    }
  }

  public override updated(changedProperties: Map<PropertyKey, unknown>): void {
    if (changedProperties.has('_stateModel') && this.#prevState) {
      this.#processWatchers();
    }
    this.#prevState = structuredClone(this._stateModel);
  }

  protected override createRenderRoot(): HTMLElement {
    return this;
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this.spec?.root || !this.spec.elements || !this.registry) {
      return html`<div class="spec-renderer"></div>`;
    }

    const elements = this.spec.elements as Record<string, SpecElement>;
    const rootElement = elements[this.spec.root];
    if (!rootElement) {
      return html`<div class="spec-renderer"></div>`;
    }

    this.#registerValidations(elements);
    this.#validationController.validateAll(this._stateModel);

    const renderContext: RenderContext = { stateModel: this._stateModel, functions: this.functions };
    const stateManager = this.#createStateManager();

    return html`
      <div class="spec-renderer">
        ${renderElement({
          elementId: this.spec.root,
          element: rootElement,
          elements,
          renderContext,
          registry: this.registry,
          stateManager,
          createEmit: this.#createEmit.bind(this),
          validationState: this.#validationController.validationState,
          markTouched: id => this.#validationController.markTouched(id),
          errorFallback: this.errorFallback
        })}
      </div>
    `;
  }

  #initializeState(): void {
    const newState = {
      ...(this.spec?.state ?? {}),
      ...this._stateModel,
      ...this.externalState
    };
    this._stateModel = newState;
    this.#validationController.clear();
  }

  #createStateManager(): StateManager {
    return createStateManager(this._stateModel, () => {
      this._stateModel = { ...this._stateModel };
      this.#validationController.validateAll(this._stateModel);
      this.dispatchEvent(new CustomEvent('spec-renderer-state-change', { detail: { state: this._stateModel } }));
    });
  }

  #registerValidations(elements: Record<string, SpecElement>): void {
    for (const [elementId, element] of Object.entries(elements)) {
      const props = element.props as Record<string, unknown> | undefined;
      const checks = props?.checks;
      const validateOn = props?.validateOn;

      if (!checks || !Array.isArray(checks) || checks.length === 0) {
        continue;
      }

      const bindPath = Object.values(props ?? {}).find(
        (v): v is { $bindState: string } => typeof v === 'object' && v !== null && '$bindState' in v
      )?.$bindState;

      if (!bindPath) {
        continue;
      }

      this.#validationController.registerField(elementId, bindPath, {
        checks: checks as Array<{ type: string; args?: Record<string, unknown>; message: string }>,
        validateOn: validateOn as 'change' | 'blur' | 'submit' | undefined
      });
    }
  }

  #createEmit(elementOn: Record<string, ActionHandler> | undefined, ctx: RenderContext) {
    return (eventName: string, eventPayload?: Record<string, unknown>): void => {
      const handler = elementOn?.[eventName];
      if (handler && this.registry) {
        const actionHandler = this.registry.getAction(handler.action);
        const resolvedParams = handler.params ? resolveProps(handler.params, ctx) : {};
        const params = { ...resolvedParams, ...eventPayload };
        if (actionHandler) {
          actionHandler(params, fn => (this._stateModel = fn(this._stateModel)), this._stateModel);
        }
        const event: ActionEvent = { action: handler.action, payload: params, state: { ...this._stateModel } };
        this.dispatchEvent(new CustomEvent('spec-renderer-action', { detail: event }));
      }
    };
  }

  #processWatchers(): void {
    if (!this.spec?.elements || !this.#prevState || !this.registry) {
      return;
    }

    const renderCtx: RenderContext = { stateModel: this._stateModel, functions: this.functions };
    const elements = this.spec.elements as Record<string, SpecElement>;

    for (const element of Object.values(elements)) {
      if (!element.watch) {
        continue;
      }

      for (const [watchPath, handlers] of Object.entries(element.watch)) {
        const prevValue = getByPath(this.#prevState, watchPath);
        const newValue = getByPath(this._stateModel, watchPath);

        if (prevValue === newValue) {
          continue;
        }

        const handlerArray = Array.isArray(handlers) ? handlers : [handlers];
        for (const handler of handlerArray) {
          const actionHandler = this.registry.getAction(handler.action);
          const resolvedParams = handler.params ? resolveProps(handler.params, renderCtx) : {};
          if (actionHandler) {
            actionHandler(resolvedParams, fn => (this._stateModel = fn(this._stateModel)), this._stateModel);
          }
          const event: ActionEvent = {
            action: handler.action,
            payload: resolvedParams,
            state: { ...this._stateModel }
          };
          this.dispatchEvent(new CustomEvent('spec-renderer-action', { detail: event }));
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spec-renderer': SpecRendererElement;
  }
}
