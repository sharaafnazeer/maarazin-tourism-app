import axios from 'axios';

export const API = axios.create({
    // baseURL: process.env.NEXT_APP_API_URL || "http://localhost:5000/api/v1",
    baseURL: "http://localhost:5000/api/v1",
    headers: {"Content-type": "application/json"},
});