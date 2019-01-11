import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_REQUEST_DESTROY_TICKET_BOOKED } from "./constant";
import { apiDestroyTicketBooked } from "./api";
import { actionDestroyTicketBookedSuccess, actionDestroyTicketBookedFail } from "./actions";


function* watchRequestDestroyTicketBooked() {
    yield takeLatest(ACTION_REQUEST_DESTROY_TICKET_BOOKED, requestDestroyTicketBooked);
}


function* requestDestroyTicketBooked(action) {
    try {
        console.log('action ', action)
        const { data } = yield call(apiDestroyTicketBooked, action.payload);
        console.log('data ', data)
        const { payload, status } = data;

        if(status === 200) {
            yield put(actionDestroyTicketBookedSuccess(payload));
        }
        else {
            yield put(actionDestroyTicketBookedFail());
        }
    } catch (error) {
        
    }
}

export default [
    watchRequestDestroyTicketBooked
]
