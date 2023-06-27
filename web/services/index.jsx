import axios from 'axios';

console.log(process.env.NEXT_APP_API_URL)
export const API = axios.create({
    baseURL: "https://api.rexeholidays.com/api/v1",
    headers: {"Content-type": "application/json"},
});