const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {AttributeSchema} = require('./attribute.model')

const attributeGroupSchema = new Schema({
    name: String,
    attributes: [AttributeSchema]
}, {collection: 'attribute_groups', timestamps: true});

module.exports = {
    AttributeGroupSchema: attributeGroupSchema,
    AttributeGroup: mongoose.model('AttributeGroup', attributeGroupSchema)
};