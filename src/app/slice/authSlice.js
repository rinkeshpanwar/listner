import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: false
};

export const loginThunk = createAsyncThunk("loginThunk", async (payload, thunkAPI) => {
    try {
        const formData = new FormData();
        formData.append("username", payload.username);
        formData.append("password", payload.password);
        const response = await api.post("/token", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        localStorage.setItem("token", JSON.stringify(response.data));
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const authSlice = createSlice({
    name: "authSilice",
    initialState: INITIAL_STATE,
    reducers: {
        autoLogin: (state, action) => {
            const data = localStorage.getItem("token");
            if (data) {
                state.data = JSON.parse(data);
                state.loading = false;
                state.error = false;
            } else {
                state.data = null;
                state.loading = false;
                state.error = false;
            }
            return state;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.data = null;
            state.loading = false;
            state.error = false;
            return state;
        }
    },
    extraReducers: {
        [loginThunk.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
            state.data = null;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = false;
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
            state.data = null;
        }
    }

});