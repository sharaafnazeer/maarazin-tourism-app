import axios from 'axios';

export const API = axios.create({
    baseURL: "https://api.rexeholidays.com/api/v1",
    headers: {"Content-type": "application/json"},
});