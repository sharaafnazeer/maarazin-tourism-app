import {API} from "."

const config = {
    headers: {'content-type': 'multipart/form-data'}
}


export const postHotelApi = async (formdata) => {
    return await API.post('/admin/hotels', formdata, config);
}
export const getAllHotelsApi = async () => {
    return await API.get('/admin/hotels');
}
export const getAllSiteHotelsApi = async (payload) => {

    const params = new URLSearchParams();

    if (payload?.page) {
        params.append('page', payload.page);
    }
    if (payload?.size) {
        params.append('size', payload.size);
    }
    if (payload?.rating) {
        params.append('rating', payload.rating);
    }
    if (payload?.from) {
        params.append('from', payload.from);
    }
    if (payload?.to) {
        params.append('to', payload.to);
    }
    if (payload?.adults) {
        params.append('adults', payload.adults);
    }
    if (payload?.children) {
        params.append('children', payload.children);
    }
    if (payload?.rooms) {
        params.append('rooms', payload.rooms);
    }
    if (payload?.facilities) {
        params.append('facilities', payload.facilities);
    }
    return await API.get('/hotels', {params});
}

export const getOneHotelApi = async (hotelId) => {
    return await API.get(`/admin/hotels/${hotelId}`);
}

export const getAllCategoriesApi = async () => {
    return await API.get('/admin/hotel-groups');
}

export const getMostPopularCategoriesApi = async () => {
    return await API.get('/admin/features/popular-facilities');
}

export const getAllFacilitiesApi = async () => {
    return await API.get(`/admin/features/facilities`);
}

export const getAllAddonsApi = async () => {
    return await API.get(`/admin/features/addons`);
}

export const getAllHotelRoomsApi = async (hotelId) => {
    return await API.get(`/admin/hotels/${hotelId}/rooms`);
}

export const updateOneHotelApi = async (data) => {
    return await API.put(`/admin/hotels/${data.hotelId}`, data.formData, config)
}

export const updateHotelRulesApi = async (data) => {
    return await API.put(`/admin/hotels/${data.hotelId}`, data.formData)
}

export const updateHotelLocationApi = async (data) => {
    return await API.put(`/admin/hotels/${data.hotelId}`, data.formData)
}

export const postRoomApi = async (data) => {
    return await API.post(`/admin/rooms/${data.hotelId}`, data.formData, config);
}

export const getRoomsApi = async (data) => {
    return await API.get(`/admin/rooms`);
}