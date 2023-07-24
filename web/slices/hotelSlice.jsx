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
    deleteOneHotelApi, getOneSiteHotelApi, getSimilarSiteHotelApi, getPopularSiteHotelApi, getAllHotelLocationApi,
} from "../services/hotelsApi";

const initialState = {
    isLoading: false,
    hotels: [],
    categories: [],
    selectedHotel: null,
    mostPopularFacilities: [],
    allFacilities: [],
    allAddons: [],
    selectedHotelRooms: [],
    siteSimilarHotels: [],
    sitePopularHotels: [],
    siteHotelData: {
        records: [],
        page: 1,
        size: 12,
    },
    getAllLocation: [],
};

export const saveHotel = createAsyncThunk(
    "hotel/saveHotel",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await postHotelApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllHotels = createAsyncThunk(
    "hotel/getAllHotels",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllHotelsApi(data); //returrn get response from the API
            thunkAPI.dispatch(updateHotels(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllSiteHotels = createAsyncThunk(
    "hotel/getAllSiteHotels",
    async (params, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllSiteHotelsApi(params); //returrn get response from the API
            thunkAPI.dispatch(updateSiteHotels(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);


export const getOneHotel = createAsyncThunk(
    "hotel/getOneHotel",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getOneHotelApi(data); //returrn get response from the API
            thunkAPI.dispatch(updateSelectedHotel(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getOneSiteHotel = createAsyncThunk(
    "hotel/getOneSiteHotel",
    async (hotelId, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getOneSiteHotelApi(hotelId); //returrn get response from the API
            thunkAPI.dispatch(updateSelectedHotel(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllSimilarSiteHotels = createAsyncThunk(
    "hotel/getAllSimilarSiteHotels",
    async (hotelId, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getSimilarSiteHotelApi(hotelId); //returrn get response from the API
            thunkAPI.dispatch(updateSiteSimilarHotels(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);
export const getAllPopularSiteHotels = createAsyncThunk(
    "hotel/getAllPopularSiteHotels",
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getPopularSiteHotelApi(); //returrn get response from the API
            thunkAPI.dispatch(updateSitePopularHotels(response.data)); //passing the response to the reducer function including the response
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getOneHotelRooms = createAsyncThunk(
    "hotel/getOneHotelRooms",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllHotelRoomsApi(data);
            thunkAPI.dispatch(updateSelectedHotelRoom(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
)
export const getRoomMostP_Facilities = createAsyncThunk(
    "hotel/getRoomMostP_Facilities",
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getMostPopularCategoriesApi();
            thunkAPI.dispatch(updateMostPopularFacilities(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllCategories = createAsyncThunk(
    "hotel/getAllCategories",
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllCategoriesApi();
            thunkAPI.dispatch(updateCategories(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllFacilities = createAsyncThunk(
    'hotel/getAllFacilities',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllFacilitiesApi();
            thunkAPI.dispatch(getFacilities(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);

export const getAllAddons = createAsyncThunk(
    'hotel/getAllAddons',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllAddonsApi();
            thunkAPI.dispatch(getAddons(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
)


export const updateOneHotel = createAsyncThunk(
    "hotel/updateOneHotel",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await updateOneHotelApi(data);
            thunkAPI.dispatch(updateSelectedHotel(response.data.record));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);


export const updateHotelRule = createAsyncThunk(
    "hotel/updateHotelRule",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true))
            const response = await updateHotelRulesApi(data);
            thunkAPI.dispatch(updateSelectedHotel(response.data.record));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
)


export const updateHotelLocation = createAsyncThunk(
    "hotel/updateHotelLocation",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true))
            const response = await updateHotelLocationApi(data);
            thunkAPI.dispatch(updateSelectedHotel(response.data.record));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }

    }
)

export const deleteSelectedHotel = createAsyncThunk(
    "hotel/deleteSelectedHotel",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await deleteOneHotelApi(data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
    }
);


export const getAllHotelLocation = createAsyncThunk(
    "hotel/getAllHotelLocation",
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const response = await getAllHotelLocationApi();
            thunkAPI.dispatch(getHotelLocation(response.data))
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.error);
        }
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
        updateSiteHotels: (state, action) => {
            state.siteHotelData = action.payload;
            state.isLoading = false;
        },
        updateSiteSimilarHotels: (state, action) => {
            state.siteSimilarHotels = action.payload;
            state.isLoading = false;
        },
        updateSitePopularHotels: (state, action) => {
            state.sitePopularHotels = action.payload;
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
        getHotelLocation: (state, action) => {
            state.getAllLocation = action.payload;
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
    updateSiteSimilarHotels,
    updateSitePopularHotels,
    getHotelLocation,
} = hotelSlice.actions;

export default hotelSlice.reducer;
