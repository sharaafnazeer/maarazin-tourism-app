import {API} from "./index"
import {buildAuthHeader, buildAuthMultipartHeader} from "../utils/buildAuthHeader";

export const postHotelApi = async ({formData, token}) => {
    return await API.post('/admin/hotels', formData, buildAuthMultipartHeader(token));
}
export const getAllHotelsApi = async ({token}) => {
    return await API.get('/admin/hotels', buildAuthHeader(token));
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
    if (payload?.location) {
        params.append('location', payload.location);
    }
    if (payload?.facilities) {
        params.append('facilities', payload.facilities);
    }
    if (payload?.minPrice) {
        params.append('minPrice', payload.minPrice);
    }
    if (payload?.maxPrice) {
        params.append('maxPrice', payload.maxPrice);
    }
    return await API.get('/hotels', {params});
}

export const getOneHotelApi = async ({hotelId, token}) => {
    return await API.get(`/admin/hotels/${hotelId}`, buildAuthHeader(token));
}

export const getOneSiteHotelApi = async (hotelId) => {
    return await API.get(`/hotels/${hotelId}`);
}

export const getSimilarSiteHotelApi = async (hotelId) => {
    return await API.get(`/hotels/${hotelId}/similar`);
}
export const getPopularSiteHotelApi = async () => {
    return await API.get(`/hotels/popular/all`);
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

export const getAllHotelRoomsApi = async ({hotelId, token}) => {
    return await API.get(`/admin/hotels/${hotelId}/rooms`, buildAuthHeader(token));
}

export const updateOneHotelApi = async ({hotelId, formData, token}) => {
    return await API.put(`/admin/hotels/${hotelId}`, formData, buildAuthMultipartHeader(token));
}

export const updateHotelRulesApi = async ({hotelId, formData, token}) => {
    return await API.put(`/admin/hotels/${hotelId}`, formData, buildAuthHeader(token))
}

export const updateHotelLocationApi = async ({hotelId, formData, token}) => {
    return await API.put(`/admin/hotels/${hotelId}`, formData, buildAuthHeader(token))
}

export const deleteOneHotelApi = async ({hotelId, token}) => {
    return await API.delete(`/admin/hotels/${hotelId}`, buildAuthHeader(token));
}

export const getAllHotelLocationApi = async () => {
    return await API.get(`/locations/cities`);
}