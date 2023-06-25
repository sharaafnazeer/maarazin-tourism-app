import {API} from "./index"
import buildAuthHeader from "../utils/buildAuthHeader";

export const postReservationApi = async (data) => {
    return await API.post(`/reservations`, data);
}

export const getUserApi = async (token) => {
    return await API.get(`/auth/user`, buildAuthHeader(token));
}

export const getAllReservationsApi = async()=>{
    return await API.get(`/admin/reservations`);
}

export const  getOneReservationApi = async (reserveId)=>{
    return await API.get(`/admin/reservations/${reserveId}`);
}

export const updateReservationActionApi = async (data)=>{
    return await API.put(`/admin/reservations/${data.reservationId}/status`,data);
}