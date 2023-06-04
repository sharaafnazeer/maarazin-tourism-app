const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    benefits: String,
    roomImages: [String],
    sleeps: Schema.Types.Mixed, // Object field
    roomPrice: Number,
    roomArea: String,
    facilities: [
        {
            facility: {type: Schema.Types.ObjectId, ref: 'Facility'},
            isPopular: {type: Boolean, default: false},
            haveExtraFee: {type: Boolean, default: false},
            amount: {type: Number, default: 0.0},
        }
    ],
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'}, // Reference to Hotel model
}, {timestamps: true});

module.exports = {
    RoomSchema: roomSchema,
    Room: mongoose.model('Room', roomSchema)
};