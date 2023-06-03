const mongoose = require('mongoose');
const {RoomSchema} = require("./room.model");
const {LocationSchema} = require("./location.model");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: String,
    content: String,
    bannerImages: [String],
    featuredImages: [String],
    rooms: [RoomSchema],
    location: LocationSchema
}, {timestamps: true});

module.exports = {
    HotelSchema: hotelSchema,
    Hotel: mongoose.model('Hotel', hotelSchema)
};