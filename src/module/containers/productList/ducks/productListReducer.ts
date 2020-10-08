/**
 * Product List reducer
 */
import { handleActions } from 'redux-actions';
import { prodocuListActions } from './productListActions';

/**
 * Product List Component Reducer
 */
export const PRODUCT_LIST_INITIAL_STATE: any = {
    productListDetail: []
};

const productListReducer = handleActions<any, any>(
    {
        [prodocuListActions.Type.FETCH_PRODUCT_LIST_RESPONSE]: (state, action) => {

            return {
                ...state,
                productListDetail: action.payload
            }
        }
    }, PRODUCT_LIST_INITIAL_STATE
);

export default productListReducer;