const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Bcrypt = require('bcrypt');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const {getUserByEmail} = require("../services/user.service");
const {RecordNotFound} = require("../exceptions/errors");

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {

        try {
            const availableUser = await getUserByEmail(email);
            if (!availableUser) {
                return done(new RecordNotFound('User not found', 'It seems like you are not registered with our application!'), false)
            }

            const result = await Bcrypt.compare(password, availableUser.password);
            if (!result) {
                return done(new RecordNotFound('Invalid credential', 'You have entered a wrong email or password'), false);
            }
            return done(null, availableUser);
        } catch (error) {
            return done(error);
        }
    }
));

passport.use(
    new JWTStrategy(
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