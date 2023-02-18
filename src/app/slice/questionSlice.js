import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const upvoteThunk = createAsyncThunk("upvoteThunk", async (questionKey, thunkAPI) => {
    try {
        const authState  = thunkAPI.getState().auth;
        const response = await api.put(`/question/upvote/${questionKey}`, {} , {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${authState.data.access_token}`
            }
        });
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const downvoteThunk = createAsyncThunk("downvoteThunk", async (questionKey, thunkAPI) => {
    try {
        const authState  = thunkAPI.getState().auth;
        const response = await api.put(`/question/downvote/${questionKey}`, {} , {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${authState.data.access_token}`
            }
        });
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const createQuestionThunk = createAsyncThunk("createQuestionThunk", async (payload, thunkAPI) => {
    try {
        const authState  = thunkAPI.getState().auth;
        const response = await api.post("/question", payload , {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${authState.data.access_token}`
            }
        });
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getQuestionByKeyThunk = createAsyncThunk("getQuestionByKeyThunk", async (questionKey, thunkAPI) => {
    try {
        const authState  = thunkAPI.getState().auth;
        const response = await api.get(`/question/${questionKey}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${authState.data.access_token}`
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: false
};

export const questionSlice = createSlice({
    name: "questionSlice",
    initialState: INITIAL_STATE,
    reducers: {
    },
});
