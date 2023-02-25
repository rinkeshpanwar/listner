import axios from "axios";

const baseURL = "https://listner-1-c8872277.deta.app/";

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const nodeApi = axios.create({
    baseURL: window.location.hostname === "localhost" ? "http://localhost:4000" :"",
    headers: {
        "Content-Type": "application/json"
    }
});