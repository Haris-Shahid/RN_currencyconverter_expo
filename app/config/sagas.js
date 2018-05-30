import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies'
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { CANCEL } from 'redux-saga';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base${currency}`);

function* fetchLatestConversionRates(action) {
    // console.log('update the things', action)
    // getLatestRate('USD')
    //     .then((res) => res.json())
    //     .then((res) => console.log(res, 'reduxsaga'))
    //     .catch((err) => console.log(err))
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();
        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error })
        } else {
            yield put({ type: CONVERSION_RESULT, result })
        }
    }
    catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message })
        // console.log('sagaError', e);
    }
    // yield;
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}