import Axios from "axios";
import { URL_SERVER_STATIC } from "Shared/Constant";
import { API_REGISTER } from "./constant";

export const apiRegister = (data) => Axios.post(`${URL_SERVER_STATIC}${API_REGISTER}`, data)