const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mostPopularFacilitySchema = new Schema({
    _id: Number,
    name: String,
    imageUrl: String,
    isActive: {type: Boolean, default: true},
}, {collection: 'popular_facilities', timestamps: true});

module.exports = {
    PopularFacilitySchema: mostPopularFacilitySchema,
    PopularFacility: mongoose.model('PopularFacility', mostPopularFacilitySchema)
};