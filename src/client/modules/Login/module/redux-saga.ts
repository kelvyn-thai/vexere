import { put, call, takeLatest } from 'redux-saga/effects';
import { ACTION_LOGIN, ACTION_REQUEST_AUTHENTICATE, ACTION_LOGOUT, ACTION_UPDATE_INFORMATION } from './constant';
import {
    actionLoginFetching, actionLoginFetched, actionLoginFetchFail,
    actionAuthenticateFetching, actionAuthenticateFetchFail, actionAuthenticateFetched, actionLogoutFail, actionLogoutSuccess, actionUpdateInformationFetching, actionUpdateInformationFetched, actionUpdateInformationFetchFail
} from './actions';
import { apiLogin, apiRequestAuthenticate, apiLogout, apiUpdateInformation } from './api';


function* loginRequest(action) {

    try {
        yield put(actionLoginFetching());

        const { data } = yield call(apiLogin, action.payload);

        const { isError, payload } = data;

        if (isError === false) {
            yield put(actionLoginFetched(payload));
        }
        else {
            yield put(actionLoginFetchFail(data));
        }
    } catch (error) {
        // yield put(actionLoginFetchFail(payload));
    }
}

function* watchLoginRequest() {
    yield takeLatest(ACTION_LOGIN, loginRequest);
}



function* reqFetchAuthenticate() {
    try {
        yield put(actionAuthenticateFetching());

        const { data } = yield call(apiRequestAuthenticate);

        const { isError, payload } = data;

        if (isError) {
            yield put(actionAuthenticateFetchFail());
        }
        else {
            yield put(actionAuthenticateFetched(payload));
        }
    } catch (error) {
        // yield put(actionAuthenticateFetchFail());
    }
}


function* watchReqFetchAuthenticate() {

    yield takeLatest(ACTION_REQUEST_AUTHENTICATE, reqFetchAuthenticate);
}

export function* reqLogout() {
    try {
        const { data } = yield call(apiLogout);

        const { isError,payload } = data;

        if(isError){
            yield put(actionLogoutFail())
        } 
        else{
            yield put(actionLogoutSuccess(payload));
        }
    } catch (error) {
        
    }
}

export function* watchLogout() {
    yield takeLatest(ACTION_LOGOUT, reqLogout);
}


function* requestUpdateInformation(action) {

    try {
        yield put(actionUpdateInformationFetching());

        const { data } = yield call(apiUpdateInformation, action.payload);

        const { isError, payload } = data;

        if (isError === false) {
            yield put(actionUpdateInformationFetched(data));
        }
        else {
            yield put(actionUpdateInformationFetchFail(data));
        }
    } catch (error) {
        // yield put(actionUpdateInformationFetchFail(payload));
    }
}

function* watchRequestUpdateInformation() {
    yield takeLatest(ACTION_UPDATE_INFORMATION, requestUpdateInformation);
}




export default [
    watchLoginRequest,
    watchReqFetchAuthenticate,
    watchLogout,
    watchRequestUpdateInformation
]