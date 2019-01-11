import { ACTION_REQUEST_PAYMENT_TICKETS_BOOKED, ACTION_PAYMENT_TICKETS_BOOKED, ACTION_PAYMENT_TICKETS_BOOKED_SUCCESS, ACTION_PAYMENT_TICKETS_BOOKED_FAIL } from "./constant";

const initialState = {
    data: {},
    isError: false,
    isFetching: false,
    isFetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_REQUEST_PAYMENT_TICKETS_BOOKED:
            {
                return { ...state };
            }
        case ACTION_PAYMENT_TICKETS_BOOKED:
            {
                return { 
                    ...state,
                    isError: false,
                    isFetched: false,
                    isFetching: true
                };
            }   
        case ACTION_PAYMENT_TICKETS_BOOKED_SUCCESS:
            {
                return { 
                    ...state,
                    isError: false,
                    isFetched: true,
                    isFetching: false,
                    data: {...action.payload}
                 };
            }
        case ACTION_PAYMENT_TICKETS_BOOKED_FAIL:
            {
                return { 
                    ...state,
                    isError: true,
                    isFetched: false,
                    isFetching: false
                };
            }
        default:
            return state;
    }
}