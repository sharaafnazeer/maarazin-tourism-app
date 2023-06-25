import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllReservationsApi, getOneReservationApi, postReservationApi, updateReservationActionApi} from "../services/reservationApi";
import {updateSelectedHotel} from "./hotelSlice";

const initialState = {
    isLoading: false,
    reservationDetails: {
        reservationRoomDetails: null,
        reservationHotelDetails: null,
        reservationQueryDetails: null,
        reservationCustomerDetails: null,
    },
    reservationConfirmationDetails: null,
    reserversions:[],
    selectedReservation:null,
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


export const getAllReservations = createAsyncThunk(
    "reservation/getAllReservations",
    async(_,thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllReservationsApi();
        thunkAPI.dispatch(updateGetAllReservationDetails(response.data));
        return response.data;
    }
);


export const getOneReservation = createAsyncThunk(
    "reservation/getOneReservation",
    async(reserveId, thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true));
        const response = await getOneReservationApi(reserveId);
        thunkAPI.dispatch(updateSelectedReservation(response.data));
        return response.data;
    }
)

export const updateReservationAction = createAsyncThunk(
    "reservation/updateReservationAction",
    async(reserveId, thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true));
        const response = await updateReservationActionApi(reserveId);
        thunkAPI.dispatch(updateSelectedReservation(response.data));
        return response.data;
    }
)

export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        updateReservationDetails: (state, action) => {
            state.reservationDetails = action.payload.reservationDetails;
            state.isLoading = false;
        },
        updateReservationConfirmationDetails: (state, action) => {
            state.reservationConfirmationDetails = action.payload;
            state.isLoading = false;
        },
        updateGetAllReservationDetails:(state,action)=>{
            state.reserversions = action.payload;
            state.isLoading = false;
        },
        updateSelectedReservation:(state,action)=>{
            state.selectedReservation = action.payload;
            state.isLoading= false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {updateReservationDetails, updateReservationConfirmationDetails,updateSelectedReservation,updateGetAllReservationDetails, setLoading} =
    reservationSlice.actions;

export default reservationSlice.reducer;
