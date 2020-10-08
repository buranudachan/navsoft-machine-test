import { handleActions } from 'redux-actions';
import { appActions } from './appActions';

/**
 * AppComponent Reducer
 */
export const APP_INITIAL_STATE: any = {
    //
    isMenuOpen: false,
    currentRoutePath: '',
    apiStatus: {
        isFail: undefined,
        isLoading: undefined,
        isSuccess: undefined
    },
    user: {
        isAuthenticated: false,
        role: undefined
    },
    navStyle: undefined,
    width: undefined
};

// tslint:disable-next-line:no-any
const appReducer = handleActions<any, any>(
    {
        [appActions.Type.SET_CURRENT_PATH]: (state, action) => {

            return {
                ...state,
                currentRoutePath: action.payload
            }
        }

    }, APP_INITIAL_STATE
);

export default appReducer;