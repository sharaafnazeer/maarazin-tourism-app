const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    refNumber: String,
    customer: Schema.Types.Mixed,
    user: {type: Schema.Types.ObjectId, ref: 'User'}, // Reference to User model
    room: {type: Schema.Types.ObjectId, ref: 'Room'}, // Reference to Room model
    numberOfRooms: Number,
    totalAmount: Number,
    query: Schema.Types.Mixed,
    roomSelections: Schema.Types.Mixed,
    arrivalDate: String,
    departureDate: String,
    status: {type: Number, default: 0}, // 0 - Pending, 1 - Confirmed, 2 - Rejected, 3 - Canceled
}, {timestamps: true});

module.exports = {
    ReservationSchema: reservationSchema,
    Reservation: mongoose.model('Reservation', reservationSchema)
};