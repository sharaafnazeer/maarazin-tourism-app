import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteOneRoomApi, getAllRoomsApi, getOneRoomApi, postRoomApi, updateRoomApi} from "../services/roomsApi";

const initialState = {
    isLoading: false,
    rooms: [],
    selectedRoom: null,
};

export const saveRoom = createAsyncThunk(
    "hotel/saveRoom",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await postRoomApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const updateRoom = createAsyncThunk(
    "hotel/updateRoom",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await updateRoomApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllRooms = createAsyncThunk(
    "room/getAllRooms",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllRoomsApi(data);
            thunkAPI.dispatch(updateRooms(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getSelectedRoom = createAsyncThunk(
    "room/getSelectedRoom",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getOneRoomApi(data);
            thunkAPI.dispatch(updateSelectedRoom(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const deleteSelectedRoom = createAsyncThunk(
    "room/deleteSelectedRoom",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await deleteOneRoomApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        updateRooms: (state, action) => {
            state.rooms = action.payload;
            state.isLoading = false;
        },
        updateSelectedRoom: (state, action) => {
            state.selectedRoom = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {updateRooms, updateSelectedRoom, setLoading} =
    roomSlice.actions;

export default roomSlice.reducer;
