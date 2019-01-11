import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { URI_API_GET_LIST_CITY } from "./constant";

export const apiGetListCity = () => Axios.get(URL_SERVER_STATIC + URI_API_GET_LIST_CITY, AXIOS_CONFIG);
