/**
 * GenUI Controller
 *
 * Framework-agnostic orchestration layer that manages:
 * - Spec compilation from JSONL patches
 * - Tool definitions for LLM integration
 * - State persistence and restoration
 *
 * Framework-specific packages provide a RendererAdapter implementation.
 */

import type { Spec, SpecStreamCompiler } from '@json-render/core';
import type { GenUISpec, GenUIToolDefinition, RendererAdapter, SpecRendererState, ActionEvent } from './types.js';
import { createCompiler, processPatches } from './tools/utils.js';
import { createRenderUiTool } from './tools/render-ui.js';
import { createPatchUiTool } from './tools/patch-ui.js';
import { buildCatalogDescription, componentCatalog } from './catalog.js';

export interface GenUIControllerConfig {
  /** Custom component schemas for LLM context. Defaults to built-in componentCatalog. */
  componentSchemas?: Record<string, { description?: string }>;
  /** Include patch_ui tool in addition to render_ui. Defaults to false. */
  includePatchTool?: boolean;
}

export class GenUIController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly tools: GenUIToolDefinition<any>[];

  #adapter: RendererAdapter | null = null;
  #specCompiler: SpecStreamCompiler<Spec>;
  #state: SpecRendererState = { spec: null, lastRenderedAt: null };
  #actionHandler: ((event: ActionEvent) => void) | null = null;

  public onLoading?: (loading: boolean) => void;
  public onRender?: (spec: GenUISpec) => void;

  constructor(config: GenUIControllerConfig = {}) {
    const { componentSchemas = componentCatalog, includePatchTool = false } = config;

    this.#specCompiler = createCompiler();

    const catalogDescription = buildCatalogDescription(componentSchemas);

    const toolDeps = {
      specCompiler: this.#specCompiler,
      renderSpec: this.#renderSpec.bind(this),
      getState: this.getState.bind(this),
      setState: this.#setStateInternal.bind(this),
      catalogDescription,
      processPatches
    };

    this.tools = [createRenderUiTool(toolDeps)];

    if (includePatchTool) {
      this.tools.push(createPatchUiTool(toolDeps));
    }
  }

  /**
   * Attaches a framework-specific renderer adapter.
   */
  public setAdapter(adapter: RendererAdapter): void {
    this.#adapter = adapter;
    adapter.onAction(event => {
      this.#actionHandler?.(event);
    });
  }

  /**
   * Attaches the renderer to a DOM container.
   */
  public attach(container: HTMLElement): void {
    if (!this.#adapter) {
      console.warn('[GenUIController] No adapter set');
      return;
    }
    this.#adapter.attach(container);
  }

  /**
   * Detaches the renderer from the DOM.
   */
  public detach(): void {
    this.#adapter?.detach();
  }

  /**
   * Resets the controller state and clears rendered UI.
   */
  public reset(): void {
    const emptySpec = { elements: {}, state: {} } as GenUISpec;
    this.#specCompiler.reset(emptySpec);
    this.#state = { spec: null, lastRenderedAt: null };
    this.#adapter?.update(emptySpec);
  }

  /**
   * Gets the current state for persistence.
   */
  public getState(): SpecRendererState {
    return { ...this.#state };
  }

  /**
   * Restores state and re-renders. Use for loading persisted state.
   */
  public setState(state: SpecRendererState): void {
    this.#state = { ...state };
    if (state.spec) {
      this.#specCompiler.reset(state.spec);
      this.#renderSpec(state.spec);
    }
  }

  /**
   * Registers a handler for action events from components.
   */
  public onAction(handler: (event: ActionEvent) => void): void {
    this.#actionHandler = handler;
  }

  #setStateInternal(state: SpecRendererState): void {
    this.#state = { ...state };
  }

  #renderSpec(spec: GenUISpec): void {
    if (!this.#adapter && !this.onRender) {
      console.warn('[GenUIController] No adapter or onRender callback set');
      return;
    }

    this.#adapter?.update(spec);
    this.#state = { spec, lastRenderedAt: new Date().toISOString() };
    this.onRender?.(spec);
  }
}
