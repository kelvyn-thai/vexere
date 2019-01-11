import { ACTION_BOOKED_TICKET, ACTION_CHANGE_DEPATURE, ACTION_CHANGE_ARRIVAL, ACTION_UNBOOKED_TICKET, ACTION_CHANGE_BRAND, ACTION_CHANGE_ROUTE, ACTION_CHANGE_DATA } from "./constant";

const initialState = {
    data: {
        ticketBooked: [],
        arrival: { id: '', place: '' },
        depature: { id: '', place: '' },
        totalPrice: 0,
        totalTicketBooked: 0
    },
    isError: false,
    isFetching: false,
    isFetched: false
}


export default (state = initialState, action) => {

    switch (action.type) {
        case ACTION_BOOKED_TICKET:
            {
                const ticket = {
                    busId: action.payload['busId'],
                    ...action.payload['ticket'],
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        ticketBooked: [...state.data.ticketBooked, ticket],
                        totalTicketBooked: state.data.totalTicketBooked + 1,
                        totalPrice: state.data.totalPrice + parseInt(ticket['price'])
                    }
                }
            }
        case ACTION_UNBOOKED_TICKET:
            {
                let newTicketBooked = state.data.ticketBooked;
                const ticketUnbook = {
                    busId: action.payload['busId'],
                    ...action.payload['ticket'],
                }
                const indexTicketBooked = newTicketBooked.findIndex(ticketBooked => ticketBooked['seat_number'] === ticketUnbook['seat_number'] && ticketBooked['busId'] === ticketUnbook['busId']);
                newTicketBooked.splice(indexTicketBooked, 1);

                return {
                    ...state,
                    data: {
                        ...state.data,
                        ticketBooked: [
                            ...newTicketBooked
                        ],
                        totalTicketBooked: state.data.totalTicketBooked - 1,
                        totalPrice: state.data.totalPrice - parseInt(ticketUnbook['price'])
                    }
                }
            }
        case ACTION_CHANGE_DEPATURE:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        depature: { ...JSON.parse(action.payload) }
                    }
                }
            }
        case ACTION_CHANGE_ARRIVAL:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        arrival: { ...JSON.parse(action.payload) }
                    }
                }
            }
        case ACTION_CHANGE_BRAND:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        brand: {...action.payload}
                    }
                }
            }
        case ACTION_CHANGE_ROUTE:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                    route: {...action.payload}
                }
            }
        } 
        case ACTION_CHANGE_DATA:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                    ticketBooked: [...action.payload]
                }
            }
        }    
        default:
            return state;
    }
}