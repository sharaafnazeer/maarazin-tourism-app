import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteOneRoomApi, getAllRoomsApi, getOneRoomApi, postRoomApi, updateRoomApi} from "../pages/api/roomsApi";

const initialState = {
    isLoading: false,
    rooms: [],
    selectedRoom: null,
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

export const getAllRooms = createAsyncThunk(
    "room/getAllRooms",
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllRoomsApi();
        thunkAPI.dispatch(updateRooms(response.data));
        // console.log(response.data);
        return response.data;
    }
);

export const getSelectedRoom = createAsyncThunk(
    "room/getSelectedRoom",
    async (roomId, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getOneRoomApi(roomId);
        thunkAPI.dispatch(updateSelectedRoom(response.data));
        return response.data;
    }
);

export const deleteSelectedRoom = createAsyncThunk(
    "room/deleteSelectedRoom",
    async (roomId, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await deleteOneRoomApi(roomId);
        return response.data;
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
