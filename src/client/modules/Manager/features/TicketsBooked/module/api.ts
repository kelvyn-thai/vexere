import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_DESTROY_TICKET_BOOKED } from "./constant";

export const apiDestroyTicketBooked = (data) => Axios.post(`${URL_SERVER_STATIC}${API_DESTROY_TICKET_BOOKED}`, data, AXIOS_CONFIG);