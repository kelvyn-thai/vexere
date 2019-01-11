import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_LOGIN, API_AUTHENTICATE_USER, API_LOGOUT, API_UPDATE_INFORMATION } from "./constant";

export const apiLogin = (data) => Axios.post(`${URL_SERVER_STATIC}${API_LOGIN}`, data, AXIOS_CONFIG)
export const apiLogout = () => Axios.get(`${URL_SERVER_STATIC}${API_LOGOUT}`, AXIOS_CONFIG);
export const apiRequestAuthenticate = () => Axios.get(URL_SERVER_STATIC + API_AUTHENTICATE_USER, AXIOS_CONFIG);
export const apiUpdateInformation = (data) => Axios.post(`${URL_SERVER_STATIC}${API_UPDATE_INFORMATION}`,data, AXIOS_CONFIG);
