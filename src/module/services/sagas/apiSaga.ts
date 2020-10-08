/**
 * Saga listen all actions and dispatch
 */
import * as effects from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { prodocuListActions } from '../../containers/productList/ducks/productListActions';
import { getProductLists } from '../api';
const { takeEvery, put, call } = effects;

function* apiLoadingCallBack() {

}
function* apiSuccessCallBack() {


}
function* apiFailureCallBack() {

}

function wrapApi(sagaCallBack: (action: AnyAction) => SagaIterator) {
    return function* (action: AnyAction) {
        yield call(apiLoadingCallBack);
        try {
            yield call(sagaCallBack, action);
            yield call(apiSuccessCallBack);
        } catch (e) {
            // const [appError] = JSON.parse(e.message);
            yield call(apiFailureCallBack);
            // Show error page
        }
    };
}


function* getProductList() {

    const makeRequest = yield call(getProductLists);
    if (makeRequest.success) {
        console.log(makeRequest.success)
        yield put(prodocuListActions.triggerProductListSuccess(makeRequest.success.data.result));
    }
}

export default function* () {
    yield takeEvery(prodocuListActions.Type.FETCH_PRODUCT_LIST_REQUEST, wrapApi(getProductList));
}