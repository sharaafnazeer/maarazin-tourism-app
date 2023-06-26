const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: String,
    slug: String,
    states: [{
        type: Schema.Types.ObjectId,
        ref: "State"
    }],
}, {timestamps: true});

module.exports = {
    CountrySchema: countrySchema,
    Country: mongoose.model('Country', countrySchema)
};