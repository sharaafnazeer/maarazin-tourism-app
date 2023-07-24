import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllReservationsApi, getOneReservationApi, postReservationApi, updateReservationActionApi} from "../services/reservationApi";

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
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await postReservationApi(room);
            thunkAPI.dispatch(updateReservationConfirmationDetails(response.data.record));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);


export const getAllReservations = createAsyncThunk(
    "reservation/getAllReservations",
    async(data,thunkAPI)=>{
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllReservationsApi(data);
            thunkAPI.dispatch(updateGetAllReservationDetails(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);


export const getOneReservation = createAsyncThunk(
    "reservation/getOneReservation",
    async(data, thunkAPI)=>{
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getOneReservationApi(data);
            thunkAPI.dispatch(updateSelectedReservation(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
)

export const updateReservationAction = createAsyncThunk(
    "reservation/updateReservationAction",
    async(data, thunkAPI)=>{
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await updateReservationActionApi(data);
            thunkAPI.dispatch(updateSelectedReservation(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
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
