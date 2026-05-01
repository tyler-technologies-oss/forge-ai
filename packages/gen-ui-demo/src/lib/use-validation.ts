/**
 * Validation Hook
 *
 * Manages form validation state for elements with `validation` config.
 * Extracted from the main renderer to keep concerns separated.
 *
 * Features:
 * - Automatic validation on state changes
 * - Touch state tracking (only show errors after user interaction)
 * - Uses @json-render/core validation functions
 *
 * How validation works:
 * 1. Elements can define `validation.checks` array with validation rules
 * 2. The hook finds the bound state path via `$bindState` in props
 * 3. When state changes, validation runs against the current value
 * 4. Components receive `validation` object with `valid`, `errors`, and `touched`
 * 5. Components call `onBlur` to mark field as touched (show errors)
 *
 * @example
 * // In spec:
 * {
 *   type: 'TextField',
 *   props: { value: { $bindState: '/form/email' } },
 *   validation: {
 *     checks: [
 *       { type: 'required', message: 'Email is required' },
 *       { type: 'email', message: 'Invalid email' }
 *     ]
 *   }
 * }
 */
import { useState, useCallback, useEffect, useRef } from 'react';
import { getByPath, runValidation, builtInValidationFunctions, type ValidationConfig as JRValidationConfig } from '@json-render/core';
import type { Spec, FieldValidationState } from '../core';

export interface UseValidationResult {
  /** Validation state keyed by element ID */
  validationState: Record<string, FieldValidationState>;
  /** Call to mark an element as touched (typically on blur) */
  markTouched: (elementId: string) => void;
}

/**
 * Hook to manage validation state for spec elements.
 *
 * @param spec - The UI spec containing elements with validation configs
 * @param stateModel - Current state model to validate against
 * @returns Validation state and touch handler
 */
export function useValidation(spec: Spec, stateModel: Record<string, unknown>): UseValidationResult {
  const [validationState, setValidationState] = useState<Record<string, FieldValidationState>>({});

  // Track touched state in a ref to avoid stale closure issues.
  // The effect below intentionally doesn't include validationState in deps
  // to prevent infinite loops - we use the ref to preserve touched state.
  const touchedRef = useRef<Set<string>>(new Set());

  const markTouched = useCallback((elementId: string): void => {
    touchedRef.current.add(elementId);
    setValidationState(prev => ({
      ...prev,
      [elementId]: { ...(prev[elementId] ?? { valid: true, errors: [] }), touched: true }
    }));
  }, []);

  // Re-run validation whenever state changes
  useEffect(() => {
    if (!spec.elements) {
      return;
    }

    const newValidationState: Record<string, FieldValidationState> = {};

    for (const [elementId, element] of Object.entries(spec.elements)) {
      // Skip elements without validation config
      if (!element.validation?.checks?.length) {
        continue;
      }

      // Find the bound state path - validation requires a $bindState prop
      const bindPath = Object.values(element.props ?? {}).find(
        (v): v is { $bindState: string } => typeof v === 'object' && v !== null && '$bindState' in v
      )?.$bindState;

      if (!bindPath) {
        continue;
      }

      // Get current value and run validation checks
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
