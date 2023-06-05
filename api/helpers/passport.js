const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Bcrypt = require('bcrypt');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const db = require('../db');
const {User} = require("../models/user.model");

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        async (req, email, password, done) => {
            try {

                const user = db.collection('users').where("email", '==', email);
                const availableUser = await user.get();
                if (!availableUser.empty) {
                    return done(null, false, {message: 'It seems like you are already registered with our application!'})
                }
                const newUser = new User(req.body.firstName,
                    req.body.lastName,
                    email,
                    await Bcrypt.hash(password, 10),
                    req.body.phoneNumber,
                    req.body.address, 0);

                // const object = newUser.getObject();
                // await db.collection('users').doc().set(object);
                // let savedUser = await db.collection('users').where("email", '==', email).get();
                // savedUser = savedUser.docs[0];

                return done(null, {...object, id: savedUser.id});

            } catch (error) {
                console.log(error)
                done(error);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = db.collection('users').where("email", '==', email);
                const availableUser = await user.get();

                if (availableUser.empty) {
                    return done(null, false, {message: 'It seems like you are not registered with our application!'})
                }

                const actualUser = availableUser.docs[0].data();

                const newUser = new User(actualUser.firstName, actualUser.lastName, actualUser.email,
                    actualUser.password, actualUser.phone, actualUser.address, actualUser.status,
                    actualUser.lastLocation, actualUser.driving, actualUser.firebaseToken);
                newUser.setId(availableUser.docs[0].id);

                const result = await Bcrypt.compare(password, newUser.getPassword());
                if (!result) {
                    return done(null, false, {message: 'Invalid password', verified: true});
                }

                if (newUser.getStatus() !== 1) {
                    return done(null, false, {verified: false, user: newUser.getObject()})
                } else {
                    return done(null, {...newUser.getObject()});
                }
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);