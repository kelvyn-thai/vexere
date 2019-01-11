import {put, call, takeLatest} from 'redux-saga/effects';
import { ACTION_REGISTER } from './constant';
import { actionRegisterFetching, actionRegisterFetched, actionRegisterFetchFail } from './actions';
import { apiRegister } from './api';


function* loginRequest(action){

    try {
        yield put(actionRegisterFetching());

        

        const { data } = yield call(apiRegister, action.payload);

        const { isError } = data;
        
        if(isError === false) {
            yield put(actionRegisterFetched(data));
        }
        else {
            yield put(actionRegisterFetchFail(data));
        }
    } catch (error) {
        // yield put(actionRegisterFetchFail());
    }
}

function* watchRegisterRequest() {
    yield takeLatest(ACTION_REGISTER, loginRequest);
}

export default [
    watchRegisterRequest
]