'use strict';

const passport = require("passport");
const jwt = require('jsonwebtoken');
const sendJson = require("../helpers/json");
const {addUser} = require("../services/user.service");
const {RecordFound} = require("../exceptions/errors");

const signInController = async (req, res, next) => {
    // console.log(req.body)
    passport.authenticate(
        'local',
        async (err, user) => {

            try {
                if (err) {
                    return next(err);
                }

                req.login(
                    user,
                    {session: false},
                    async (error) => {
                        if (error) return next(error);

                        const body = {_id: user._id, email: user.email};
                        const token = jwt.sign({user: body}, process.env.JWT_SECRET, {expiresIn: '6h'});
                        return sendJson(res, 200, {accessToken: token});
                    }
                );
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
}

const signUpController = async (req, res, next) => {
    try {
        const response = await addUser(req.body);
        if (response instanceof RecordFound) {
            return next(response)
        }
        return sendJson(res, 200, {title: 'Account registered', message: 'Account registered successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Account not registered',
                message: 'Something went wrong while registering account'
            }
        })
    }
}

const getUserController = (req, res) => {
    const {password, ...user} = req.decodedToken.user;
    return sendJson(res, 200, user);
}

module.exports = {
    signInController,
    signUpController,
    getUserController,
}