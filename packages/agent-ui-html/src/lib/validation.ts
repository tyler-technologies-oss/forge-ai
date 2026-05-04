import type { ReactiveController, ReactiveControllerHost } from 'lit';
import {
  getByPath,
  runValidation,
  builtInValidationFunctions,
  type Spec,
  type FieldValidationState
} from '@tylertech/agent-ui';

export class ValidationController implements ReactiveController {
  #host: ReactiveControllerHost;
  #touched = new Set<string>();
  #validationState: Record<string, FieldValidationState> = {};

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

  public updateSpec(spec: Spec | null, stateModel: Record<string, unknown>): void {
    if (!spec?.elements) {
      return;
    }

    const newValidationState: Record<string, FieldValidationState> = {};

    for (const [elementId, element] of Object.entries(spec.elements)) {
      if (!element.validation?.checks?.length) {
        continue;
      }

      const bindPath = Object.values(element.props ?? {}).find(
        (v): v is { $bindState: string } => typeof v === 'object' && v !== null && '$bindState' in v
      )?.$bindState;

      if (!bindPath) {
        continue;
      }

      const value = getByPath(stateModel, bindPath);
      const result = runValidation(element.validation as Parameters<typeof runValidation>[0], {
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

    this.#validationState = { ...this.#validationState, ...newValidationState };
  }
}
