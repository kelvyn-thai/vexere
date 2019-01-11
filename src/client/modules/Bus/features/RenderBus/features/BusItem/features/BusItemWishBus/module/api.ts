import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_WISH_BUS } from "./constant";

export const apiWishBus = (data) => Axios.post(`${URL_SERVER_STATIC}${API_WISH_BUS}`, data, AXIOS_CONFIG);