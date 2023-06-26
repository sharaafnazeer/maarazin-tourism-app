const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    slug: String,
    state: {type: Schema.Types.ObjectId, ref: 'State'}, // Reference to State model
}, {timestamps: true});

module.exports = {
    CitySchema: citySchema,
    City: mongoose.model('City', citySchema)
};