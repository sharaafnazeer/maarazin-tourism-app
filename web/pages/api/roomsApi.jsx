import {API} from "."

const config = {
    headers: {'content-type': 'multipart/form-data'}
}

export const postRoomApi = async (formData) => {
    return await API.post(`/admin/rooms`, formData, config);
}

export const updateRoomApi = async (data) => {
    return await API.put(`/admin/rooms/${data.roomId}`, data.formData, config);
}

export const getAllRoomsApi = async () => {
    return await API.get(`/admin/rooms`);
}

export const getOneRoomApi = async (roomId) => {
    return await API.get(`/admin/rooms/${roomId}`);
}

export const deleteOneRoomApi = async (roomId) => {
    return await API.delete(`/admin/rooms/${roomId}`);
}