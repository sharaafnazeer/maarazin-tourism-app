import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postReservationApi} from "../services/reservationApi";
import {updateSelectedHotel} from "./hotelSlice";

const initialState = {
    isLoading: false,
    reservationRoomDetails: null,
    reservationHotelDetails: null,
    reservationQueryDetails: null,
    reservationCustomerDetails: null,
    reservationConfirmationDetails: null,
};

export const saveReservation = createAsyncThunk(
    "reservation/saveReservation",
    async (room, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await postReservationApi(room);
        thunkAPI.dispatch(updateReservationConfirmationDetails(response.data.record));
        return response.data;
    }
);

export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        updateReservationDetails: (state, action) => {
            state.reservationHotelDetails = action.payload.reservationHotelDetails;
            state.reservationRoomDetails = action.payload.reservationRoomDetails;
            state.reservationQueryDetails = action.payload.reservationQueryDetails;
            state.reservationCustomerDetails = action.payload.reservationCustomerDetails;
            state.isLoading = false;
        },
        updateReservationConfirmationDetails: (state, action) => {
            state.reservationConfirmationDetails = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {updateReservationDetails, updateReservationConfirmationDetails, setLoading} =
    reservationSlice.actions;

export default reservationSlice.reducer;
