import type { ReactiveController, ReactiveControllerHost } from 'lit';
import {
  getByPath,
  runValidation,
  builtInValidationFunctions,
  type FieldValidationState
} from '@tylertech/agent-ui';

interface ValidationConfig {
  checks: Array<{
    type: string;
    args?: Record<string, unknown>;
    message: string;
  }>;
  validateOn?: 'change' | 'blur' | 'submit';
}

interface ElementValidationInfo {
  bindPath: string;
  config: ValidationConfig;
}

export class ValidationController implements ReactiveController {
  #host: ReactiveControllerHost;
  #touched = new Set<string>();
  #validationState: Record<string, FieldValidationState> = {};
  #elementValidations: Map<string, ElementValidationInfo> = new Map();

  public constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this);
  }

  public get validationState(): Record<string, FieldValidationState> {
    return this.#validationState;
  }

  public hostConnected(): void {}

  public markTouched(elementId: string): void {
    this.#touched.add(elementId);
    if (this.#validationState[elementId]) {
      this.#validationState = {
        ...this.#validationState,
        [elementId]: { ...this.#validationState[elementId], touched: true }
      };
      this.#host.requestUpdate();
    }
  }

  public registerField(elementId: string, bindPath: string, config: ValidationConfig): void {
    this.#elementValidations.set(elementId, { bindPath, config });
  }

  public validateAll(stateModel: Record<string, unknown>): void {
    const newValidationState: Record<string, FieldValidationState> = {};

    for (const [elementId, info] of this.#elementValidations.entries()) {
      const value = getByPath(stateModel, info.bindPath);
      const result = runValidation(info.config, {
        value,
        stateModel,
        customFunctions: builtInValidationFunctions
      });

      newValidationState[elementId] = {
        valid: result.valid,
        errors: result.errors,
        touched: this.#touched.has(elementId)
      };
    }

    this.#validationState = newValidationState;
  }

  public clear(): void {
    this.#touched.clear();
    this.#validationState = {};
    this.#elementValidations.clear();
  }
}
