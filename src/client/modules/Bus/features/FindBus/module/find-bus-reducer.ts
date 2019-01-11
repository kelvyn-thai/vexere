import { ACTION_GET_BUS_IMAGES, ACTION_GET_BUS_PLAN, ACTION_GET_BUS_RATINGS, ACTION_GET_BUS_CANCELATION_POLICY, ACTION_GET_BUS_IMAGES_SUCCESS, ACTION_GET_BUS_IMAGES_FAIL, ACTION_GET_BUS_PLAN_SUCCESS, ACTION_GET_BUS_PLAN_FAIL, ACTION_GET_BUS_RATINGS_FAIL, ACTION_GET_BUS_RATINGS_SUCCESS, ACTION_GET_BUS_CANCELATION_POLICY_SUCCESS, ACTION_GET_BUS_CANCELATION_POLICY_FAIL } from './../../RenderBus/features/BusItem/features/BusItemTabs/module/constant';
import {
    ACTION_FIND_BUS,
    ACTION_FETCHING_FIND_BUS,
    ACTION_FETCH_FAIL_FIND_BUS,
    ACTION_FETCHED_FIND_BUS
} from "./constant";
import { ACTION_GET_BUS_TICKET, ACTION_GET_BUS_TICKET_FAIL, ACTION_GET_BUS_TICKET_SUCCESS, ACTION_CHANGE_STATUS_TICKET } from 'Bus/features/RenderBus/features/BusItem/features/BusItemTabsBookTicket/module/constant';
import { findByIdAndUpdate } from 'Library/findAndUpdate';


const initialState = {
    data: {
    },
    isFetching: false,
    isFetched: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FIND_BUS:
            {
                return {
                    ...state
                }
            }
        case ACTION_FETCHING_FIND_BUS:
            {
                return {
                    ...state,
                    isFetching: true,
                    isFetched: false,
                    isError: false
                }
            }
        case ACTION_FETCH_FAIL_FIND_BUS:
            {
                return {
                    ...state,
                    isFetching: false,
                    isFetched: false,
                    isError: true
                }
            }
        case ACTION_FETCHED_FIND_BUS:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        ...action.payload
                    },
                    isFetching: false,
                    isFetched: true,
                    isError: false
                }
            }

        case ACTION_GET_BUS_IMAGES:
            {
                return {
                    ...state
                }
            }
        case ACTION_GET_BUS_IMAGES_SUCCESS:
            {
                const { _id, photos } = action.payload;

                const newResults = state.data['results'];

                const index = newResults.findIndex(bus => bus['_id'] === _id);

                newResults[index] = {
                    ...newResults[index],
                    photos
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        results: [...newResults]
                    }
                }
            }
        case ACTION_GET_BUS_IMAGES_FAIL:
            {
                return {
                    ...state,
                    isError: true
                }
            }
        case ACTION_GET_BUS_PLAN:
            {
                return {
                    ...state
                }
            }
        case ACTION_GET_BUS_PLAN_SUCCESS:
            {
                const { _id, plan } = action.payload;

                const newResults = state.data['results'];

                const index = newResults.findIndex(bus => bus['_id'] === _id);

                newResults[index] = {
                    ...newResults[index],
                    plan
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        results: [...newResults]
                    }
                }
            }
        case ACTION_GET_BUS_PLAN_FAIL:
            {
                return {
                    ...state,
                    isError: true
                }
            }
        case ACTION_GET_BUS_RATINGS:
            {
                return {
                    ...state
                }
            }
        case ACTION_GET_BUS_RATINGS_SUCCESS:
            {
                const { _id, comments } = action.payload;

                const newResults = state.data['results'];

                const index = newResults.findIndex(bus => bus['_id'] === _id);

                newResults[index] = {
                    ...newResults[index],
                    comments
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        results: [...newResults]
                    }
                }
            }
        case ACTION_GET_BUS_RATINGS_FAIL:
            {
                return {
                    ...state,
                    isError: true
                }
            }
        case ACTION_GET_BUS_CANCELATION_POLICY:
            {
                return {
                    ...state
                }
            }
        case ACTION_GET_BUS_CANCELATION_POLICY_FAIL:
            {
                return {
                    ...state,
                    isError: true
                }
            }
        case ACTION_GET_BUS_CANCELATION_POLICY_SUCCESS:
            {
                const { _id, cancellation_policy } = action.payload;

                const newResults = state.data['results'];

                const index = newResults.findIndex(bus => bus['_id'] === _id);

                newResults[index] = {
                    ...newResults[index],
                    cancellation_policy
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        results: [...newResults]
                    }
                }
            }
        case ACTION_GET_BUS_TICKET:
            {
                return {
                    ...state
                }
            }
        case ACTION_GET_BUS_TICKET_FAIL:
            {
                return {
                    ...state,
                    isError: true
                }
            }
        case ACTION_GET_BUS_TICKET_SUCCESS:
            {
                const { _id, tickets } = action.payload;

                const newResults = state.data['results'];

                const index = newResults.findIndex(bus => bus['_id'] === _id);

                newResults[index] = {
                    ...newResults[index],
                    tickets
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        results: [...newResults]
                    }
                }
            }
        case ACTION_CHANGE_STATUS_TICKET:
        {
            
            let newResults = state.data['results'].slice();

            let bus  = newResults.find(bus => bus._id === action.payload.busId);

            let tickets = bus.tickets.slice();

            let newTickets = findByIdAndUpdate(tickets, action.payload.ticket);

            bus.tickets = [...newTickets];

            const indexBus = newResults.findIndex(item => item['_id'] === bus['_id']);

            newResults[indexBus] = {...bus};

            return {
                ...state,
                data: {
                    ...state.data,
                    results: [
                        ...newResults
                    ]
                }
            }
        }   
        default:
            return state;
    }

}