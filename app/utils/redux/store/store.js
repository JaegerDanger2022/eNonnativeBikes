import { configureStore } from "@reduxjs/toolkit";
import { CurrentUserSlice } from "../features/currentUserSlice";

export const store = configureStore({
    reducer:{
        auth: CurrentUserSlice.reducer
    }
})