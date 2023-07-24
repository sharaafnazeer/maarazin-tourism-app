const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    password: String,
    role: {type: Schema.Types.ObjectId, ref: 'Role'}, // Reference to Role model,
    status: Number,
}, {timestamps: true});

module.exports = {
    UserSchema: userSchema,
    User: mongoose.model('User', userSchema)
};