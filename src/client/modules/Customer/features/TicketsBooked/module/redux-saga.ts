import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_REQUEST_DESTROY_TICKET_BOOKED } from "./constant";
import { apiDestroyTicketBooked } from "./api";
import { actionDestroyTicketBookedSuccess, actionDestroyTicketBookedFail } from "./actions";


function* watchRequestDestroyTicketBooked() {
    yield takeLatest(ACTION_REQUEST_DESTROY_TICKET_BOOKED, requestDestroyTicketBooked);
}


function* requestDestroyTicketBooked(action) {
    try {
       const { data } = yield call(apiDestroyTicketBooked, action.payload);
       const { payload } = data;
       yield put(actionDestroyTicketBookedSuccess(payload));    
    } catch (error) {
        yield put(actionDestroyTicketBookedFail());
    }
}

export default [
    watchRequestDestroyTicketBooked
]
