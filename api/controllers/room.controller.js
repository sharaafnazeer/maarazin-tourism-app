const sendJson = require("../helpers/json");
const {RecordNotFound} = require("../exceptions/errors");
const {addRoom, updateRoom, getRooms, getRoomById} = require("../services/room.service");

const addRoomController = async (req, res, next) => {
    const roomImages = req.files['roomImages']; // Access uploaded room images
    const room = req.body;

    if (roomImages && Array.isArray(roomImages))
        room.roomImages = roomImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });
    try {
        const response = await addRoom(room);

        if (response instanceof RecordNotFound) {
            return next(response)
        }

        return sendJson(res, 200, {title: 'Room saved', message: 'Room saved successfully', record: response});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Room not saved',
                message: 'Something went wrong while saving room'
            }
        })
    }

}

const updateRoomController = async (req, res, next) => {
    try {
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

module.exports = {
    addRoomController,
    updateRoomController,
    getRoomsController,
    getRoomByIdController
}