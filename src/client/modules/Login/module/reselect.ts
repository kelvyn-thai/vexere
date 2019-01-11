import { createSelector } from 'reselect';


const login = (state) => state.login;

export const loginSelector = createSelector(
    login,
    login => login
)