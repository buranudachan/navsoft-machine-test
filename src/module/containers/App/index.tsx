import React from 'react';
import { omit } from 'lodash';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import appSelectors from '../../app-ducks/appSelectors';
import { Dispatch, bindActionCreators } from 'redux';
import { appActions } from '../../app-ducks/appActions';
import { connect } from 'react-redux';
import { Location } from 'history';
import productList from '../productList';
import { ApplicationState } from '../../app-ducks/types';


class AppComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.RestrictedRoute = this.RestrictedRoute.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('unhandledrejection', (event: Event) => {
      event.preventDefault();
    });
  }

  public render() {


    return (
      <ConfigProvider >
        <Switch>
          <Route exact path='/' component={productList} />

        </Switch>
      </ConfigProvider>
    );
  }
  private RestrictedRoute(isAuthenticated: boolean | undefined, location: Location, Component: any) {
    return (
      <Route
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />}
      />);
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    isMenuOpen: appSelectors.getMenuStatus(state),
    isAuthenticated: appSelectors.getAuthStatus(state),
    apiStatus: appSelectors.getApiStatus(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      // tslint: disable no-any
      ...bindActionCreators(omit(appActions, ['Type']) as any, dispatch)
      // tslint: enable no-any
    }
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default (App);
