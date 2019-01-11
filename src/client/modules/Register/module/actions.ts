import { ACTION_REGISTER, ACTION_REGISTER_FETCHING, ACTION_REGISTER_FETCHED, ACTION_REGISTER_FETCH_FAIL } from "./constant";

export const actionRegister = (payload) => ({type: ACTION_REGISTER, payload});
export const actionRegisterFetching = () => ({type: ACTION_REGISTER_FETCHING});
export const actionRegisterFetched  = (payload) => ({type: ACTION_REGISTER_FETCHED, payload});
export const actionRegisterFetchFail = (payload) => ({type: ACTION_REGISTER_FETCH_FAIL, payload});
