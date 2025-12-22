import React from "react";

interface State {
  hasError: boolean;
}

export default class MFEErrorBoundary extends React.Component<
  React.PropsWithChildren,
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600">
          Failed to load module. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}
