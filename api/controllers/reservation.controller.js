const sendJson = require("../helpers/json");
const {RecordNotFound, InvalidOperation} = require("../exceptions/errors");
const {
    addReservation,
    getReservations,
    getReservationById,
    updateReservationStatusById
} = require("../services/reservation.service");

const addReservationController = async (req, res, next) => {
    const reservation = req.body;
    try {
        const response = await addReservation(reservation);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, {
            title: 'Reservation added',
            message: 'Room reserved successfully',
            record: response
        });
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Reservation not saved',
                message: 'Something went wrong while saving reservation'
            }
        })
    }

}

const getReservationsController = async (req, res) => {
    try {
        const user = req?.decodedToken?.user;
        const response = await getReservations(user);
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving reservations'
            }
        });
    }

}

const getReservationByIdController = async (req, res, next) => {
    try {
        const user = req?.decodedToken?.user;
        const {reservationId} = req.params;
        const response = await getReservationById(reservationId, user);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving reservation'
            }
        });
    }
}

const updateReservationStatusByIdController = async (req, res, next) => {
    try {
        const user = req?.decodedToken?.user;
        const {reservationId} = req.params;
        const {status} = req.body;
        const response = await updateReservationStatusById(reservationId, status, user);

        if (response instanceof RecordNotFound || response instanceof InvalidOperation) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving reservation'
            }
        });
    }
}

module.exports = {
    addReservationController,
    getReservationsController,
    getReservationByIdController,
    updateReservationStatusByIdController
}