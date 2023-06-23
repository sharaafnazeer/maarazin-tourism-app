import axios from 'axios';

export const API = axios.create({
    baseURL:"http://146.190.177.204:5000/api/v1",
    headers:{"Content-type":"application/json"},
});