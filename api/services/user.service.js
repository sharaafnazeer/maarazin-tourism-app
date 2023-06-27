const {RecordNotFound, RecordFound} = require("../exceptions/errors");
const {User} = require("../models/user.model");
const {Role} = require("../models/role.model");
const Bcrypt = require("bcrypt");
const addUser = async (userInfo) => {
    try {

        const user = await User.findOne({email: userInfo.email});
        if (user) {
            return new RecordFound("User found", "User found with the same email");
        }

        const role = await Role.findById(userInfo.roleId);
        if (!role) {
            return new RecordNotFound("Role not found", "Role with given ID not found");
        }

        const newUser = new User({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            phoneNumber: userInfo.phoneNumber,
            password: await Bcrypt.hash(userInfo.password, 10),
            role: role.id,
        });
        return await newUser.save();
    } catch (e) {
        throw e;
    }
}

const getUsers = async () => {
    try {
        return await User.find()
    } catch (e) {
        throw e;
    }
}

const getUserById = async (userId) => {
    try {
        const room = await User.findById(userId).populate('role');
        if (!room) {
            return new RecordNotFound("User not found", "User with given ID not found");
        }
        return room;
    } catch (e) {
        throw e;
    }
}

const getUserByEmail = async (email) => {
    try {
        return await User.findOne({email: email}).populate('role');
    } catch (e) {
        throw e;
    }
}
const getUsersByRole = async (role) => {
    try {
        return await User.find({role: role}).populate('role');
    } catch (e) {
        throw e;
    }
}

module.exports = {
    addUser,
    getUsers,
    getUserByEmail,
    getUserById,
    getUsersByRole
}