import axios from "axios";

const baseURL = "https://listner-5-c8872277.deta.app/";

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});