const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');


require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

require('./helpers/passport');

const app = express();
app.use(passport.initialize());

const indexRouter = require('./routes/index.route');
const usersRouter = require('./routes/user.route');
const attributesRouter = require('./routes/facility.route');
const hotelsRouter = require('./routes/hotel.route');
const hotelGroupsRouter = require('./routes/hotel-group.route');
const roomsRouter = require('./routes/room.route');
const rolesRouter = require('./routes/role.route');
const reservationsRouter = require('./routes/reservation.route');
const locationsRouter = require('./routes/location.route');
const authRouter = require('./routes/auth.route');
const seedersRouter = require('./routes/seeder.route');
const {COMMON} = require("./constants/common");
const {RecordNotFound, InvalidCredential, RecordFound, InvalidOperation} = require("./exceptions/errors");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const allowCors = function (req, res, next) {
    console.log("Came to CORS");

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
};

app.use(allowCors);

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log("MongoDB Connected");
});


app.use('/', indexRouter);

app.use(COMMON.API_PREFIX + '/admin/features', attributesRouter);
app.use(COMMON.API_PREFIX + '/admin/hotels', hotelsRouter);
app.use(COMMON.API_PREFIX + '/hotels', hotelsRouter);
app.use(COMMON.API_PREFIX + '/locations', locationsRouter);
app.use(COMMON.API_PREFIX + '/admin/hotel-groups', hotelGroupsRouter);
app.use(COMMON.API_PREFIX + '/admin/rooms', roomsRouter);
app.use(COMMON.API_PREFIX + '/admin/users', usersRouter);
app.use(COMMON.API_PREFIX + '/admin/roles', rolesRouter);
app.use(COMMON.API_PREFIX + '/reservations', reservationsRouter);
app.use(COMMON.API_PREFIX + '/admin/reservations', reservationsRouter);
app.use(COMMON.API_PREFIX + '/admin/seeders', seedersRouter);

app.use(COMMON.API_PREFIX + '/auth', authRouter);

app.use('/uploads', express.static('uploads'));
app.use((err, req, res, next) => {
    if (err instanceof RecordNotFound || err instanceof InvalidCredential || err instanceof RecordFound || err instanceof InvalidOperation) {
        return res.status(err.statusCode).json({
            error: {
                title: err.title,
                message: err.message
            }
        });
    }
    next(err);
});
// catch 404 and forward to error handler
app.use(function (req, res) {
    // next(createError(404));
    res.status(404).send('We are busy building this endpoint');
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
