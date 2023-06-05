const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: String,
    facilityGroup: {type: Schema.Types.ObjectId, ref: 'FacilityGroup'}, // Reference to FacilityGroup model
    isPopular: Boolean,
}, {timestamps: true});

module.exports = {
    FacilitySchema: facilitySchema,
    Facility: mongoose.model('Facility', facilitySchema)
};