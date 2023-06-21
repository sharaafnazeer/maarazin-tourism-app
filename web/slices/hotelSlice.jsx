import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    getAllCategoriesApi,
    getAllHotelsApi,
    getMostPopularCategoriesApi,
    postHotelApi,
    getOneHotelApi,
    updateOneHotelApi,
    updateHotelRulesApi,
    updateHotelLocationApi,
    getAllFacilitiesApi,
    getAllAddonsApi,
    getAllHotelRoomsApi, 
    getAllSiteHotelsApi,
    deleteOneHotelApi,
} from "../pages/api/hotelsApi";

const initialState = {
    isLoading: false,
    hotels: [],
    categories: [],
    selectedHotel: null,
    mostPopularFacilities: [],
    allFacilities: [],
    allAddons: [],
    selectedHotelRooms: [],
    siteHotelData: {
        records: [],
        page: 1,
        size: 12,
    },
};

export const saveHotel = createAsyncThunk(
    "hotel/saveHotel",
    async (hotel, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await postHotelApi(hotel);
        return response.data;
    }
);

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

export const getAllSiteHotels = createAsyncThunk(
    "hotel/getAllSiteHotels",
    async (params, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllSiteHotelsApi(params); //returrn get response from the API
        thunkAPI.dispatch(updateSiteHotels(response.data)); //passing the response to the reducer function including the response
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

export const getOneHotelRooms = createAsyncThunk(
    "hotel/getOneHotelRooms",
    async (hotelId, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllHotelRoomsApi(hotelId);
        thunkAPI.dispatch(updateSelectedHotelRoom(response.data));
        return response.data;
    }
)
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

export const getAllFacilities = createAsyncThunk(
    'hotel/getAllFacilities',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllFacilitiesApi();
        thunkAPI.dispatch(getFacilities(response.data));
        return response.data;
    }
);

export const getAllAddons = createAsyncThunk(
    'hotel/getAllAddons',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await getAllAddonsApi();
        thunkAPI.dispatch(getAddons(response.data));
        return response.data;
    }
)


export const updateOneHotel = createAsyncThunk(
    "hotel/updateOneHotel",
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await updateOneHotelApi(data);
        thunkAPI.dispatch(updateSelectedHotel(response.data.record));
        return response.data;
    }
);


export const updateHotelRule = createAsyncThunk(
    "hotel/updateHotelRule",
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true))
        const response = await updateHotelRulesApi(data);
        thunkAPI.dispatch(updateSelectedHotel(response.data.record));
        return response.data;
    }
)


export const updateHotelLocation = createAsyncThunk(
    "hotel/updateHotelLocation",
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true))
        const response = await updateHotelLocationApi(data);
        thunkAPI.dispatch(updateSelectedHotel(response.data.record));
        return response.data;

    }
)

export const deleteSelectedHotel = createAsyncThunk(
    "room/deleteSelectedHotel",
    async (hotelId, thunkAPI) => {
        thunkAPI.dispatch(setLoading(true));
        const response = await deleteOneHotelApi(hotelId);
        return response.data;
    }
);

export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        updateHotels: (state, action) => {
            state.hotels = action.payload;
            state.isLoading = false;
        },
        updateSiteHotels: (state, action) => {
            state.siteHotelData = action.payload;
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
        updateSelectedHotelRoom: (state, action) => {
            state.selectedHotelRooms = action.payload;
            state.isLoading = false;
        },
        getFacilities: (state, action) => {
            state.allFacilities = action.payload;
            state.isLoading = false;
        },
        getAddons: (state, action) => {
            state.allAddons = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const {
    updateHotels,
    updateSiteHotels,
    updateSelectedHotels,
    updateCategories,
    updateMostPopularFacilities,
    updateSelectedHotel,
    setLoading,
    updateSelectedHotelRules,
    getFacilities,
    getAddons,
    updateSelectedHotelRoom,
} = hotelSlice.actions;

export default hotelSlice.reducer;
