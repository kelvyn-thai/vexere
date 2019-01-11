import { ACTION_REQUEST_DESTROY_TICKET_BOOKED, ACTION_DESTROY_TICKET_BOOKED_FAIL, ACTION_DESTROY_TICKET_BOOKED_SUCCESS } from "./constant";

export const actionRequestDestroyTicketBooked = (payload) => ({type: ACTION_REQUEST_DESTROY_TICKET_BOOKED, payload});
export const actionDestroyTicketBookedSuccess = (payload) => ({type: ACTION_DESTROY_TICKET_BOOKED_SUCCESS, payload});
export const actionDestroyTicketBookedFail = () => ({type: ACTION_DESTROY_TICKET_BOOKED_FAIL});