import { ACTION_LOGIN, ACTION_LOGIN_FETCHING, ACTION_LOGIN_FETCHED, ACTION_LOGIN_FETCH_FAIL, ACTION_LOGOUT, ACTION_LOGOUT_FAIL, ACTION_LOGOUT_SUCCESS, ACTION_UPDATE_INFORMATION, ACTION_UPDATE_INFORMATION_FETCHING, ACTION_UPDATE_INFORMATION_FETCHED, ACTION_UPDATE_INFORMATION_FETCH_FAIL, ACTION_REQUEST_LOGIN_BY_GOOGLE, ACTION_FETCHING_REQUEST_LOGIN_BY_GOOGLE, ACTION_FETCHED_REQUEST_LOGIN_BY_GOOGLE, ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_GOOGLE, ACTION_FETCHING_REQUEST_LOGIN_BY_FACEBOOK, ACTION_FETCHED_REQUEST_LOGIN_BY_FACEBOOK, ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_FACEBOOK } from "./constant";
import { ACTION_REQUEST_AUTHENTICATE, ACTION_AUTHENTICATE_FETCHING, ACTION_AUTHENTICATE_FETCHED, ACTION_AUTHENTICATE_FETCH_FAIL } from './constant';

export const actionLogin = (payload) => ({type: ACTION_LOGIN, payload});
export const actionLoginFetching = () => ({type: ACTION_LOGIN_FETCHING});
export const actionLoginFetched  = (payload) => ({type: ACTION_LOGIN_FETCHED, payload});
export const actionLoginFetchFail = (payload) => ({type: ACTION_LOGIN_FETCH_FAIL, payload});
export const actionLogout = () => ({type: ACTION_LOGOUT});
export const actionLogoutSuccess = (payload) => ({type: ACTION_LOGOUT_SUCCESS, payload});
export const actionLogoutFail = () => ({type: ACTION_LOGOUT_FAIL});
export const actionRequestAuthenticate = () => ({type: ACTION_REQUEST_AUTHENTICATE});
export const actionAuthenticateFetching = () => ({type: ACTION_AUTHENTICATE_FETCHING});
export const actionAuthenticateFetched = (payload) => ({type: ACTION_AUTHENTICATE_FETCHED, payload});
export const actionAuthenticateFetchFail = () => ({type: ACTION_AUTHENTICATE_FETCH_FAIL});

export const actionUpdateInformation = (payload) => ({type: ACTION_UPDATE_INFORMATION, payload});
export const actionUpdateInformationFetching = () => ({type: ACTION_UPDATE_INFORMATION_FETCHING});
export const actionUpdateInformationFetched  = (payload) => ({type: ACTION_UPDATE_INFORMATION_FETCHED, payload});
export const actionUpdateInformationFetchFail = (payload) => ({type: ACTION_UPDATE_INFORMATION_FETCH_FAIL, payload});

export const actionFetchingReqLoginByGoogle = () => ({type: ACTION_FETCHING_REQUEST_LOGIN_BY_GOOGLE});
export const actionFetchedReqLoginByGoogle = (payload) => ({type: ACTION_FETCHED_REQUEST_LOGIN_BY_GOOGLE, payload});
export const actionFetchFailReqLoginByGoogle = () => ({type: ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_GOOGLE});

export const actionFetchingReqLoginByFacebook = () => ({type: ACTION_FETCHING_REQUEST_LOGIN_BY_FACEBOOK});
export const actionFetchedReqLoginByFacebook = (payload) => ({type: ACTION_FETCHED_REQUEST_LOGIN_BY_FACEBOOK, payload});
export const actionFetchFailReqLoginByFacebook = () => ({type: ACTION_FETCH_FAIL_REQUEST_LOGIN_BY_FACEBOOK});
