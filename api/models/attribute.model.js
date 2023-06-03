const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const attributeSchema = new Schema({
    name: String,
    attributeGroup: {type: Schema.Types.ObjectId, ref: 'AttributeGroup'}, // Reference to AttributeGroup model
}, {timestamps: true});

module.exports = {
    AttributeSchema: attributeSchema,
    Attribute: mongoose.model('Attribute', attributeSchema)
};