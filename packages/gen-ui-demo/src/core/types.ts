import type { ZodObject, ZodRawShape } from 'zod';

// Spec (flat element tree)
export interface GenUISpec {
  root: string;
  elements: Record<string, GenUIElement>;
  state?: Record<string, unknown>;
}

export interface GenUIElement {
  type: string;
  props?: Record<string, unknown>;
  children?: string[];
  visible?: unknown;
  on?: Record<string, ActionHandler>;
}

export interface ActionHandler {
  action: string;
  params?: Record<string, unknown>;
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

export interface Catalog {
  prompt(config?: PromptConfig): string;
  validate(config: ValidateConfig): ValidationResult;
  jsonSchema(): unknown;
  components(): Record<string, ComponentSchema>;
}

export interface PromptConfig {
  mode?: 'standalone' | 'inline' | 'generate' | 'chat';
}

export interface ValidateConfig {
  spec: unknown;
}

export interface ValidationResult {
  success: boolean;
  data?: GenUISpec;
  error?: string;
}

// State Management
export interface StateManager {
  get<T = unknown>(path: string): T | undefined;
  set(path: string, value: unknown): void;
  resolve<T = unknown>(value: unknown): T;
}

// Action Event
export interface ActionEvent {
  action: string;
  payload?: Record<string, unknown>;
  state: Record<string, unknown>;
}

// Registry
export interface ComponentContext<TChildren = unknown> {
  props: Record<string, unknown>;
  children: TChildren;
  emit: (action: string, payload?: Record<string, unknown>) => void;
  state: StateManager;
}

export interface ComponentFactory<TResult, TChildren = unknown> {
  (context: ComponentContext<TChildren>): TResult;
}

export interface Registry<TResult, TChildren = unknown> {
  get(config: { type: string }): ComponentFactory<TResult, TChildren> | undefined;
  has(config: { type: string }): boolean;
}
