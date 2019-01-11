import {put, takeLatest} from 'redux-saga/effects';
import { ACTION_SUBMIT_FORM } from './constant';

function* submitFormData(action) {
    try {
        
        console.log('action.payload', action.payload)

    } catch (error) {
        
    }
}


function* watchSubmitFormData() {
    yield takeLatest(ACTION_SUBMIT_FORM, submitFormData);
}



export default [
    watchSubmitFormData
]
