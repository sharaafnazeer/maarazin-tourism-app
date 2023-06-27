import {API} from "./index"
import {buildAuthHeader, buildAuthMultipartHeader} from "../utils/buildAuthHeader";

export const postRoomApi = async ({formData, token}) => {
    return await API.post(`/admin/rooms`, formData, buildAuthMultipartHeader(token));
}

export const updateRoomApi = async ({roomId, formData, token}) => {
    return await API.put(`/admin/rooms/${roomId}`, formData, buildAuthMultipartHeader(token));
}

export const getAllRoomsApi = async ({token}) => {
    return await API.get(`/admin/rooms`, buildAuthHeader(token));
}

export const getOneRoomApi = async ({roomId, token}) => {
    return await API.get(`/admin/rooms/${roomId}`, buildAuthHeader(token));
}

export const deleteOneRoomApi = async ({roomId, token}) => {
    return await API.delete(`/admin/rooms/${roomId}`, buildAuthHeader(token));
}