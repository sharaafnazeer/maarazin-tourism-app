import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteOneRoomApi, getAllRoomsApi, getOneRoomApi, postRoomApi, updateRoomApi} from "../pages/api/roomsApi";

const initialState = {
    isLoading: false,
    reservationRoomDetails: [],
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
        updateReservationRoomDetails: (state, action) => {
            state.reservationRoomDetails = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {updateReservationRoomDetails, setLoading} =
    reservationSlice.actions;

export default reservationSlice.reducer;
