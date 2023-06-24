import {API} from "./index"
import buildAuthHeader from "../utils/buildAuthHeader";

export const postReservationApi = async (data) => {
    return await API.post(`/reservations`, data);
}

export const getUserApi = async (token) => {
    return await API.get(`/auth/user`, buildAuthHeader(token));
}