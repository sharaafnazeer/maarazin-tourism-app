const {RecordNotFound, InvalidOperation} = require("../exceptions/errors");
const {Room} = require("../models/room.model");
const {Hotel} = require("../models/hotel.model");
const {Reservation} = require("../models/reservation.model");
const {generateReferenceNumber} = require("../helpers/helpers");
const moment = require("moment");
const {sendCustomerBookingMail, sendAdminBookingMail} = require("../mail");
const {getRoleBySlug} = require("./role.service");
const {ROLES} = require("../constants/common");
const addReservation = async (reservationInfo) => {
    try {
        const hotel = await Hotel.findById(reservationInfo.hotelId).populate('users');
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

        const admins = [];
        const rexeAdmin = await getRoleBySlug('rexe-admin');
        if (rexeAdmin) {
            rexeAdmin.users.forEach((user) => {
                admins.push(user);
            });
        }
        hotel.users.forEach((user) => {
            admins.push(user);
        });

        // Send customer email
        sendCustomerBookingMail(reservation);
        // Send admin email
        const recipients = admins.map((admin) => admin.email);
        sendAdminBookingMail(recipients, reservation)

        return reservation;
    } catch (e) {
        throw e;
    }
}

const getReservations = async (user) => {
    try {
        let reservations = [];
        if (user?.role?.slug === ROLES.REXE_ADMIN || user?.role?.slug === ROLES.SUPER_ADMIN) {
            reservations = await Reservation.find().populate('room');
        } else if (user?.role?.slug === ROLES.HOTEL_ADMIN) {
            const tempReservations = await Reservation.find().populate({
                path: 'room',
                populate: {
                    path: 'hotel',
                    model: 'Hotel',
                    match: {
                        'users': {$in: [user._id]},
                    }
                }
            }).exec();

            for (let tempReservation of tempReservations) {
                if (tempReservation?.room?.hotel) {
                    reservations.push(tempReservation);
                }
            }
        }
        return reservations;
    } catch (e) {
        throw e;
    }
}

const getReservationById = async (reservationId, user) => {
    try {
        let reservation = null;
        if (user?.role?.slug === ROLES.REXE_ADMIN || user?.role?.slug === ROLES.SUPER_ADMIN) {
            reservation = await Reservation.findById(reservationId)
                .populate({
                    path: 'room',
                    populate: {
                        path: 'hotel',
                        model: 'Hotel',
                    }
                }).exec();
        } else if (user?.role?.slug === ROLES.HOTEL_ADMIN) {
            reservation = await Reservation.findById(reservationId)
                .populate({
                    path: 'room',
                    populate: {
                        path: 'hotel',
                        model: 'Hotel',
                        match: {
                            'users': {$in: [user._id]},
                        }
                    }
                }).exec();
        }
        if (!reservation || !reservation?.room.hotel) {
            return new RecordNotFound("Reservation not found", "Reservation with given ID not found");
        }
        return reservation;
    } catch (e) {
        throw e;
    }
}

const updateReservationStatusById = async (reservationId, status, user) => {
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