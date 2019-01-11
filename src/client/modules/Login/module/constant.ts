/**
 * ACITONS
 */
export const ACTION_LOGIN = "[USER] Submit form login";
export const ACTION_LOGIN_FETCHING = "[USER] Fetching form login";
export const ACTION_LOGIN_FETCHED = "[USER] Fetched form login";
export const ACTION_LOGIN_FETCH_FAIL = "[USER] Fetch fail form login";
export const ACTION_LOGOUT = "[USER] Logout user";
export const ACTION_LOGOUT_SUCCESS = "[USER] Logout user success";
export const ACTION_LOGOUT_FAIL = "[USER] Logout user fail";
export const ACTION_REQUEST_AUTHENTICATE = "[Preloader][Authenticate] Send request authenticate user";
export const ACTION_AUTHENTICATE_FETCHING = "[Preloader][Authenticate] Request authenticate user fetching";
export const ACTION_AUTHENTICATE_FETCHED = "[Preloader][Authenticate] Request authenticate user fetched";
export const ACTION_AUTHENTICATE_FETCH_FAIL = "[Preloader][Authenticate] Request authenticate user fail";


export const ACTION_UPDATE_INFORMATION = "[USER] Submit form update information";
export const ACTION_UPDATE_INFORMATION_FETCHING = "[USER] Fetching form update information";
export const ACTION_UPDATE_INFORMATION_FETCHED = "[USER] Fetched form update information";
export const ACTION_UPDATE_INFORMATION_FETCH_FAIL = "[USER] Fetch fail form update information";

/**
 * API
 */
export const API_LOGIN = "/api/user/login";
export const API_AUTHENTICATE_USER = "/api/user/authenticate";
export const API_UPDATE_INFORMATION = "/api/user/update-user";
export const API_LOGOUT = "/api/user/logout";
