import { createAction } from 'redux-actions';


export namespace prodocuListActions {
    export enum Type {
        FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST',
        FETCH_PRODUCT_LIST_RESPONSE = 'FETCH_PRODUCT_LIST_RESPONSE',
    }

    export const triggerProductList = createAction(Type.FETCH_PRODUCT_LIST_REQUEST);
    export const triggerProductListSuccess = createAction(Type.FETCH_PRODUCT_LIST_RESPONSE, (data: any) => data);

}