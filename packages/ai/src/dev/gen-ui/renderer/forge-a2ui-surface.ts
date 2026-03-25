/**
 * A2UI Surface Renderer
 *
 * This component renders an A2UI "surface" - a reactive UI tree generated from AI model output.
 * The A2UI protocol allows AI models to declaratively describe UI components and their relationships,
 * which this renderer translates into actual Forge web components.
 *
 * Key concepts:
 * - Surface: A container for a component tree with its own data model
 * - MessageProcessor: Handles A2UI protocol messages (create/update/delete surfaces and components)
 * - ComponentModel: Describes a single UI component (type, properties, children)
 * - DataModel: Reactive data store that components can bind to
 *
 * Usage:
 *   <forge-a2ui-surface .surface=${surfaceJson}></forge-a2ui-surface>
 *   // or via streaming:
 *   surfaceEl.processMessages(a2uiMessages);
 */
import { LitElement, html, css, type TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  MessageProcessor,
  SurfaceModel,
  type ComponentApi,
  type A2uiMessage,
  type Subscription
} from '@a2ui/web_core/v0_9';
import { forgeCatalog } from './forge-catalog.js';
import { renderNode } from './forge-a2ui-node.js';

import './components/index.js';

/** Event detail emitted when a component triggers an action (e.g., button click) */
export interface ForgeA2uiActionEvent {
  action: unknown;
  surfaceId: string;
  dataContext: Record<string, unknown>;
}

@customElement('forge-a2ui-surface')
export class ForgeA2uiSurface extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  /** Complete surface definition (alternative to streaming via processMessages) */
  @property({ attribute: false })
  public surface: Record<string, unknown> | null = null;

  /** Internal reactive surface model built from processed messages */
  @state()
  private _surfaceModel: SurfaceModel<ComponentApi> | null = null;

  /** Processes A2UI protocol messages and manages surface/component lifecycle */
  #processor: MessageProcessor<ComponentApi>;
  #subscriptions: Subscription[] = [];

  constructor() {
    super();
    // Initialize processor with Forge component catalog and action handler
    this.#processor = new MessageProcessor([forgeCatalog], (action: unknown) => {
      this.#handleAction(action);
    });

    // Subscribe to surface creation - wire up reactivity for component and data changes
    this.#subscriptions.push(
      this.#processor.onSurfaceCreated((surface: SurfaceModel<ComponentApi>) => {
        this._surfaceModel = surface;
        surface.componentsModel.onCreated.subscribe(() => this.requestUpdate());
        surface.componentsModel.onDeleted.subscribe(() => this.requestUpdate());
        surface.dataModel.subscribe('/', () => this.requestUpdate());
      })
    );

    // Clean up when surface is deleted
    this.#subscriptions.push(
      this.#processor.onSurfaceDeleted(() => {
        this._surfaceModel = null;
      })
    );
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#subscriptions.forEach(sub => sub.unsubscribe());
    this.#subscriptions = [];
  }

  protected override updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('surface') && this.surface) {
      this.#processSurface(this.surface);
    }
  }

  /**
   * Process streaming A2UI messages (for incremental/real-time updates).
   * Handles createSurface, updateComponents, updateDataModel, etc.
   */
  public processMessages(messages: A2uiMessage[]): void {
    this.#processor.processMessages(messages);

    // Handle root component assignment from updateComponents messages
    for (const msg of messages) {
      const updateComponents = (msg as Record<string, unknown>).updateComponents as Record<string, unknown> | undefined;
      if (updateComponents?.root && this._surfaceModel) {
        (this._surfaceModel as any)._rootId = updateComponents.root;
        this.requestUpdate();
      }
    }
  }

  /**
   * Convert a complete surface definition into A2UI messages.
   * Called when `surface` property changes.
   */
  #processSurface(surface: Record<string, unknown>): void {
    const surfaceId = (surface.id as string) || 'default';
    const components = surface.components as Array<Record<string, unknown>> | undefined;
    const root = surface.root as string | undefined;

    // Create surface if needed
    if (!this._surfaceModel || this._surfaceModel.id !== surfaceId) {
      this.#processor.processMessages([
        {
          createSurface: {
            surfaceId,
            catalogId: forgeCatalog.id,
            theme: surface.theme
          }
        }
      ]);
    }

    // Register all components
    if (components && components.length > 0) {
      this.#processor.processMessages([
        {
          updateComponents: {
            surfaceId,
            components
          }
        }
      ]);
    }

    // Initialize data model for component bindings
    if (surface.dataModel) {
      this.#processor.processMessages([
        {
          updateDataModel: {
            surfaceId,
            value: surface.dataModel
          }
        }
      ]);
    }

    // Set root component to begin rendering
    if (root && this._surfaceModel) {
      (this._surfaceModel as any)._rootId = root;
      this.requestUpdate();
    }
  }

  /** Bubble component actions up as DOM events for host application to handle */
  #handleAction(action: unknown): void {
    const event = new CustomEvent<ForgeA2uiActionEvent>('a2uiaction', {
      bubbles: true,
      composed: true,
      detail: {
        action,
        surfaceId: this._surfaceModel?.id ?? 'unknown',
        dataContext: this._surfaceModel?.dataModel.get('/') ?? {}
      }
    });
    this.dispatchEvent(event);
  }

  /** Render the component tree starting from the root component */
  protected override render(): TemplateResult | typeof nothing {
    if (!this._surfaceModel) {
      return nothing;
    }

    const rootId = (this._surfaceModel as any)._rootId as string | undefined;
    if (!rootId) {
      return nothing;
    }

    return html`${renderNode(rootId, this._surfaceModel)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-surface': ForgeA2uiSurface;
  }
}
