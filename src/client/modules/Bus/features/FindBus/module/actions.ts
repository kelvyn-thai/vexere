import { 
    ACTION_CHANGE_FROM_LOCATION, ACTION_CHANGE_TO_LOCATION, ACTION_CHANGE_DATE_LOCATION, ACTION_FIND_BUS, ACTION_FETCHING_FIND_BUS, ACTION_FETCHED_FIND_BUS, ACTION_FETCH_FAIL_FIND_BUS, ACTION_FILTER_BY_BRAND, ACTION_REMOVE_FILTER_BY_BRAND, ACTION_REMOVE_ALL_FILTER, ACTION_FILTER_BY_BUSTYPE, ACTION_REMOVE_FILTER_BY_BUSTYPE, ACTION_FILTER_BY_PRICE, ACTION_REMOVE_FILTER_BY_PRICE,
      } from "./constant";

export const actionChangeFromLocation = (payload) => ({type: ACTION_CHANGE_FROM_LOCATION, payload});
export const actionChangeToLocation = (payload) => ({type: ACTION_CHANGE_TO_LOCATION, payload});
export const actionChangeDateLocation = (payload) => ({type: ACTION_CHANGE_DATE_LOCATION, payload});

export const actionFilterByBrand = (payload) => ({type: ACTION_FILTER_BY_BRAND, payload});
export const actionRemoveFilterByBrand = (payload) => ({type: ACTION_REMOVE_FILTER_BY_BRAND, payload});

export const actionFilterByBusType = (payload) => ({type: ACTION_FILTER_BY_BUSTYPE, payload});
export const actionRemoveFilterByBusType = (payload) => ({type: ACTION_REMOVE_FILTER_BY_BUSTYPE, payload});

export const actionFilterByPrice = (payload) => ({type: ACTION_FILTER_BY_PRICE, payload});
export const actionRemoveFilterByPrice = (payload) => ({type: ACTION_REMOVE_FILTER_BY_PRICE, payload});

export const actionRemoveAllFilter = () => ({type: ACTION_REMOVE_ALL_FILTER})


export const actionFindBus = (payload) => ({type: ACTION_FIND_BUS, payload});
export const actionFetchingFindBus = () => ({type: ACTION_FETCHING_FIND_BUS});
export const actionFetchedFindBus = (payload) => ({type: ACTION_FETCHED_FIND_BUS, payload});
export const actionFetchFailFindBus = () => ({type: ACTION_FETCH_FAIL_FIND_BUS});

