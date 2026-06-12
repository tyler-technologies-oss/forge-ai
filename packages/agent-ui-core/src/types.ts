import type { ZodObject, ZodRawShape } from 'zod';

// Re-export types from @json-render/core
export type { Spec, UIElement, ActionBinding, ComputedFunction, Catalog } from '@json-render/core';

export type ChildReference = string | { id: string; slot: string };

// Spec element types (used by renderers)
export interface ActionHandler {
  action: string;
  params?: Record<string, unknown>;
}

export interface SpecElement {
  type: string;
  props?: Record<string, unknown>;
  children?: ChildReference[];
  visible?: unknown;
  on?: Record<string, ActionHandler>;
  watch?: Record<string, ActionHandler | ActionHandler[]>;
  repeat?: {
    statePath: string;
    key?: string;
  };
}

// Catalog
export interface ComponentDefinition {
  description?: string;
  props: ZodObject<ZodRawShape>;
  slots?: string[];
}

export interface ActionDefinition {
  description?: string;
  params?: ZodObject<ZodRawShape>;
}

export interface ComponentSchema {
  component: string;
  description: string;
  props?: unknown;
  slots?: string[];
}

export interface ActionSchema {
  action: string;
  description: string;
  params?: unknown;
}

// Action Event
export interface ActionEvent {
  action: string;
  payload?: Record<string, unknown>;
  state: Record<string, unknown>;
}

// Validation State
export interface FieldValidationState {
  valid: boolean;
  errors: string[];
  touched: boolean;
}

// State Management
export interface StateManager {
  get<T = unknown>(path: string): T | undefined;
  set(path: string, value: unknown): void;
  resolve<T = unknown>(value: unknown): T;
}

// Registry
export interface ComponentContext<TProps = Record<string, unknown>, TChildren = unknown> {
  props: TProps;
  children: TChildren;
  slots?: Record<string, TChildren>;
  emit: (action: string, payload?: Record<string, unknown>) => void;
  state: StateManager;
  bindings: Record<string, string>;
  validation?: FieldValidationState;
  onBlur?: () => void;
}

export interface ComponentFactory<TResult, TProps = Record<string, unknown>, TChildren = unknown> {
  (context: ComponentContext<TProps, TChildren>): TResult;
}

export type RegistryActionHandler = (
  params: Record<string, unknown>,
  setState: (fn: (prev: Record<string, unknown>) => Record<string, unknown>) => void,
  state: Record<string, unknown>
) => void | Promise<void>;

export interface Registry<TResult, TChildren = unknown> {
  get(config: { type: string }): ComponentFactory<TResult, Record<string, unknown>, TChildren> | undefined;
  has(config: { type: string }): boolean;
  getAction(name: string): RegistryActionHandler | undefined;
}
