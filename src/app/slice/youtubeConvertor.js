import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nodeApi } from "../utils/axios";

export const downloadYoutubeMp3 = createAsyncThunk("downloadYoutubeMp3", async (url) => {
    window.open(`/convert/youtubeToMp3/${encodeURIComponent(url)}`);
});

export const validateYoutubeUrl = createAsyncThunk("validateYoutubeUrl", async (url) => {
    const response = await nodeApi.post("/convert/validate", { url });
    return response.data;
});

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export const youtubeSlice = createSlice({
    name: "youtubeSlice",
    initialState: INITIAL_STATE,
    reducers: {
    },
    extraReducers: {
        [validateYoutubeUrl.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [validateYoutubeUrl.fulfilled]: (state, action) => {
            state.data = [ action.payload, ...state.data];
            state.loading = false;
            state.error = false;
        },
        [validateYoutubeUrl.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});