const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const hotelGroupSchema = new Schema({
    name: String,
}, {timestamps: true});

module.exports = {
    HotelGroupSchema: hotelGroupSchema,
    HotelGroup: mongoose.model('HotelGroup', hotelGroupSchema)
};