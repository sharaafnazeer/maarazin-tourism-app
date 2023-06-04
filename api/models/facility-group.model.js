const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {FacilitySchema} = require('./facility.model')

const facilityGroupSchema = new Schema({
    name: String,
    facilities: [FacilitySchema]
}, {collection: 'facility_groups', timestamps: true});

module.exports = {
    AttributeGroupSchema: facilityGroupSchema,
    FacilityGroup: mongoose.model('FacilityGroup', facilityGroupSchema)
};