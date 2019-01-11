import { createSelector } from 'reselect';

const payment = state => state['payment'];

export const paymentSelector = createSelector(
    payment,
    payment=>payment
)