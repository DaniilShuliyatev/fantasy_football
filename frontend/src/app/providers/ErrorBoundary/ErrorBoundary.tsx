import React, { type ReactNode, type ErrorInfo, Suspense } from "react";
import { PageError } from "../../../widgets";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="...">
          <PageError />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
