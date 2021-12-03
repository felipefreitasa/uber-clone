import { configureStore } from "@reduxjs/toolkit"
import navReducer from './slices/navSlices'

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
})