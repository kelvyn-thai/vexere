import { call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_FIND_BUS } from './constant';
import { actionFetchingFindBus, actionFetchFailFindBus, actionFetchedFindBus } from './actions';
import { apiFindBus } from './api';

function* findBus(action: any) {
    try {
        yield put(actionFetchingFindBus());

        const params = action.payload;

        const { data } = yield call(apiFindBus, JSON.stringify(params));

        const { payload } = data;

        yield put(actionFetchedFindBus(payload));

    } catch (error) {
        yield put(actionFetchFailFindBus());
    }
}

function* watchFindBus() {
    yield takeLatest(ACTION_FIND_BUS, findBus);
}

export default [
    watchFindBus
]