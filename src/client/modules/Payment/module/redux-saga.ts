import { put, call, takeLatest } from "redux-saga/effects";
import { apiPaymentTicketsBooked } from "./api";
import { actionPaymentTicketsBookedFail, actionPaymentTicketsBookedSuccess, actionPaymentTicketsBooked } from "./actions";
import { ACTION_REQUEST_PAYMENT_TICKETS_BOOKED } from "./constant";

function* paymentTicketsBooked(action) {
    console.log('action' ,action)
    try {
        yield put(actionPaymentTicketsBooked());
        
        const { data } = yield call(apiPaymentTicketsBooked, {tickets: action.payload});
        const { isError, payload} = data;
        if(isError){ 
            yield put(actionPaymentTicketsBookedFail());
        }
        else{
            yield put(actionPaymentTicketsBookedSuccess(payload));
        }
    } catch (error) {
        yield put(actionPaymentTicketsBookedFail());
    }
}

function* watchPaymentTicketsBooked() {
    yield takeLatest(ACTION_REQUEST_PAYMENT_TICKETS_BOOKED, paymentTicketsBooked);
}


export default [
    watchPaymentTicketsBooked
]