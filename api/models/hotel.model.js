const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: String,
    description: String,
    rating: Number,
    bannerImages: [String],
    featuredImages: [String],
    hotelGroup: {type: Schema.Types.ObjectId, ref: 'HotelGroup'}, // Reference to HotelGroup model
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: "Room"
    }],
    popularFacilities: [
        {
            type: Number,
            ref: 'PopularFacility'
        }
    ],
    location: Schema.Types.Mixed,
    nearBy: Schema.Types.Mixed,
    rule: Schema.Types.Mixed,
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
}, {timestamps: true});

module.exports = {
    HotelSchema: hotelSchema,
    Hotel: mongoose.model('Hotel', hotelSchema)
};