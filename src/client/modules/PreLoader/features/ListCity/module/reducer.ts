import { ACTION_REQ_FETCH_LIST_CITY, ACTION_FETCHING_LIST_CITY, ACTION_FETCHED_LIST_CITY, ACTION_FETCH_FAIL_LIST_CITY } from "./constant";

const initialState = {
    data: {},
    isFetching: false,
    isError: false,
    isFetched: false
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_REQ_FETCH_LIST_CITY:
            {
                return {...state};
            }
        case ACTION_FETCHING_LIST_CITY:
        {
            return {
                ...state,
                isFetching: true,
                isFetched: false,
                isError: false,
            }
        }
        case ACTION_FETCHED_LIST_CITY:
        {
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                isError: false,
                data: {
                    ...action.payload
                }
            }
        }
        case ACTION_FETCH_FAIL_LIST_CITY:    
        {
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                isError: true,
            }
        }
        default:
            return state;
    }
}