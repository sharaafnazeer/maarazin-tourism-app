const {RecordNotFound, RecordFound, InvalidOperation} = require("../exceptions/errors");
const {User} = require("../models/user.model");
const {Role} = require("../models/role.model");
const Bcrypt = require("bcrypt");
const {sendRegistrationConfirmationMail} = require("../mail");
const {sign} = require("jsonwebtoken");
const {TOKEN_TYPE} = require("../constants/common");
const addUser = async (userInfo) => {
    try {

        const user = await User.findOne({email: userInfo.email});
        if (user) {
            return new RecordFound("User found", "User found with the same email");
        }

        const role = await Role.findOne({slug: userInfo.roleName});
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
            status: 0,
        });
        const savedUser = await newUser.save();

        const token = sign({
            data: {
                id: savedUser._id,
                type: TOKEN_TYPE.REGISTRATION_TOKEN
            }
        }, process.env.JWT_SECRET, {expiresIn: '1h'});

        sendRegistrationConfirmationMail(savedUser, token);
        return savedUser;
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
        const user = await User.findById(userId).populate('role');
        if (!user) {
            return new RecordNotFound("User not found", "User with given ID not found");
        }
        return user;
    } catch (e) {
        throw e;
    }
}

const updateUserStatus = async (userId) => {
    try {
        const user = await User.findById(userId).populate('role');
        if (!user) {
            return new RecordNotFound("User not found", "User with given ID not found");
        }

        if (user.status === 1) {
            return new InvalidOperation("Account verified", "Account already verified");
        }

        user.status = 1;
        await user.save();
        return user;
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
    getUsersByRole,
    updateUserStatus
}