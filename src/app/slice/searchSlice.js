import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const searchThunk = createAsyncThunk(
    "searchThunk",
    async (searchString, thunkAPI) => {
        try {
            const authState = thunkAPI.getState().auth;
            const payload = {
                search: searchString
            };
            const response = await api.post(`/search`, payload, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authState.data.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const INITIAL_STATE = {
    search: "",
    loading: false,
    error: false,
    data: null
};

export const searchSlice = createSlice({
    name: "search",
    initialState: INITIAL_STATE,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: {
        [searchThunk.pending]: (state) => {
            state.loading = true;
            state.error = false;
            state.data = null;
        },
        [searchThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        },
        [searchThunk.rejected]: (state) => {
            state.loading = false;
            state.error = true;
            state.data = null;
        }
    }
});