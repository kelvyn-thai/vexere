import { loginSelector } from "Login/module/reselect";
import { ticketSelector } from "Bus/features/RenderBus/features/BusItem/features/BusItemTabsBookTicket/module/reselect";
import { actionRequestPaymentTicketsBooked } from "./actions";
import { paymentSelector } from "./reselect";

export const mapStateToProps = state => ({
    login: loginSelector(state),
    ticket: ticketSelector(state),
    payment: paymentSelector(state)
});


export const mapDispatchToProps = {
    paymentTicketsBooked: actionRequestPaymentTicketsBooked
}