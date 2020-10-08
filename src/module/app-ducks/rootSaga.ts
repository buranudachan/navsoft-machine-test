/**
 * Root Saga
 */
import * as effects from 'redux-saga/effects';
import { default as apiSaga } from '../services/sagas/apiSaga'
const { all } = effects;

export default function* rootSaga() {
    yield all([
        apiSaga()
    ]);
}