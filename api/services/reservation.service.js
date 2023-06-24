const {RecordNotFound, InvalidOperation} = require("../exceptions/errors");
const {Room} = require("../models/room.model");
const {Hotel} = require("../models/hotel.model");
const {Reservation} = require("../models/reservation.model");
const {generateReferenceNumber} = require("../helpers/helpers");
const moment = require("moment");
const addReservation = async (reservationInfo) => {
    try {

        const hotel = await Hotel.findById(reservationInfo.hotelId);
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }

        const roomForHotel = await Room.findOne({hotel: reservationInfo.hotelId, _id: reservationInfo.roomId});
        if (!roomForHotel) {
            return new RecordNotFound("Room not found", "Room with given ID not found");
        }

        const reservation = new Reservation({
            refNumber: generateReferenceNumber(),
            customer: reservationInfo.customer,
            room: reservationInfo.roomId,
            roomSelections: reservationInfo.roomSelections,
            numberOfRooms: reservationInfo.numberOfRooms,
            totalAmount: reservationInfo.totalAmount,
            query: reservationInfo.query,
            arrivalDate: reservationInfo.query?.from || "",
            departureDate: reservationInfo.query?.to || "",
            reservationDateTime: moment().format('YYYY-MM-DD HH:mm:ss')
        });

        reservation.save();
        return reservation;
    } catch (e) {
        throw e;
    }
}

const getReservations = async () => {
    try {
        return await Reservation.find().populate('room')
    } catch (e) {
        throw e;
    }
}

const getReservationById = async (reservationId) => {
    try {
        const reservation = await Reservation.findById(reservationId)
            .populate({
                path: 'room',
                populate: {
                    path: 'hotel',
                    model: 'Hotel'
                }
            }).exec();
        if (!reservation) {
            return new RecordNotFound("Reservation not found", "Reservation with given ID not found");
        }
        return reservation;
    } catch (e) {
        throw e;
    }
}

const updateReservationStatusById = async (reservationId, status) => {
    try {
        const reservation = await Reservation.findById(reservationId)
        if (!reservation) {
            return new RecordNotFound("Reservation not found", "Reservation with given ID not found");
        }
        if (reservation.status === 1 && (status === 2 || status === 3)) {
            return new InvalidOperation("Reservation confirmed", "Reservation already confirmed");
        }
        if (reservation.status === 2 && (status === 1 || status === 3)) {
            return new InvalidOperation("Reservation rejected", "Reservation already rejected");
        }
        if (reservation.status === 3 && (status === 1 || status === 2)) {
            return new InvalidOperation("Reservation canceled", "Reservation already canceled");
        }

        reservation.status = status;
        reservation.save();
        return reservation;

    } catch (e) {
        throw e;
    }
}

module.exports = {
    addReservation, getReservations, getReservationById, updateReservationStatusById
}