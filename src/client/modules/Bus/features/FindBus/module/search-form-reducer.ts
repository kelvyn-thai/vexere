import { 
    ACTION_CHANGE_DATE_LOCATION,
    ACTION_CHANGE_FROM_LOCATION,
    ACTION_CHANGE_TO_LOCATION,
    ACTION_FILTER_BY_BRAND,
    ACTION_REMOVE_FILTER_BY_BRAND,
    ACTION_REMOVE_ALL_FILTER,
    ACTION_FILTER_BY_PRICE,
    ACTION_REMOVE_FILTER_BY_PRICE,
    ACTION_FILTER_BY_BUSTYPE,
    ACTION_REMOVE_FILTER_BY_BUSTYPE
} from "./constant";

const initialState = {
    data: {
        conditions: {
            from: {},
            to: {},
            time_start: 0,
            brands: [],
            types: []
        },
        projection: '',
        options: {
            sort: {
                prices: []
            },
        }
    },
    isFetching: false,
    isFetched: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FROM_LOCATION:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        conditions: {
                            ...state.data.conditions,
                            from: action.payload
                        }
                    }
                }
            }
        case ACTION_CHANGE_TO_LOCATION:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        conditions: {
                            ...state.data.conditions,
                            to: action.payload
                        }
                    }
                }
            }
        case ACTION_CHANGE_DATE_LOCATION:
            {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        conditions: {
                            ...state.data.conditions,
                            time_start: new Date(action.payload).getTime()
                        }
                    }
                }
            }
        case ACTION_FILTER_BY_BRAND:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                    conditions: {
                        ...state.data.conditions,
                        brands:[...state.data.conditions.brands, action.payload]
                    }
                    
                }
            }
        }
        case ACTION_REMOVE_FILTER_BY_BRAND:
        {            
            let newBrands = state.data.conditions.brands.filter( brand => brand.code !== action.payload.code);
            return {
                ...state,
                data: {
                    ...state.data,
                    conditions: {
                        ...state.data.conditions,
                        brands: [...newBrands]
                    }
                }
            }
        }    
        case ACTION_FILTER_BY_PRICE:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                    options: {
                        ...state.data.options,
                        sort: {
                            ...state.data.options.sort,
                            prices:[action.payload]
                        }
                    }
                }
            }
        }
        case ACTION_REMOVE_FILTER_BY_PRICE:
        {            
            let newPrices = state.data.options.sort.prices.filter( price => price.type !== action.payload.type);
            return {
                ...state,
                data: {
                    ...state.data,
                    options: {
                        ...state.data.options,
                        sort: {
                            ...state.data.options.sort,
                            prices: [...newPrices]
                        }
                    }
                }
            }
        }    
        case ACTION_REMOVE_ALL_FILTER:
        {
            return {
                ...state,
                data: {
                    ...initialState.data,
                    conditions: {
                        ...initialState.data.conditions,
                        from: state.data.conditions.from,
                        to: state.data.conditions.to,
                        time_start: state.data.conditions.time_start,
                        brands: []
                    }
                }
            }
        }

        case ACTION_FILTER_BY_BUSTYPE:
        {
            return {
                ...state,
                data: {
                    ...state.data,
                    conditions: {
                        ...state.data.conditions,
                        types: [...state.data.conditions.types, action.payload]
                    }
                }
            }
        }
        case ACTION_REMOVE_FILTER_BY_BUSTYPE:
        {            
            let newtypes = state.data.conditions.types.filter( type => type.type !== action.payload.type);
            return {
                ...state,
                data: {
                    ...state.data,
                    conditions: {
                        ...state.data.conditions,
                        types: [...newtypes]
                    }
                }
            }
        }    
        
        default:
            return state;
    }
}