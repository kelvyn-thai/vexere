import {
    actionLoginFetched, actionLoginFetching, actionLoginFetchFail
} from "./actions";
import { apiLoginByGoogle, apiLoginByFacebook } from "./api";

export const actionRequestLoginByGoogle = (payload) => async (dispatch) => {
    dispatch(actionLoginFetching());
    try {
        const { data } = await apiLoginByGoogle(payload);
        dispatch(actionLoginFetched(data.payload));
    } catch (error) {
        dispatch(actionLoginFetchFail({}));
    }
}

export const actionRequestLoginByFacebook = (payload) => async (dispatch) => {
    dispatch(actionLoginFetching());
    try {
        const { data } = await apiLoginByFacebook(payload);
        
        dispatch(actionLoginFetched(data.payload));
    } catch (error) {
        dispatch(actionLoginFetchFail({}));
    }
}
