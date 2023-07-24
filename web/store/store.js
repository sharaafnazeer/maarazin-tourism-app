import {configureStore} from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import hotelSlice from "../slices/hotelSlice";
import roomSlice from "../slices/roomSlice";
import {createWrapper} from "next-redux-wrapper";
import reservationSlice from "../slices/reservationSlice";
import authSlice from "../slices/authSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            hero: findPlaceSlice,
            hotel: hotelSlice,
            room: roomSlice,
            reservation: reservationSlice,
            auth: authSlice,
        },
    });

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: false});
