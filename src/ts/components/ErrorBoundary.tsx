import { Component, ErrorInfo, ReactElement } from "react";

// Has to be a class based component unfortunately, as React does not yet cover all these lifecycle hooks

type PropsType = {
    fallbackLabel: string;
    children: ReactElement | ReactElement[];
};

type StateType = {
    hasError: boolean;
};

class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error(error, errorInfo);
    }

    render() {
        return this.state.hasError ? <div>{this.props.fallbackLabel}</div> : this.props.children;
    }
}

export default ErrorBoundary;
