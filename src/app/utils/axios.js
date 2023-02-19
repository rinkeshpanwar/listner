import axios from "axios";

const baseURL = "/";

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});