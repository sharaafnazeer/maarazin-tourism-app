import axios from 'axios';

export const API = axios.create({
    // baseURL: "http://localhost:5000/api/v1",
    baseURL: "https://api.rexeholidays.com/api/v1",
    headers: {"Content-type": "application/json"},
});