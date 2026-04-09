/**
 * Lit Renderer Adapter
 *
 * Implements the RendererAdapter interface for Lit-based rendering.
 * Bridges the GenUIController with the ForgeGenUIRenderer component.
 */

import type { RendererAdapter, GenUISpec, ActionEvent } from '@tylertech/forge-genui-core';
import { ForgeGenUIRenderer } from './renderer.js';
import type { LitRegistry } from './types.js';

export interface LitRendererAdapterConfig {
  registry: LitRegistry;
}

export class LitRendererAdapter implements RendererAdapter {
  #registry: LitRegistry;
  #renderer: ForgeGenUIRenderer | null = null;
  #container: HTMLElement | null = null;
  #actionHandler: ((event: ActionEvent) => void) | null = null;

  constructor(config: LitRendererAdapterConfig) {
    this.#registry = config.registry;
  }

  public attach(container: HTMLElement): void {
    this.#container = container;

    if (!this.#renderer) {
      this.#renderer = new ForgeGenUIRenderer();
      this.#renderer.registry = this.#registry;
      this.#renderer.addEventListener('forge-genui-action', this.#handleAction as EventListener);
      this.#container.appendChild(this.#renderer);
    }
  }

  public update(spec: GenUISpec): void {
    if (!this.#renderer) {
      console.warn('[LitRendererAdapter] Renderer not attached');
      return;
    }
    this.#renderer.spec = spec;
  }

  public detach(): void {
    if (this.#renderer) {
      this.#renderer.removeEventListener('forge-genui-action', this.#handleAction as EventListener);
      this.#renderer.remove();
      this.#renderer = null;
    }
    this.#container = null;
  }

  public onAction(handler: (event: ActionEvent) => void): void {
    this.#actionHandler = handler;
  }

  public setLoading(loading: boolean): void {
    if (this.#renderer) {
      this.#renderer.loading = loading;
    }
  }

  #handleAction = (event: CustomEvent<ActionEvent>): void => {
    this.#actionHandler?.(event.detail);
  };
}
