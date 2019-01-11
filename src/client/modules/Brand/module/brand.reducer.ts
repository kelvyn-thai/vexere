import { ACTION_FETCHING_BRAND, ACTION_FETCHED_BRAND, ACTION_FETCH_FAIL_BRAND, ACTION_REQUEST_GET_BRAND } from "./constants";

const initialState = {
    data: {},
    isFetching: false,
    isFetched: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action['type']) {
        case ACTION_REQUEST_GET_BRAND:

            {
                return { ...state };
            }
        case ACTION_FETCHING_BRAND:
            {
                return {
                    ...state,
                    isFetching: true,
                    isFetched: false,
                    isError: false
                }
            }
        case ACTION_FETCH_FAIL_BRAND:
            {
                return {
                    ...state,
                    isFetching: false,
                    isFetched: false,
                    isError: true
                }
            }
        case ACTION_FETCHED_BRAND:
            {
                return {
                    ...state,
                    data: {
                        ...action.payload
                    },
                    isFetching: false,
                    isFetched: true,
                    isError: false
                }
            }
        default:
            return state;
    }
}