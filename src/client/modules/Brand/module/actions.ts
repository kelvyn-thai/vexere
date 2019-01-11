import { ACTION_FETCHING_BRAND, ACTION_FETCH_FAIL_BRAND, ACTION_FETCHED_BRAND } from "./constants";
import { apiRequestGetBrands } from "./api";


export const actionFetchingBrand = () => ({ type: ACTION_FETCHING_BRAND });
export const actionFetchFailBrand = () => ({ type: ACTION_FETCH_FAIL_BRAND });
export const actionFetchedBrand = (payload) => ({ type: ACTION_FETCHED_BRAND, payload });
export const actionRequestFetchBrand = (params = {}) => {
    return async dispatch => {
        try {
            await dispatch(actionFetchingBrand());
    
            const { data } = await apiRequestGetBrands(JSON.stringify(params));
    
            await dispatch(actionFetchedBrand(data.payload));
    
        } catch (error) {
            await dispatch(actionFetchFailBrand());
        }
    }
    
}
