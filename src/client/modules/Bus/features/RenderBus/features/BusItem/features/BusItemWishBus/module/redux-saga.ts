import { put, takeLatest, call } from "redux-saga/effects";
import { ACTION_REQUEST_WISH_BUS } from "./constant";
import { apiWishBus } from "./api";
import { actionRequestWishBusFetched, actionRequestWishBusFail } from "./actions";


function* watchRequestWishBus() {
    yield takeLatest(ACTION_REQUEST_WISH_BUS, requestWishBus);
}

function* requestWishBus(action) {
    try {
        console.log(action.payload)
        const { data } = yield call(apiWishBus, action.payload);
        const { payload, status } = data;
        if (status === 200) {
            yield put(actionRequestWishBusFetched(payload));
        }
        else {
            yield put(actionRequestWishBusFail());
        }

    } catch (error) {

    }
}


export default [
    watchRequestWishBus
]