import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {data : []},
    reducers: {
        postLike (state, action) {
            state.data = action.payload;
        },
    }
})

export const {postLike} = postSlice.actions

export default postSlice.reducer