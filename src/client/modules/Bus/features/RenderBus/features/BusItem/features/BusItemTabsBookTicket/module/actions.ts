import {
    ACTION_GET_BUS_TICKET, ACTION_GET_BUS_TICKET_SUCCESS, ACTION_GET_BUS_TICKET_FAIL,
    ACTION_CHANGE_DEPATURE, ACTION_CHANGE_ARRIVAL, ACTION_BOOKED_TICKET,
    ACTION_UNBOOKED_TICKET, ACTION_CHANGE_STATUS_TICKET, ACTION_CHANGE_BRAND, ACTION_CHANGE_ROUTE, ACTION_CHANGE_DATA
} from "./constant";

export const actionGetBusTicket = (payload) => ({ type: ACTION_GET_BUS_TICKET, payload });
export const actionGetBusTicketSuccess = (payload) => ({ type: ACTION_GET_BUS_TICKET_SUCCESS, payload });
export const actionGetBusTicketFail = () => ({ type: ACTION_GET_BUS_TICKET_FAIL });


export const actionBookedTicket = (payload) => ({ type: ACTION_BOOKED_TICKET, payload });
export const actionUnBookedTicket = (payload) => ({ type: ACTION_UNBOOKED_TICKET, payload });
export const actionChangeDepature = (payload) => ({ type: ACTION_CHANGE_DEPATURE, payload });
export const actionChangeArrival = (payload) => ({ type: ACTION_CHANGE_ARRIVAL, payload });
export const actionChangeStatusTicket = (payload) => ({ type: ACTION_CHANGE_STATUS_TICKET, payload });
export const actionChangeBrand = (payload) => ({type: ACTION_CHANGE_BRAND, payload});
export const actionChangeRoute = (payload) => ({type: ACTION_CHANGE_ROUTE, payload});
export const actionChangeData = (payload) => ({type: ACTION_CHANGE_DATA,payload});
