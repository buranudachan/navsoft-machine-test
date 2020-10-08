/**
 * Reducer List
 */

import appReducer, { APP_INITIAL_STATE } from './appReducer';
import productListReducer, { PRODUCT_LIST_INITIAL_STATE } from '../containers/productList/ducks/productListReducer';
// import mainAppReducer, { MAIN_APP_INITIAL_STATE } from '../containers/main-app/ducks/mainAppReducer';

const reducerList = {
    application: appReducer,
    productListStateData: productListReducer
};

export default reducerList;

type Action = 'PUSH' | 'POP' | 'REPLACE';
const ActionData: Action = 'POP';
export const reducerInitialState = {
    router: { location: { pathname: '', search: '', state: undefined, hash: '' }, action: ActionData },
    application: APP_INITIAL_STATE,
    productListStateData: PRODUCT_LIST_INITIAL_STATE
};