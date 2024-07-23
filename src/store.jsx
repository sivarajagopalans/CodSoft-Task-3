import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './slices/blogSlices'
export const store = configureStore({
    reducer: {
        blogs: blogReducer
    }
})