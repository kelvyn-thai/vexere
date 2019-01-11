import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";
import { API_PAYMENT_TICKETS_BOOKED } from "./constant";

export const apiPaymentTicketsBooked = (data) => Axios.post(`${URL_SERVER_STATIC}${API_PAYMENT_TICKETS_BOOKED}`, data, AXIOS_CONFIG);