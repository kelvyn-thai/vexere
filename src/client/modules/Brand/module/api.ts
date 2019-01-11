import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_GET_BRAND } from "./constants";

export const apiRequestGetBrands = (params) => Axios.get(`${URL_SERVER_STATIC}${API_GET_BRAND}/${params}`,AXIOS_CONFIG)