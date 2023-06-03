const {Hotel} = require("../models/hotel.model");
const {Location} = require("../models/location.model");
const addHotel = async (hotelInfo) => {
    try {
        const hotel = new Hotel({
            name: hotelInfo.name,
            content: hotelInfo.content,
            bannerImages: hotelInfo.bannerImages,
            featuredImages: hotelInfo.featuredImages,
            location: location = new Location({
                name: hotelInfo.location,
                address: hotelInfo.address,
                mapLatitude: hotelInfo.mapLatitude,
                mapLongitude: hotelInfo.mapLongitude,
                mapZoom: hotelInfo.mapZoom,
            })
        })
        return await hotel.save()
    } catch (e) {
        throw e;
    }
}

module.exports = {
    addHotel,
}