import {API} from "./index"
import {buildAuthHeader} from "../utils/buildAuthHeader";

export const postReservationApi = async (data) => {
    return await API.post(`/reservations`, data);
}

export const getAllReservationsApi = async ({token}) => {
    return await API.get(`/admin/reservations`, buildAuthHeader(token));
}

export const getOneReservationApi = async ({reserveId, token}) => {
    return await API.get(`/admin/reservations/${reserveId}`, buildAuthHeader(token));
}

export const updateReservationActionApi = async (data) => {
    return await API.put(`/admin/reservations/${data.reservationId}/status`, data, buildAuthHeader(data.token));
}