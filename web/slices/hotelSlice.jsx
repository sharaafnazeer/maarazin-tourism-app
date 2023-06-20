import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCategoriesApi,
  getAllHotelsApi,
  getMostPopularCategoriesApi,
  postHotelApi,
  getOneHotelApi,
  getUpdateHotelistByIdApi,
  updateOneHotelApi,
  updateHotelRulesApi,
} from "../pages/api/hotelsApi";

const initialState = {
  isLoading: false,
  hotels: [],
  categories: [],
  selectedHotel: null,
  mostPopularFacilities: [],
  rules:[],
};

export const getAllHotels = createAsyncThunk(
  "hotel/getAllHotels",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await getAllHotelsApi(); //returrn get response from the API
    thunkAPI.dispatch(updateHotels(response.data)); //passing the response to the reducer function including the response
    // console.log(response.data);
    return response.data;
  }
);

export const getOneHotel = createAsyncThunk(
  "hotel/getOneHotel",
  async (hotelId, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await getOneHotelApi(hotelId); //returrn get response from the API
    thunkAPI.dispatch(updateSelectedHotel(response.data)); //passing the response to the reducer function including the response
    // console.log(response.data);
    return response.data;
  }
);

export const updateOneHotel = createAsyncThunk(
  "hotel/updateOneHotel",
  async (hotelId, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await updateOneHotelApi(hotelId);
    thunkAPI.dispatch(updateSelectedHotel(response.data));
    return response.data;
  }
);

export const getRoomMostP_Facilities = createAsyncThunk(
  "hotel/getRoomMostP_Facilities",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await getMostPopularCategoriesApi();
    thunkAPI.dispatch(updateMostPopularFacilities(response.data));
    return response.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "hotel/getAllCategories",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await getAllCategoriesApi();
    thunkAPI.dispatch(updateCategories(response.data));
    return response.data;
  }
);

export const saveHotel = createAsyncThunk(
  "hotel/saveHotel",
  async (hotel, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const response = await postHotelApi(hotel);
    return response.data;
  }
);

export const updateHotelRules = createAsyncThunk(
    "hotel/updateHotelRules",
    async(hotelId,thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true))
        const response = await updateHotelRulesApi(hotelId,rules);
        // thunkAPI.dispatch(updateSelectedHotel(response.data));
        return response.data;
    }
)

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    updateHotels: (state, action) => {
      state.hotels = action.payload;
      state.isLoading = false;
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },

    updateMostPopularFacilities: (state, action) => {
      state.mostPopularFacilities = action.payload;
      state.isLoading = false;
    },
    updateSelectedHotel: (state, action) => {
      state.selectedHotel = action.payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {
  updateHotels,
  updateSelectedHotels,
  updateCategories,
  updateMostPopularFacilities,
  updateSelectedHotel,
  setLoading,
} = hotelSlice.actions;

export default hotelSlice.reducer;
