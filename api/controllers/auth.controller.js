'use strict';

const passport = require("passport");
const jwt = require('jsonwebtoken');
const sendJson = require("../helpers/json");
const {addUser, updateUserStatus} = require("../services/user.service");
const {RecordFound, RecordNotFound, InvalidOperation} = require("../exceptions/errors");
const {TOKEN_TYPE} = require("../constants/common");

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
        if (response instanceof RecordFound || response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, {title: 'Account registered', message: 'Account registered successfully. Please check your mail box to verify your account'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Account not registered',
                message: 'Something went wrong while registering account'
            }
        })
    }
}

const confirmUserController = async (req, res, next) => {
    try {
        const {token} = req.body;

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        if (!(decoded.data.id && decoded.data.type === TOKEN_TYPE.REGISTRATION_TOKEN)) {
            return sendJson(res, 400, {
                error: {
                    title: 'Account not confirmed',
                    message: 'Validation parameters are not valid'
                }
            });
        }
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (decoded.exp < currentTimestamp) {
            return sendJson(res, 403, {
                error: {
                    title: 'Account not confirmed',
                    message: 'Validation token expired or invalid'
                }
            })
        }
        const response = await updateUserStatus(decoded.data.id);
        if (response instanceof RecordNotFound || response instanceof InvalidOperation) {
            return next(response)
        }

        return sendJson(res, 200, {title: 'Account confirmed', message: 'Account confirmed successfully'});
    } catch (e) {
        return sendJson(res, 403, {
            error: {
                title: 'Account not confirmed',
                message: 'Validation token expired or invalid'
            }
        })
    }
}

const getUserController = (req, res) => {
    const {password, ...user} = req?.decodedToken?.user;
    return sendJson(res, 200, user);
}

module.exports = {
    signInController,
    signUpController,
    getUserController,
    confirmUserController,
}