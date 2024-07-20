import axios from "axios";

const baseURL = "http://localhost:8000";

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const nodeApi = axios.create({
    baseURL: window.location.hostname === "localhost" ? "http://localhost:8000" :"",
    headers: {
        "Content-Type": "application/json"
    }
});