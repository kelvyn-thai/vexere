import { ACTION_GET_BUS_IMAGES, ACTION_GET_BUS_RATINGS, ACTION_GET_BUS_PLAN, ACTION_GET_BUS_CANCELATION_POLICY } from './constant';
import { put, call, takeLatest } from "redux-saga/effects";
import { apiGetBusDetails } from './api';
import { actionGetBusImagesFail, actionGetBusImagesSuccess, actionGetBusRatingsFail, actionGetBusRatingsSuccess, actionGetBusPlanFail, actionGetBusPlanSuccess, actionGetBusCancellationPolicyFail, actionGetBusCancellationPolicySuccess } from './actions';

function* getBusImages(action) {
    try {
        const { data } = yield call(apiGetBusDetails, JSON.stringify(action['payload']));
        const { isError, payload } = data;
        if (isError) {
            yield put(actionGetBusImagesFail());
        }
        else {
            yield put(actionGetBusImagesSuccess(payload));
        }
    } catch (error) {
        yield put(actionGetBusImagesFail());
    }
}

function* watchGetBusImages() {
    yield takeLatest(ACTION_GET_BUS_IMAGES, getBusImages);
}


function* getBusRatings(action) {
    try {
        const { data } = yield call(apiGetBusDetails, JSON.stringify(action['payload']));
        const { isError, payload } = data;
        if (isError) {
            yield put(actionGetBusRatingsFail());
        }
        else {
            yield put(actionGetBusRatingsSuccess(payload));
        }
    } catch (error) {
        yield put(actionGetBusRatingsFail());
    }
}

function* watchGetBusRatings() {
    yield takeLatest(ACTION_GET_BUS_RATINGS, getBusRatings);
}



function* getBusPlan(action) {

    try {
        const { data } = yield call(apiGetBusDetails, JSON.stringify(action['payload']));
        const { isError, payload } = data;
        if (isError) {
            yield put(actionGetBusPlanFail());
        }
        else {
            yield put(actionGetBusPlanSuccess(payload));
        }
    } catch (error) {
        yield put(actionGetBusPlanFail());
    }
}

function* watchGetBusPlan() {
    yield takeLatest(ACTION_GET_BUS_PLAN, getBusPlan);
}



function* getBusCancelationPolicy(action) {

    try {
        const { data } = yield call(apiGetBusDetails, JSON.stringify(action['payload']));
        const { isError, payload } = data;
        if (isError) {
            yield put(actionGetBusCancellationPolicyFail());
        }
        else {
            yield put(actionGetBusCancellationPolicySuccess(payload));
        }
    } catch (error) {
        yield put(actionGetBusCancellationPolicyFail());
    }
}


function* watchGetBusCancelationPolicy() {
    yield takeLatest(ACTION_GET_BUS_CANCELATION_POLICY, getBusCancelationPolicy);
}



export default [
    watchGetBusCancelationPolicy,
    watchGetBusImages,
    watchGetBusPlan,
    watchGetBusRatings
]