import { ACTION_REQ_FETCH_LIST_CITY, ACTION_FETCHED_LIST_CITY, ACTION_FETCHING_LIST_CITY, ACTION_FETCH_FAIL_LIST_CITY } from "./constant";

export const actionReqFetchListCity = () => ({type: ACTION_REQ_FETCH_LIST_CITY});
export const actionFetchedListCity = (payload: any) => ({type: ACTION_FETCHED_LIST_CITY, payload});
export const actionFetchingListCity = () => ({type: ACTION_FETCHING_LIST_CITY});
export const actionFetchFailListCity = () => ({type: ACTION_FETCH_FAIL_LIST_CITY});
