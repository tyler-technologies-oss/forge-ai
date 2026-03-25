/**
 * A2UI Element Base Class
 *
 * Abstract base class for all Forge A2UI components (Button, Text, Card, etc.).
 * Provides common functionality:
 * - Automatic reactivity: re-renders when component model updates
 * - Property access: `this.props` gives component properties from the model
 * - Data binding: `resolveValue()` evaluates dynamic/bound values from the data model
 * - Action dispatch: `dispatchA2uiAction()` triggers actions that bubble up to the surface
 */
import { LitElement, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import type { ComponentContext, SurfaceModel, ComponentApi, Subscription, DynamicValue } from '@a2ui/web_core/v0_9';

export abstract class ForgeA2uiElement extends LitElement {
  /** Component context - provides access to this component's model and data bindings */
  @property({ attribute: false })
  public context: ComponentContext | null = null;

  /** Surface model - provides access to sibling components and shared data */
  @property({ attribute: false })
  public surface: SurfaceModel<ComponentApi> | null = null;

  /** Subscription to component model updates for automatic re-rendering */
  #subscription: Subscription | null = null;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#subscribe();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#unsubscribe();
  }

  protected override updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('context')) {
      this.#unsubscribe();
      this.#subscribe();
    }
  }

  /** Subscribe to component model changes for automatic re-rendering */
  #subscribe(): void {
    if (this.context) {
      this.#subscription = this.context.componentModel.onUpdated.subscribe(() => {
        this.requestUpdate();
      });
    }
  }

  #unsubscribe(): void {
    this.#subscription?.unsubscribe();
    this.#subscription = null;
  }

  /** Shortcut to access component properties from the model (text, label, onClick, etc.) */
  protected get props(): Record<string, unknown> {
    return this.context?.componentModel.properties ?? {};
  }

  /**
   * Resolve a potentially dynamic value.
   * Values can be static or bound to the data model (e.g., { "$data": "/user/name" }).
   */
  protected resolveValue<T>(value: unknown): T {
    if (!this.context) {
      return value as T;
    }
    return this.context.dataContext.resolveDynamicValue(value as DynamicValue);
  }

  /** Dispatch an action (e.g., onClick handler) that will bubble up to the surface */
  protected dispatchA2uiAction(action: unknown): void {
    if (action && this.context) {
      this.context.dispatchAction(action);
    }
  }

  protected abstract override render(): TemplateResult;
}
