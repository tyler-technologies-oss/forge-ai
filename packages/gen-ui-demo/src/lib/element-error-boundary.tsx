/**
 * Error Boundary for Individual UI Elements
 *
 * This component wraps each rendered element to catch and contain rendering errors.
 * If a component throws during render, only that component fails - the rest of the
 * UI continues to work. This prevents a single broken component from crashing the
 * entire application.
 *
 * @example
 * // With no fallback (element silently disappears on error)
 * <ElementErrorBoundary elementType="MyComponent">
 *   <MyComponent />
 * </ElementErrorBoundary>
 *
 * @example
 * // With static fallback
 * <ElementErrorBoundary elementType="MyComponent" fallback={<div>Error</div>}>
 *   <MyComponent />
 * </ElementErrorBoundary>
 *
 * @example
 * // With dynamic fallback showing error details
 * <ElementErrorBoundary
 *   elementType="MyComponent"
 *   fallback={(error, type) => <div>Error in {type}: {error.message}</div>}
 * >
 *   <MyComponent />
 * </ElementErrorBoundary>
 */
import React from 'react';
import type { ReactNode, ErrorInfo } from 'react';

/**
 * Fallback content to display when an error occurs.
 * Can be static ReactNode or a function that receives the error and element type.
 */
export type ErrorFallback = ReactNode | ((error: Error, elementType: string) => ReactNode);

export interface ElementErrorBoundaryProps {
  /** The component type name (for error logging) */
  elementType: string;
  /** Optional fallback UI to show on error. If undefined, renders nothing. */
  fallback?: ErrorFallback;
  children: ReactNode;
}

interface ElementErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ElementErrorBoundary extends React.Component<
  ElementErrorBoundaryProps,
  ElementErrorBoundaryState
> {
  public state: ElementErrorBoundaryState = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): ElementErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(`[gen-ui] Rendering error in <${this.props.elementType}>:`, error, info.componentStack);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      const { fallback, elementType } = this.props;
      if (fallback === undefined) {
        return null;
      }
      if (typeof fallback === 'function') {
        return fallback(this.state.error!, elementType);
      }
      return fallback;
    }
    return this.props.children;
  }
}
