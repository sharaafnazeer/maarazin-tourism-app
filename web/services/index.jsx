import axios from 'axios';

console.log(process.env.NEXT_APP_API_URL)
export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {"Content-type": "application/json"},
});