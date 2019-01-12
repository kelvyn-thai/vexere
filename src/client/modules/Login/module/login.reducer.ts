import { ACTION_LOGIN, ACTION_LOGIN_FETCHING, ACTION_LOGIN_FETCHED, ACTION_LOGIN_FETCH_FAIL, ACTION_LOGOUT, ACTION_LOGOUT_SUCCESS, ACTION_LOGOUT_FAIL, ACTION_UPDATE_INFORMATION_FETCHING, ACTION_UPDATE_INFORMATION_FETCHED, ACTION_UPDATE_INFORMATION_FETCH_FAIL, ACTION_UPDATE_INFORMATION } from "./constant";
import { ACTION_REQUEST_AUTHENTICATE, ACTION_AUTHENTICATE_FETCHING, ACTION_AUTHENTICATE_FETCHED, ACTION_AUTHENTICATE_FETCH_FAIL } from "./constant";
import { ACTION_REQUEST_WISH_BUS, ACTION_REQUEST_WISH_BUS_FETCHED, ACTION_REQUEST_USER_WISH_BUS_FAIL } from "Bus/features/RenderBus/features/BusItem/features/BusItemWishBus/module/constant";
import { ACTION_REQUEST_DESTROY_TICKET_BOOKED, ACTION_DESTROY_TICKET_BOOKED_FAIL, ACTION_DESTROY_TICKET_BOOKED_SUCCESS } from "Customer/features/TicketsBooked/module/constant";

const initialState = {
    data: {
        isAuthenticated: false,
        isAuthorized: false,
    },
    isError: false,
    isFetching: false,
    isFetched: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_LOGIN:
            {
                return {
                    ...state
                }
            }    
        case ACTION_LOGIN_FETCHING:
            {
                return {
                    ...state,
                    isFetching: true,
                    isFetched: false,
                    isError: false,
                }
            }

        case ACTION_LOGIN_FETCHED:
            {
                return {
                    ...state,
                    isFetched: true,
                    isFetching: false,
                    isError: false,
                    data: {
                        ...state.data,
                        isAuthenticated: true,
                        isAuthorized: false,
                        ...action.payload
                    }
                }
            }
        case ACTION_LOGIN_FETCH_FAIL:
            {
                return {
                    ...state,
                    isFetching: false,
                    isFetched: true,
                    isError: false,
                    data: {
                        ...state.data,
                        isAuthenticated: false,
                        isAuthorized: false,
                        ...action.payload
                    }
                }
            }
        case ACTION_REQUEST_AUTHENTICATE:
            {
                return { ...state };
            }
        case ACTION_AUTHENTICATE_FETCHING:
            {
                return {
                    ...state,
                    isFetching: true,
                    isFetched: false,
                    isError: false,
                }
            }
        case ACTION_AUTHENTICATE_FETCHED:
            {
                return {
                    ...state,
                    isFetched: true,
                    isFetching: false,
                    isError: false,
                    data: {
                        ...state.data,
                        isAuthenticated: true,
                        isAuthorized: false,
                        ...action.payload
                    }
                }
            }
        case ACTION_AUTHENTICATE_FETCH_FAIL:
            {
                return {
                    ...initialState,
                    isFetched: true
                }
            }
        case ACTION_LOGOUT: 
        {
            return {
                ...state,
                isFetching: true
            }
        }   
        case ACTION_LOGOUT_SUCCESS: 
        {
            return {
                ...initialState,
                isFetched: true,
                isFetching: false,
                isError: false,
                data: {
                    ...action.payload
                }
            }
        }   
        case ACTION_LOGOUT_FAIL: 
        {
            return {
                ...state,
                isError: true,
                isFetched: true,
                isFetching: false
            }
        }  
         
        case ACTION_UPDATE_INFORMATION:
            {
                return {
                    ...state
                }
            }
        case ACTION_UPDATE_INFORMATION_FETCHING:
            {
                return {
                    ...state,
                    msg: "Request update information"
                }
            }

        case ACTION_UPDATE_INFORMATION_FETCHED:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,                    
                        ...action.payload['payload'],
                        ...action.payload
                    },
                    msg: "Fetched update information"
                }
            }
        case ACTION_UPDATE_INFORMATION_FETCH_FAIL:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        ...action.payload
                    },
                    msg: "Fetched update information"
                }
            }
        case ACTION_REQUEST_WISH_BUS_FETCHED:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                   ...action.payload
                }
            }
        }
        case ACTION_REQUEST_WISH_BUS:
        {
            return {
                ...state
            }
        }    
        case ACTION_REQUEST_USER_WISH_BUS_FAIL:
        {
            return {
                ...state
            }
        }
        case ACTION_REQUEST_DESTROY_TICKET_BOOKED:
        {
            return {
                ...state
            }
        }
        case ACTION_DESTROY_TICKET_BOOKED_FAIL:
        {
            return {
                ...state
            }
        }    
        case ACTION_DESTROY_TICKET_BOOKED_SUCCESS:
        {
            return {
                ...state,
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