const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const addonSchema = new Schema({
    name: String,
}, {timestamps: true});

module.exports = {
    AddonSchema: addonSchema,
    Addon: mongoose.model('Addon', addonSchema)
};