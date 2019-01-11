import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_FIND_BUS } from "./constant";

export const apiFindBus =  (pararms) => Axios.get(`${URL_SERVER_STATIC}${API_FIND_BUS}/${pararms}`, AXIOS_CONFIG)