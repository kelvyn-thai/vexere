import { ACTION_GET_BUS_IMAGES, ACTION_GET_BUS_IMAGES_FAIL, ACTION_GET_BUS_IMAGES_SUCCESS, ACTION_GET_BUS_RATINGS, ACTION_GET_BUS_RATINGS_SUCCESS, ACTION_GET_BUS_RATINGS_FAIL, ACTION_GET_BUS_PLAN, ACTION_GET_BUS_PLAN_SUCCESS, ACTION_GET_BUS_PLAN_FAIL, ACTION_GET_BUS_CANCELATION_POLICY, ACTION_GET_BUS_CANCELATION_POLICY_SUCCESS, ACTION_GET_BUS_CANCELATION_POLICY_FAIL } from "./constant";


/**
 * ACTIONS
 */
export const actionGetBusImages = (payload) => ({type: ACTION_GET_BUS_IMAGES, payload});
export const actionGetBusImagesSuccess = (payload) => ({type: ACTION_GET_BUS_IMAGES_SUCCESS, payload});
export const actionGetBusImagesFail = () => ({type: ACTION_GET_BUS_IMAGES_FAIL});


export const actionGetBusRatings = (payload) => ({type: ACTION_GET_BUS_RATINGS, payload});
export const actionGetBusRatingsSuccess = (payload) => ({type: ACTION_GET_BUS_RATINGS_SUCCESS, payload});
export const actionGetBusRatingsFail = () => ({type: ACTION_GET_BUS_RATINGS_FAIL});



export const actionGetBusPlan = (payload) => ({type: ACTION_GET_BUS_PLAN, payload});
export const actionGetBusPlanSuccess = (payload) => ({type: ACTION_GET_BUS_PLAN_SUCCESS, payload});
export const actionGetBusPlanFail = () => ({type: ACTION_GET_BUS_PLAN_FAIL});



export const actionGetBusCancellationPolicy = (payload) => ({type: ACTION_GET_BUS_CANCELATION_POLICY, payload});
export const actionGetBusCancellationPolicySuccess = (payload) => ({type: ACTION_GET_BUS_CANCELATION_POLICY_SUCCESS, payload});
export const actionGetBusCancellationPolicyFail = () => ({type: ACTION_GET_BUS_CANCELATION_POLICY_FAIL});


/**
 * API
 */
export const API_GET_BUS_DETAILS = "/api/bus/find-details"