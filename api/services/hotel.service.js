const {Hotel} = require("../models/hotel.model");
const {RecordNotFound} = require("../exceptions/errors");
const addHotel = async (hotelInfo) => {
    try {
        const hotel = new Hotel({
            name: hotelInfo.name,
            description: hotelInfo.description,
            bannerImages: hotelInfo.bannerImages,
            featuredImages: hotelInfo.featuredImages,
            location: {
                city: hotelInfo.city,
                state: hotelInfo.state,
                country: hotelInfo.country,
                mapLatitude: hotelInfo.mapLatitude,
                mapLongitude: hotelInfo.mapLongitude,
                mapZoom: hotelInfo.mapZoom,
            },
            rule: {
                minAdvance: 0.00,
                minStay: 1,
                checkIn: '',
                checkOut: ''
            }
        })
        return await hotel.save()
    } catch (e) {
        throw e;
    }
}

const updateHotel = async (hotelId, hotelInfo) => {
    try {
        let hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }
        hotel.name = hotelInfo.name || hotel.name;
        hotel.description = hotelInfo.description || hotel.description;

        let existingBannerImages = []
        let bannerImages = []
        if (hotelInfo.existingBannerImages)
            existingBannerImages = JSON.parse(hotelInfo.existingBannerImages);

        if (hotelInfo.bannerImages)
            bannerImages = hotelInfo.bannerImages;

        let existingFeatureImages = []
        let featuredImages = []
        if (hotelInfo.existingFeatureImages)
            existingFeatureImages = JSON.parse(hotelInfo.existingFeatureImages);
        if (hotelInfo.featuredImages)
            featuredImages = hotelInfo.featuredImages;

        if (bannerImages.length || existingBannerImages.length)
            hotel.bannerImages = [...bannerImages, ...existingBannerImages];

        if (featuredImages.length || existingFeatureImages.length)
            hotel.featuredImages = [...featuredImages, ...existingFeatureImages];

        hotel.location = {
            ...hotel.location,
            city: hotelInfo.city || hotel.location.city,
            state: hotelInfo.state || hotel.location.state,
            country: hotelInfo.country || hotel.location.country,
            mapLatitude: parseFloat(hotelInfo.mapLatitude) || parseFloat(hotel.location.mapLatitude),
            mapLongitude: parseFloat(hotelInfo.mapLongitude) || parseFloat(hotel.location.mapLongitude),
        }

        hotel.rule = {
            ...hotel.rule,
            checkIn: hotelInfo.checkIn || hotel.rule?.checkIn || '',
            checkOut: hotelInfo.checkOut || hotel.rule?.checkOut || '',
            minAdvance: parseFloat(hotelInfo.minAdvance) || parseFloat(hotel.rule?.minAdvance) || 0.00,
            minStay: parseInt(hotelInfo.minStay) || parseInt(hotel.rule?.minStay) || 1,

        }

        hotel.save();
        return hotel
    } catch (e) {
        throw e;
    }
}

const getHotels = async () => {
    try {
        return await Hotel.find();
    } catch (e) {
        throw e;
    }
}

const getHotelById = async (hotelId) => {
    try {
        const hotel = await Hotel.findById(hotelId).populate();
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }
        return hotel;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    addHotel,
    getHotels,
    getHotelById,
    updateHotel,
}