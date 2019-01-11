import {put, call, takeLatest} from 'redux-saga/effects';
import { actionFetchingListCity, actionFetchFailListCity, actionFetchedListCity } from './actions';
import { apiGetListCity } from './api';
import { ACTION_REQ_FETCH_LIST_CITY } from './constant';

function* reqFetchListCity(action:any) {
    try {
        yield put(actionFetchingListCity());

        const { data } = yield call(apiGetListCity);
    
        const  {  msg, isError } = data;

        if(isError){
            alert(msg);
            yield put(actionFetchFailListCity());
        }
        else{
            yield put(actionFetchedListCity(data));
        }
    } catch (error) {
        yield put(actionFetchFailListCity());
    }
}


function* watchReqFetchListCity(){
    
    yield takeLatest(ACTION_REQ_FETCH_LIST_CITY, reqFetchListCity);
}

export default [
    watchReqFetchListCity
]