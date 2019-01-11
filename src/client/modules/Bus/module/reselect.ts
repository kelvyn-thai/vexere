import { createSelector } from "reselect";

const bus = (state: any) => state['bus'];

export const createBusSelector = createSelector(
    bus,
    busData => busData
)