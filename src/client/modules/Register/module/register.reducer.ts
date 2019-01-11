import { ACTION_REGISTER, ACTION_REGISTER_FETCHING, ACTION_REGISTER_FETCHED, ACTION_REGISTER_FETCH_FAIL } from "./constant";

const initialState = {
    data: {
    },
    isError: false,
    isFetching: false,
    isFetched: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_REGISTER:
            {
                return {
                    ...state
                }
            }
        case ACTION_REGISTER_FETCHING:
            {
                return {
                    ...state,
                    isFetching: true,
                    isFetched: false,
                    isError: false
                }
            }

        case ACTION_REGISTER_FETCHED:
            {
                return {
                    ...state,
                    isFetched: true,
                    isFetching: false,
                    isError: false,
                    data: {
                        ...state.data,
                        ...action.payload
                    }
                }
            }
        case ACTION_REGISTER_FETCH_FAIL:
            {
                return {
                    ...state,
                    isFetching: false,
                    isFetched: true,
                    isError: false,
                    data: {
                        ...state.data,
                        ...action.payload
                    }
                }
            }
        default:
            return state;
    }
}