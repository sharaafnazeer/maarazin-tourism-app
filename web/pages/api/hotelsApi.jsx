import { API } from "."

const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}



export const getAllHotelsApi = async()=>{
    return await API.get('/admin/hotels');
}

export const getOneHotelApi = async(hotelId)=>{
    return await API.get(`/admin/hotels/${hotelId}`);
}

export const updateOneHotelApi = async(hotelId)=>{
    return await API.put(`/admin/hotels/${hotelId}`)
}


export const updateHotelRulesApi = async(hotelId,rules)=>{
    return await API.put(`/admin/hotels/${hotelId}`,rules)
}


export const postHotelApi = async(formdata)=>{
    return await API.post('/admin/hotels',formdata,config);
}

export const getAllCategoriesApi = async()=>{
    return await API.get('/admin/hotel-groups');
}

export const getMostPopularCategoriesApi = async()=>{
    return await API.get('/admin/features/popular-facilities');
}