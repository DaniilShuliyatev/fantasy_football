import React, { type ErrorInfo, Suspense, type PropsWithChildren } from "react";
import { PageError } from "../../../widgets";

type HasErrorState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  HasErrorState
> {
  constructor(props: PropsWithChildren) {
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
