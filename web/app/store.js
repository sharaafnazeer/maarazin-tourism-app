import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import hotelSlice from "../slices/hotelSlice";
import roomSlice from "../slices/roomSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        hotel:hotelSlice,
        room: roomSlice,
    },
});
