import React from 'react';
import type { ReactNode, ErrorInfo } from 'react';

export type ErrorFallback = ReactNode | ((error: Error, elementType: string) => ReactNode);

export interface ElementErrorBoundaryProps {
  elementType: string;
  fallback?: ErrorFallback;
  children: ReactNode;
}

interface ElementErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ElementErrorBoundary extends React.Component<ElementErrorBoundaryProps, ElementErrorBoundaryState> {
  public state: ElementErrorBoundaryState = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): ElementErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(`[agent-ui] Rendering error in <${this.props.elementType}>:`, error, info.componentStack);
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
