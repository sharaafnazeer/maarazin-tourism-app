const mongoose = require('mongoose');
const {RoomSchema} = require("./room.model");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: String,
    address: String,
    mapLatitude: Schema.Types.Number,
    mapLongitude: Schema.Types.Number,
    mapZoom: Schema.Types.Number,
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'}, // Reference to Hotel model
}, {timestamps: true});

module.exports = {
    LocationSchema: locationSchema,
    Location: mongoose.model('Location', locationSchema)
};