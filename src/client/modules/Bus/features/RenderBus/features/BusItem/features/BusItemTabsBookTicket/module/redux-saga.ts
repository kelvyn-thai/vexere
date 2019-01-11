import { put, call, takeLatest } from "redux-saga/effects";
import { ACTION_GET_BUS_TICKET} from "./constant";
import { apiGetBusDetails } from "../../BusItemTabs/module/api";
import { actionGetBusTicketFail, actionGetBusTicketSuccess } from "./actions";

function* getBusTicket(action){
    try {
        const { data } = yield call(apiGetBusDetails, JSON.stringify(action['payload']));
        const { isError, payload } = data;
        if (isError) {
            yield put(actionGetBusTicketFail());
        }
        else {
            yield put(actionGetBusTicketSuccess(payload));
        }
    } catch (error) {
        yield put(actionGetBusTicketFail());
    }
}


function* watchGetBusTicket() {
    yield takeLatest(ACTION_GET_BUS_TICKET, getBusTicket);
}



export default [
    watchGetBusTicket
]