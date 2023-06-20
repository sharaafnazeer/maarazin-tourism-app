import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import hotelSlice from "../slices/hotelSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        hotel:hotelSlice
    },
});
