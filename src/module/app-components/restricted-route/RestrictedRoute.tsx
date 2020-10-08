/**
 * Restricted Route
 */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface RestrictedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    isAllowed: boolean;
    restrictedPath: string;
    authenticationPath: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = props => {
    let redirectPath = '';
    if (!props.isAuthenticated) {
        redirectPath = props.authenticationPath;
    }
    if (props.isAuthenticated && !props.isAllowed) {
        redirectPath = props.restrictedPath;
    }

    if (redirectPath) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath, state: { from: location } }} />;
        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
};

export default RestrictedRoute;