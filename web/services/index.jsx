import axios from 'axios';

console.log(process.env.NEXT_APP_API_URL)
export const API = axios.create({
<<<<<<< HEAD
    // baseURL: process.env.NEXT_APP_API_URL || "http://localhost:5000/api/v1",
    baseURL: "http://localhost:5000/api/v1",
=======
    baseURL: "https://api.rexeholidays.com/api/v1",
>>>>>>> b778cedb1f538019e48bba1ad8a8387cdb71df86
    headers: {"Content-type": "application/json"},
});