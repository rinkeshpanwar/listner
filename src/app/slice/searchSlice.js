import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    search: "",
    loading: false,
};

export const searchSlice = createSlice({
    name: "search",
    initialState: INITIAL_STATE,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
});