const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: String,
    description: String,
    bannerImages: [String],
    featuredImages: [String],
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: "Room"
    }],
    location: Schema.Types.Mixed,
    rule: Schema.Types.Mixed,
}, {timestamps: true});

module.exports = {
    HotelSchema: hotelSchema,
    Hotel: mongoose.model('Hotel', hotelSchema)
};