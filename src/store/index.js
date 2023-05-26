import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducer/authSlice";
import postSlice from "./reducer/postSlice";

export const store = configureStore({
    reducer: {auth, post: postSlice}
    
})