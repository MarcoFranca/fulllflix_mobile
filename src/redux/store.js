import { configureStore } from "@reduxjs/toolkit"
import movieDataReducer from "./slice"
import { getDefaultMiddleware } from "@reduxjs/toolkit"

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
export const store = configureStore({
    reducer: {
        movieData: movieDataReducer,
    },
    devTools: true,
    middleware: customizedMiddleware
})