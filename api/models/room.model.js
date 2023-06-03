const mongoose = require('mongoose')
const {AttributeSchema} = require("./attribute.model");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    benefits: String,
    roomImages: [String],
    sleeps: Schema.Types.Mixed, // Object field
    attributes: [AttributeSchema],
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'}, // Reference to Hotel model
}, {timestamps: true});

module.exports = {
    RoomSchema: roomSchema,
    Room: mongoose.model('Room', roomSchema)
};