import React from "react";

const WithLogging = (WrappedComponent) => {

    componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    class Logging extends React.Component {

        componentDidMount() {
            console.log(`Component ${componentName} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    
    Logging.displayName = `WithLogging(${componentName})`

    return Logging;
}

export default WithLogging;