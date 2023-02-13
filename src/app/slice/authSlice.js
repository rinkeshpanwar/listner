import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: false
};

export const authSlice = createSlice({
    name: "authSilice",
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.data = action.payload;
        },
        logout: (state, action) => {
            state.data = null;
        }
    }
});