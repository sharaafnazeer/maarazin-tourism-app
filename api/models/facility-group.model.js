const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const facilityGroupSchema = new Schema({
    name: String,
    facilities: [{
        type: Schema.Types.ObjectId,
        ref: "Facility"
    }],
}, {collection: 'facility_groups', timestamps: true});

module.exports = {
    AttributeGroupSchema: facilityGroupSchema,
    FacilityGroup: mongoose.model('FacilityGroup', facilityGroupSchema)
};