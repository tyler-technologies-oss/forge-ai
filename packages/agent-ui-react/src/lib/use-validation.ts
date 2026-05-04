import { useState, useCallback, useEffect, useRef } from 'react';
import {
  getByPath,
  runValidation,
  builtInValidationFunctions,
  type ValidationConfig as JRValidationConfig
} from '@json-render/core';
import type { Spec, FieldValidationState } from '@tylertech/agent-ui';

export interface UseValidationResult {
  validationState: Record<string, FieldValidationState>;
  markTouched: (elementId: string) => void;
}

export function useValidation(spec: Spec, stateModel: Record<string, unknown>): UseValidationResult {
  const [validationState, setValidationState] = useState<Record<string, FieldValidationState>>({});
  const touchedRef = useRef<Set<string>>(new Set());

  const markTouched = useCallback((elementId: string): void => {
    touchedRef.current.add(elementId);
    setValidationState(prev => ({
      ...prev,
      [elementId]: { ...(prev[elementId] ?? { valid: true, errors: [] }), touched: true }
    }));
  }, []);

  useEffect(() => {
    if (!spec.elements) {
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
      const result = runValidation(element.validation as JRValidationConfig, {
        value,
        stateModel,
        customFunctions: builtInValidationFunctions
      });

      newValidationState[elementId] = {
        valid: result.valid,
        errors: result.errors,
        touched: touchedRef.current.has(elementId)
      };
    }

    setValidationState(prev => ({ ...prev, ...newValidationState }));
  }, [stateModel, spec.elements]);

  return { validationState, markTouched };
}
