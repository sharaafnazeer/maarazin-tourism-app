'use strict';

const passport = require("passport");
const jwt = require('jsonwebtoken');
const sendJson = require("../helpers/json");
const {addUser} = require("../services/user.service");
const {RecordFound} = require("../exceptions/errors");

const signInController = (req, res, next) => {

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

                        const body = {id: user.id, email: user.email};
                        const token = jwt.sign({user: body}, process.env.JWT_SECRET);

                        return sendJson(res, 200, {
                            accessToken: token,
                        })
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

const checkAuthController = (req, res) => {
    return sendJson(res, 200, {
        title: "Success",
        message: "Authenticated"
    });
}

module.exports = {
    signInController,
    signUpController,
    checkAuthController,
}