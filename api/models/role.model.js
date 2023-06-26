const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: String,
    slug: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
}, {timestamps: true});

module.exports = {
    RoleSchema: roleSchema,
    Role: mongoose.model('Role', roleSchema)
};