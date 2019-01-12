/**
 * ACITONS
 */
export const ACTION_LOGIN = "[login] Submit form login";
export const ACTION_LOGIN_FETCHING = "[login] Fetching form login";
export const ACTION_LOGIN_FETCHED = "[login] Fetched form login";
export const ACTION_LOGIN_FETCH_FAIL = "[login] Fetch fail form login";
export const ACTION_LOGOUT = "[login] Logout user";
export const ACTION_LOGOUT_SUCCESS = "[login] Logout user success";
export const ACTION_LOGOUT_FAIL = "[login] Logout user fail";
export const ACTION_REQUEST_AUTHENTICATE = "[Preloader][Authenticate] Send request authenticate user";
export const ACTION_AUTHENTICATE_FETCHING = "[Preloader][Authenticate] Request authenticate user fetching";
export const ACTION_AUTHENTICATE_FETCHED = "[Preloader][Authenticate] Request authenticate user fetched";
export const ACTION_AUTHENTICATE_FETCH_FAIL = "[Preloader][Authenticate] Request authenticate user fail";


export const ACTION_UPDATE_INFORMATION = "[login] Submit form update information";
export const ACTION_UPDATE_INFORMATION_FETCHING = "[login] Fetching form update information";
export const ACTION_UPDATE_INFORMATION_FETCHED = "[login] Fetched form update information";
export const ACTION_UPDATE_INFORMATION_FETCH_FAIL = "[login] Fetch fail form update information";

export const ACTION_REQUEST_LOGIN_BY_GOOGLE = "[login] Request login form by google";
export const ACTION_FETCHING_REQUEST_LOGIN_BY_GOOGLE = "[login] Fetching request login form by google";
export const ACTION_FETCHED_REQUEST_LOGIN_BY_GOOGLE = "[login] Fetched request login form by google";
export const ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_GOOGLE = "[login] Fetch fail request login form by google";

export const ACTION_REQUEST_LOGIN_BY_FACEBOOK = "[login] Request login form by facebook";
export const ACTION_FETCHING_REQUEST_LOGIN_BY_FACEBOOK = "[login] Fetching request login form by facebook";
export const ACTION_FETCHED_REQUEST_LOGIN_BY_FACEBOOK = "[login] Fetched request login form by facebook";
export const ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_FACEBOOK = "[login] Fetch fail request login form by facebook";

/**
 * API
 */
export const API_LOGIN = "/api/user/login";
export const API_AUTHENTICATE_USER = "/api/user/authenticate";
export const API_UPDATE_INFORMATION = "/api/user/update-user";
export const API_LOGOUT = "/api/user/logout";
export const API_LOGIN_BY_GOOGLE = "/api/user/login-by-google";
export const API_LOGIN_BY_FACEBOOK = "/api/user/login-by-facebook";