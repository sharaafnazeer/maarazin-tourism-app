import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteOneRoomApi, getAllRoomsApi, getOneRoomApi, postRoomApi, updateRoomApi} from "../pages/api/roomsApi";

const initialState = {
    isLoading: false,
    reservationRoomDetails: null,
    reservationHotelDetails: null,
    reservationQueryDetails: null,
    reservationCustomerDetails: null,
};

export const saveRoom = createAsyncThunk(
    "hotel/saveRoom",
    async (room, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await postRoomApi(room);
        return response.data;
    }
);

export const updateRoom = createAsyncThunk(
    "hotel/updateRoom",
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await updateRoomApi(data);
        return response.data;
    }
);

export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        updateReservationDetails: (state, action) => {
            console.log(action.payload);
            state.reservationHotelDetails = action.payload.reservationHotelDetails;
            state.reservationRoomDetails = action.payload.reservationRoomDetails;
            state.reservationQueryDetails = action.payload.reservationQueryDetails;
            state.reservationCustomerDetails = action.payload.reservationCustomerDetails;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {updateReservationDetails, setLoading} =
    reservationSlice.actions;

export default reservationSlice.reducer;
