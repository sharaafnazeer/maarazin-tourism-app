const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const indexRouter = require('./routes/index.route');
const usersRouter = require('./routes/user.route');
const attributesRouter = require('./routes/facility.route');
const hotelsRouter = require('./routes/hotel.route');
const {COMMON} = require("./constants/common");
const {RecordNotFound} = require("./exceptions/errors");

const app = express();

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

app.use(COMMON.API_PREFIX, attributesRouter);
app.use(COMMON.API_PREFIX + '/hotels', hotelsRouter);
app.use(COMMON.API_PREFIX + '/users', usersRouter);

app.use('/uploads', express.static('uploads'));
app.use((err, req, res, next) => {
    if (err instanceof RecordNotFound) {
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
app.use(function (req, res, next) {
    // next(createError(404));
    res.status(404).send('We are busy building this endpoint');
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
