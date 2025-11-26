import React from "react";
import { ErrorBoundaryFallback } from "./ErrorBoundaryFallback";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = "ErrorBoundary";

  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Unhandled error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={null}>
          <ErrorBoundaryFallback />
        </React.Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
