import { createSelector } from "reselect";

const ticketState =  state => state['bus']['ticket'];


export const ticketSelector = createSelector(
    ticketState,
    ticket => ticket
)