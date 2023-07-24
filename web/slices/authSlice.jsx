import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {registerApi, registerConfirmApi} from "../services/authApi";

const initialState = {
    registerData: null
};

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await registerApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const registerUserConfirm = createAsyncThunk(
    "auth/registerUserConfirm",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await registerConfirmApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {setLoading} =
    authSlice.actions;

export default authSlice.reducer;
