const sendJson = require("../helpers/json");
const {RecordNotFound, InvalidOperation} = require("../exceptions/errors");
const {addRoom, updateRoom, getRooms, getRoomById, deleteRoomById} = require("../services/room.service");
const {ROLES} = require("../constants/common");

const addRoomController = async (req, res, next) => {

    const user = req.decodedToken.user;

    if (!(user.role.slug === ROLES.SUPER_ADMIN || user.role.slug === ROLES.REXE_ADMIN)) {
        return next(new InvalidOperation("Not Allowed", "You are not allowed to add a room"))
    }

    const roomImages = req.files['roomImages']; // Access uploaded room images
    const room = req.body;

    if (roomImages && Array.isArray(roomImages))
        room.roomImages = roomImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });
    try {
        const response = await addRoom(room);

        if (response instanceof RecordNotFound) {
            return next(response);
        }

        return sendJson(res, 200, {title: 'Room saved', message: 'Room saved successfully', record: response});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Room not saved',
                message: 'Something went wrong while saving room'
            }
        });
    }

}

const updateRoomController = async (req, res, next) => {
    try {

        const user = req.decodedToken.user;

        if (!(user.role.slug === ROLES.SUPER_ADMIN || user.role.slug === ROLES.REXE_ADMIN)) {
            return next(new InvalidOperation("Not Allowed", "You are not allowed to update the room"))
        }

        const {roomId} = req.params
        const room = req.body;
        const roomImages = req.files['roomImages']; // Access uploaded banner images

        if (roomImages && Array.isArray(roomImages))
            room.roomImages = roomImages.map((file) => {
                return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
            });

        const response = await updateRoom(roomId, room);

        if (response instanceof RecordNotFound) {
            return next(response)
        }

        return sendJson(res, 200, {title: 'Room updated', message: 'Room updated successfully', record: response});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Room not updated',
                message: 'Something went wrong while updating room'
            }
        });
    }

}

const getRoomsController = async (req, res, next) => {
    try {
        const response = await getRooms();
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving rooms'
            }
        });
    }

}
const getRoomByIdController = async (req, res, next) => {
    try {
        const {roomId} = req.params
        const response = await getRoomById(roomId);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving room'
            }
        });
    }

}

const deleteRoomByIdController = async (req, res, next) => {
    try {

        const user = req.decodedToken.user;

        if (!(user.role.slug === ROLES.SUPER_ADMIN || user.role.slug === ROLES.REXE_ADMIN)) {
            return next(new InvalidOperation("Not Allowed", "You are not allowed to delete the room"))
        }

        const {roomId} = req.params
        const response = await deleteRoomById(roomId);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving room'
            }
        });
    }

}

module.exports = {
    addRoomController,
    updateRoomController,
    getRoomsController,
    getRoomByIdController,
    deleteRoomByIdController
}