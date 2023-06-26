const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: String,
    slug: String,
    cities: [{
        type: Schema.Types.ObjectId,
        ref: "City"
    }],
    country: {type: Schema.Types.ObjectId, ref: 'State'}, // Reference to State model
}, {timestamps: true});

module.exports = {
    StateSchema: stateSchema,
    State: mongoose.model('State', stateSchema)
};