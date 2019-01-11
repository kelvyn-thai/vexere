import { ACTION_PAYMENT_TICKETS_BOOKED, ACTION_PAYMENT_TICKETS_BOOKED_FAIL, ACTION_PAYMENT_TICKETS_BOOKED_SUCCESS, ACTION_REQUEST_PAYMENT_TICKETS_BOOKED } from "./constant";

export const actionRequestPaymentTicketsBooked = (payload) => ({type: ACTION_REQUEST_PAYMENT_TICKETS_BOOKED,payload});
export const actionPaymentTicketsBooked = () => ({type: ACTION_PAYMENT_TICKETS_BOOKED});
export const actionPaymentTicketsBookedSuccess = (payload) => ({type: ACTION_PAYMENT_TICKETS_BOOKED_SUCCESS,payload});
export const actionPaymentTicketsBookedFail = () => ({type: ACTION_PAYMENT_TICKETS_BOOKED_FAIL});
