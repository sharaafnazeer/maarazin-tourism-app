const {Hotel} = require("../models/hotel.model");
const {RecordNotFound} = require("../exceptions/errors");
const {HotelGroup} = require("../models/hotel-group.model");
const {PopularFacility} = require("../models/most-popular-facility.model");
const {getRoomsByHotelIdWithDetails} = require("./room.service");
const addHotel = async (hotelInfo) => {
    try {
        if (hotelInfo.hotelGroupId) {
            let hotelGroup = await HotelGroup.findById(hotelInfo.hotelGroupId);
            if (!hotelGroup) {
                return new RecordNotFound("Hotel group not found", "Hotel group with given ID not found");
            }
        }
        const hotel = new Hotel({
            name: hotelInfo.name,
            description: hotelInfo.description,
            bannerImages: hotelInfo.bannerImages,
            featuredImages: hotelInfo.featuredImages,
            hotelGroup: hotelInfo.hotelGroupId ? hotelInfo.hotelGroupId : null,
            rating: parseInt(hotelInfo.rating),
            rule: {
                minAdvance: 0.00,
                minStay: 1,
                checkIn: '',
                checkOut: ''
            }
        })

        if (hotelInfo.popularFacilities) {
            const facilities = JSON.parse(hotelInfo.popularFacilities)
            if (Array.isArray(facilities)) {

                for (const facility of facilities) {
                    const popular = await PopularFacility.findById(facility);
                    if (!popular) {
                        return new RecordNotFound("Popular facility not found", "Popular facility with given ID not found");
                    }
                }
                hotel.popularFacilities = facilities
            }
        }

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
        if (hotelInfo.hotelGroupId) {
            let hotelGroup = await HotelGroup.findById(hotelInfo.hotelGroupId);
            if (!hotelGroup) {
                return new RecordNotFound("Hotel group not found", "Hotel group with given ID not found");
            }
        }
        hotel.name = hotelInfo.name || hotel.name;
        hotel.description = hotelInfo.description || hotel.description;
        hotel.hotelGroup = hotelInfo.hotelGroupId || hotel.hotelGroup;
        hotel.rating = parseInt(hotelInfo.rating) || parseInt(hotel.rating);

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

        if (hotelInfo.popularFacilities) {
            const facilities = JSON.parse(hotelInfo.popularFacilities)
            if (Array.isArray(facilities)) {

                for (const facility of facilities) {
                    const popular = await PopularFacility.findById(facility);
                    if (!popular) {
                        return new RecordNotFound("Popular facility not found", "Popular facility with given ID not found");
                    }
                }
                hotel.popularFacilities = facilities
            }
        }

        hotel.rule = {
            ...hotel.rule,
            checkIn: hotelInfo.checkIn || hotel.rule?.checkIn || '',
            checkOut: hotelInfo.checkOut || hotel.rule?.checkOut || '',
            minAdvance: parseFloat(hotelInfo.minAdvance) || parseFloat(hotel.rule?.minAdvance) || 0.00,
            minStay: parseInt(hotelInfo.minStay) || parseInt(hotel.rule?.minStay) || 1,

        }

        if (hotelInfo.location) {
            hotel.location = JSON.parse(hotelInfo.location);
        }

        if (hotelInfo.nearBy) {
            hotel.nearBy = JSON.parse(hotelInfo.nearBy);
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

const getHotelByIdWithDetails = async (hotelId) => {
    try {
        let hotel = await Hotel.findById(hotelId).populate('popularFacilities').populate('hotelGroup');
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }

        hotel = hotel.toObject();
        const rooms = await getRoomsByHotelIdWithDetails(hotelId);
        hotel.minimumRoomPrice = rooms.reduce((minPrice, currentRoom) => {
            return Math.min(minPrice, currentRoom.roomPrice);
        }, Infinity);
        hotel.rooms = rooms;
        return hotel;
    } catch (e) {
        throw e;
    }
}

const getSimilarHotelsById = async (hotelId) => {
    try {
        let hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }

        return await Hotel.find({
            $and: [
                {$or: [{hotelGroup: hotel.hotelGroup}, {rating: {$gte: hotel.rating}}]},
                {_id: {$nin: [hotelId]}}
            ]
        }).limit(4);

    } catch (e) {
        throw e;
    }
}

module.exports = {
    addHotel,
    getHotels,
    getHotelById,
    updateHotel,
    getHotelByIdWithDetails,
    getSimilarHotelsById
}