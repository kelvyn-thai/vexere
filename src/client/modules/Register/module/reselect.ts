import { createSelector } from 'reselect';


const register = (state) => state.register;

export const registerSelector = createSelector(
    register,
    register => register
)