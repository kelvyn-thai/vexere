import { ACTION_REQUEST_WISH_BUS_FETCHED, ACTION_REQUEST_USER_WISH_BUS_FAIL, ACTION_REQUEST_WISH_BUS } from "./constant";

export const actionRequestWishBus = (payload) => ({ type: ACTION_REQUEST_WISH_BUS, payload });
export const actionRequestWishBusFetched = (payload) => ({ type: ACTION_REQUEST_WISH_BUS_FETCHED, payload });
export const actionRequestWishBusFail = () => ({ type: ACTION_REQUEST_USER_WISH_BUS_FAIL });