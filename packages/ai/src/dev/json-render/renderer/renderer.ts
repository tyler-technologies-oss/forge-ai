/**
 * ForgeSpecRenderer Component
 *
 * A Lit element that renders a JsonRenderSpec into actual DOM.
 *
 * How it works:
 * 1. Set spec property with a JsonRenderSpec (typically from LLM tool output)
 * 2. Set registry property with component factories
 * 3. Component recursively renders from spec.root, looking up each element's
 *    type in the registry and calling its TemplateFactory
 * 4. Props with { $state: "/path" } are resolved to actual state values
 * 5. User interactions call emit() which dispatches forge-spec-renderer-action events
 *
 * The loading property shows a shimmer overlay while the LLM is generating.
 */

import { LitElement, html, nothing, unsafeCSS } from 'lit';
import type { PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { evaluateVisibility, resolveElementProps } from '@json-render/core';
import type { JsonRenderSpec, ComponentContext, ActionEvent, StateManager, VisibilityCondition } from './types.js';
import type { Registry } from './registry.js';
import { createStateManager } from './state.js';

import styles from './renderer.scss?inline';

@customElement('forge-spec-renderer')
export class ForgeSpecRenderer extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ attribute: false })
  public spec: JsonRenderSpec | null = null;

  @property({ attribute: false })
  public registry: Registry | null = null;

  @property({ type: Boolean, reflect: true })
  public loading = false;

  @state()
  private _state: Record<string, unknown> = {};

  #stateManager: StateManager | null = null;

  protected override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('spec') && this.spec?.state) {
      this._state = { ...this.spec.state };
      this.#stateManager = this.#createStateManager();
    } else if (!this.#stateManager) {
      this.#stateManager = this.#createStateManager();
    }
  }

  #createStateManager(): StateManager {
    return createStateManager(this._state, () => {
      this._state = { ...this._state };
      this.requestUpdate();
    });
  }

  #emit = (action: string, payload?: Record<string, unknown>): void => {
    const event = new CustomEvent<ActionEvent>('forge-spec-renderer-action', {
      bubbles: true,
      composed: true,
      detail: {
        action,
        payload,
        state: { ...this._state }
      }
    });
    this.dispatchEvent(event);
  };

  #renderElement(elementId: string): TemplateResult | typeof nothing {
    if (!this.spec?.elements || !this.registry || !this.#stateManager) {
      return nothing;
    }

    const element = this.spec.elements[elementId];
    if (!element) {
      console.warn(`Element not found: ${elementId}`);
      return nothing;
    }

    if (element.visible && !this.#evaluateVisibility(element.visible)) {
      return nothing;
    }

    const templateFn = this.registry.get(element.type);
    if (!templateFn) {
      console.warn(`Unknown component type: ${element.type}`);
      return nothing;
    }

    const resolvedProps = element.props
      ? resolveElementProps(element.props, { stateModel: this._state })
      : {};

    const children = element.children?.map(childId => this.#renderElement(childId)) ?? [];

    const context: ComponentContext = {
      props: resolvedProps,
      children: children.length > 0 ? children : undefined,
      emit: this.#emit,
      state: this.#stateManager
    };

    return templateFn(context);
  }

  #evaluateVisibility(condition: VisibilityCondition): boolean {
    return evaluateVisibility(condition, { stateModel: this._state });
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this.spec?.root || !this.registry) {
      return nothing;
    }

    return html`
      ${this.#renderElement(this.spec.root)}
      <div class="loading-overlay"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-spec-renderer': ForgeSpecRenderer;
  }
}
