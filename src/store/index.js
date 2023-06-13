import { configureStore } from "@reduxjs/toolkit";
import expenserReducer from "./reducer/expenserReducer";

const store = configureStore({
    reducer: {
        expense: expenserReducer
    }
})

export default store;