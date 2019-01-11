import { actionGetBusTicket, actionBookedTicket, actionChangeArrival, actionChangeDepature, actionUnBookedTicket, actionChangeStatusTicket, actionChangeBrand, actionChangeRoute, actionChangeData } from "./actions";
import { ticketSelector } from "./reselect";
import { createCitiesSelector } from "Bus/features/FindBus/module/reselect";

export const mapStateToProps  = state => ({
    ticket: ticketSelector(state),
    listCities: createCitiesSelector(state)
})


export const mapDispatchToProps = {
    onGetBusTicket: actionGetBusTicket,
    onBookedTicket: actionBookedTicket,
    onUnBookedTicket: actionUnBookedTicket,
    onChangeArrival: actionChangeArrival,
    onChangeDepature: actionChangeDepature,
    onChangeStatusTicket: actionChangeStatusTicket,
    onChangeData: actionChangeData,
    onChangeBrand: actionChangeBrand,
    onChangeRoute: actionChangeRoute
}

