import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies'
import { takeEvery } from 'redux-saga/effects';

function* fetchLatestConversionRates(action) {
    console.log('update the things', action)
    yield;
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}