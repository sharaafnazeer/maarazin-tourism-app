const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    slug: String,
    benefits: String,
    roomImages: [String],
    sleeps: Schema.Types.Mixed, // Object field
    amenities: Schema.Types.Mixed, // Object field
    roomPrice: Number,
    roomArea: String,
    facilities: [{type: Schema.Types.ObjectId, ref: 'Facility'}],
    addons: [
        {
            addon: {type: Schema.Types.ObjectId, ref: 'Addon'},
            amount: {type: Number, default: 0.0},
        }
    ],
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'}, // Reference to Hotel model
}, {timestamps: true});

module.exports = {
    RoomSchema: roomSchema,
    Room: mongoose.model('Room', roomSchema)
};