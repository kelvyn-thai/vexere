import { URL_SERVER_STATIC } from 'Shared/Constant';
import Axios from 'axios';
import { API_GET_BUS_DETAILS } from './actions';

export const apiGetBusDetails = (params) => Axios.get(`${URL_SERVER_STATIC}${API_GET_BUS_DETAILS}/${params}`)