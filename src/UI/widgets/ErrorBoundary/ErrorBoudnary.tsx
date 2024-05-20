import React from "react";
import { styleClasses } from "../../../constants";

interface State {
  hasError: boolean;
  error?: string;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: unknown) {
    this.setState({ error: String(error) });
  }

  private goHomeAndReload = () => {
    window?.location.reload();
  };

  private renderContent = () => {
    return (
      <div
        className={`${styleClasses.mainContentContainer} ${styleClasses.contentBackground}`}
      >
        <div className={styleClasses.error}>
          <p>Something went wrong</p>
          <button
            onClick={this.goHomeAndReload}
          >
            Reload
          </button>
        </div>
      </div>
    );
  };

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI

      return this.renderContent();
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
