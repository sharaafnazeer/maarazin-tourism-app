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
            isActive: {type: Boolean, default: true},
            amount: {type: Number, default: 0.0},
        }
    ],
    addons: [
        {
            addon: {type: Schema.Types.ObjectId, ref: 'Addon'},
            amount: {type: Number, default: 0.0},
            isActive: {type: Boolean, default: true},
        }
    ],
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'}, // Reference to Hotel model
}, {timestamps: true});

module.exports = {
    RoomSchema: roomSchema,
    Room: mongoose.model('Room', roomSchema)
};