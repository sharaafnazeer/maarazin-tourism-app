import {API} from "./index"
import {buildAuthHeader} from "../utils/buildAuthHeader";

export const loginApi = async (data) => {
    return await API.post(`/auth/login`, data);
}

export const getUserApi = async (token) => {
    return await API.get(`/auth/user`, buildAuthHeader(token));
}