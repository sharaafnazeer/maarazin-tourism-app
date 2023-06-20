import { API } from "."

const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}


export const postRoomApi = async(formData)=>{
    return await API.post(`/admin/rooms`,formData,config);
}

export const getAllRoomsApi = async()=>{
    return await API.get(`/admin/rooms`);
}

export const getOneRoomApi = async(roomId)=>{
    return await API.get(`/admin/rooms/${roomId}`);
}