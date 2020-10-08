/**
 * Set current route
 */
import * as React from 'react';
import * as H from 'history';
import { isUndefined } from 'lodash';
import { PorductListComponentProps } from '../../containers/productList/ducks/types';

interface SetRouteAction {
    setRoute(routeName: string): void;
}
export interface SetRouteProps {
    location: H.Location<H.LocationState>;
    actions: SetRouteAction;
}

const SetCurrentRoute = <ComponentProps extends PorductListComponentProps>(WrappedComponent: React.ComponentType<ComponentProps>) => {

    return class SetCurrentRouteClass extends React.Component<ComponentProps & SetRouteProps> {
        public componentDidMount() {
            const { actions, location } = this.props;
            if (!isUndefined(location)) {
                actions.setRoute(location.pathname);
            }
        }

        public render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default SetCurrentRoute;