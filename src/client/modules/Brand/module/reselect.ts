import { createSelector } from "reselect";

const brand = state => state['brand'];

export const brandSelector = createSelector(
    brand,
    brandState=>brandState
)